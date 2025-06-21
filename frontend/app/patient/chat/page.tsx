"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, User, FileText, Lightbulb } from "lucide-react"

interface Message {
  id: number
  type: "user" | "assistant"
  content: string
  timestamp: string
  references?: Array<{
    title: string
    type: string
    date: string
  }>
}

const initialMessages: Message[] = [
  {
    id: 1,
    type: "assistant",
    content:
      "Hello! I'm your HealthGPT assistant. I can help you understand your medical records, track your health trends, and answer questions about your health data. What would you like to know?",
    timestamp: "10:00 AM",
  },
]

const quickQuestions = [
  "When is my next thyroid test?",
  "Show my latest blood reports",
  "What's my medication schedule?",
  "Suggest a diet for anemia",
  "Track my blood pressure trends",
]

export default function HealthGPTChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "assistant",
        content: getAIResponse(message),
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        references: getReferences(message),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 2000)
  }

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("blood") && lowerQuestion.includes("report")) {
      return "Based on your latest blood report from June 15th, your results show:\n\n• Hemoglobin: 13.2 g/dL (Normal - improved from last month)\n• White Blood Cells: 7,200 (Normal range)\n• Platelets: 250,000 (Normal)\n\nYour hemoglobin has improved by 0.8 g/dL since your last test, which is great progress! The iron supplements seem to be working well."
    }

    if (lowerQuestion.includes("thyroid")) {
      return "According to your medical schedule, your next thyroid function test (TSH, T3, T4) is due on July 20th, 2024. This is part of your routine monitoring since you're on thyroid medication.\n\nWould you like me to help you schedule this appointment or set a reminder?"
    }

    if (lowerQuestion.includes("medication")) {
      return "Here's your current medication schedule:\n\n**Morning (8:00 AM):**\n• Metformin 500mg\n• Vitamin D 1000 IU\n\n**Evening (8:00 PM):**\n• Lisinopril 10mg\n• Metformin 500mg\n\nYou've taken 95% of your medications this month. Great adherence! Remember to take your evening Metformin that you missed yesterday."
    }

    if (lowerQuestion.includes("diet") && lowerQuestion.includes("anemia")) {
      return "Based on your recent blood work showing improved but still recovering hemoglobin levels, here are dietary recommendations for anemia:\n\n**Iron-Rich Foods:**\n• Lean red meat, chicken, fish\n• Spinach, kale, broccoli\n• Lentils, chickpeas, beans\n• Fortified cereals\n\n**Vitamin C (enhances iron absorption):**\n• Citrus fruits, strawberries\n• Bell peppers, tomatoes\n\n**Avoid with iron-rich meals:**\n• Coffee, tea (wait 1 hour)\n• Dairy products\n\nWould you like a personalized meal plan?"
    }

    if (lowerQuestion.includes("blood pressure") || lowerQuestion.includes("bp")) {
      return "Your blood pressure trends over the past 6 months show good control:\n\n• Average: 119/78 mmHg (Normal)\n• Trend: Stable with slight improvement\n• Last reading: 119/78 (June 15th)\n\nYour BP medication (Lisinopril) is working well. Keep up with:\n• Regular exercise\n• Low sodium diet\n• Stress management\n• Consistent medication timing"
    }

    return "I understand you're asking about your health data. Could you be more specific? I can help you with:\n\n• Medical records and test results\n• Medication schedules and adherence\n• Appointment scheduling\n• Health trends and analysis\n• Dietary recommendations\n• Symptom tracking\n\nWhat specific information would you like to know?"
  }

  const getReferences = (question: string): Array<{ title: string; type: string; date: string }> | undefined => {
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("blood") && lowerQuestion.includes("report")) {
      return [
        { title: "Complete Blood Count", type: "Lab Report", date: "2024-06-15" },
        { title: "Previous CBC", type: "Lab Report", date: "2024-05-15" },
      ]
    }

    if (lowerQuestion.includes("medication")) {
      return [
        { title: "Current Prescriptions", type: "Medication List", date: "2024-06-01" },
        { title: "Medication Adherence Log", type: "Tracking Data", date: "2024-06-15" },
      ]
    }

    return undefined
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">HealthGPT Assistant</h1>
          <p className="text-gray-600">Your personal AI health companion</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Online</span>
        </div>
      </div>

      {/* Quick Questions */}
      <Card className="bg-gradient-to-r from-sky-50 to-emerald-50 border-0 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <span>Quick Questions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleQuickQuestion(question)}
                className="text-xs hover:bg-sky-50 hover:border-sky-300"
              >
                {question}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Messages */}
      <Card className="flex-1 flex flex-col bg-white border-0 shadow-sm">
        <CardContent className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex items-start space-x-3 max-w-3xl ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === "user" ? "bg-sky-500 text-white" : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  {message.type === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>

                <div
                  className={`rounded-2xl p-4 ${
                    message.type === "user" ? "bg-sky-500 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="whitespace-pre-line">{message.content}</div>

                  {message.references && (
                    <div className="mt-3 space-y-2">
                      <p className="text-sm font-medium text-gray-600">Referenced from:</p>
                      {message.references.map((ref, index) => (
                        <div key={index} className="flex items-center space-x-2 p-2 bg-white rounded-lg">
                          <FileText className="h-4 w-4 text-gray-500" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{ref.title}</p>
                            <p className="text-xs text-gray-600">
                              {ref.type} • {ref.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs ${message.type === "user" ? "text-sky-100" : "text-gray-500"}`}>
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-3xl">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="bg-gray-100 rounded-2xl p-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about your health data, medications, or get health advice..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
              className="flex-1"
            />
            <Button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              className="bg-sky-500 hover:bg-sky-600 text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
