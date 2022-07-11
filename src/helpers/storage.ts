import { encrypt, decrypt } from './crypto';

export const get = (key: string, password?: string) =>
  new Promise((resolve, reject) => {
    const result = localStorage.getItem(key);
    const data = result[key];

    if (!data) {
      return resolve(null);
    }

    if (!password) {
      return resolve(data);
    }

    const decrypredData = decrypt(password, data);
    let jsonData;

    try {
      jsonData = JSON.parse(decrypredData);
    } catch (e) {
      return reject();
    }

    return resolve(jsonData);
  });

export const set = (key: string, value: any, password?: string) =>
  new Promise((resolve, reject) => {
    try {
      let dataToBeSet;

      if (password) {
        const encryptedData = encrypt(
          password,
          JSON.stringify(value),
        );

        dataToBeSet = encryptedData;
      } else {
        dataToBeSet = JSON.stringify(value);
      }

      localStorage.setItem(key, dataToBeSet);
    } catch (e) {
      reject();
    }
  });
