export function asset(imageRelativeUrl: string): string {
  return `${process.env.NEXT_PUBLIC_API_URL_IMAGES}${imageRelativeUrl}`;
}
