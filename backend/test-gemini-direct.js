require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testGeminiDirectly() {
  try {
    console.log('🔑 API Key present:', !!process.env.GEMINI_API_KEY);
    console.log('🔑 API Key starts with:', process.env.GEMINI_API_KEY?.substring(0, 10) + '...');

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    console.log('🤖 Testing Gemini API directly...');
    const result = await model.generateContent('Say hello and introduce yourself as HealthGPT');
    const response = await result.response;
    const text = response.text();

    console.log('✅ Success! Response:', text.substring(0, 100) + '...');
  } catch (error) {
    console.error('❌ Direct API test failed:', error.message);
  }
}

testGeminiDirectly();
