import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Compass, Target, Home, ArrowLeft, Frown, Link } from 'lucide-react';

// Mocking the useTheme import to keep the file runnable in a single context
const useTheme = () => ({ theme: 'dark' });

export default function NotFoundPage() {
  const { theme } = useTheme();
  const [targetPositions, setTargetPositions] = useState([]);
  const [ripples, setRipples] = useState([]);
  const isDark = theme === 'dark';

  useEffect(() => {
    // Generate random target icons for the background
    const targets = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15,
      rotation: Math.random() * 360,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 5
    }));
    setTargetPositions(targets);

    // Create expanding ripples (Lost Signal)
    const rippleInterval = setInterval(() => {
      const newRipple = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100
      };
      // Keep a small number of ripples
      setRipples(prev => [...prev.slice(-3), newRipple]);
    }, 3000);

    return () => clearInterval(rippleInterval);
  }, []);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div 
      className={`relative min-h-screen overflow-hidden flex items-center justify-center p-4 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950' // Updated: Purple Theme
          : 'bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50'    // Updated: Purple Theme
      }`}
    >
      {/* Animated Target Icons Background (Sketch Style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {targetPositions.map((target) => (
          <div
            key={target.id}
            className="absolute opacity-10"
            style={{
              left: `${target.x}%`,
              top: `${target.y}%`,
              animation: `float-rotate ${target.duration}s ease-in-out infinite`,
              animationDelay: `${target.delay}s`
            }}
          >
            <Target 
              size={target.size} 
              className={isDark ? 'text-purple-400' : 'text-purple-600'} // Updated: Purple Accent
              style={{ transform: `rotate(${target.rotation}deg)` }}
            />
          </div>
        ))}
      </div>

      {/* Expanding Ripples (Lost Signal) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className={`absolute rounded-full border-2 ${
              isDark ? 'border-indigo-500/30' : 'border-indigo-400/40' // Updated: Indigo Accent
            }`}
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              animation: 'ripple-expand 4s ease-out forwards'
            }}
          />
        ))}
      </div>

      {/* Main Content Card */}
      <Card className={`relative z-10 max-w-2xl w-full shadow-2xl border-2 p-8 md:p-12 transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-900/90 backdrop-blur-md border-purple-800' // Updated: Purple Border
          : 'bg-white/90 backdrop-blur-md border-purple-200'
      }`}>
        <div className="space-y-6">
          {/* Compass Icon with Animation */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              {/* Rotating Ring */}
              <div className={`absolute inset-0 rounded-full border-4 border-dashed animate-spin-slow ${
                isDark ? 'border-purple-600' : 'border-purple-400' // Updated: Purple Accent
              }`} style={{ width: '120px', height: '120px', left: '-10px', top: '-10px' }} />
              
              {/* Pulsing Glow */}
              <div className={`absolute inset-0 rounded-full blur-2xl ${
                isDark ? 'bg-purple-600/30' : 'bg-purple-400/40' // Updated: Purple Glow
              } animate-pulse`} />
              
              {/* Main Compass Icon */}
              <div className={`relative rounded-full p-6 ${isDark ? 'bg-indigo-950/50' : 'bg-purple-100'} border-4 ${isDark ? 'border-purple-700' : 'border-purple-300'}`}>
                <Compass className={`w-16 h-16 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
            </div>

            {/* Title and Code */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-3">
                <h1 className={`text-7xl md:text-8xl font-black ${
                  isDark ? 'text-purple-400' : 'text-purple-600' // Updated: Purple Accent
                }`}>
                  404
                </h1>
                <div className={`p-2 rounded-lg ${isDark ? 'bg-indigo-950' : 'bg-purple-100'}`}>
                  <Frown className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-purple-600'} animate-ping-slow`} />
                </div>
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold ${
                isDark ? 'text-gray-100' : 'text-gray-800'
              }`}>
                Page Not Found
              </h2>
            </div>
          </div>

          {/* Alert Message */}
          <Alert className={`${
            isDark ? 'bg-indigo-950/50 border-purple-800' : 'bg-purple-50 border-purple-200' // Updated: Purple Alert
          }`}>
            <Link className={`h-4 w-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            <AlertDescription className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              The resource or canvas URL you tried to access cannot be located.
            </AlertDescription>
          </Alert>

          {/* Description */}
          <div className={`text-center space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <p className="text-base">
              It looks like you followed a broken link or the page has been moved. Don't worry, we can get you back on track!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center text-sm">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>Lost Navigation</span>
              </div>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <Link className="w-4 h-4" />
                <span>Invalid URL or Broken Link</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              // Primary button gradient (Purple/Indigo)
              className="font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
              onClick={handleGoHome}
            >
              <Home className="w-5 h-5 mr-2" />
              Find Home Base
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
              onClick={handleGoBack}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Try Previous Location
            </Button>
          </div>

          {/* Help Text */}
          <div className={`pt-4 text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <p>
              If you believe this is an error, please contact support with the URL you were trying to reach.
            </p>
          </div>
        </div>
      </Card>

      {/* CSS Animations */}
      <style>{`
        @keyframes float-rotate {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.1;
          }
          25% {
            transform: translateY(20px) translateX(-10px) rotate(-90deg);
            opacity: 0.15;
          }
          50% {
            transform: translateY(10px) translateX(15px) rotate(-180deg);
            opacity: 0.08;
          }
          75% {
            transform: translateY(-25px) translateX(-5px) rotate(-270deg);
            opacity: 0.12;
          }
        }

        @keyframes ripple-expand {
          0% {
            width: 0;
            height: 0;
            opacity: 0.6;
            transform: translate(-50%, -50%);
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes ping-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
