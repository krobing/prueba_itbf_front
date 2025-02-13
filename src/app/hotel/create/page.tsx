import CreateHotel from './inc/CreateHotel'

export const revalidate = 1

export default function CreateHotelPage() {
  return (
    <>
      <h1 className="text-dominant-light">Creación de hotel</h1>
      <CreateHotel />
    </>
  )
}
