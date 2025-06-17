import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Brain, Users, BarChart3, Zap, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  const features = [{
    icon: <Brain className="w-6 h-6 text-blue-600" />,
    title: 'AI-Powered Insights',
    description: 'Get intelligent recommendations for task estimation, deadline optimization, and workflow improvements.'
  }, {
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    title: 'Kaizen Philosophy',
    description: 'Embrace continuous improvement with AI-generated suggestions and actionable insights for every sprint.'
  }, {
    icon: <Users className="w-6 h-6 text-purple-600" />,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools with real-time updates, mentions, and smart notification management.'
  }, {
    icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
    title: 'Smart Analytics',
    description: 'Track team velocity, cycle times, and improvement metrics with beautiful, actionable dashboards.'
  }, {
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    title: 'Automated Workflows',
    description: 'Reduce manual work with automated stand-up notes, meeting summaries, and progress reporting.'
  }, {
    icon: <Target className="w-6 h-6 text-red-600" />,
    title: 'Goal Achievement',
    description: 'Stay focused on objectives with intelligent goal tracking and milestone management.'
  }];
  const benefits = ['Reduce project delays by 30%', 'Improve team productivity by 25%', 'Get AI-powered risk alerts', 'Automated retrospective insights', 'Smart task estimation', 'Continuous improvement tracking'];
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SP</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Smart Projects</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Smarter Projects,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Everyday Better
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI-powered Kaizen for High-Performing Teams. Transform your project management 
              with intelligent insights, continuous improvement, and seamless collaboration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard">
                <Button size="lg" className="px-8 py-3 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg">Watch Our Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need for project excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by AI and inspired by Kaizen principles, Smart Projects helps teams 
              achieve operational excellence through continuous improvement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    {feature.icon}
                    <span className="text-lg">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proven results that matter
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of teams already experiencing the power of AI-driven 
                project management and continuous improvement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </div>)}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">94%</p>
                  <p className="text-blue-100">of teams report improved delivery predictability</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">30%</p>
                  <p className="text-blue-100">reduction in project delays on average</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">4.8/5</p>
                  <p className="text-blue-100">customer satisfaction rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your project management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and experience the power of AI-driven continuous improvement.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="px-8 py-3 text-lg">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SP</span>
                </div>
                <span className="text-xl font-semibold text-white">Smart Projects</span>
              </div>
              <p className="text-gray-400">
                AI-powered project management for high-performing teams.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p>&copy; 2024 Smart Projects by Faberwork. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default LandingPage;