import { useContext } from 'react';
import styles from '../../styles/components/Home.module.scss';

import { DataContext } from '../../contexts/data';
import PurpleButton from '../PurpleButton';

export default function Home() {
    const { info } = useContext(DataContext);

    return (
      <section 
        id="Home" 
        className={styles.homeContainer}
      >
        
        <article>
          <div>
            <img 
              src={info.perfil.avatar_url} 
              alt="Perfil"
            />
          </div>

          <div>
            <span>Olá,</span>
            <p>
              eu sou o
              <strong> Felipe Vieira</strong><br/>
              Desenvolvedor Front-End e UI/UX Designer.
            </p>

            <PurpleButton
              href="https://github.com/felipevieiraa"
              src="./svg/git.svg"
              imgAlt="GitHub"
              title="Meu GitHub"
            />

          </div>

        </article>

        <article>
          <a href="https://www.instagram.com/felipvieiraa_/">
            <img src="./svg/insta.svg" alt="Instagram"/>
          </a>

          <a href="https://github.com/felipevieiraa">
            <img src="./svg/git.svg" alt="GitHub"/>
          </a>

          <a href="https://www.linkedin.com/in/felipe-vieira-7a9146188/">
            <img src="./svg/linkedin.svg" alt="LinkedIn"/>
          </a>
        </article>

      </section>
    );
}
  