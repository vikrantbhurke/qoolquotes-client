import { MantineGrid } from "@/global/components/grids";
import { useGetTopics } from "../hooks/read";
import { TopicGridItemLayout } from "../layouts";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { subheaderHeight } from "@/global/styles/global.styles";
import { useSelector } from "react-redux";
import { setPage } from "../topic.slice";

export const GetTopicsGrid = () => {
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

  if (isPending) return <CustomLoader subheaderHeight={subheaderHeight} />;

  if (isError)
    return (
      <CustomError subheaderHeight={subheaderHeight} message={error?.message} />
    );

  if (!topics.content.length)
    return (
      <CustomError
        subheaderHeight={subheaderHeight}
        message="Topics not found."
      />
    );

  return (
    <MantineGrid
      page={page}
      setPage={setPage}
      dataArray={topics.content}
      totalPages={topics.totalPages}
      GridItemLayout={TopicGridItemLayout}
    />
  );
};
