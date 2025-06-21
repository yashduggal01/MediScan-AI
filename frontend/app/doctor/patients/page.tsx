"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Users,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Activity,
  FileText,
  Calendar,
  MessageCircle,
} from "lucide-react"

const patients = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 34,
    condition: "Type 2 Diabetes",
    lastVisit: "2024-06-15",
    status: "stable",
    riskLevel: "low",
    adherence: 95,
    alerts: 1,
    avatar: "/placeholder.svg?height=40&width=40",
    recentMetrics: {
      bloodSugar: { value: 94, trend: "down", status: "normal" },
      bp: { value: "119/78", trend: "stable", status: "normal" },
      weight: { value: "68.8kg", trend: "down", status: "improving" },
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 45,
    condition: "Hypertension",
    lastVisit: "2024-06-12",
    status: "attention",
    riskLevel: "medium",
    adherence: 87,
    alerts: 2,
    avatar: "/placeholder.svg?height=40&width=40",
    recentMetrics: {
      bp: { value: "145/92", trend: "up", status: "elevated" },
      weight: { value: "82.1kg", trend: "stable", status: "normal" },
      heartRate: { value: "78 bpm", trend: "stable", status: "normal" },
    },
  },
  {
    id: 3,
    name: "Emily Davis",
    age: 28,
    condition: "Anemia",
    lastVisit: "2024-06-18",
    status: "improving",
    riskLevel: "low",
    adherence: 92,
    alerts: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    recentMetrics: {
      hemoglobin: { value: "12.8 g/dL", trend: "up", status: "improving" },
      iron: { value: "85 μg/dL", trend: "up", status: "normal" },
      weight: { value: "58.2kg", trend: "stable", status: "normal" },
    },
  },
  {
    id: 4,
    name: "Robert Wilson",
    age: 52,
    condition: "Diabetes + Hypertension",
    lastVisit: "2024-06-08",
    status: "critical",
    riskLevel: "high",
    adherence: 78,
    alerts: 3,
    avatar: "/placeholder.svg?height=40&width=40",
    recentMetrics: {
      bloodSugar: { value: "180 mg/dL", trend: "up", status: "high" },
      bp: { value: "160/95", trend: "up", status: "high" },
      weight: { value: "95.2kg", trend: "up", status: "concerning" },
    },
  },
]

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "all" || patient.status === selectedFilter
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "stable":
        return "bg-green-100 text-green-800"
      case "improving":
        return "bg-blue-100 text-blue-800"
      case "attention":
        return "bg-amber-100 text-amber-800"
      case "critical":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "bg-green-500"
      case "medium":
        return "bg-amber-500"
      case "high":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-3 w-3 text-red-500" />
      case "down":
        return <TrendingDown className="h-3 w-3 text-green-500" />
      case "stable":
        return <Activity className="h-3 w-3 text-gray-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
          <p className="text-gray-600">Monitor and manage your patient roster</p>
        </div>
        <Button className="bg-sky-500 hover:bg-sky-600 text-white">
          <Users className="h-4 w-4 mr-2" />
          Add Patient
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Patients</p>
                <p className="text-2xl font-bold text-gray-900">67</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">High Risk</p>
                <p className="text-2xl font-bold text-red-600">8</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Improving</p>
                <p className="text-2xl font-bold text-green-600">23</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Adherence</p>
                <p className="text-2xl font-bold text-blue-600">89%</p>
              </div>
              <Activity className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search patients by name or condition..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Tabs value={selectedFilter} onValueChange={setSelectedFilter} className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="stable">Stable</TabsTrigger>
            <TabsTrigger value="improving">Improving</TabsTrigger>
            <TabsTrigger value="attention">Attention</TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Patient List */}
      <div className="grid gap-4">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Patient Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={patient.avatar || "/placeholder.svg"} alt={patient.name} />
                    <AvatarFallback>
                      {patient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                    <p className="text-sm text-gray-600">
                      Age {patient.age} • {patient.condition}
                    </p>
                    <p className="text-xs text-gray-500">Last visit: {patient.lastVisit}</p>
                  </div>
                </div>

                {/* Status and Risk */}
                <div className="flex items-center space-x-3">
                  <Badge className={getStatusColor(patient.status)}>{patient.status}</Badge>
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${getRiskColor(patient.riskLevel)}`}></div>
                    <span className="text-xs text-gray-600">{patient.riskLevel} risk</span>
                  </div>
                  {patient.alerts > 0 && (
                    <Badge variant="destructive" className="text-xs">
                      {patient.alerts} alert{patient.alerts > 1 ? "s" : ""}
                    </Badge>
                  )}
                </div>

                {/* Metrics */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(patient.recentMetrics).map(([key, metric]) => (
                      <div key={key} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <span className="text-xs font-medium text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </span>
                          {getTrendIcon(metric.trend)}
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{metric.value}</p>
                        <p
                          className={`text-xs ${
                            metric.status === "normal" || metric.status === "improving"
                              ? "text-green-600"
                              : metric.status === "elevated" || metric.status === "high"
                                ? "text-red-600"
                                : "text-amber-600"
                          }`}
                        >
                          {metric.status}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Adherence */}
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-1">Adherence</p>
                  <div className="relative w-16 h-16">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={patient.adherence >= 90 ? "#10B981" : patient.adherence >= 80 ? "#F59E0B" : "#EF4444"}
                        strokeWidth="2"
                        strokeDasharray={`${patient.adherence}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold">{patient.adherence}%</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-2">
                  <Button size="sm" className="bg-sky-500 hover:bg-sky-600 text-white">
                    <FileText className="h-4 w-4 mr-1" />
                    View Records
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="h-4 w-4 mr-1" />
                    Schedule
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Insights */}
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-0 shadow-sm">
        <CardHeader>
          <CardTitle>AI Patient Insights</CardTitle>
          <CardDescription>Automated analysis of patient patterns and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Risk Stratification</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Robert Wilson shows concerning BP and glucose trends</li>
                <li>• Michael Chen's medication adherence declining</li>
                <li>• 3 patients may benefit from lifestyle interventions</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Positive Trends</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Emily Davis showing excellent anemia recovery</li>
                <li>• Sarah Johnson maintaining stable glucose control</li>
                <li>• Overall patient adherence improved by 5% this month</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
