import { GoogleGenAI } from "@google/genai";

export async function generateVideoFromImage(imageBuffer: string, mimeType: string, prompt: string) {
  // Use API_KEY for Veo as per instructions
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API key is missing. Please select an API key to continue.");
  }

  // Create a new instance right before the call to ensure up-to-date key
  const ai = new GoogleGenAI({ apiKey });
  
  try {
    // Start the video generation operation
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt || 'A cinematic animation of this image coming to life',
      image: {
        imageBytes: imageBuffer,
        mimeType: mimeType,
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '16:9'
      }
    });

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) {
      throw new Error("Failed to generate video: No download link returned.");
    }

    // Fetch the video with the API key
    const response = await fetch(downloadLink, {
      method: 'GET',
      headers: {
        'x-goog-api-key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to download video: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (err: any) {
    // If the request fails with "Requested entity was not found", it might be an API key issue
    if (err.message?.includes("Requested entity was not found")) {
      throw new Error("API_KEY_NOT_FOUND");
    }
    throw err;
  }
}
