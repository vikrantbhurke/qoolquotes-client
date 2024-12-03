import { useCreatePlaylist } from "./use-create-playlist.hook";
import { RootState } from "@/global/states/store";
import { useSelector } from "react-redux";
import { useForm } from "@mantine/form";
import { playlistUtility } from "@/playlist/playlist.utility";

export const useCreatePlaylistForm = () => {
  const { createPlaylistMutation, isPending } = useCreatePlaylist();
  const { auth } = useSelector((state: RootState) => state.auth);
  const { access } = useSelector((state: RootState) => state.playlist);
  const { qid } = useSelector((state: RootState) => state.quote);

  const form = useForm({
    mode: "controlled",
    initialValues: {
      name: "",
      description: "",
    },

    validate: {
      name: playlistUtility.validateName,
      description: playlistUtility.validateDescription,
    },
  });

  const handleCreatePlaylist = (values: any) => {
    const { name, description } = values;

    createPlaylistMutation({
      name,
      description,
      creatorId: auth.id,
      quoteId: qid,
      access,
    });

    form.reset();
  };

  return { form, handleCreatePlaylist, isPending };
};
