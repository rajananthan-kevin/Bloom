"use client";

import React from "react";
import { Pagination } from "@mantine/core";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const PaginationSection = ({ totalPages }: { totalPages: number | null }) => {
  
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const setPageInURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return <Pagination color="#61cbb6" value={currentPage} total={totalPages || 1} onChange={(num) => setPageInURL(num)} radius="lg" />;
};

export default PaginationSection;
