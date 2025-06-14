import { db } from "../lib/db";
import { hash } from "bcryptjs";
import { z } from "zod";

const registerSchema = z.object({
    firstName: z.string()
        .min(2, "First name must be at least 2 characters long")
        .transform(str => str.trim()),
    lastName: z.string()
        .min(2, "Last name must be at least 2 characters long")
        .transform(str => str.trim()),
    email: z.string()
        .email("Invalid email format")
        .transform(str => str.toLowerCase().trim()),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Must contain at least one uppercase letter")
        .regex(/[a-z]/, "Must contain at least one lowercase letter")
        .regex(/[0-9]/, "Must contain at least one number")
});

export const registerUser = async (userData: unknown) => {
    const validationResult = registerSchema.safeParse(userData);

    if (!validationResult.success) {
        const errorMessages = validationResult.error.issues
            .map(issue => issue.message)
            .join(". ");
        throw new Error(errorMessages);
    }
    const validatedData = validationResult.data;

    const existingUser = await db.user.findUnique({
        where: { email: validatedData.email }
    });

    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    try {
        const hashedPassword = await hash(validatedData.password, 10);

        const newUser = await db.user.create({
            data: {
                firstName: validatedData.firstName,
                lastName: validatedData.lastName,
                email: validatedData.email,
                password: hashedPassword
            }, select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true
            }
        })

        return newUser
    } catch (error) {
        console.error("Registration error:", error);
        throw new Error("Failed to create user. Please try again.");
    }

}
