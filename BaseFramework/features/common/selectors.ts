import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../redux";

const commonReducer = (state: RootState): RootState["commonReducer"] =>
  state.commonReducer;

export const selectActiveSection = (state: RootState): string =>
  commonReducer(state).activeSection;

export const selectAuthToken = (state: RootState): string =>
  commonReducer(state).authToken;

export const selectBiometricEnabled = (state: RootState): string =>
  commonReducer(state).biometricEnabled;

export const selectLoader = createSelector(
  commonReducer,
  (data): RootState["commonReducer"]["loaders"][number] =>
    data.loaders.slice(-1)[0]
);

export const selectBottomModelVisible = createSelector(
  commonReducer,
  (data): RootState["commonReducer"]["bottomTabModelVisible"] =>
    data.bottomTabModelVisible
);

export const selectUserLanguage = (state: RootState): string =>
  commonReducer(state).language;

export const selectUserLoginData = (
  state: RootState
): RootState["commonReducer"]["userData"] => commonReducer(state).userData;

export const selectUserTheme = (
  state: RootState
): RootState["commonReducer"]["theme"] => commonReducer(state).theme;

export const selectStrapi = (
  state: RootState
): RootState["commonReducer"]["strapi"] => commonReducer(state).strapi;
