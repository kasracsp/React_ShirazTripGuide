import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createCustomer(
      data: { username: $username, email: $email, password: $password }
    ) {
      id
      email
    }
  }
`;
const PUBLISH_USER = gql`
  mutation publishUser($email: String!) {
    publishCustomer(where: { email: $email }, to: PUBLISHED) {
      id
      email
    }
  }
`;
const CREATE_COMMENT = gql`
  mutation myCreateComment(
    $name: String!,
    $text: String!,
    $email: String!,
    $parentId: String!,
    $slug: String!,
  ) {
    createComment(
      data: {
        name: $name,
        text: $text,
        email: $email,
        parentId: $parentId,
        post: { connect: { slug: $slug } },
      }
    ) {
      id
    }
  }
`;
const PUBLISH_COMMENT = gql`
  mutation myPublishComment($id: ID!) {
    publishComment(where: {id: $id}, to: PUBLISHED){
      id
    }
  }
`;

export { CREATE_USER, PUBLISH_USER, CREATE_COMMENT, PUBLISH_COMMENT };
