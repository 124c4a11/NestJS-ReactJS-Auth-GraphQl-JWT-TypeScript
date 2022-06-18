import { useState } from 'react';

export function LoginModal(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function onSubmit() {}

  return (
    <>
      <button
        type="button"
        className="btn btn-success btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#LoginModal"
      >
        Log In
      </button>

      <div
        className="modal fade"
        id="LoginModal"
        tabIndex={-1}
        aria-labelledby="LoginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="LoginModalLabel">
                Log In
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    value={password}
                    type="text"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
