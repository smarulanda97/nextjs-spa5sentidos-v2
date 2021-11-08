import { Metatags as MetatagsType } from '@types-app/index';

type MetatagsProcessed = {
  title?: string;
  defaultTitle?: string;
  description?: string;
  short_link?: string;
  canonical?: string;
  openGraph?: any;
  twitter?: any;
};

interface MetatagsProcessorInterface {
  /**
   * Check if exist metatags for the current pathname
   */
  pageHasMetatags(): boolean;
  /**
   * Get an object processed with next SEO requirements
   */
  getObjectNextSEO(): MetatagsProcessed | undefined;
}

export class MetatagsProcessor implements MetatagsProcessorInterface {
  /**
   * Class properties
   */
  metatags: MetatagsType[];
  pathname: string;

  constructor(metatags: MetatagsType[], pathname: string) {
    this.metatags = metatags;
    this.pathname = pathname;
  }

  /**
   * {@inheritDoc}
   */
  private getForCurrentPage() {
    return this.metatags.find((metatag) => metatag.pathname === this.pathname);
  }

  /**
   *
   * {@inheritDoc}
   */
  public pageHasMetatags() {
    return typeof this.getForCurrentPage !== 'undefined';
  }

  /**
   * {@inheritDoc}
   */
  public getObjectNextSEO(): MetatagsProcessed | undefined {
    if (!this.pageHasMetatags()) {
      return {};
    }

    let metatags = this.getForCurrentPage();

    return {
      ...this.getTags('basic_tags', metatags),
      twitter: { ...this.getTags('twitter', metatags) },
      openGraph: { ...this.getTags('open_graph', metatags) },
    };
  }

  /**
   * {@inheritDoc}
   */
  private getTags(tagsName: string, metatags: MetatagsType) {
    const tags = new Map<string, string>();
    if (!metatags?.[tagsName]) return {};

    for (const tag of Object.keys(metatags[tagsName])) {
      if (tag === '__typename') continue;

      tags.set(tag, metatags[tagsName][tag]);
    }

    return Object.fromEntries(tags);
  }
}
