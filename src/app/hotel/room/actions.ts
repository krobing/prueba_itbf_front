'use server'

import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
import { parseWithZod } from '@conform-to/zod'
import { roomSchema } from './schema'

// models
import type { CreateErrorsResponse } from '../types/hotel.types'
import type { Habitacion } from '../types/room.model'

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export async function createRoom(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: roomSchema,
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  const resp = await fetch(`${apiUrl}/api/habitaciones`, {
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

  const room: Habitacion = await resp.json()

  revalidateTag('hotel')
  redirect(`/hotel/${room.hotel?.id}`)
}
