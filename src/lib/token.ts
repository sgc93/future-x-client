import Cookies from "js-cookie";

export const storeToken = (token: string, expiresIn: number) => {
  Cookies.set('token', token, {
    expires: expiresIn/86400,
    path: '/',
    sameSite: 'lax',
  })
};

export const removeToken = async () => {
  Cookies.remove('token', {path: '/'})
};

export const getToken = async () => {
  return Cookies.get('token') || null
};
