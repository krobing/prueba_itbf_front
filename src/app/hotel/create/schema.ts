import { z } from 'zod'

export const hotelSchema = z.object({
  nombre: z.string({
    required_error: 'Requerido',
  }),
  nit: z
    .number({
      required_error: 'Requerido',
      invalid_type_error: 'Espera un número, recibe un texto',
    })
    .int({ message: 'Debe ser un número entero' })
    .positive({ message: 'Debe se mayor a cero(0)' }),
  capacidad_habitaciones: z
    .number({
      required_error: 'Requerido',
      invalid_type_error: 'Espera un número, recibe un texto',
    })
    .int({ message: 'Debe ser un número entero' })
    .nonnegative({ message: 'No puede ser un número negativo' }),
  direccion: z.string({
    required_error: 'Requerido',
  }),
  ciudad: z.string({
    required_error: 'Requerido',
  }),
})
