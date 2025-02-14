import Link from 'next/link'

export default function HotelHomePage() {
  return (
    <>
      <h1 className="text-dominant-light text-center font-semibold">
        Sistema De Gestión Hotelera
      </h1>
      <Link
        href="/hotel/create"
        className="m-auto self-center justify-self-center text-white font-semibold bg-dominant hover:bg-dominant-dark rounded-md p-3 shadow-lg border-b-4 border-dominant-dark hover:border-b-0 transition-all duration-75 ease-linear"
      >
        Crear un hotel
      </Link>
    </>
  )
}
