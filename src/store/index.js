import Vue from "vue";
import Vuex from "vuex";
import Blog from "@/store/modules/Blog.js";

Vue.use(Vuex);

// ==========================================================
// Helper Functions
// ==========================================================
/**
 * Helper function to set state
 *
 * @param {String} state
 * @param {String} module
 * @param {String} key
 * @param {String} childKey
 * @param {*} value
 */
function _setState(state, module, key, childKey, value) {
  // Use module if provided, otherwise root
  if (module) state = state[module];

  if (key) {
    if (childKey) {
      Vue.set(state[key], childKey, value);
      value = state[key];
    }
    // Set the state at the module
    Vue.set(state, key, value);
  }
}

/**
 * This helper function is required for all VueX Modules
 * to lets us get and set their default state on RESET
 */
function _initialState() {
  return {
    initialized: false, // set true once framework stores are restored from IDB
    loading: 0, // used throughout app during API calls, etc
    loadingSteps: {
      /**
       * "name": "",
       */
    },
    snackbar: {
      show: false,
      timeout: 6000,
      text: "",
      showClose: true,
      closeText: "Close",
      position: "bottom" // left, right, top, bottom
    }
  };
}

/**
 * This helper function is required to return the initial state of the module passed in.
 */
function _getInitialState(rootGetters, module) {
  let initialState;
  if (rootGetters) {
    initialState = module
      ? rootGetters[`${module}/initialState`]
      : rootGetters.initialState;
  }
  if (!initialState) {
    throw new Error(`VueX getter 'initialState' required for ${module}`);
  }
  return initialState;
}

export default new Vuex.Store({
  // ==========================================================
  // State
  // ==========================================================
  state: { ..._initialState() },

  // ==========================================================
  // Mutations
  // ==========================================================
  mutations: {
    /**
     * This function sets the application snackbar with the following defaults
     * show: Boolean,
     * timeout: Optional, defaults to 6000ms
     * text: String,
     * showClose: Optional, defaults to false,
     * closeText: String,
     * position: Optional, defaults to bottom
     *
     * @param {Object} {show, timeout, text, showClose, closeText, position}
     */
    SET_SNACKBAR(
      state,
      { show, timeout, text, showClose, closeText, position }
    ) {
      state.snackbar = { show, timeout, text, showClose, closeText, position };
    },

    /**
     * Increment the main progress loader in the navbar
     * This function takes in the name and description of the loaded item to be pushed onto the stack.
     * This loaded item can then be viewed by clicking the progress loader on the main nav bar.
     *
     * @param {Object} {name, description}
     */
    INCREMENT_LOADING(state, { name, description }) {
      if (name === "" || description === "") {
        throw new Error("INCREMENT_LOADING: name and description required.");
      }
      if (name in state.loadingSteps) {
        throw new Error(
          `INCREMENT_LOADING: No duplicate names allowed. ${name} already exists.`
        );
      }
      state.loading++;
      Vue.set(state.loadingSteps, name, description);
    },

    /**
     * Decrement the main progress loader in the navbar.
     * This function takes in the name of the loaded item to be popped off the stack
     *
     * @param {String} name
     */
    DECREMENT_LOADING(state, name) {
      if (name === "") {
        throw new Error("DECREMENT_LOADING: name required.");
      }

      state.loading--;
      Vue.delete(state.loadingSteps, name);
    },

    /**
     * Generic key value function for setting data
     * The module and key are both optional
     *
     * @param {Object} {module, stateName, key, value}
     */
    SET_STATE(state, { module, key, childKey, value }) {
      _setState(state, module, key, childKey, value);
    },

    /**
     * Generic function to clear state
     * The module and key are both optional
     *
     * @param {Object} {module, key, childKey}
     */
    CLEAR_STATE(state, { module, key, childKey }) {
      _setState(state, module, key, childKey, null);
    }
  },

  // ==========================================================
  // Actions
  // ==========================================================
  actions: {
    /**
     * *This is an action only because we need access to getters*
     * This action resets the current root store or the store module passed in
     *
     * @param {String} module - An optional module, otherwise defaults to root store
     */
    RESET_MODULE({ rootGetters, commit }, module) {
      // Get the intialState using the getter
      if (!module) return;
      const s = _getInitialState(rootGetters, module);

      Object.keys(s).forEach(key => {
        const value = s[key];
        // Commit the state with the module key and value
        commit("SET_STATE", { module, key, value });
      });
    }
  },

  // ==========================================================
  // Getters
  // ==========================================================
  getters: {
    /**
     * This function comes default with all generated VueX Modules.
     * This returns the initial states to set the defaults for a module.
     * This to avoid duplicate getIntialState functions in each module.
     */
    initialState() {
      return _initialState();
    }
  },
  modules: {
    Blog
  }
});
