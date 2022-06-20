import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { client } from '..';
import { AuthContext } from '../../context/auth.context';

export function Logout(): JSX.Element {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    context.logout();
    client.resetStore();
    navigate('/');
  }
  return (
    <button className="btn btn-danger btn-sm" onClick={logout}>
      Log Out
    </button>
  );
}
