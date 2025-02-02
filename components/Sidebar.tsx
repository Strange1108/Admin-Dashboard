'use client'

import { Home, BarChart2, Settings, User, Menu, X, Users } from 'lucide-react'
import { NavItem } from '@/types/dashboard'

interface SidebarProps {
  isSidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  currentSection: string
  setCurrentSection: (section: string) => void
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: BarChart2, label: 'Analytics', id: 'analytics' },
  { icon: Users, label: 'Team', id: 'team' },
  { icon: Settings, label: 'Settings', id: 'settings' },
  { icon: User, label: 'Profile', id: 'profile' }
]

export default function Sidebar({
  isSidebarOpen,
  setSidebarOpen,
  currentSection,
  setCurrentSection
}: SidebarProps) {
  return (
    <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300`}>
      <div className="p-4 flex justify-between items-center">
        {isSidebarOpen && <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>}
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      <nav className="mt-8">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setCurrentSection(item.id)}
            className={`flex items-center p-4 cursor-pointer ${
              currentSection === item.id 
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={20} />
            {isSidebarOpen && <span className="ml-4">{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  )
}
