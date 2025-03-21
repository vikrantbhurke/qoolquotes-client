import { useSearchTopics } from "../hooks/read";
import { CustomError } from "@/global/components/errors";
import { MantineGrid } from "@/global/components/grids";
import { TopicGridItemLayout } from "../layouts";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setPage } from "../topic.slice";
import { oneDefaultBg } from "@/global/styles/renamed.variables";
import { PaginationPlaceholder } from "@/global/components/placeholders";
import { RootState } from "@/global/states/store";

export const SearchTopicsMantineGrid = () => {
  const { topics, isPending, isError, error } = useSearchTopics();
  const { page } = useSelector((state: RootState) => state.topic);
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
      <MantineGrid
        p={4}
        page={page}
        gridBg={oneDefaultBg}
        setPage={setPage}
        dataArray={Array(42).fill({ isPending })}
        totalPages={1}
        GridItemLayout={TopicGridItemLayout}
      />
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
    <MantineGrid
      p={4}
      page={page}
      gridBg={oneDefaultBg}
      setPage={setPage}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      dataArray={topics.content}
      totalPages={topics.totalPages}
      GridItemLayout={TopicGridItemLayout}
    />
  );
};
