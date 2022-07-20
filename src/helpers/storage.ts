import config from 'config';
import { encrypt, decrypt } from './crypto';

const onUpgradeNeeded = (e) => {
  const db = e.target.result;

  if (!db.objectStoreNames.contains('data')) {
    db.createObjectStore('data', { keyPath: 'id' });
  }

  if (!db.objectStoreNames.contains('connectedWebsites')) {
    db.createObjectStore('connectedWebsites', {
      keyPath: 'id',
    });
  }

  if (!db.objectStoreNames.contains('options')) {
    db.createObjectStore('options', { keyPath: 'id' });
  }

  if (!db.objectStoreNames.contains('contacts')) {
    db.createObjectStore('contacts', { keyPath: 'id' });
  }
};

const setInDb = (key: string, value: any): Promise<void> =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open('rabet', config.DB_VERSION);

    request.onupgradeneeded = onUpgradeNeeded;

    request.onerror = () => {
      reject();
    };

    request.onsuccess = (e) => {
      const db = e.target.result;

      const tx = db.transaction(key, 'readwrite');

      tx.objectStore(key).clear();

      tx.objectStore(key).add({ id: 'only', value });
      resolve();
    };
  });

export const get = <T>(key: string, password?: string): Promise<T> =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open('rabet', config.DB_VERSION);

    request.onupgradeneeded = onUpgradeNeeded;

    request.onsuccess = (e) => {
      const db = e.target.result;

      const tx = db.transaction(key, 'readonly');
      const table = tx.objectStore(key);
      const req = table.openCursor();

      req.onsuccess = (e) => {
        const cursor = e.target.result;

        if (cursor) {
          if (cursor.key === 'only') {
            if (!password) {
              resolve(cursor.value.value);
            } else {
              const decrypredData = decrypt(
                password,
                cursor.value.value,
              );

              let jsonData: T;

              try {
                jsonData = JSON.parse(decrypredData);
              } catch (e) {
                return reject();
              }

              return resolve(jsonData);
            }
          } else {
          }
        } else {
          resolve(null);
        }
      };
    };
  });

export const set = (
  key: string,
  value: any,
  password?: string,
): Promise<void> =>
  new Promise(async (resolve, reject) => {
    try {
      let dataToBeSet = value;

      if (password) {
        const encryptedData = encrypt(
          password,
          JSON.stringify(value),
        );

        dataToBeSet = encryptedData;
      }

      await setInDb(key, dataToBeSet);

      resolve();
    } catch (e) {
      reject(e);
    }
  });
