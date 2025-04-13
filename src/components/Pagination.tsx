import ReactPaginate from "react-paginate";

type PaginationProps = {
  onChangePage: any;
  currentPage: number;
};

const Pagination = ({ onChangePage, currentPage }: PaginationProps) => {
  return (
    <ReactPaginate
      className="flex justify-center items-center space-x-2 mt-10" // Стили для контейнера пагинации
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      pageRangeDisplayed={8}
      onPageChange={(event) => onChangePage(event.selected + 1)}
      forcePage={currentPage - 1}
      pageCount={3}
      pageClassName="flex items-center justify-center cursor-pointer"
      pageLinkClassName="px-4 py-2 border border-gray-300 rounded-full hover:bg-orange-400 hover:text-white transition-colors"
      activeLinkClassName="bg-orange-500 text-white"
      previousClassName="flex items-center justify-center cursor-pointer"
      previousLinkClassName="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors"
      nextClassName="flex items-center justify-center cursor-pointer"
      nextLinkClassName="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors"
      breakClassName="flex items-center justify-center"
      breakLinkClassName="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors"
    />
  );
};

export default Pagination;
