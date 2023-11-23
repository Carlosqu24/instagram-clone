import React from 'react'
import { describe, expect, test } from 'vitest'
import customRender from '../../../utils'

import UserProfilePage from '../../../../src/modules/User/pages/UserProfilePage/UserProfilePage'

import { mockUser } from '../../../../src/data/user'
import { screen } from '@testing-library/react'

describe('UserProfile', () => {
  describe('UserInformation', () => {
    test('Should render successfully', () => {
      const { container } = customRender(<UserProfilePage />, {
        route: '/profile'
      })

      screen.getByText(mockUser.userName)
      screen.getByText(mockUser.displayName)
      screen.getByText(mockUser.biography)
    })
  })
})
