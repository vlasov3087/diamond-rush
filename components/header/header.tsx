import React, { useState, FC } from "react";
import Link from "next/link";
import { useEventListener } from "../../hooks/useEventListener";

const Header: FC<{ setActivePage: (num: number) => void }> = ({
  setActivePage,
}) => {
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
                setActivePage(0);
              }}
            />
          </Link>
          <ul className="nav-items">
            <li>
              <a
                href="#home"
                onClick={() => {
                  setActivePage(0);
                }}
              >
                HOME
              </a>
            </li>
            <li
              onClick={() => {
                setActivePage(1);
              }}
            >
              <a href="#video">VIDEO</a>
            </li>
            <li
              onClick={() => {
                setActivePage(2);
              }}
            >
              <a href="#about">ABOUT</a>
            </li>
            <li
              onClick={() => {
                setActivePage(3);
              }}
            >
              <a href="#gameplay">GAMEPLAY</a>
            </li>
            <li
              onClick={() => {
                setActivePage(4);
              }}
            >
              <a href="#about">NFT</a>
            </li>
            <li>
              <a
                href="#roadmap"
                onClick={() => {
                  setActivePage(4);
                }}
              >
                ROADMAP
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
