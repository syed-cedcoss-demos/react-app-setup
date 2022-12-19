interface optionsProps {
  url: string;
  body?: {};
}

export const getCall = async (data: optionsProps) => {
  try {
    const options: any = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(data?.url, options);
    const result: any = await res.json();
    if (result?.code === 'token_expired') {
      sessionStorage.setItem('token_expired', 'token_expired');
      window.location.href = window.location.origin + '/token-expire';
    }
    return result;
  } catch (error) {
    console.log('error', error);
  }
};

export const postCall = async (data: optionsProps) => {
  try {
    const options: any = {
      method: 'POST',
      body: JSON.stringify(data?.body),
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('zoho-auth-token')}`,
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(data?.url, options);
    const result: any = await res.json();
    if (result?.code === 'token_expired') {
      sessionStorage.setItem('token_expired', 'token_expired');
      window.location.href = window.location.origin + '/token-expire';
    }
    return result;
  } catch (error) {
    return 'error';
  }
};
