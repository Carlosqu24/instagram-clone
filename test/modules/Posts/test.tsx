import React from 'react'
import { describe, expect, test } from 'vitest'
import customRender from '../../utils'

import HomePage from '../../../src/pages/HomePage/HomePage'

import { mockPostsList } from '../../../src/data/posts'
import { screen } from '@testing-library/react'

describe('Home Page', () => {
  test('Should render all posts', () => {
    const { container } = customRender(<HomePage />)

    // mockPostsList.map(mockPost => {

    // })

    // expect(container).toMatchSnapshot()

    screen.getAllByText('lamborghini')
    screen.getAllByText('Awesome description')
    screen.getAllByText('0 likes')
    // screen.getByAltText("lamborghini aventador")

    // expect(true).toBe(true)
  })
})
