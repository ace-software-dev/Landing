interface TitleProps {
  children: React.ReactNode,
  classes?: string,
}

export default function Title({children, classes}: TitleProps) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className={`
        bg-gradient-to-r from-white/60 via-white to-white/60 inline-block
        text-transparent bg-clip-text text-5xl font-medium ${classes}
      `}>
        {children}
      </div>
    </div>
  )
}
