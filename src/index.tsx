import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'App'

import './config/i18n/index'
import { I18nextProvider } from 'react-i18next'
import i18n from './config/i18n/index'
import { ModalProvider } from 'context/Modal/ModalContext'
import { FileProvider } from './context/FileReader/FileReaderContext'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <I18nextProvider i18n={i18n}>
    <FileProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </FileProvider>
  </I18nextProvider>
)
