import { createGlobalStyle, type DefaultTheme } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

// global styles
import resetStyles from './reset'
import { ringsWaveAnimation } from './animations'

// type definitions
export type GlobalStylesProps = {
  reset?: boolean
}
export type CustomStylesProps<T = DefaultTheme> = GlobalStylesProps & {
  theme?: T
}

// Create custom global styles component
const CustomStyles = createGlobalStyle<CustomStylesProps>`
  /* normalize boot styles */
  ${(props) => (props.reset ? resetStyles() : '')}

  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }

  /* animations */
  ${ringsWaveAnimation()}
`

const GlobalStyles = ({ reset }: GlobalStylesProps) => (
  <>
    <BaseStyles />
    <CustomStyles reset={reset} />
  </>
)

export default GlobalStyles
