import { Checkbox, useMantineColorScheme } from "@mantine/core";
import { useAddQuoteToPlaylist } from "../hooks/create";
import { useRemoveQuoteFromPlaylist } from "../hooks/delete";
import { useCheckPlaylistQuote } from "../hooks/read";
import { useSelector } from "react-redux";
import { getDropdownStyles } from "@/global/styles/global.styles";
import { HCBorder, oneTx } from "@/global/styles/app.css";

export const PlaylistQuotesAddRemoveButtonLayout = ({ pid }: any) => {
  const { qid } = useSelector((state: any) => state.quote);
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
      iconColor={oneTx}
      checked={playlistQuote?.exists || false}
      onChange={handleChange}
    />
  );
};
