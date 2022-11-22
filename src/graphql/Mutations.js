import { gql } from "@apollo/client";
const CREATE_USER = gql`
  mutation createUser($username:String!,$email:String!,$password:String!) {
    createCustomer(
      data: { username: $username, email: $email, password: $password }
    ) {
      id
    }
  }
`;

export {CREATE_USER}