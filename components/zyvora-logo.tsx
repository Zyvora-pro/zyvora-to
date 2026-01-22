import Image from "next/image"

interface ZyvoraLogoProps {
  variant?: "purple" | "white"
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "watermark"
}

export function ZyvoraLogo({ variant = "purple", className = "", size = "md" }: ZyvoraLogoProps) {
  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-10 w-auto",
    xl: "h-12 w-auto",
    watermark: "h-32 md:h-48 lg:h-64 w-auto",
  }

  const logoSrc = {
    purple: "/images/zyvora-logo-purple.png",
    white: "/images/zyvora-logo-black.png",
  }

  const filterStyles = {
    purple: "",
    white: "brightness-0 invert",
  }

  return (
    <Image
      src={logoSrc[variant] || "/placeholder.svg"}
      alt="Zyvora"
      width={200}
      height={50}
      className={`${sizeClasses[size]} ${filterStyles[variant]} ${className}`}
      priority
    />
  )
}
