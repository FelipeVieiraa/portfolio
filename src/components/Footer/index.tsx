import styles from '../../styles/components/Footer/Footer.module.scss';

export default function Footer() {
    return(
        <footer className={styles.footerContainer}>
            <p>Portfólio desenvolvido utilizando NextJS</p>
            <p>Criado em 10/03/2021 por
                <strong> Felipe Vieira.</strong>
            </p>

            <div>
                <a href="https://www.instagram.com/felipvieiraa_/">
                    <img src="./svg/insta.svg" alt="Instagram"/>
                </a>

                <a href="https://github.com/felipevieiraa">
                    <img src="./svg/git.svg" alt="GitHub"/>
                </a>

                <a href="https://www.linkedin.com/in/felipe-vieira-7a9146188/">
                    <img src="./svg/linkedin.svg" alt="LinkedIn"/>
                </a>
            </div>
        </footer>
    );
}