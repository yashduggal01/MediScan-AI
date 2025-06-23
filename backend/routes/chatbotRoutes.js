const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const router = express.Router();

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Health-focused system prompt for better medical responses
const SYSTEM_PROMPT = `You are HealthGPT, an AI health assistant for the MediScan AI platform. You provide helpful, accurate, and empathetic health information while always emphasizing the importance of consulting healthcare professionals for medical decisions.

Key guidelines:
- Provide helpful health information and general wellness advice
- Always remind users to consult healthcare professionals for medical decisions
- Be empathetic and supportive in your responses
- Focus on preventive care and healthy lifestyle recommendations
- If asked about serious symptoms, recommend seeking immediate medical attention
- Avoid diagnosing specific conditions
- Provide evidence-based information when possible
- Be conversational and friendly while maintaining professionalism

Remember: You are an AI assistant and not a replacement for professional medical advice, diagnosis, or treatment.`;

// Helper function to generate contextual mock responses
function generateMockHealthResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('blood pressure') || lowerMessage.includes('hypertension')) {
    return `High blood pressure (hypertension) often has no obvious symptoms, but common signs may include:

• Headaches, especially in the morning
• Dizziness or lightheadedness
• Shortness of breath
• Chest pain
• Heart palpitations
• Nosebleeds (in severe cases)

⚠️ **Important**: High blood pressure is often called the "silent killer" because many people have no symptoms. Regular monitoring is essential.

**When to seek immediate medical attention:**
- Severe headache with confusion
- Vision problems
- Chest pain
- Difficulty breathing
- Blood pressure readings consistently above 180/120

**Management tips:**
- Regular exercise
- Healthy diet (low sodium, rich in fruits/vegetables)
- Maintain healthy weight
- Limit alcohol
- Don't smoke
- Manage stress

Please consult with a healthcare professional for proper diagnosis and treatment.`;
  }
  
  if (lowerMessage.includes('immune system') || lowerMessage.includes('immunity')) {
    return `Here are evidence-based ways to support your immune system:

**Nutrition:**
• Eat a variety of colorful fruits and vegetables
• Include vitamin C sources (citrus, berries, bell peppers)
• Get adequate vitamin D (sunlight, fortified foods, supplements if needed)
• Include zinc-rich foods (nuts, seeds, lean meats)
• Stay hydrated

**Lifestyle:**
• Get 7-9 hours of quality sleep
• Exercise regularly (moderate intensity)
• Manage stress through meditation, yoga, or other relaxation techniques
• Avoid smoking and limit alcohol
• Wash hands frequently

**Supplements (consult your doctor first):**
• Vitamin D3
• Vitamin C
• Zinc
• Probiotics

**Red flags - see a doctor if:**
- Frequent infections
- Slow-healing wounds
- Chronic fatigue
- Frequent illness

Remember: A healthy lifestyle is the best foundation for immune function. Consult healthcare professionals before starting new supplements.`;
  }
  
  // Default response for other health questions
  return `Thank you for your health question. While I can provide general health information, I want to emphasize that I'm an AI assistant and cannot replace professional medical advice.

For your specific concern, I recommend:

1. **Consult a healthcare professional** - They can provide personalized advice based on your medical history and current health status.

2. **Keep a symptom diary** - Note when symptoms occur, their severity, and any potential triggers.

3. **Emergency situations** - If you're experiencing severe symptoms, don't hesitate to call 911 or visit an emergency room.

**General health tips:**
• Maintain a balanced diet
• Stay physically active
• Get adequate sleep
• Manage stress
• Stay hydrated
• Avoid smoking and limit alcohol

Is there a specific aspect of your health concern you'd like me to address with general information? Please remember that any persistent or concerning symptoms should be evaluated by a healthcare professional.`;
}

// POST /api/chatbot/ask - Handle user queries
router.post('/ask', async (req, res) => {
  try {
    const { message } = req.body;

    console.log('🔍 Debug - API Key present:', !!process.env.GEMINI_API_KEY);
    console.log('🔍 Debug - Message received:', message);

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Message is required and must be a string'
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.log('❌ No API key found in environment');
      return res.status(500).json({
        success: false,
        error: 'Gemini API key not configured'
      });
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Combine system prompt with user message
    const prompt = `${SYSTEM_PROMPT}\n\nUser Question: ${message}\n\nHealthGPT Response:`;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Send successful response
    res.json({
      success: true,
      data: {
        message: text,
        timestamp: new Date().toISOString(),
        model: 'gemini-1.5-flash'
      }
    });

  } catch (error) {
    console.error('❌ Chatbot API Error:', error);
    
    // If API key is invalid, provide a helpful mock response
    if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('API key not valid')) {
      console.log('🔄 Using fallback response due to invalid API key');
      
      // Generate a contextual mock response based on the message
      const mockResponse = generateMockHealthResponse(req.body.message);
      
      return res.json({
        success: true,
        data: {
          message: mockResponse,
          timestamp: new Date().toISOString(),
          model: 'mock-fallback',
          note: 'This is a fallback response. Please configure a valid Gemini API key for full AI functionality.'
        }
      });
    }
    
    // Generic error response
    res.status(500).json({
      success: false,
      error: 'Failed to generate response. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET /api/chatbot/health - Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    success: true,
    service: 'HealthGPT Chatbot API',
    status: 'active',
    timestamp: new Date().toISOString(),
    hasApiKey: !!process.env.GEMINI_API_KEY
  });
});

module.exports = router;
