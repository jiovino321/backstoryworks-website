import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: Document;
  date: string;
  readTime: string;
  author?: string;
  featuredImage?: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      order: ['-fields.publishedDate'],
    });

    return response.items.map((item: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
      id: item.sys.id,
      slug: item.fields.slug || item.sys.id,
      title: item.fields.title || 'Untitled',
      excerpt: item.fields.excerpt || item.fields.description || item.fields.summary || 'No excerpt available',
      content: item.fields.content || { nodeType: 'document', data: {}, content: [] },
      date: item.fields.publishedDate ? new Date(item.fields.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) : 'No date',
      readTime: item.fields.readTime || '5 min read',
      author: item.fields.author || 'BackstoryWorks Team',
      featuredImage: item.fields.featuredImage?.fields?.file?.url,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    const item: any = response.items[0]; // eslint-disable-line @typescript-eslint/no-explicit-any
    return {
      id: item.sys.id,
      slug: item.fields.slug || item.sys.id,
      title: item.fields.title || 'Untitled',
      excerpt: item.fields.excerpt || item.fields.description || item.fields.summary || 'No excerpt available',
      content: item.fields.content || { nodeType: 'document', data: {}, content: [] },
      date: item.fields.publishedDate ? new Date(item.fields.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) : 'No date',
      readTime: item.fields.readTime || '5 min read',
      author: item.fields.author || 'BackstoryWorks Team',
      featuredImage: item.fields.featuredImage?.fields?.file?.url,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export { client };