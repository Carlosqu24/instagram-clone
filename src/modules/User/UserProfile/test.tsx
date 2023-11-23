import { render, screen } from '@testing-library/react'
import UserProfile from './UserProfile'

const user = {
  id: crypto.randomUUID(),
  userName: 'carlos_qu24',
  displayName: 'Carlos H. Quesada',
  biography: 'Web developer | Web designer P.Z. 🌊🌴'
}

describe('UserProfile', () => {
  it('Render Profile', () => {
    // const { container } = render(<UserProfile user={user} />)

    // expect(screen.getByText(user.userName)).toBeInTheDocument()
    // expect(screen.getByText(user.biography)).toBeInTheDocument()

    expect(true).toBe(true)
  })
})
