"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Activity,
  Calendar,
  FileText,
  AlertTriangle,
  TrendingUp,
  Heart,
  Thermometer,
  Droplets,
  Weight,
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const healthData = [
  { date: "2024-01", bp: 120, sugar: 95, weight: 70 },
  { date: "2024-02", bp: 118, sugar: 92, weight: 69.5 },
  { date: "2024-03", bp: 122, sugar: 98, weight: 69.8 },
  { date: "2024-04", bp: 115, sugar: 90, weight: 69.2 },
  { date: "2024-05", bp: 119, sugar: 94, weight: 69.0 },
  { date: "2024-06", bp: 121, sugar: 96, weight: 68.8 },
]

const medicationData = [
  { name: "Metformin", taken: 28, total: 30 },
  { name: "Lisinopril", taken: 29, total: 30 },
  { name: "Vitamin D", taken: 25, total: 30 },
]

export default function PatientDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
        <p className="text-sky-100 mb-4">Here's your health overview for today</p>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 rounded-xl p-3">
            <Heart className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-sky-100">Overall Health Score</p>
            <p className="text-2xl font-bold">85/100</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Blood Pressure</p>
                <p className="text-2xl font-bold text-gray-900">119/78</p>
                <p className="text-xs text-green-600">Normal</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Activity className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Blood Sugar</p>
                <p className="text-2xl font-bold text-gray-900">94 mg/dL</p>
                <p className="text-xs text-green-600">Normal</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Weight</p>
                <p className="text-2xl font-bold text-gray-900">68.8 kg</p>
                <p className="text-xs text-green-600">-0.2 kg</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Weight className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Temperature</p>
                <p className="text-2xl font-bold text-gray-900">98.6°F</p>
                <p className="text-xs text-green-600">Normal</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Thermometer className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts and Notifications */}
      <Card className="bg-white border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <span>Health Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <div>
                <p className="font-medium text-gray-900">Missed Medication</p>
                <p className="text-sm text-gray-600">You missed your evening Metformin dose</p>
              </div>
            </div>
            <Button size="sm" variant="outline">
              Mark Taken
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div>
                <p className="font-medium text-gray-900">Upcoming Appointment</p>
                <p className="text-sm text-gray-600">Dr. Smith - Tomorrow at 2:00 PM</p>
              </div>
            </div>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Health Trends</CardTitle>
            <CardDescription>Your vital signs over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={healthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="bp" stroke="#38BDF8" strokeWidth={2} />
                <Line type="monotone" dataKey="sugar" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Medication Adherence</CardTitle>
            <CardDescription>This month's medication compliance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {medicationData.map((med) => (
              <div key={med.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{med.name}</span>
                  <span className="text-gray-600">
                    {med.taken}/{med.total}
                  </span>
                </div>
                <Progress value={(med.taken / med.total) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-white border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest health records and interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Blood Test Results</p>
                <p className="text-sm text-gray-600">Uploaded 2 hours ago</p>
              </div>
              <Badge variant="secondary">New</Badge>
            </div>

            <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Appointment Scheduled</p>
                <p className="text-sm text-gray-600">With Dr. Smith for tomorrow</p>
              </div>
              <Badge variant="outline">Scheduled</Badge>
            </div>

            <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Health Score Updated</p>
                <p className="text-sm text-gray-600">Improved by 3 points this week</p>
              </div>
              <Badge variant="secondary">+3</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
