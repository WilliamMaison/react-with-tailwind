import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware, EpicMiddleware } from 'redux-observable';
import { AppState } from './AppState';

export interface Dependencies {
  test: any;
}

export const initStore = (dependencies: Dependencies): Store => {
  const epicMiddleware: EpicMiddleware<
    any,
    any,
    AppState,
    Partial<Dependencies>
  > = createEpicMiddleware({ dependencies });
  const rootEpic = combineEpics<any, any, AppState, Partial<Dependencies>>();
  const store = configureStore<AppState>({
    reducer: {},
    middleware: [epicMiddleware],
  });
  epicMiddleware.run(rootEpic);
  return store;
};
