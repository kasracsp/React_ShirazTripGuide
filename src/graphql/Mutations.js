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
const CREATE_LIKE = gql`
mutation myCreateLike($id: ID!,
  $email: String!,) {
  createLike(
    data: {comment: {connect: {id: $id}}, customer: {connect: {email: $email}}}
  ) {
    id
  }
}
`;

const PUBLISH_LIKE = gql`
  mutation myPublishLike($id: ID!) {
    publishLike(where: {id: $id}, to: PUBLISHED) {
      id
    }
  }
`;

const DELETE_LIKE = gql`
  mutation myDleteLike($id:ID!) {
    deleteLike(where: {id: $id}) {
      id
    }
  }
`;

export { CREATE_USER, PUBLISH_USER, CREATE_COMMENT, PUBLISH_COMMENT,CREATE_LIKE,PUBLISH_LIKE,DELETE_LIKE };
