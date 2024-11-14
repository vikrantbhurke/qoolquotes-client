import { normalPseudo } from "@/global/styles/app.css";
import { getGridBorder } from "@/global/styles/global.styles";
import { Grid, Pagination } from "@mantine/core";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { useSearchParams } from "react-router-dom";

export const MantineGrid = ({ dataArray, totalPages, GridItem }: any) => {
  const { width } = useViewportSize();
  const [, scrollTo] = useWindowScroll();
  let [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));

  const handlePage = (page: number) => {
    setSearchParams({ page: `${page}` });
    scrollTo({ y: 0 });
  };

  return (
    <Grid grow justify="center" gutter={0}>
      {dataArray.map((item: any, index: number) => {
        return (
          <Grid.Col
            span={{ base: 12, sm: 6 }}
            key={index}
            className={normalPseudo}
            style={{ ...getGridBorder(width, index) }}>
            <GridItem item={item} />
          </Grid.Col>
        );
      })}

      <Pagination
        size="sm"
        m="lg"
        gap="xs"
        radius="sm"
        siblings={1}
        value={page}
        onChange={handlePage}
        total={totalPages}
      />
    </Grid>
  );
};
