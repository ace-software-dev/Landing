interface SectionTitleProps {
  section: string,
  title: string,
}

export default function SectionTitle({section, title}: SectionTitleProps) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="text-purple-300 text-2xl font-normal">
        {section}
      </div>
      <div className="bg-gradient-to-r from-white/60 via-white to-white/60 inline-block text-transparent bg-clip-text text-5xl font-medium">
        {title}
      </div>
    </div>
  )
}
