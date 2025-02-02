'use client'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = ({ type = "text", placeholder, className = "", ...props }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      {...props}
    />
  )
}
