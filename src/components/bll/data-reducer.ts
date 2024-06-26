import { AppThunk } from './store';
import { setCounterTC } from './counter-reducer';
import { loadState, saveState } from '../../utils/localStorage';
import { setMaxValueTC } from './max-value-reducer';
import { setInputErrorTC, unsetInputErrorTC } from './input-error-reducer';
import { hideSettingsTC, showSettingsTC } from './show-settings-reducer';
import { setStartValueTC } from './start-value-reducer';
import { StateToLocalStorage } from '../SettingsController/SettingsController';

export const setDataToLocalStorageTC = (newState: StateToLocalStorage): AppThunk => async (dispatch) => {
    await saveState(newState);
}

export const setDataFromLocalStorageToStateTC = (): AppThunk => async (dispatch) => {
    const stateFromLocalStorage = await loadState();
    if (stateFromLocalStorage) {
        dispatch(setStartValueTC(stateFromLocalStorage.startValue.currentStartValue));
        dispatch(setCounterTC(stateFromLocalStorage.startValue.currentStartValue));
        dispatch(setMaxValueTC(stateFromLocalStorage.maxValue.currentMaxValue));
        stateFromLocalStorage.setError.error ? dispatch(setInputErrorTC()) : dispatch(unsetInputErrorTC());
        stateFromLocalStorage.showSettings.flag ? dispatch(showSettingsTC()) : dispatch(hideSettingsTC());
    }
}