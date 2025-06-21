"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, Clock, Pill, CheckCircle, XCircle, AlertCircle, Plus, Bell, User } from "lucide-react"

const medications = [
  {
    id: 1,
    name: "Metformin",
    dosage: "500mg",
    times: ["8:00 AM", "8:00 PM"],
    taken: [true, false],
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Lisinopril",
    dosage: "10mg",
    times: ["8:00 PM"],
    taken: [true],
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Vitamin D",
    dosage: "1000 IU",
    times: ["8:00 AM"],
    taken: [true],
    color: "bg-orange-500",
  },
]

const appointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Endocrinologist",
    date: "2024-06-20",
    time: "2:00 PM",
    type: "Follow-up",
    status: "confirmed",
    notes: "Diabetes management review",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Cardiologist",
    date: "2024-06-25",
    time: "10:30 AM",
    type: "Consultation",
    status: "pending",
    notes: "Blood pressure monitoring",
  },
  {
    id: 3,
    doctor: "Dr. Emily Davis",
    specialty: "General Practitioner",
    date: "2024-07-05",
    time: "9:00 AM",
    type: "Annual Checkup",
    status: "confirmed",
    notes: "Routine physical examination",
  },
]

export default function Scheduler() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTab, setSelectedTab] = useState("medications")

  const markMedicationTaken = (medId: number, timeIndex: number) => {
    // In a real app, this would update the backend
    console.log(`Marked medication ${medId} at time ${timeIndex} as taken`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Health Scheduler</h1>
          <p className="text-gray-600">Manage your medications and appointments</p>
        </div>
        <Button className="bg-sky-500 hover:bg-sky-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Schedule
        </Button>
      </div>

      {/* Today's Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700">Today's Medications</p>
                <p className="text-2xl font-bold text-blue-900">5/6</p>
                <p className="text-xs text-blue-600">1 missed dose</p>
              </div>
              <div className="w-12 h-12 bg-blue-200 rounded-xl flex items-center justify-center">
                <Pill className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700">Upcoming Appointments</p>
                <p className="text-2xl font-bold text-green-900">2</p>
                <p className="text-xs text-green-600">This week</p>
              </div>
              <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-amber-700">Adherence Rate</p>
                <p className="text-2xl font-bold text-amber-900">94%</p>
                <p className="text-xs text-amber-600">This month</p>
              </div>
              <div className="w-12 h-12 bg-amber-200 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-amber-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" />
          </CardContent>
        </Card>

        {/* Schedule Details */}
        <div className="lg:col-span-2">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
            </TabsList>

            <TabsContent value="medications" className="space-y-4">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Pill className="h-5 w-5 text-blue-600" />
                    <span>Today's Medications</span>
                  </CardTitle>
                  <CardDescription>Track your daily medication schedule</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {medications.map((med) => (
                    <div key={med.id} className="border rounded-xl p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${med.color}`}></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{med.name}</h4>
                            <p className="text-sm text-gray-600">{med.dosage}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {med.taken.filter(Boolean).length}/{med.times.length} taken
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        {med.times.map((time, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <span className="text-sm font-medium">{time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {med.taken[index] ? (
                                <Badge className="bg-green-100 text-green-800 border-green-200">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Taken
                                </Badge>
                              ) : (
                                <div className="flex space-x-1">
                                  <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-200">
                                    <XCircle className="h-3 w-3 mr-1" />
                                    Missed
                                  </Badge>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => markMedicationTaken(med.id, index)}
                                  >
                                    Mark Taken
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appointments" className="space-y-4">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CalendarIcon className="h-5 w-5 text-green-600" />
                    <span>Upcoming Appointments</span>
                  </CardTitle>
                  <CardDescription>Your scheduled medical appointments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="border rounded-xl p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                            <User className="h-5 w-5 text-sky-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{appointment.doctor}</h4>
                            <p className="text-sm text-gray-600">{appointment.specialty}</p>
                            <p className="text-xs text-gray-500 mt-1">{appointment.notes}</p>
                          </div>
                        </div>
                        <Badge
                          variant={appointment.status === "confirmed" ? "secondary" : "outline"}
                          className={appointment.status === "confirmed" ? "bg-green-100 text-green-800" : ""}
                        >
                          {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{appointment.time}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {appointment.type}
                          </Badge>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Bell className="h-4 w-4 mr-1" />
                            Remind
                          </Button>
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Alerts */}
      <Card className="bg-gradient-to-r from-amber-50 to-red-50 border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <span>Health Reminders</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">Missed Evening Metformin</p>
                  <p className="text-sm text-gray-600">Take as soon as possible</p>
                </div>
              </div>
              <Button size="sm" className="bg-sky-500 hover:bg-sky-600 text-white">
                Mark Taken
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-white rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">Appointment Tomorrow</p>
                  <p className="text-sm text-gray-600">Dr. Sarah Johnson at 2:00 PM</p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
