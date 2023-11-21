import React, { ReactNode } from 'react'

export interface ModalStyles {
  modalContainer: string
  modalHeader: string
  modalContent: string
}

interface ModalProps {
  isOpen: boolean
  onClose: Function
  children: ReactNode
  header: ReactNode
  modalStyles?: ModalStyles
}

const Modal = ({
  isOpen,
  onClose,
  children,
  header,
  modalStyles
}: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10000000">
      <div className="absolute bg-gray-800 bg-opacity-75 inset-0"></div>
      <div
        className={
          modalStyles && modalStyles.modalContainer
            ? modalStyles.modalContainer
            : 'z-50 bg-white mx-auto rounded-md shadow-lg w-[440px] h-[440px] z-10000000'
        }
      >
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={() => onClose()}
        >
          X
        </button>

        <div
          className={
            modalStyles && modalStyles.modalHeader
              ? modalStyles.modalHeader
              : 'p-2 w-full text-center flex justify-content-between'
          }
        >
          {header}
        </div>

        <div
          className={
            modalStyles && modalStyles.modalContent
              ? modalStyles.modalContent
              : 'modal-content flex justify-content-between'
          }
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
