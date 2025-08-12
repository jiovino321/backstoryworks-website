'use client';

import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Content Writing",
      description: "I help you tell your story in a way that sounds like you—not a robot—and grabs your audience's attention.",
      details: [
        "Website copy that converts",
        "Blog posts that engage",
        "Email newsletters people want to read",
        "Social media content with personality"
      ],
      icon: "✍️"
    },
    {
      title: "Brand Storytelling",
      description: "Every brand has a story—let's find yours and tell it well. I help you uncover what makes you unique and share it with confidence, shaping your voice, tone, and messaging so your content stays consistent and compelling.",
      details: [
        "Brand story development",
        "Voice and tone guidelines", 
        "Messaging strategy",
        "Content pillars and themes"
      ],
      icon: "📖"
    },
    {
      title: "Content Strategy", 
      description: "I help you plan how, when, and where to share your story so it hits the right people at the right time—and makes the impact you're looking for.",
      details: [
        "Content audits and analysis",
        "Editorial calendar planning",
        "Content workflow systems",
        "Performance tracking setup"
      ],
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen pt-16" style={{backgroundColor: '#FDF7F2'}}>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6" style={{color: '#333333'}}>
            How we help small brands tell their story
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{color: '#333333'}}>
            From finding your voice to building a content strategy that works, 
            we're here to help you connect with your people in an authentic way.
          </p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div>
                <h3 className="font-serif text-2xl font-medium mb-4" style={{color: '#333333'}}>
                  {service.title}
                </h3>
                  <p className="text-lg mb-6 leading-relaxed" style={{color: '#333333'}}>
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6A8A82'}}></span>
                        <span style={{color: '#333333'}}>{detail}</span>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 text-center">
          <h2 className="font-serif text-3xl font-medium mb-8" style={{color: '#333333'}}>
            Our process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B35230'}}>
                <span className="text-white font-medium">1</span>
              </div>
              <h3 className="font-medium mb-2" style={{color: '#333333'}}>Listen & Learn</h3>
              <p style={{color: '#333333'}}>We start by understanding your business, your values, and your people.</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B35230'}}>
                <span className="text-white font-medium">2</span>
              </div>
              <h3 className="font-medium mb-2" style={{color: '#333333'}}>Discover & Define</h3>
              <p style={{color: '#333333'}}>Together, we uncover what makes you unique and how to share it.</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B35230'}}>
                <span className="text-white font-medium">3</span>
              </div>
              <h3 className="font-medium mb-2" style={{color: '#333333'}}>Create & Connect</h3>
              <p style={{color: '#333333'}}>We help you share your story in ways that build real relationships.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="font-serif text-2xl font-medium mb-4" style={{color: '#333333'}}>
            Ready to get started?
          </h2>
          <p className="text-lg mb-8" style={{color: '#333333'}}>
            Let's talk about your story and how we can help you tell it.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-medium transition-all hover:shadow-md"
            style={{
              backgroundColor: '#B35230',
              color: 'white',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9A4628'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B35230'}
          >
            Let's talk
          </Link>
        </div>
      </div>
    </div>
  );
}