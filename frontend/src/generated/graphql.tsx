import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: "AdminUser";
  firstname: Scalars["String"];
  id: Scalars["ID"];
  lastname: Scalars["String"];
  username?: Maybe<Scalars["String"]>;
};

export type Article = {
  __typename?: "Article";
  content: Scalars["String"];
  created_at: Scalars["DateTime"];
  description: Scalars["String"];
  id: Scalars["ID"];
  image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars["DateTime"]>;
  slug: Scalars["String"];
  title: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type ArticleAggregator = {
  __typename?: "ArticleAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ArticleConnection = {
  __typename?: "ArticleConnection";
  aggregate?: Maybe<ArticleAggregator>;
  groupBy?: Maybe<ArticleGroupBy>;
  values?: Maybe<Array<Maybe<Article>>>;
};

export type ArticleConnectionContent = {
  __typename?: "ArticleConnectionContent";
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type ArticleConnectionCreated_At = {
  __typename?: "ArticleConnectionCreated_at";
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type ArticleConnectionDescription = {
  __typename?: "ArticleConnectionDescription";
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type ArticleConnectionId = {
  __typename?: "ArticleConnectionId";
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type ArticleConnectionImage = {
  __typename?: "ArticleConnectionImage";
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type ArticleConnectionPublished_At = {
  __typename?: "ArticleConnectionPublished_at";
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type ArticleConnectionSlug = {
  __typename?: "ArticleConnectionSlug";
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type ArticleConnectionTitle = {
  __typename?: "ArticleConnectionTitle";
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type ArticleConnectionUpdated_At = {
  __typename?: "ArticleConnectionUpdated_at";
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type ArticleGroupBy = {
  __typename?: "ArticleGroupBy";
  content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
  created_at?: Maybe<Array<Maybe<ArticleConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ArticleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  image?: Maybe<Array<Maybe<ArticleConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<ArticleConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<ArticleConnectionSlug>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<ArticleConnectionUpdated_At>>>;
};

export type ArticleInput = {
  content: Scalars["String"];
  created_by?: Maybe<Scalars["ID"]>;
  description: Scalars["String"];
  image?: Maybe<Scalars["ID"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  slug: Scalars["String"];
  title: Scalars["String"];
  updated_by?: Maybe<Scalars["ID"]>;
};

export type ComponentSectionsHero = {
  __typename?: "ComponentSectionsHero";
  id: Scalars["ID"];
  title: Scalars["String"];
};

export type ComponentSectionsHeroInput = {
  title: Scalars["String"];
};

export type ComponentSharedSeo = {
  __typename?: "ComponentSharedSeo";
  id: Scalars["ID"];
  metaDescription: Scalars["String"];
  metaTitle: Scalars["String"];
  shareImage?: Maybe<UploadFile>;
};

export type ComponentSharedSeoInput = {
  metaDescription: Scalars["String"];
  metaTitle: Scalars["String"];
  shareImage?: Maybe<Scalars["ID"]>;
};

export type FileInfoInput = {
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FileInput = {
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  size: Scalars["Float"];
  updated_by?: Maybe<Scalars["ID"]>;
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export type Global = {
  __typename?: "Global";
  created_at: Scalars["DateTime"];
  defaultSeo?: Maybe<ComponentSharedSeo>;
  favicon?: Maybe<UploadFile>;
  id: Scalars["ID"];
  siteName: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type GlobalInput = {
  created_by?: Maybe<Scalars["ID"]>;
  defaultSeo: ComponentSharedSeoInput;
  favicon?: Maybe<Scalars["ID"]>;
  siteName: Scalars["String"];
  updated_by?: Maybe<Scalars["ID"]>;
};

export type Homepage = {
  __typename?: "Homepage";
  created_at: Scalars["DateTime"];
  hero?: Maybe<ComponentSectionsHero>;
  id: Scalars["ID"];
  seo?: Maybe<ComponentSharedSeo>;
  updated_at: Scalars["DateTime"];
};

export type HomepageInput = {
  created_by?: Maybe<Scalars["ID"]>;
  hero: ComponentSectionsHeroInput;
  seo?: Maybe<ComponentSharedSeoInput>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
};

export type InputId = {
  id: Scalars["ID"];
};

export type LocaleInput = {
  code?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type Morph =
  | Article
  | ArticleAggregator
  | ArticleConnection
  | ArticleConnectionContent
  | ArticleConnectionCreated_At
  | ArticleConnectionDescription
  | ArticleConnectionId
  | ArticleConnectionImage
  | ArticleConnectionPublished_At
  | ArticleConnectionSlug
  | ArticleConnectionTitle
  | ArticleConnectionUpdated_At
  | ArticleGroupBy
  | ComponentSectionsHero
  | ComponentSharedSeo
  | Global
  | Homepage
  | I18NLocale
  | UploadFile
  | UploadFileAggregator
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMax
  | UploadFileAggregatorMin
  | UploadFileAggregatorSum
  | UploadFileConnection
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionCreated_At
  | UploadFileConnectionExt
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionHeight
  | UploadFileConnectionId
  | UploadFileConnectionMime
  | UploadFileConnectionName
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | UploadFileConnectionSize
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionUrl
  | UploadFileConnectionWidth
  | UploadFileGroupBy
  | UserPermissionsPasswordPayload
  | UsersPermissionsLoginPayload
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsUser
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserConnection
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserGroupBy
  | CreateArticlePayload
  | CreateRolePayload
  | CreateUserPayload
  | DeleteArticlePayload
  | DeleteFilePayload
  | DeleteGlobalPayload
  | DeleteHomepagePayload
  | DeleteRolePayload
  | DeleteUserPayload
  | UpdateArticlePayload
  | UpdateGlobalPayload
  | UpdateHomepagePayload
  | UpdateRolePayload
  | UpdateUserPayload;

export type Mutation = {
  __typename?: "Mutation";
  createArticle?: Maybe<CreateArticlePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGlobal?: Maybe<DeleteGlobalPayload>;
  deleteHomepage?: Maybe<DeleteHomepagePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<UpdateArticlePayload>;
  updateFileInfo: UploadFile;
  updateGlobal?: Maybe<UpdateGlobalPayload>;
  updateHomepage?: Maybe<UpdateHomepagePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};

export type MutationCreateArticleArgs = {
  input?: Maybe<CreateArticleInput>;
};

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};

export type MutationDeleteArticleArgs = {
  input?: Maybe<DeleteArticleInput>;
};

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars["String"]>;
  files: Array<Maybe<Scalars["Upload"]>>;
  ref?: Maybe<Scalars["String"]>;
  refId?: Maybe<Scalars["ID"]>;
  source?: Maybe<Scalars["String"]>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationUpdateArticleArgs = {
  input?: Maybe<UpdateArticleInput>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info: FileInfoInput;
};

export type MutationUpdateGlobalArgs = {
  input?: Maybe<UpdateGlobalInput>;
};

export type MutationUpdateHomepageArgs = {
  input?: Maybe<UpdateHomepageInput>;
};

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};

export type MutationUploadArgs = {
  field?: Maybe<Scalars["String"]>;
  file: Scalars["Upload"];
  info?: Maybe<FileInfoInput>;
  ref?: Maybe<Scalars["String"]>;
  refId?: Maybe<Scalars["ID"]>;
  source?: Maybe<Scalars["String"]>;
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  __typename?: "Query";
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  global?: Maybe<Global>;
  homepage?: Maybe<Homepage>;
  me?: Maybe<UsersPermissionsMe>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};

export type QueryArticleArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryArticlesArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryArticlesConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryFilesArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryGlobalArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryHomepageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryRoleArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type RoleInput = {
  created_by?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  type?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
  users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars["Float"];
  updated_at: Scalars["DateTime"];
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UploadFileAggregator = {
  __typename?: "UploadFileAggregator";
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UploadFileAggregatorAvg = {
  __typename?: "UploadFileAggregatorAvg";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMax = {
  __typename?: "UploadFileAggregatorMax";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMin = {
  __typename?: "UploadFileAggregatorMin";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorSum = {
  __typename?: "UploadFileAggregatorSum";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileConnection = {
  __typename?: "UploadFileConnection";
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: "UploadFileConnectionAlternativeText";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionCaption = {
  __typename?: "UploadFileConnectionCaption";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: "UploadFileConnectionCreated_at";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UploadFileConnectionExt = {
  __typename?: "UploadFileConnectionExt";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionFormats = {
  __typename?: "UploadFileConnectionFormats";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["JSON"]>;
};

export type UploadFileConnectionHash = {
  __typename?: "UploadFileConnectionHash";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionHeight = {
  __typename?: "UploadFileConnectionHeight";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type UploadFileConnectionId = {
  __typename?: "UploadFileConnectionId";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UploadFileConnectionMime = {
  __typename?: "UploadFileConnectionMime";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionName = {
  __typename?: "UploadFileConnectionName";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: "UploadFileConnectionPreviewUrl";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionProvider = {
  __typename?: "UploadFileConnectionProvider";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: "UploadFileConnectionProvider_metadata";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["JSON"]>;
};

export type UploadFileConnectionSize = {
  __typename?: "UploadFileConnectionSize";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Float"]>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: "UploadFileConnectionUpdated_at";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UploadFileConnectionUrl = {
  __typename?: "UploadFileConnectionUrl";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionWidth = {
  __typename?: "UploadFileConnectionWidth";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type UploadFileGroupBy = {
  __typename?: "UploadFileGroupBy";
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<
    Array<Maybe<UploadFileConnectionProvider_Metadata>>
  >;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmationToken?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  created_by?: Maybe<Scalars["ID"]>;
  email: Scalars["String"];
  password?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
  username: Scalars["String"];
};

export type UserPermissionsPasswordPayload = {
  __typename?: "UserPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  email: Scalars["String"];
  id: Scalars["ID"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"];
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  controller: Scalars["String"];
  enabled: Scalars["Boolean"];
  id: Scalars["ID"];
  policy?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars["String"];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: "UsersPermissionsRoleAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: "UsersPermissionsRoleConnection";
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: "UsersPermissionsRoleConnectionDescription";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: "UsersPermissionsRoleConnectionId";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: "UsersPermissionsRoleConnectionName";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: "UsersPermissionsRoleConnectionType";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: "UsersPermissionsRoleGroupBy";
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  created_at: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  provider?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars["DateTime"];
  username: Scalars["String"];
};

export type UsersPermissionsUserAggregator = {
  __typename?: "UsersPermissionsUserAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsUserConnection = {
  __typename?: "UsersPermissionsUserConnection";
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: "UsersPermissionsUserConnectionBlocked";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: "UsersPermissionsUserConnectionConfirmed";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: "UsersPermissionsUserConnectionCreated_at";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: "UsersPermissionsUserConnectionEmail";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: "UsersPermissionsUserConnectionId";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: "UsersPermissionsUserConnectionProvider";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: "UsersPermissionsUserConnectionRole";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: "UsersPermissionsUserConnectionUpdated_at";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: "UsersPermissionsUserConnectionUsername";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: "UsersPermissionsUserGroupBy";
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateArticleInput = {
  data?: Maybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: "createArticlePayload";
  article?: Maybe<Article>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: "createRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: "createUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: "deleteArticlePayload";
  article?: Maybe<Article>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: "deleteFilePayload";
  file?: Maybe<UploadFile>;
};

export type DeleteGlobalPayload = {
  __typename?: "deleteGlobalPayload";
  global?: Maybe<Global>;
};

export type DeleteHomepagePayload = {
  __typename?: "deleteHomepagePayload";
  homepage?: Maybe<Homepage>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: "deleteRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: "deleteUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type EditArticleInput = {
  content?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["ID"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditComponentSectionsHeroInput = {
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
};

export type EditComponentSharedSeoInput = {
  id?: Maybe<Scalars["ID"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  shareImage?: Maybe<Scalars["ID"]>;
};

export type EditFileInput = {
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  mime?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  previewUrl?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  size?: Maybe<Scalars["Float"]>;
  updated_by?: Maybe<Scalars["ID"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type EditGlobalInput = {
  created_by?: Maybe<Scalars["ID"]>;
  defaultSeo?: Maybe<EditComponentSharedSeoInput>;
  favicon?: Maybe<Scalars["ID"]>;
  siteName?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditHomepageInput = {
  created_by?: Maybe<Scalars["ID"]>;
  hero?: Maybe<EditComponentSectionsHeroInput>;
  seo?: Maybe<EditComponentSharedSeoInput>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditLocaleInput = {
  code?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditRoleInput = {
  created_by?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  type?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
  users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type EditUserInput = {
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmationToken?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  created_by?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
  username?: Maybe<Scalars["String"]>;
};

export type UpdateArticleInput = {
  data?: Maybe<EditArticleInput>;
  where?: Maybe<InputId>;
};

export type UpdateArticlePayload = {
  __typename?: "updateArticlePayload";
  article?: Maybe<Article>;
};

export type UpdateGlobalInput = {
  data?: Maybe<EditGlobalInput>;
};

export type UpdateGlobalPayload = {
  __typename?: "updateGlobalPayload";
  global?: Maybe<Global>;
};

export type UpdateHomepageInput = {
  data?: Maybe<EditHomepageInput>;
};

export type UpdateHomepagePayload = {
  __typename?: "updateHomepagePayload";
  homepage?: Maybe<Homepage>;
};

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>;
  where?: Maybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: "updateRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>;
  where?: Maybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: "updateUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type GetArticlesQueryVariables = Exact<{ [key: string]: never }>;

export type GetArticlesQuery = {
  __typename?: "Query";
  articles?:
    | Array<{ __typename?: "Article"; title: string } | null | undefined>
    | null
    | undefined;
};

export const GetArticlesDocument = gql`
  query getArticles {
    articles(limit: 1) {
      title
    }
  }
`;

/**
 * __useGetArticlesQuery__
 *
 * To run a query within a React component, call `useGetArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetArticlesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetArticlesQuery, GetArticlesQueryVariables>(
    GetArticlesDocument,
    options
  );
}
export function useGetArticlesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetArticlesQuery, GetArticlesQueryVariables>(
    GetArticlesDocument,
    options
  );
}
export type GetArticlesQueryHookResult = ReturnType<typeof useGetArticlesQuery>;
export type GetArticlesLazyQueryHookResult = ReturnType<
  typeof useGetArticlesLazyQuery
>;
export type GetArticlesQueryResult = Apollo.QueryResult<
  GetArticlesQuery,
  GetArticlesQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Morph: [
      "Article",
      "ArticleAggregator",
      "ArticleConnection",
      "ArticleConnectionContent",
      "ArticleConnectionCreated_at",
      "ArticleConnectionDescription",
      "ArticleConnectionId",
      "ArticleConnectionImage",
      "ArticleConnectionPublished_at",
      "ArticleConnectionSlug",
      "ArticleConnectionTitle",
      "ArticleConnectionUpdated_at",
      "ArticleGroupBy",
      "ComponentSectionsHero",
      "ComponentSharedSeo",
      "Global",
      "Homepage",
      "I18NLocale",
      "UploadFile",
      "UploadFileAggregator",
      "UploadFileAggregatorAvg",
      "UploadFileAggregatorMax",
      "UploadFileAggregatorMin",
      "UploadFileAggregatorSum",
      "UploadFileConnection",
      "UploadFileConnectionAlternativeText",
      "UploadFileConnectionCaption",
      "UploadFileConnectionCreated_at",
      "UploadFileConnectionExt",
      "UploadFileConnectionFormats",
      "UploadFileConnectionHash",
      "UploadFileConnectionHeight",
      "UploadFileConnectionId",
      "UploadFileConnectionMime",
      "UploadFileConnectionName",
      "UploadFileConnectionPreviewUrl",
      "UploadFileConnectionProvider",
      "UploadFileConnectionProvider_metadata",
      "UploadFileConnectionSize",
      "UploadFileConnectionUpdated_at",
      "UploadFileConnectionUrl",
      "UploadFileConnectionWidth",
      "UploadFileGroupBy",
      "UserPermissionsPasswordPayload",
      "UsersPermissionsLoginPayload",
      "UsersPermissionsMe",
      "UsersPermissionsMeRole",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsRoleAggregator",
      "UsersPermissionsRoleConnection",
      "UsersPermissionsRoleConnectionDescription",
      "UsersPermissionsRoleConnectionId",
      "UsersPermissionsRoleConnectionName",
      "UsersPermissionsRoleConnectionType",
      "UsersPermissionsRoleGroupBy",
      "UsersPermissionsUser",
      "UsersPermissionsUserAggregator",
      "UsersPermissionsUserConnection",
      "UsersPermissionsUserConnectionBlocked",
      "UsersPermissionsUserConnectionConfirmed",
      "UsersPermissionsUserConnectionCreated_at",
      "UsersPermissionsUserConnectionEmail",
      "UsersPermissionsUserConnectionId",
      "UsersPermissionsUserConnectionProvider",
      "UsersPermissionsUserConnectionRole",
      "UsersPermissionsUserConnectionUpdated_at",
      "UsersPermissionsUserConnectionUsername",
      "UsersPermissionsUserGroupBy",
      "createArticlePayload",
      "createRolePayload",
      "createUserPayload",
      "deleteArticlePayload",
      "deleteFilePayload",
      "deleteGlobalPayload",
      "deleteHomepagePayload",
      "deleteRolePayload",
      "deleteUserPayload",
      "updateArticlePayload",
      "updateGlobalPayload",
      "updateHomepagePayload",
      "updateRolePayload",
      "updateUserPayload",
    ],
  },
};
export default result;
