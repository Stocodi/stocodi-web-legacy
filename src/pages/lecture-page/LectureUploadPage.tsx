import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../interfaces/forms/Button";
import { Input, InputContainer, InputButtonContainer, TextAreaContainer } from "../../interfaces/forms/Input";
import { CheckBox } from "../../interfaces/forms/CheckBox";
import { Badge } from "../../interfaces/display/Badge";

import { UploadPlaceholder } from "../../components/lecture-page/UploadPlaceholder";

import { PostRequest } from "../../api/Request";
import { GetAccessToken, GetNickName } from "../../api/Authentication";

import styles from "./LectureUploadPage.module.scss";

export default function LectureUploadPage() {
    const [hashtags, setHashTags] = useState<string[]>([]);

    const navigate = useNavigate();

    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const hashtagRef = useRef<HTMLInputElement>(null);
    const checkboxRef = useRef<HTMLInputElement>(null);
    const videolinkRef = useRef<HTMLInputElement>(null);

    const onHashTagAddClicked = () => {
        if (hashtagRef.current?.value) {
            if (hashtags.includes(hashtagRef.current.value)) {
                alert("이미 등록된 해시태그입니다");
                return;
            }

            setHashTags([...hashtags, hashtagRef.current.value]);
            hashtagRef.current.value = "";
        }
    };

    const onThumbnailUploadClicked = () => {
        alert("서비스 준비중입니다!");
    };

    const onCheckBoxClicked = () => {
        if (videolinkRef.current != null) {
            if (checkboxRef.current?.checked) {
                videolinkRef.current.disabled = false;
            } else {
                videolinkRef.current.disabled = true;
            }
        }
    };

    const onVideoFileUploadClicked = () => {
        alert("서비스 준비중입니다! 유튜브 링크로 업로드 기능을 이용해주세요!");
    };

    const onLectureUploadClicked = async () => {
        // 필드값 비어있는 경우 예외처리
        if (!(titleRef.current?.value && videolinkRef.current?.value)) {
            alert("제목을 입력해주세요!");
        } else if (!videolinkRef.current.value.startsWith("https://www.youtube.com/watch?v=")) {
            alert("잘못된 유튜브 링크 형식입니다");
        } else {
            try {
                await PostRequest(
                    "/lectures",
                    {
                        video_link: videolinkRef.current?.value,
                        title: titleRef.current?.value,
                        author: GetNickName(),
                        description: descriptionRef.current?.value,
                        tags: hashtags,
                    },
                    GetAccessToken(),
                );
                alert("영상 업로드 완료!");
                navigate("/");
            } catch (err) {
                alert("영상 업로드에 실패하였습니다");
            }
        }
    };

    return (
        <>
            <div className={styles.upload_wrapper}>
                <div className={styles.upload_container}>
                    <InputContainer ref={titleRef} label="제목" width="100%" height="50px" />
                    <TextAreaContainer ref={descriptionRef} label="상세설명" width="100%" height="300px" />

                    <InputButtonContainer
                        ref={hashtagRef}
                        label="해시태그"
                        width="100%"
                        height="50px"
                        btnLabel="추가"
                        btnWidth="80px"
                        onClick={onHashTagAddClicked}
                    ></InputButtonContainer>

                    <div className={styles.hashtag_container}>
                        {hashtags.map((element, index) => {
                            return (
                                <Badge key={index} type="primary-stroke">
                                    {element}
                                </Badge>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.upload_container}>
                    <UploadPlaceholder width="100%" height="300px" label="미리보기 이미지 업로드" onClick={onThumbnailUploadClicked} />

                    <CheckBox ref={checkboxRef} label="유튜브 링크로 업로드" onClick={onCheckBoxClicked}></CheckBox>
                    <Input
                        ref={videolinkRef}
                        disabled
                        placeholder="https://www.youtube.com/watch?v= 형식의 링크를 입력해주세요"
                        width="100%"
                        height="50px"
                    ></Input>

                    <Button type="primary-stroke" width="100%" height="50px" onClick={onVideoFileUploadClicked}>
                        영상파일 업로드
                    </Button>

                    <Button type="primary-filled" width="100%" height="50px" onClick={onLectureUploadClicked}>
                        영상 등록하기
                    </Button>
                </div>
            </div>
        </>
    );
}
