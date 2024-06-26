import { StateToLocalStorage } from '../components/SettingsController/SettingsController';

export const loadState = (): StateToLocalStorage | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    throw new Error('Data from local storage is not loaded');
  }
};

export const saveState = (state: StateToLocalStorage) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    throw new Error('Data from local storage is not saved to local storage');
  }
};