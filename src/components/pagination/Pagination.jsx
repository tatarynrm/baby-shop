import React, { useState, useEffect } from "react";
const Pagination = ({
  blocksPerPage,
  totalProducts,
  currentPage,
  paginate,
  nextPage,
  prevPage,
}) => {
  const [arrayOfCurrentButtons, setArrayOfCurrentButtons] = useState([]);
  const pageNumberCount = totalProducts / blocksPerPage;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pageNumberCount); i++) {
    pageNumbers.push(i);
  }

  const dots = "...";
  useEffect(() => {
    let tempNumberOfPage = [...pageNumbers];
    if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPage = [1, 2, 3, 4, "...", pageNumbers.length];
    } else if (currentPage === 4) {
      const sliced = pageNumbers.slice(0, 5);
      tempNumberOfPage = [...sliced, "...", pageNumbers.length];
    } else if (currentPage > 4 && currentPage < pageNumbers.length - 2) {
      const sliced1 = pageNumbers.slice(currentPage - 2, currentPage);
      const sliced2 = pageNumbers.slice(currentPage, currentPage + 1);
      tempNumberOfPage = [
        1,
        "...",
        ...sliced1,
        ...sliced2,
        "...",
        pageNumbers.length,
      ];
    } else if (currentPage > pageNumbers.length - 3) {
      const sliced = pageNumbers.slice(pageNumbers.length - 4);
      tempNumberOfPage = [1, "...", ...sliced];
    }
    setArrayOfCurrentButtons(tempNumberOfPage);
  }, [currentPage]);

  useEffect(() => {}, []);
  return (
    <div className="pagination">
      <ul className="pagination__list">
        {
          <button
            disabled={currentPage === 1 ? true : false}
            className="btn-pagination"
            onClick={prevPage}
          >
            Назад
          </button>
        }
        {arrayOfCurrentButtons.map((number) => (
          <li
            className={
              number === currentPage
                ? "list-group-item disabled"
                : "list-group-item"
            }
            disabled
            key={number}
          >
            <a href="#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        {
          <button
            disabled={currentPage === pageNumbers.length ? true : false}
            className="btn-pagination"
            onClick={nextPage}
          >
            Вперед
          </button>
        }
      </ul>
    </div>
  );
};

export default Pagination;
