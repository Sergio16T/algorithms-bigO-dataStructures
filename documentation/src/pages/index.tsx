import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.scss';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      >
      <main className={styles.main}>
        <div className={styles.background}></div>
        <div className={styles.content}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p>Study Guide including algorithmic techniques, data structures and complexity analysis</p>
        </div>
      </main>
    </Layout>
  );
}
