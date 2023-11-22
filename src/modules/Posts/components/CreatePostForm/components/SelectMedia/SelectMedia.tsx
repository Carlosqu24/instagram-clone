import { useModal } from 'context/Modal/ModalContext'
import React from 'react'
import CreateNewPost, {
  CreateNewPostHeader
} from '../CreateNewPost/CreateNewPost'
import { ModalStyles } from 'components/Modal/Modal'

const modalStyles: ModalStyles = {
  modalContainer:
    'z-50 bg-white mx-auto rounded-md shadow-lg w-[780px] h-[440px] z-10000000',
  modalHeader: 'p-2 w-full text-center flex justify-content-between',
  modalContent: 'modal-content flex justify-content-between'
}

const SelectMedia = () => {
  return (
    <div className="flex flex-col h-full items-center justify-content-center">
      <h1 className="text-[20px]">Drag photos and videos here</h1>
      <button className="bg-[#0095F6] text-[#fff] py-[7px] px-[16px] mt-[24px]">
        Select From Computer
      </button>
    </div>
  )
}

export const SelectMediaHeader = () => {
  const { openModal } = useModal()

  return (
    <div className="w-full flex items-center justify-content-between">
      <h1 className="text-center">Create new post</h1>
      <button
        className="ml-auto"
        onClick={() =>
          openModal(<CreateNewPost />, <CreateNewPostHeader />, modalStyles)
        }
      >
        next
      </button>
    </div>
  )
}

export default SelectMedia
