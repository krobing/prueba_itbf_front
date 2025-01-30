import tw, { styled } from 'twin.macro'

export const Form = styled.form`
  ${tw`mx-auto bg-white border border-gray-400 p-6 shadow-md`}
`

export const Label = styled.label`
  ${tw`block text-sm font-medium text-gray-700 mt-4`}
`

export const Input = styled.input`
  ${tw`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
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
  ${tw`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
`

export const Select = styled.select`
  ${tw`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}

  option {
    ${tw`p-2`}
  }
`

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  ${tw`relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden`}
`

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  ${tw`col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto`}
`

export const Fieldset = styled.fieldset`
  ${tw`border border-gray-300 p-4 mb-4 rounded`}

  legend {
    ${tw`text-gray-700 font-bold`}
  }
`

export const ErrorMessage = styled.span`
  ${tw`text-red-500 text-xs italic`}
`
