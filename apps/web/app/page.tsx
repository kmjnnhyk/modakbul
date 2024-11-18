"use client";

import { useGetUsersQuery } from "../gql/graphql";

export default function Page() {
  const { loading, error, data } = useGetUsersQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.users.map((post, index) => {
        return <li key={index}>{post.email}</li>;
      })}
    </ul>
  );
}
