import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    projects(orderBy: updatedAt_DESC) {
      link
      image
      title
      description
      createdAt
    }
  }
`;
