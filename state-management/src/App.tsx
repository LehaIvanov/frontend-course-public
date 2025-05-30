import { useState } from 'react';
import { ContentContainer } from './ContentContainer';
import { storeContext } from './storeContext';

const App = () => {
  const store = useState({
    first: '',
    last: '',
  });

  return (
    <storeContext.Provider value={store}>
      <div className="container">
        <h5>App</h5>
        <ContentContainer />
      </div>
    </storeContext.Provider>
  );
};

export default App;
