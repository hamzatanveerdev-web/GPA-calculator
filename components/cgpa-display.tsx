"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

interface CgpaDisplayProps {
  cgpa: number
}

export default function CgpaDisplay({ cgpa }: CgpaDisplayProps) {
  let statusColor = "text-slate-600"
  let statusBg = "bg-slate-50"
  let statusBorder = "border-slate-200"

  if (cgpa >= 3.5) {
    statusColor = "text-green-600"
    statusBg = "bg-green-50"
    statusBorder = "border-green-200"
  } else if (cgpa >= 3.0) {
    statusColor = "text-blue-600"
    statusBg = "bg-blue-50"
    statusBorder = "border-blue-200"
  } else if (cgpa >= 2.5) {
    statusColor = "text-yellow-600"
    statusBg = "bg-yellow-50"
    statusBorder = "border-yellow-200"
  }

  return (
    <Card className={`mb-8 shadow-lg border-2 ${statusBorder} ${statusBg}`}>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full ${statusBg}`}>
              <Award className={`w-8 h-8 ${statusColor}`} />
            </div>
            <div>
              <p className="text-slate-600 text-sm font-medium">Cumulative GPA</p>
              <p className={`text-5xl font-bold ${statusColor}`}>{cgpa.toFixed(2)}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-slate-600 text-sm mb-1">Performance Level</p>
            <p className={`text-lg font-semibold ${statusColor}`}>
              {cgpa >= 3.5 ? "🌟 Excellent" : cgpa >= 3.0 ? "⭐ Very Good" : cgpa >= 2.5 ? "✓ Good" : "→ Fair"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
