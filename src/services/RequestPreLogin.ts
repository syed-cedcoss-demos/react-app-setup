import { serverPath } from '../config/Keys';
interface optionsProps {
  url: string;
  body?: any;
}

export const getCall = async (data: optionsProps) => {
  try {
    const url = serverPath + data.url;
    const options: any = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, options);
    return await res.json();
  } catch (error) {
    console.log('error', error);
    return error;
  }
};

export const postCall = async (data: optionsProps) => {
  try {
    const url = serverPath + data.url;
    const options: any = {
      method: 'POST',
      body: JSON.stringify(data.body),
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, options);
    return await res.json();
  } catch (error) {
    console.log('error', error);
    return error;
  }
};
