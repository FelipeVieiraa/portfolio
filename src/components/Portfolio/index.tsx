import { useContext } from 'react';
import { DataContext } from '../../contexts/data';
import styles from '../../styles/components/Portfolio/Portfolio.module.scss';
import Card from './card';

import { Repos } from '../../contexts/data';

export default function Portfolio() {

  const { info } = useContext(DataContext);
  const repositories: any = info.repos;

  return (
    <section id="Portfolio" className={styles.portfolioContainer}>

      <h2>Portfólio</h2>

      <article>
        { repositories.map((repository: Repos) => (
          <Card
            key={repository.id}
            title={repository.name}
            description={repository.description}
            repos_link={repository.url}
            website_link={repository.homepage}
          />
        )) }
      </article>
    </section>
  );
}
  