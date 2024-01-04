import getDictionary from "@/app/dictionaries";

interface GradientTextProps {
  children: React.ReactNode,
}

function GradientText({ children }: GradientTextProps) {
  return (
    <span className="h-full pl-3 bg-linear-text-gradient block text-transparent bg-clip-text animate-spin-words">
      {children}
    </span>
  );
}


export default function TextRolling() {
  const dict = getDictionary();

  return (
    <div className="font-bold overflow-hidden	">
      {dict.header.options.map((option: string, index: number) => (
        <GradientText key={index}>{option}</GradientText>
      ))}
    </div>
  );
}
