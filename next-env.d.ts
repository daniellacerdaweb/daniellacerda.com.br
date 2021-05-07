/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SPACES_CONTENTFUL: string;
    NEXT_PUBLIC_TOKEN_CONTENTFUL: string
  }
}
