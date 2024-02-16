import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
  access_token?: string;
  refresh_token?: string;
  email: string;
}

interface State {
  user: User;
  login: (user: User) => void;
  logout: () => void;
}

export const useUserState = create<State>()(
  devtools(
    persist(
      (set) => ({
        user: {
          email: "",
          access_token: "",
          refresh_token: "",
        },
        login: (user) => {
          set(() => ({ user }));
        },
        logout: () => {
          set(() => ({
            user: {
              email: "",
              access_token: "",
              refresh_token: "",
            },
          }));
        },
      }),
      {
        name: "user-storage",
      }
    )
  )
);
