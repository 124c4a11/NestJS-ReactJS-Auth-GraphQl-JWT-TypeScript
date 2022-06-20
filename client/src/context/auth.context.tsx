import jwtDecode from 'jwt-decode';
import { IUser } from '../types/IUser';
import { createContext, PropsWithChildren, useReducer } from 'react';
import { LoginResponse } from '../graphql/generated';

enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

interface Token {
  name: string;
  sub: number;
  iat: number;
  exp: number;
}

interface State {
  access_token: '';
  user: IUser | null;
}

const initialState: State = {
  access_token: '',
  user: null,
};

const token: string | null = localStorage.getItem('token');

if (token) {
  const decoded = jwtDecode<Token>(token);

  if (decoded.exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
  } else {
    initialState.user = {
      id: decoded.sub,
      name: decoded.name,
    };
  }
}

function authReducer(state: State, action: any) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return action.payload;

    case ActionTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
}

export const AuthContext = createContext({
  user: null,
  login: (userData: LoginResponse) => {},
  logout: () => {},
});

export function AuthProvider({ children }: PropsWithChildren): JSX.Element {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(userData: LoginResponse) {
    localStorage.setItem('token', userData.access_token);

    dispatch({
      type: ActionTypes.LOGIN,
      payload: userData,
    });
  }

  function logout() {
    localStorage.removeItem('token');

    dispatch({ type: ActionTypes.LOGOUT });
  }

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
