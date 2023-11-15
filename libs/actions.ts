import { GraphQLClient } from "graphql-request";
import { getUserQuery } from "./graphql";
// import {
//   deleteProjectMutation,
//   getProjectByIdQuery,
//   getProjectsOfUserQuery,
//   getUserQuery,
//   projectsQuery,
//   updateProjectMutation,
// } from "../graphql";
// import { createUserMutation, updateProfileMutation } from "../graphql";
// import { ProjectForm, ProfileForm } from "@/common.types";
// import { createProjectMutation } from "../graphql";
// import ProfileForm from "@/app/components/ProfileForm";
import { createUserMutation } from "./graphql";
const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ""
  : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ""
  : "letmein";
const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);
const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    return await client.request(query, variables);
  } catch (error) {
    throw error;
  }
};

export const getUser = (email: string) => {
  return makeGraphQLRequest(getUserQuery, { email });
};
export const createUser = (name: string, email: string, avatarUrl: string) => {
  client.setHeader("x-api-key", apiKey);

  const variables = {
    input: {
      name: name,
      email: email,
      avatarUrl: avatarUrl,
    },
  };

  return makeGraphQLRequest(createUserMutation, variables);
};
