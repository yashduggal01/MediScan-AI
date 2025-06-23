const axios = require('axios');
require('dotenv').config();

async function testChatbotAPI() {
  try {
    console.log('🧪 Testing HealthGPT Chatbot API...\n');

    // Test health check endpoint
    console.log('1. Testing health check endpoint...');
    const healthResponse = await axios.get('http://localhost:4000/api/chatbot/health');
    console.log('✅ Health check:', healthResponse.data);

    // Test chat endpoint
    console.log('\n2. Testing chat endpoint...');
    const chatResponse = await axios.post('http://localhost:4000/api/chatbot/ask', {
      message: 'What are the symptoms of high blood pressure?'
    });
    
    if (chatResponse.data.success) {
      console.log('✅ Chat response received:');
      console.log('📝 AI Response:', chatResponse.data.data.message.substring(0, 200) + '...');
      console.log('⏰ Timestamp:', chatResponse.data.data.timestamp);
      console.log('🤖 Model:', chatResponse.data.data.model);
    } else {
      console.log('❌ Chat response failed:', chatResponse.data.error);
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the test
testChatbotAPI();
