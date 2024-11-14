import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "@/global/components/layouts";
import {
  AboutPage,
  AuthorsPage,
  FeedPage,
  PlaylistPage,
  PlaylistsPage,
  QuotePage,
  QuotesPage,
  SignInPage,
  SignUpPage,
  TopicsPage,
  UserPage,
  VerifyAccountPage,
  VerifyEmailPage,
} from "@/global/components/pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/" errorElement={<></>}>
      <Route path="/" element={<FeedPage />} />

      <Route path="about" element={<AboutPage />} />

      <Route path="users/sign-up" element={<SignUpPage />} />

      <Route path="sign-in" element={<SignInPage />} />

      <Route path="users/:uid" element={<UserPage />} />

      <Route path="quotes" element={<QuotesPage />} />

      <Route path="quotes/:qid" element={<QuotePage />} />

      <Route path="topics" element={<TopicsPage />} />

      <Route path="authors" element={<AuthorsPage />} />

      <Route path="playlists" element={<PlaylistsPage />} />

      <Route path="playlists/:pid" element={<PlaylistPage />} />

      <Route
        path="users/verify-account/:token"
        element={<VerifyAccountPage />}
      />

      <Route path="users/verify-email/:token" element={<VerifyEmailPage />} />
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
