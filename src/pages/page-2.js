import * as React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div>
      <h1>This is Page 2 </h1>
      <Link style={{ fontSize: 20, textDecoration: "none" }} to="/">
        Go Home
      </Link>
    </div>
  );
}
