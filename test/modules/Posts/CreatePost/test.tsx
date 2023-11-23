import React from 'react'
import { describe, expect, test } from 'vitest'
import customRender from '../../../utils'

import { fireEvent, screen } from '@testing-library/react'

import App from '../../../../src/App'

describe('Create post', () => {
  test('Should render create form', () => {
    const { container } = customRender(<App />)

    const createPostItem = screen.getByText('Create Post Test')

    fireEvent.click(createPostItem)

    screen.getByText('Drag photos and videos here')

    expect(true).toBe(true)
  })
})
