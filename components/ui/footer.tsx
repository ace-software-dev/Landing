import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className=' px-6 py-4 bg-black bg-opacity-40 justify-center items-center gap-7 inline-flex font-light'>
      <div className="text-white text-base">© ACE Software. Todos los derechos reservados.</div>
      <div className="w-7">|</div>
      <div className="text-white text-base">Política de Privacidad</div>
    </div>
  )
}
