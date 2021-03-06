export { default as App } from './App/App';
export { default as Header } from './Header/Header';
export { default as Footer } from './Footer/Footer';
export { default as Layout } from './Layout/Layout';
export { default as Slider } from './Slider/Slider';
export { default as Link } from './Common/Link/Link';
export { default as Price } from './Common/Price/Price';
export { default as Offer } from './Common/Offer/Offer';
export { default as BlockBase } from './BlockBase/BlockBase';
export { default as EmbedVideo } from './EmbedVideo/EmbedVideo';
export { default as Navigation } from './Navigation/Navigation';
export { default as PlayButton } from './Common/Svg/PlayButton';
export { default as SpanishFlag } from './Common/Svg/SpanishFlag';
export { default as EnglishFlag } from './Common/Svg/EnglishFlag';
export { default as ServicesList } from './Services/ServicesList/ServicesList';
export { default as LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';
export { default as NavigationItem } from './Navigation/NavigationItem/NavigationItem';
export { default as ServicesListItem } from './Services/ServicesList/ServicesListItem/ServicesListItem';
export { default as InstagramFeed } from './InstagramFeed/InstagramFeed';
export { default as VideoBlock } from './VideoBlock/VideoBlock';
export { default as ServicesHome } from './Services/ServicesHome/ServicesHome';
export { default as SocialRedirect } from './LinkTree/LinkTree';

/**
 *
 * Mapping available components to be rendered from a page
 *
 */
import LinkTreeComponent from './LinkTree/LinkTree';
import VideoBlockComponent from './VideoBlock/VideoBlock';
import UnRenderedComponent from './Common/UnRendered/UnRedered';
import InstagramFeedComponent from './InstagramFeed/InstagramFeed';
import ServicesAllComponent from './Services/ServicesAll/ServicesAll';
import ServicesHomeComponent from './Services/ServicesHome/ServicesHome';
import LanguageSwitcherComponent from './LanguageSwitcher/LanguageSwitcher';

export const ComponentsList = {
  LinkTree: LinkTreeComponent,
  videoHome: VideoBlockComponent,
  unRendered: UnRenderedComponent,
  servicesAll: ServicesAllComponent,
  servicesHome: ServicesHomeComponent,
  instagramFeed: InstagramFeedComponent,
  languageSwitcher: LanguageSwitcherComponent,
};
