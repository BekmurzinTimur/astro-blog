import type { Component } from 'solid-js'
import { Typography } from './Typography'

export const Welcome: Component<{}> = (props) => {
  return (
    <div id='#' class='bg-gradient-to-br from-accent to-active p-10 sm:p-36'>
      <Typography variant='title' className='mb-10 text-black'>
        Welcome to
        <br />
        WORKING TITLE
      </Typography>
      <Typography variant='h3' className='text-center text-black'>
        Blog about modern web development
      </Typography>
    </div>
  )
}
