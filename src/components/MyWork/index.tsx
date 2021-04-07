import { useContext } from 'react';
import { DataContext } from '../../contexts/data';
import styles from '../../styles/components/MyWork/MyWork.module.scss';
import Card from './card';

import { Repos } from '../../contexts/data';

export default function MyWork() {

  const { info } = useContext(DataContext);
  const repositories: any = info.repos;

  return (
    <section 
      id="MyWork" 
      className={styles.myWorkContainer}
    >

      <h2>Oque faço</h2>

      <article>
        <Card 
          title="Sites responsivos"
          description="Desenvolvimento de sites profissionais, sistemas web, blogs e lojas virtuais focado em resultados." 
          src="./svg/site.svg"
          alt="Sites"
        />

        <Card 
          title="Layouts"
          description="Desenho de layouts que se adequam ao seu negócio de forma profissional e fiel no desenvolvimento." 
          src="./svg/design.svg"
          alt="Design"
        />

        <Card 
          title="Aplicativos"
          description="Criação de aplicativos híbridos, para android e IOS. Através das melhores linguagens e tecnologias." 
          src="./svg/app.svg"
          alt="Aplicativos"
        />
      </article>
    </section>
  );
}
  