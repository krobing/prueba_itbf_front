'use client'

import React, { useActionState } from 'react'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { HiInformationCircle } from 'react-icons/hi'

// vendor components
import { Alert } from 'flowbite-react'

// UI components
import {
  Form,
  Label,
  Input,
  Select,
  FormGroup,
  WrapFields,
  ErrorMessage,
} from '@/components/ui/form'
import { SubmitButton } from '@/components/ui/button'

// actions & data
import { createHotel } from '../actions'
import { ciudades } from '@/data'
import { hotelSchema } from '../schema'

export default function CreateHotel() {
  const [lastResult, formAction] = useActionState(createHotel, undefined)

  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    defaultValue: {
      ciudad: '',
    },

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: hotelSchema })
    },

    // Validate the form on blur event triggered
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })

  return (
    <Form id={form.id} onSubmit={form.onSubmit} action={formAction} noValidate>
      {form.status === 'error' && form.errors ? (
        <Alert color="failure" icon={HiInformationCircle} className="mb-2">
          {form.errors.map((err, indx) => (
            <p key={indx}>{err}</p>
          ))}
        </Alert>
      ) : null}

      <FormGroup>
        <Label htmlFor="nombre">Nombre del hotel</Label>
        <Input
          id="nombre"
          key={fields.nombre.key}
          name={fields.nombre.name}
          defaultValue={fields.nombre.initialValue}
          type="text"
          required
        />
        <ErrorMessage show={!!fields.nombre.errors} message={fields.nombre.errors} />
      </FormGroup>

      <WrapFields>
        <FormGroup>
          <Label htmlFor="nit">Nit</Label>
          <Input
            id="nit"
            key={fields.nit.key}
            name={fields.nit.name}
            defaultValue={fields.nit.initialValue}
            type="text"
            required
          />
          <ErrorMessage show={!!fields.nit.errors} message={fields.nit.errors} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="capacidad_habitaciones">Número de habitaciones</Label>
          <Input
            id="capacidad_habitaciones"
            key={fields.capacidad_habitaciones.key}
            name={fields.capacidad_habitaciones.name}
            defaultValue={fields.capacidad_habitaciones.initialValue}
            type="text"
            required
          />
          <ErrorMessage
            show={!!fields.capacidad_habitaciones.errors}
            message={fields.capacidad_habitaciones.errors}
          />
        </FormGroup>
      </WrapFields>

      <WrapFields>
        <FormGroup>
          <Label htmlFor="direccion">Dirección</Label>
          <Input
            id="direccion"
            key={fields.direccion.key}
            name={fields.direccion.name}
            defaultValue={fields.direccion.initialValue}
            type="text"
            placeholder="Eje: Diagonal 47b # 37 - 40 sur"
            required
          />
          <ErrorMessage
            show={!!fields.direccion.errors}
            message={fields.direccion.errors}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="ciudad">Ciudad</Label>
          <Select
            key={fields.ciudad.key}
            name={fields.ciudad.name}
            defaultValue={fields.ciudad.initialValue}
            aria-placeholder="Seleccione una ciudad"
            required
          >
            <option value="">Seleccione una ciudad</option>
            {ciudades.map((ciudad) => (
              <option key={ciudad.codigo} value={ciudad.nombre}>
                {ciudad.nombre}
              </option>
            ))}
          </Select>
          <ErrorMessage show={!!fields.ciudad.errors} message={fields.ciudad.errors} />
        </FormGroup>
      </WrapFields>

      <div tw="flex justify-end w-full">
        <SubmitButton type="submit" tw="w-full xs:w-auto">
          Crear hotel
        </SubmitButton>
      </div>
    </Form>
  )
}
