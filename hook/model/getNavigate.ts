/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNavigate
// ====================================================

export interface getNavigate_pageCollection_items {
  __typename: "Page";
  path: string | null;
  title: string | null;
  order: number | null;
}

export interface getNavigate_pageCollection {
  __typename: "PageCollection";
  items: (getNavigate_pageCollection_items | null)[];
}

export interface getNavigate {
  pageCollection: getNavigate_pageCollection | null;
}

export interface getNavigateVariables {
  locale: string;
}
