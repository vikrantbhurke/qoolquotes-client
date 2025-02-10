import { Checkbox, useMantineColorScheme } from "@mantine/core";
import { useAddQuoteToPlaylist } from "../hooks/create";
import { useRemoveQuoteFromPlaylist } from "../hooks/delete";
import { useCheckPlaylistQuote } from "../hooks/read";
import { useSelector } from "react-redux";
import { getDropdownStyles } from "@/global/styles/global.styles";
import { HCBorder, oneDefaultTx } from "@/global/styles/renamed.variables";
import { RootState } from "@/global/states/store";

export const PlaylistQuotesAddRemoveButtonLayout = ({ pid }: any) => {
  const { qid } = useSelector((state: RootState) => state.quote);
  const { playlistQuote } = useCheckPlaylistQuote({ pid, qid });
  const { colorScheme } = useMantineColorScheme();
  const { dropdownBg } = getDropdownStyles(colorScheme);

  const { addQuoteToPlaylistMutation, isPending: isAddingPending } =
    useAddQuoteToPlaylist();

  const { removeQuoteFromPlaylistMutation, isPending: isRemovingPending } =
    useRemoveQuoteFromPlaylist();

  const handleChange = (event: any) => {
    if (event.currentTarget.checked) {
      addQuoteToPlaylistMutation({
        pid,
        qid,
      });
    } else {
      removeQuoteFromPlaylistMutation({
        pid,
        qid,
      });
    }
  };

  return (
    <Checkbox
      disabled={isAddingPending || isRemovingPending}
      styles={{
        input: { border: HCBorder, backgroundColor: dropdownBg },
      }}
      iconColor={oneDefaultTx}
      checked={playlistQuote?.exists || false}
      onChange={handleChange}
    />
  );
};
