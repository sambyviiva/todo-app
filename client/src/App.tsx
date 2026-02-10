import './styles/App.css'
import { Dashboard } from './components/TodoDashboard'
import { useState } from 'react';
import { CreatePage } from './components/CreateTodoPage';

function App() {
  const [isCreatePageOpen, setIsCreatePageOpen] = useState<boolean>(false);
  return (
    <>
      {isCreatePageOpen ? <CreatePage setIsCreatePageOpen={setIsCreatePageOpen}/> : <Dashboard setIsCreatePageOpen={setIsCreatePageOpen} />}
    </>
  )
};

export default App
