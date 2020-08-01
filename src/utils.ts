export enum Locales {
  'zh' = 'zh',
  'en' = 'en',
}


export interface LocalContent {
  content: any;
  timestamp: number;
}

export function saveToLocalStorage(itemName: string, content: any, timeoutMS = 0): void {
  let timestamp = 0;
  if (timeoutMS > 0) {
    timestamp = timeoutMS + new Date().getTime();
  }
  const contentWithTimeOut: LocalContent = {
    content,
    timestamp,
  };
  localStorage.setItem(itemName, JSON.stringify(contentWithTimeOut));
}

export function getFromLocalStorage<T>(itemName: string): T | undefined {
  const contentString = localStorage.getItem(itemName);
  if (!contentString) {
    return;
  }
  if (contentString) {
    const {content, timestamp} = JSON.parse(contentString) as LocalContent;
    if (timestamp === 0 || new Date().getTime() < timestamp) {
      return content;
    }
    // remove item if expired
    localStorage.removeItem(itemName);
    return undefined;
  }
  return undefined;
}