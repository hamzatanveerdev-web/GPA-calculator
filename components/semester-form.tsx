"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Subject } from "./gpa-calculator"
import { Plus, X } from "lucide-react"

interface SemesterFormProps {
  onSubmit: (subjects: Subject[]) => void
  initialData?: Subject[]
}

const CREDIT_RANGES = [20, 40, 60, 80, 100]

export default function SemesterForm({ onSubmit, initialData }: SemesterFormProps) {
  const [subjects, setSubjects] = useState<Subject[]>(
    initialData || [{ id: "1", name: "", marks: 0, creditPoints: 20 }],
  )

  const addSubject = () => {
    setSubjects([...subjects, { id: Date.now().toString(), name: "", marks: 0, creditPoints: 20 }])
  }

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((s) => s.id !== id))
    }
  }

  const updateSubject = (id: string, field: keyof Subject, value: any) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s)))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validSubjects = subjects.filter((s) => s.name.trim() && s.marks > 0)
    if (validSubjects.length > 0) {
      onSubmit(validSubjects)
      setSubjects([{ id: "1", name: "", marks: 0, creditPoints: 20 }])
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="max-h-96 overflow-y-auto space-y-3 pr-2">
        {subjects.map((subject, index) => (
          <div key={subject.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex justify-between items-start mb-2">
              <label className="text-sm font-medium text-slate-700">Subject {index + 1}</label>
              {subjects.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSubject(subject.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <Input
              type="text"
              placeholder="Subject name"
              value={subject.name}
              onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
              className="mb-2 text-sm"
            />

            <div className="grid grid-cols-2 gap-2 mb-2">
              <Input
                type="number"
                placeholder="Marks"
                min="0"
                max="100"
                value={subject.marks || ""}
                onChange={(e) => updateSubject(subject.id, "marks", Number(e.target.value))}
                className="text-sm"
              />
              <select
                value={subject.creditPoints}
                onChange={(e) => updateSubject(subject.id, "creditPoints", Number(e.target.value))}
                className="px-2 py-1 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {CREDIT_RANGES.map((range) => (
                  <option key={range} value={range}>
                    Credit: {range}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        onClick={addSubject}
        className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Subject
      </Button>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium py-2"
      >
        Calculate GPA
      </Button>
    </form>
  )
}
