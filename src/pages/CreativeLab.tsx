import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Sparkles, Play, Loader2, AlertCircle, RefreshCcw, Download, X } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { generateVideoFromImage } from '../services/veoService';

interface CreativeLabProps {
  onResetKey: () => void;
  onSelectKey: () => void;
}

export function CreativeLab({ onResetKey, onSelectKey }: CreativeLabProps) {
  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('image/png');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadingMessages = [
    "Dreaming in pixels...",
    "Analyzing visual context...",
    "Predicting motion vectors...",
    "Synthesizing cinematic frames...",
    "Almost there, adding final touches...",
    "Polishing the animation..."
  ];

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGenerating) {
      interval = setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImage(result);
        setMimeType(file.type);
        setVideoUrl(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const getErrorMessage = (err: string) => {
    const errorStr = err.toLowerCase();
    
    // Rate Limiting / Quota
    if (err.includes("429") || errorStr.includes("quota") || errorStr.includes("rate limit") || errorStr.includes("exhausted")) {
      return {
        title: "Rate Limit Exceeded",
        message: "You've reached the generation limit for your API key or the service is temporarily throttled.",
        type: 'warning',
        tips: [
          "Wait 1-2 minutes before trying again",
          "Check your Google Cloud project's quota limits",
          "Ensure billing is active on your Google Cloud project",
          "Try a simpler motion prompt"
        ]
      };
    }

    // Safety / Content Filtering
    if ((err.includes("400") || err.includes("403")) && (errorStr.includes("safety") || errorStr.includes("blocked") || errorStr.includes("content") || errorStr.includes("filter"))) {
      return {
        title: "Content Filtered",
        message: "The request was declined by safety filters. This can happen if the image or prompt is flagged.",
        type: 'error',
        tips: [
          "Try a different, more neutral image",
          "Modify your motion prompt to avoid sensitive keywords",
          "Ensure the image doesn't contain faces or recognizable people if not permitted",
          "Try a more abstract prompt like 'gentle movement'"
        ]
      };
    }

    // Invalid Request / Parameters
    if (err.includes("400")) {
      return {
        title: "Invalid Request",
        message: "The AI model couldn't process this specific request due to invalid parameters or image format.",
        type: 'error',
        tips: [
          "Ensure the image is a valid PNG or JPG",
          "Check if the image size is under 5MB",
          "Try removing the motion prompt to see if the image itself is the issue",
          "Ensure the image aspect ratio is supported (16:9 or 9:16 recommended)"
        ]
      };
    }

    // Authentication / Permissions
    if (err.includes("401") || err.includes("403") || errorStr.includes("permission") || errorStr.includes("unauthorized") || errorStr.includes("invalid key") || errorStr.includes("api key")) {
      return {
        title: "Authentication Error",
        message: "There's an issue with your API key permissions or validity.",
        type: 'auth',
        tips: [
          "Try resetting your API key in the settings",
          "Ensure the API key has 'Generative Language API' enabled",
          "Check if your Google Cloud project is in good standing",
          "Verify that the API key hasn't been deleted or restricted"
        ]
      };
    }

    // Server Errors / Timeouts
    if (err.includes("500") || err.includes("503") || err.includes("504") || errorStr.includes("server") || errorStr.includes("timeout") || errorStr.includes("deadline")) {
      return {
        title: "Service Temporarily Unavailable",
        message: "Google's video generation servers are currently experiencing issues or high latency.",
        type: 'server',
        tips: [
          "Wait 30-60 seconds and try again",
          "The generation might still be processing in the background; wait a moment",
          "Check the Google Cloud Status dashboard",
          "Try again later during off-peak hours"
        ]
      };
    }

    // Network Errors
    if (errorStr.includes("network") || errorStr.includes("fetch") || errorStr.includes("failed to fetch") || errorStr.includes("connection")) {
      return {
        title: "Connection Issue",
        message: "A network error occurred while communicating with the AI service.",
        type: 'network',
        tips: [
          "Check your internet connection stability",
          "Disable any VPNs or proxies that might be blocking the request",
          "Ensure your browser isn't blocking cross-origin requests",
          "Refresh the page and try again"
        ]
      };
    }

    return {
      title: "Generation Failed",
      message: err || "An unexpected error occurred during the video generation process.",
      type: 'unknown',
      tips: [
        "Refresh the page and try again",
        "Try a different image or a simpler prompt",
        "Ensure you have selected a valid API key with billing enabled",
        "Contact support if the issue persists across multiple attempts"
      ]
    };
  };

  const handleGenerate = async () => {
    if (!image) return;
    
    setIsGenerating(true);
    setError(null);
    setLoadingMessageIndex(0);
    
    try {
      // Extract base64 data
      const base64Data = image.split(',')[1];
      const url = await generateVideoFromImage(base64Data, mimeType, prompt);
      setVideoUrl(url);
    } catch (err: any) {
      console.error(err);
      if (err.message === "API_KEY_NOT_FOUND") {
        onResetKey();
        onSelectKey();
      } else {
        setError(err.message || "Unknown error");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const reset = () => {
    setImage(null);
    setVideoUrl(null);
    setPrompt('');
    setError(null);
  };

  const errorDetails = error ? getErrorMessage(error) : null;

  const SUGGESTED_PROMPTS = [
    "A gentle breeze blowing through the trees",
    "Soft sunlight filtering through moving clouds",
    "Water ripples expanding across a calm lake",
    "City lights flickering in the distance",
    "Slow motion snowfall in a quiet forest",
    "Cinematic camera pan across the scene"
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Creative Lab" 
          subtitle="Experimenting with generative AI to bring static designs to life using Google's Veo model."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-secondary rounded-3xl border border-border">
              <h3 className="text-xl font-bold tracking-tighter mb-6 uppercase flex items-center">
                <Sparkles size={20} className="mr-2 text-primary" />
                AI Video Generation
              </h3>
              
              <div className="space-y-8">
                {/* Upload Area */}
                {!image ? (
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="aspect-video border-2 border-dashed border-border rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-all bg-white/50 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Upload size={24} className="text-primary" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dark">Upload an image</p>
                    <p className="text-[9px] text-muted/60 mt-2 font-bold uppercase tracking-widest">PNG or JPG, max 5MB</p>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      className="hidden" 
                      accept="image/*" 
                      onChange={handleImageUpload}
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video rounded-[2rem] overflow-hidden group border border-border shadow-lg">
                    <img src={image} alt="Upload" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-all backdrop-blur-[2px] flex items-center justify-center">
                      <button 
                        onClick={reset}
                        className="w-12 h-12 bg-white rounded-full text-primary hover:scale-110 transition-transform flex items-center justify-center shadow-xl"
                      >
                        <RefreshCcw size={20} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Prompt */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted flex items-center">
                      <span className="w-4 h-px bg-muted/30 mr-2" />
                      Motion Prompt
                    </label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe the motion... e.g., 'A gentle breeze blowing through the trees'"
                      className="w-full bg-white border border-border rounded-2xl p-5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none font-light leading-relaxed"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-3">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted/60">Suggested Directions</p>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTED_PROMPTS.map((p, i) => (
                        <button
                          key={i}
                          onClick={() => setPrompt(p)}
                          className="text-[9px] px-4 py-2 bg-white border border-border rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all text-muted font-bold uppercase tracking-widest"
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={!image || isGenerating}
                  className="w-full bg-dark text-white rounded-2xl py-5 font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center space-x-4 hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Synthesizing...</span>
                    </>
                  ) : (
                    <>
                      <Play size={18} className="fill-current" />
                      <span>Bring to life</span>
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {errorDetails && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setError(null)}
                        className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
                      />
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-full max-w-lg bg-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden"
                      >
                        <button 
                          onClick={() => setError(null)}
                          className="absolute top-6 right-6 p-2 hover:bg-secondary rounded-full transition-colors text-muted hover:text-dark"
                        >
                          <X size={20} />
                        </button>

                        <div className="flex flex-col items-center text-center space-y-8">
                          <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center">
                            <AlertCircle size={40} className="text-red-500" />
                          </div>
                          
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500 mb-3">{errorDetails.title}</p>
                            <h3 className="text-3xl font-black tracking-tighter uppercase mb-4 leading-none">Something went wrong</h3>
                            <p className="text-muted leading-relaxed max-w-sm mx-auto">{errorDetails.message}</p>
                          </div>
                          
                          <div className="w-full pt-8 border-t border-border/50 text-left">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-6 flex items-center">
                              <span className="w-4 h-px bg-muted/30 mr-2" />
                              Troubleshooting Tips
                            </p>
                            <ul className="grid grid-cols-1 gap-4">
                              {errorDetails.tips.map((tip, i) => (
                                <li key={i} className="text-xs text-muted/80 flex items-start group">
                                  <span className="w-1.5 h-1.5 bg-red-400/40 rounded-full mr-4 mt-1.5 group-hover:bg-red-400 transition-colors shrink-0" />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="w-full grid grid-cols-1 gap-3 pt-4">
                            {errorDetails.type === 'auth' && (
                              <button 
                                onClick={() => {
                                  onResetKey();
                                  setError(null);
                                }}
                                className="w-full py-5 bg-dark text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-lg shadow-dark/10"
                              >
                                Reset API Key
                              </button>
                            )}

                            <button 
                              onClick={() => setError(null)}
                              className="w-full py-5 bg-secondary text-dark rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-accent transition-all"
                            >
                              Dismiss
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="p-8 bg-primary text-white rounded-3xl">
              <h4 className="text-lg font-bold tracking-tighter mb-4 uppercase">How it works</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                This experiment uses Google's <strong>Veo</strong> model to generate high-quality 
                video from a single reference image. By analyzing the visual context and your 
                prompt, the AI predicts motion and creates a cinematic 5-second loop.
              </p>
            </div>
          </div>

          {/* Result Display */}
          <div className="lg:col-span-7">
            <div className="aspect-video bg-secondary rounded-3xl border border-border overflow-hidden flex flex-col items-center justify-center relative">
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-6" />
                    <p className="text-xl font-bold tracking-tighter uppercase animate-pulse">
                      {loadingMessages[loadingMessageIndex]}
                    </p>
                    <p className="text-muted text-sm mt-2">This may take up to 2 minutes for high quality results</p>
                  </motion.div>
                ) : videoUrl ? (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full h-full relative"
                  >
                    <video 
                      src={videoUrl} 
                      controls 
                      autoPlay 
                      loop 
                      className="w-full h-full object-cover"
                    />
                    <a
                      href={videoUrl}
                      download="generated-video.mp4"
                      className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full text-primary shadow-lg hover:scale-110 transition-transform flex items-center justify-center z-10"
                      title="Download Video"
                    >
                      <Download size={20} />
                    </a>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center p-12"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <Play size={32} className="text-muted" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tighter uppercase mb-2">Generation Preview</h3>
                    <p className="text-muted max-w-xs mx-auto">
                      Upload an image and click "Bring to life" to see the AI magic happen here.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
