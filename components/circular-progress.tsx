"use client"

import { useEffect, useState } from "react"
import { Award } from "lucide-react"

interface CircularProgressProps {
  value: number
  maxValue?: number
  size?: number
  strokeWidth?: number
  label: "GPA" | "CGPA"
  showIcon?: boolean
}

export default function CircularProgress({
  value,
  maxValue = 4.0,
  size = 200,
  strokeWidth = 12,
  label,
  showIcon = true,
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const progressValue = (value / maxValue) * circumference
  const percentage = (value / maxValue) * 100

  useEffect(() => {
    // Animate progress on mount or value change
    const duration = 1000
    const steps = 60
    const increment = progressValue / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= progressValue) {
        setProgress(progressValue)
        clearInterval(timer)
      } else {
        setProgress(current)
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [progressValue])

  const getColor = () => {
    if (percentage >= 87.5) return { from: "#22c55e", to: "#10b981", text: "text-green-600 dark:text-green-400" }
    if (percentage >= 75) return { from: "#3b82f6", to: "#06b6d4", text: "text-blue-600 dark:text-blue-400" }
    if (percentage >= 62.5) return { from: "#eab308", to: "#f97316", text: "text-yellow-600 dark:text-yellow-400" }
    return { from: "#ef4444", to: "#ec4899", text: "text-red-600 dark:text-red-400" }
  }

  const colors = getColor()

  const getMessage = () => {
    if (percentage >= 87.5) return "Excellent!"
    if (percentage >= 75) return "Very Good!"
    if (percentage >= 62.5) return "Good!"
    if (percentage >= 50) return "Satisfactory"
    return "Needs Improvement"
  }

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        
        {/* Progress circle with gradient */}
        <defs>
          <linearGradient id={`gradient-${label}-${value}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.from} />
            <stop offset="100%" stopColor={colors.to} />
          </linearGradient>
        </defs>
        
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#gradient-${label}-${value})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          style={{
            transition: "stroke-dashoffset 0.5s ease-out",
            filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.3))",
            animation: "pulse-slow 3s ease-in-out infinite",
          }}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {showIcon && (
          <Award 
            className={`h-8 w-8 mb-1 ${colors.text}`} 
            style={{ animation: "bounce 1s infinite" }}
          />
        )}
        <div className={`text-5xl font-bold ${colors.text} transition-colors`}>
          {value.toFixed(2)}
        </div>
        <div className="text-sm font-semibold text-muted-foreground mt-1">
          {label}
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          / {maxValue.toFixed(1)}
        </div>
        <div className={`text-xs font-medium mt-2 ${colors.text}`}>
          {getMessage()}
        </div>
      </div>

      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-3xl opacity-20"
        style={{
          background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
        }}
      />
    </div>
  )
}