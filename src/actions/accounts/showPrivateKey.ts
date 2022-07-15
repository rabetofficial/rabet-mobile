import { get } from 'helpers/storage';

export default async (password: string): Promise<boolean> => {
  try {
    const result = await get('data', password);

    return true;
  } catch (e) {
    return false;
  }
};
