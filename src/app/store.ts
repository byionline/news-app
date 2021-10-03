import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { NewsApi } from '../services/NewsApi';

export const store = configureStore({
  reducer: {
    [NewsApi.reducerPath]: NewsApi.reducer,
  },
  /*Adding the api middleware enables caching, invalidation, polling, and other useful features of `rtk-query`.*/
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(NewsApi.middleware),
});
/* required for refetchOnFocus/refetchOnReconnect behaviors */
setupListeners(store.dispatch);
