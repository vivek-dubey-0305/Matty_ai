import React, { useState, useEffect } from 'react'
import { 
  Shield, Lock, Eye, Database, Share2, Bell, 
  Cookie, FileText, Mail, AlertCircle, CheckCircle2, Users
} from 'lucide-react'

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sections = [
    {
      id: 'collection',
      icon: Database,
      title: 'Information We Collect',
      content: 'We collect information you provide directly, including your name, email address, and workspace content. We also automatically collect technical data such as IP addresses, browser type, device information, and usage patterns to improve our services. When you collaborate with others, we collect interaction data to facilitate real-time features.'
    },
    {
      id: 'usage',
      icon: Eye,
      title: 'How We Use Your Information',
      content: 'Your information helps us provide, maintain, and improve our collaborative whiteboard services. We use it to authenticate users, enable real-time collaboration, personalize your experience, send important updates, analyze platform usage, and prevent fraud or abuse. We never sell your personal data to third parties.'
    },
    {
      id: 'sharing',
      icon: Share2,
      title: 'Information Sharing & Disclosure',
      content: 'We share your information only in specific circumstances: with team members you collaborate with, with service providers who assist our operations (cloud hosting, analytics), when required by law or legal process, to protect rights and safety, and with your explicit consent. We use trusted partners who adhere to strict data protection standards.'
    },
    {
      id: 'security',
      icon: Lock,
      title: 'Data Security & Protection',
      content: 'We implement industry-standard security measures including encryption in transit and at rest, secure access controls, regular security audits, and continuous monitoring. While we strive to protect your data, no internet transmission is completely secure. We recommend using strong passwords and enabling two-factor authentication for additional protection.'
    },
    {
      id: 'storage',
      icon: FileText,
      title: 'Data Storage & Retention',
      content: 'Your content is stored on secure cloud servers in multiple regions for redundancy. We retain your data as long as your account is active or as needed to provide services. When you delete content or close your account, we remove it from active systems within 30 days, though backup copies may persist for up to 90 days for disaster recovery purposes.'
    },
    {
      id: 'cookies',
      icon: Cookie,
      title: 'Cookies & Tracking Technologies',
      content: 'We use cookies and similar technologies to maintain sessions, remember preferences, analyze usage, and improve functionality. Essential cookies are required for the service to work, while analytics and preference cookies can be managed through your browser settings. Third-party cookies may be used for integrations you enable.'
    },
    {
      id: 'rights',
      icon: CheckCircle2,
      title: 'Your Privacy Rights',
      content: 'You have the right to access, correct, or delete your personal information. You can export your data, opt-out of marketing communications, disable cookies, and request information about how we process your data. For EU/EEA residents, additional GDPR rights apply including data portability and the right to object to processing.'
    },
    {
      id: 'children',
      icon: Users,
      title: 'Children\'s Privacy',
      content: 'Our service is not intended for children under 13 (or 16 in the EU). We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us immediately and we will take steps to delete such information promptly.'
    },
    {
      id: 'international',
      icon: Share2,
      title: 'International Data Transfers',
      content: 'We operate globally and may transfer your data to countries outside your residence. We ensure appropriate safeguards are in place through standard contractual clauses, adequacy decisions, or other lawful mechanisms. Data transferred internationally receives the same level of protection as described in this policy.'
    },
    {
      id: 'notifications',
      icon: Bell,
      title: 'Communications & Notifications',
      content: 'We send service-related communications necessary for platform operation, including security alerts, billing notifications, and important updates. Marketing communications are optional and can be unsubscribed at any time. You can manage notification preferences in your account settings while maintaining essential service communications.'
    }
  ]

  const highlights = [
    { icon: Shield, text: 'Your data is encrypted and secure' },
    { icon: Lock, text: 'We never sell your information' },
    { icon: CheckCircle2, text: 'You control your data' },
    { icon: Eye, text: 'Transparent data practices' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <div className={`bg-white border-b border-slate-200 sticky top-0 z-50 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Privacy Policy</h1>
              <p className="text-sm text-slate-600">Effective date: October 10, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className={`bg-white rounded-2xl p-8 mb-8 border border-slate-200 shadow-sm transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-slate-700 leading-relaxed mb-6">
            At our collaborative whiteboard platform, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our services. We are committed to protecting your data and 
            being transparent about our practices.
          </p>
          
          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item.text}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <div
                key={section.id}
                className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-700 hover:shadow-md hover:border-purple-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                onMouseEnter={() => setActiveSection(section.id)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeSection === section.id 
                        ? 'bg-gradient-to-br from-purple-500 to-indigo-600 scale-110' 
                        : 'bg-slate-100'
                    }`}>
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${
                        activeSection === section.id ? 'text-white' : 'text-slate-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-slate-900 mb-3">
                        {section.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Policy Updates */}
        <div className={`mt-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Policy Updates & Changes</h3>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                We will notify you of any material changes via email or through a prominent notice on our platform. 
                Your continued use of our services after such modifications constitutes acceptance of the updated policy. 
                We encourage you to review this policy regularly to stay informed about how we protect your information.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`mt-8 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transition-all duration-700 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Contact Us About Privacy</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please don't hesitate to contact us:
              </p>
              <div className="space-y-2">
                <p className="text-slate-700">
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:privacy@example.com" className="text-purple-600 hover:text-purple-700 transition-colors">
                    privacy@example.com
                  </a>
                </p>
                <p className="text-slate-700">
                  <span className="font-medium">Data Protection Officer:</span>{' '}
                  <a href="mailto:dpo@example.com" className="text-purple-600 hover:text-purple-700 transition-colors">
                    dpo@example.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className={`mt-8 text-center transition-all duration-700 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-slate-600 text-sm">
            This policy works together with our{' '}
            <a href="/terms" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
              Terms & Conditions
            </a>
            {' '}to govern your use of our services.
          </p>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-12"></div>
    </div>
  )
}

export default PrivacyPolicy