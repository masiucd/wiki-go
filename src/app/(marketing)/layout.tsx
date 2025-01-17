import {Flex} from "@radix-ui/themes";
import Link from "next/link";
import type {ReactNode} from "react";

import {ThemeToggle} from "../_components/theme-toggle";
import {H4, Label} from "../_components/typography";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100dvh-15rem)] flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="h-[7.5rem]">
      <div className="mx-auto flex h-full w-app-width items-center justify-between ">
        <Link href="/">
          <H4
            className="opacity-75 transition-transform hover:scale-105 hover:opacity-100 "
            size="5"
          >
            <span className="text-gray-700 dark:text-gray-300">Hash</span>
            <span className="text-gray-800 dark:text-gray-400">Pass</span>
          </H4>
        </Link>
        <Flex asChild align="center" gap="3">
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/about">
                  <Label className="block cursor-pointer text-sm font-semibold opacity-75 transition-transform hover:scale-105 hover:opacity-100">
                    About
                  </Label>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <Label className="block cursor-pointer text-sm font-semibold opacity-75 transition-transform hover:scale-105 hover:opacity-100">
                    Contact
                  </Label>
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </nav>
        </Flex>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="h-[7.5rem] shadow">
      <div className="mx-auto flex h-full w-app-width items-center ">
        <Flex direction="column">
          <Label asChild>
            <small>
              © {new Date().getFullYear()} HashPass. All Rights Reserved.
            </small>
          </Label>
          <Label asChild>
            <small>
              Built with{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next JS
              </a>
            </small>
          </Label>
        </Flex>
      </div>
    </footer>
  );
}
