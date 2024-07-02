import { create } from 'zustand';

export interface ToastType {
  isOpened: boolean;
  message: string;
}

export interface ToastStoreState {
  toast: ToastType;
  setToast: (message: ToastType['message']) => void;
}

export const useToastStore = create<ToastStoreState>()((set) => ({
  toast: { isOpened: false, message: '' },
  setToast: (message) => {
    set(() => ({ toast: { isOpened: true, message: message } }));
    setTimeout(
      () => set(() => ({ toast: { isOpened: false, message: '' } })),
      2000
    );
  },
}));
