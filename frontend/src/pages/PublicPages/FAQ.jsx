import React, { useState, useEffect } from 'react'
import { 
  HelpCircle, ChevronDown, Search, Zap, Users, 
  Lock, CreditCard, Download, Share2, Settings,
  MessageSquare, Mail, BookOpen, CheckCircle
} from 'lucide-react'

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'getting-started', name: 'Getting Started', icon: Zap },
    { id: 'collaboration', name: 'Collaboration', icon: Users },
    { id: 'security', name: 'Security', icon: Lock },
    { id: 'billing', name: 'Billing', icon: CreditCard }
  ]

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I create my first whiteboard?',
      answer: 'Creating your first whiteboard is simple! After signing up, click the "New Board" button on your dashboard. You\'ll be taken to an infinite canvas where you can start drawing, adding shapes, text, and images immediately. All changes are saved automatically to the cloud.'
    },
    {
      category: 'getting-started',
      question: 'What tools are available on the whiteboard?',
      answer: 'Our whiteboard includes a comprehensive toolkit: pen and pencil tools for freehand drawing, shapes (rectangles, circles, arrows), text boxes, sticky notes, image uploads, connectors, and a selection tool. You can also use keyboard shortcuts for faster access to tools.'
    },
    {
      category: 'getting-started',
      question: 'Can I use templates to get started quickly?',
      answer: 'Yes! We offer hundreds of pre-made templates for brainstorming, project planning, design thinking, user flows, and more. Access them by clicking "Templates" in the main menu, or start from a blank canvas if you prefer.'
    },
    {
      category: 'collaboration',
      question: 'How do I invite team members to collaborate?',
      answer: 'Click the "Share" button in the top-right corner of any board. You can invite people via email or generate a shareable link. Set permissions to "View Only" or "Can Edit" depending on the level of access you want to grant. Collaborators will see changes in real-time.'
    },
    {
      category: 'collaboration',
      question: 'Can multiple people edit the same board simultaneously?',
      answer: 'Absolutely! Our platform supports real-time collaboration with unlimited participants. You\'ll see cursors with names showing where team members are working, and all changes sync instantly across all devices. There\'s no lag or conflict resolution needed.'
    },
    {
      category: 'collaboration',
      question: 'How do comments and feedback work?',
      answer: 'Click anywhere on the canvas and press "C" to add a comment. Team members will receive notifications and can reply to create discussion threads. Comments stay anchored to specific locations on the board and can be resolved when addressed.'
    },
    {
      category: 'collaboration',
      question: 'Is there a limit to the number of collaborators?',
      answer: 'Free plans allow up to 3 collaborators per board. Pro plans support up to 50 collaborators, and Enterprise plans offer unlimited collaborators with advanced team management features.'
    },
    {
      category: 'security',
      question: 'How secure is my data?',
      answer: 'We take security seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We use industry-standard security practices, regular security audits, and comply with SOC 2 Type II, GDPR, and CCPA regulations.'
    },
    {
      category: 'security',
      question: 'Who can access my private boards?',
      answer: 'Only you and people you explicitly invite can access your private boards. We implement strict access controls and never share your content with third parties. You can revoke access at any time from the sharing settings.'
    },
    {
      category: 'security',
      question: 'Do you offer two-factor authentication?',
      answer: 'Yes! We highly recommend enabling 2FA for added security. You can set it up in Account Settings using an authenticator app like Google Authenticator or Authy. SMS-based 2FA is also available.'
    },
    {
      category: 'security',
      question: 'What happens if I delete a board?',
      answer: 'Deleted boards are moved to trash where they remain for 30 days. You can restore them anytime during this period. After 30 days, boards are permanently deleted from our servers and cannot be recovered.'
    },
    {
      category: 'billing',
      question: 'What\'s included in the free plan?',
      answer: 'The free plan includes unlimited boards, up to 3 collaborators per board, 100MB storage, basic shapes and tools, export to PNG/JPG, and community support. It\'s perfect for individuals and small teams getting started.'
    },
    {
      category: 'billing',
      question: 'How much does the Pro plan cost?',
      answer: 'Pro plans start at $12/month per user when billed annually, or $15/month when billed monthly. Pro includes unlimited collaborators, 10GB storage per user, advanced features, priority support, and export to PDF/SVG.'
    },
    {
      category: 'billing',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel anytime with no penalties. Your Pro features will remain active until the end of your billing period, then your account will automatically switch to the free plan. No data is lost when downgrading.'
    },
    {
      category: 'billing',
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for annual plans. If you\'re not satisfied within the first 30 days, contact support for a full refund. Monthly subscriptions are non-refundable but can be canceled anytime.'
    },
    {
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and ACH bank transfers for Enterprise plans. All payments are processed securely through Stripe.'
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className={`bg-white border-b border-slate-200 sticky top-0 z-50 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h1>
              <p className="text-sm text-slate-600">Find answers to common questions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction & Search */}
        <div className={`bg-white rounded-2xl p-8 mb-8 border border-slate-200 shadow-sm transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 text-center">
            How can we help you today?
          </h2>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className={`mb-8 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 border-slate-200 overflow-hidden transition-all duration-700 hover:border-blue-200 hover:shadow-md ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openFaq === index
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                        : 'bg-slate-100'
                    }`}>
                      <HelpCircle className={`w-5 h-5 transition-colors duration-300 ${
                        openFaq === index ? 'text-white' : 'text-slate-600'
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 pt-1">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No results found</h3>
              <p className="text-slate-600">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>

        {/* Still Need Help Section */}
        <div className={`mt-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">
              Still have questions?
            </h2>
            <p className="text-blue-100 text-lg">
              Our support team is here to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="/contact" className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <p className="text-blue-100 text-sm mb-3">Get help via email within 24 hours</p>
              <span className="text-white font-medium flex items-center gap-2">
                Contact us
                <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a href="/docs" className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Documentation</h3>
              <p className="text-blue-100 text-sm mb-3">Browse our comprehensive guides</p>
              <span className="text-white font-medium flex items-center gap-2">
                Read docs
                <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a href="/community" className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-blue-100 text-sm mb-3">Connect with other users</p>
              <span className="text-white font-medium flex items-center gap-2">
                Join community
                <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-12"></div>
    </div>
  )
}

export default FAQ