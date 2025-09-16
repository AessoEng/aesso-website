// CDN configuration for R2 storage
export const CDN_BASE_URL = 'https://pub-cd7b55b304cc4bde8180f034af4ebe56.r2.dev';

// Helper to get CDN URL for assets
export function getCDNUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${CDN_BASE_URL}/${cleanPath}`;
}