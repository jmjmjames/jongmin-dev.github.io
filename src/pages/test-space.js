import { Link } from "gatsby";
import React from "react";

// markup
const TestSpacePage = () => {
  return (
    <main>
      <title>테스트 스페이스</title>
      <div style={{ display: "flex" }}>
        <Link to="/">로고</Link>
        <div style={{ flexGrow: 1 }}></div>
        <Link to="/test" style={{ padding: 10 }}>
          테스트
        </Link>
        <Link to="/test-space" style={{ padding: 10 }}>
          테스트 스페이스
        </Link>
      </div>
      <h1>테스트 스페이스 페이지 입니다.</h1>
    </main>
  );
};

export default TestSpacePage;
