import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux'
import appStore from './utils/appStore';
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Provider store={appStore}>
          <Body />
        </Provider>
        <Analytics />
      </div>
    </>
  );
}

export default App;
