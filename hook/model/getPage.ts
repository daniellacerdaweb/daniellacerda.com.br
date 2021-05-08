/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPage
// ====================================================

export interface getPage_pageCollection_items_contents {
  __typename: "PageContents";
  json: any;
}

export interface getPage_pageCollection_items_image {
  __typename: "Asset";
  url: string | null;
}

export interface getPage_pageCollection_items {
  __typename: "Page";
  title: string | null;
  contents: getPage_pageCollection_items_contents | null;
  image: getPage_pageCollection_items_image | null;
}

export interface getPage_pageCollection {
  __typename: "PageCollection";
  items: (getPage_pageCollection_items | null)[];
}

export interface getPage {
  pageCollection: getPage_pageCollection | null;
}

export interface getPageVariables {
  path: string;
  locale: string;
}
