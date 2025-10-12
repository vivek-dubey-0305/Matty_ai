import React, { useState, useEffect } from 'react'
import { 
  Home, FileText, Users, Settings, HelpCircle, Shield, 
  BookOpen, Sparkles, Layout, Zap, Crown, Mail,
  ChevronRight, Map, Layers, MessageSquare, Bell
} from 'lucide-react'

const Sitemap = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sitemapData = [
    {
      category: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-indigo-600',
      links: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Dashboard', path: '/dashboard', icon: Layout },
        { name: 'Workspaces', path: '/workspaces', icon: Layers },
        { name: 'Templates', path: '/templates', icon: FileText }
      ]
    },
    {
      category: 'Features',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-600',
      links: [
        { name: 'Whiteboard', path: '/whiteboard', icon: Layout },
        { name: 'Real-time Collaboration', path: '/collaborate', icon: Users },
        { name: 'Export & Share', path: '/export', icon: Zap },
        { name: 'Integrations', path: '/integrations', icon: Layers }
      ]
    },
    {
      category: 'Account',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
      links: [
        { name: 'Profile', path: '/profile', icon: Users },
        { name: 'Settings', path: '/settings', icon: Settings },
        { name: 'Notifications', path: '/notifications', icon: Bell },
        { name: 'Billing', path: '/billing', icon: Crown }
      ]
    },
    {
      category: 'Resources',
      icon: BookOpen,
      color: 'from-orange-500 to-red-600',
      links: [
        { name: 'Documentation', path: '/docs', icon: BookOpen },
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Community', path: '/community', icon: MessageSquare },
        { name: 'Blog', path: '/blog', icon: FileText }
      ]
    },
    {
      category: 'Pricing',
      icon: Crown,
      color: 'from-amber-500 to-yellow-600',
      links: [
        { name: 'Plans & Pricing', path: '/pricing', icon: Crown },
        { name: 'Free Trial', path: '/trial', icon: Sparkles },
        { name: 'Enterprise', path: '/enterprise', icon: Layers }
      ]
    },
    {
      category: 'Legal & Support',
      icon: Shield,
      color: 'from-slate-500 to-gray-600',
      links: [
        { name: 'Terms & Conditions', path: '/terms', icon: Shield },
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Contact Us', path: '/contact', icon: Mail },
        { name: 'About Us', path: '/about', icon: Users }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className={`bg-white border-b border-slate-200 sticky top-0 z-50 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Map className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Sitemap</h1>
              <p className="text-sm text-slate-600">Navigate through all pages and features</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className={`bg-white rounded-2xl p-8 mb-12 border border-slate-200 shadow-sm transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-slate-700 leading-relaxed text-center">
            Explore our complete site structure. Find everything from main features to help resources, all organized for easy navigation.
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sitemapData.map((section, sectionIndex) => {
            const CategoryIcon = section.icon
            return (
              <div
                key={section.category}
                className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-700 hover:shadow-lg hover:border-blue-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${(sectionIndex + 2) * 100}ms` }}
                onMouseEnter={() => setHoveredCard(section.category)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Category Header */}
                <div className={`p-6 bg-gradient-to-br ${section.color} transition-all duration-300 ${
                  hoveredCard === section.category ? 'pb-8' : 'pb-6'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-lg font-semibold text-white">
                      {section.category}
                    </h2>
                  </div>
                </div>

                {/* Links */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => {
                      const LinkIcon = link.icon
                      return (
                        <li
                          key={link.name}
                          className={`transition-all duration-300 ${
                            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                          }`}
                          style={{ transitionDelay: `${(sectionIndex + 2) * 100 + linkIndex * 50}ms` }}
                        >
                          <a
                            href={link.path}
                            className="group flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-all duration-200"
                          >
                            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 transition-all duration-200">
                              <LinkIcon className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors duration-200" />
                            </div>
                            <span className="text-slate-700 group-hover:text-slate-900 flex-1 transition-colors duration-200">
                              {link.name}
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-200" />
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Links Section */}
        <div className={`mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-600" />
            Quick Access
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Start Creating', path: '/whiteboard', icon: Layout },
              { name: 'View Pricing', path: '/pricing', icon: Crown },
              { name: 'Get Help', path: '/help', icon: HelpCircle },
              { name: 'Contact Support', path: '/contact', icon: Mail }
            ].map((item, index) => {
              const QuickIcon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.path}
                  className="group bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <QuickIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                      {item.name}
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className={`mt-8 text-center transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-slate-600 text-sm">
            Can't find what you're looking for?{' '}
            <a href="/help" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Visit our Help Center
            </a>
            {' '}or{' '}
            <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              contact support
            </a>
          </p>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-12"></div>
    </div>
  )
}

export default Sitemap