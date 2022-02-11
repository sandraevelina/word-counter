import { configureStore } from '@reduxjs/toolkit';
import courtageSlice from './redux/courtage/courtageSettingSlice';

export default configureStore({
  reducer: {
    courtageSettings: courtageSlice,
  },
});

// https://redux.js.org/tutorials/quick-start
