import Layout from "../components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import styles from "../styles/Loader.module.css";
import { Provider } from "react-redux";
import { useStore } from "../store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store.store}>
      <PersistGate loading={<Loader />} persistor={store.persistor}>
        <Component {...pageProps} />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;

function Loader() {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.loader} />
    </div>
  );
}
