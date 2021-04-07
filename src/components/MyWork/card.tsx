import styles from '../../styles/components/MyWork/Card.module.scss';

interface componentProps {
    title: string;
    description: string;
    src: string;
    alt: string;
}

export default function Card({ title, description, src, alt }: componentProps) {
    return (
        <div className={styles.myWorkCardContainer}>
            <img src={src} alt={alt}/>
            <h3>{title ?? ""}</h3>            
            <p>{description ?? ""}</p>
        </div>
    );
}