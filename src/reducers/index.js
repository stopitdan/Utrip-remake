import { combineReducers } from 'redux';
import ActiveProfileReducer from './reducer-active-profile';
import PreferencesReducer from './reducer-preferences';
import RefineReducer from './reducer-refine';
import ProfileSettingsReducer from './reducer-profile-settings';
import NightlifeTypesReducer from './reducer-nightlifetypes';

const rootReducer = combineReducers({
  activeProfile: ActiveProfileReducer,
  preferences: PreferencesReducer,
  refinements: RefineReducer,
  profileSettings: ProfileSettingsReducer,
  nightlifeTypes: NightlifeTypesReducer,

});

export default rootReducer;
