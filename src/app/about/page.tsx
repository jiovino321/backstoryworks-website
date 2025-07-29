export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About BackstoryWorks</h1>
          <p className="text-lg text-gray-600">
            Every business has a story. We help you tell yours.
          </p>
        </div>
        
        <div className="prose prose-lg mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At BackstoryWorks, we believe that every business has a unique story worth telling. 
              Our mission is to help you discover, craft, and share that story in a way that 
              resonates with your audience and drives meaningful connections.
            </p>
            
            <h2 className="text-2xl font-semibold mb-6">What We Do</h2>
            <p className="text-gray-600 mb-6">
              We specialize in content creation, brand storytelling, and digital strategy. 
              Whether you're a startup looking to establish your voice or an established 
              business ready to evolve your narrative, we're here to help you communicate 
              your value proposition effectively.
            </p>
            
            <h2 className="text-2xl font-semibold mb-6">Why Choose Us</h2>
            <p className="text-gray-600">
              With years of experience in content creation and brand development, we understand 
              the power of authentic storytelling. We work closely with our clients to ensure 
              their unique voice shines through in every piece of content we create.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}