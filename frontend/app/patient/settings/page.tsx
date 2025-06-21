"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Settings,
  Bell,
  Shield,
  Eye,
  Smartphone,
  Lock,
  Trash2,
  Download,
  AlertTriangle,
  CheckCircle,
  Key,
} from "lucide-react"

export default function PatientSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    appointments: true,
    medications: true,
    reports: true,
    marketing: false,
  })

  const [privacy, setPrivacy] = useState({
    shareWithDoctors: true,
    anonymousAnalytics: false,
    dataExport: true,
    emergencyAccess: true,
  })

  const [security, setSecurity] = useState({
    twoFactor: false,
    biometric: true,
    sessionTimeout: "30",
  })

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }))
  }

  const handlePrivacyChange = (key: string, value: boolean) => {
    setPrivacy((prev) => ({ ...prev, [key]: value }))
  }

  const handleSecurityChange = (key: string, value: boolean | string) => {
    setSecurity((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and security settings</p>
      </div>

      <Tabs defaultValue="notifications" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-blue-600" />
                <span>Notification Preferences</span>
              </CardTitle>
              <CardDescription>Choose how you want to be notified about important updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Notification Methods */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Notification Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-gray-600">Receive notifications via email</p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={notifications.email}
                      onCheckedChange={(checked) => handleNotificationChange("email", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <p className="text-sm text-gray-600">Receive notifications via text message</p>
                    </div>
                    <Switch
                      id="sms-notifications"
                      checked={notifications.sms}
                      onCheckedChange={(checked) => handleNotificationChange("sms", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p className="text-sm text-gray-600">Receive push notifications on your device</p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={notifications.push}
                      onCheckedChange={(checked) => handleNotificationChange("push", checked)}
                    />
                  </div>
                </div>
              </div>

              {/* Notification Types */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Notification Types</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="appointment-notifications">Appointment Reminders</Label>
                      <p className="text-sm text-gray-600">Get reminded about upcoming appointments</p>
                    </div>
                    <Switch
                      id="appointment-notifications"
                      checked={notifications.appointments}
                      onCheckedChange={(checked) => handleNotificationChange("appointments", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="medication-notifications">Medication Reminders</Label>
                      <p className="text-sm text-gray-600">Get reminded to take your medications</p>
                    </div>
                    <Switch
                      id="medication-notifications"
                      checked={notifications.medications}
                      onCheckedChange={(checked) => handleNotificationChange("medications", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="report-notifications">New Reports</Label>
                      <p className="text-sm text-gray-600">Get notified when new medical reports are available</p>
                    </div>
                    <Switch
                      id="report-notifications"
                      checked={notifications.reports}
                      onCheckedChange={(checked) => handleNotificationChange("reports", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing-notifications">Marketing Communications</Label>
                      <p className="text-sm text-gray-600">Receive updates about new features and services</p>
                    </div>
                    <Switch
                      id="marketing-notifications"
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => handleNotificationChange("marketing", checked)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-green-600" />
                <span>Privacy Controls</span>
              </CardTitle>
              <CardDescription>Control how your data is used and shared</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="share-doctors">Share Data with Doctors</Label>
                    <p className="text-sm text-gray-600">Allow your healthcare providers to access your medical data</p>
                  </div>
                  <Switch
                    id="share-doctors"
                    checked={privacy.shareWithDoctors}
                    onCheckedChange={(checked) => handlePrivacyChange("shareWithDoctors", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="anonymous-analytics">Anonymous Analytics</Label>
                    <p className="text-sm text-gray-600">Help improve our services with anonymous usage data</p>
                  </div>
                  <Switch
                    id="anonymous-analytics"
                    checked={privacy.anonymousAnalytics}
                    onCheckedChange={(checked) => handlePrivacyChange("anonymousAnalytics", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="data-export">Data Export</Label>
                    <p className="text-sm text-gray-600">Allow exporting your data in standard formats</p>
                  </div>
                  <Switch
                    id="data-export"
                    checked={privacy.dataExport}
                    onCheckedChange={(checked) => handlePrivacyChange("dataExport", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emergency-access">Emergency Access</Label>
                    <p className="text-sm text-gray-600">Allow emergency responders to access critical information</p>
                  </div>
                  <Switch
                    id="emergency-access"
                    checked={privacy.emergencyAccess}
                    onCheckedChange={(checked) => handlePrivacyChange("emergencyAccess", checked)}
                  />
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download My Data</span>
                </Button>
                <p className="text-sm text-gray-500 mt-2">Export all your data in a portable format</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-red-600" />
                <span>Security Settings</span>
              </CardTitle>
              <CardDescription>Protect your account with advanced security features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                  </div>
                  <Switch
                    id="two-factor"
                    checked={security.twoFactor}
                    onCheckedChange={(checked) => handleSecurityChange("twoFactor", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="biometric">Biometric Login</Label>
                    <p className="text-sm text-gray-600">Use fingerprint or face recognition to log in</p>
                  </div>
                  <Switch
                    id="biometric"
                    checked={security.biometric}
                    onCheckedChange={(checked) => handleSecurityChange("biometric", checked)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout</Label>
                  <Select
                    value={security.sessionTimeout}
                    onValueChange={(value) => handleSecurityChange("sessionTimeout", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-600">Automatically log out after period of inactivity</p>
                </div>
              </div>

              <div className="pt-4 border-t space-y-3">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Key className="h-4 w-4" />
                  <span>Change Password</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Smartphone className="h-4 w-4" />
                  <span>Manage Devices</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-purple-600" />
                <span>App Preferences</span>
              </CardTitle>
              <CardDescription>Customize your app experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="est">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Time (EST)</SelectItem>
                      <SelectItem value="cst">Central Time (CST)</SelectItem>
                      <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <Select defaultValue="mm-dd-yyyy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="units">Measurement Units</Label>
                  <Select defaultValue="imperial">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="imperial">Imperial (lbs, ft, °F)</SelectItem>
                      <SelectItem value="metric">Metric (kg, cm, °C)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-gray-600" />
                <span>Account Management</span>
              </CardTitle>
              <CardDescription>Manage your account and subscription</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-medium text-green-900">Pro Plan Active</h3>
                      <p className="text-sm text-green-700">Your subscription renews on January 15, 2025</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Manage Subscription
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Billing History
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Account Activity
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-red-900">
                <AlertTriangle className="h-5 w-5" />
                <span>Danger Zone</span>
              </CardTitle>
              <CardDescription className="text-red-700">
                These actions are permanent and cannot be undone
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-red-600 border-red-300 hover:bg-red-50">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete All Data
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 border-red-300 hover:bg-red-50">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </div>
              <p className="text-sm text-red-600">
                Deleting your account will permanently remove all your data and cannot be recovered.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
