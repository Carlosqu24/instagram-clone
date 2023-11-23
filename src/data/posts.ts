import { Post } from "models/post";

import profileImage from "../../public/profile-image.jpg"

import lamborghiniPhoto from "../../public/postsList/lamborghini_aventador.jpg"
import galaxyPhoto from "../../public/postsList/galaxy.jpg"
import jasonStahamPhoto from "../../public/postsList/jason-statham-mens-health-1558438377.jpg"

import lamborghiniProfileImage from "../../public/postsList/lamborghini_profile_image.png"
import nasaProfileImage from "../../public/postsList/NASA_profile_image.png"
import jasonStathamProfileImage from "../../public/postsList/js.jpeg"

import firstUserPostImage from "../../public/userPostsList/plage.jpg"
import secondUserPostImage from "../../public/userPostsList/2.webp"
import thirdUserPostImage from "../../public/userPostsList/3.webp"
import fourthUserPostImage from "../../public/userPostsList/4.jpeg"
import fifthUserPostImage from "../../public/userPostsList/5.jpg"
import sixthUserPostImage from "../../public/userPostsList/6.png"

export const mockPostsList: Post[] = [
    {
        id: "1",
        thumbnailUrl:
            lamborghiniPhoto,
        comments: {
            dataList: [],
            count: 23
        },
        likes: {
            dataList: [],
            count: 231
        },
        user: {
            username: "lamborghini",
            biography: "Awesome biography",
            displayName: "Lamborghini",
            profileImageUrl: lamborghiniProfileImage
        },
        createdAt: "",
        description: "Awesome description"
    },
    {
        id: "2",
        thumbnailUrl:
            galaxyPhoto,
        comments: {
            dataList: [],
            count: 42
        },
        likes: {
            dataList: [],
            count: 489
        },
        user: {
            username: "nasa",
            biography: "Awesome biography",
            displayName: "Nasa",
            profileImageUrl: nasaProfileImage
        },
        createdAt: "",
        description: "Awesome description"
    },
    {
        id: "3",
        thumbnailUrl:
            jasonStahamPhoto,
        comments: {
            dataList: [],
            count: 0
        },
        likes: {
            dataList: [],
            count: 738
        },
        user: {
            username: "jstatham",
            biography: "Awesome biography",
            displayName: "Jason Statham",
            profileImageUrl: jasonStathamProfileImage
        },
        createdAt: "",
        description: "Awesome description"
    }
]

export const mockUserPostsList: Post[] = [
    {
        id: "056b6a14-9d14-4590-88e7-29fec5e20faf",
        thumbnailUrl:
            firstUserPostImage,
        comments: {
            dataList: [],
            count: 0
        },
        likes: {
            dataList: [],
            count: 23
        },
        user: {
            username: "carlos_qu24",
            biography: "Awesome biography",
            displayName: "Carlos Quesada Umaña",
            profileImageUrl: profileImage
        },
        createdAt: "",
        description: "Awesome description"
    },
    {
        id:
            "872d7878-9e85-49a6-aba7-47e69dd7d5dd",
        thumbnailUrl:
            secondUserPostImage,
        comments: {
            dataList: [],
            count: 0
        },
        likes: {
            dataList: [],
            count: 4
        },
        user: {
            username: "carlos_qu24",
            biography: "Awesome biography",
            displayName: "Carlos Quesada Umaña",
            profileImageUrl: profileImage
        },
        createdAt: "",
        description: "Awesome description"
    },
    {
        id:
            "848eb0ba-3d73-4ec6-b45c-ef43870a3197",
        thumbnailUrl:
            thirdUserPostImage,
        comments: {
            dataList: [],
            count: 0
        },
        likes: {
            dataList: [],
            count: 664
        },
        user: {
            username: "carlos_qu24",
            biography: "Awesome biography",
            displayName: "Carlos Quesada Umaña",
            profileImageUrl: profileImage
        },
        createdAt: "",
        description: "Awesome description"
    },
    {
        id: "292a6491-3a0f-46ef-80e5-d0633b6e22cc",
        thumbnailUrl:
            fourthUserPostImage,
        comments: {
            dataList: [],
            count: 0
        },
        likes: {
            dataList: [],
            count: 9
        },
        user: {
            username: "carlos_qu24",
            biography: "Awesome biography",
            displayName: "Carlos Quesada Umaña",
            profileImageUrl: profileImage
        },
        createdAt: "",
        description: "Awesome description"
    },
    {
        id:
            "ed8aeb9d-7b51-47af-8028-6ce1e41d8bd3",
        thumbnailUrl:
            fifthUserPostImage,
        comments: {
            dataList: [],
            count: 0
        },
        likes: {
            dataList: [],
            count: 742
        },
        user: {
            username: "carlos_qu24",
            biography: "Awesome biography",
            displayName: "Carlos Quesada Umaña",
            profileImageUrl: profileImage
        },
        createdAt: "",
        description: "Awesome description"
    },
    {
        id:
            "954211d9-3304-45f2-a447-b87876f7c747",
        thumbnailUrl:
            sixthUserPostImage,
        comments: {
            dataList: [],
            count: 0
        },
        likes: {
            dataList: [],
            count: 56
        },
        user: {
            username: "carlos_qu24",
            biography: "Awesome biography",
            displayName: "Carlos Quesada Umaña",
            profileImageUrl: profileImage
        },
        createdAt: "",
        description: "Awesome description"
    }
]