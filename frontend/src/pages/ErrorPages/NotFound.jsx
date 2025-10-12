import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Home, Search, ArrowLeft, Sparkles } from 'lucide-react';

// Mocking the useTheme import to keep the file runnable in a single context
const useTheme = () => ({ theme: 'dark' });

export default function NotFoundPage() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingShapes, setFloatingShapes] = useState([]);

  useEffect(() => {
    // Generate random floating shapes
    const shapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
      rotation: Math.random() * 360
    }));
    setFloatingShapes(shapes);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate mouse position relative to the container (0 to 100%)
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const isDark = theme === 'dark';

  return (
    <div 
      className={`relative min-h-screen overflow-hidden flex items-center justify-center p-4 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-purple-950 to-blue-950' 
          : 'bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50'
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute opacity-20"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              animation: `float ${shape.duration}s ease-in-out infinite`,
              animationDelay: `${shape.delay}s`,
              transform: `rotate(${shape.rotation}deg)`
            }}
          >
            {shape.type === 'circle' && (
              <div className={`w-full h-full rounded-full border-4 ${isDark ? 'border-purple-500' : 'border-purple-400'}`} />
            )}
            {shape.type === 'square' && (
              <div className={`w-full h-full border-4 rotate-45 ${isDark ? 'border-blue-500' : 'border-blue-400'}`} />
            )}
            {shape.type === 'triangle' && (
              <div 
                className={`w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] ${isDark ? 'border-b-pink-500' : 'border-b-pink-400'}`} 
                style={{
                    borderLeftWidth: `${shape.size / 2}px`,
                    borderRightWidth: `${shape.size / 2}px`,
                    borderBottomWidth: `${shape.size * 0.866}px`, // maintain aspect ratio
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Interactive Gradient Orb (Follows Mouse) */}
      <div
        className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none ${
          isDark ? 'opacity-20' : 'opacity-30'
        }`}
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(59, 130, 246, 0.6), transparent)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.6), rgba(59, 130, 246, 0.4), transparent)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Main Content */}
      <Card className={`relative z-10 max-w-2xl w-full shadow-2xl border-2 p-8 md:p-12 transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-900/80 backdrop-blur-md border-purple-800' 
          : 'bg-white/80 backdrop-blur-md border-purple-200'
      }`}>
        <div className="text-center space-y-6">
          {/* Animated 404 */}
          <div className="relative inline-block">
            <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 animate-pulse">
              404
            </h1>
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-bounce" />
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-3">
            <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
              Oops! Page Not Found
            </h2>
            <p className={`text-lg max-w-md mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Looks like this canvas doesn't exist. The page you're looking for has been sketched away or never existed.
            </p>
          </div>

          {/* Decorative Doodles */}
          <div className="flex justify-center gap-4 py-4">
            <div className={`w-12 h-12 rounded-full border-4 border-dashed animate-spin-slow ${isDark ? 'border-purple-500' : 'border-purple-400'}`} />
            <div className={`w-12 h-12 border-4 rotate-45 animate-bounce ${isDark ? 'border-blue-500' : 'border-blue-400'}`} />
            <div className={`w-12 h-12 rounded-full border-4 border-dashed animate-spin-slow ${isDark ? 'border-pink-500' : 'border-pink-400'}`} style={{ animationDirection: 'reverse' }} />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/'}
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className={`border-2 font-semibold px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? 'border-purple-500 text-purple-400 hover:bg-purple-950'
                  : 'border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Help Text */}
          <div className="pt-6 text-sm">
            <p className={`flex items-center justify-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <Search className="w-4 h-4" />
              Try searching or check the URL for typos
            </p>
          </div>
        </div>
      </Card>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) translateX(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-30px) translateX(5px) rotate(3deg);
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

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
