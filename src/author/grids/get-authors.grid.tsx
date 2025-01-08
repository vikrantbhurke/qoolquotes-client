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
import { SeoComponent } from "@/global/components/components";

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
    <>
      <SeoComponent
        title={`Authors - Page ${page} | QoolQuotes`}
        description={`Browse quotes on page ${page} and find inspiration.`}
      />
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
    </>
  );
};
