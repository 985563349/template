export const signIn = (account: { username: string; password: string }): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000, 'TOKEN');
  });
};

export const signOut = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};

export const fetchCurrentUser = () => {
  return new Promise<API.CurrentUser>((resolve, reject) => {
    setTimeout(resolve, 1000, { username: 'username' });
  });
};
