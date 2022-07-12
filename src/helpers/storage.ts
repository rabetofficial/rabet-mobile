import { encrypt, decrypt } from './crypto';

const onUpgradeNeeded = (e) => {
  const db = e.target.result;

  db.createObjectStore('data', { keyPath: 'id' });

  db.createObjectStore('store', {
    keyPath: 'id',
  });

  db.createObjectStore('connectedWebsites', {
    keyPath: 'id',
  });
};

const setInDb = (key: string, value: any) => {
  const request = indexedDB.open('rabet', 1);

  request.onupgradeneeded = onUpgradeNeeded;

  request.onerror = (e) => {
    throw e;
  };

  request.onsuccess = (e) => {
    const db = e.target.result;

    const tx = db.transaction(key, 'readwrite');

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i += 1) {
        tx.objectStore(key).add({
          id: Math.random(),
          value: value[i],
        });
      }
    } else {
      tx.objectStore(key).clear();
      tx.objectStore(key).add({ id: 'only', value });
    }
  };
};

export const get = (key: string, password?: string) =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open('rabet');

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

              let jsonData;

              try {
                jsonData = JSON.parse(decrypredData);
              } catch (e) {
                return reject();
              }

              return resolve(jsonData);
            }
            console.log('The only data: ', cursor.value.value);
          } else {
            console.log(`Not the only value ${cursor.value}`);
          }
        } else {
          resolve(null);
        }
      };
    };
  });

export const set = (key: string, value: any, password?: string) =>
  new Promise((resolve, reject) => {
    try {
      let dataToBeSet = value;

      if (password) {
        const encryptedData = encrypt(
          password,
          JSON.stringify(value),
        );

        dataToBeSet = encryptedData;
      }

      setInDb(key, dataToBeSet);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
