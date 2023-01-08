/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePet = /* GraphQL */ `
  subscription OnCreatePet(
    $filter: ModelSubscriptionPetFilterInput
    $owner: String
  ) {
    onCreatePet(filter: $filter, owner: $owner) {
      id
      name
      description
      petType
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePet = /* GraphQL */ `
  subscription OnUpdatePet(
    $filter: ModelSubscriptionPetFilterInput
    $owner: String
  ) {
    onUpdatePet(filter: $filter, owner: $owner) {
      id
      name
      description
      petType
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePet = /* GraphQL */ `
  subscription OnDeletePet(
    $filter: ModelSubscriptionPetFilterInput
    $owner: String
  ) {
    onDeletePet(filter: $filter, owner: $owner) {
      id
      name
      description
      petType
      createdAt
      updatedAt
      owner
    }
  }
`;
