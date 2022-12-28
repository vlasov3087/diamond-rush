import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useEventListener } from "../../hooks/useEventListener";

const Header: React.FC = () => {
  const [navShadow, setShadow] = useState<"navShadow" | "">("");
  const handleScroll = (): void => {
    const windowTop: number = window.scrollY;
    windowTop > 90 ? setShadow("navShadow") : setShadow("");
  };
  useEventListener(undefined, "scroll", handleScroll);

  return (
    <header>
      <div className={`${navShadow} wrapper`}>
        <nav>
          <Link href="/" prefetch={false}>
            <img
              className="logo-image"
              src="/images/logo.svg"
              alt="logo"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </Link>
          <ul className="nav-items">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#video">VIDEO</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#gameplay">GAMEPLAY</a>
            </li>
            <li>
              <a href="#about">NFT</a>
            </li>
            <li>
              <a href="#roadmap">ROADMAP</a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
