import { gql } from '@apollo/client';

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
