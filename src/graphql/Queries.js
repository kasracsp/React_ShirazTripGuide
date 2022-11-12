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
const GET_HOME = gql`
  query {
    posts {
      author {
        ... on Author {
          name
          slug
          thumb {
            url
          }
        }
      }
      id
      slug
      title
      thumb {
        url
      }
    }
  }
`;

export { GET_POSTS_LANDING, GET_HOME };
