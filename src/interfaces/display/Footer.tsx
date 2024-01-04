import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer>
            <ul className={styles.links}>
                <li>
                    <Link to="/about">스토코디 소개</Link>
                </li>
                <li>
                    <Link to="/about/privacy">개인정보 취급방침</Link>
                </li>
                <li>
                    <Link to="/about/terms">사용자 이용약관</Link>
                </li>
                <li>
                    <Link to="/about/qna">자주 묻는 질문</Link>
                </li>
            </ul>

            <ul className={styles.info}>
                <li>(주)스토코디</li>
                <li>대표 | 김재홍 </li>
                <li>개인정보보호책임자 | 김재홍 </li>
                <li>대표 번호 | 010-****-**** </li>
                <li>사업자번호 | ***-**-****</li>
                <li>주식경영업 | 제****-서울**-****호 </li>
                <li>주소 | 대구광역시 북구 경대로 100 스타트업빌리지 10호실 </li>
            </ul>

            <div className={styles.sns}>
                <img src="/icons/social/icon-facebook.svg" alt="facebook icon" />
                <img src="/icons/social/icon-twitter.svg" alt="twitter icon" />
                <img src="/icons/social/icon-instagram.svg" alt="instagram icon" />
            </div>
        </footer>
    );
};
