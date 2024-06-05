import Image from "next/image";

import styles from './style.module.css';
import Button from "../Button/style";
import Link from "next/link";
import React from 'react';
import Header from "./style";

export default function PreHeader() {
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>
        <Image width={100} height={100} src="/svg/logo.svg" alt="logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#quemsomos">Quem Somos</a></li>
          <li><a href="#educativo">Educativo</a></li>
          <li><a href="#divertido">Divertido</a></li>
          <li><a href="#assine">Comece Agora</a></li>
          <li>
            <Link href="Sign">
              <Button color="white" bgColor="purple" size="large">
                Vamos começar?
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
