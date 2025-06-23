require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Quick test endpoint to debug API key
app.get('/debug', (req, res) => {
  console.log('Environment check:');
  console.log('- GEMINI_API_KEY present:', !!process.env.GEMINI_API_KEY);
  console.log('- GEMINI_API_KEY length:', process.env.GEMINI_API_KEY?.length);
  console.log('- GEMINI_API_KEY starts with:', process.env.GEMINI_API_KEY?.substring(0, 10));
  
  res.json({
    hasApiKey: !!process.env.GEMINI_API_KEY,
    keyLength: process.env.GEMINI_API_KEY?.length,
    keyStart: process.env.GEMINI_API_KEY?.substring(0, 10)
  });
});

app.post('/test-ai', async (req, res) => {
  try {
    const { GoogleGenerativeAI } = require('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const result = await model.generateContent('Hello, introduce yourself as HealthGPT in one sentence.');
    const response = await result.response;
    const text = response.text();
    
    res.json({ success: true, response: text });
  } catch (error) {
    console.error('AI Test Error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(4001, () => {
  console.log('Debug server running on http://localhost:4001');
});
