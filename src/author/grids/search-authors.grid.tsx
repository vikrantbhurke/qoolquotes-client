import { MantineGrid } from "@/global/components/grids";
import { useSearchAuthors } from "../hooks/read";
import { AuthorGridItemLayout } from "../layouts";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setPage } from "../author.slice";

export const SearchAuthorsGrid = () => {
  const { authors, isPending, isError, error } = useSearchAuthors();
  const { page } = useSelector((state: any) => state.author);
  const setData = useOutletContext<any>();

  useEffect(() => {
    setData((data: any) => ({
      ...data,
      page: authors?.page + 1 || 0,
      totalPages: authors?.totalPages || 0,
      totalElements: authors?.totalElements || 0,
    }));
  }, [authors, setData]);

  if (isPending) return <CustomLoader />;

  if (isError) return <CustomError message={error?.message} />;

  if (!authors.content.length)
    return <CustomError message="Authors not found." />;

  return (
    <MantineGrid
      p={4}
      page={page}
      setPage={setPage}
      dataArray={authors.content}
      totalPages={authors.totalPages}
      GridItemLayout={AuthorGridItemLayout}
    />
  );
};
