import type { Component, JSX, ValidComponent } from 'solid-js'
import { Dynamic } from 'solid-js/web'

type Variant =
  | 'title'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body'
  | 'body-small'
  | 'small'

interface Props {
  variant: Variant
  children: JSX.Element
  className?: string
  as?: ValidComponent
}

const tags: Record<Variant, ValidComponent> = {
  title: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body: 'p',
  'body-small': 'p',
  small: 'span',
}

const sizes: Record<Variant, string> = {
  title: 'text-4xl uppercase font-bold text-center sm:text-5xl lg:text-8xl',
  h1: 'text-5xl font-bold sm:text-4xl',
  h2: 'text-4xl font-bold sm:text-3xl',
  h3: 'text-l sm:text-2xl sm:text-xl lg:text-3xl',
  h4: 'text-2xl font-bold sm:text-1xl',
  h5: 'text-xl font-bold sm:text-lg',
  body: 'text-lg sm:text-md',
  'body-small': 'text-md sm:text-sm',
  small: 'text-sm sm:text-xs',
}

export const Typography: Component<Props> = ({
  variant,
  children,
  className,
  as,
}: Props) => {
  const sizeClasses = sizes[variant]
  const Tag = as || tags[variant]

  return (
    <Dynamic component={Tag} class={`${sizeClasses} ${className}`}>
      {children}
    </Dynamic>
  )
}
