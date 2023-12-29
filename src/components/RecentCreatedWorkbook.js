import { useState } from "react";
import styles from "./RecentCreatedWorkbook.css";

const RecentCreatedWorkbook = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="recent-created-workbook">
      <h3>최근에 만들어진 문제집 목록</h3>
      <div className="carousel">
        {data && data.length > 0 && (
          <div className="workbook">
            <h4>{data[currentIndex].workbookTitle}</h4>
            {/* 여기에 문제집 정보를 보여주는 내용 추가 */}
          </div>
        )}
      </div>
      <button className={styles.캐러셀버튼} onClick={handlePrev}>이전</button>
      <button className={styles.캐러셀버튼} onClick={handleNext}>다음</button>
    </div>
  );
};

export default RecentCreatedWorkbook;
