import styles from '../../styles/components/Skills/Card.module.scss';

interface componentProps {
    skill: string;
    description: string;
    percentage: number;
    src: string;
    alt: string;
}

export default function Card({ skill, description, percentage, src, alt }: componentProps) {
    return (
        <div className={styles.skillsCardContainer}>
            <img src={src} alt={alt}/>
            <h3>{skill ?? ""}</h3>            
            <p>{description ?? ""}</p>
            
            <div style={{ backgroundImage: `url('./svg/star.svg')` }}>
                <span 
                  style={{ backgroundImage: `url('./svg/purple-star.svg')`, width: `${percentage}%`}}
                />
            </div>
        </div>
    );
}