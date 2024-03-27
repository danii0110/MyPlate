import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Community from './routes/Community';
import CommunityWrite from './pages/community/CommunityWrite/CommunityWrite';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/community' element={<Community />} />
      <Route path='/community/post' element={<CommunityWrite />} />
    </Routes>
  );
}
export default App;
