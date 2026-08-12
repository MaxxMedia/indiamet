import { ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
  className?: string
  bgColor?: string
  fullWidth?: boolean
}

export default function SectionContainer({
  children,
  className = "",
  bgColor = "",
  fullWidth = false,
}: SectionContainerProps) {
  const containerClass =
    "w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8"

  if (fullWidth) {
    return (
      <div className={`w-full ${bgColor}`}>
        <div className={`${containerClass} ${className}`}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={`${containerClass} ${className}`}>
      {children}
    </div>
  )
}