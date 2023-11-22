import React, { useState, useEffect, useContext } from 'react'
import { useModal } from 'context/Modal/ModalContext'
import CreateNewPost, {
  CreateNewPostHeader
} from '../CreateNewPost/CreateNewPost'
import { ModalStyles } from 'components/Modal/Modal'
import { FileContext } from 'context/FileReader/FileReaderContext'

const modalStyles: ModalStyles = {
  modalContainer:
    'z-50 bg-white mx-auto rounded-md shadow-lg w-[780px] h-[440px] z-10000000',
  modalHeader: 'p-2 w-full text-center flex justify-content-between',
  modalContent: 'modal-content flex justify-content-between'
}

const SelectMedia = () => {
  const { wasImageUploaded, handleFileChange } = useContext(FileContext)

  const { openModal } = useModal()

  useEffect(() => {
    if (wasImageUploaded) {
      openModal(<CreateNewPost />, <CreateNewPostHeader />, modalStyles)
    }
  }, [wasImageUploaded])

  return (
    <div className="flex flex-col w-full m-auto items-center justify-content-center">
      <h1 className="text-[20px]">Drag photos and videos here</h1>

      <label
        htmlFor="fileUpload"
        className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded bg-[#0095F6] text-[#fff] py-[7px] px-[16px] mt-[24px]"
      >
        Select From Computer
      </label>

      <input
        type="file"
        onChange={handleFileChange}
        id="fileUpload"
        style={{ display: 'none' }}
      />
    </div>
  )
}

export const SelectMediaHeader = () => {
  return (
    <div className="w-full flex items-center justify-content-between ">
      <h1 className="text-center m-auto">Create new post</h1>
    </div>
  )
}

export default SelectMedia
