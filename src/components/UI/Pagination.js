import React from "react";
import Classes from "./Pagination.module.css"; // External CSS file for styles

import { ReactComponent as ArowRightIcon } from "../../assets/icons/Icon material-keyboard-arrow-right.svg";
import { ReactComponent as ArowLeftIcon } from "../../assets/icons/Icon material-keyboard-arrow-left.svg";

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const pagesToRender = [];
    const visiblePages = 10; // Maximum number of pages to display

    // Generate all page buttons
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`${Classes["page-btn"]} ${
            i === currentPage ? Classes.active : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    // If total pages are less than or equal to visiblePages, render all pages
    if (totalPages <= visiblePages) {
      return pages;
    }

    // If the current page is near the beginning
    if (currentPage <= visiblePages - 2) {
      pagesToRender.push(
        ...pages.slice(0, visiblePages - 2),
        <span key="dots-end" className={Classes.dots}>
          ...
        </span>,
        pages[totalPages - 1]
      );
    }
    // If the current page is near the end
    else if (currentPage >= totalPages - (visiblePages - 2)) {
      pagesToRender.push(
        pages[0],
        <span key="dots-start" className={Classes.dots}>
          ...
        </span>,
        ...pages.slice(totalPages - (visiblePages - 2))
      );
    }
    // For pages in the middle
    else {
      pagesToRender.push(
        pages[0],
        <span key="dots-start" className={Classes.dots}>
          ...
        </span>,
        ...pages.slice(currentPage - 3, currentPage + 2),
        <span key="dots-end" className={Classes.dots}>
          ...
        </span>,
        pages[totalPages - 1]
      );
    }

    return pagesToRender;
  };
  return (
    <div className={Classes.pagination}>
      <div>{renderPageNumbers()}</div>
      <div>
        <button
          className={Classes["nav-btn"]}
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArowLeftIcon />
        </button>
        <button
          className={Classes["nav-btn"]}
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
