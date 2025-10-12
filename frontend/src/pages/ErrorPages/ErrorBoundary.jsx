import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, RefreshCw, Home, Copy, ChevronDown, ChevronUp } from 'lucide-react';

// Mocking the useTheme import for a self-contained component
const useTheme = () => ({ theme: 'dark' });

// This component is designed to be used as a Fallback UI within a React Error Boundary.
// It accepts 'error' and 'errorInfo' props commonly passed by Error Boundaries.
export default function ErrorBoundaryPage({ error, errorInfo }) {
  const { theme } = useTheme();
  const [particles, setParticles] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    // Generate animated particles (glitch theme)
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setParticles(newParticles);
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  // Uses the non-standard document.execCommand('copy') for better compatibility in iframe environments
  const copyErrorDetails = () => {
    const errorText = `Error: ${error?.toString() || 'Unknown error'}\n\nStack Trace:\n${error?.stack || errorInfo?.componentStack || 'No stack trace available'}`;
    
    // Temporarily create a textarea to hold the text and copy it
    const textarea = document.createElement('textarea');
    textarea.value = errorText;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for environments where execCommand is restricted
    }
    
    document.body.removeChild(textarea);
  };

  return (
    <div 
      className={`relative min-h-screen overflow-hidden flex items-center justify-center p-4 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950' // Updated for purple theme
          : 'bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50' // Updated for purple theme
      }`}
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            // Particle color changed to purple accent
            className={`absolute rounded-full ${isDark ? 'bg-purple-500' : 'bg-purple-400'}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `drift ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Glitch Effect Lines (The sketch effect) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Color changed to indigo/purple/blue accents */}
        <div className={`absolute h-px w-full ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-400/30'} animate-glitch-1`} style={{ top: '20%' }} />
        <div className={`absolute h-px w-full ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/30'} animate-glitch-2`} style={{ top: '50%' }} />
        <div className={`absolute h-px w-full ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/30'} animate-glitch-3`} style={{ top: '80%' }} />
      </div>

      {/* Main Error Card */}
      <Card className={`relative z-10 max-w-3xl w-full shadow-2xl border-2 p-8 md:p-12 transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-900/90 backdrop-blur-md border-purple-800' // Card border
          : 'bg-white/90 backdrop-blur-md border-purple-200'
      }`}>
        <div className="space-y-6">
          {/* Error Icon and Title */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              {/* Pulsing Glow */}
              <div className={`absolute inset-0 rounded-full blur-xl ${isDark ? 'bg-purple-600/30' : 'bg-purple-400/40'} animate-pulse`} />
              <div className={`relative rounded-full p-6 ${isDark ? 'bg-indigo-950/50' : 'bg-purple-100'} border-4 ${isDark ? 'border-purple-700' : 'border-purple-300'}`}>
                {/* Main Icon Color */}
                <AlertTriangle className={`w-16 h-16 ${isDark ? 'text-purple-400' : 'text-purple-600'} animate-bounce`} />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className={`text-4xl md:text-5xl font-black ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                Oops! Something Broke
              </h1>
              <p className={`text-lg md:text-xl font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Don't worry, it's not your fault
              </p>
            </div>
          </div>

          {/* Error Message Alert */}
          <Alert className={`${isDark ? 'bg-indigo-950/50 border-purple-800' : 'bg-purple-50 border-purple-200'}`}>
            <AlertTriangle className={`h-4 w-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            <AlertDescription className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className="font-semibold">Error Details: </span>
              {error?.message || 'An unexpected error occurred while rendering this component.'}
            </AlertDescription>
          </Alert>

          {/* Friendly Message */}
          <div className={`text-center space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <p className="text-base">
              Our digital canvas encountered an unexpected glitch. The error has been logged and we'll sketch out a fix.
            </p>
            <p className="text-sm">
              You can try refreshing the page or return home to continue your creative journey.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className={`font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                isDark
                  // Primary button gradient (Purple/Indigo)
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white'
              }`}
              onClick={handleReload}
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh Page
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className={`border-2 font-semibold px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                isDark
                  // Outline button accent (Purple)
                  ? 'border-purple-500 text-purple-400 hover:bg-purple-950'
                  : 'border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}
              onClick={handleGoHome}
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </div>

          {/* Technical Details Toggle */}
          <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Technical Details
              </span>
              {showDetails ? (
                <ChevronUp className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              ) : (
                <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              )}
            </button>

            {showDetails && (
              <div className="mt-4 space-y-4">
                <div className={`p-4 rounded-lg font-mono text-xs overflow-auto max-h-64 ${
                  // Code block text color changed to Indigo
                  isDark ? 'bg-gray-950 text-indigo-300' : 'bg-gray-100 text-indigo-700'
                }`}>
                  <div className="mb-2 font-semibold">Error Stack:</div>
                  <pre className="whitespace-pre-wrap break-all">
                    {error?.stack || error?.toString() || 'No error stack available'}
                  </pre>
                  {errorInfo?.componentStack && (
                    <>
                      <div className="mt-4 mb-2 font-semibold">Component Stack:</div>
                      <pre className="whitespace-pre-wrap break-all">
                        {errorInfo.componentStack}
                      </pre>
                    </>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyErrorDetails}
                  className={`w-full ${
                    copied 
                      ? isDark ? 'bg-green-950 border-green-700 text-green-400' : 'bg-green-50 border-green-600 text-green-600'
                      : ''
                  }`}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy Error Details'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* CSS Animations */}
      <style>{`
        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(30px, -30px);
          }
          50% {
            transform: translate(-20px, 20px);
          }
          75% {
            transform: translate(20px, 10px);
          }
        }

        @keyframes glitch-1 {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateX(10px);
            opacity: 0.6;
          }
        }

        @keyframes glitch-2 {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateX(-15px);
            opacity: 0.5;
          }
        }

        @keyframes glitch-3 {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.25;
          }
          50% {
            transform: translateX(8px);
            opacity: 0.55;
          }
        }

        .animate-glitch-1 {
          animation: glitch-1 3s ease-in-out infinite;
        }

        .animate-glitch-2 {
          animation: glitch-2 4s ease-in-out infinite;
        }

        .animate-glitch-3 {
          animation: glitch-3 3.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
