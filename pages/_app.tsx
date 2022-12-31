import React from 'react';
import '../styles/app.css';
import type { AppProps } from 'next/app';
import MainLayout from '../components/layout/MainLayout';
import AppContextProvider from '../store/context/AppContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppContextProvider>
  );
}
