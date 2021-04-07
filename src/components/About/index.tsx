import styles from '../../styles/components/About.module.scss';
import PurpleButton from '../PurpleButton';

export default function About() {
    return (
      <section
        id="About"
        className={styles.aboutContainer}
      >
        <article>
          <div>
            <h2>Sobre mim</h2>
            <p>
              Meu nome é Felipe e tenho 21 anos, sou de Imbituba, Santa Catarina. Atualmente faço curso técnico
              voltado a área de programação e também estudo sozinho.
              Iniciei minha vida como desenvolvedor aos 19 anos e desde então busco um próximo nível diário.
            </p>

            <PurpleButton
              href="https://www.linkedin.com/in/felipe-vieira-7a9146188/"
              src="./svg/linkedin.svg"
              imgAlt="LinkedIn"
              title="Meu LinkedIn"
            />
          </div>
        </article>
      </section>
    );
}
  