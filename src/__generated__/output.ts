import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthType = {
  __typename?: 'AuthType';
  accessToken: Scalars['String']['output'];
  user: UserType;
};

export type CreatePomodoroDto = {
  remainingSeconds: Scalars['Float']['input'];
  status: StatusPomodoro;
  totalSeconds?: InputMaybe<Scalars['Float']['input']>;
  type: TypePomodoro;
};

export type CreateTaskDto = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  estimatedTime?: InputMaybe<Scalars['Float']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  priority?: InputMaybe<Priority>;
  spentTime?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  auth: AuthType;
  createPomodoro: PomodoroType;
  createTask: TaskType;
  createTimeBlock: TimeBlockType;
  deletePomodoro: PomodoroType;
  deleteTask: TaskType;
  deleteTimeBlock: TimeBlockType;
  getNewTokens: Scalars['String']['output'];
  logout: Scalars['Boolean']['output'];
  updatePomodoro: PomodoroType;
  updatePomodoroSettings: PomodoroSettingsType;
  updateProfile: UserType;
  updateTask: TaskType;
  updateTimeBlock: TimeBlockType;
  updateTimeBlockOrders: Array<TimeBlockType>;
};


export type MutationAuthArgs = {
  authInput: AuthDto;
};


export type MutationCreatePomodoroArgs = {
  createPomodoroInput: CreatePomodoroDto;
};


export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskDto;
};


export type MutationCreateTimeBlockArgs = {
  createTimeBlockInput: TimeBlockDto;
};


export type MutationDeletePomodoroArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTimeBlockArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdatePomodoroArgs = {
  id: Scalars['String']['input'];
  updatePomodoroInput: UpdatePomodoroDto;
};


export type MutationUpdatePomodoroSettingsArgs = {
  updatePomodoroSettingsInput: PomodoroSettingsDto;
};


export type MutationUpdateProfileArgs = {
  updateUserInput: UserDto;
};


export type MutationUpdateTaskArgs = {
  id: Scalars['String']['input'];
  updateTaskInput: UpdateTaskDto;
};


export type MutationUpdateTimeBlockArgs = {
  updateTimeBlockInput: TimeBlockDto;
};


export type MutationUpdateTimeBlockOrdersArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type PomodoroSettingsDto = {
  breakInterval: Scalars['Float']['input'];
  longBreakAfter: Scalars['Float']['input'];
  longBreakInterval: Scalars['Float']['input'];
  retentionPeriod: Scalars['Float']['input'];
  workInterval: Scalars['Float']['input'];
};

export type PomodoroSettingsType = {
  __typename?: 'PomodoroSettingsType';
  breakInterval: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  longBreakAfter: Scalars['Float']['output'];
  longBreakInterval: Scalars['Float']['output'];
  retentionPeriod: Scalars['Float']['output'];
  workInterval: Scalars['Float']['output'];
};

export type PomodoroStatisticsType = {
  __typename?: 'PomodoroStatisticsType';
  count: Scalars['Float']['output'];
  date: Scalars['String']['output'];
  minutes: Scalars['Float']['output'];
};

export type PomodoroType = {
  __typename?: 'PomodoroType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  remainingSeconds: Scalars['Float']['output'];
  status: StatusPomodoro;
  totalSeconds: Scalars['Float']['output'];
  type: TypePomodoro;
};

export enum Priority {
  Priority_1 = 'PRIORITY_1',
  Priority_2 = 'PRIORITY_2',
  Priority_3 = 'PRIORITY_3',
  Priority_4 = 'PRIORITY_4'
}

export type Query = {
  __typename?: 'Query';
  getPomodoroStatistics: Array<PomodoroStatisticsType>;
  getTodaySessions: Array<PomodoroType>;
  profile: UserType;
  statistics: StatisticsType;
  tasks: Array<TaskType>;
  timeBlocks: Array<TimeBlockType>;
};


export type QueryGetPomodoroStatisticsArgs = {
  days?: InputMaybe<Scalars['Float']['input']>;
};

export type Statistic = {
  __typename?: 'Statistic';
  label: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type StatisticsType = {
  __typename?: 'StatisticsType';
  statistics: Array<Statistic>;
  user: UserType;
};

export enum StatusPomodoro {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  Paused = 'PAUSED',
  Skipped = 'SKIPPED'
}

export type TaskType = {
  __typename?: 'TaskType';
  createdAt: Scalars['DateTime']['output'];
  estimatedTime?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  isCompleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  priority: Priority;
  spentTime?: Maybe<Scalars['Float']['output']>;
};

export type TimeBlockDto = {
  color: Scalars['String']['input'];
  duration: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  order: Scalars['Float']['input'];
};

export type TimeBlockType = {
  __typename?: 'TimeBlockType';
  color: Scalars['String']['output'];
  duration: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Float']['output'];
};

export enum TypePomodoro {
  Break = 'BREAK',
  LongBreak = 'LONG_BREAK',
  Work = 'WORK'
}

export type UpdatePomodoroDto = {
  remainingSeconds: Scalars['Float']['input'];
  status: StatusPomodoro;
  type: TypePomodoro;
};

export type UpdateTaskDto = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  estimatedTime?: InputMaybe<Scalars['Float']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Priority>;
  spentTime?: InputMaybe<Scalars['Float']['input']>;
};

export type UserDto = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  pomodoroSettings: PomodoroSettingsType;
  pomodoros: Array<PomodoroType>;
  tasks: Array<TaskType>;
  timeBlocks: Array<TimeBlockType>;
};

export type AuthMutationVariables = Exact<{
  input: AuthDto;
}>;


export type AuthMutation = { __typename?: 'Mutation', auth: { __typename?: 'AuthType', accessToken: string } };

export type GetNewTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type GetNewTokensMutation = { __typename?: 'Mutation', token: string };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type CreatePomodoroMutationVariables = Exact<{
  input: CreatePomodoroDto;
}>;


export type CreatePomodoroMutation = { __typename?: 'Mutation', createPomodoro: { __typename?: 'PomodoroType', id: string, createdAt: any, totalSeconds: number, remainingSeconds: number, type: TypePomodoro, status: StatusPomodoro } };

export type DeletePomodoroMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeletePomodoroMutation = { __typename?: 'Mutation', deletePomodoro: { __typename?: 'PomodoroType', id: string, createdAt: any, totalSeconds: number, remainingSeconds: number, type: TypePomodoro, status: StatusPomodoro } };

export type PomodoroFieldsFragment = { __typename?: 'PomodoroType', id: string, createdAt: any, totalSeconds: number, remainingSeconds: number, type: TypePomodoro, status: StatusPomodoro };

export type PomodoroSettingsFieldsFragment = { __typename?: 'PomodoroSettingsType', id: string, workInterval: number, breakInterval: number, longBreakInterval: number, longBreakAfter: number, retentionPeriod: number };

export type GetTodaySessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodaySessionsQuery = { __typename?: 'Query', getTodaySessions: Array<{ __typename?: 'PomodoroType', id: string, createdAt: any, totalSeconds: number, remainingSeconds: number, type: TypePomodoro, status: StatusPomodoro }> };

export type GetPomodoroStatisticsQueryVariables = Exact<{
  days?: InputMaybe<Scalars['Float']['input']>;
}>;


export type GetPomodoroStatisticsQuery = { __typename?: 'Query', getPomodoroStatistics: Array<{ __typename?: 'PomodoroStatisticsType', count: number, date: string, minutes: number }> };

export type UpdatePomodoroSettingsMutationVariables = Exact<{
  input: PomodoroSettingsDto;
}>;


export type UpdatePomodoroSettingsMutation = { __typename?: 'Mutation', updatePomodoroSettings: { __typename?: 'PomodoroSettingsType', id: string, workInterval: number, breakInterval: number, longBreakInterval: number, longBreakAfter: number, retentionPeriod: number } };

export type UpdatePomodoroMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: UpdatePomodoroDto;
}>;


export type UpdatePomodoroMutation = { __typename?: 'Mutation', updatePomodoro: { __typename?: 'PomodoroType', id: string, createdAt: any, totalSeconds: number, remainingSeconds: number, type: TypePomodoro, status: StatusPomodoro } };

export type CreateTaskMutationVariables = Exact<{
  input: CreateTaskDto;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'TaskType', id: string, createdAt: any, name: string, priority: Priority, isCompleted: boolean, estimatedTime?: number | null, spentTime?: number | null } };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'TaskType', id: string, createdAt: any, name: string, priority: Priority, isCompleted: boolean, estimatedTime?: number | null, spentTime?: number | null } };

export type TaskFieldsFragment = { __typename?: 'TaskType', id: string, createdAt: any, name: string, priority: Priority, isCompleted: boolean, estimatedTime?: number | null, spentTime?: number | null };

export type TasksQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'TaskType', id: string, createdAt: any, name: string, priority: Priority, isCompleted: boolean, estimatedTime?: number | null, spentTime?: number | null }> };

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: UpdateTaskDto;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'TaskType', id: string, createdAt: any, name: string, priority: Priority, isCompleted: boolean, estimatedTime?: number | null, spentTime?: number | null } };

export type CreateTimeBlockMutationVariables = Exact<{
  input: TimeBlockDto;
}>;


export type CreateTimeBlockMutation = { __typename?: 'Mutation', createTimeBlock: { __typename?: 'TimeBlockType', id: string, name: string, duration: number, order: number, color: string } };

export type DeleteTimeBlockMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteTimeBlockMutation = { __typename?: 'Mutation', deleteTimeBlock: { __typename?: 'TimeBlockType', id: string, name: string, duration: number, order: number, color: string } };

export type TimeBlockFieldsFragment = { __typename?: 'TimeBlockType', id: string, name: string, duration: number, order: number, color: string };

export type TimeBlocksQueryVariables = Exact<{ [key: string]: never; }>;


export type TimeBlocksQuery = { __typename?: 'Query', timeBlocks: Array<{ __typename?: 'TimeBlockType', id: string, name: string, duration: number, order: number, color: string }> };

export type UpdateTimeBlockOrdersMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type UpdateTimeBlockOrdersMutation = { __typename?: 'Mutation', updateTimeBlockOrders: Array<{ __typename?: 'TimeBlockType', id: string, name: string, duration: number, order: number, color: string }> };

export type UpdateTimeBlockMutationVariables = Exact<{
  input: TimeBlockDto;
}>;


export type UpdateTimeBlockMutation = { __typename?: 'Mutation', updateTimeBlock: { __typename?: 'TimeBlockType', id: string, name: string, duration: number, order: number, color: string } };

export type UserFieldsFragment = { __typename?: 'UserType', id: string, email: string, name?: string | null };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'UserType', id: string, email: string, name?: string | null, pomodoroSettings: { __typename?: 'PomodoroSettingsType', id: string, workInterval: number, breakInterval: number, longBreakInterval: number, longBreakAfter: number, retentionPeriod: number } } };

export type StatisticsFieldsFragment = { __typename?: 'StatisticsType', statistics: Array<{ __typename?: 'Statistic', label: string, value: number }>, user: { __typename?: 'UserType', id: string, email: string, name?: string | null } };

export type StatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type StatisticsQuery = { __typename?: 'Query', statistics: { __typename?: 'StatisticsType', statistics: Array<{ __typename?: 'Statistic', label: string, value: number }>, user: { __typename?: 'UserType', id: string, email: string, name?: string | null } } };

export type UpdateProfileMutationVariables = Exact<{
  input: UserDto;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'UserType', id: string, email: string, name?: string | null } };

export const PomodoroFieldsFragmentDoc = gql`
    fragment PomodoroFields on PomodoroType {
  id
  createdAt
  totalSeconds
  remainingSeconds
  type
  status
}
    `;
export const PomodoroSettingsFieldsFragmentDoc = gql`
    fragment PomodoroSettingsFields on PomodoroSettingsType {
  id
  workInterval
  breakInterval
  longBreakInterval
  longBreakAfter
  retentionPeriod
}
    `;
export const TaskFieldsFragmentDoc = gql`
    fragment TaskFields on TaskType {
  id
  createdAt
  name
  priority
  isCompleted
  estimatedTime
  spentTime
}
    `;
export const TimeBlockFieldsFragmentDoc = gql`
    fragment TimeBlockFields on TimeBlockType {
  id
  name
  duration
  order
  color
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on UserType {
  id
  email
  name
}
    `;
export const StatisticsFieldsFragmentDoc = gql`
    fragment StatisticsFields on StatisticsType {
  statistics {
    label
    value
  }
  user {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const AuthDocument = gql`
    mutation Auth($input: AuthDto!) {
  auth(authInput: $input) {
    accessToken
  }
}
    `;
export type AuthMutationFn = Apollo.MutationFunction<AuthMutation, AuthMutationVariables>;

/**
 * __useAuthMutation__
 *
 * To run a mutation, you first call `useAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMutation, { data, loading, error }] = useAuthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthMutation(baseOptions?: Apollo.MutationHookOptions<AuthMutation, AuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthMutation, AuthMutationVariables>(AuthDocument, options);
      }
export type AuthMutationHookResult = ReturnType<typeof useAuthMutation>;
export type AuthMutationResult = Apollo.MutationResult<AuthMutation>;
export type AuthMutationOptions = Apollo.BaseMutationOptions<AuthMutation, AuthMutationVariables>;
export const GetNewTokensDocument = gql`
    mutation GetNewTokens {
  token: getNewTokens
}
    `;
export type GetNewTokensMutationFn = Apollo.MutationFunction<GetNewTokensMutation, GetNewTokensMutationVariables>;

/**
 * __useGetNewTokensMutation__
 *
 * To run a mutation, you first call `useGetNewTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetNewTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getNewTokensMutation, { data, loading, error }] = useGetNewTokensMutation({
 *   variables: {
 *   },
 * });
 */
export function useGetNewTokensMutation(baseOptions?: Apollo.MutationHookOptions<GetNewTokensMutation, GetNewTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetNewTokensMutation, GetNewTokensMutationVariables>(GetNewTokensDocument, options);
      }
export type GetNewTokensMutationHookResult = ReturnType<typeof useGetNewTokensMutation>;
export type GetNewTokensMutationResult = Apollo.MutationResult<GetNewTokensMutation>;
export type GetNewTokensMutationOptions = Apollo.BaseMutationOptions<GetNewTokensMutation, GetNewTokensMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreatePomodoroDocument = gql`
    mutation CreatePomodoro($input: CreatePomodoroDto!) {
  createPomodoro(createPomodoroInput: $input) {
    ...PomodoroFields
  }
}
    ${PomodoroFieldsFragmentDoc}`;
export type CreatePomodoroMutationFn = Apollo.MutationFunction<CreatePomodoroMutation, CreatePomodoroMutationVariables>;

/**
 * __useCreatePomodoroMutation__
 *
 * To run a mutation, you first call `useCreatePomodoroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePomodoroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPomodoroMutation, { data, loading, error }] = useCreatePomodoroMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePomodoroMutation(baseOptions?: Apollo.MutationHookOptions<CreatePomodoroMutation, CreatePomodoroMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePomodoroMutation, CreatePomodoroMutationVariables>(CreatePomodoroDocument, options);
      }
export type CreatePomodoroMutationHookResult = ReturnType<typeof useCreatePomodoroMutation>;
export type CreatePomodoroMutationResult = Apollo.MutationResult<CreatePomodoroMutation>;
export type CreatePomodoroMutationOptions = Apollo.BaseMutationOptions<CreatePomodoroMutation, CreatePomodoroMutationVariables>;
export const DeletePomodoroDocument = gql`
    mutation DeletePomodoro($id: String!) {
  deletePomodoro(id: $id) {
    ...PomodoroFields
  }
}
    ${PomodoroFieldsFragmentDoc}`;
export type DeletePomodoroMutationFn = Apollo.MutationFunction<DeletePomodoroMutation, DeletePomodoroMutationVariables>;

/**
 * __useDeletePomodoroMutation__
 *
 * To run a mutation, you first call `useDeletePomodoroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePomodoroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePomodoroMutation, { data, loading, error }] = useDeletePomodoroMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePomodoroMutation(baseOptions?: Apollo.MutationHookOptions<DeletePomodoroMutation, DeletePomodoroMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePomodoroMutation, DeletePomodoroMutationVariables>(DeletePomodoroDocument, options);
      }
export type DeletePomodoroMutationHookResult = ReturnType<typeof useDeletePomodoroMutation>;
export type DeletePomodoroMutationResult = Apollo.MutationResult<DeletePomodoroMutation>;
export type DeletePomodoroMutationOptions = Apollo.BaseMutationOptions<DeletePomodoroMutation, DeletePomodoroMutationVariables>;
export const GetTodaySessionsDocument = gql`
    query GetTodaySessions {
  getTodaySessions {
    ...PomodoroFields
  }
}
    ${PomodoroFieldsFragmentDoc}`;

/**
 * __useGetTodaySessionsQuery__
 *
 * To run a query within a React component, call `useGetTodaySessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodaySessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodaySessionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodaySessionsQuery(baseOptions?: Apollo.QueryHookOptions<GetTodaySessionsQuery, GetTodaySessionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodaySessionsQuery, GetTodaySessionsQueryVariables>(GetTodaySessionsDocument, options);
      }
export function useGetTodaySessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodaySessionsQuery, GetTodaySessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodaySessionsQuery, GetTodaySessionsQueryVariables>(GetTodaySessionsDocument, options);
        }
export function useGetTodaySessionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTodaySessionsQuery, GetTodaySessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTodaySessionsQuery, GetTodaySessionsQueryVariables>(GetTodaySessionsDocument, options);
        }
export type GetTodaySessionsQueryHookResult = ReturnType<typeof useGetTodaySessionsQuery>;
export type GetTodaySessionsLazyQueryHookResult = ReturnType<typeof useGetTodaySessionsLazyQuery>;
export type GetTodaySessionsSuspenseQueryHookResult = ReturnType<typeof useGetTodaySessionsSuspenseQuery>;
export type GetTodaySessionsQueryResult = Apollo.QueryResult<GetTodaySessionsQuery, GetTodaySessionsQueryVariables>;
export const GetPomodoroStatisticsDocument = gql`
    query GetPomodoroStatistics($days: Float) {
  getPomodoroStatistics(days: $days) {
    count
    date
    minutes
  }
}
    `;

/**
 * __useGetPomodoroStatisticsQuery__
 *
 * To run a query within a React component, call `useGetPomodoroStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPomodoroStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPomodoroStatisticsQuery({
 *   variables: {
 *      days: // value for 'days'
 *   },
 * });
 */
export function useGetPomodoroStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<GetPomodoroStatisticsQuery, GetPomodoroStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPomodoroStatisticsQuery, GetPomodoroStatisticsQueryVariables>(GetPomodoroStatisticsDocument, options);
      }
export function useGetPomodoroStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPomodoroStatisticsQuery, GetPomodoroStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPomodoroStatisticsQuery, GetPomodoroStatisticsQueryVariables>(GetPomodoroStatisticsDocument, options);
        }
export function useGetPomodoroStatisticsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPomodoroStatisticsQuery, GetPomodoroStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPomodoroStatisticsQuery, GetPomodoroStatisticsQueryVariables>(GetPomodoroStatisticsDocument, options);
        }
export type GetPomodoroStatisticsQueryHookResult = ReturnType<typeof useGetPomodoroStatisticsQuery>;
export type GetPomodoroStatisticsLazyQueryHookResult = ReturnType<typeof useGetPomodoroStatisticsLazyQuery>;
export type GetPomodoroStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetPomodoroStatisticsSuspenseQuery>;
export type GetPomodoroStatisticsQueryResult = Apollo.QueryResult<GetPomodoroStatisticsQuery, GetPomodoroStatisticsQueryVariables>;
export const UpdatePomodoroSettingsDocument = gql`
    mutation UpdatePomodoroSettings($input: PomodoroSettingsDto!) {
  updatePomodoroSettings(updatePomodoroSettingsInput: $input) {
    ...PomodoroSettingsFields
  }
}
    ${PomodoroSettingsFieldsFragmentDoc}`;
export type UpdatePomodoroSettingsMutationFn = Apollo.MutationFunction<UpdatePomodoroSettingsMutation, UpdatePomodoroSettingsMutationVariables>;

/**
 * __useUpdatePomodoroSettingsMutation__
 *
 * To run a mutation, you first call `useUpdatePomodoroSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePomodoroSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePomodoroSettingsMutation, { data, loading, error }] = useUpdatePomodoroSettingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePomodoroSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePomodoroSettingsMutation, UpdatePomodoroSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePomodoroSettingsMutation, UpdatePomodoroSettingsMutationVariables>(UpdatePomodoroSettingsDocument, options);
      }
export type UpdatePomodoroSettingsMutationHookResult = ReturnType<typeof useUpdatePomodoroSettingsMutation>;
export type UpdatePomodoroSettingsMutationResult = Apollo.MutationResult<UpdatePomodoroSettingsMutation>;
export type UpdatePomodoroSettingsMutationOptions = Apollo.BaseMutationOptions<UpdatePomodoroSettingsMutation, UpdatePomodoroSettingsMutationVariables>;
export const UpdatePomodoroDocument = gql`
    mutation UpdatePomodoro($id: String!, $input: UpdatePomodoroDto!) {
  updatePomodoro(id: $id, updatePomodoroInput: $input) {
    ...PomodoroFields
  }
}
    ${PomodoroFieldsFragmentDoc}`;
export type UpdatePomodoroMutationFn = Apollo.MutationFunction<UpdatePomodoroMutation, UpdatePomodoroMutationVariables>;

/**
 * __useUpdatePomodoroMutation__
 *
 * To run a mutation, you first call `useUpdatePomodoroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePomodoroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePomodoroMutation, { data, loading, error }] = useUpdatePomodoroMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePomodoroMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePomodoroMutation, UpdatePomodoroMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePomodoroMutation, UpdatePomodoroMutationVariables>(UpdatePomodoroDocument, options);
      }
export type UpdatePomodoroMutationHookResult = ReturnType<typeof useUpdatePomodoroMutation>;
export type UpdatePomodoroMutationResult = Apollo.MutationResult<UpdatePomodoroMutation>;
export type UpdatePomodoroMutationOptions = Apollo.BaseMutationOptions<UpdatePomodoroMutation, UpdatePomodoroMutationVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($input: CreateTaskDto!) {
  createTask(createTaskInput: $input) {
    ...TaskFields
  }
}
    ${TaskFieldsFragmentDoc}`;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: String!) {
  deleteTask(id: $id) {
    ...TaskFields
  }
}
    ${TaskFieldsFragmentDoc}`;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const TasksDocument = gql`
    query Tasks {
  tasks {
    ...TaskFields
  }
}
    ${TaskFieldsFragmentDoc}`;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
      }
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export function useTasksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksSuspenseQueryHookResult = ReturnType<typeof useTasksSuspenseQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($id: String!, $input: UpdateTaskDto!) {
  updateTask(id: $id, updateTaskInput: $input) {
    ...TaskFields
  }
}
    ${TaskFieldsFragmentDoc}`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const CreateTimeBlockDocument = gql`
    mutation CreateTimeBlock($input: TimeBlockDto!) {
  createTimeBlock(createTimeBlockInput: $input) {
    ...TimeBlockFields
  }
}
    ${TimeBlockFieldsFragmentDoc}`;
export type CreateTimeBlockMutationFn = Apollo.MutationFunction<CreateTimeBlockMutation, CreateTimeBlockMutationVariables>;

/**
 * __useCreateTimeBlockMutation__
 *
 * To run a mutation, you first call `useCreateTimeBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTimeBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTimeBlockMutation, { data, loading, error }] = useCreateTimeBlockMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTimeBlockMutation(baseOptions?: Apollo.MutationHookOptions<CreateTimeBlockMutation, CreateTimeBlockMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTimeBlockMutation, CreateTimeBlockMutationVariables>(CreateTimeBlockDocument, options);
      }
export type CreateTimeBlockMutationHookResult = ReturnType<typeof useCreateTimeBlockMutation>;
export type CreateTimeBlockMutationResult = Apollo.MutationResult<CreateTimeBlockMutation>;
export type CreateTimeBlockMutationOptions = Apollo.BaseMutationOptions<CreateTimeBlockMutation, CreateTimeBlockMutationVariables>;
export const DeleteTimeBlockDocument = gql`
    mutation DeleteTimeBlock($id: String!) {
  deleteTimeBlock(id: $id) {
    ...TimeBlockFields
  }
}
    ${TimeBlockFieldsFragmentDoc}`;
export type DeleteTimeBlockMutationFn = Apollo.MutationFunction<DeleteTimeBlockMutation, DeleteTimeBlockMutationVariables>;

/**
 * __useDeleteTimeBlockMutation__
 *
 * To run a mutation, you first call `useDeleteTimeBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTimeBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTimeBlockMutation, { data, loading, error }] = useDeleteTimeBlockMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTimeBlockMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTimeBlockMutation, DeleteTimeBlockMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTimeBlockMutation, DeleteTimeBlockMutationVariables>(DeleteTimeBlockDocument, options);
      }
export type DeleteTimeBlockMutationHookResult = ReturnType<typeof useDeleteTimeBlockMutation>;
export type DeleteTimeBlockMutationResult = Apollo.MutationResult<DeleteTimeBlockMutation>;
export type DeleteTimeBlockMutationOptions = Apollo.BaseMutationOptions<DeleteTimeBlockMutation, DeleteTimeBlockMutationVariables>;
export const TimeBlocksDocument = gql`
    query TimeBlocks {
  timeBlocks {
    ...TimeBlockFields
  }
}
    ${TimeBlockFieldsFragmentDoc}`;

/**
 * __useTimeBlocksQuery__
 *
 * To run a query within a React component, call `useTimeBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimeBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimeBlocksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTimeBlocksQuery(baseOptions?: Apollo.QueryHookOptions<TimeBlocksQuery, TimeBlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimeBlocksQuery, TimeBlocksQueryVariables>(TimeBlocksDocument, options);
      }
export function useTimeBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimeBlocksQuery, TimeBlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimeBlocksQuery, TimeBlocksQueryVariables>(TimeBlocksDocument, options);
        }
export function useTimeBlocksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TimeBlocksQuery, TimeBlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TimeBlocksQuery, TimeBlocksQueryVariables>(TimeBlocksDocument, options);
        }
export type TimeBlocksQueryHookResult = ReturnType<typeof useTimeBlocksQuery>;
export type TimeBlocksLazyQueryHookResult = ReturnType<typeof useTimeBlocksLazyQuery>;
export type TimeBlocksSuspenseQueryHookResult = ReturnType<typeof useTimeBlocksSuspenseQuery>;
export type TimeBlocksQueryResult = Apollo.QueryResult<TimeBlocksQuery, TimeBlocksQueryVariables>;
export const UpdateTimeBlockOrdersDocument = gql`
    mutation UpdateTimeBlockOrders($ids: [String!]!) {
  updateTimeBlockOrders(ids: $ids) {
    ...TimeBlockFields
  }
}
    ${TimeBlockFieldsFragmentDoc}`;
export type UpdateTimeBlockOrdersMutationFn = Apollo.MutationFunction<UpdateTimeBlockOrdersMutation, UpdateTimeBlockOrdersMutationVariables>;

/**
 * __useUpdateTimeBlockOrdersMutation__
 *
 * To run a mutation, you first call `useUpdateTimeBlockOrdersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTimeBlockOrdersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTimeBlockOrdersMutation, { data, loading, error }] = useUpdateTimeBlockOrdersMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useUpdateTimeBlockOrdersMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTimeBlockOrdersMutation, UpdateTimeBlockOrdersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTimeBlockOrdersMutation, UpdateTimeBlockOrdersMutationVariables>(UpdateTimeBlockOrdersDocument, options);
      }
export type UpdateTimeBlockOrdersMutationHookResult = ReturnType<typeof useUpdateTimeBlockOrdersMutation>;
export type UpdateTimeBlockOrdersMutationResult = Apollo.MutationResult<UpdateTimeBlockOrdersMutation>;
export type UpdateTimeBlockOrdersMutationOptions = Apollo.BaseMutationOptions<UpdateTimeBlockOrdersMutation, UpdateTimeBlockOrdersMutationVariables>;
export const UpdateTimeBlockDocument = gql`
    mutation UpdateTimeBlock($input: TimeBlockDto!) {
  updateTimeBlock(updateTimeBlockInput: $input) {
    ...TimeBlockFields
  }
}
    ${TimeBlockFieldsFragmentDoc}`;
export type UpdateTimeBlockMutationFn = Apollo.MutationFunction<UpdateTimeBlockMutation, UpdateTimeBlockMutationVariables>;

/**
 * __useUpdateTimeBlockMutation__
 *
 * To run a mutation, you first call `useUpdateTimeBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTimeBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTimeBlockMutation, { data, loading, error }] = useUpdateTimeBlockMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTimeBlockMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTimeBlockMutation, UpdateTimeBlockMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTimeBlockMutation, UpdateTimeBlockMutationVariables>(UpdateTimeBlockDocument, options);
      }
export type UpdateTimeBlockMutationHookResult = ReturnType<typeof useUpdateTimeBlockMutation>;
export type UpdateTimeBlockMutationResult = Apollo.MutationResult<UpdateTimeBlockMutation>;
export type UpdateTimeBlockMutationOptions = Apollo.BaseMutationOptions<UpdateTimeBlockMutation, UpdateTimeBlockMutationVariables>;
export const ProfileDocument = gql`
    query Profile {
  profile {
    ...UserFields
    pomodoroSettings {
      ...PomodoroSettingsFields
    }
  }
}
    ${UserFieldsFragmentDoc}
${PomodoroSettingsFieldsFragmentDoc}`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export function useProfileSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileSuspenseQueryHookResult = ReturnType<typeof useProfileSuspenseQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const StatisticsDocument = gql`
    query Statistics {
  statistics {
    ...StatisticsFields
  }
}
    ${StatisticsFieldsFragmentDoc}`;

/**
 * __useStatisticsQuery__
 *
 * To run a query within a React component, call `useStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<StatisticsQuery, StatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StatisticsQuery, StatisticsQueryVariables>(StatisticsDocument, options);
      }
export function useStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatisticsQuery, StatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StatisticsQuery, StatisticsQueryVariables>(StatisticsDocument, options);
        }
export function useStatisticsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StatisticsQuery, StatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StatisticsQuery, StatisticsQueryVariables>(StatisticsDocument, options);
        }
export type StatisticsQueryHookResult = ReturnType<typeof useStatisticsQuery>;
export type StatisticsLazyQueryHookResult = ReturnType<typeof useStatisticsLazyQuery>;
export type StatisticsSuspenseQueryHookResult = ReturnType<typeof useStatisticsSuspenseQuery>;
export type StatisticsQueryResult = Apollo.QueryResult<StatisticsQuery, StatisticsQueryVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($input: UserDto!) {
  updateProfile(updateUserInput: $input) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;