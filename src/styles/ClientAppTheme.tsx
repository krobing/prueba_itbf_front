'use client'

import React, { type PropsWithChildren } from 'react'
import { ThemeProvider, type DefaultTheme } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import appTheme from './appTheme'

// type definition
export interface ClientAppThemeProps {
  theme?: DefaultTheme
  injectGlobal?: boolean
  reset?: boolean
}

const ClientAppTheme = ({
  theme = appTheme,
  injectGlobal = false,
  reset = false,
  children,
}: PropsWithChildren<ClientAppThemeProps>) => {
  return (
    <ThemeProvider theme={theme}>
      {injectGlobal && <GlobalStyles reset={reset} />}
      {children}
    </ThemeProvider>
  )
}

export default ClientAppTheme
