import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Zap, ServerOff, Home, ArrowLeft, AlertTriangle, MessageSquare } from 'lucide-react';

// Mocking the useTheme import for a self-contained component
const useTheme = () => ({ theme: 'dark' });

export default function ServerErrorPage() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingShapes, setFloatingShapes] = useState([]);

  useEffect(() => {
    // Generate random floating shapes (geometric/sketch theme)
    const shapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      type: ['circle', 'square', 'line'][Math.floor(Math.random() * 3)],
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

  const shapeStyles = (shape) => {
    const baseStyle = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      animation: `float ${shape.duration}s ease-in-out infinite`,
      animationDelay: `${shape.delay}s`,
      transform: `rotate(${shape.rotation}deg)`,
    };

    // Use purple/indigo for sketch theme consistency
    const sketchColor = isDark ? 'rgba(129, 140, 248, 0.2)' : 'rgba(129, 140, 248, 0.3)'; 

    switch (shape.type) {
        case 'line':
            return {
                ...baseStyle,
                width: `${shape.size * 1.5}px`,
                height: `4px`,
                backgroundColor: sketchColor,
                borderRadius: '9999px'
            };
        default:
            return {
                ...baseStyle,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
            };
    }
  };


  return (
    <div 
      className={`relative min-h-screen overflow-hidden flex items-center justify-center p-4 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950' // Dark theme gradient
          : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50' // Light theme gradient
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Shapes (Sketch theme) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute opacity-20"
            style={shapeStyles(shape)}
          >
            {shape.type === 'circle' && (
              <div className={`w-full h-full rounded-full border-4 border-dashed ${isDark ? 'border-purple-500' : 'border-purple-400'}`} />
            )}
            {shape.type === 'square' && (
              <div className={`w-full h-full border-4 rotate-45 ${isDark ? 'border-indigo-500' : 'border-indigo-400'}`} />
            )}
            {/* 'line' type handled via style prop */}
          </div>
        ))}
      </div>

      {/* Interactive Gradient Orb (Follows Mouse) */}
      <div
        className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none ${
          isDark ? 'opacity-30' : 'opacity-40'
        }`}
        style={{
          // Purple/Indigo glow matching the theme
          background: isDark 
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.9), rgba(129, 140, 248, 0.7), transparent)' 
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.7), rgba(129, 140, 248, 0.5), transparent)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Main Content Card (The Canvas) */}
      <Card className={`relative z-10 max-w-2xl w-full shadow-2xl border-4 p-8 md:p-12 transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-900/90 backdrop-blur-sm border-purple-800' 
          : 'bg-white/90 backdrop-blur-sm border-purple-300'
      } rounded-xl`}>
        <div className="text-center space-y-8">
          
          {/* Main Icon and Title */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <ServerOff className={`w-20 h-20 ${isDark ? 'text-purple-400' : 'text-purple-600'} animate-pulse`} />
            <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
              500
            </h1>
            <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
              Canvas Server Failed
            </h2>
          </div>

          {/* Alert Message */}
          <Alert className={`${
            isDark ? 'bg-indigo-950/50 border-purple-800' : 'bg-purple-50 border-purple-200'
          }`}>
            <AlertTriangle className={`h-4 w-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            <AlertDescription className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              **System Down:** The backend sketch server encountered an unexpected issue. Your data is typically autosaved and safe.
            </AlertDescription>
          </Alert>
          
          <p className={`text-lg max-w-md mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Please wait a few moments and try refreshing the page. If the problem continues, there may be a system-wide issue.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/'}
            >
              <Home className="w-5 h-5 mr-2" />
              Go to Dashboard
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
              Try Last Action
            </Button>
          </div>

          {/* Help Text */}
          <div className="pt-6 text-sm">
            <p className={`flex items-center justify-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <MessageSquare className="w-4 h-4" />
              If you need immediate assistance, contact our support team.
            </p>
          </div>
        </div>
      </Card>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-25px) translateX(15px) rotate(8deg);
          }
          50% {
            transform: translateY(-5px) translateX(-20px) rotate(-8deg);
          }
          75% {
            transform: translateY(-35px) translateX(10px) rotate(4deg);
          }
        }
      `}</style>
    </div>
  );
}
