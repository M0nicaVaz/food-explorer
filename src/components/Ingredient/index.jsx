import styles from './ingredients.module.scss'
import { Plus, TrashSimple } from 'phosphor-react'

export function Ingredient({ isNew, value, onClick, ...rest }) {
    return (
        <div className={`${styles.container} ${isNew ? styles.new : styles.remove}`} >
            <input type="text" value={value} readOnly={!isNew}  {...rest} />
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
