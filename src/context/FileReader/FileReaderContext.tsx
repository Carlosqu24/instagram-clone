import React, { createContext, useState, useContext, ChangeEvent } from 'react'

interface FileContextProps {
  selectedFile: File | null
  imageUrl: string | null | ArrayBuffer
  wasImageUploaded: boolean
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void
  setWasImageUploaded: Function
}

const initialState = {
  selectedFile: null,
  imageUrl: '',
  wasImageUploaded: false,
  handleFileChange: () => {},
  setWasImageUploaded: () => {}
}

export const FileContext = createContext<FileContextProps>(initialState)

export const useFileContext = (): FileContextProps => {
  const context = useContext(FileContext)
  if (!context) {
    throw new Error('useFileContext must be used within a FileProvider')
  }
  return context
}

interface IMAGE_UPLOAD_STATUS {
  UPLOADED: 'UPLOADED'
  UPLOADING: 'UPLOADING'
  BEFORE_UPLOAD: 'BEFORE_UPLOAD'
  ERROR: 'ERROR'
}

export const FileProvider = ({ children }: { children: JSX.Element }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null | ArrayBuffer>(null)
  const [wasImageUploaded, setWasImageUploaded] = useState<boolean>(false)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    const reader = new FileReader()

    reader.onloadend = () => {
      if (reader.result) {
        setImageUrl(reader.result)
        setWasImageUploaded(true)
      }
    }

    if (file) {
      reader.readAsDataURL(file)
      setSelectedFile(file)
    }
  }

  return (
    <FileContext.Provider
      value={{
        selectedFile,
        wasImageUploaded,
        imageUrl,
        handleFileChange,
        setWasImageUploaded
      }}
    >
      {children}
    </FileContext.Provider>
  )
}
