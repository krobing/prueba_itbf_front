import React from 'react'
import tw from 'twin.macro'

export type ErrorMessageProps = React.HTMLAttributes<HTMLSpanElement> & {
  show?: boolean
  message?: string | string[]
}

export default function ErrorMessage({
  show,
  message = '',
  ...props
}: ErrorMessageProps) {
  return (
    <span css={[tw`hidden text-danger text-xs italic`, show && tw`block`]} {...props}>
      {message}
    </span>
  )
}
