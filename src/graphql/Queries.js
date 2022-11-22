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
  query getArticle($slug: String!) {
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

const GET_AUTHORS = gql`
  query {
    authors {
      career
      name
      id
      slug
      thumb {
        url
      }
      posts {
        slug
      }
    }
  }
`;

const GET_AUTHOR = gql`
  query getAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      career
      name
      city
      birthday
      thumb {
        url
      }
      description {
        html
      }
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
  }
`;

const GET_USER = gql`
  query getUser($email:String!) {
    customer(where: {email: $email}) {
      id
      username
      email
      password
      likes
    }
  }
`;


export {
  GET_POSTS_LANDING,
  GET_HOME,
  GET_ARTICLE,
  GET_AUTHORS,
  GET_AUTHOR,
  GET_USER
};
