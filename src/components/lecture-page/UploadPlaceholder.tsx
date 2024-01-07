import { MouseEventHandler } from "react";
import styles from "./UploadPlaceHolder.module.scss";

import uploadIcon from "@/assets/upload.svg";

export interface IUploadPlaceholder {
    width?: string;
    height?: string;
    label?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export const UploadPlaceholder: React.FC<IUploadPlaceholder> = ({ width, height, label, onClick }) => {
    return (
        <div className={styles.upload_placeholder_wrapper} style={{ width: width, height: height }} onClick={onClick}>
            <img src={uploadIcon} alt="upload-icon" />
            <p>{label}</p>
        </div>
    );
};
