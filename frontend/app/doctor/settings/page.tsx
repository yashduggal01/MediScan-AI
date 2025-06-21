"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Shield,
  Eye,
  Smartphone,
  Trash2,
  Download,
  AlertTriangle,
  CheckCircle,
  Key,
  Calendar,
  DollarSign,
  Users,
} from "lucide-react"

export default function DoctorSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    appointments: true,
    newPatients: true,
    emergencies: true,
    reports: true,
    marketing: false,
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    shareAnalytics: false,
    dataExport: true,
    researchParticipation: false,
  })

  const [security, setSecurity] = useState({
    twoFactor: true,
    biometric: true,
    sessionTimeout: "60",
  })

  const [practice, setPractice] = useState({
    autoBooking: true,
    bufferTime: "15",
    maxAdvanceBooking: "30",
    cancellationPolicy: "24",
    reminderTime: "24",
  })

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }))
  }

  const handlePrivacyChange = (key: string, value: boolean | string) => {
    setPrivacy((prev) => ({ ...prev, [key]: value }))
  }

  const handleSecurityChange = (key: string, value: boolean | string) => {
    setSecurity((prev) => ({ ...prev, [key]: value }))
  }

  const handlePracticeChange = (key: string, value: boolean | string) => {
    setPractice((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and practice settings</p>
      </div>

      <Tabs defaultValue="notifications" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
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
                      <Label htmlFor="appointment-notifications">Appointment Updates</Label>
                      <p className="text-sm text-gray-600">New appointments, cancellations, and changes</p>
                    </div>
                    <Switch
                      id="appointment-notifications"
                      checked={notifications.appointments}
                      onCheckedChange={(checked) => handleNotificationChange("appointments", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="patient-notifications">New Patient Registrations</Label>
                      <p className="text-sm text-gray-600">Get notified when new patients register</p>
                    </div>
                    <Switch
                      id="patient-notifications"
                      checked={notifications.newPatients}
                      onCheckedChange={(checked) => handleNotificationChange("newPatients", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emergency-notifications">Emergency Alerts</Label>
                      <p className="text-sm text-gray-600">Critical patient alerts and emergencies</p>
                    </div>
                    <Switch
                      id="emergency-notifications"
                      checked={notifications.emergencies}
                      onCheckedChange={(checked) => handleNotificationChange("emergencies", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="report-notifications">New Reports</Label>
                      <p className="text-sm text-gray-600">Lab results, imaging reports, and AI insights</p>
                    </div>
                    <Switch
                      id="report-notifications"
                      checked={notifications.reports}
                      onCheckedChange={(checked) => handleNotificationChange("reports", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing-notifications">Platform Updates</Label>
                      <p className="text-sm text-gray-600">New features, updates, and announcements</p>
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
              <CardDescription>Control your profile visibility and data sharing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="profile-visibility">Profile Visibility</Label>
                  <Select
                    value={privacy.profileVisibility}
                    onValueChange={(value) => handlePrivacyChange("profileVisibility", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public - Visible to all patients</SelectItem>
                      <SelectItem value="registered">Registered patients only</SelectItem>
                      <SelectItem value="referral">Referral only</SelectItem>
                      <SelectItem value="private">Private - Not visible</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-600">Control who can see your profile in patient searches</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="share-analytics">Share Anonymous Analytics</Label>
                    <p className="text-sm text-gray-600">Help improve platform with anonymous usage data</p>
                  </div>
                  <Switch
                    id="share-analytics"
                    checked={privacy.shareAnalytics}
                    onCheckedChange={(checked) => handlePrivacyChange("shareAnalytics", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="data-export">Data Export</Label>
                    <p className="text-sm text-gray-600">Allow exporting your practice data</p>
                  </div>
                  <Switch
                    id="data-export"
                    checked={privacy.dataExport}
                    onCheckedChange={(checked) => handlePrivacyChange("dataExport", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="research-participation">Research Participation</Label>
                    <p className="text-sm text-gray-600">Participate in medical research studies (anonymized)</p>
                  </div>
                  <Switch
                    id="research-participation"
                    checked={privacy.researchParticipation}
                    onCheckedChange={(checked) => handlePrivacyChange("researchParticipation", checked)}
                  />
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download My Data</span>
                </Button>
                <p className="text-sm text-gray-500 mt-2">Export all your practice data in a portable format</p>
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
                      <SelectItem value="480">8 hours</SelectItem>
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

        <TabsContent value="practice" className="space-y-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span>Practice Settings</span>
              </CardTitle>
              <CardDescription>Configure your appointment and practice preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auto-booking">Auto-Accept Appointments</Label>
                    <p className="text-sm text-gray-600">Automatically accept appointment requests</p>
                  </div>
                  <Switch
                    id="auto-booking"
                    checked={practice.autoBooking}
                    onCheckedChange={(checked) => handlePracticeChange("autoBooking", checked)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="buffer-time">Buffer Time Between Appointments</Label>
                  <Select
                    value={practice.bufferTime}
                    onValueChange={(value) => handlePracticeChange("bufferTime", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No buffer</SelectItem>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="advance-booking">Maximum Advance Booking</Label>
                  <Select
                    value={practice.maxAdvanceBooking}
                    onValueChange={(value) => handlePracticeChange("maxAdvanceBooking", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">1 week</SelectItem>
                      <SelectItem value="14">2 weeks</SelectItem>
                      <SelectItem value="30">1 month</SelectItem>
                      <SelectItem value="60">2 months</SelectItem>
                      <SelectItem value="90">3 months</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-600">How far in advance patients can book</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cancellation-policy">Cancellation Policy</Label>
                  <Select
                    value={practice.cancellationPolicy}
                    onValueChange={(value) => handlePracticeChange("cancellationPolicy", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 hours notice</SelectItem>
                      <SelectItem value="4">4 hours notice</SelectItem>
                      <SelectItem value="12">12 hours notice</SelectItem>
                      <SelectItem value="24">24 hours notice</SelectItem>
                      <SelectItem value="48">48 hours notice</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-600">Minimum notice required for cancellations</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reminder-time">Appointment Reminders</Label>
                  <Select
                    value={practice.reminderTime}
                    onValueChange={(value) => handlePracticeChange("reminderTime", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 hour before</SelectItem>
                      <SelectItem value="2">2 hours before</SelectItem>
                      <SelectItem value="4">4 hours before</SelectItem>
                      <SelectItem value="24">24 hours before</SelectItem>
                      <SelectItem value="48">48 hours before</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-600">When to send appointment reminders</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span>Billing & Payments</span>
              </CardTitle>
              <CardDescription>Manage your payment methods and billing preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-medium text-green-900">Professional Plan Active</h3>
                    <p className="text-sm text-green-700">Your subscription renews on January 15, 2025</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Manage Subscription
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Payment Methods
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Billing History
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Tax Documents
                </Button>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-gray-900 mb-3">Payment Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Auto-pay</Label>
                      <p className="text-sm text-gray-600">Automatically pay subscription fees</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Payment Receipts</Label>
                      <p className="text-sm text-gray-600">Email receipts for all payments</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-gray-600" />
                <span>Account Management</span>
              </CardTitle>
              <CardDescription>Manage your account and team settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-blue-900">Account Verified</h3>
                      <p className="text-sm text-blue-700">Your medical credentials are verified and active</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Team Management
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Account Activity
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    API Access
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Integrations
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
                  Export & Delete Patient Data
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 border-red-300 hover:bg-red-50">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Deactivate Account
                </Button>
              </div>
              <p className="text-sm text-red-600">
                Deactivating your account will remove your profile from patient searches and cancel all future
                appointments.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
