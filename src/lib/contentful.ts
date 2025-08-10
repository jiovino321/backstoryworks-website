import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Lazy client creation to avoid build-time issues
function getClient() {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error('Missing Contentful environment variables');
  }
  
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: 'master', // ensure we're on the master environment
  });
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  excerpt: string;
  content: Document;
  date: string;
  readTime: string;
  author?: string;
  featuredImage?: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Fallback for missing environment variables (build-time safety)
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    console.warn('Contentful environment variables missing, returning empty blog posts');
    return [];
  }

  try {
    const client = getClient();
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      order: ['-fields.publishedDate'],
      include: 2, // Include linked entries up to 2 levels deep
    });

    return response.items
      .filter((item: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        // Only include items with properly structured rich text content
        const content = item.fields.content;
        return content && typeof content === 'object' && content.nodeType === 'document';
      })
      .map((item: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
        id: item.sys.id,
        slug: item.fields.slug || item.sys.id,
        title: item.fields.title || 'Untitled',
        shortDescription: item.fields.shortDescription || 'No subtitle available',
        excerpt: item.fields.excerpt || 'No excerpt available',
        content: item.fields.content,
        date: item.fields.publishedDate ? new Date(item.fields.publishedDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }) : 'No date',
        readTime: item.fields.readTime || '5 min read',
        author: item.fields.author?.fields?.name || 'BackstoryWorks Team',
        featuredImage: item.fields.featuredImage?.fields?.file?.url || null,
      }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Fallback for missing environment variables
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    console.warn('Contentful environment variables missing, cannot fetch blog post');
    return null;
  }

  try {
    const client = getClient();
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      'fields.slug': slug,
      limit: 1,
      include: 2, // Include linked entries up to 2 levels deep
    });

    if (response.items.length === 0) {
      return null;
    }

    const item: any = response.items[0]; // eslint-disable-line @typescript-eslint/no-explicit-any
    
    // Check if this item has proper rich text content
    const content = item.fields.content;
    if (!content || typeof content !== 'object' || content.nodeType !== 'document') {
      return null;
    }
    
    return {
      id: item.sys.id,
      slug: item.fields.slug || item.sys.id,
      title: item.fields.title || 'Untitled',
      shortDescription: item.fields.shortDescription || 'No subtitle available',
      excerpt: item.fields.excerpt || 'No excerpt available',
      content: content,
      date: item.fields.publishedDate ? new Date(item.fields.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) : 'No date',
      readTime: item.fields.readTime || '5 min read',
      author: item.fields.author?.fields?.name || 'BackstoryWorks Team',
      featuredImage: item.fields.featuredImage?.fields?.file?.url,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Client is now created lazily via getClient() function