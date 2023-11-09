import { Post } from "models/post";

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
        username: 'programador.x',
        profileImageUrl:
            lamborghiniProfileImage
    },
    {
        id: 2,
        imageURL:
            galaxyPhoto,
        description: 'Awesome description',
        totalLikes: 424,
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
        username: 'jstatham',
        profileImageUrl:
            jasonStathamProfileImage
    }
]

export const mockUserPostsList: Post[] = [
    {
        id: crypto.randomUUID(),
        totalLikes: 23,
        description: "",
        username: "",
        profileImageUrl: "",
        imageURL:
            firstUserPostImage
    },
    {
        id: crypto.randomUUID(),
        totalLikes: 23,
        description: "",
        username: "",
        profileImageUrl: "",
        imageURL:
            secondUserPostImage
    },
    {
        id: crypto.randomUUID(),
        totalLikes: 23,
        description: "",
        username: "",
        profileImageUrl: "",
        imageURL:
            thirdUserPostImage
    },
    {
        id: crypto.randomUUID(),
        totalLikes: 23,
        description: "",
        username: "",
        profileImageUrl: "",
        imageURL:
            fourthUserPostImage
    },
    {
        id: crypto.randomUUID(),
        totalLikes: 23,
        description: "",
        username: "",
        profileImageUrl: "",
        imageURL:
            fifthUserPostImage
    },
    {
        id: crypto.randomUUID(),
        totalLikes: 23,
        description: "",
        username: "",
        profileImageUrl: "",
        imageURL:
            sixthUserPostImage
    }
]