export function UsersTable(): JSX.Element {
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
          <tr>
            <th scope="row">1</th>
            <td>John</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
