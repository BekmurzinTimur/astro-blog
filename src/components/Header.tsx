import type { Component } from 'solid-js'

export const Header: Component<{}> = (props) => {
  return (
    <div style={{ display: 'flex', 'justify-content': 'space-evenly' }}>
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
    </div>
  )
}
