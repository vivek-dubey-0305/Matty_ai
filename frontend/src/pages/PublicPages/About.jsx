import React, { useState, useEffect } from 'react'
import { 
  Sparkles, Target, Heart, Zap, Users, Globe, 
  TrendingUp, Award, Shield, Rocket, Star, Eye,
  Lightbulb, MessageCircle, Clock, CheckCircle
} from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeValue, setActiveValue] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: Users, value: '1M+', label: 'Active Users', color: 'from-blue-500 to-indigo-600' },
    { icon: Globe, value: '150+', label: 'Countries', color: 'from-purple-500 to-pink-600' },
    { icon: TrendingUp, value: '50M+', label: 'Boards Created', color: 'from-emerald-500 to-teal-600' },
    { icon: Award, value: '99.9%', label: 'Uptime', color: 'from-orange-500 to-red-600' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'We put our users first in every decision we make. Your success drives our innovation and commitment to excellence.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries to create cutting-edge tools that empower teams to work smarter and faster.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork. Our platform is built to bring people together, no matter where they are.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data security is paramount. We implement industry-leading practices to keep your information safe.',
      color: 'from-emerald-500 to-teal-600'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded with a vision to revolutionize visual collaboration for remote teams worldwide.'
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Reached 100K users and launched real-time collaboration features that changed the game.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to 100+ countries and introduced enterprise-grade security features.'
    },
    {
      year: '2023',
      title: 'Innovation Award',
      description: 'Recognized as Best Collaboration Tool and crossed 500K active users milestone.'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Launched AI-powered features and reached 1M users, transforming how teams create together.'
    }
  ]

  const team = [
    { role: 'Engineering', count: '45+', icon: Rocket },
    { role: 'Design', count: '20+', icon: Lightbulb },
    { role: 'Support', count: '30+', icon: MessageCircle },
    { role: 'Operations', count: '15+', icon: Target }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Empowering visual collaboration</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              We are building the future of
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                collaborative work
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Our mission is to empower teams worldwide with intuitive tools that make visual 
              collaboration effortless, engaging, and effective.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`max-w-7xl mx-auto px-6 py-20 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We believe that great ideas deserve great tools. Our platform breaks down barriers 
                to visual collaboration, enabling teams to think together, design together, and 
                create together regardless of location or time zone.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every feature we build, every pixel we design, and every line of code we write 
                is guided by our commitment to making collaboration more human, more intuitive, 
                and more powerful.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <Eye className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-sm text-slate-600">To be the canvas where every great idea comes to life</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mt-8">
                <Rocket className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Our Goal</h3>
                <p className="text-sm text-slate-600">Empower 10M teams to collaborate visually by 2026</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <Star className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Our Promise</h3>
                <p className="text-sm text-slate-600">Always put user experience and data security first</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mt-8">
                <Heart className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Our Culture</h3>
                <p className="text-sm text-slate-600">Build with passion, iterate with purpose, succeed together</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className={`text-center mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 transition-transform ${
                  activeValue === index ? 'scale-110' : 'scale-100'
                }`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From a small startup to a global platform trusted by millions
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-700"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
                        <div className="text-3xl font-bold text-blue-400 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-slate-900"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className={`text-center mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Passionate professionals dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {team.map((dept, index) => {
            const Icon = dept.icon
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center border border-slate-200 hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{dept.count}</div>
                <div className="text-slate-600 font-medium">{dept.role}</div>
              </div>
            )
          })}
        </div>

        <div className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-12 text-center transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Mission</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We are always looking for talented individuals who share our passion for innovation
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View Open Positions
          </button>
        </div>
      </div>

      <div className="h-12"></div>
    </div>
  )
}

export default About