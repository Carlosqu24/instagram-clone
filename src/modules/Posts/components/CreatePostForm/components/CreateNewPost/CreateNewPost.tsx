import React, { useContext } from 'react'

import ProfileImage from '../../../../../../../public/profile-image.jpg'
import { useForm } from 'hooks/useForm'
import { useModal } from 'context/Modal/ModalContext'
import SelectMedia, { SelectMediaHeader } from '../SelectMedia/SelectMedia'
import { ModalStyles } from 'components/Modal/Modal'
import { FileContext } from 'context/FileReader/FileReaderContext'

const modalStyles: ModalStyles = {
  modalContainer:
    'z-50 bg-white mx-auto rounded-md shadow-lg w-[440px] h-[440px] z-10000000',
  modalHeader: 'p-2 w-full text-center flex justify-content-between',
  modalContent: 'modal-content flex justify-content-between'
}

const TEST_URL =
  'https://scontent.fsyq5-1.fna.fbcdn.net/v/t39.30808-6/385813668_2254024124795034_2794546983632518256_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WYQ9ZpI7zO8AX9S2-p_&_nc_ht=scontent.fsyq5-1.fna&oh=00_AfAB0o7nxpuyps-7lsNfcdfV1qFCcOrYQutwyoGvos_0KA&oe=65615A6F'

const postCardClassNames = {
  article: `card mb-9 w-[100%] sm:w-[470px] md:w-[470px] xl:w-[470px]`,
  cardHeader: `card-header flex justify-between mb-[12px] px-[16px] pt-[12px] sm:px-[0px] sm:pt-[0px] md:px-[0px] md:pt-[0px] lg:px-[0px] lg:pt-[0px] xl:px-[0px] xl:pt-[0px]`,
  cardHeaderUserInformation: `flex justify-between items-center`,
  cardHeaderUserInformationProfileImage: `rounded-full w-[45px] h-[45px]`,
  cardHeaderUserInformationUsername: `ml-3 font-bold`,
  cardHeaderUserInformationTimeAgo: `ml-2`,

  cardPosterImage: `card-img-top 
    
    sm:w-[470px]
    md:w-[470px]
    xl:w-[470px] 
    h-[470px] 
    object-cover`,
  cardFooterEmoji: `hidden sm:block md:block lg:block xl:block material-symbols-outlined text-[18px]`
}

interface CreateNewPostForm {
  caption: string
}

const CreateNewPost = () => {
  const [formValues, handleInputChange] = useForm<CreateNewPostForm>({
    caption: ''
  })
  const { imageUrl, handleFileChange } = useContext(FileContext)

  const captionLength = formValues.caption.length

  return (
    <div className="w-[100%] flex">
      <img src={imageUrl} alt="" className="w-[50%]" />

      <div className="w-[50%] px-[16px]">
        <div className={postCardClassNames.cardHeader}>
          <div className={postCardClassNames.cardHeaderUserInformation}>
            <img
              className={
                postCardClassNames.cardHeaderUserInformationProfileImage
              }
              src={ProfileImage}
              alt=""
            />
            <span
              className={postCardClassNames.cardHeaderUserInformationUsername}
            >
              carlos_qu24
            </span>
          </div>
        </div>

        <textarea
          name="caption"
          placeholder="Write a caption..."
          className="outline-none border-none w-full h-[212px]"
          style={{ resize: 'none' }}
          value={formValues.caption}
          onChange={(e) => handleInputChange(e)}
        />
        <div className="w-full flex justify-content-between mt-auto">
          <span className={postCardClassNames.cardFooterEmoji}>mood</span>

          <span className="ml-auto">{captionLength}/2,200</span>
        </div>
      </div>
    </div>
  )
}

export const CreateNewPostHeader = () => {
  const { openModal } = useModal()
  const { setWasImageUploaded } = useContext(FileContext)

  const handleBackArrowClick = () => {
    setWasImageUploaded(false)
    openModal(<SelectMedia />, <SelectMediaHeader />, modalStyles)
  }

  return (
    <div className="w-full flex items-center justify-content-between">
      <span
        className="mr-auto material-symbols-outlined text-[26px] cursor-pointer"
        onClick={handleBackArrowClick}
      >
        arrow_back
      </span>

      <span className="text-[16px] font-bold">Create new post</span>

      <span className="ml-auto text-[#1b74e4]">Share</span>
    </div>
  )
}

export default CreateNewPost
