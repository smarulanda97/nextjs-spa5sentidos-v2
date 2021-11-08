export function trimAllSpaces(text: string): string {
  if (!text) {
    return '';
  }

  return text.split(' ').join('');
}
