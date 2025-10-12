import React, { useState, useEffect } from 'react'
import { 
  Mail, MessageSquare, Send, MapPin, Phone, Clock,
  Users, Headphones, Globe, CheckCircle,
  Sparkles, ArrowRight
} from 'lucide-react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  })
  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return
    }
    
    setIsSubmitting(true)
    
    setTimeout(() => {
      setFormStatus('success')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        message: ''
      })
      
      setTimeout(() => setFormStatus(null), 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'support@example.com',
      link: 'mailto:support@example.com',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our team',
      value: 'Available 24/7',
      link: '#chat',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with support',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-emerald-500 to-teal-600'
    }
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      value: '123 Innovation Street\nSan Francisco, CA 94102'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM PST\nWeekends: Closed'
    },
    {
      icon: Globe,
      title: 'Global Support',
      value: '24/7 Online Support\n150+ Countries Served'
    }
  ]

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'sales', label: 'Sales & Pricing' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'feedback', label: 'Feedback' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className={`bg-white border-b border-slate-200 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Contact Us</h1>
              <p className="text-sm text-slate-600">We are here to help and answer any questions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className={`text-center mb-16 transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">We typically respond within 24 hours</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's start a conversation
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a question or need assistance? Our team is ready to help you succeed.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <a
                key={index}
                href={method.link}
                className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{method.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{method.description}</p>
                <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors flex items-center gap-1">
                  {method.value}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </p>
              </a>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-2 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Send us a message</h3>
                  <p className="text-sm text-slate-600">Fill out the form and we will get back to you soon</p>
                </div>
              </div>

              {formStatus === 'success' && (
                <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-emerald-900 mb-1">Message sent successfully!</h4>
                    <p className="text-sm text-emerald-700">We will get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors bg-white"
                    >
                      {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-sm transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <h3 className="text-lg font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {officeInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                        <p className="text-sm text-slate-600 whitespace-pre-line">{info.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Need quick help?</h3>
              <div className="space-y-3">
                <a href="/faq" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all group">
                  <span className="text-sm font-medium text-slate-700">Browse FAQ</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                </a>
                <a href="/docs" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all group">
                  <span className="text-sm font-medium text-slate-700">Documentation</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                </a>
                <a href="/community" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all group">
                  <span className="text-sm font-medium text-slate-700">Community Forum</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                </a>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-slate-900">Our Support Team</h3>
              </div>
              <p className="text-sm text-slate-600">
                Our dedicated support team is passionate about helping you succeed. We are committed to providing fast, friendly, and expert assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-12"></div>
    </div>
  )
}

export default Contact