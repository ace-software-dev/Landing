interface TitleProps {
  children: React.ReactNode,
  classes?: string,
  size?: string,
}

export default function Title({children, classes, size}: TitleProps) {
  if (size === undefined){
    size = "text-5xl"
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className={`
        text-center bg-gradient-to-r from-white/60 via-white to-white/60 inline-block
        text-transparent bg-clip-text ${size} font-medium ${classes}
      `}>
        {children}
      </div>
    </div>
  )
}
