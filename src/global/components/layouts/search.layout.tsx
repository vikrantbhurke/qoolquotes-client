import { RootState } from "@/global/states/store";
import { setIsSearchbarVisible, setSearch } from "@/global/states/view.slice";
import { setPage as setQuotePage } from "@/quote/quote.slice";
import { setPage as setTopicPage } from "@/topic/topic.slice";
import { setPage as setAuthorPage } from "@/author/author.slice";
import { setPage as setPlaylistPage, setTab } from "@/playlist/playlist.slice";
import { ActionIcon, Group, TextInput } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getSearchTextInput } from "@/global/styles/global.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { inputStyles, oneBg } from "@/global/styles/app.css";
import { I } from "../components";

export const SearchLayout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { width } = useViewportSize();
  const inputRef = useRef<any>(null);
  const { search, isMobile } = useSelector((state: RootState) => state.view);

  const { sort: authorSort, order: authorOrder } = useSelector(
    (state: RootState) => state.author
  );

  const { sort: topicSort, order: topicOrder } = useSelector(
    (state: RootState) => state.topic
  );

  let placeholder = "Search Quotes";
  if (location.pathname.includes("topics")) placeholder = "Search Topics";
  if (location.pathname.includes("authors")) placeholder = "Search Authors";
  if (location.pathname.includes("playlists")) placeholder = "Search Playlists";

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (search) {
      if (location.pathname.includes("topics")) {
        dispatch(setTopicPage(1));
        navigate(`/topics/search/${search}?page=1`);
      } else if (location.pathname.includes("authors")) {
        dispatch(setAuthorPage(1));
        navigate(`/authors/search/${search}?page=1`);
      } else if (location.pathname.includes("playlists")) {
        dispatch(setPlaylistPage(1));
        navigate(`/playlists/search/${search}?page=1`);
      } else {
        dispatch(setQuotePage(1));
        navigate(`/quotes/search/${search}?page=1`, {
          state: { name: search },
        });
      }
    }
  }, [search]);

  const handleClearSearch = (event: any) => {
    event.preventDefault();
    dispatch(setSearch(""));

    if (location.pathname.includes("topics")) {
      dispatch(setTopicPage(1));
      navigate(`/topics?page=1&sort=${topicSort}&order=${topicOrder}`);
    }

    if (location.pathname.includes("authors")) {
      dispatch(setAuthorPage(1));
      navigate(`/authors?page=1&sort=${authorSort}&order=${authorOrder}`);
    }

    if (location.pathname.includes("playlists")) {
      dispatch(setPlaylistPage(1));
      navigate(`/playlists?page=1`);
      dispatch(setTab("All"));
    }
    if (location.pathname.includes("quotes")) {
      dispatch(setQuotePage(1));
      navigate(`/`);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setSearch(event.target.value));
  };

  const handleBlur = () => {
    dispatch(setIsSearchbarVisible(false));
  };

  return (
    <Group justify="center" p={isMobile ? 0 : "xs"} align="center" h="100%">
      <TextInput
        bg={oneBg}
        value={search}
        ref={inputRef}
        classNames={{ input: inputStyles }}
        styles={getSearchTextInput(isMobile, width)}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        rightSection={
          <>
            {search && (
              <ActionIcon size="xs" onMouseDown={handleClearSearch}>
                <I I={IconX} />
              </ActionIcon>
            )}
          </>
        }
      />
    </Group>
  );
};
