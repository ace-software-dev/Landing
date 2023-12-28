import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  classes?: string,
  goTo?: string,
}

export default function Button({ children, classes, goTo }: ButtonProps) {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className={`
      px-6 py-3 bg-gradient-to-l from-purple-600 to-blue-600 rounded-full
      justify-center items-center inline-flex cursor-pointer hover:opacity-90
      text-2xl font-semibold text-white ${classes}
    `} onClick={() => goTo ? openInNewTab(goTo) : null}>
        {children}
    </div>
  )
}
