import { MantineGrid } from "@/global/components/grids";
import { useSearchAuthors } from "../hooks/read";
import { AuthorGridItemLayout } from "../layouts";
import { CustomError } from "@/global/components/errors";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setPage } from "../author.slice";
import { oneBg } from "@/global/styles/renamed.variables";
import { PaginationPlaceholder } from "@/global/components/placeholders";
import { RootState } from "@/global/states/store";

export const SearchAuthorsMantineGrid = () => {
  const { authors, isPending, isError, error } = useSearchAuthors();
  const { page } = useSelector((state: RootState) => state.author);
  const setData = useOutletContext<any>();

  useEffect(() => {
    setData((data: any) => ({
      ...data,
      page: authors?.page + 1 || 0,
      totalPages: authors?.totalPages || 0,
      totalElements: authors?.totalElements || 0,
    }));
  }, [authors, setData]);

  if (isPending)
    return (
      <MantineGrid
        p={4}
        page={page}
        gridBg={oneBg}
        setPage={setPage}
        dataArray={Array(42).fill({ isPending })}
        totalPages={1}
        GridItemLayout={AuthorGridItemLayout}
      />
    );

  if (isError)
    return (
      <>
        <CustomError message={error?.message} />
        <PaginationPlaceholder />
      </>
    );

  if (!authors.content.length)
    return (
      <>
        <CustomError message="Authors not found." />
        <PaginationPlaceholder />
      </>
    );

  return (
    <MantineGrid
      p={4}
      page={page}
      gridBg={oneBg}
      setPage={setPage}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      dataArray={authors.content}
      totalPages={authors.totalPages}
      GridItemLayout={AuthorGridItemLayout}
    />
  );
};
