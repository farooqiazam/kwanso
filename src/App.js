import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersList from './components/UsersList';
import UsersDetails from './components/UserDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/:id" element={<UsersDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
