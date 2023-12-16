import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/art-pieces">Pieces</Link>
        </li>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
