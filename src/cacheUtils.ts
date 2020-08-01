const ACCESS_TOKEN = 'accessToken';
export const LOCALE_VAR = 'LOCALE';
export const THEME_VAR = 'THEME';
import {getFromLocalStorage, saveToLocalStorage, Locales} from './utils';

export class CacheUtils {
  FLOW_TABS = 'FLOW_TABS';
  LAB_LIST_CONFIG = 'LAB_LIST_CONFIG';
  CURRENT_SELECTED_PATH = 'CURRENT_SELECTED_PATH';
  LAST_LAB_PATH = 'LAST_LAB_PATH';
  RECTANGLE_FLOW = 'RECTANGLE_FLOW';
  CIRCLE_FLOW1 = 'CIRCLE_FLOW1';
  CIRCLE_FLOW2 = 'CIRCLE_FLOW2';
  CURRENT_SELECTED_EDITOR_PIPELINE = 'CURRENT_SELECTED_EDITOR_PIPELINE';
  CURRENT_SELECTED_DISPLAY_PIPELINE = 'CURRENT_SELECTED_DISPLAY_PIPELINE';

  saveOpenTabs(flowIDs: string[]) {
    return saveToLocalStorage(this.FLOW_TABS, flowIDs, 0);
  }

  getOpenTabs() {
    return getFromLocalStorage<string[]>(this.FLOW_TABS);
  }

  getLocale(): Locales {
    return getFromLocalStorage<Locales>(LOCALE_VAR) || Locales.zh;
  }

  saveLocale(local: Locales) {
    saveToLocalStorage(LOCALE_VAR, local);
  }

  saveUserToken(token: string) {
    saveToLocalStorage(ACCESS_TOKEN, token, 0);
  }

  getUserToken() {
    return getFromLocalStorage<string>(ACCESS_TOKEN);
  }

  deleteUserToken() {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  clearCache() {
    localStorage.clear();
  }

  getLabListConfig() {
    return getFromLocalStorage(this.LAB_LIST_CONFIG);
  }

  saveLabListConfig(config: any) {
    saveToLocalStorage(this.LAB_LIST_CONFIG, config);
  }

  saveCurrentSelectedPath(path: string) {
    if (path) {
      sessionStorage.setItem(this.CURRENT_SELECTED_PATH, path);
    }
  }

  getCurrentSelectedPath() {
    return sessionStorage.getItem(this.CURRENT_SELECTED_PATH);
  }

  saveLastLabPath(path: string) {
    saveToLocalStorage(this.LAST_LAB_PATH, path);
  }

  getLastLabPath() {
    return getFromLocalStorage<string>(this.LAST_LAB_PATH);
  }

}

export const cacheUtils = new CacheUtils();
