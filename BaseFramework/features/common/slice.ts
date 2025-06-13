import {
  createSlice,
  PayloadAction,
  nanoid,
  createAction,
} from '@reduxjs/toolkit';

interface Loader {
  id: string;
  message?: string;
}

interface State {
  activeSection: null | string;
  theme: string | null;
  authToken: null | string;
  loaders: Loader[];
  language: string;
  bottomTabModelVisible: boolean;
  userData: null | object;
  biometricEnabled: null | boolean;
  strapi: null | object;
}

const initialState: State = {
  activeSection: null,
  theme: null,
  authToken: null,
  loaders: [],
  language: 'en',
  bottomTabModelVisible: false,
  userData: null,
  biometricEnabled: null,
  strapi: null,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    presentLoader(state, action: PayloadAction<Loader>) {
      const { id, message } = action.payload;
      state.loaders.push({ id, message });
    },
    dismissLoader(state, action: PayloadAction<{ id: string }>) {
      state.loaders = state.loaders.filter(
        (loader) => loader.id !== action.payload.id,
      );
    },
    changeAppSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
    setAuthToken(state, action: PayloadAction<string>) {
      state.authToken = action.payload;
    },
    setBiometricEnabled(state, action: PayloadAction<boolean>) {
      state.biometricEnabled = action.payload;
    },
    showBottomTabModel(state, action: PayloadAction<boolean>) {
      console.log(action.payload);
      state.bottomTabModelVisible = action.payload;
    },
    changeLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    setUserLoginData(state, action: PayloadAction<object>) {
      state.userData = action.payload;
    },
    setstrapiData(state, action: PayloadAction<any>) {
      // console.log('inside the slice of strapi', action.payload);
      state.strapi = action.payload;
    },
  },
});

//Reducer
export const commonReducer = commonSlice.reducer;

//Actions
export const {
  changeLanguage,
  showBottomTabModel,
  setUserLoginData,
  changeAppSection,
  setstrapiData,
  setBiometricEnabled,
  dismissLoader,
  presentLoader,
} = commonSlice.actions;

export const strapiData = createAction('COMMON/STRAPI');
// Create Loader

export const createLoader = () => {
  const id = nanoid();
  return {
    present: (message?: string) => presentLoader({ id, message }),
    dismiss: () => dismissLoader({ id }),
  };
};
