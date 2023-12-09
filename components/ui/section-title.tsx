import Title from "./title"

interface SectionTitleProps {
  subtitle: string,
  title: string,
}

export default function SectionTitle({subtitle, title}: SectionTitleProps) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="text-purple-300 text-2xl font-normal">
        {subtitle}
      </div>
      <Title>{title}</Title>
    </div>
  )
}
