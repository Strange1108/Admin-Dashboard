'use client'

interface ToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export const Toggle = ({ checked, onChange }: ToggleProps) => {
  return (
    <div 
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
        checked ? 'bg-blue-600' : 'bg-gray-300'
      }`}
      onClick={() => onChange(!checked)}
    >
      <div 
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
          checked ? 'translate-x-6' : 'translate-x-0'
        }`} 
      />
    </div>
  )
}
