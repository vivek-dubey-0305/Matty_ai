import React, { useState, useEffect } from 'react'
import { Cookie, X, Settings, CheckCircle, Shield, BarChart, Globe } from 'lucide-react'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: true
  })
  const [slideIn, setSlideIn] = useState(false)

  useEffect(() => {
    const hasConsented = window.localStorage.getItem('cookieConsent')
    if (!hasConsented) {
      setTimeout(() => {
        setIsVisible(true)
        setTimeout(() => setSlideIn(true), 100)
      }, 1000)
    }
  }, [])

  const handleAcceptAll = () => {
    setSlideIn(false)
    setTimeout(() => {
      setIsVisible(false)
      window.localStorage.setItem('cookieConsent', JSON.stringify({
        accepted: true,
        preferences: { necessary: true, functional: true, analytics: true, marketing: true },
        timestamp: new Date().toISOString()
      }))
    }, 300)
  }

  const handleRejectAll = () => {
    setSlideIn(false)
    setTimeout(() => {
      setIsVisible(false)
      window.localStorage.setItem('cookieConsent', JSON.stringify({
        accepted: true,
        preferences: { necessary: true, functional: false, analytics: false, marketing: false },
        timestamp: new Date().toISOString()
      }))
    }, 300)
  }

  const handleSavePreferences = () => {
    setSlideIn(false)
    setTimeout(() => {
      setIsVisible(false)
      window.localStorage.setItem('cookieConsent', JSON.stringify({
        accepted: true,
        preferences: preferences,
        timestamp: new Date().toISOString()
      }))
    }, 300)
  }

  const togglePreference = (key) => {
    if (key !== 'necessary') {
      setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
    }
  }

  const cookieCategories = [
    {
      key: 'necessary',
      icon: Shield,
      title: 'Necessary Cookies',
      description: 'Required for the website to function properly. These cannot be disabled.',
      color: 'from-red-500 to-orange-600',
      required: true
    },
    {
      key: 'functional',
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization, such as remembering your preferences.',
      color: 'from-blue-500 to-indigo-600',
      required: false
    },
    {
      key: 'analytics',
      icon: BarChart,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website to improve user experience.',
      color: 'from-purple-500 to-pink-600',
      required: false
    },
    {
      key: 'marketing',
      icon: Globe,
      title: 'Marketing Cookies',
      description: 'Used to track visitors and display relevant ads and marketing campaigns.',
      color: 'from-emerald-500 to-teal-600',
      required: false
    }
  ]

  const highlights = [
    { icon: Shield, text: 'Your data is encrypted and secure' },
    { icon: CheckCircle, text: 'We never sell your information' },
    { icon: CheckCircle, text: 'You control your data' },
    { icon: Shield, text: 'Transparent data practices' }
  ]

  if (!isVisible) return null

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          slideIn ? 'bg-opacity-50' : 'bg-opacity-0'
        }`}
        onClick={() => !showSettings && handleRejectAll()}
      />

      <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-transform duration-500 ${
        slideIn ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="max-w-6xl mx-auto">
          {!showSettings ? (
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Cookie className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          We value your privacy
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                          By clicking Accept All, you consent to our use of cookies.
                        </p>
                      </div>
                    </div>
                    <a href="/privacy" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                      Learn more about our privacy practices →
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Customize
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-200"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
              <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Cookie Preferences</h3>
                    <p className="text-sm text-slate-600">Manage your cookie settings</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-8 h-8 rounded-lg hover:bg-slate-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex-1">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  When you visit our website, we may store or retrieve information through your browser, 
                  usually in the form of cookies. This information helps us provide better services. 
                  You can choose which types of cookies to allow below.
                </p>

                <div className="space-y-4">
                  {cookieCategories.map((category) => {
                    const Icon = category.icon
                    const isEnabled = preferences[category.key]
                    
                    return (
                      <div
                        key={category.key}
                        className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                          isEnabled ? 'border-blue-200 bg-blue-50' : 'border-slate-200 bg-white'
                        }`}
                      >
                        <div className="p-5">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-lg font-semibold text-slate-900">
                                  {category.title}
                                </h4>
                                {category.required ? (
                                  <span className="text-xs bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium">
                                    Always Active
                                  </span>
                                ) : (
                                  <button
                                    onClick={() => togglePreference(category.key)}
                                    className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                                      isEnabled ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-slate-300'
                                    }`}
                                  >
                                    <span
                                      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                                        isEnabled ? 'translate-x-7' : 'translate-x-0'
                                      }`}
                                    />
                                  </button>
                                )}
                              </div>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {category.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="p-6 border-t border-slate-200 bg-slate-50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 px-6 py-3 bg-white text-slate-700 rounded-xl font-semibold border-2 border-slate-200 hover:bg-slate-50 transition-all duration-200"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Save Preferences
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-200"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CookieConsent