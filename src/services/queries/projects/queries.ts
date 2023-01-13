import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects($locale: Locale!) {
    projects(orderBy: updatedAt_DESC, locales: [$locale]) {
      link
      image
      title
      description
      createdAt
    }
  }
`;
