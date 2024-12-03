import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "@/global/components/layouts";
import {
  AboutPage,
  VerifyAccountPage,
  VerifyEmailPage,
} from "../components/pages";
import { PlaylistsLayout } from "@/playlist/layouts";
import {
  GetPlaylistsByCreatorIdList,
  GetPlaylistsBySaverIdList,
  GetPlaylistsList,
  SearchPlaylistsList,
} from "@/playlist/lists";
import { AuthorsLayout } from "@/author/layouts";
import { GetAuthorsGrid, SearchAuthorsGrid } from "@/author/grids";
import { TopicsLayout } from "@/topic/layouts";
import { GetTopicsGrid, SearchTopicsGrid } from "@/topic/grids";
import { QuotesLayout } from "@/quote/layouts";
import {
  GetQuotesByAuthorIdGrid,
  GetQuotesByPlaylistIdGrid,
  GetQuotesByTopicIdGrid,
  GetRandomQuotesGrid,
  SearchQuotesGrid,
} from "@/quote/grids";
import { GetQuoteByIdItem } from "@/quote/items";
import { GetPlaylistByIdItem, UpdatePlaylistByIdItem } from "@/playlist/items";
import {
  GetUserByIdItem,
  SignInUserItem,
  SignUpUserItem,
  UpdateUserByIdItem,
} from "@/user/items";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/" errorElement={<></>}>
      <Route path="/" element={<GetRandomQuotesGrid />} />
      <Route path="sign-up" element={<SignUpUserItem />} />
      <Route path="sign-in" element={<SignInUserItem />} />
      <Route path="about" element={<AboutPage />} />

      <Route element={<QuotesLayout />} path="quotes" errorElement={<></>}>
        <Route path="authorId/:aid" element={<GetQuotesByAuthorIdGrid />} />
        <Route path="topicId/:tid" element={<GetQuotesByTopicIdGrid />} />
        <Route path="playlistId/:pid" element={<GetQuotesByPlaylistIdGrid />} />
        <Route path="search/:search" element={<SearchQuotesGrid />} />
      </Route>

      <Route path="quotes/:qid" element={<GetQuoteByIdItem />} />

      <Route
        element={<PlaylistsLayout />}
        path="playlists"
        errorElement={<></>}>
        <Route path="" element={<GetPlaylistsList />} />
        <Route
          path="creatorId/:cid"
          element={<GetPlaylistsByCreatorIdList />}
        />
        <Route path="saverId/:sid" element={<GetPlaylistsBySaverIdList />} />
        <Route path="search/:search" element={<SearchPlaylistsList />} />
      </Route>

      <Route path="playlists/:pid" element={<GetPlaylistByIdItem />} />
      <Route path="playlists/:pid/edit" element={<UpdatePlaylistByIdItem />} />

      <Route element={<AuthorsLayout />} path="authors" errorElement={<></>}>
        <Route path="" element={<GetAuthorsGrid />} />
        <Route path="search/:search" element={<SearchAuthorsGrid />} />
      </Route>

      <Route element={<TopicsLayout />} path="topics" errorElement={<></>}>
        <Route path="" element={<GetTopicsGrid />} />
        <Route path="search/:search" element={<SearchTopicsGrid />} />
      </Route>

      <Route path="users/:uid" element={<GetUserByIdItem />} />
      <Route path="users/:uid/edit" element={<UpdateUserByIdItem />} />
      <Route
        path="users/verify-account/:token"
        element={<VerifyAccountPage />}
      />
      <Route path="users/verify-email/:token" element={<VerifyEmailPage />} />
      <Route path="*" element={<></>} />
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
