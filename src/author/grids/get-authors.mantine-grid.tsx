import { MantineGrid } from "@/global/components/grids";
import { useGetAuthors } from "../hooks/read";
import { AuthorGridItemLayout } from "../layouts";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { CustomError } from "@/global/components/errors";
import { useSelector } from "react-redux";
import { setPage } from "../author.slice";
import { oneBg } from "@/global/styles/renamed.variables";
import { SeoComponent } from "@/global/components/reusables";
import { PaginationPlaceholder } from "@/global/components/placeholders";
import { RootState } from "@/global/states/store";

export const GetAuthorsMantineGrid = () => {
  const { authors, isPending, isError, error } = useGetAuthors();
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
    <>
      <SeoComponent
        title={`Authors Page ${page}`}
        description={`Browse quotes on page ${page} and find inspiration.`}
      />
      <MantineGrid
        p={4}
        page={page}
        gridBg={oneBg}
        setPage={setPage}
        dataArray={authors.content}
        totalPages={authors.totalPages}
        GridItemLayout={AuthorGridItemLayout}
      />
    </>
  );
};
