import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';

import { asset } from '@utils/imageUtils';
import { Navigation } from '@components/index';
import { GET_DATA_LINK_TREE_COMPONENT } from '@queries/index';
import { useAppConfig } from '@context/AppConfig/AppConfigContext';

import styles from './LinkTree.module.scss';

function LinkTree(): JSX.Element {
  const { locale } = useRouter();
  const { system } = useAppConfig();
  const { loading, error, data } = useQuery(GET_DATA_LINK_TREE_COMPONENT, {
    variables: { locale },
  });

  const renderLogo = () => {
    if (!system?.logo_footer) {
      return null;
    }

    return (
      <Link href={'/'}>
        <a className={styles.logo}>
          <Image
            width={system.logo_footer.width}
            height={system.logo_footer.height}
            src={asset(system.logo_footer.url)}
            alt={system.logo_footer.alternativeText}
          />
        </a>
      </Link>
    );
  };

  const renderLinkTree = () => {
    if (loading || error || !data?.linkTreeMenu) {
      return null;
    }

    return (
      <Navigation
        testId={'link-tree-menu'}
        menu={data.linkTreeMenu[0]}
        className={'text-center mt-lg-0 mt-3 link-tree-menu'}
      />
    );
  };

  return (
    <section className={styles.linkTree}>
      <Container>
        <Row className={'justify-content-center'}>
          <Col xs={10} md={8} lg={7}>
            {/**
             *
             * Render app logo
             *
             */}
            {renderLogo()}
            {/**
             *
             * Render link tree menu
             *
             */}
            {renderLinkTree()}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LinkTree;
