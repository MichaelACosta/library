export const authenticateUser = token => localStorage.setItem('token', token);
export const isAuthenticated = () => localStorage.getItem('token') !== null;
