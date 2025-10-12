import React, { useState, useEffect } from 'react'
import { CheckCircle2, ScrollText, Shield, Users, AlertCircle, FileText } from 'lucide-react'

const TermsAndConditions = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sections = [
    {
      id: 'acceptance',
      icon: CheckCircle2,
      title: 'Acceptance of Terms',
      content: 'By accessing and using this collaborative whiteboard platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please discontinue use of our service immediately.'
    },
    {
      id: 'services',
      icon: ScrollText,
      title: 'Service Description',
      content: 'Our platform provides real-time collaborative whiteboarding tools, allowing users to create, edit, and share visual content. We offer both free and premium tiers with varying features, storage limits, and collaboration capabilities. Service availability and features may be modified at our discretion.'
    },
    {
      id: 'account',
      icon: Users,
      title: 'User Accounts & Responsibilities',
      content: 'You are responsible for maintaining the confidentiality of your account credentials. All activities conducted through your account are your responsibility. You must provide accurate information during registration and keep it updated. Sharing accounts is prohibited.'
    },
    {
      id: 'content',
      icon: FileText,
      title: 'Content & Intellectual Property',
      content: 'You retain ownership of content you create on our platform. By using our service, you grant us a license to host, store, and display your content as necessary to provide the service. You must not upload content that infringes on intellectual property rights or violates any laws.'
    },
    {
      id: 'privacy',
      icon: Shield,
      title: 'Privacy & Data Security',
      content: 'We are committed to protecting your privacy and data security. Your personal information and content are handled according to our Privacy Policy. We implement industry-standard security measures, though no system is completely secure. You acknowledge the inherent risks of internet-based services.'
    },
    {
      id: 'prohibited',
      icon: AlertCircle,
      title: 'Prohibited Activities',
      content: 'Users must not engage in activities that harm the platform or other users, including: distributing malware, harassment, spamming, attempting unauthorized access, scraping content, or using the service for illegal purposes. Violations may result in account termination.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className={`bg-white border-b border-slate-200 sticky top-0 z-50 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Terms & Conditions</h1>
              <p className="text-sm text-slate-600">Last updated: October 10, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className={`bg-white rounded-2xl p-8 mb-8 border border-slate-200 shadow-sm transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-slate-700 leading-relaxed">
            Welcome to our collaborative whiteboard platform. These Terms and Conditions govern your use of our services. 
            Please read them carefully as they contain important information about your rights and obligations.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <div
                key={section.id}
                className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-700 hover:shadow-md hover:border-blue-200 ${
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
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600 scale-110' 
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

        {/* Additional Terms */}
        <div className={`mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Additional Important Terms</h3>
          <div className="space-y-3 text-slate-700">
            <div className="flex gap-3">
              <span className="text-blue-600 font-medium">•</span>
              <p><strong>Termination:</strong> We reserve the right to suspend or terminate accounts that violate these terms without prior notice.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-medium">•</span>
              <p><strong>Modifications:</strong> We may update these terms periodically. Continued use after changes constitutes acceptance of new terms.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-medium">•</span>
              <p><strong>Limitation of Liability:</strong> Our service is provided "as is" without warranties. We are not liable for indirect damages or service interruptions.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-medium">•</span>
              <p><strong>Governing Law:</strong> These terms are governed by applicable laws. Disputes will be resolved through binding arbitration.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className={`mt-8 text-center transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-slate-600">
            Questions about these terms? Contact us at{' '}
            <a href="mailto:legal@example.com" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              legal@example.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-12"></div>
    </div>
  )
}

export default TermsAndConditions