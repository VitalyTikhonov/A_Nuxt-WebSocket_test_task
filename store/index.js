
export const state = () => ({
  echo: []
});

export const mutations = {
  setState(state, newValue) {
    state.echo.push(newValue);
  }
};

export const actions = {
  queryPieSocket(state, message) {
    state.commit("setState", message);
  }
};

export const getters = {
  getEcho(state) {
    return state.echo;
  }
};
