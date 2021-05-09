/* eslint-disable import/prefer-default-export */
export const getLoaderState = (state) => state.loader;
export const getLoaderStatus = (state) => getLoaderState(state).active;
