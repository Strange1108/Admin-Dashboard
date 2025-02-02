'use client'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { analyticsData } from '@/lib/data'

export default function AnalyticsSection() {
  const metrics = [
    { label: 'Total Visits', value: '124,563', change: '+14.2%' },
    { label: 'Bounce Rate', value: '32.8%', change: '-2.1%' },
    { label: 'Avg. Session Duration', value: '4m 23s', change: '+0.8%' }
  ]

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Analytics Overview</h2>
        <select 
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h4 className="text-gray-500">{metric.label}</h4>
            <p className="text-2xl font-bold">{metric.value}</p>
            <p className={metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
              {metric.change}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Traffic Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visits" stroke="#8884d8" />
              <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
              <Line type="monotone" dataKey="conversion" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

