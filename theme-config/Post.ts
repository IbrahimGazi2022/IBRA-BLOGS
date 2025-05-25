export interface Post {
    id: number;
    category: string;
    title: string;
    author: string;
    date: string;
    imageUrl: string;
    height?: number;
}

export const posts: Post[] = [
    {
        id: 1,
        category: "Sports News",
        title: "Industrial",
        author: "Ibrahim",
        date: "May 20, 2021",
        imageUrl: "https://picsum.photos/seed/1/800/600",
    },
    {
        id: 2,
        category: "World News",
        title: "Global Economy",
        author: "Ibrahim",
        date: "June 10, 2021",
        imageUrl: "https://picsum.photos/seed/2/800/600",
    },
    {
        id: 3,
        category: "Tech News",
        title: "AI Revolution",
        author: "Ibrahim",
        date: "July 5, 2021",
        imageUrl: "https://picsum.photos/seed/3/800/600",
    },
    {
        id: 4,
        category: "Entertainment",
        title: "Film Festival 2021",
        author: "Ibrahim",
        date: "August 15, 2021",
        imageUrl: "https://picsum.photos/seed/4/800/600",
    },
    {
        id: 5,
        category: "Health",
        title: "Vaccine Updates",
        author: "Ibrahim",
        date: "September 1, 2021",
        imageUrl: "https://picsum.photos/seed/5/800/600",
    },
    {
        id: 6,
        category: "Education",
        title: "Online Learning Growth",
        author: "Ibrahim",
        date: "October 12, 2021",
        imageUrl: "https://picsum.photos/seed/6/800/600",
    },
    {
        id: 7,
        category: "Science",
        title: "Mars Rover Discovery",
        author: "Ibrahim",
        date: "November 3, 2021",
        imageUrl: "https://picsum.photos/seed/7/800/600",
    },
    {
        id: 8,
        category: "Politics",
        title: "Election Results",
        author: "Ibrahim",
        date: "December 20, 2021",
        imageUrl: "https://picsum.photos/seed/8/800/600",
    },
    {
        id: 9,
        category: "Travel",
        title: "Top Destinations 2022",
        author: "Ibrahim",
        date: "January 5, 2022",
        imageUrl: "https://picsum.photos/seed/9/800/600",
    },
    {
        id: 10,
        category: "Business",
        title: "Startup Boom",
        author: "Ibrahim",
        date: "February 14, 2022",
        imageUrl: "https://picsum.photos/seed/10/800/600",
    }
];

export const featuredPost: Post = {
    id: 10,
    category: 'featured',
    title: 'Featured Story of the Month',
    author: 'Editor',
    date: '01-12-2025',
    imageUrl: 'https://picsum.photos/seed/featured/800/830',
    height: 830
};

export default { posts, featuredPost };
