import { Group, Text } from "@mantine/core";
import { roundBorderStyle } from "@/global/styles/app.css";
import { twoDefaultBg } from "@/global/styles/renamed.variables";
import { PlaylistQuotesAddRemoveButtonLayout } from "@/playlist-quote/layouts";
import { CustomSkeleton } from "@/global/components/reusables";

export const PlaylistModalListItemLayout = ({ item }: any) => {
  const isPending = item.isPending;

  return (
    <Group
      key={item.id}
      bg={twoDefaultBg}
      className={roundBorderStyle}
      gap="xs"
      p="xs"
      align="center">
      {isPending ? (
        <>
          <CustomSkeleton v="rounded" w={25} />
          <CustomSkeleton h={20} />
        </>
      ) : (
        <>
          <PlaylistQuotesAddRemoveButtonLayout pid={item.id} />
          <Text fz="sm">{item.name}</Text>
        </>
      )}
    </Group>
  );
};
