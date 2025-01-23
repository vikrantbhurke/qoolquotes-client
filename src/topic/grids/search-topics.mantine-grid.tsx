import { useSearchTopics } from "../hooks/read";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { MantineGrid } from "@/global/components/grids";
import { TopicGridItemLayout } from "../layouts";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setPage } from "../topic.slice";
import { oneBg } from "@/global/styles/app.css";

export const SearchTopicsMantineGrid = () => {
  const { topics, isPending, isError, error } = useSearchTopics();
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

  if (isPending) return <CustomLoader />;

  if (isError) return <CustomError message={error?.message} />;

  if (!topics.content.length)
    return <CustomError message="Topics not found." />;

  return (
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
  );
};
