"use client";
import React, { useRef } from "react";
import styles from "./searchBar.module.css";
import { Button, Input } from "@mantine/core";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const jobRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = 1;

  const updateSearchParams = (params: URLSearchParams, key: string, value: string) => {
    if (value === "") {
        params.delete(key);
    } else {
        params.set(key, value);
    }
};

  const setSearchAndPageInURL = (jobValue: string, locationValue: string) => {
    const params = new URLSearchParams(searchParams);

    updateSearchParams(params, "job", jobValue);
    updateSearchParams(params, "location", locationValue);

    params.set("page", currentPage.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearch = () => {
    if (jobRef.current && locationRef.current) {
      const jobValue = jobRef.current.value;
      const locationValue = locationRef.current.value;
      setSearchAndPageInURL(jobValue, locationValue);
      console.log("Job:", jobValue);
      console.log("Location:", locationValue);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <Input
          ref={jobRef}
          defaultValue={searchParams.get("job") ?? ""}
          size="lg"
          radius="lg"
          placeholder="Quel métier recherchez vous"
        />
        <Input ref={locationRef} defaultValue={searchParams.get("location") ?? ""} size="lg" radius="lg" placeholder="Location" />
      </div>
      <Button
        onClick={handleSearch}
        variant="filled"
        color="teal"
        size="lg"
        radius="xl"
      >
        Rechercher
      </Button>
    </div>
  );
};

export default SearchBar;
