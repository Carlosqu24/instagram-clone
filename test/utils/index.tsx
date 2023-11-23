import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../src/config/i18n/index'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

function customRender(
  ui,
  { route = '/', i18nInstance = i18n, ...renderOptions } = {}
) {
  window.history.pushState({}, 'Test page', route)

  function Wrapper({ children }) {
    return (
      // <Router>
      <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>
      // </Router>
    )
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

export default customRender

// const renderWithi18next = (Component) => {
//   const Comp = React.cloneElement(Component, {
//     changeLanguage: (lng) => {
//       i18n.changeLanguage(lng)
//       rerender(<I18nextProvider i18n={i18n}>{Comp}</I18nextProvider>)
//     }
//   })
//   const defaultRender = render(
//     <I18nextProvider i18n={i18n}>{Comp}</I18nextProvider>
//   )
//   const { rerender } = defaultRender
//   return defaultRender
// }

// export default renderWithi18next
