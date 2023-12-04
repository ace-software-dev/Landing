import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
}

export default function Button({ children }: ButtonProps) {
  return (
    <div className="w-[164px] h-[46px] px-6 py-3 bg-gradient-to-l from-violet-600 to-cyan-600 rounded-[52px] justify-center items-center inline-flex">
      <div className="text-white text-lg font-bold font-['Filson Pro']">
        {children}
      </div>
    </div>
  )
}
