import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UsePostStoreState {
  postImages?: FileList | null;
  postBody: string;
}

export interface UserPostStoreAction {
  setPostImages?: (
    postImages: PropType<UsePostStoreState, 'postImages'>
  ) => void;
  setPostBody: (postBody: PropType<UsePostStoreState, 'postBody'>) => void;
}

export const usePostStore = create<UsePostStoreState & UserPostStoreAction>()(
  persist(
    (set) => ({
      postBody: '',

      setPostBody: (postBody) =>
        set({
          postBody,
        }),
    }),
    {
      name: 'post',
    }
  )
);
