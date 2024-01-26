import styles from "./ResultCommentPage.module.scss";
import questionStyles from "./QuestionPage.module.scss";
import { CommentaryQuestion } from "../../components/test-page/Question";

export default function ResultCommentPage() {
    return (
        <div className={styles.result_comment_page}>
            <div className={questionStyles.title}>
                <h1>금융역량테스트 해설</h1>
                <p>금융역량테스트 해설페이지 입니다 (무슨글 넣지)</p>
            </div>

            <CommentaryQuestion type="incorrect" commentary="12314" index={1} question="Sample Question"></CommentaryQuestion>
        </div>
    );
}
