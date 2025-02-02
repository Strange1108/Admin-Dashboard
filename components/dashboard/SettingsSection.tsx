'use client'

import { useState } from 'react'
import { Toggle } from '@/components/ui/Toggle'

export default function SettingsSection() {
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">General Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Notifications</p>
              <p className="text-sm text-gray-500">Enable push notifications</p>
            </div>
            <Toggle 
              checked={notifications}
              onChange={setNotifications}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

