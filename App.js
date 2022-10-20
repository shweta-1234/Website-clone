import { Box } from '@mui/material';
import './App.css';
import Feed from './component/Feed';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <Box>
      <Sidebar />
      <Feed />
    </Box>
  );
}

export default App;

