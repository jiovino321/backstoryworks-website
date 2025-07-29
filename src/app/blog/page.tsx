export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Brand Storytelling in 2024",
      excerpt: "Discover how authentic storytelling can transform your business and create deeper connections with your audience.",
      date: "January 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Content Strategy: Quality vs. Quantity",
      excerpt: "Learn why focusing on high-quality, targeted content delivers better results than publishing frequently.",
      date: "January 10, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Building Your Brand Voice",
      excerpt: "A step-by-step guide to developing a consistent and authentic voice that represents your brand values.",
      date: "January 5, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Blog</h1>
          <p className="text-lg text-gray-600">
            Insights, tips, and stories about effective communication and brand building.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <a
                  href={`/blog/${post.id}`}
                  className="text-orange-600 hover:text-orange-800 font-medium"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            More blog posts coming soon! Subscribe to our newsletter to stay updated.
          </p>
        </div>
      </div>
    </div>
  );
}