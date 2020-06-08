/**
 * This file serves as a template of how a bare bones vuex module should look like
 */
import axios from "axios";
import consoleError from "@/helpers/consoleError";

const MODULE_NAME = "Blog";
// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || "";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/**
 * This helper function is required for all VueX Modules
 * to lets us initialize their default state on RESET
 */
function _initialState() {
  return {
    /**
     * Default your default states here
     */
    posts: {},
  };
}

export default {
  namespaced: true, // Required
  MODULE_NAME: MODULE_NAME,

  // ==========================================================
  // State
  // ==========================================================
  state: {
    ..._initialState(),
  },

  // ==========================================================
  // Mutations
  // ==========================================================
  mutations: {
    /**
     * Example mutation
     */
    // someMutation(state, { arg1, arg2, arg3,... }) {
    //   Vue.set(state, "arg1", arg1);
    //   Vue.set(state, "arg2", arg2);
    //   Vue.set(state, "arg3", arg3);
    // }
  },

  // ==========================================================
  // Actions
  // ==========================================================
  actions: {
    /**
     * Example Action
     */
    // eslint-disable-next-line
    async getBlogPosts({ commit }) {
      try {
        const response = await axios.get("/posts");
        console.log("response: ", response);
        const value = {};
        response.data.forEach((post) => {
          value[post.id] = post;
        });
        commit(
          "SET_STATE",
          { module: MODULE_NAME, key: "posts", value },
          { root: true }
        );
        return response;
      } catch (error) {
        consoleError("getBlogPosts", arguments, error);
        throw new Error(error);
      }
    },
  },

  // ==========================================================
  // Getters
  // ==========================================================
  getters: {
    /**
     * This function comes default with all generated VueX Modules
     * This returns the initial states to set the defaults for a module
     */
    initialState() {
      return _initialState();
    },
    getPostById: (state) => (id) => {
      if (Object.keys(state.posts).length) {
        return state.posts[id];
      } else {
        return {};
      }
    },
  },
};
