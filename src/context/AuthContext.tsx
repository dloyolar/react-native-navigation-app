import React, {useReducer} from 'react';
import {createContext} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

export interface AuthContextPros {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logout: () => void;
  changeUsername: (name: string) => void;
}

export const AuthContext = createContext({} as AuthContextPros);

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeUsername = (name: string) => {
    dispatch({type: 'changeUsername', payload: name});
  };

  return (
    <AuthContext.Provider
      value={{authState, signIn, changeFavoriteIcon, logout, changeUsername}}>
      {children}
    </AuthContext.Provider>
  );
};
