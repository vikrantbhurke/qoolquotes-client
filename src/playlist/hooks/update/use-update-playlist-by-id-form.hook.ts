import { useUpdatePlaylistById } from "./use-update-playlist-by-id.hook";
import { useForm } from "@mantine/form";
import { useGetPlaylistById } from "../read";
import { useSelector } from "react-redux";
import { playlistUtility } from "@/playlist/playlist.utility";
import { RootState } from "@/global/states/store";

export const useUpdatePlaylistByIdForm = () => {
  const { playlist } = useGetPlaylistById();
  const { updatePlaylistByIdMutation, isPending } = useUpdatePlaylistById();
  const { access } = useSelector((state: RootState) => state.playlist);

  const form = useForm({
    mode: "controlled",
    initialValues: {
      name: playlist.name,
      description: playlist.description,
    },

    validate: {
      name: (value) =>
        value !== playlist.name ? playlistUtility.validateName(value) : null,
      description: (value) =>
        value !== playlist.description
          ? playlistUtility.validateDescription(value)
          : null,
    },
  });

  const handleUpdatePlaylistById = (values: any) => {
    const { name, description } = values;

    updatePlaylistByIdMutation({
      pid: playlist.id,
      name,
      description,
      access,
    });

    form.setInitialValues({
      name: form.isDirty("name") ? name : playlist.name,
      description: form.isDirty("description")
        ? description
        : playlist.description,
    });

    form.reset();
  };

  return { playlist, form, handleUpdatePlaylistById, isPending };
};
