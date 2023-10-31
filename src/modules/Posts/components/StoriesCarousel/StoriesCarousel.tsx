import React from 'react'

const storiesList = [
  {
    id: crypto.randomUUID(),
    profileImageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F294%2F294033.jpg&f=1&nofb=1&ipt=baa2ff35bffeea6fe5501d4838bb0b1efb7de1077e0d5b477a7ee7d7d65d9ee6&ipo=images',
    title: '_gquiros'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F294%2F294033.jpg&f=1&nofb=1&ipt=baa2ff35bffeea6fe5501d4838bb0b1efb7de1077e0d5b477a7ee7d7d65d9ee6&ipo=images',
    title: '_gquiros'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F294%2F294033.jpg&f=1&nofb=1&ipt=baa2ff35bffeea6fe5501d4838bb0b1efb7de1077e0d5b477a7ee7d7d65d9ee6&ipo=images',
    title: '_gquiros'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F294%2F294033.jpg&f=1&nofb=1&ipt=baa2ff35bffeea6fe5501d4838bb0b1efb7de1077e0d5b477a7ee7d7d65d9ee6&ipo=images',
    title: '_gquiros'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F294%2F294033.jpg&f=1&nofb=1&ipt=baa2ff35bffeea6fe5501d4838bb0b1efb7de1077e0d5b477a7ee7d7d65d9ee6&ipo=images',
    title: '_gquiros'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F294%2F294033.jpg&f=1&nofb=1&ipt=baa2ff35bffeea6fe5501d4838bb0b1efb7de1077e0d5b477a7ee7d7d65d9ee6&ipo=images',
    title: '_gquiros'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F294%2F294033.jpg&f=1&nofb=1&ipt=baa2ff35bffeea6fe5501d4838bb0b1efb7de1077e0d5b477a7ee7d7d65d9ee6&ipo=images',
    title: '_gquiros'
  },
  {
    id: crypto.randomUUID(),
    profileImageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F294%2F294033.jpg&f=1&nofb=1&ipt=baa2ff35bffeea6fe5501d4838bb0b1efb7de1077e0d5b477a7ee7d7d65d9ee6&ipo=images',
    title: '_gquiros'
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
