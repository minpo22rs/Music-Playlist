import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Actions = {
  setIsOpen: (isOpen: boolean) => void;
};
export const useApp = create<State & Actions>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),
}));
