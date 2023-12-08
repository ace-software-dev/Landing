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
        <ul className="justify-center items-center gap-8 hidden md:flex space-x-2 mr-8 ml-8">
          <li>
            <Link href="/">
              <div className="text-white text-lg font-normal font-['Filson Pro'] hover:underline">Inicio</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="text-white text-lg font-normal font-['Filson Pro'] hover:underline">Nosotros</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="text-white text-lg font-normal font-['Filson Pro'] hover:underline">Servicios</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="text-white text-lg font-normal font-['Filson Pro'] hover:underline">Clientes</div>
            </Link>
          </li>
        </ul>

        <div className="justify-start items-center gap-6 flex">
          <div className="hidden lg:flex ml-2">
            <Link href="/">
              <span className="text-white text-base font-['Filson Pro']">EN</span>
            </Link>
            <span className="text-white text-base font-['Filson Pro']"> / </span>
            <Link href="/">
              <span className="text-white text-base font-bold font-['Filson Pro']">ES</span>
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
