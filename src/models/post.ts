export interface Post {
    id: string | number
    imageURL: string,
    description: string,
    totalLikes: number,
    totalComments: number
    username: string,
    profileImageUrl: string
}