"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, TrendingUp, AlertCircle, Plus, Trash2, Award } from "lucide-react"
import CircularProgress from "@/components/circular-progress"

/* ================= TYPES ================= */

interface Subject {
  id: string
  name: string
  marks: number|null
  creditRange: number // 20 | 40 | 60 | 80 | 100
}

interface Semester {
  id: string
  subjects: Subject[]
  gpa: number
}

interface ManualSemester {
  id: string
  gpa: number
  name: string
}

/* ================= QUALITY TABLE ================= */

const QUALITY_POINT_TABLE: Record<number, Record<number, number>> = {
  20: { 8:1,9:1.5,10:2,11:2.33,12:2.67,13:3,14:3.33,15:3.67,16:4,17:4,18:4,19:4,20:4 },
  40: { 16:2,17:2.5,18:3,19:3.5,20:4,21:4.33,22:4.67,23:5,24:5.33,25:5.67,26:6,27:6.33,28:6.67,29:7,30:7.33,31:7.67,32:8,33:8,34:8,35:8 ,36:8,37:8,38:8,39:8,40:8},
  60: { 24:3,25:3.5,26:4,27:4.5,28:5,29:5.5,30:6,31:6.33,32:6.67,33:7,34:7.33,35:7.67,36:8,37:8.33,38:8.67,39:9,40:9.33,41:9.67,42:10,43:10.33,44:10.67,45:11,46:11.33,47:11.67,48:12,49:12,50:12,51:12,52:12,53:12,54:12,55:12,56:12,57:12,58:12,59:12,60:12 },
  80: { 32:4,33:4.5,34:5,35:5.5,36:6,37:6.5,38:7,39:7.5,40:8,41:8.33,42:8.67,43:9,44:9.33,45:9.67,46:10,47:10.33,48:10.67,49:11,50:11.33,51:11.67,52:12,53:12.33,54:12.67,55:13,56:13.33,57:13.67,58:14,59:14.33,60:14.67,61:15,62:15.33,63:15.67,64:16,65:16,66:16,67:16,68:16,69:16,70:16,71:16,72:16,73:16,74:16,75:16,76:16,77:16,78:16,79:16,80:16 },
  100:{ 40:5,41:5.5,42:6,43:6.5,44:7,45:7.5,46:8,47:8.5,48:9,49:9.5,50:10,51:10.33,52:10.67,53:11,54:11.33,55:11.67,56:12,57:12.33,58:12.67,59:13,60:13.33,61:13.67,62:14,63:14.33,64:14.67,65:15,66:15.33,67:15.67,68:16,69:16.33,70:16.67,71:17,72:17.33,73:17.67,74:18,75:18.33,76:18.67,77:19,78:19.33,79:19.67,80:20,81:20,82:20,83:20,84:20,85:20,86:20,87:20,88:20,89:20,90:20,91:20,92:20,93:20,94:20,95:20,96:20,97:20,98:20,99:20,100:20 }
}

/* ================= HELPERS ================= */

const getDivider = (range: number) => {
  switch (range) {
    case 20: return 4
    case 40: return 8
    case 60: return 12
    case 80: return 16
    case 100: return 20
    default: return 1
  }
}

const isValidMarks = (marks: number | null, range: number) => {
  if (marks === null) return false
  return marks >= 0  && marks <= range 
}

const isValidGpa = (gpa: number) => {
  return gpa >= 0 && gpa <= 4.0
}

/* ================= CORE LOGIC ================= */

const calculateSubjectGpa = (marks: number | null, range: number) => {
  if (marks === null || !isValidMarks(marks, range)) return null
  const qp = QUALITY_POINT_TABLE[range]?.[marks] ?? 0
  const divider = getDivider(range)
  const gpa = (qp / divider) * 4
  return Number.parseFloat(Math.min(gpa, 4).toFixed(2))
}

const calculateSemesterGpa = (subjects: Subject[]) => {
  const hasInvalid = subjects.some(
    s => calculateSubjectGpa(s.marks, s.creditRange) === null
  )
  let total = 0
  let count = 0
  if (hasInvalid) {
    alert("Please enter valid marks for all subjects!")
    return null
  }
  else{
    subjects.forEach(s => {
      const gpa = calculateSubjectGpa(s.marks, s.creditRange)
      if (gpa !== null ) {
        total += gpa
        count++
      }
    })}
  if (count === 0) return null
  const calculatedGpa = Number.parseFloat((total / count).toFixed(2))
  return Math.min(calculatedGpa, 4.0)
}

/* ================= COMPONENT ================= */

export default function GpaCalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [semesters, setSemesters] = useState<Semester[]>([])
  const [currentGpa, setCurrentGpa] = useState<number | null>(null)
  const [cgpa, setCgpa] = useState<number | null>(null)
  const [manualSemesters, setManualSemesters] = useState<ManualSemester[]>([
    { id: Date.now().toString(), gpa: 0, name: "Semester 1" }
  ])

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { id: Date.now().toString(), name: "", marks:null, creditRange: 20 },
    ])
    setCurrentGpa(null)
  }

  const removeSubject = (id: string) => {
    setSubjects(subjects.filter(s => s.id !== id))
    setCurrentGpa(null)
  }

  const calculateCurrentGpa = () => {
    const gpa = calculateSemesterGpa(subjects)
    if (gpa === null) {
      alert("Please enter valid marks for at least one subject!")
      return
    }
    setCurrentGpa(gpa)
  }

 

  const calculateCgpaFromSemesters = () => {
    if (semesters.length === 0) return 0
    const total = semesters.reduce((sum, s) => sum + s.gpa, 0)
    const calculatedCgpa = Number.parseFloat((total / semesters.length).toFixed(2))
    return Math.min(calculatedCgpa, 4.0)
  }

  const calculateCgpaFromManual = () => {
    if (manualSemesters.length === 0) return 0
    const validSemesters = manualSemesters.filter(s => isValidGpa(s.gpa))
    if (validSemesters.length === 0) return 0
    const total = validSemesters.reduce((sum, s) => sum + s.gpa, 0)
    const calculatedCgpa = Number.parseFloat((total / validSemesters.length).toFixed(2))
    return Math.min(calculatedCgpa, 4.0)
  }

  const addManualSemester = () => {
    setManualSemesters([
      ...manualSemesters,
      { id: Date.now().toString(), gpa: 0, name: `Semester ${manualSemesters.length + 1}` }
    ])
  }

  const removeManualSemester = (id: string) => {
    if (manualSemesters.length <= 1) return
    setManualSemesters(manualSemesters.filter(s => s.id !== id))
  }

  const calculateTotalCgpa = () => {
    const allGpas = [
      ...semesters.map(s => s.gpa),
      ...manualSemesters.filter(s => isValidGpa(s.gpa)).map(s => s.gpa)
    ]
    
    if (allGpas.length === 0) return 0
    const total = allGpas.reduce((sum, gpa) => sum + gpa, 0)
    const calculatedCgpa = Number.parseFloat((total / allGpas.length).toFixed(2))
    setCgpa(Math.min(calculatedCgpa, 4.0))
    return Math.min(calculatedCgpa, 4.0)
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* SUBJECTS FORM */}
      <Card className="card-hover">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            <CardTitle>Calculate GPA from Subjects</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {subjects.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No subjects added yet. Click "Add Subject" to begin.</p>
            </div>
          )}
          
          {subjects.map((s, i) => (
            <div key={s.id} className="space-y-4 p-4 rounded-lg border bg-muted/30 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`subject-${i}`}>Subject Name</Label>
                  <Input
                    id={`subject-${i}`}
                    placeholder="e.g., Mathematics"
                    className="input-focus"
                    value={s.name}
                    onChange={(e) => {
                      const copy = [...subjects]
                      copy[i].name = e.target.value
                      setSubjects(copy)
                      setCurrentGpa(null)
                    }}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`marks-${i}`}>Marks Obtained</Label>
                  <Input
                    id={`marks-${i}`}
                    type="number"
                    placeholder={`0-${s.creditRange}`}
                    className="input-focus"
                    value={s.marks === null ? "" : s.marks}
                    onChange={(e) => {
                      const copy = [...subjects]
                      copy[i].marks = e.target.value === "" ? null : Number(e.target.value)
                      setSubjects(copy)
                      setCurrentGpa(null)
                    }}
                    max={s.creditRange}
                    min={0}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`credits-${i}`}>Credit Range</Label>
                  <Select
                    value={s.creditRange.toString()}
                    onValueChange={(value) => {
                      const copy = [...subjects]
                      copy[i].creditRange = Number(value)
                      setSubjects(copy)
                      setCurrentGpa(null)
                    }}
                  >
                    <SelectTrigger id={`credits-${i}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20">20 credits</SelectItem>
                      <SelectItem value="40">40 credits</SelectItem>
                      <SelectItem value="60">60 credits</SelectItem>
                      <SelectItem value="80">80 credits</SelectItem>
                      <SelectItem value="100">100 credits</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Invalid marks warning */}
              {!isValidMarks(s.marks, s.creditRange) && s.marks != null && (
                <div className="flex items-center gap-2 text-destructive text-sm animate-fadeIn">
                  <AlertCircle className="h-4 w-4" />
                  <span>Invalid marks! Maximum allowed: {s.creditRange}</span>
                </div>
              )}

              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeSubject(s.id)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Remove Subject
              </Button>
            </div>
          ))}

          <div className="flex flex-wrap gap-3">
            <Button onClick={addSubject} className="button-hover">
              <Plus className="h-4 w-4 mr-2" />
              Add Subject
            </Button>
            {subjects.length > 0 && (
              <>
                <Button onClick={calculateCurrentGpa} variant="outline" className="button-hover">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate GPA
                </Button>
              
              </>
            )}
          </div>

          {/* CURRENT GPA DISPLAY */}
          {currentGpa !== null && (
            <div className="mt-6 flex flex-col items-center animate-scaleIn">
              <CircularProgress value={currentGpa} label="GPA" size={180} strokeWidth={14} />
              <p className="text-sm font-medium text-muted-foreground mt-4">Current Semester GPA</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* MANUAL GPA INPUT SECTION */}
      <Card className="card-hover">
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <CardTitle>Calculate CGPA from Multiple Semesters</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {manualSemesters.map((semester, index) => (
            <div key={semester.id} className="space-y-4 p-4 rounded-lg border bg-muted/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`sem-name-${index}`}>Semester Name</Label>
                  <Input
                    id={`sem-name-${index}`}
                    placeholder="e.g., Fall 2024"
                    className="input-focus"
                    value={semester.name}
                    onChange={(e) => {
                      const copy = [...manualSemesters]
                      copy[index].name = e.target.value
                      setManualSemesters(copy)
                    }}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`sem-gpa-${index}`}>GPA (0-4.0)</Label>
                  <Input
                    id={`sem-gpa-${index}`}
                    type="number"
                    step="0.01"
                    placeholder="3.50"
                    className="input-focus"
                    value={semester.gpa === 0 ? "" : semester.gpa}
                    onChange={(e) => {
                      const value = e.target.value === "" ? 0 : parseFloat(e.target.value)
                      const copy = [...manualSemesters]
                      copy[index].gpa = value
                      setManualSemesters(copy)
                    }}
                    min="0"
                    max="4.0"
                  />
                </div>

                <div className="flex items-end">
                   <Button
                variant="ghost"
                size="sm"
                onClick={() => removeManualSemester(semester.id)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4 mr-2" />
               
              </Button>
                </div>
              </div>
              
              {!isValidGpa(semester.gpa) && semester.gpa !== 0 && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>Invalid GPA! Must be between 0 and 4.0</span>
                </div>
              )}
            </div>
          ))}
          
          <div className="flex flex-wrap gap-3">
            <Button onClick={addManualSemester} className="button-hover">
              <Plus className="h-4 w-4 mr-2" />
              Add Semester
            </Button>
            <Button 
              onClick={calculateTotalCgpa}
              className="button-hover pulse-glow"
            >
              <Calculator className="h-4 w-4 mr-2" />
              Calculate CGPA
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* RESULTS DISPLAY */}
      {cgpa !== null && (
        <Card className="card-hover animate-scaleIn">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Your Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* CGPA Display */}
            <div className="flex flex-col items-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/30">
              <CircularProgress value={cgpa} label="CGPA" size={220} strokeWidth={16} />
              <p className="text-sm font-medium text-muted-foreground mt-4">
                From {semesters.length + manualSemesters.filter(s => s.gpa > 0 && isValidGpa(s.gpa)).length} semester(s)
              </p>
            </div>

            {/* Individual Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {semesters.length > 0 && (
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Calculator className="h-4 w-4" />
                    Calculated Semesters
                  </h4>
                  {semesters.map((s, idx) => (
                    <div key={s.id} className="mb-2 p-3 bg-background rounded border">
                      <p className="font-medium">
                        {s.subjects[0]?.name ? `${s.subjects[0].name}...` : `Semester ${idx + 1}`} GPA: <span className="text-primary font-bold">{s.gpa.toFixed(2)}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {s.subjects.length} subject(s)
                      </p>
                    </div>
                  ))}
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-sm">Sub-CGPA: <span className="font-bold">{calculateCgpaFromSemesters().toFixed(2)}</span></p>
                  </div>
                </div>
              )}

              {manualSemesters.filter(s => s.gpa > 0 && isValidGpa(s.gpa)).length > 0 && (
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Manual Entries
                  </h4>
                  {manualSemesters
                    .filter(s => s.gpa > 0 && isValidGpa(s.gpa))
                    .map((s) => (
                      <div key={s.id} className="mb-2 p-3 bg-background rounded border">
                        <p className="font-medium">
                          {s.name} GPA: <span className="text-primary font-bold">{s.gpa.toFixed(2)}</span>
                        </p>
                      </div>
                    ))}
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-sm">Sub-CGPA: <span className="font-bold">{calculateCgpaFromManual().toFixed(2)}</span></p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}