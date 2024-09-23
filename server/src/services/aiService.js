const { PipelineServiceClient } = require('@google-cloud/aiplatform');
const path = require('path');


const client = new PipelineServiceClient({
  keyFilename: path.join(__dirname, '../config/firebase'), 
  projectId: process.env.GOOGLE_PROJECT_ID,  
});

// Use the pre-trained Gemini model
const MODEL_ID = 'publishers/google/models/gemini-1.5-pro-001';

// Analyze image or audio using AI
const analyzeFileWithAI = async (gcsUri, type) => {
  const location = 'us-central1';  
  
  const request = {
    endpoint: client.locationPath(process.env.GOOGLE_PROJECT_ID, location), 
    model: MODEL_ID,  
    instances: []
  };

 
  if (type === 'image') {
    request.instances.push({
      content: {
        image: {
          gcsImageUri: gcsUri  
        }
      }
    });
  } else if (type === 'audio') {
    request.instances.push({
      content: {
        audio: {
          gcsAudioUri: gcsUri  
        }
      }
    });
  } else {
    throw new Error('Invalid file type');
  }

  try {
    const [response] = await client.predict(request);
    return response;  
  } catch (error) {
    console.error('Error with AI analysis:', error);
    throw new Error('AI analysis failed');
  }
};

module.exports = { analyzeFileWithAI };
