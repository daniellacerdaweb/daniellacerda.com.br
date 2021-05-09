/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPortfolio
// ====================================================

export interface getPortfolio_portfolioCollection_items_image {
  __typename: "Asset";
  url: string | null;
}

export interface getPortfolio_portfolioCollection_items_contents {
  __typename: "PortfolioContents";
  json: any;
}

export interface getPortfolio_portfolioCollection_items {
  __typename: "Portfolio";
  title: string | null;
  image: getPortfolio_portfolioCollection_items_image | null;
  stacks: (string | null)[] | null;
  order: number | null;
  git: string | null;
  site: string | null;
  path: string | null;
  contents: getPortfolio_portfolioCollection_items_contents | null;
}

export interface getPortfolio_portfolioCollection {
  __typename: "PortfolioCollection";
  items: (getPortfolio_portfolioCollection_items | null)[];
}

export interface getPortfolio {
  portfolioCollection: getPortfolio_portfolioCollection | null;
}
