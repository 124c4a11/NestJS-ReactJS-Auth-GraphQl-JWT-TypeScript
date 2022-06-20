import { gql } from '@apollo/client';

export const SIGNUP = gql`
  mutation signup($name: String!, $password: String!) {
    signup(createUserInput: { name: $name, password: $password }) {
      id
      name
    }
  }
`;

export const LOGIN = gql`
  mutation login($name: String!, $password: String!) {
    login(loginUserInput: { name: $name, password: $password }) {
      access_token
      user {
        name
        id
      }
    }
  }
`;
