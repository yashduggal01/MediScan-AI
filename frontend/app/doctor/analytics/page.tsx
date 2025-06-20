"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"
import {
  TrendingUp,
  TrendingDown,
  Users,
  Calendar,
  Activity,
  Brain,
  AlertTriangle,
  CheckCircle,
  Heart,
} from "lucide-react"

const patientData = [
  { month: "Jan", patients: 45, newPatients: 12, followUps: 33 },
  { month: "Feb", patients: 52, newPatients: 15, followUps: 37 },
  { month: "Mar", patients: 48, newPatients: 10, followUps: 38 },
  { month: "Apr", patients: 61, newPatients: 18, followUps: 43 },
  { month: "May", patients: 55, newPatients: 13, followUps: 42 },
  { month: "Jun", patients: 67, newPatients: 20, followUps: 47 },
]

const conditionData = [
  { name: "Diabetes", value: 35, color: "#3B82F6" },
  { name: "Hypertension", value: 28, color: "#EF4444" },
  { name: "Heart Disease", value: 15, color: "#F59E0B" },
  { name: "Respiratory", value: 12, color: "#10B981" },
  { name: "Other", value: 10, color: "#8B5CF6" },
]

const appointmentData = [
  { day: "Mon", scheduled: 8, completed: 7, cancelled: 1 },
  { day: "Tue", scheduled: 10, completed: 9, cancelled: 1 },
  { day: "Wed", scheduled: 12, completed: 11, cancelled: 1 },
  { day: "Thu", scheduled: 9, completed: 8, cancelled: 1 },
  { day: "Fri", scheduled: 11, completed: 10, cancelled: 1 },
  { day: "Sat", scheduled: 6, completed: 5, cancelled: 1 },
  { day: "Sun", scheduled: 4, completed: 4, cancelled: 0 },
]

const outcomeData = [
  { month: "Jan", improved: 78, stable: 15, declined: 7 },
  { month: "Feb", improved: 82, stable: 12, declined: 6 },
  { month: "Mar", improved: 75, stable: 18, declined: 7 },
  { month: "Apr", improved: 85, stable: 10, declined: 5 },
  { month: "May", improved: 80, stable: 14, declined: 6 },
  { month: "Jun", improved: 88, stable: 8, declined: 4 },
]

export default function DoctorAnalytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600">Insights into your practice and patient outcomes</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Patients</p>
                <p className="text-2xl font-bold text-gray-900">328</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-600">+12% from last month</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">67</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-600">+22% increase</span>
                </div>
              </div>
              <Calendar className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.8</p>
                <div className="flex items-center space-x-1 mt-1">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-600">98% satisfaction</span>
                </div>
              </div>
              <Heart className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">AI Insights</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
                <div className="flex items-center space-x-1 mt-1">
                  <Brain className="h-3 w-3 text-purple-500" />
                  <span className="text-xs text-purple-600">Generated this month</span>
                </div>
              </div>
              <Brain className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="patients" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="patients">Patient Analytics</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="patients" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Patient Growth */}
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Patient Growth</CardTitle>
                <CardDescription>Monthly patient count and new registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={patientData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="patients"
                      stackId="1"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="newPatients"
                      stackId="2"
                      stroke="#10B981"
                      fill="#10B981"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Condition Distribution */}
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Patient Conditions</CardTitle>
                <CardDescription>Distribution of primary diagnoses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={conditionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {conditionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {conditionData.map((item) => (
                    <div key={item.name} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-700">{item.name}</span>
                      <span className="text-sm text-gray-500">({item.value}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Patient Demographics */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Patient Demographics</CardTitle>
              <CardDescription>Age and gender distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Age Groups</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">18-30</span>
                      <Badge variant="outline">22%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">31-50</span>
                      <Badge variant="outline">45%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">51-70</span>
                      <Badge variant="outline">28%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">70+</span>
                      <Badge variant="outline">5%</Badge>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gender</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Female</span>
                      <Badge variant="outline">58%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Male</span>
                      <Badge variant="outline">42%</Badge>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Levels</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Low Risk</span>
                      <Badge className="bg-green-100 text-green-800">65%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Medium Risk</span>
                      <Badge className="bg-amber-100 text-amber-800">25%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">High Risk</span>
                      <Badge className="bg-red-100 text-red-800">10%</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Weekly Appointments */}
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Weekly Appointments</CardTitle>
                <CardDescription>Scheduled vs completed appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={appointmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="scheduled" fill="#3B82F6" />
                    <Bar dataKey="completed" fill="#10B981" />
                    <Bar dataKey="cancelled" fill="#EF4444" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Appointment Types */}
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Appointment Statistics</CardTitle>
                <CardDescription>This month's appointment breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-900">156</p>
                    <p className="text-sm text-blue-700">Total Scheduled</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-900">142</p>
                    <p className="text-sm text-green-700">Completed</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-2xl font-bold text-amber-900">8</p>
                    <p className="text-sm text-amber-700">Rescheduled</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-900">6</p>
                    <p className="text-sm text-red-700">Cancelled</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Completion Rate</span>
                    <Badge className="bg-green-100 text-green-800">91%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Average Duration</span>
                    <Badge variant="outline">32 min</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">No-Show Rate</span>
                    <Badge className="bg-red-100 text-red-800">4%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="outcomes" className="space-y-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Patient Outcomes</CardTitle>
              <CardDescription>Treatment effectiveness and patient progress</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={outcomeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="improved" stackId="1" stroke="#10B981" fill="#10B981" />
                  <Area type="monotone" dataKey="stable" stackId="1" stroke="#F59E0B" fill="#F59E0B" />
                  <Area type="monotone" dataKey="declined" stackId="1" stroke="#EF4444" fill="#EF4444" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold text-green-900">88%</p>
                    <p className="text-sm text-green-700">Patients Improved</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-amber-600" />
                  <div>
                    <p className="text-2xl font-bold text-amber-900">8%</p>
                    <p className="text-sm text-amber-700">Stable Condition</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <TrendingDown className="h-8 w-8 text-red-600" />
                  <div>
                    <p className="text-2xl font-bold text-red-900">4%</p>
                    <p className="text-sm text-red-700">Condition Declined</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <span>AI-Generated Insights</span>
                </CardTitle>
                <CardDescription>Recent AI analysis and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">Medication Optimization</h4>
                      <p className="text-sm text-blue-800 mt-1">
                        AI identified 12 patients who may benefit from dosage adjustments based on recent lab results
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-900">Treatment Success</h4>
                      <p className="text-sm text-green-800 mt-1">
                        85% of diabetes patients show improved HbA1c levels following AI-recommended interventions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-900">Risk Prediction</h4>
                      <p className="text-sm text-amber-800 mt-1">
                        3 patients identified as high-risk for cardiovascular events in the next 6 months
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle>AI Performance Metrics</CardTitle>
                <CardDescription>Accuracy and impact of AI recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Diagnostic Accuracy</span>
                    <Badge className="bg-green-100 text-green-800">94.2%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Treatment Recommendations</span>
                    <Badge className="bg-blue-100 text-blue-800">156 this month</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Risk Predictions</span>
                    <Badge className="bg-purple-100 text-purple-800">89% accuracy</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Time Saved</span>
                    <Badge variant="outline">2.3 hrs/day</Badge>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold text-gray-900 mb-3">Top AI Recommendations</h4>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-700">• Medication adherence monitoring for diabetes patients</div>
                    <div className="text-sm text-gray-700">• Early intervention for hypertension management</div>
                    <div className="text-sm text-gray-700">• Lifestyle modification recommendations</div>
                    <div className="text-sm text-gray-700">• Preventive care scheduling optimization</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
