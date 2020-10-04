import { createStore } from 'vuex';
import Api, { ISound } from '@/api';

export default createStore({
  state: {
    sounds: [] as ISound[],
    editMode: false as boolean,
  },
  mutations: {
    setSounds(state, sounds) {
      state.sounds = sounds;
    },
    setEditMode(state, mode) {
      state.editMode = mode;
    },
  },
  actions: {
    async getSounds(store) {
      const sounds = await Api.getSounds();
      store.commit('setSounds', sounds);
    },
    async toggleEditMode(store) {
      store.commit('setEditMode', !store.state.editMode);
    },
  },
  modules: {
  },
});
