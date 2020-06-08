/**
 * This file serves as a template of how a bare bones vuex module should look like
 */
// import axios from "axios";
// import consoleError from "@/helpers/consoleError";

/**
 * This helper function is required for all VueX Modules
 * to lets us initialize their default state on RESET
 */
function _initialState() {
  return {
    /**
     * Default your default states here
     */
    // posts: []
  };
}

export default {
  namespaced: true, // Required

  // ==========================================================
  // State
  // ==========================================================
  state: {
    ..._initialState()
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
    // async someAction(
    //   { rootState, state, dispatch, commit },
    //   { module, key, value }
    // ) {
    //   try {
    //     const response = await axios.get("...");
    //     return response;
    //   } catch (error) {
    //     consoleError("someAction", arguments, error);
    //     throw new Error(error);
    //   }
    // },
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
    }
    /**
     * Example Getter
     */
    // someGetter: (state) => {
    //   /**
    //    * do something and return the value
    //    */
    // },
  }
};
