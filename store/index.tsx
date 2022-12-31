import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
// @ts-ignore
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import todoSlice from './slices/todo/todoSlice';

const appReducer = combineReducers({
  //app wide state goes in here
  todos: todoSlice.reducer
});

const persistConfig = {
  key: 'app_root',
  storage,
  blacklist: []
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store);

export default function storeFactory() {
  return {
    store,
    persistor
  };
}

// infer the App State and Dispatch from the store itself
export type RootAppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//export thunk action type to avoid repetition in all thunks
// eslint-disable-next-line no-unused-vars
export type AppThunkType<ReturnType = void> = ThunkAction<
  void,
  RootAppState,
  unknown,
  AnyAction
>;
