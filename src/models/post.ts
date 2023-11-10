import { User } from "./user"

export interface Comment {
    id: string
    text: string
    createdAt: string
    user: User
}

export interface Like {
    id: string
    user: {
        username: string
        displayName: string
        profileImageUrl: string
    }
}

export interface Post {
    id: string
    description: string
    thumbnailUrl: string,
    createdAt: string
    user: {
        username: string
        profileImageUrl: string,
        displayName: string
        biography: string
    },
    comments: {
        dataList: Comment[],
        count: number
    },
    likes: {
        dataList: Like[],
        count: number
    }
}