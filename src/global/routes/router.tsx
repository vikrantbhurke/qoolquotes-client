import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AppLayout } from "@/global/components/layouts";
import {
  AboutPage,
  SubscriptionPage,
  VerifyAccountPage,
  VerifyEmailPage,
} from "../components/pages";
import { PlaylistsLayout } from "@/playlist/layouts";
import {
  GetPlaylistsByCreatorIdCustomList,
  GetPlaylistsBySaverIdCustomList,
  GetPlaylistsCustomList,
  SearchPlaylistsCustomList,
} from "@/playlist/lists";
import { AuthorsLayout } from "@/author/layouts";
import {
  GetAuthorsMantineGrid,
  SearchAuthorsMantineGrid,
} from "@/author/grids";
import { TopicsLayout } from "@/topic/layouts";
import { GetTopicsMantineGrid, SearchTopicsMantineGrid } from "@/topic/grids";
import { QuotesLayout } from "@/quote/layouts";
import {
  GetQuotesByAuthorIdMantineGrid,
  GetQuotesByPlaylistIdMantineGrid,
  GetQuotesByTopicIdMantineGrid,
  GetRandomQuotesCustomGrid,
  SearchQuotesMantineGrid,
} from "@/quote/grids";
import { GetQuoteByIdItem, GetTodaysQuoteItem } from "@/quote/items";
import { GetPlaylistByIdItem, UpdatePlaylistByIdItem } from "@/playlist/items";
import {
  GetUserByIdItem,
  SignInUserItem,
  SignUpUserItem,
  UpdateUserByIdItem,
} from "@/user/items";
import { PayPalSubscriptionItem } from "@/subscription/paypal/items";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} path="/" errorElement={<></>}>
      <Route path="feed" element={<GetRandomQuotesCustomGrid />} />
      <Route path="sign-up" element={<SignUpUserItem />} />
      <Route path="sign-in" element={<SignInUserItem />} />
      <Route path="about" element={<AboutPage />} />

      <Route element={<QuotesLayout />} path="quotes" errorElement={<></>}>
        <Route
          path="authorId/:aid"
          element={<GetQuotesByAuthorIdMantineGrid />}
        />
        <Route
          path="topicId/:tid"
          element={<GetQuotesByTopicIdMantineGrid />}
        />
        <Route
          path="playlistId/:pid"
          element={<GetQuotesByPlaylistIdMantineGrid />}
        />
        <Route path="search/:search" element={<SearchQuotesMantineGrid />} />
      </Route>

      <Route path="/" element={<GetTodaysQuoteItem />} />
      <Route path="quotes/:qid" element={<GetQuoteByIdItem />} />

      <Route
        element={<PlaylistsLayout />}
        path="playlists"
        errorElement={<></>}>
        <Route path="" element={<GetPlaylistsCustomList />} />
        <Route
          path="creatorId/:cid"
          element={<GetPlaylistsByCreatorIdCustomList />}
        />
        <Route
          path="saverId/:sid"
          element={<GetPlaylistsBySaverIdCustomList />}
        />
        <Route path="search/:search" element={<SearchPlaylistsCustomList />} />
      </Route>

      <Route path="playlists/:pid" element={<GetPlaylistByIdItem />} />
      <Route path="playlists/:pid/edit" element={<UpdatePlaylistByIdItem />} />

      <Route element={<AuthorsLayout />} path="authors" errorElement={<></>}>
        <Route path="" element={<GetAuthorsMantineGrid />} />
        <Route path="search/:search" element={<SearchAuthorsMantineGrid />} />
      </Route>

      <Route element={<TopicsLayout />} path="topics" errorElement={<></>}>
        <Route path="" element={<GetTopicsMantineGrid />} />
        <Route path="search/:search" element={<SearchTopicsMantineGrid />} />
      </Route>

      <Route path="users/:uid" element={<GetUserByIdItem />} />
      <Route path="users/:uid/edit" element={<UpdateUserByIdItem />} />

      <Route
        path="users/verify-account/:token"
        element={<VerifyAccountPage />}
      />

      <Route path="users/verify-email/:token" element={<VerifyEmailPage />} />

      <Route path="subscription" element={<SubscriptionPage />} />

      <Route path="paypal" element={<PayPalSubscriptionItem />} />

      <Route path="*" element={<></>} />
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
