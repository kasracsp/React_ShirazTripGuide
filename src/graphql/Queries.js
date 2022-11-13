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
const GET_ARTICLE = gql`
  query getArticle($slug:String!){
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          name
          slug
          career
          thumb {
            url
          }
        }
      }
      createdAt
      date
      slug
      thumb {
        url
      }
      title
      content {
        html
      }
    }
  }
`;

export { GET_POSTS_LANDING, GET_HOME, GET_ARTICLE };
