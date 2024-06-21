import { LoginResponse } from '@/api/user/loginPostFetch';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserStoreState extends Partial<LoginResponse> {}

export interface UserStoreAction {
  setAccessToken: (token: PropType<LoginResponse, 'token'>) => void;
  setUserInfo: (user: PropType<LoginResponse, 'user'>) => void;
  removeUserInfo: () => void;
}

export const useUserStore = create<UserStoreState & UserStoreAction>()(
  persist(
    (set) => ({
      token: '',

      setAccessToken: (token) =>
        set({
          token,
        }),

      setUserInfo: (user) =>
        set({
          user,
        }),

      removeUserInfo: () =>
        set(
          ({ setAccessToken, setUserInfo, removeUserInfo }) => ({
            setAccessToken,
            setUserInfo,
            removeUserInfo,
          }),
          true
        ),
    }),
    {
      name: 'auth',
    }
  )
);
