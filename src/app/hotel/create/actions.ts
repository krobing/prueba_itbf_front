'use server'

import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
import { parseWithZod } from '@conform-to/zod'
import { hotelSchema } from './schema'

import type { CreateErrorsResponse } from '../types/hotel.types'

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export async function createHotel(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: hotelSchema,
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  const resp = await fetch(`${apiUrl}/api/hoteles`, {
    method: 'POST',
    body: formData,
  })

  if (!resp.ok) {
    const { errors }: CreateErrorsResponse = await resp.json()

    return submission.reply({
      formErrors: Object.values(errors).map((err) => err.at(0) as string),
      resetForm: false,
    })
  }

  revalidateTag('hoteles')
  redirect('/hotel/browse')
}
