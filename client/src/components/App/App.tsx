import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '..';
import { HomePage, UsersPage } from '../../pages';

export function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
