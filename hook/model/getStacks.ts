/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getStacks
// ====================================================

export interface getStacks_stacksCollection_items {
  __typename: "Stacks";
  order: number | null;
  title: string | null;
  stacks: (string | null)[] | null;
}

export interface getStacks_stacksCollection {
  __typename: "StacksCollection";
  items: (getStacks_stacksCollection_items | null)[];
}

export interface getStacks {
  stacksCollection: getStacks_stacksCollection | null;
}

export interface getStacksVariables {
  locale: string;
}
