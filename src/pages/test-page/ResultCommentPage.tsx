import styles from "./ResultCommentPage.module.scss";
import questionStyles from "./QuestionPage.module.scss";
import { CommentaryQuestion } from "../../components/test-page/Question";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { questions } from "../../constants/Questions";

export default function ResultCommentPage() {
    const { wrongAnswer } = useSelector((state: RootState) => state.UserQuestion);

    return (
        <div className={styles.result_comment_page}>
            <div className={questionStyles.title}>
                <h1>금융역량테스트 해설</h1>
                <p>금융역량테스트 해설페이지 입니다 (무슨글 넣지)</p>
            </div>

            {wrongAnswer.map((element) => {
                return (
                    <CommentaryQuestion
                        type="incorrect"
                        answer={questions[element - 1].answer}
                        commentary={questions[element - 1].comment}
                        index={element}
                        question="Sample Question"
                    />
                );
            })}
        </div>
    );
}
