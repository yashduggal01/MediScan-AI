"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  FileText,
  Activity,
  Download,
  Eye,
  Share,
  Filter,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Brain,
} from "lucide-react"

const patientRecords = [
  {
    id: 1,
    patientName: "Sarah Johnson",
    patientId: "P001",
    age: 34,
    lastVisit: "2024-06-15",
    avatar: "/placeholder.svg?height=40&width=40",
    records: [
      {
        id: "R001",
        title: "Complete Blood Count",
        type: "Lab Report",
        date: "2024-06-15",
        status: "reviewed",
        priority: "normal",
        aiInsights: ["Hemoglobin improved by 0.8 g/dL", "All parameters within normal range"],
        findings: "Normal CBC with improved hemoglobin levels",
      },
      {
        id: "R002",
        title: "Diabetes Follow-up",
        type: "Clinical Note",
        date: "2024-06-10",
        status: "pending",
        priority: "high",
        aiInsights: ["HbA1c trending downward", "Medication adherence: 95%"],
        findings: "Good glucose control, continue current regimen",
      },
    ],
    conditions: ["Type 2 Diabetes", "Mild Anemia"],
    riskLevel: "low",
  },
  {
    id: 2,
    patientName: "Michael Chen",
    patientId: "P002",
    age: 45,
    lastVisit: "2024-06-12",
    avatar: "/placeholder.svg?height=40&width=40",
    records: [
      {
        id: "R003",
        title: "Cardiac Stress Test",
        type: "Diagnostic",
        date: "2024-06-12",
        status: "reviewed",
        priority: "high",
        aiInsights: ["Elevated BP during stress", "Recommend medication adjustment"],
        findings: "Mild hypertensive response to exercise stress",
      },
      {
        id: "R004",
        title: "Lipid Panel",
        type: "Lab Report",
        date: "2024-06-08",
        status: "reviewed",
        priority: "normal",
        aiInsights: ["LDL cholesterol elevated", "HDL within normal range"],
        findings: "Dyslipidemia, consider statin therapy",
      },
    ],
    conditions: ["Hypertension", "Dyslipidemia"],
    riskLevel: "medium",
  },
  {
    id: 3,
    patientName: "Emily Davis",
    patientId: "P003",
    age: 28,
    lastVisit: "2024-06-18",
    avatar: "/placeholder.svg?height=40&width=40",
    records: [
      {
        id: "R005",
        title: "Iron Studies",
        type: "Lab Report",
        date: "2024-06-18",
        status: "reviewed",
        priority: "normal",
        aiInsights: ["Iron levels improving", "Continue supplementation"],
        findings: "Anemia responding well to treatment",
      },
    ],
    conditions: ["Iron Deficiency Anemia"],
    riskLevel: "low",
  },
]

export default function DoctorRecords() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null)

  const filteredRecords = patientRecords.filter((patient) => {
    const matchesSearch =
      patient.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.conditions.some((condition) => condition.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesFilter = selectedFilter === "all" || patient.records.some((record) => record.status === selectedFilter)

    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "reviewed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-amber-100 text-amber-800"
      case "urgent":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600"
      case "medium":
        return "text-amber-600"
      case "low":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-amber-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Records</h1>
          <p className="text-gray-600">Review and manage patient medical records</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filter
          </Button>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white">
            <Download className="h-4 w-4 mr-2" />
            Export Records
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search patients, conditions, or record types..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Tabs value={selectedFilter} onValueChange={setSelectedFilter} className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
            <TabsTrigger value="urgent">Urgent</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Records List */}
      <div className="grid gap-6">
        {filteredRecords.map((patient) => (
          <Card key={patient.id} className="bg-white border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={patient.avatar || "/placeholder.svg"} alt={patient.patientName} />
                    <AvatarFallback>
                      {patient.patientName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{patient.patientName}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>ID: {patient.patientId}</span>
                      <span>Age: {patient.age}</span>
                      <span>Last Visit: {patient.lastVisit}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${getRiskColor(patient.riskLevel)}`}></div>
                    <span className="text-xs text-gray-600">{patient.riskLevel} risk</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedPatient(selectedPatient === patient.id ? null : patient.id)}
                  >
                    {selectedPatient === patient.id ? "Hide Records" : "View Records"}
                  </Button>
                </div>
              </div>

              {/* Conditions */}
              <div className="flex flex-wrap gap-2 mt-3">
                {patient.conditions.map((condition, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {condition}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            {selectedPatient === patient.id && (
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {patient.records.map((record) => (
                    <div key={record.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{record.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <span>{record.type}</span>
                              <span>{record.date}</span>
                              <span className={`font-medium ${getPriorityColor(record.priority)}`}>
                                {record.priority} priority
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge className={getStatusColor(record.status)}>
                          {record.status === "reviewed" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {record.status === "pending" && <AlertTriangle className="h-3 w-3 mr-1" />}
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-3">{record.findings}</p>

                      {/* AI Insights */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 mb-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <Brain className="h-4 w-4 text-purple-600" />
                          <span className="text-sm font-medium text-purple-900">AI Insights</span>
                        </div>
                        <ul className="space-y-1">
                          {record.aiInsights.map((insight, index) => (
                            <li key={index} className="text-sm text-purple-800 flex items-center space-x-2">
                              <TrendingUp className="h-3 w-3" />
                              <span>{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Full
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Records</p>
                <p className="text-2xl font-bold text-gray-900">127</p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-amber-600">8</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">High Priority</p>
                <p className="text-2xl font-bold text-red-600">3</p>
              </div>
              <Activity className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">AI Analyzed</p>
                <p className="text-2xl font-bold text-purple-600">89</p>
              </div>
              <Brain className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
