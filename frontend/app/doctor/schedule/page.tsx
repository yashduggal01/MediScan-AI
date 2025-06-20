"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CalendarIcon,
  Clock,
  User,
  Phone,
  Video,
  MapPin,
  Plus,
  Edit,
  Bell,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

const appointments = [
  {
    id: 1,
    patientName: "Sarah Johnson",
    patientId: "P001",
    time: "9:00 AM",
    duration: "30 min",
    type: "Follow-up",
    mode: "in-person",
    status: "confirmed",
    reason: "Diabetes management review",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+1 (555) 123-4567",
    notes: "Patient reports improved glucose control",
  },
  {
    id: 2,
    patientName: "Michael Chen",
    patientId: "P002",
    time: "10:00 AM",
    duration: "45 min",
    type: "Consultation",
    mode: "video",
    status: "confirmed",
    reason: "Hypertension follow-up",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+1 (555) 234-5678",
    notes: "Review recent stress test results",
  },
  {
    id: 3,
    patientName: "Emily Davis",
    patientId: "P003",
    time: "11:30 AM",
    duration: "30 min",
    type: "Check-up",
    mode: "in-person",
    status: "pending",
    reason: "Anemia progress check",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+1 (555) 345-6789",
    notes: "Iron supplementation assessment",
  },
  {
    id: 4,
    patientName: "Robert Wilson",
    patientId: "P004",
    time: "2:00 PM",
    duration: "60 min",
    type: "Initial",
    mode: "in-person",
    status: "confirmed",
    reason: "New patient consultation",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+1 (555) 456-7890",
    notes: "Comprehensive health assessment",
  },
  {
    id: 5,
    patientName: "Maria Garcia",
    patientId: "P005",
    time: "3:30 PM",
    duration: "30 min",
    type: "Follow-up",
    mode: "phone",
    status: "rescheduled",
    reason: "Medication adjustment",
    avatar: "/placeholder.svg?height=40&width=40",
    phone: "+1 (555) 567-8901",
    notes: "Patient requested phone consultation",
  },
]

const timeSlots = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
]

export default function DoctorSchedule() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedView, setSelectedView] = useState("day")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-amber-100 text-amber-800"
      case "rescheduled":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case "video":
        return <Video className="h-4 w-4" />
      case "phone":
        return <Phone className="h-4 w-4" />
      case "in-person":
        return <MapPin className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Initial":
        return "text-blue-600"
      case "Follow-up":
        return "text-green-600"
      case "Consultation":
        return "text-purple-600"
      case "Check-up":
        return "text-orange-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
          <p className="text-gray-600">Manage your appointments and availability</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Appointment
          </Button>
        </div>
      </div>

      {/* Today's Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700">Today's Appointments</p>
                <p className="text-2xl font-bold text-blue-900">5</p>
              </div>
              <CalendarIcon className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700">Confirmed</p>
                <p className="text-2xl font-bold text-green-900">3</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-amber-700">Pending</p>
                <p className="text-2xl font-bold text-amber-900">1</p>
              </div>
              <AlertCircle className="h-8 w-8 text-amber-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-700">Total Hours</p>
                <p className="text-2xl font-bold text-purple-900">6.5</p>
              </div>
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" />
          </CardContent>
        </Card>

        {/* Schedule */}
        <div className="lg:col-span-3">
          <Tabs value={selectedView} onValueChange={setSelectedView}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="day">Day View</TabsTrigger>
              <TabsTrigger value="week">Week View</TabsTrigger>
              <TabsTrigger value="month">Month View</TabsTrigger>
            </TabsList>

            <TabsContent value="day" className="space-y-4">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Today's Schedule</span>
                    <span className="text-sm font-normal text-gray-600">{selectedDate?.toDateString()}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="border rounded-xl p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={appointment.avatar || "/placeholder.svg"} alt={appointment.patientName} />
                            <AvatarFallback>
                              {appointment.patientName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-gray-900">{appointment.patientName}</h4>
                            <p className="text-sm text-gray-600">ID: {appointment.patientId}</p>
                            <p className="text-sm text-gray-700 mt-1">{appointment.reason}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                            <Badge variant="outline" className={getTypeColor(appointment.type)}>
                              {appointment.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{appointment.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getModeIcon(appointment.mode)}
                            <span className="capitalize">{appointment.mode}</span>
                          </div>
                          <span>{appointment.duration}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4 mr-1" />
                            Call
                          </Button>
                          {appointment.mode === "video" && (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                              <Video className="h-4 w-4 mr-1" />
                              Join
                            </Button>
                          )}
                        </div>
                      </div>

                      {appointment.notes && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <strong>Notes:</strong> {appointment.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="week" className="space-y-4">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Week View</CardTitle>
                  <CardDescription>Weekly schedule overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <div key={day} className="text-center font-medium text-gray-700 p-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 7 }, (_, i) => (
                      <div key={i} className="border rounded-lg p-2 min-h-[200px]">
                        <div className="text-sm font-medium text-gray-600 mb-2">
                          {new Date(Date.now() + i * 24 * 60 * 60 * 1000).getDate()}
                        </div>
                        {i === 0 && (
                          <div className="space-y-1">
                            <div className="text-xs bg-blue-100 text-blue-800 p-1 rounded">9:00 AM - Sarah J.</div>
                            <div className="text-xs bg-green-100 text-green-800 p-1 rounded">10:00 AM - Michael C.</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="month" className="space-y-4">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Month View</CardTitle>
                  <CardDescription>Monthly schedule overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-gray-600">
                    <CalendarIcon className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <p>Month view calendar would be implemented here</p>
                    <p className="text-sm">Full calendar integration with appointment details</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Available Time Slots */}
      <Card className="bg-white border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Available Time Slots</CardTitle>
          <CardDescription>Manage your availability for new appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-6 md:grid-cols-9 gap-2">
            {timeSlots.map((slot) => {
              const isBooked = appointments.some((apt) => apt.time === slot)
              return (
                <Button
                  key={slot}
                  variant={isBooked ? "secondary" : "outline"}
                  size="sm"
                  className={`text-xs ${isBooked ? "bg-red-100 text-red-800" : "hover:bg-green-50 hover:text-green-800"}`}
                  disabled={isBooked}
                >
                  {slot}
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
