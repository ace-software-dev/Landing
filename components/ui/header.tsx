import Button from './button'

export default function Header() {
  return (
    <header className="absolute w-full z-30 sticky top-0">
      <div className="sticky top-0 w-full h-[70px] px-8 py-3 bg-slate-900 bg-opacity-80 justify-between items-center inline-flex">
        <div className="w-full h-[34.60px]">
          <img src = "/images/AceLogo.svg" alt="ACE Logo"/>
        </div>
        <Button classes='text-lg'>Contáctanos</Button>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white"></div>
    </header>
  )
}
