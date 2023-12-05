interface CardProps {
  title: string,
  description: string,
}

export default function Card({title, description}: CardProps) {
  return (
    <div className='flex flex-col justify-center items-center w-100 p-6 bg-white bg-opacity-5 rounded-2xl gap-2.5 border-2 border-blue-400'>
      <div className="self-stretch text-white text-2xl font-medium ">{title}</div>
      <div className="self-stretch text-white text-lg">{description}</div>
    </div>
  )
}
