"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Search, Download, Eye, Calendar, User, Activity } from "lucide-react"

const medicalRecords = [
  {
    id: 1,
    title: "Complete Blood Count",
    date: "2024-06-15",
    doctor: "Dr. Sarah Johnson",
    department: "Hematology",
    type: "Lab Report",
    status: "Normal",
    tags: ["Hemoglobin: 13.2 g/dL", "WBC: 7,200", "Platelets: 250,000"],
    summary: "All blood parameters within normal range. Slight improvement in hemoglobin levels.",
  },
  {
    id: 2,
    title: "Chest X-Ray",
    date: "2024-06-10",
    doctor: "Dr. Michael Chen",
    department: "Radiology",
    type: "Imaging",
    status: "Normal",
    tags: ["Clear lungs", "Normal heart size"],
    summary: "No abnormalities detected. Lungs are clear with no signs of infection.",
  },
  {
    id: 3,
    title: "Lipid Profile",
    date: "2024-06-05",
    doctor: "Dr. Emily Davis",
    department: "Cardiology",
    type: "Lab Report",
    status: "Attention",
    tags: ["Cholesterol: 220 mg/dL", "LDL: 140 mg/dL", "HDL: 45 mg/dL"],
    summary: "Cholesterol levels slightly elevated. Recommend dietary modifications.",
  },
  {
    id: 4,
    title: "Annual Physical Exam",
    date: "2024-05-20",
    doctor: "Dr. Robert Wilson",
    department: "General Medicine",
    type: "Physical Exam",
    status: "Normal",
    tags: ["BP: 120/80", "Weight: 70kg", "BMI: 22.5"],
    summary: "Overall health is good. Continue current lifestyle and medications.",
  },
]

export default function MedicalRecords() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const filteredRecords = medicalRecords.filter((record) => {
    const matchesSearch =
      record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "all" || record.department.toLowerCase() === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Medical Records</h1>
          <p className="text-gray-600">Manage and view your medical documents</p>
        </div>
        <Button className="bg-sky-500 hover:bg-sky-600 text-white">
          <Upload className="h-4 w-4 mr-2" />
          Upload New Record
        </Button>
      </div>

      {/* Upload Area */}
      <Card className="bg-gradient-to-r from-sky-50 to-emerald-50 border-2 border-dashed border-sky-200">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Upload className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Medical Reports</h3>
            <p className="text-gray-600 mb-4">Drag and drop your PDF files here, or click to browse</p>
            <Button variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50">
              Choose Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search records, doctors, or departments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Tabs value={selectedDepartment} onValueChange={setSelectedDepartment} className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="cardiology">Cardio</TabsTrigger>
            <TabsTrigger value="hematology">Hemato</TabsTrigger>
            <TabsTrigger value="radiology">Radio</TabsTrigger>
            <TabsTrigger value="general medicine">General</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Records Grid */}
      <div className="grid gap-4">
        {filteredRecords.map((record) => (
          <Card key={record.id} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{record.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{record.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{record.doctor}</span>
                        </div>
                        <Badge variant="outline">{record.department}</Badge>
                      </div>
                    </div>
                    <Badge
                      variant={record.status === "Normal" ? "secondary" : "destructive"}
                      className={record.status === "Normal" ? "bg-green-100 text-green-800" : ""}
                    >
                      {record.status}
                    </Badge>
                  </div>

                  <p className="text-gray-700 mb-3">{record.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {record.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Analysis Summary */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-purple-600" />
            <span>AI Health Analysis</span>
          </CardTitle>
          <CardDescription>Based on your recent medical records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Key Insights</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Your hemoglobin levels have improved by 0.8 g/dL since last month</li>
                <li>• Cholesterol levels need attention - consider dietary changes</li>
                <li>• Overall cardiovascular health is stable</li>
                <li>• No concerning patterns detected in recent tests</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Recommendations</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Schedule follow-up lipid profile in 3 months</li>
                <li>• Continue current iron supplementation</li>
                <li>• Maintain regular exercise routine</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
