import { client } from '../sanity/client';

export interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  status: 'tamamlanan' | 'devam-eden';
  mainImage: any;
  description: string;
  location?: string;
  constructionArea?: string;
  startDate?: string;
  endDate?: string;
  blockCount?: number;
  unitCount?: number;
  gallery?: any[];
}

export async function getProjects(): Promise<SanityProject[]> {
  return await client.fetch(`*[_type == "project"]{
    _id,
    title,
    slug,
    status,
    mainImage,
    description,
    location,
    constructionArea,
    startDate,
    endDate,
    blockCount,
    unitCount
  }`);
}

export async function getProject(slug: string): Promise<SanityProject> {
  return await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      status,
      mainImage,
      description,
      location,
      constructionArea,
      startDate,
      endDate,
      blockCount,
      unitCount,
      gallery
    }`,
    { slug }
  );
}

export async function getFeaturedProjects(): Promise<SanityProject[]> {
   return await client.fetch(`*[_type == "project"] | order(_createdAt desc)[0...3]{
    _id,
    title,
    slug,
    status,
    mainImage,
    description,
    location
  }`);
}
