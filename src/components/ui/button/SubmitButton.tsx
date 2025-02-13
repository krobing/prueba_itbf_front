'use client'

import { useFormStatus } from 'react-dom'

import { Button } from './button-styles'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export default function SubmitButton({ children, ...props }: Props) {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} {...props}>
      {children}
    </Button>
  )
}
