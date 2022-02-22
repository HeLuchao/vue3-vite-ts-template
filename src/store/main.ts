import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useMainStore = defineStore({
  id: 'mian',
  state: () => ({
    name: 'admin'
  })
});
