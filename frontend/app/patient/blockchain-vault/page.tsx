"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Upload,
  Shield,
  FileText,
  Eye,
  Download,
  Share,
  CheckCircle,
  AlertCircle,
  Brain,
  Zap,
  Clock,
  Hash,
} from "lucide-react"

interface UploadedReport {
  id: string
  name: string
  type: string
  uploadDate: string
  size: string
  status: "processing" | "completed" | "failed"
  aiAnalysis?: {
    keyFindings: string[]
    riskFactors: string[]
    recommendations: string[]
  }
  blockchainHash: string
  shareConsent: boolean
}

export default function BlockchainVault() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [reports, setReports] = useState<UploadedReport[]>([
    {
      id: "1",
      name: "Blood Test Results - June 2024",
      type: "Lab Report",
      uploadDate: "2024-06-15",
      size: "2.4 MB",
      status: "completed",
      aiAnalysis: {
        keyFindings: ["Hemoglobin: 13.2 g/dL (Normal)", "Glucose: 94 mg/dL (Normal)", "Cholesterol: 185 mg/dL (Good)"],
        riskFactors: ["Slightly elevated LDL cholesterol"],
        recommendations: ["Continue current diet", "Regular exercise", "Monitor cholesterol levels"],
      },
      blockchainHash: "0x1a2b3c4d5e6f7890abcdef1234567890",
      shareConsent: true,
    },
    {
      id: "2",
      name: "Chest X-Ray Report",
      type: "Imaging",
      uploadDate: "2024-06-10",
      size: "15.8 MB",
      status: "completed",
      aiAnalysis: {
        keyFindings: ["Clear lung fields", "Normal heart size", "No acute findings"],
        riskFactors: ["None identified"],
        recommendations: ["Routine follow-up as needed"],
      },
      blockchainHash: "0x9876543210fedcba0987654321abcdef",
      shareConsent: false,
    },
    {
      id: "3",
      name: "MRI Scan - Processing",
      type: "Imaging",
      uploadDate: "2024-06-20",
      size: "45.2 MB",
      status: "processing",
      blockchainHash: "0xprocessing...",
      shareConsent: true,
    },
  ])

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          // Add new report to the list
          const newReport: UploadedReport = {
            id: Date.now().toString(),
            name: files[0].name,
            type: "Lab Report",
            uploadDate: new Date().toISOString().split("T")[0],
            size: `${(files[0].size / 1024 / 1024).toFixed(1)} MB`,
            status: "processing",
            blockchainHash: "0xprocessing...",
            shareConsent: false,
          }
          setReports((prev) => [newReport, ...prev])
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const toggleShareConsent = (reportId: string) => {
    setReports((prev) =>
      prev.map((report) => (report.id === reportId ? { ...report, shareConsent: !report.shareConsent } : report)),
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blockchain Vault</h1>
          <p className="text-gray-600">Secure, AI-powered medical report management</p>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-green-500" />
          <span className="text-sm text-green-600 font-medium">Blockchain Secured</span>
        </div>
      </div>

      {/* Upload Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-dashed border-blue-200">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Upload className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Medical Reports</h3>
            <p className="text-gray-600 mb-4">
              Drag and drop your medical files here, or click to browse. AI will automatically extract and analyze key
              data points.
            </p>

            {isUploading ? (
              <div className="space-y-4">
                <Progress value={uploadProgress} className="w-full max-w-md mx-auto" />
                <p className="text-sm text-blue-600">Uploading and encrypting... {uploadProgress}%</p>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png,.dicom"
                  onChange={handleFileUpload}
                  multiple
                />
                <label htmlFor="file-upload">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">Choose Files</Button>
                </label>
                <p className="text-sm text-gray-500">
                  Supported formats: PDF, JPG, PNG, DICOM • Max size: 50MB per file
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Blockchain Security Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Encrypted Storage</h3>
                <p className="text-sm text-gray-600">Military-grade encryption</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Brain className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AI Analysis</h3>
                <p className="text-sm text-gray-600">Automated data extraction</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Eye className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Consent Control</h3>
                <p className="text-sm text-gray-600">You control data sharing</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports List */}
      <Card className="bg-white border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Your Medical Reports</CardTitle>
          <CardDescription>All reports are secured with blockchain technology</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="border rounded-xl p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{report.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span>{report.type}</span>
                        <span>{report.uploadDate}</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        report.status === "completed"
                          ? "secondary"
                          : report.status === "processing"
                            ? "outline"
                            : "destructive"
                      }
                      className={
                        report.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : report.status === "processing"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                      }
                    >
                      {report.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {report.status === "processing" && <Clock className="h-3 w-3 mr-1" />}
                      {report.status === "failed" && <AlertCircle className="h-3 w-3 mr-1" />}
                      {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                    </Badge>
                  </div>
                </div>

                {/* Blockchain Hash */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Hash className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Blockchain Hash</span>
                  </div>
                  <code className="text-xs text-gray-600 font-mono">{report.blockchainHash}</code>
                </div>

                {/* AI Analysis */}
                {report.aiAnalysis && (
                  <div className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Brain className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-900">AI Analysis</span>
                    </div>

                    <Tabs defaultValue="findings" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="findings">Key Findings</TabsTrigger>
                        <TabsTrigger value="risks">Risk Factors</TabsTrigger>
                        <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                      </TabsList>

                      <TabsContent value="findings" className="mt-3">
                        <ul className="space-y-1">
                          {report.aiAnalysis.keyFindings.map((finding, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>{finding}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>

                      <TabsContent value="risks" className="mt-3">
                        <ul className="space-y-1">
                          {report.aiAnalysis.riskFactors.map((risk, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-center space-x-2">
                              <AlertCircle className="h-3 w-3 text-amber-500" />
                              <span>{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>

                      <TabsContent value="recommendations" className="mt-3">
                        <ul className="space-y-1">
                          {report.aiAnalysis.recommendations.map((rec, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-center space-x-2">
                              <Zap className="h-3 w-3 text-blue-500" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Label htmlFor={`consent-${report.id}`} className="text-sm text-gray-600">
                      Share with doctors
                    </Label>
                    <input
                      type="checkbox"
                      id={`consent-${report.id}`}
                      checked={report.shareConsent}
                      onChange={() => toggleShareConsent(report.id)}
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Features */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-green-600" />
            <span>Security Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-700">End-to-end encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-700">Immutable blockchain storage</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-700">Granular access controls</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-700">Audit trail for all access</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-700">HIPAA compliant infrastructure</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-700">Zero-knowledge architecture</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
