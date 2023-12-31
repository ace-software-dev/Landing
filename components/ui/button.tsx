import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  classes?: string,
  type?: 'submit' | 'button' | 'reset',
}

export default function Button({ children, classes, type = 'button' }: ButtonProps) {
  return (
    <button type={type} className={`
        px-6 py-3 bg-gradient-to-l from-purple-600 to-blue-600 rounded-full
        justify-center items-center inline-flex cursor-pointer hover:opacity-90
        text-2xl font-semibold text-white ${classes}
      `}>
      {children}
    </button>
  )
}
