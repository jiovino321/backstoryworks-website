'use client';

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen pt-16" style={{backgroundColor: '#FDF7F2'}}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url(/tree-rings-hero-bkgd.jpg)',
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-left">
          <div className="mb-8">
            <Image
              src="/backstory-logo.svg"
              alt="BackstoryWorks Logo"
              width={300}
              height={100}
              className="h-20 w-auto logo-transparent"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6" style={{color: '#333333'}}>
            Helping small brands find their story—and their people.
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{color: '#333333'}}>
            Let's figure out how to tell your story in a way that feels real and connects with your people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg font-medium transition-all hover:shadow-md"
              style={{
                backgroundColor: '#B35230',
                color: 'white',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9A4628'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B35230'}
            >
              Let's talk
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 rounded-lg font-medium transition-all hover:shadow-sm border-2"
              style={{
                borderColor: '#B35230',
                color: '#B35230',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B35230' + '10';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              What we do
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium mb-6" style={{color: '#333333'}}>
                Every business has a story worth telling.
              </h2>
              <p className="text-lg mb-4 leading-relaxed" style={{color: '#333333'}}>
                We're BackstoryWorks — a small, hands-on shop helping local brands in Colorado Springs (and a few beyond) discover what makes them unique, then share it with the world.
              </p>
              <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                No jargon. No "marketing speak." Just clear, thoughtful content that 
                builds real connections with the people who matter to your business.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-serif text-xl font-medium mb-4" style={{color: '#333333'}}>
                What makes us different?
              </h3>
              <ul className="space-y-3" style={{color: '#333333'}}>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{backgroundColor: '#B35230'}}></span>
                  We value substance over flash
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{backgroundColor: '#B35230'}}></span>
                  We're rooted in Colorado Springs
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{backgroundColor: '#B35230'}}></span>
                  We believe in clarity over complexity
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3" style={{backgroundColor: '#B35230'}}></span>
                  We're strategic but never stuffy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16" style={{backgroundColor: '#FDF7F2'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-medium mb-6" style={{color: '#333333'}}>
            How we help
          </h2>
          <p className="text-lg mb-12 leading-relaxed" style={{color: '#333333'}}>
            From finding your voice to sharing your story, we're here for the whole journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#6A8A82' + '20'}}>
                <svg className="w-8 h-8" style={{color: '#6A8A82'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2" style={{color: '#333333'}}>Content Writing</h3>
              <p style={{color: '#333333'}}>
                Website copy, blog posts, and marketing materials that sound like you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#6A8A82' + '20'}}>
                <svg className="w-8 h-8" style={{color: '#6A8A82'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2" style={{color: '#333333'}}>Brand Storytelling</h3>
              <p style={{color: '#333333'}}>
                Discover what makes you unique and learn to share it confidently.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#6A8A82' + '20'}}>
                <svg className="w-8 h-8" style={{color: '#6A8A82'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2" style={{color: '#333333'}}>Content Strategy</h3>
              <p style={{color: '#333333'}}>
                A thoughtful plan for sharing your story across all your channels.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3 rounded-lg font-medium transition-all border-2"
              style={{
                borderColor: '#6A8A82',
                color: '#6A8A82',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6A8A82' + '10';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Learn more about our services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
