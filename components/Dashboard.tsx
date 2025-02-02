'use client'

import { useState } from 'react'
import { Bell } from 'lucide-react'
import Sidebar from './Sidebar'
import DashboardContent from './dashboard/DashboardContent'
import AnalyticsSection from './dashboard/AnalyticsSection'
import TeamSection from './dashboard/TeamSection'
import SettingsSection from './dashboard/SettingsSection'
import ProfileSection from './dashboard/ProfileSection'

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [currentSection, setCurrentSection] = useState('dashboard')

  const renderContent = () => {
    switch (currentSection) {
      case 'analytics':
        return <AnalyticsSection />
      case 'team':
        return <TeamSection />
      case 'settings':
        return <SettingsSection />
      case 'profile':
        return <ProfileSection />
      default:
        return <DashboardContent />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      
      <div className="flex-1 overflow-auto">
        <div className="p-4 bg-white shadow-sm flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
          </h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell size={20} />
            </button>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  )
}
