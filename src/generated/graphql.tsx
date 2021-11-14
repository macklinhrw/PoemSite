import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPoem?: Maybe<PoemClass>;
};


export type MutationCreatePoemArgs = {
  content: Scalars['String'];
  hasTitle: Scalars['Boolean'];
  imageLink: Scalars['String'];
  isDraft: Scalars['Boolean'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type PoemClass = {
  __typename?: 'PoemClass';
  content: Scalars['String'];
  hasTitle: Scalars['Boolean'];
  id: Scalars['String'];
  imageLink: Scalars['String'];
  isDraft: Scalars['Boolean'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllPoems?: Maybe<Array<PoemClass>>;
  getPoem?: Maybe<PoemClass>;
  getPoemBySlug?: Maybe<PoemClass>;
};


export type QueryGetPoemArgs = {
  id: Scalars['String'];
};


export type QueryGetPoemBySlugArgs = {
  slug: Scalars['String'];
};

export type GetAllPoemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPoemsQuery = { __typename?: 'Query', getAllPoems?: Array<{ __typename?: 'PoemClass', title: string, content: string, slug: string, imageLink: string }> | null | undefined };

export type GetPoemBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPoemBySlugQuery = { __typename?: 'Query', getPoemBySlug?: { __typename?: 'PoemClass', title: string, content: string, hasTitle: boolean, imageLink: string } | null | undefined };


export const GetAllPoemsDocument = gql`
    query getAllPoems {
  getAllPoems {
    title
    content
    slug
    imageLink
  }
}
    `;

/**
 * __useGetAllPoemsQuery__
 *
 * To run a query within a React component, call `useGetAllPoemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPoemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPoemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPoemsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPoemsQuery, GetAllPoemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPoemsQuery, GetAllPoemsQueryVariables>(GetAllPoemsDocument, options);
      }
export function useGetAllPoemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPoemsQuery, GetAllPoemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPoemsQuery, GetAllPoemsQueryVariables>(GetAllPoemsDocument, options);
        }
export type GetAllPoemsQueryHookResult = ReturnType<typeof useGetAllPoemsQuery>;
export type GetAllPoemsLazyQueryHookResult = ReturnType<typeof useGetAllPoemsLazyQuery>;
export type GetAllPoemsQueryResult = Apollo.QueryResult<GetAllPoemsQuery, GetAllPoemsQueryVariables>;
export const GetPoemBySlugDocument = gql`
    query getPoemBySlug($slug: String!) {
  getPoemBySlug(slug: $slug) {
    title
    content
    hasTitle
    imageLink
  }
}
    `;

/**
 * __useGetPoemBySlugQuery__
 *
 * To run a query within a React component, call `useGetPoemBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoemBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoemBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPoemBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetPoemBySlugQuery, GetPoemBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPoemBySlugQuery, GetPoemBySlugQueryVariables>(GetPoemBySlugDocument, options);
      }
export function useGetPoemBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPoemBySlugQuery, GetPoemBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPoemBySlugQuery, GetPoemBySlugQueryVariables>(GetPoemBySlugDocument, options);
        }
export type GetPoemBySlugQueryHookResult = ReturnType<typeof useGetPoemBySlugQuery>;
export type GetPoemBySlugLazyQueryHookResult = ReturnType<typeof useGetPoemBySlugLazyQuery>;
export type GetPoemBySlugQueryResult = Apollo.QueryResult<GetPoemBySlugQuery, GetPoemBySlugQueryVariables>;