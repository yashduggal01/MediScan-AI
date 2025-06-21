"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Utensils, Download, Share, Target, TrendingUp, Apple, Coffee, Sandwich, Cookie } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const mealPlan = {
  monday: {
    breakfast: {
      name: "Oatmeal with Berries",
      calories: 320,
      protein: 12,
      carbs: 58,
      fat: 6,
      items: ["1 cup oatmeal", "1/2 cup blueberries", "1 tbsp honey", "1/4 cup almonds"],
    },
    lunch: {
      name: "Grilled Chicken Salad",
      calories: 450,
      protein: 35,
      carbs: 25,
      fat: 22,
      items: ["4oz grilled chicken", "Mixed greens", "Cherry tomatoes", "Olive oil dressing"],
    },
    dinner: {
      name: "Salmon with Quinoa",
      calories: 520,
      protein: 40,
      carbs: 35,
      fat: 25,
      items: ["5oz salmon fillet", "1 cup quinoa", "Steamed broccoli", "Lemon herbs"],
    },
    snacks: {
      name: "Greek Yogurt & Nuts",
      calories: 180,
      protein: 15,
      carbs: 12,
      fat: 8,
      items: ["1 cup Greek yogurt", "1/4 cup mixed nuts"],
    },
  },
}

const nutritionData = [
  { name: "Protein", value: 102, color: "#10B981" },
  { name: "Carbs", value: 130, color: "#3B82F6" },
  { name: "Fat", value: 61, color: "#F59E0B" },
]

const weeklyProgress = [
  { day: "Mon", calories: 1470, target: 1500 },
  { day: "Tue", calories: 1520, target: 1500 },
  { day: "Wed", calories: 1480, target: 1500 },
  { day: "Thu", calories: 1450, target: 1500 },
  { day: "Fri", calories: 1510, target: 1500 },
  { day: "Sat", calories: 1490, target: 1500 },
  { day: "Sun", calories: 1470, target: 1500 },
]

export default function DietPlanner() {
  const [selectedDay, setSelectedDay] = useState("monday")
  const totalCalories = Object.values(mealPlan.monday).reduce((sum, meal) => sum + meal.calories, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Diet Planner</h1>
          <p className="text-gray-600">Personalized nutrition plan for your health goals</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Share className="h-4 w-4 mr-2" />
            Share with Doctor
          </Button>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Daily Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700">Total Calories</p>
                <p className="text-2xl font-bold text-green-900">{totalCalories}</p>
                <p className="text-xs text-green-600">Target: 1500</p>
              </div>
              <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700">Protein</p>
                <p className="text-2xl font-bold text-blue-900">102g</p>
                <p className="text-xs text-blue-600">Target: 100g</p>
              </div>
              <div className="w-12 h-12 bg-blue-200 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-700">Carbs</p>
                <p className="text-2xl font-bold text-purple-900">130g</p>
                <p className="text-xs text-purple-600">Target: 150g</p>
              </div>
              <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center">
                <Apple className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-amber-700">Fat</p>
                <p className="text-2xl font-bold text-amber-900">61g</p>
                <p className="text-xs text-amber-600">Target: 65g</p>
              </div>
              <div className="w-12 h-12 bg-amber-200 rounded-xl flex items-center justify-center">
                <Utensils className="h-6 w-6 text-amber-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Meal Plan */}
        <div className="lg:col-span-2">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Utensils className="h-5 w-5 text-sky-600" />
                <span>Today's Meal Plan</span>
              </CardTitle>
              <CardDescription>Customized for diabetes management and anemia recovery</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Breakfast */}
              <div className="border rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Coffee className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Breakfast</h4>
                      <p className="text-sm text-gray-600">{mealPlan.monday.breakfast.name}</p>
                    </div>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">{mealPlan.monday.breakfast.calories} cal</Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-800">{mealPlan.monday.breakfast.protein}g</p>
                    <p className="text-green-600">Protein</p>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-800">{mealPlan.monday.breakfast.carbs}g</p>
                    <p className="text-blue-600">Carbs</p>
                  </div>
                  <div className="text-center p-2 bg-amber-50 rounded-lg">
                    <p className="font-medium text-amber-800">{mealPlan.monday.breakfast.fat}g</p>
                    <p className="text-amber-600">Fat</p>
                  </div>
                </div>

                <div className="space-y-1">
                  {mealPlan.monday.breakfast.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lunch */}
              <div className="border rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Sandwich className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Lunch</h4>
                      <p className="text-sm text-gray-600">{mealPlan.monday.lunch.name}</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{mealPlan.monday.lunch.calories} cal</Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-800">{mealPlan.monday.lunch.protein}g</p>
                    <p className="text-green-600">Protein</p>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-800">{mealPlan.monday.lunch.carbs}g</p>
                    <p className="text-blue-600">Carbs</p>
                  </div>
                  <div className="text-center p-2 bg-amber-50 rounded-lg">
                    <p className="font-medium text-amber-800">{mealPlan.monday.lunch.fat}g</p>
                    <p className="text-amber-600">Fat</p>
                  </div>
                </div>

                <div className="space-y-1">
                  {mealPlan.monday.lunch.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dinner */}
              <div className="border rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Utensils className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dinner</h4>
                      <p className="text-sm text-gray-600">{mealPlan.monday.dinner.name}</p>
                    </div>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">{mealPlan.monday.dinner.calories} cal</Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-800">{mealPlan.monday.dinner.protein}g</p>
                    <p className="text-green-600">Protein</p>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-800">{mealPlan.monday.dinner.carbs}g</p>
                    <p className="text-blue-600">Carbs</p>
                  </div>
                  <div className="text-center p-2 bg-amber-50 rounded-lg">
                    <p className="font-medium text-amber-800">{mealPlan.monday.dinner.fat}g</p>
                    <p className="text-amber-600">Fat</p>
                  </div>
                </div>

                <div className="space-y-1">
                  {mealPlan.monday.dinner.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Snacks */}
              <div className="border rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Cookie className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Snacks</h4>
                      <p className="text-sm text-gray-600">{mealPlan.monday.snacks.name}</p>
                    </div>
                  </div>
                  <Badge className="bg-pink-100 text-pink-800">{mealPlan.monday.snacks.calories} cal</Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-800">{mealPlan.monday.snacks.protein}g</p>
                    <p className="text-green-600">Protein</p>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-800">{mealPlan.monday.snacks.carbs}g</p>
                    <p className="text-blue-600">Carbs</p>
                  </div>
                  <div className="text-center p-2 bg-amber-50 rounded-lg">
                    <p className="font-medium text-amber-800">{mealPlan.monday.snacks.fat}g</p>
                    <p className="text-amber-600">Fat</p>
                  </div>
                </div>

                <div className="space-y-1">
                  {mealPlan.monday.snacks.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nutrition Charts */}
        <div className="space-y-6">
          {/* Macronutrient Breakdown */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Macronutrient Breakdown</CardTitle>
              <CardDescription>Today's nutrition distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={nutritionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {nutritionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {nutritionData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{item.value}g</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Progress */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
              <CardDescription>Calorie intake vs target</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={weeklyProgress}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="calories" fill="#38BDF8" />
                  <Bar dataKey="target" fill="#E5E7EB" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Health Goals */}
          <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Health Goals</CardTitle>
              <CardDescription>Based on your medical conditions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Iron Intake</span>
                  <span>18mg / 18mg</span>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-xs text-gray-600 mt-1">Excellent for anemia recovery</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Fiber Intake</span>
                  <span>28g / 30g</span>
                </div>
                <Progress value={93} className="h-2" />
                <p className="text-xs text-gray-600 mt-1">Good for blood sugar control</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Sodium Limit</span>
                  <span>1800mg / 2000mg</span>
                </div>
                <Progress value={90} className="h-2" />
                <p className="text-xs text-gray-600 mt-1">Within healthy range</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Recommendations */}
      <Card className="bg-gradient-to-r from-sky-50 to-indigo-50 border-0 shadow-sm">
        <CardHeader>
          <CardTitle>AI Nutritionist Recommendations</CardTitle>
          <CardDescription>Personalized advice based on your health data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">For Diabetes Management</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Focus on complex carbohydrates and fiber</li>
                <li>• Include protein with each meal</li>
                <li>• Monitor portion sizes consistently</li>
                <li>• Avoid sugary drinks and processed foods</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">For Anemia Recovery</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Include iron-rich foods daily</li>
                <li>• Pair iron with vitamin C sources</li>
                <li>• Avoid tea/coffee with iron-rich meals</li>
                <li>• Consider cooking in cast iron pans</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
