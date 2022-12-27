import { client } from "services/apollo";

import { GET_PROJECTS } from "./queries";

import { GetProjectsQuery } from "graphql/generated";

export const ProjectsService = {
  getProjects: async () => {
    const { data } = await client.query<GetProjectsQuery>({
      query: GET_PROJECTS,
    });

    return { data };
  },
};
