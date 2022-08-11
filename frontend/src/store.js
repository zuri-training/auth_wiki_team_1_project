import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
let store;
// let store = createStore(persistedReducer);
// let persistor = persistStore(store);

function initStore(initialState) {
  return createStore(
    // Youre supposed to create store with persisted reducer na
    // Abi?
    // I don't know o, see the code I commented up. If I uncomment it, I get an error
    // this init store is already creating a store, so am I to take it out, or can we add the persisted reducer code inside the block?
    // yeah, lets add it here and see
    // i no even sabi wetin i dey do😂
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

// oooooooh!!!
// na persistedReducer we suppose pass in
// shey problem no con too much bayii
// ive seen why its complaining

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  //   I think we should use PersistStore here, okay
  // i no sabi oo, i just dey try lmao

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  const persistor = useMemo(
    () => persistStore(initializeStore(initialState)),
    [initialState]
  );
  return { store, persistor };
}

// useStore takes a state object na, noat a function na
// Omo, all these things I no sabi😪, God Abeg T_T
// its correct, it was useSelector not use store
// lets test the store kini
// still clearing data shey? Yes
// this thing no dey persist SHit
// Wetin we go do like this
// chill, we arent using persistStore sorry
// i wonder where your teammate got the code from
// im just lookin for where to use it

// i have an idea
// the reason why theres error is, state has not been loaded
// from local storage yet
// so we have to delay the mounting of the app
// untill when state is loaded
// How long does it take state to load?
// its fast, but when the app is loaded, redux persist hasnt loaded state yet
// so it retursn undefined
// i usually load state manually for my app
// intead of using libraries, ive much better control
// let's try that then
