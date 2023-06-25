import styles from './notFound.module.scss';

export function NotFound({ isSearch }) {
    return (
        <span className={styles.notFound} >
            {isSearch ? "Não encontramos nada com esse título ou ingrediente." : " Ops! Parece que estamos sem estoque."}
        </span>
    )
}