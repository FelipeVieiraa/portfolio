import styles from '../../styles/components/PurpleButton.module.scss';

interface componentProps {
    href: string;
    src: string;
    imgAlt: string;
    title: string;
}

export default function PurpleButton({ ...rest }: componentProps) {
    return (
        <a
          className={styles.purpleButton}
          href={rest.href}
        >
            <img src={rest.src} alt={rest.imgAlt}/>
            <span>{rest.title}</span>
        </a>
    );
}