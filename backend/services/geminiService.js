const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyBVEeXYQcsMPtNiVi7_SyDNwUyK9Dm35uw"); 

exports.getGeminiDietPlan = async (reportText) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

 const prompt = `
You are a nutritionist AI. Based on the following medical report, generate a JSON diet plan in the **exact** format below.

STRICT RULES:
- Do NOT include explanation.
- DO NOT start with text like "Sure!" or "Here's the plan".
- ONLY return valid JSON. No markdown, no text outside JSON.
- JSON must include all keys, closed brackets, and must be machine-parsable.

Expected format:
{
  "breakfast": {
    "name": "Breakfast",
    "calories": Number,
    "protein": Number,
    "carbs": Number,
    "fat": Number,
    "items": [String]
  },
  "lunch": { same structure },
  "dinner": { same structure },
  "snacks": { same structure },
  "nutritionSummary": {
    "protein": Number,
    "carbs": Number,
    "fat": Number
  },
  "weeklyProgress": [
    { "day": String, "calories": Number, "target": Number }
  ],
  "goals": {
    "ironIntake": Number,
    "ironTarget": Number,
    "fiberIntake": Number,
    "fiberTarget": Number,
    "sodiumIntake": Number,
    "sodiumTarget": Number
  },
  "aiRecommendations": {
    "diabetes": [String],
    "anemia": [String]
  }
}

Medical Report:
${reportText}
`;



  const result = await model.generateContent(prompt);
  const response = await result.response;
 let text = await response.text();
 text = text.trim().replace(/^```json\s*|\s*```$/g, "");  


  let dietJSON;
  try {
   

    dietJSON = JSON.parse(text); 
  } catch (err) {
    console.warn("Response is not valid JSON, sending raw text");
    dietJSON = { rawText: text }; 
  }

  return dietJSON;
};
