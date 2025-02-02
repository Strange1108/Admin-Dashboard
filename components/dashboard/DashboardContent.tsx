'use client'

import { AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { DollarSign, Users, ShoppingCart, Activity } from 'lucide-react'
import { revenueData, pieData } from '@/lib/data'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

export default function DashboardContent() {
  const stats = [
    { icon: DollarSign, label: 'Revenue', value: '$24,560', change: '+12.5%' },
    { icon: Users, label: 'Active Users', value: '1,234', change: '+3.2%' },
    { icon: ShoppingCart, label: 'Sales', value: '854', change: '+2.4%' },
    { icon: Activity, label: 'Conversion', value: '3.9%', change: '+1.2%' }
  ]

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <select 
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">{stat.label}</p>
                <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
              </div>
              <div className="p-3 bg-blue-50 rounded-full">
                <stat.icon className="text-blue-600" size={24} />
              </div>
            </div>
            <p className="text-green-500 text-sm mt-2">{stat.change} from last month</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="cost" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Device Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

