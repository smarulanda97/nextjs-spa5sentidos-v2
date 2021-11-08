import { graphql, GraphQLRequest, ResponseComposition } from 'msw';
import { config as dbConfig } from './db/AppConfigContext.json';
import { sliders as dbSlider } from './db/LayoutComponent.json';
import { mainMenu as dbMainMenu } from './db/LayoutComponent.json';
import { socialMenu as dbSocialMenu } from './db/LayoutComponent.json';
import { services as dbServices } from './db/ServicesHomeComponent.json';
import { videoBlock as dbVideoBlock } from './db/VideoBlockComponent.json';
import { linkTreeMenu as dbLinkTree } from './db/LinkTreeComponent.json';

export const handlers = [
  graphql.query(
    'GET_DATA_APP_CONFIG_CONTEXT',
    (req: GraphQLRequest<any>, res: ResponseComposition<any>, ctx) => {
      return res(
        ctx.data({
          config: dbConfig,
        })
      );
    }
  ),
  graphql.query(
    'GET_DATA_VIDEO_BLOCK_COMPONENT',
    (req: GraphQLRequest<any>, res: ResponseComposition<any>, ctx) => {
      return res(
        ctx.data({
          videoBlock: dbVideoBlock,
        })
      );
    }
  ),
  graphql.query(
    'GET_DATA_LAYOUT_COMPONENT',
    (req: GraphQLRequest<any>, res: ResponseComposition<any>, ctx) => {
      return res(
        ctx.data({
          mainMenu: dbMainMenu,
          socialMenu: dbSocialMenu,
          sliders: dbSlider,
        })
      );
    }
  ),
  graphql.query(
    'GET_DATA_SERVICES_HOME_COMPONENT',
    (req: GraphQLRequest<any>, res: ResponseComposition<any>, ctx) => {
      return res(
        ctx.data({
          services: dbServices,
        })
      );
    }
  ),
  graphql.query(
    'GET_DATA_LINK_TREE_COMPONENT',
    (req: GraphQLRequest<any>, res: ResponseComposition<any>, ctx) => {
      return res(
        ctx.data({
          linkTreeMenu: dbLinkTree,
        })
      );
    }
  ),
];
