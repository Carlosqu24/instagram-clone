// ModalContext.tsx
import Modal from 'components/Modal/Modal'
import React, { createContext, ReactNode, useContext, useState } from 'react'

interface ModalContextProps {
  isOpen: boolean
  openModal: (content: ReactNode, title: string) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [modalContent, setModalContent] = useState<ReactNode | null>(null)

  const openModal = (content: ReactNode, title: string) => {
    setModalContent(content)
    setIsOpen(true)
    setTitle(title)
  }

  const closeModal = () => {
    setModalContent(null)
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && modalContent && (
        <Modal isOpen={isOpen} title={title} onClose={closeModal}>
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
