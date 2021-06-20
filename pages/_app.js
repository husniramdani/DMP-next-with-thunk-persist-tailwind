import { wrapper } from '../store/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import "@styles/index.css";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  const store = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(App);
