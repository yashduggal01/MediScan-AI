"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, AlertTriangle, TrendingUp, FileText, Clock, Activity, Brain } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const patientAlerts = [
  {
    id: 1,
    patient: "Sarah Johnson",
    condition: "Blood Sugar Spike",
    severity: "high",
    time: "2 hours ago",
    value: "280 mg/dL",
  },
  {
    id: 2,
    patient: "Michael Chen",
    condition: "Missed Medication",
    severity: "medium",
    time: "4 hours ago",
    value: "Lisinopril",
  },
  {
    id: 3,
    patient: "Emily Davis",
    condition: "BP Elevation",
    severity: "high",
    time: "6 hours ago",
    value: "160/95 mmHg",
  },
]

const patientTrends = [
  { month: "Jan", patients: 45, alerts: 12 },
  { month: "Feb", patients: 52, alerts: 8 },
  { month: "Mar", patients: 48, alerts: 15 },
  { month: "Apr", patients: 61, alerts: 10 },
  { month: "May", patients: 55, alerts: 7 },
  { month: "Jun", patients: 67, alerts: 9 },
]

const upcomingAppointments = [
  {
    id: 1,
    patient: "Sarah Johnson",
    time: "2:00 PM",
    type: "Follow-up",
    condition: "Diabetes",
  },
  {
    id: 2,
    patient: "Robert Wilson",
    time: "3:30 PM",
    type: "Consultation",
    condition: "Hypertension",
  },
  {
    id: 3,
    patient: "Maria Garcia",
    time: "4:15 PM",
    type: "Check-up",
    condition: "Annual Physical",
  },
]

export default function DoctorDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Good morning, Dr. Wilson!</h1>
        <p className="text-sky-100 mb-4">You have 8 appointments today and 3 urgent alerts</p>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 rounded-xl p-3">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-sky-100">Active Patients</p>
            <p className="text-2xl font-bold">67</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today's Appointments</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
                <p className="text-xs text-green-600">2 completed</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Urgent Alerts</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-xs text-red-600">Requires attention</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Reports Reviewed</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-xs text-green-600">This week</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">AI Insights</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
                <p className="text-xs text-purple-600">New recommendations</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Alerts */}
        <div className="lg:col-span-2">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <span>Patient Alerts</span>
              </CardTitle>
              <CardDescription>Urgent notifications requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {patientAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        alert.severity === "high"
                          ? "bg-red-500"
                          : alert.severity === "medium"
                            ? "bg-amber-500"
                            : "bg-green-500"
                      }`}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{alert.patient}</h4>
                      <p className="text-sm text-gray-600">{alert.condition}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{alert.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={alert.severity === "high" ? "destructive" : "secondary"}>{alert.value}</Badge>
                    <div className="mt-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              <span>Today's Schedule</span>
            </CardTitle>
            <CardDescription>Upcoming appointments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="p-3 border rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{appointment.patient}</h4>
                  <Badge variant="outline" className="text-xs">
                    {appointment.time}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{appointment.type}</p>
                <p className="text-xs text-gray-500">{appointment.condition}</p>
              </div>
            ))}
            <Button className="w-full mt-4" variant="outline">
              View Full Schedule
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Patient Trends</CardTitle>
            <CardDescription>Monthly patient count and alert frequency</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={patientTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="patients" stroke="#38BDF8" strokeWidth={2} />
                <Line type="monotone" dataKey="alerts" stroke="#EF4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle>AI Insights Summary</CardTitle>
            <CardDescription>Recent AI-generated recommendations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-xl">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Brain className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Medication Optimization</h4>
                  <p className="text-sm text-blue-800 mt-1">
                    3 patients may benefit from dosage adjustments based on recent lab results
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-xl">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Health Improvements</h4>
                  <p className="text-sm text-green-800 mt-1">
                    5 patients showing positive trends in key health metrics
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Activity className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900">Risk Factors</h4>
                  <p className="text-sm text-amber-800 mt-1">
                    2 patients identified with emerging cardiovascular risk patterns
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
