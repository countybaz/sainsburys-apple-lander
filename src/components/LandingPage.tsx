
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
      <div className="px-4 py-6">
        <div className="flex items-start gap-4 mb-6">
          <img 
            src="https://storage.googleapis.com/msgsndr/oj1UE5nldpqOWbC3r8GS/media/6727f1fc37cc55a8175537fe.png" 
            alt="App Icon" 
            className="w-24 h-24 rounded-2xl shadow-lg"
          />
          <div className="flex-1 pt-1">
            <h1 className="text-2xl font-semibold text-black mb-1 leading-tight">
              Sainsbury's Product Reviewer
            </h1>
            <p className="text-gray-600 text-base mb-4 leading-snug">
              Get Rewards By Doing Deals👇
            </p>
            <a href="https://unlockrwrd.com/LwA1CaVCV" className="inline-block">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-2.5 rounded-full text-base">
                Apply Now
              </Button>
            </a>
          </div>
        </div>

        {/* What's New Section */}
        <div className="mb-8">
          <Card className="shadow-sm border-0 bg-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-black mb-4">What's New</h2>
              
              {/* Version History */}
              <div className="mb-6">
                <h3 className="text-base font-medium text-black mb-1">Version History</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-500">Version 2.37.0</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">Jun 24, 2024</span>
                </div>
              </div>

              {/* Process Steps */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✍️</span>
                  <span className="text-base text-black">Enter your email & basic info</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">✅</span>
                  <span className="text-base text-black">Complete recommended Deals</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">💰</span>
                  <span className="text-base text-black">Claim Your Reward!</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Apple-style Preview Images Section */}
        <div className="mb-8">
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/oj1UE5nldpqOWbC3r8GS/media/fe48ceb8-4f26-42b5-a23a-3d7ba8603fe9.png" 
                alt="App Preview 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/oj1UE5nldpqOWbC3r8GS/media/8c0aff3e-45bd-49a7-b70c-8d3ffa7dfa9b.png" 
                alt="App Preview 2" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/oj1UE5nldpqOWbC3r8GS/media/61dba3bc-da7a-4a12-b512-a2ed19f1eb90.png" 
                alt="App Preview 3" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/oj1UE5nldpqOWbC3r8GS/media/bbc484b5-34f0-461f-87ab-2dffe0c923b5.png" 
                alt="App Preview 4" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mb-8">
          <div className="flex gap-4 overflow-x-auto pb-4">
            <div className="flex-shrink-0">
              <img 
                src="https://storage.googleapis.com/msgsndr/oj1UE5nldpqOWbC3r8GS/media/679e3a6abe5edce77835a875.png" 
                alt="Screenshot 1" 
                className="w-52 h-96 rounded-2xl shadow-lg object-cover border border-gray-200"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://storage.googleapis.com/msgsndr/oj1UE5nldpqOWbC3r8GS/media/679e3a6ae64e963e7a5e8026.png" 
                alt="Screenshot 2" 
                className="w-52 h-96 rounded-2xl shadow-lg object-cover border border-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Ratings Section */}
        <div className="mb-8">
          <Card className="shadow-sm border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl font-light text-black mb-1">4.6</div>
                  <div className="text-sm text-gray-500">out of 5</div>
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
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 w-12">
                          {'★'.repeat(rating.stars)}
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gray-400 rounded-full transition-all duration-300"
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
        <div className="mb-8">
          <Card className="shadow-sm border-gray-200 bg-white">
            <CardContent className="p-5">
              <h2 className="text-lg font-semibold text-black mb-4 text-center">Live Feed</h2>
              <div className="border-2 border-green-500 rounded-lg p-3 bg-green-50">
                <p className="text-center text-black text-sm leading-relaxed">
                  <span className="text-green-600 font-medium">{currentTime}</span>{' '}
                  <span className="text-green-600 font-semibold text-base">{currentName}</span>{' '}
                  just claimed her
                  <br />
                  £100 Sainsburys Gift Card!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews */}
        <div className="space-y-4">
          <Card className="shadow-sm border-gray-200 bg-white">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src="https://i.pinimg.com/236x/d0/9a/38/d09a38017048ec506b4564d5048352c1.jpg" 
                  alt="Profile" 
                  className="w-6 h-6 rounded-full"
                />
                <div>
                  <div className="text-sm font-semibold text-black">Worked So Well!</div>
                  <div className="text-xs text-gray-500">Yesterday: 10:11 AM</div>
                </div>
              </div>
              <p className="text-black text-sm leading-relaxed">
                I used this today, it took me a couple hours however it was so worth it when i used it for my whole food shop! My food shop only cost me £5 after using the £100 gift card 😊
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-gray-200 bg-white">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJm1VcPK75fg8bFTEJ1c4-7rI84xdHK-OhAw&s" 
                  alt="Profile" 
                  className="w-6 h-6 rounded-full"
                />
                <div>
                  <div className="text-sm font-semibold text-black">I use this every week!</div>
                  <div className="text-xs text-gray-500">Today: 12:01 AM</div>
                </div>
              </div>
              <p className="text-black text-sm leading-relaxed">
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
