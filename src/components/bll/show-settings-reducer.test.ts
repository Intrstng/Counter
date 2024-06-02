import { hideSettingsAC, showSettingsAC, ShowSettingsInitType, showSettingsReducer } from './show-settings-reducer';

// ------------------- 'TOGGLE SHOW HIDE SETTINGS MENU' ------------------- //

test ('show-settings-reducer should toggle showSettings flag (toggle show / hide settings menu)', () => {
  // data
  const showSettingsState: ShowSettingsInitType = {
    flag: false
  }
  // action
  const newShowSettingsState_1 = showSettingsReducer(showSettingsState, showSettingsAC());
  const newShowSettingsState_2 = showSettingsReducer(showSettingsState, hideSettingsAC());
  // expectation
  expect(showSettingsState.flag).toBe(false);
  expect(newShowSettingsState_1.flag).toBe(true);
  expect(newShowSettingsState_2.flag).toBe(false);
})