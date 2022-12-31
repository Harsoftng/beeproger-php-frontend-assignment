import React, { useContext } from 'react';
import Header from './Header';
import Content from './Content';
import { IMainLayoutProps } from './types/IMainLayoutProps';
import { Provider } from 'react-redux';
import storeFactory from '../../store';
import { PersistGate } from 'redux-persist/integration/react';
import SuspenseLoading from '../shared/misc/SuspenseLoading';
import ErrorBoundary from '../shared/misc/ErrorBoundary';
import { AppConfirmDialogProvider } from '../../store/context/dialog/AppConfirmDialogProvider';
import { SWRConfig } from 'swr';
import { getAppAPIFetcher } from '../shared/utils/functions';
import useAxiosClient from '../../store/hooks/utils/useAxiosClient';
import { AppContext } from '../../store/context/AppContext';

const MainLayout = (props: IMainLayoutProps): React.ReactElement => {
  const { children } = props;
  const { store, persistor } = storeFactory();
  const axiosClient = useAxiosClient();
  const { theme } = useContext(AppContext);
  const appAPIFetcher = getAppAPIFetcher(axiosClient);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<SuspenseLoading />}>
        <ErrorBoundary>
          <AppConfirmDialogProvider>
            <SWRConfig
              value={{
                fetcher: appAPIFetcher,
                revalidateIfStale: true,
                revalidateOnMount: true,
                revalidateOnReconnect: true,
                revalidateOnFocus: true,
                shouldRetryOnError: true
              }}>
              <div
                data-theme={theme}
                className="flex items-start justify-start flex-col h-screen w-screen">
                <Header />

                <Content>{children}</Content>
              </div>
            </SWRConfig>
          </AppConfirmDialogProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default MainLayout;
