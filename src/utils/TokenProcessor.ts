import _ from 'lodash';

interface TokenProcessorInterface {
  /**
   *
   */
  isToken(token: string): boolean;
  /**
   *
   */
  replace(token: string, context: { [p: string]: any }): string;
}

export class TokenProcessor implements TokenProcessorInterface {
  /**
   * {@inheritDoc}
   */
  public replace(token: string, context: { [p: string]: any } = {}): string {
    if (!TokenProcessor.existsToken(token)) {
      return '';
    }

    const currentTokenValue = TokenProcessor.getToken(token).value;
    return !Array.isArray(currentTokenValue)
      ? _.get(context, currentTokenValue)
      : currentTokenValue.map((value) => _.get(context, value)).join('');
  }

  /**
   * {@inheritDoc}
   */
  public isToken(token: string): boolean {
    return /^\[\b([-a-zA-Z0-9:_]*)]$/.test(token);
  }

  /**
   * Check if token name exist in list of available tokens
   */
  private static existsToken(name: string): boolean {
    return (
      TokenProcessor.getAvailableTokens().find(
        (token) => token.name === name
      ) !== undefined
    );
  }

  /**
   *
   */
  private static getToken(name: string): {
    name: string;
    value: string | string[];
  } {
    return TokenProcessor.getAvailableTokens().find(
      (token) => token.name === name
    );
  }

  /**
   * Return array with all possible tokens to use
   */
  private static getAvailableTokens(): {
    name: string;
    value: string | string[];
  }[] {
    return [
      {
        name: '[site:url:relative]',
        value: 'location.asPath',
      },
      {
        name: '[site:url:absolute]',
        value: 'location.url.origin',
      },
    ];
  }
}
