// ModalContext.tsx
import Modal from 'components/Modal/Modal'
import React, { createContext, ReactNode, useContext, useState } from 'react'

interface ModalStyles {
  modalContainer: string
  modalHeader: string
  modalContent: string
}

interface ModalContextProps {
  isOpen: boolean
  openModal: (
    content: ReactNode,
    header: ReactNode,
    modalStyles: ModalStyles
  ) => void
  closeModal: () => void
  modalStyles?: ModalStyles
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [modalContent, setModalContent] = useState<ReactNode | null>(null)
  const [header, setHeader] = useState<ReactNode | null>(null)
  const [modalStyles, setModalStyles] = useState<ModalStyles>()

  const openModal = (
    content: ReactNode,
    header: ReactNode,
    modalStyles: ModalStyles
  ) => {
    setModalContent(content)
    setIsOpen(true)
    setHeader(header)
    setModalStyles(modalStyles)
  }

  const closeModal = () => {
    setModalContent(null)
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, modalStyles }}
    >
      {children}
      {isOpen && modalContent && modalStyles && (
        <Modal
          modalStyles={modalStyles}
          isOpen={isOpen}
          header={header}
          onClose={closeModal}
        >
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
