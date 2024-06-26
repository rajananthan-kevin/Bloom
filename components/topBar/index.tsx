"use client";
import React from "react";
import styles from "./topBar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const TopBar = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/recruit`,
      label: "Je recrute !",
      active: pathname === `/recruit`,
    },
    {
      href: `/joboffer`,
      label: "Offre d'emploi",
      active: pathname === `/joboffer`,
    },
    {
      href: `/myoffers`,
      label: "Mes offres",
      active: pathname === `/myoffers`,
    },
    {
      href: `/login`,
      label: "Se connecter",
      active: pathname === `/login`,
    },
  ] as const;

  return (
    <div className={styles.container}>
      <div className={styles.bloomImage}>
        <Image
          src={"/images/bloom.png"}
          alt={"bloom.webp"}
          fill
          sizes={"auto"}
          className={styles.image}
        />
      </div>
      <div className={styles.menu}>
        <Image
          src={"/icons/menu.svg"}
          alt={"menu.svg"}
          fill
          sizes={"auto"}
          className={styles.image}
        />
      </div>
      <ul>
        {routes.map((route) => (
          <li key={route.href}>{route.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopBar;
