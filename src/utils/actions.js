const actions = {
  setCar: ({ commit }, car) => {
    return commit("SET_CAR", car);
  },
  setUserName: ({ commit }, userName) => {
    return commit("SET_USERNAME", userName);
  }
};
export default actions;
