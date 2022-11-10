import { gql } from "@apollo/client";

const GET_POSTS_LANDING = gql`
  query {
    posts {
      id
      thumb {
        url
      }
      title
      slug
      brief
    }
  }
`;

export {GET_POSTS_LANDING}