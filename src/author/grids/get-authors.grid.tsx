import { MantineGrid } from "@/global/components/grids";
import { useGetAuthors } from "../hooks/read";
import { AuthorGridItemLayout } from "../layouts";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { useSelector } from "react-redux";
import { setPage } from "../author.slice";
import { oneBg } from "@/global/styles/app.css";

export const GetAuthorsGrid = () => {
  const { authors, isPending, isError, error } = useGetAuthors();
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
