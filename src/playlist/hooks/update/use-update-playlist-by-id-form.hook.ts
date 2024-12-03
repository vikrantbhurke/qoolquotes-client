import { useUpdatePlaylistById } from "./use-update-playlist-by-id.hook";
import { useForm } from "@mantine/form";
import { useGetPlaylistById } from "../read";
import { useSelector } from "react-redux";
import { playlistUtility } from "@/playlist/playlist.utility";

export const useUpdatePlaylistByIdForm = () => {
  const { playlist } = useGetPlaylistById();
  const { updatePlaylistByIdMutation, isPending } = useUpdatePlaylistById();
  const { access } = useSelector((state: any) => state.playlist);

  const form = useForm({
    mode: "controlled",
    initialValues: {
      name: playlist.name,
      description: playlist.description,
    },

    validate: {
      name: (value) =>
        value !== playlist.firstname
          ? playlistUtility.validateName(value)
          : null,
      description: (value) =>
        value !== playlist.lastname
          ? playlistUtility.validateDescription(value)
          : null,
    },
  });

  const handleUpdatePlaylistById = (values: any) => {
    const { name, description } = values;

    updatePlaylistByIdMutation({
      pid: playlist.id,
      updatePlaylistDTO: {
        name: name ? name : playlist.name,
        description: description,
        access,
      },
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
