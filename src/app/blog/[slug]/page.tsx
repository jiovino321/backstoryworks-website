import { notFound } from 'next/navigation';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { getBlogPost, getAllBlogPosts } from '../../../lib/contentful';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | BackstoryWorks Blog`,
    description: post.excerpt,
  };
}

// Rich text rendering options
const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong className="font-semibold text-gray-900">{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em className="italic text-gray-700">{text}</em>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (_node: unknown, children: React.ReactNode) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node: unknown, children: React.ReactNode) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: unknown, children: React.ReactNode) => (
      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (_node: unknown, children: React.ReactNode) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    // Handle blockquote - temporarily disabled
    [BLOCKS.UL_LIST]: (_node: unknown, children: React.ReactNode) => (
      <ul className="mb-4 space-y-2 list-disc list-inside">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: unknown, children: React.ReactNode) => (
      <ol className="mb-4 space-y-2 list-decimal list-inside">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: unknown, children: React.ReactNode) => (
      <li className="text-gray-700">{children}</li>
    ),
  },
};

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      <article className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">
              ← Back to Blog
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
            {post.author && (
              <>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </>
            )}
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content && post.content.nodeType === 'document' ? (
            <div>
              {post.content.content?.map((node: any, index: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
                if (node.nodeType === 'paragraph') {
                  return (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {node.content?.map((textNode: any, textIndex: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
                        if (textNode.nodeType === 'text') {
                          const hasBold = textNode.marks?.some((mark: any) => mark.type === 'bold'); // eslint-disable-line @typescript-eslint/no-explicit-any
                          const hasItalic = textNode.marks?.some((mark: any) => mark.type === 'italic'); // eslint-disable-line @typescript-eslint/no-explicit-any
                          
                          if (hasBold && hasItalic) {
                            return <strong key={textIndex}><em>{textNode.value}</em></strong>;
                          } else if (hasItalic) {
                            return <em key={textIndex}>{textNode.value}</em>;
                          } else if (hasBold) {
                            return <strong key={textIndex}>{textNode.value}</strong>;
                          }
                          return textNode.value;
                        }
                        return null;
                      })}
                    </p>
                  );
                } else if (node.nodeType === 'heading-2') {
                  return (
                    <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
                      {node.content?.[0]?.value || ''}
                    </h2>
                  );
                } else if (node.nodeType === 'heading-3') {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-900">
                      {node.content?.[0]?.value || ''}
                    </h3>
                  );
                } else if (node.nodeType === 'blockquote') {
                  return (
                    <blockquote key={index} className="border-l-4 border-blue-500 pl-4 py-2 mb-4 italic text-gray-800 bg-gray-50">
                      {node.content?.[0]?.content?.[0]?.value || ''}
                    </blockquote>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            <div className="text-gray-700">
              <p>Content not available.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Transform Your Brand Story?
            </h3>
            <p className="text-gray-600 mb-6">
              At BackstoryWorks, we help businesses craft compelling narratives that resonate with their audience and drive results.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}