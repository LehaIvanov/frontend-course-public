import { ContentContainer } from './ContentContainer';
import { useUserStore } from './hooks';
import { useSubscribeStore } from './store';

const App = () => {
  useSubscribeStore(useUserStore(), (user) => {
    console.log(`user`, user);
  });

  return (
    <div className="container">
      <h5>App</h5>
      <ContentContainer />
    </div>
  );
};

export default App;
