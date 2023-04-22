import type { Component } from 'solid-js'

export const Header: Component<{}> = (props) => {
  return (
    <nav class='flex justify-evenly h-8 items-center'>
      <a href='/#' class='hover:text-accent'>
        Home
      </a>
      <a href='/about' class='hover:text-accent'>
        About
      </a>
      <a href='#contacts' class='hover:text-accent'>
        Contact
      </a>
    </nav>
  )
}
