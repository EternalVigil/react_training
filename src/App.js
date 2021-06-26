import logo from './logo.svg';
import './App.css';

import { Skeleton } from './components/wrappers/Skeleton';

const App = () => {
  console.log('loading the app');
  return (
    <div className="App">
      <Skeleton />
    </div>
  );
}

export default App;
