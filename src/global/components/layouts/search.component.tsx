import { RootState } from "@/global/states/store";
import { setIsSearchbarVisible } from "@/global/states/view.slice";
import { ActionIcon, Group, TextInput } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getSearchTextInput } from "@/global/styles/global.styles";

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { width } = useViewportSize();
  const { headerHeight, navbarAsideWidth } = useSelector(
    (state: RootState) => state.view
  );
  const inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClearSearch = (event: any) => {
    event.preventDefault();
    setSearch("");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(event.target.value);
  };

  const handleBlur = () => {
    dispatch(setIsSearchbarVisible(false));
  };

  return (
    <Group justify="center">
      <TextInput
        value={search}
        ref={inputRef}
        styles={getSearchTextInput(width, headerHeight, navbarAsideWidth)}
        placeholder="Search..."
        onChange={handleChange}
        onBlur={handleBlur}
        rightSection={
          <>
            {search && (
              <ActionIcon size="xs" onMouseDown={handleClearSearch}>
                <IconX />
              </ActionIcon>
            )}
          </>
        }
      />
    </Group>
  );
};
