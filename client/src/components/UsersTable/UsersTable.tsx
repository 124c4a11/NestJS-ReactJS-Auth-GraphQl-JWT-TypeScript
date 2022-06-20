import { useGetUsersQuery } from '../../graphql/generated';

export function UsersTable(): JSX.Element {
  const { loading, error, data } = useGetUsersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.users.length ? (
            <>
              {data.users.map(({ id, name }) => (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                </tr>
              ))}
            </>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
