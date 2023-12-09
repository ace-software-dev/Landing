import Button from './button'
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full z-30 top-0">
      <div className="sticky top-0 w-full h-[70px] px-8 py-3 bg-slate-900 bg-opacity-95 justify-between items-center inline-flex">
        <Link href="/">
          <div className="w-24 flex items-center">
            <img src = "/images/AceLogo.svg" alt="ACE Logo" className="mt-2 mb-2 mr-2 ml-2" />
          </div>
        </Link>
        <ul className="justify-center items-center gap-8 hidden md:flex space-x-2 mr-8 ml-8 text-lg font-normal">
          <li>
            <Link href="/">
              <div className=" hover:underline">Inicio</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="hover:underline">Nosotros</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="hover:underline">Servicios</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="hover:underline">Clientes</div>
            </Link>
          </li>
        </ul>

        <div className="justify-start items-center gap-6 flex">
          <div className="hidden lg:flex ml-2 text-base">
            <Link href="/">
              <span>EN</span>
            </Link>
            <span> / </span>
            <Link href="/">
              <span className="font-bold">ES</span>
            </Link>
          </div>
          <Link href="">
            <Button classes='text-lg'>Contáctanos</Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white"></div>
    </header>
  )
}
