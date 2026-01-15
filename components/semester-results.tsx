"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Semester } from "./gpa-calculator"

interface SemesterResultsProps {
  semester: Semester
}

export default function SemesterResults({ semester }: SemesterResultsProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="bg-gradient-to-r from-slate-100 to-slate-50 border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg text-slate-900">Semester {semester.semesterNumber}</CardTitle>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{semester.gpa.toFixed(2)}</div>
            <div className="text-xs text-slate-600">GPA (out of 4)</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-3">
          {semester.subjects.map((subject) => (
            <div
              key={subject.id}
              className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
            >
              <div className="flex-1">
                <p className="font-medium text-slate-900">{subject.name}</p>
                <p className="text-sm text-slate-600">Credit: {subject.creditPoints}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-slate-900">{subject.marks}</p>
                <p className="text-xs text-slate-600">Marks</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-2 gap-4">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-slate-600 mb-1">Total Credits</p>
            <p className="text-2xl font-bold text-blue-600">{semester.totalCredits}</p>
          </div>
          <div className="p-3 bg-teal-50 rounded-lg border border-teal-200">
            <p className="text-sm text-slate-600 mb-1">Total Points</p>
            <p className="text-2xl font-bold text-teal-600">{semester.totalPoints.toFixed(0)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
