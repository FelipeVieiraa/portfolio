import styles from '../../styles/components/Portfolio/Card.module.scss';
import PurpleButton from "../PurpleButton";

interface componentProps {
    title: string;
    description: string;
    website_link: string;
    repos_link: string;
}

export default function Card({ title, description, repos_link, website_link }: componentProps) {
    return (
        <div 
          className={styles.cardContainer}
        >
            <h3>{title ?? ""}</h3>            
            <p>{description ?? ""}</p>

            <div>
              { repos_link && (
                <PurpleButton
                    href={repos_link}
                    src="./svg/git.svg"
                    imgAlt="GitHub"
                    title="Repositório"
                />
              )}

              { website_link && (
                <PurpleButton
                    href={website_link}
                    src="./svg/website.svg"
                    imgAlt="Website"
                    title="Website"
                />
              )}
            </div>
        </div>
    );
}