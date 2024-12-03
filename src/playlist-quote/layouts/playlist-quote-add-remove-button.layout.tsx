import { Checkbox } from "@mantine/core";
import { oneBg, oneTx } from "@/global/styles/app.css";
import { useAddQuoteToPlaylist } from "../hooks/create";
import { useRemoveQuoteFromPlaylist } from "../hooks/delete";
import { useCheckPlaylistQuote } from "../hooks/read";
import { useSelector } from "react-redux";

export const PlaylistQuotesAddRemoveButtonLayout = ({ pid }: any) => {
  const { qid } = useSelector((state: any) => state.quote);
  const { playlistQuote } = useCheckPlaylistQuote({ pid, qid });

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
      styles={{ input: { border: "none" } }}
      color={oneTx}
      iconColor={oneBg}
      checked={playlistQuote?.exists || false}
      onChange={handleChange}
    />
  );
};
