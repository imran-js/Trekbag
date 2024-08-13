import { create } from "zustand";
import { persist } from "zustand/middleware";
import { InitialItems } from "../lib/constants";

export const useItemStore = create(
  persist((set) => {
    items: InitialItems;
    //Logic
    // handleAddItem
    handleAddItem: () => set((state) => {});
    // handleRemoveItem
    handleRemoveItem: () => set((state) => {});
    // handleToggleCheckItem
    handleToggleCheckItem: () => set((state) => {});
    // handleRemoveAllItems
    handleRemoveAllItems: () => set((state) => {});
    // handleResetToInitial
    handleResetToInitial: () => set((state) => {});
    // handleMarkAllAsComplete
    handleMarkAllAsComplete: () => set((state) => {});
    // completedItems
    completedItems: () => set((state) => {});
    // handleMarkAllAsIncomplete
    handleMarkAllAsIncomplete: () => set((state) => {});
  }),
  { name: "items" }
);
