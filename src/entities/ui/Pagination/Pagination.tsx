import './pagination.scss';

interface IProps {
  pageId?: number;
  page?: number;
  handlePage?: (a: number) => void;
  pageCount?: number;
}

const PaginationItem = ({ pageId = 1, handlePage }: IProps) => {
  return (
    <button
      className="pagination-item"
      onClick={() => {
        if (handlePage) handlePage(pageId);
      }}
    >
      {pageId}
    </button>
  );
};

const Pagination = ({ pageCount = 1, handlePage, page }: IProps) => {
  return (
    <div className="pagination">
      {pageCount &&
        [...Array(pageCount)].map((_, i) => {
          return (
            <PaginationItem pageId={i + 1} key={i} handlePage={handlePage} />
          );
        })}
    </div>
  );
};

export default Pagination;
