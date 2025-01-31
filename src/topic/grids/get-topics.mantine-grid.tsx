import { MantineGrid } from "@/global/components/grids";
import { useGetTopics } from "../hooks/read";
import { TopicGridItemLayout } from "../layouts";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { useSelector } from "react-redux";
import { setPage } from "../topic.slice";
import { oneBg } from "@/global/styles/app.css";
import { SeoComponent } from "@/global/components/reusables";
import { PaginationPlaceholder } from "@/global/components/placeholders";

export const GetTopicsMantineGrid = () => {
  const { topics, isPending, isError, error } = useGetTopics();
  const { page } = useSelector((state: any) => state.topic);
  const setData = useOutletContext<any>();

  useEffect(() => {
    setData((data: any) => ({
      ...data,
      page: topics?.page + 1 || 0,
      totalPages: topics?.totalPages || 0,
      totalElements: topics?.totalElements || 0,
    }));
  }, [topics, setData]);

  if (isPending)
    return (
      <>
        <CustomLoader />
        <PaginationPlaceholder />
      </>
    );

  if (isError)
    return (
      <>
        <CustomError message={error?.message} />
        <PaginationPlaceholder />
      </>
    );

  if (!topics.content.length)
    return (
      <>
        <CustomError message="Topics not found." />
        <PaginationPlaceholder />
      </>
    );

  return (
    <>
      <SeoComponent
        title={`Topics Page ${page}`}
        description={`Browse quotes on page ${page} and find inspiration.`}
      />
      <MantineGrid
        p={4}
        page={page}
        gridBg={oneBg}
        setPage={setPage}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        dataArray={topics.content}
        totalPages={topics.totalPages}
        GridItemLayout={TopicGridItemLayout}
      />
    </>
  );
};
