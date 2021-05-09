/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllPortfolio
// ====================================================

export interface getAllPortfolio_portfolioCollection_items_image {
  __typename: "Asset";
  url: string | null;
}

export interface getAllPortfolio_portfolioCollection_items_contents {
  __typename: "PortfolioContents";
  json: any;
}

export interface getAllPortfolio_portfolioCollection_items {
  __typename: "Portfolio";
  title: string | null;
  image: getAllPortfolio_portfolioCollection_items_image | null;
  stacks: (string | null)[] | null;
  order: number | null;
  git: string | null;
  site: string | null;
  path: string | null;
  contents: getAllPortfolio_portfolioCollection_items_contents | null;
}

export interface getAllPortfolio_portfolioCollection {
  __typename: "PortfolioCollection";
  items: (getAllPortfolio_portfolioCollection_items | null)[];
}

export interface getAllPortfolio {
  portfolioCollection: getAllPortfolio_portfolioCollection | null;
}
