import React, { useState, useEffect } from 'react'
import { 
  Sparkles, Users, Zap, Lock, ArrowRight, Play, 
  CheckCircle, Layers, PenTool, Share2, Cloud, 
  Globe, Clock, Star, MousePointer2
} from 'lucide-react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const features = [
    {
      icon: PenTool,
      title: 'Infinite Canvas',
      description: 'Create without boundaries on an unlimited whiteboard space'
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time, anywhere'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Smooth performance with instant sync across all devices'
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'Enterprise-grade security keeps your work protected'
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Share your boards with a link or export in multiple formats'
    },
    {
      icon: Cloud,
      title: 'Cloud Sync',
      description: 'Access your work from anywhere with automatic cloud backup'
    }
  ]

  const stats = [
    { value: '1M+', label: 'Active Users' },
    { value: '50M+', label: 'Boards Created' },
    { value: '150+', label: 'Countries' },
    { value: '99.9%', label: 'Uptime' }
  ]

  const useCases = [
    { icon: Layers, title: 'Brainstorming', color: 'from-blue-500 to-indigo-600' },
    { icon: Users, title: 'Team Meetings', color: 'from-purple-500 to-pink-600' },
    { icon: PenTool, title: 'Design Thinking', color: 'from-emerald-500 to-teal-600' },
    { icon: Globe, title: 'Remote Work', color: 'from-orange-500 to-red-600' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Trusted by teams worldwide</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Create, Collaborate,
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Bring Ideas to Life
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              The ultimate collaborative whiteboard for teams. Design, sketch, and brainstorm 
              together in real-time with an infinite canvas and powerful tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105">
                Start Creating Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust indicators */}
            <p className="text-sm text-slate-500 mt-6">
              No credit card required • Free forever plan • Cancel anytime
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className={`max-w-7xl mx-auto px-6 py-20 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div 
          className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl"
          onMouseMove={handleMouseMove}
        >
          {/* Interactive cursor effect */}
          <div 
            className="absolute w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-500"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
          ></div>

          <div className="relative flex items-center justify-center min-h-96">
            {/* Mock Canvas */}
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-slate-100 rounded-lg px-4 py-2 text-sm text-slate-500">
                  Untitled Board
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl"></div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl"></div>
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl"></div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 h-20 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl"></div>
                  <div className="flex-1 h-20 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl"></div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 gap-2 text-slate-400">
                <MousePointer2 className="w-5 h-5" />
                <span className="text-sm">Hover to interact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`bg-gradient-to-br from-slate-900 to-slate-800 py-20 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className={`text-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Everything you need to collaborate
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful features designed for modern teams who need to work together seamlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Perfect for every team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From startups to enterprises, teams use our platform for endless possibilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div
                  key={index}
                  className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1100 + index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{useCase.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 md:p-20 text-center transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join millions of users creating amazing work together. Start your free account today.
          </p>
          <button className="group bg-white text-blue-600 px-10 py-5 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            Create Free Account
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center justify-center gap-8 mt-10 text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Unlimited boards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-12"></div>
    </div>
  )
}

export default Home