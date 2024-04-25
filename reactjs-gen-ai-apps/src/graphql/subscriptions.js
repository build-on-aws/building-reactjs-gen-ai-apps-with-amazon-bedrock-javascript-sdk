/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePrompt = /* GraphQL */ `
  subscription OnCreatePrompt(
    $filter: ModelSubscriptionPromptFilterInput
    $owner: String
  ) {
    onCreatePrompt(filter: $filter, owner: $owner) {
      id
      name
      prompt
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdatePrompt = /* GraphQL */ `
  subscription OnUpdatePrompt(
    $filter: ModelSubscriptionPromptFilterInput
    $owner: String
  ) {
    onUpdatePrompt(filter: $filter, owner: $owner) {
      id
      name
      prompt
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeletePrompt = /* GraphQL */ `
  subscription OnDeletePrompt(
    $filter: ModelSubscriptionPromptFilterInput
    $owner: String
  ) {
    onDeletePrompt(filter: $filter, owner: $owner) {
      id
      name
      prompt
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
