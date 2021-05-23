export function isAbsoluteUrl(url: string): boolean {
  if (typeof url !== 'string') {
    throw new Error(`Expected a "string", got a "${typeof url}"`);
  }

  // Don't match Windows paths `c:\`
  if (/^[a-zA-Z]:\\/.test(url)) {
    return false;
  }

  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
}
