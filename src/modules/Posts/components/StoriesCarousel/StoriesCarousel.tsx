import React from 'react'

import wildProjectProfileImage from '../../../../../public/storiesList/wild_project_profile_image.jpg'
import spacexProfileImage from '../../../../../public/storiesList/spacex_profile_image.jpg'
import blueOriginProfileImage from '../../../../../public/storiesList/blue_origin_profile_image.jpg'
import appleProfileImage from '../../../../../public/storiesList/apple_profile_image.jpg'
import maseratiProfileImage from '../../../../../public/storiesList/maserati_profile_image.webp'
import githubProfileImage from '../../../../../public/storiesList/github_profile_image.png'
import cr7ProfileImage from '../../../../../public/storiesList/cr7_profile_image.jpg'
import messiProfileImage from '../../../../../public/storiesList/messi_profile_image.webp'

const storiesList = [
  {
    id: crypto.randomUUID(),
    profileImageUrl: wildProjectProfileImage,
    title: 'the.wildproject'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl: spacexProfileImage,
    title: 'spacex'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl: blueOriginProfileImage,
    title: 'blueorigin'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl: appleProfileImage,
    title: 'apple'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl: maseratiProfileImage,
    title: 'maseratti'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl: githubProfileImage,
    title: 'github'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl: messiProfileImage,
    title: 'messi'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl: cr7ProfileImage,
    title: 'cr7cristianoronaldo'
  }
]

const StoriesCarousel = () => {
  return (
    <div className=" mx-auto mb-[48px] border-solid border-[1px] border-[#fff]">
      <ul className="  w-[100%] flex space-x-2 font-serif overflow-hidden">
        {storiesList.map((storie) => (
          <li className="flex flex-col items-center space-y-1 ">
            <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-1 rounded-full">
              <a
                className=" bg-white block rounded-full p-1 hover:-rotate-6 transform transition"
                href="/"
              >
                <img
                  className="max-w-none h-[56px] w-[56px] rounded-full object-cover"
                  src={storie.profileImageUrl}
                  alt="cute kitty"
                />
              </a>
            </div>
            <a href="#">{storie.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StoriesCarousel
