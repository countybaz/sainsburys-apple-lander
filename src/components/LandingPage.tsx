
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LandingPage = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentName, setCurrentName] = useState('');
  
  const names = ["Kayla", "Emma", "Sophia", "Olivia", "Mia", "Ava", "Isabella", "Amelia", "Lily", "Hannah"];

  useEffect(() => {
    const updateFeed = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentTime(`[${time}]`);
      setCurrentName(randomName);
    };

    updateFeed();
    const interval = setInterval(updateFeed, Math.random() * (10000 - 5000) + 5000);
    return () => clearInterval(interval);
  }, [names]);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif' }}>
      {/* Header Section */}
      <div className="px-4 py-4 sm:py-6">
        <div className="flex items-start gap-3 sm:gap-4 mb-6">
          <img 
            src="https://storage.googleapis.com/msgsndr/oj1UE5nldpqOWbC3r8GS/media/6727f1fc37cc55a8175537fe.png" 
            alt="App Icon" 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-lg flex-shrink-0"
          />
          <div className="flex-1 pt-1 min-w-0">
            <h1 className="text-lg sm:text-xl font-semibold text-black mb-1 leading-tight">
              Sainsbury's Product Reviewer
            </h1>
            <p className="text-gray-600 text-sm mb-3 leading-snug">
              Get Rewards By Doing Deals👇
            </p>
            <a href="https://unlockrwrd.com/LwA1CaVCV" className="inline-block">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full text-sm">
                Apply Now
              </Button>
            </a>
          </div>
        </div>

        {/* What's New Section */}
        <div className="mb-2">
          <Card className="shadow-sm border-0 bg-white">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-black mb-2">What's New</h2>
              
              {/* Version History */}
              <div className="mb-2">
                <h3 className="text-sm font-medium text-black mb-0.5">Version History</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500">Version 2.37.0</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">Jun 24, 2024</span>
                </div>
              </div>

              {/* Process Steps */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm">✍️</span>
                  <span className="text-sm text-black">Enter your email & basic info</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">✅</span>
                  <span className="text-sm text-black">Complete recommended Deals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">💰</span>
                  <span className="text-sm text-black">Claim Your Reward!</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* App Preview Images - Horizontal Line */}
        <div className="mb-2">
          <div className="flex gap-2 overflow-x-auto pb-1 px-1">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/oj1UE5nldpqOWbC3r8GS/media/fe48ceb8-4f26-42b5-a23a-3d7ba8603fe9.png" 
              alt="App Preview 1" 
              className="flex-shrink-0 w-20 h-36 rounded-lg object-contain"
            />
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/oj1UE5nldpqOWbC3r8GS/media/8c0aff3e-45bd-49a7-b70c-8d3ffa7dfa9b.png" 
              alt="App Preview 2" 
              className="flex-shrink-0 w-20 h-36 rounded-lg object-contain"
            />
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/oj1UE5nldpqOWbC3r8GS/media/61dba3bc-da7a-4a12-b512-a2ed19f1eb90.png" 
              alt="App Preview 3" 
              className="flex-shrink-0 w-20 h-36 rounded-lg object-contain"
            />
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/oj1UE5nldpqOWbC3r8GS/media/bbc484b5-34f0-461f-87ab-2dffe0c923b5.png" 
              alt="App Preview 4" 
              className="flex-shrink-0 w-20 h-36 rounded-lg object-contain"
            />
          </div>
        </div>

        {/* Preview Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-black mb-1">Preview</h2>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex-shrink-0">
              <img 
                src="https://storage.googleapis.com/msgsndr/oj1UE5nldpqOWbC3r8GS/media/679e3a6abe5edce77835a875.png" 
                alt="Screenshot 1" 
                className="w-[calc(50vw-2rem)] max-w-40 h-auto aspect-[9/16] rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://storage.googleapis.com/msgsndr/oj1UE5nldpqOWbC3r8GS/media/679e3a6ae64e963e7a5e8026.png" 
                alt="Screenshot 2" 
                className="w-[calc(50vw-2rem)] max-w-40 h-auto aspect-[9/16] rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Ratings and Reviews Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-black mb-3">Ratings and Reviews</h2>
          <Card className="shadow-sm border-0 bg-white">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-light text-black mb-1">4.6</div>
                  <div className="text-xs text-black">out of 5</div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    {[
                      { stars: 5, width: '70%' },
                      { stars: 4, width: '30%' },
                      { stars: 3, width: '20%' },
                      { stars: 2, width: '8%' },
                      { stars: 1, width: '13%' }
                    ].map((rating, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="text-xs text-black w-3 flex-shrink-0">
                          {rating.stars}
                        </div>
                        <div className="flex items-center gap-0.5 flex-shrink-0">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span 
                              key={i} 
                              className={`text-xs ${i < rating.stars ? 'text-black' : 'text-gray-300'}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden ml-2">
                          <div 
                            className="h-full bg-black rounded-full transition-all duration-300"
                            style={{ width: rating.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Feed */}
        <div className="mb-4">
          <Card className="shadow-sm border-gray-200 bg-white">
            <CardContent className="p-4">
              <h2 className="text-base font-semibold text-black mb-3 text-center">Live Feed</h2>
              <div className="border-2 border-green-500 rounded-lg p-3 bg-green-50">
                <p className="text-center text-black text-xs leading-relaxed">
                  <span className="text-green-600 font-medium">{currentTime}</span>{' '}
                  <span className="text-green-600 font-semibold text-sm">{currentName}</span>{' '}
                  just claimed her
                  <br />
                  £100 Sainsburys Gift Card!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews */}
        <div className="space-y-3">
          <Card className="shadow-sm border-gray-200 bg-white">
            <CardContent className="p-3">
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src="https://i.pinimg.com/236x/d0/9a/38/d09a38017048ec506b4564d5048352c1.jpg" 
                  alt="Profile" 
                  className="w-5 h-5 rounded-full"
                />
                <div>
                  <div className="text-xs font-semibold text-black">Worked So Well!</div>
                  <div className="text-xs text-gray-500">Yesterday: 10:11 AM</div>
                </div>
              </div>
              <p className="text-black text-xs leading-relaxed">
                I used this today, it took me a couple hours however it was so worth it when i used it for my whole food shop! My food shop only cost me £5 after using the £100 gift card 😊
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-gray-200 bg-white">
            <CardContent className="p-3">
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJm1VcPK75fg8bFTEJ1c4-7rI84xdHK-OhAw&s" 
                  alt="Profile" 
                  className="w-5 h-5 rounded-full"
                />
                <div>
                  <div className="text-xs font-semibold text-black">I use this every week!</div>
                  <div className="text-xs text-gray-500">Today: 12:01 AM</div>
                </div>
              </div>
              <p className="text-black text-xs leading-relaxed">
                It takes a bit to get through the deals however after a few hours of clicking its so worth it as the gift card comes straight too you! I use it for my pre drinks x 
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
