import { gql } from '@apollo/client';

export const SIGNUP = gql`
  mutation signup($name: String!, $password: String!) {
    signup(createUserInput: { name: $name, password: $password }) {
      id
      name
    }
  }
`;

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
    }
  }
`;
