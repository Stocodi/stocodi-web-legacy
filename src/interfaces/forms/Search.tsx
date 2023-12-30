import { MouseEventHandler, forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";

export interface ISearch {
    placeholder?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Search = forwardRef<HTMLInputElement, ISearch>(({ placeholder, onClick }, ref) => {
    return (
        <div className={styles.search_container}>
            <input ref={ref} type="text" placeholder={placeholder} />
            <button onClick={onClick}>
                <FontAwesomeIcon icon={faSearch} size="xl" />
            </button>
        </div>
    );
});
