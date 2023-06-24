import styles from './NewTag.module.scss'
import { Plus, TrashSimple } from 'phosphor-react'

export function NewTag({ isNew, value, onClick, ...rest }) {
    return (
        <div className={`${styles.container}`} >
            <input type="text" value={value} readOnly={!isNew} {...rest} />
            <button
                type="button"
                onClick={onClick}
                className={`${styles.button} ${isNew ? styles.new : styles.remove}`}
            >
                {isNew ? <Plus /> : <TrashSimple />}
            </button>
        </div>
    );
}
