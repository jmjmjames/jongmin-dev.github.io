import { Link } from "gatsby";
import React from "react";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
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
      <h1>Home Page</h1>
    </main>
  );
};

export default IndexPage;
