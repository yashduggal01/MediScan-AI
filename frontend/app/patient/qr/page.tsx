"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { QrCode, Download, PrinterIcon as Print, AlertTriangle, Heart, Phone, User, Pill, Shield } from "lucide-react"

const emergencyData = {
  personalInfo: {
    name: "Sarah Johnson",
    age: 34,
    bloodGroup: "O+",
    height: "5'6\"",
    weight: "70 kg",
    emergencyContact: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
  },
  medicalInfo: {
    allergies: ["Penicillin", "Shellfish", "Latex"],
    chronicConditions: ["Type 2 Diabetes", "Mild Anemia", "Hypertension"],
    currentMedications: [
      "Metformin 500mg - Twice daily",
      "Lisinopril 10mg - Once daily",
      "Iron supplement - Once daily",
    ],
    recentProcedures: ["Blood test (June 2024)", "Annual physical (May 2024)"],
    insuranceInfo: "Blue Cross Blue Shield - Policy #ABC123456",
  },
  emergencyContacts: [
    { name: "John Johnson (Spouse)", phone: "+1 (555) 123-4567", relation: "Spouse" },
    { name: "Dr. Sarah Wilson", phone: "+1 (555) 987-6543", relation: "Primary Care" },
    { name: "Mary Johnson (Sister)", phone: "+1 (555) 456-7890", relation: "Sister" },
  ],
}

export default function QRAccess() {
  const [includeFullMedical, setIncludeFullMedical] = useState(false)
  const [includeInsurance, setIncludeInsurance] = useState(true)
  const [customNotes, setCustomNotes] = useState("")

  const generateQRData = () => {
    const qrData = {
      name: emergencyData.personalInfo.name,
      age: emergencyData.personalInfo.age,
      bloodGroup: emergencyData.personalInfo.bloodGroup,
      allergies: emergencyData.medicalInfo.allergies,
      conditions: emergencyData.medicalInfo.chronicConditions,
      medications: emergencyData.medicalInfo.currentMedications,
      emergencyContact: emergencyData.emergencyContacts[0],
      ...(includeInsurance && { insurance: emergencyData.medicalInfo.insuranceInfo }),
      ...(includeFullMedical && {
        recentProcedures: emergencyData.medicalInfo.recentProcedures,
        height: emergencyData.personalInfo.height,
        weight: emergencyData.personalInfo.weight,
      }),
      ...(customNotes && { notes: customNotes }),
      generatedAt: new Date().toISOString(),
      accessLevel: "emergency",
    }
    return JSON.stringify(qrData)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Emergency QR Access</h1>
          <p className="text-gray-600">Generate QR codes for emergency medical access</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Print className="h-4 w-4 mr-2" />
            Print Card
          </Button>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white">
            <Download className="h-4 w-4 mr-2" />
            Download QR
          </Button>
        </div>
      </div>

      {/* Alert */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900">Important Security Notice</h3>
              <p className="text-sm text-amber-800 mt-1">
                QR codes contain sensitive medical information. Only share with trusted medical professionals and keep
                physical copies secure. Generated QR codes expire after 30 days for security.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* QR Code Generation */}
        <div className="space-y-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <QrCode className="h-5 w-5 text-sky-600" />
                <span>Generate Emergency QR</span>
              </CardTitle>
              <CardDescription>Customize what information to include</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* QR Code Display */}
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">QR Code Preview</p>
                    <p className="text-xs text-gray-500">Click Generate to create</p>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="full-medical">Include Full Medical History</Label>
                    <p className="text-sm text-gray-600">Recent procedures, detailed measurements</p>
                  </div>
                  <Switch id="full-medical" checked={includeFullMedical} onCheckedChange={setIncludeFullMedical} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="insurance">Include Insurance Information</Label>
                    <p className="text-sm text-gray-600">Policy details for billing</p>
                  </div>
                  <Switch id="insurance" checked={includeInsurance} onCheckedChange={setIncludeInsurance} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-notes">Custom Emergency Notes</Label>
                  <Textarea
                    id="custom-notes"
                    placeholder="Add any specific instructions for emergency responders..."
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">Generate QR Code</Button>
            </CardContent>
          </Card>

          {/* QR Types */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle>QR Code Types</CardTitle>
              <CardDescription>Different QR codes for different situations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="p-3 border rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Emergency Full Access</h4>
                        <p className="text-sm text-gray-600">Complete medical information</p>
                      </div>
                    </div>
                    <Badge variant="destructive">Critical</Badge>
                  </div>
                </div>

                <div className="p-3 border rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Heart className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Basic Medical Info</h4>
                        <p className="text-sm text-gray-600">Allergies, conditions, medications</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Standard</Badge>
                  </div>
                </div>

                <div className="p-3 border rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Contact Only</h4>
                        <p className="text-sm text-gray-600">Emergency contacts and basic info</p>
                      </div>
                    </div>
                    <Badge variant="outline">Minimal</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Information Preview */}
        <div className="space-y-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-green-600" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-gray-600">Full Name</Label>
                  <p className="font-medium">{emergencyData.personalInfo.name}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-600">Age</Label>
                  <p className="font-medium">{emergencyData.personalInfo.age} years</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-600">Blood Group</Label>
                  <Badge className="bg-red-100 text-red-800">{emergencyData.personalInfo.bloodGroup}</Badge>
                </div>
                <div>
                  <Label className="text-sm text-gray-600">Weight</Label>
                  <p className="font-medium">{emergencyData.personalInfo.weight}</p>
                </div>
              </div>
              <div>
                <Label className="text-sm text-gray-600">Emergency Contact</Label>
                <p className="font-medium">{emergencyData.personalInfo.emergencyContact}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-600" />
                <span>Medical Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm text-gray-600 mb-2 block">Allergies</Label>
                <div className="flex flex-wrap gap-2">
                  {emergencyData.medicalInfo.allergies.map((allergy, index) => (
                    <Badge key={index} variant="destructive" className="bg-red-100 text-red-800">
                      {allergy}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-sm text-gray-600 mb-2 block">Chronic Conditions</Label>
                <div className="space-y-1">
                  {emergencyData.medicalInfo.chronicConditions.map((condition, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-sm">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-sm text-gray-600 mb-2 block">Current Medications</Label>
                <div className="space-y-1">
                  {emergencyData.medicalInfo.currentMedications.map((medication, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Pill className="h-3 w-3 text-blue-600" />
                      <span className="text-sm">{medication}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>Emergency Contacts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {emergencyData.emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.relation}</p>
                  </div>
                  <p className="text-sm font-medium text-blue-600">{contact.phone}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Security Features */}
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <span>Security Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Blockchain-secured data integrity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>30-day automatic expiration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Access logging and audit trail</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Emergency-only access permissions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
