'use client'

import React from 'react'
import tw, { theme } from 'twin.macro'
import PropagateLoaderBase from 'react-spinners/PropagateLoader'
import type { LoaderSizeProps } from 'react-spinners/helpers/props'

export default function PropagateLoader({ ...props }: LoaderSizeProps) {
  return (
    <div css={tw`flex flex-auto items-center justify-center`}>
      <PropagateLoaderBase
        color={theme`colors.dominant.dark`}
        speedMultiplier={1.2}
        cssOverride={{
          display: 'block',
          margin: '0 auto',
        }}
        size={20}
        loading
        {...props}
      />
    </div>
  )
}
