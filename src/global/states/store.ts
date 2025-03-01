import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./view.slice";
import authReducer from "@/user/auth.slice";
import userReducer from "@/user/user.slice";
import topicReducer from "@/topic/topic.slice";
import authorReducer from "@/author/author.slice";
import quoteReducer from "@/quote/quote.slice";
import messageReducer from "@/message/message.slice";
import playlistReducer from "@/playlist/playlist.slice";
import subscriptionReducer from "@/subscription/subscription.slice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
    auth: authReducer,
    user: userReducer,
    topic: topicReducer,
    author: authorReducer,
    quote: quoteReducer,
    message: messageReducer,
    playlist: playlistReducer,
    subscription: subscriptionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
