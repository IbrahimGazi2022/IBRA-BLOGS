import { NextResponse } from "next/server"
import { registerUser } from "@/app/controllers/authController";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const newUser = await registerUser(body);

        return NextResponse.json(
            {
                success: true,
                data: newUser
            },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Registration failed"
            },
            { status: error instanceof Error ? 400 : 500 }
        );
    }
}