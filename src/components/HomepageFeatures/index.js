import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Just download the <a href='https://cdn.smoothservices.eu/download/smoothcloud/install.sh'>install.sh</a> and run this file.
        After the install you have the jar and start file.
      </>
    ),
  },
  {
    title: 'Focus on minimalistic',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Customize your cloud experience. Install what you need, when you need it.
        Our standard setup ensures things are clean and quick with only the essentials installed.
      </>
    ),
  },
  {
    title: 'Powered by BlueNet-Hosting',
    Svg: require('@site/static/img/bluenet.svg').default,
    description: (
      <>
        BlueNet-Hosting is a powerful and cheap hoster,
        which offers kvms, vms and gameservers.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
