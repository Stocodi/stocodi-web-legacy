import { useRef } from "react";
import { Input, InputContainer, TextAreaContainer } from "../../interfaces/forms/Input";
import { CheckBox } from "../../interfaces/forms/CheckBox";
import styles from "./LectureUploadPage.module.scss";

export default function LectureUploadPage() {
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    // const hashtagRef = useRef<HTMLInputElement>(null);

    const checkboxRef = useRef<HTMLInputElement>(null);
    const videolinkRef = useRef<HTMLInputElement>(null);

    const onCheckBoxClicked = () => {
        if (videolinkRef.current != null) {
            if (checkboxRef.current?.checked) {
                videolinkRef.current.disabled = false;
            } else {
                videolinkRef.current.disabled = true;
            }
        }
    };

    return (
        <>
            <div className={styles.upload_wrapper}>
                <div className={styles.upload_container}>
                    <InputContainer ref={titleRef} label="제목" width="100%" height="50px" />
                    <TextAreaContainer ref={descriptionRef} label="상세설명" width="100%" height="300px" />
                    <CheckBox ref={checkboxRef} label="유튜브 링크로 업로드" onClick={onCheckBoxClicked}></CheckBox>
                    <Input ref={videolinkRef} disabled placeholder="유튜브 링크를 입력해주세요" width="100%" height="50px"></Input>
                </div>
                <div className={styles.upload_container}></div>
            </div>
        </>
    );
}
