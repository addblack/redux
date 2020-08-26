export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, {type: 'INIT '});
  const subscribers = [];

  return {
    // action === {type: 'INCREMENT} // Action its just a simple object
    dispatch(action) {
      state = rootReducer(state, action)
      subscribers.forEach(sub => sub())
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state
    }
  }
}