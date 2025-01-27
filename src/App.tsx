import React, { useState } from 'react';
import {
  Shield,
  Search,
  AlertTriangle,
  Database,
  Brain,
  Globe,
  Github,
  Twitter,
  Linkedin,
  MenuIcon,
  X,
  ChevronRight,
  Lock,
} from 'lucide-react';

// Mock data - In real app, this would come from a JSON file
const mockPhishingSites = [
  'https://phishtank.org/',
  'https://fixdappnode.pages.dev',
  'https://logowaniiepekao-24.com/',
  'https://mts.pagen.io/',
  'https://claim2.pages.dev',
  'https://www.boxcafecomdeus.life',
  'https://seuspontos-agora.com',
  'https://poltd.net',
  'https://koiidapbundle.pages.dev',
  'https://cafecomdeusbr.com/',
  'https://futurglico.shop/cafe/cafecomdeuspai25.shop/index.html',
  'https://cafecomdeusbr.site/',
  'https://manysex.com',
  'https://comdeuspai.site',
  'https://smartmigratez.com',
  'http://www.gsuplemntoss.shop',
  'https://loja.gsupllementtos.site/',
  'https://livropaicomdeus.com',
  'https://maskcoin.net',
  'https://cafecomdeusbr.online/',
  'https://cafecomdeus-desconto.store/',
];

const mockSafeSites = [
  'https://quora.com',
  'https://amazon.com',
  'https://facebook.com',
  'https://espncricinfo.com',
  'https://msn.com',
  'https://microsoft.com',
  'https://microsoft.com',
  'https://linkedin.com',
  'https://google.com',
  'https://ebay.com',
  'https://apple.com',
  'https://yahoo.com',
  'https://yelp.com',
  'https://walmart.com',
];
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('phishing');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPhishingSites = mockPhishingSites.filter(site => 
    site.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSafeSites = mockSafeSites.filter(site => 
    site.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const features = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'URL Feature Extraction',
      description: 'Advanced algorithms analyze URL patterns and structures in real-time.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-blue-500" />,
      title: 'Phishing Detection Logic',
      description: 'Sophisticated detection mechanisms identify potential threats instantly.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Web Scraping & HTTP Requests',
      description: 'Efficient data collection and analysis of web content.'
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'XGBoost Prediction',
      description: 'Machine learning powered predictions with high accuracy.'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">PhisDetect</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#problem" className="text-gray-600 hover:text-blue-600">Problem Statement</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600">Key Features</a>
              <a href="#sites" className="text-gray-600 hover:text-blue-600">Site Lists</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</a>
              <a href="#problem" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Problem Statement</a>
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Key Features</a>
              <a href="#sites" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Site Lists</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Securing Web Browsing with PhisDetect
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Protecting You from Phishing in Real-Time
            </p>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              PhisDetect leverages cutting-edge Natural Language Processing and XGBoost to identify phishing URLs in real-time. Stay safe online with instant alerts and peace of mind.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#features"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The Challenge of Phishing Attacks
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              In today's digital landscape, phishing attacks pose a significant threat to individuals and organizations alike. These sophisticated attacks can compromise sensitive data, leading to financial losses and security breaches.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Site Lists Section */}
      <section id="sites" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Site Lists
            </h2>
          </div>

          <div className="flex justify-center mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search domains..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-6">
  <button
    className={`px-4 py-2 rounded-md ${
      activeTab === 'phishing'
        ? 'bg-blue-600 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
    onClick={() => setActiveTab('phishing')}
  >
    Phishing Sites
  </button>
  <button
    className={`px-4 py-2 rounded-md ${
      activeTab === 'safe'
        ? 'bg-blue-600 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
    onClick={() => setActiveTab('safe')}
  >
    Safe Sites
  </button>
</div>

<div className="bg-white rounded-lg shadow-md p-6 max-h-96 overflow-y-auto">
  <ul className="space-y-2">
    {activeTab === 'phishing'
      ? filteredPhishingSites.map((site, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md"
          >
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {site}
            </a>
          </li>
        ))
      : filteredSafeSites.map((site, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md"
          >
            <Lock className="w-5 h-5 text-green-500" />
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {site}
            </a>
          </li>
        ))}
  </ul>
</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">PhisDetect</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 PhisDetect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
