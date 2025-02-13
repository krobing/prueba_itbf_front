'use client'

import tw, { styled } from 'twin.macro'

export const Form = styled.form`
  ${tw` bg-white border border-slate-300 rounded-md p-6 shadow-md`}
`

export const Label = styled.label`
  ${tw`block text-sm font-medium text-gray-700 has-[[type='checkbox']]:flex has-[[type='checkbox']]:items-center has-[[type='checkbox']]:mb-1 has-[[type='radio']]:flex has-[[type='radio']]:items-center has-[[type='radio']]:mb-1 *:mr-1.5`}
`

export const Input = styled.input`
  ${tw`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dominant focus:border-dominant sm:text-sm placeholder:text-gray-400`}
`

export const InputPreFixed = styled.input`
  ${tw`block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6`}
`

export const WrapInput = styled.div`
  ${tw`rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
`

export const PrefixInput = styled.div`
  ${tw`shrink-0 select-none text-base text-gray-500 sm:text-sm/6`}
`

export const TextArea = styled.textarea`
  ${tw`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dominant focus:border-dominant sm:text-sm placeholder:text-gray-400`}
`

export const Select = styled.select`
  ${tw`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dominant focus:border-dominant sm:text-sm`}

  option {
    ${tw`p-2`}
  }
`

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  ${tw`relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-dominant checked:bg-dominant focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dominant disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden`}
`

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  ${tw`inline-block col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-dominant checked:bg-dominant indeterminate:border-dominant indeterminate:bg-dominant focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dominant disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto`}
`

export const Fieldset = styled.fieldset`
  /* ${tw`border border-gray-300 p-4 mb-4 rounded`} */
  ${tw`p-0`}

  legend {
    ${tw`text-gray-500 font-bold border-b border-gray-300 py-2.5 mb-4 w-full`}
  }
`

export const FormGroup = styled.div`
  ${tw`flex flex-col mb-4`}
`

export const WrapFields = styled.div`
  ${tw`grid sm:grid-flow-col sm:justify-stretch gap-4`}
`
