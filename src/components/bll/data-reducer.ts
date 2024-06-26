import { AppThunk } from './store';
import { setCounterTC } from './counter-reducer';
import { loadState } from '../../utils/localStorage';
import { setMaxValueTC } from './max-value-reducer';
import { setInputErrorTC, unsetInputErrorTC } from './input-error-reducer';
import { hideSettingsTC, showSettingsTC } from './show-settings-reducer';

export const setDataFromLocalStorageToStateTC = (): AppThunk => async (dispatch) => {
    const stateFromLocalStorage = await loadState();
    console.log(stateFromLocalStorage)
    if (stateFromLocalStorage) {
        dispatch(setCounterTC(stateFromLocalStorage))
        dispatch(setMaxValueTC(stateFromLocalStorage.maxValue.currentMaxValue))
        stateFromLocalStorage.setError.error ? dispatch(setInputErrorTC()) : dispatch(unsetInputErrorTC())
        stateFromLocalStorage.showSettings.flag ? dispatch(showSettingsTC()) : dispatch(hideSettingsTC())
    }
}