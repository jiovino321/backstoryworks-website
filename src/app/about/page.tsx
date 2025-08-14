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
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At BackstoryWorks, we believe every business has a story worth telling — and that the best stories sound like the people behind them. Our mission is to help you uncover what makes you unique and share it in a way that feels true to you, connects with your audience, and builds lasting relationships.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">My Backstory</h2>
            <p className="text-gray-600 mb-6">
              I started BackstoryWorks because I've seen too many great ideas and products hidden behind bland words — and too many businesses pretending to be something they're not, rather than sharing what makes them special. My favorite part of this work is helping someone read their own copy and say, "That sounds like me." That's when I know we've nailed it.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
            <p className="text-gray-600 mb-6">
              We help you put your real voice into words that work. That might mean writing website copy that feels true to you, shaping your brand story, creating content that draws people in, or building a strategy so everything fits together. Whatever the project, the goal is the same: make sure your audience hears you loud and clear.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us</h2>
            <p className="text-gray-600">
              Because you don't need generic copy — you need something that sounds like you and connects with the people you want to reach. We work side by side to capture your style, values, and personality, so every piece of content feels like it came straight from you (but with a little extra polish).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}