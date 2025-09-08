import { Client, Databases, Storage, Query, Models } from 'appwrite';
import { Package, Category } from '@/types';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const databases = new Databases(client);
export const storage = new Storage(client);

export const DATABASE_ID = '68b33bf10034e18837cc';
export const PACKAGES_COLLECTION_ID = 'packages';
export const CATEGORIES_COLLECTION_ID = 'categories';
export const STORAGE_BUCKET_ID = 'images';

// Package operations
export const getPackages = async (limit?: number, section?: string): Promise<Models.DocumentList<Package>> => {
  const queries = [];
  if (limit) queries.push(Query.limit(limit));
  if (section) queries.push(Query.equal('section', section));

  return await databases.listDocuments(DATABASE_ID, PACKAGES_COLLECTION_ID, queries) as Models.DocumentList<Package>;
};

export const getPackageById = async (id: string): Promise<Package> => {
  return await databases.getDocument(DATABASE_ID, PACKAGES_COLLECTION_ID, id) as Package;
};

export const getLatestPackages = async (limit?: number): Promise<Models.DocumentList<Package>> => {
  const queries = [];
  if (limit) queries.push(Query.limit(limit));
  queries.push(Query.orderDesc('$createdAt'));

  return await databases.listDocuments(DATABASE_ID, PACKAGES_COLLECTION_ID, queries) as Models.DocumentList<Package>;
};

export const getPackagesByCategory = async (category: string): Promise<Models.DocumentList<Package>> => {
  return await databases.listDocuments(DATABASE_ID, PACKAGES_COLLECTION_ID, [
    Query.equal('category', category)
  ]) as Models.DocumentList<Package>;
};

// Category operations
export const getCategories = async (): Promise<Models.DocumentList<Category>> => {
  return await databases.listDocuments(DATABASE_ID, CATEGORIES_COLLECTION_ID) as Models.DocumentList<Category>;
};

// Image operations
export const getImageUrl = (imageId: string) => {
  return `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${STORAGE_BUCKET_ID}/files/${imageId}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;
};

export { client };