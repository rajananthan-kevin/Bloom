"use client";

import React from "react";
import { Pagination } from "@mantine/core";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const PaginationSection = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return <Pagination value={currentPage} total={totalPages} onChange={(num) => createPageURL(num)} />;
};

export default PaginationSection;
