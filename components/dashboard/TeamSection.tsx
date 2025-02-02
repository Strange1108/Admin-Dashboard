'use client'

import { User } from 'lucide-react'

export default function TeamSection() {
  const teamMembers = [
    { name: 'John Doe', role: 'Frontend Developer', email: 'john@example.com' },
    { name: 'Jane Smith', role: 'UX Designer', email: 'jane@example.com' },
    { name: 'Mike Johnson', role: 'Backend Developer', email: 'mike@example.com' },
    { name: 'Sarah Williams', role: 'Product Manager', email: 'sarah@example.com' },
    { name: 'Tom Brown', role: 'DevOps Engineer', email: 'tom@example.com' },
    { name: 'Lisa Davis', role: 'QA Engineer', email: 'lisa@example.com' }
  ]

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-400">{member.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
