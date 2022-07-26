import React from 'react';
import {createContext} from 'react';

export interface AuthState {
  isLoggedin: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedin: false,
};

export interface AuthContextPros {
  authState: AuthState;
  signIn: () => void;
}

export const AuthContext = createContext({} as AuthContextPros);

export const AuthProvider = ({children}: any) => {
  return (
    <AuthContext.Provider
      value={{authState: authInitialState, signIn: () => {}}}>
      {children}
    </AuthContext.Provider>
  );
};
