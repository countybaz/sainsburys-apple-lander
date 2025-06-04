
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  
  const screenshots = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];

  const features = [
    {
      title: 'Smart Shopping Lists',
      description: 'AI-powered suggestions based on your shopping history',
      icon: '📝'
    },
    {
      title: 'Delivery Tracking',
      description: 'Real-time updates on your grocery delivery',
      icon: '🚚'
    },
    {
      title: 'Exclusive Deals',
      description: 'Access member-only discounts and offers',
      icon: '💰'
    },
    {
      title: 'Recipe Suggestions',
      description: 'Get meal ideas with ingredients from Sainsbury\'s',
      icon: '👨‍🍳'
    }
  ];

  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Amazing app! Makes grocery shopping so much easier and faster.',
      date: '2 days ago'
    },
    {
      name: 'James L.',
      rating: 5,
      text: 'Love the delivery tracking feature. Always know when my groceries arrive.',
      date: '1 week ago'
    },
    {
      name: 'Emma R.',
      rating: 4,
      text: 'Great deals and easy to use interface. Highly recommend!',
      date: '2 weeks ago'
    }
  ];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          {/* App Icon and Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg flex items-center justify-center text-white text-3xl font-bold">
                S
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Sainsbury's Groceries
                </h1>
                <p className="text-gray-600 text-lg">Shopping & Food</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.8 • 45K Ratings</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              <Badge variant="secondary" className="text-xs">#2 in Food & Drink</Badge>
              <Badge variant="outline" className="text-xs">Editor's Choice</Badge>
              <Badge className="bg-green-100 text-green-800 text-xs">Free</Badge>
            </div>

            <Button 
              size="lg" 
              className="sainsburys-gradient hover:opacity-90 transition-opacity rounded-full px-8 py-3 text-white font-semibold shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Get
            </Button>
          </div>

          {/* Screenshots Carousel */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="flex items-center justify-center">
                <button 
                  onClick={prevScreenshot}
                  className="absolute left-2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="w-64 h-96 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={screenshots[currentScreenshot]} 
                    alt="App Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <button 
                  onClick={nextScreenshot}
                  className="absolute right-2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex justify-center gap-2 mt-4">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreenshot(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentScreenshot ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What's New Section */}
        <Card className="mb-8 shadow-sm border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">What's New</h2>
            <div className="text-sm text-gray-600 mb-2">Version 8.2.1 • 3 days ago</div>
            <p className="text-gray-700 leading-relaxed">
              • Enhanced delivery tracking with live updates<br/>
              • New personalized recipe recommendations<br/>
              • Improved search functionality<br/>
              • Bug fixes and performance improvements
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-sm border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-sm border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-4 h-4 ${
                                star <= review.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="font-medium text-gray-900">{review.name}</span>
                      </div>
                      <p className="text-gray-700">{review.text}</p>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center">
          <Card className="inline-block shadow-lg border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Start Shopping Smarter Today
              </h2>
              <p className="text-gray-600 mb-6 max-w-md">
                Join millions of users who save time and money with Sainsbury's Groceries app.
              </p>
              <Button 
                size="lg" 
                className="sainsburys-gradient hover:opacity-90 transition-opacity rounded-full px-12 py-4 text-white font-semibold shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
