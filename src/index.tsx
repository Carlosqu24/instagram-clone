import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'App'

import './config/i18n/index'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
