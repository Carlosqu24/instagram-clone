import { Post } from "models/post";

import profileImage from "../../public/profile-image.jpg"

import lamborghiniPhoto from "../../public/postsList/lamborghini_aventador.jpg"
import galaxyPhoto from "../../public/postsList/galaxy.jpg"
import jasonStahamPhoto from "../../public/postsList/jason-statham-mens-health-1558438377.jpg"

import lamborghiniProfileImage from "../../public/postsList/lamborghini_profile_image.png"
import nasaProfileImage from "../../public/postsList/NASA_profile_image.png"
import jasonStathamProfileImage from "../../public/postsList/js.jpg"

import firstUserPostImage from "../../public/userPostsList/plage.jpg"
import secondUserPostImage from "../../public/userPostsList/2.webp"
import thirdUserPostImage from "../../public/userPostsList/3.webp"
import fourthUserPostImage from "../../public/userPostsList/4.jpeg"
import fifthUserPostImage from "../../public/userPostsList/5.jpg"
import sixthUserPostImage from "../../public/userPostsList/6.png"

export const mockPostsList: Post[] = [
    {
        id: 1,
        imageURL:
            lamborghiniPhoto,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consectetur labore omnis ratione blanditiis nam quis voluptas aliquam quo eos!',
        totalLikes: 23,
        totalComments: 2,
        username: 'lamborghini',
        profileImageUrl:
            lamborghiniProfileImage
    },
    {
        id: 2,
        imageURL:
            galaxyPhoto,
        description: 'Awesome description',
        totalLikes: 424,
        totalComments: 2,
        username: 'nasa',
        profileImageUrl:
            nasaProfileImage
    },
    {
        id: 3,
        imageURL:
            jasonStahamPhoto,
        description: 'Awesome description',
        totalLikes: 455,
        totalComments: 2,
        username: 'jstatham',
        profileImageUrl:
            jasonStathamProfileImage
    }
]

export const mockUserPostsList: Post[] = [
    {
        id: "056b6a14-9d14-4590-88e7-29fec5e20faf",
        totalLikes: 23,
        totalComments: 12,
        description: "Awesome description",
        username: "carlos_qu24",
        profileImageUrl: profileImage,
        imageURL:
            firstUserPostImage
    },
    {
        id:
            "872d7878-9e85-49a6-aba7-47e69dd7d5dd",
        totalLikes: 23,
        totalComments: 12,
        description: "Awesome description",
        username: "carlos_qu24",
        profileImageUrl: profileImage,
        imageURL:
            secondUserPostImage
    },
    {
        id:
            "848eb0ba-3d73-4ec6-b45c-ef43870a3197",
        totalLikes: 23,
        totalComments: 12,
        description: "Awesome description",
        username: "carlos_qu24",
        profileImageUrl: profileImage,
        imageURL:
            thirdUserPostImage
    },
    {
        id: "292a6491-3a0f-46ef-80e5-d0633b6e22cc",
        totalLikes: 23,
        totalComments: 12,
        description: "Awesome description",
        username: "carlos_qu24",
        profileImageUrl: profileImage,
        imageURL:
            fourthUserPostImage
    },
    {
        id:
            "ed8aeb9d-7b51-47af-8028-6ce1e41d8bd3",
        totalLikes: 23,
        totalComments: 12,
        description: "Awesome description",
        username: "carlos_qu24",
        profileImageUrl: profileImage,
        imageURL:
            fifthUserPostImage
    },
    {
        id:
            "954211d9-3304-45f2-a447-b87876f7c747",
        totalLikes: 23,
        totalComments: 12,
        description: "Awesome description",
        username: "carlos_qu24",
        profileImageUrl: profileImage,
        imageURL:
            sixthUserPostImage
    }
]