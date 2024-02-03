import { forwardRef } from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Search.module.scss";

export interface ISearch {
    placeholder?: string;
    onClick: React.EventHandler<React.SyntheticEvent>;
}

export const Search = forwardRef<HTMLInputElement, ISearch>(({ placeholder, onClick }, ref) => {
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onClick(event);
        }
    };

    return (
        <div className={styles.search_container}>
            <input ref={ref} type="text" placeholder={placeholder} onKeyDown={handleKeyPress} />
            <button onClick={onClick}>
                <FontAwesomeIcon icon={faSearch} size="xl" />
            </button>
        </div>
    );
});
