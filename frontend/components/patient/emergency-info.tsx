
"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

// ✅ Correct backend API port
const API_BASE = "http://localhost:4000"

export default function EmergencyInfoForm({ userId }: { userId: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    bloodGroup: "",
    allergies: "",
    chronicConditions: "",
    medications: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: "",
    notes: "",
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${API_BASE}/api/emergency/${userId}`) // ✅ GET with full API base
        const { data } = await res.json()
        if (data) {
          setFormData({
            fullName: data.fullName || "",
            age: data.age || "",
            bloodGroup: data.bloodGroup || "",
            allergies: data.allergies?.join(", ") || "",
            chronicConditions: data.chronicConditions?.join(", ") || "",
            medications: data.medications?.join(", ") || "",
            emergencyContactName: data.emergencyContacts?.[0]?.name || "",
            emergencyContactPhone: data.emergencyContacts?.[0]?.phone || "",
            emergencyContactRelation: data.emergencyContacts?.[0]?.relation || "",
            notes: data.notes || "",
          })
        }
      } catch (error) {
        console.error("❌ Failed to fetch emergency data:", error)
      }
    }

    fetchData()
  }, [userId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      userId,
      fullName: formData.fullName,
      age: Number(formData.age),
      bloodGroup: formData.bloodGroup,
      allergies: formData.allergies.split(",").map((s) => s.trim()),
      chronicConditions: formData.chronicConditions.split(",").map((s) => s.trim()),
      medications: formData.medications.split(",").map((s) => s.trim()),
      emergencyContacts: [
        {
          name: formData.emergencyContactName,
          phone: formData.emergencyContactPhone,
          relation: formData.emergencyContactRelation,
        },
      ],
      notes: formData.notes,
    }

    try {
      const res = await fetch(`${API_BASE}/api/emergency/save`, { // ✅ POST with full API base
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await res.json()
      console.log("✅ API response:", result)

      if (result.success) alert("Emergency Info Saved!")
      else alert("Error: " + result.error)
    } catch (err: any) {
      console.error("❌ Error submitting emergency info:", err)
      alert(`Something went wrong: ${err.message || "Unknown error"}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-auto">
      <div>
        <Label>Full Name</Label>
        <Input name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Age</Label>
          <Input name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div>
          <Label>Blood Group</Label>
          <Input name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
        </div>
      </div>

      <div>
        <Label>Allergies (comma separated)</Label>
        <Input name="allergies" value={formData.allergies} onChange={handleChange} />
      </div>

      <div>
        <Label>Chronic Conditions (comma separated)</Label>
        <Input name="chronicConditions" value={formData.chronicConditions} onChange={handleChange} />
      </div>

      <div>
        <Label>Medications (comma separated)</Label>
        <Input name="medications" value={formData.medications} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label>Contact Name</Label>
          <Input name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} />
        </div>
        <div>
          <Label>Phone</Label>
          <Input name="emergencyContactPhone" value={formData.emergencyContactPhone} onChange={handleChange} />
        </div>
        <div>
          <Label>Relation</Label>
          <Input name="emergencyContactRelation" value={formData.emergencyContactRelation} onChange={handleChange} />
        </div>
      </div>

      <div>
        <Label>Additional Notes</Label>
        <Textarea name="notes" value={formData.notes} onChange={handleChange} />
      </div>

      <Button type="submit" className="w-full bg-sky-600 text-white hover:bg-sky-700">
        Save Emergency Info
      </Button>
    </form>
  )
}
