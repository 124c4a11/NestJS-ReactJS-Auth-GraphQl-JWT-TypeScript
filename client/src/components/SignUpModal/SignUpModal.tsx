import { FormEvent, useState } from 'react';
import { useSignupMutation } from '../../graphql/generated';

export function SignUpModal(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [signup] = useSignupMutation({
    variables: { name, password },
  });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    signup();
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#SignUpModal"
      >
        Sign Up
      </button>

      <div
        className="modal fade"
        id="SignUpModal"
        tabIndex={-1}
        aria-labelledby="SignUpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="SignUpModalLabel">
                Sign Up
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
