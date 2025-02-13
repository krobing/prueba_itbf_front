import { z } from 'zod'

export const roomSchema = z.object({
  hotel_id: z.number().int(),
  tipo_acomodacion_id: z.number().int(),
})
