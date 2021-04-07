import styles from '../../styles/components/Skills/Skills.module.scss';
import Card from './card';

export default function Skills() {

  return (
    <section id="Skills" className={styles.skillsContainer}>

      <h2>Conhecimentos</h2>

      <article>
        <Card
          skill="HTML e CSS"
          description="2 anos de experiência."
          percentage={90}
          src="./svg/html.svg"
          alt="HTML"
        />

        <Card
          skill="Javascript"
          description="2 anos de experiência."
          percentage={80}
          src="./svg/javascript.svg"
          alt="Javascript"
        />

        <Card
          skill="Typescript"
          description="1 ano de experiência."
          percentage={70}
          src="./svg/typescript.svg"
          alt="Typescript"
        />

        <Card
          skill="ReactJS"
          description="1 ano de experiência."
          percentage={70}
          src="./svg/react.svg"
          alt="ReactJS"
        />

        <Card
          skill="NextJS"
          description="2 meses de experiência."
          percentage={20}
          src="./svg/next.svg"
          alt="NextJS"
        />

        <Card
          skill="UI/UX Design"
          description="2 meses de experiência."
          percentage={20}
          src="./svg/figma.svg"
          alt="Figma"
        />
      </article>
    </section>
  );
}
  