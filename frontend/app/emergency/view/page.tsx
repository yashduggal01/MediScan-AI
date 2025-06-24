"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EmergencyInfoViewer() {
  const { userId } = useParams();
  const [info, setInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const API_BASE = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchInfo() {
      try {
        const res = await fetch(`${API_BASE}/api/emergency/${userId}`);
        const result = await res.json();
        setInfo(result.data || null);
      } catch (err) {
        console.error("Error loading emergency info:", err);
      } finally {
        setLoading(false);
      }
    }

    if (userId) fetchInfo();
  }, [userId]);

  if (loading) return <p className="p-4 text-gray-500">Loading emergency info...</p>;
  if (!info) return <p className="p-4 text-red-600">No emergency info found.</p>;

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold text-sky-700">🚨 Emergency Info</h1>

      <div>
        <strong>Name:</strong> {info.fullName}
      </div>
      <div>
        <strong>Age:</strong> {info.age}
      </div>
      <div>
        <strong>Blood Group:</strong> {info.bloodGroup}
      </div>
      <div>
        <strong>Allergies:</strong> {info.allergies.join(", ") || "None"}
      </div>
      <div>
        <strong>Conditions:</strong> {info.chronicConditions.join(", ") || "None"}
      </div>
      <div>
        <strong>Medications:</strong> {info.medications.join(", ") || "None"}
      </div>

      <div>
        <strong>Emergency Contact:</strong>
        <div>
          {info.emergencyContacts?.[0]?.name} – {info.emergencyContacts?.[0]?.relation} –{" "}
          {info.emergencyContacts?.[0]?.phone}
        </div>
      </div>

      <div>
        <strong>Notes:</strong> {info.notes || "None"}
      </div>
    </div>
  );
}
