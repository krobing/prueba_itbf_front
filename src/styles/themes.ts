/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DefaultTheme, ThemeWithFunc } from 'styled-components'
import { DeepPartial } from 'utility-types'
import { ObjKeyTypes } from '../../types/utilities'

// Original theme variables for the app
const rawOriginalTheme: ThemeWithFunc = {
  colors: {
    alert: '#FB2F3D',
    danger: '#FB2F3D',
    dominant: {
      DEFAULT: '#0476bd',
      dark: '#03528f',
      light: '#40a3e6',
    },
    'sub-dominant': {
      DEFAULT: '#89b80a',
      dark: '#6a8c08',
      light: '#d1e78e',
      href: '#89b80a',
    },
    alternative: {
      DEFAULT: '#26346F',
      dark: '#0A1634',
      hover: '#19234B',
    },
    // gray scale
    'gray-custom': {
      DEFAULT: '#F9F9F9',
      50: '#FAFBFD',
      100: '#ECECEC',
      200: '#C4C2C2',
      300: '#707070',
      500: '#53595A',
      600: '#425453',
      700: '#444444',
      900: '#262626',
    },
    // darkness scale
    'dark-custom': {
      300: '#00000029',
      500: '#090909',
      600: '#090600',
      700: '#070500',
      800: '#030200',
    },
  },

  // global font styles
  fontFamily: {
    montserrat: "'Montserrat', sans-serif",
    helvetica: 'Helvetica',
  },

  'font-family-base': (theme) => theme.fontFamily.montserrat,
  'font-size-root': '16px',
  'font-size-base': '1rem',

  // contents width and breakpoints
  'content-max-width': '1124px',

  breakpoints: {
    content: (theme) => theme['content-max-width'],
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  borderRadius: {
    global: '10px',
  },

  images: {
    'elipse-desk': 'var(--img-elipse-desk)',
    'elipse-mobile': 'var(--img-elipse-mobile)',
    'form-login': 'var(--img-form-login)',
    'register-header': 'var(--img-register-header)',
    'register-hover-header': 'var(--img-register-hover-header)',
    'banner-login': 'var(--img-banner-login)',
    'money-header': 'var(--icon-money-header)',
    'product-header': 'var(--icon-product-header)',
    'chart-header': 'var(--icon-chart-header)',
    'credit-header': 'var(--icon-credit-header)',
    'wallet-header': 'var(--icon-wallet-header)',
    'wallet-hover-header': 'var(--icon-wallet-hover-header)',
  },
}

// Use variant of themes with css variables
export const overTheme: DeepPartial<ThemeWithFunc> = {}

/**
 * Deeply spreads an object.
 *
 * @param obj - The object to be spread.
 * @param ext - The object to be spread over `obj`.
 * @returns A new object with the same structure as `obj`, but with `ext` spread over it.
 */
const deepSpread = (
  obj: Record<ObjKeyTypes, any>,
  ext: Record<ObjKeyTypes, any>,
): Record<ObjKeyTypes, any> => ({
  ...obj,
  ...Object.entries(ext).reduce(
    (acc, [attr, value]) => ({
      ...acc,
      ...(!Array.isArray(value) &&
      value instanceof Object &&
      !Array.isArray(obj[attr]) &&
      obj[attr] instanceof Object
        ? { [attr]: deepSpread(obj[attr], value) }
        : { [attr]: value }),
    }),
    {},
  ),
})

/**
 * Executes functions within an object and replaces them with their return values.
 * If a value is an object, the function is called recursively.
 *
 * @param obj - The object containing values or functions to be executed.
 * @param origin - The theme object to be passed as an argument to the functions.
 * @returns A new object with the same structure as `obj`, but with functions replaced by their return values.
 */
const execFuncValues = (
  obj: Record<ObjKeyTypes, any>,
  origin: DefaultTheme | ThemeWithFunc,
): DefaultTheme | Record<ObjKeyTypes, any> =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === 'function') {
      return {
        ...acc,
        [key]: value(origin),
      }
    }

    return {
      ...acc,
      [key]:
        !Array.isArray(value) && value instanceof Object
          ? execFuncValues(value, origin)
          : value,
    }
  }, {})

// export original theme
export const originalTheme = execFuncValues(
  rawOriginalTheme,
  rawOriginalTheme,
) as DefaultTheme

/**
 * Create a new theme over original theme, overwriting its variables
 *
 * @param {Object} otherTheme:DefaultTheme
 *
 * @return {Object} overwritten theme: DefaultTheme
 */
export const makeAppTheme = (
  otherTheme: DeepPartial<ThemeWithFunc> = {},
): DefaultTheme => {
  return deepSpread(
    originalTheme,
    execFuncValues(otherTheme, originalTheme),
  ) as DefaultTheme
}
