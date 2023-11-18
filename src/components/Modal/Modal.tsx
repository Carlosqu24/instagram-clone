import React, { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: Function
  children: ReactNode
  title: string
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10000000">
      <div className="absolute bg-gray-800 bg-opacity-75 inset-0"></div>
      <div className="z-10 bg-white max-w-md mx-auto rounded-md shadow-lg w-[440px] h-[440px] z-10000000">
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={() => onClose()}
        >
          X
        </button>

        <div className="p-2 text-center">{title}</div>

        <div className="modal-content p-8">{children}</div>
      </div>
    </div>

    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    //   <div className="bg-white w-full max-w-md p-4 rounded-md">
    //     <div className="flex justify-end">
    //       <button
    //         className="text-gray-500 hover:text-gray-700"
    //         onClick={() => onClose()}
    //       >
    //         &times;
    //       </button>
    //     </div>
    //     <div className="mt-4">{children}</div>
    //   </div>
    // </div>
  )
}

export default Modal
