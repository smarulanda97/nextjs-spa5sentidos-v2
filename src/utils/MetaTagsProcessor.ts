import { TokenProcessor } from '@utils/index';
import { MetaTags as MetaTagsType, Url } from '@types-app/index';

type MetaTagsProcessed = {
  title?: string;
  defaultTitle?: string;
  description?: string;
  short_link?: string;
  canonical?: string;
  openGraph?: any;
  twitter?: any;
};

type Location = {
  url: Url;
  route: string;
  asPath: string;
  locale: string;
  pathname: string;
};

interface MetaTagsProcessorInterface {
  /**
   * Check if exist metaTags for the current router
   */
  pageHasMetaTags(): boolean;
  /**
   * Get an object processed with next SEO requirements
   */
  getObjectNextSEO(): MetaTagsProcessed | undefined;
}

export class MetaTagsProcessor implements MetaTagsProcessorInterface {
  /**
   * Class properties
   */
  location: Location;
  metaTags: MetaTagsType[];

  constructor(location: Location, metaTags: MetaTagsType[]) {
    this.location = location;
    this.metaTags = metaTags;
  }

  /**
   * {@inheritDoc}
   */
  private getForCurrentPage() {
    return this.metaTags.find(
      (metaTag) => metaTag.pathname === this.location.pathname
    );
  }

  /**
   *
   * {@inheritDoc}
   */
  public pageHasMetaTags() {
    return typeof this.getForCurrentPage !== 'undefined';
  }

  /**
   * {@inheritDoc}
   */
  public getObjectNextSEO(): MetaTagsProcessed | undefined {
    if (!this.pageHasMetaTags()) {
      return {};
    }

    const metaTags = this.getForCurrentPage();
    const context = {
      location: this.location,
    };

    return {
      ...MetaTagsProcessor.getTags('basic_tags', metaTags, context),
      twitter: { ...MetaTagsProcessor.getTags('twitter', metaTags, context) },
      openGraph: {
        ...MetaTagsProcessor.getTags('open_graph', metaTags, context),
      },
    };
  }

  /**
   * {@inheritDoc}
   */
  private static getTags(tagName: string, metaTags: MetaTagsType, context) {
    const tags = new Map<string, string>();
    const tokenProcessor = new TokenProcessor();

    if (!metaTags?.[tagName]) {
      return {};
    }

    for (const tag of Object.keys(metaTags[tagName])) {
      if (tag === '__typename' || !metaTags[tagName][tag]) continue;

      let tagValue = metaTags[tagName][tag];
      if (tokenProcessor.isToken(tagValue))
        tagValue = tokenProcessor.replace(tagValue, context);

      tags.set(tag, tagValue);
    }

    return Object.fromEntries(tags);
  }
}
