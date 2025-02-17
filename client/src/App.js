import { Provider } from 'react-redux'
import './App.css';
import { AppRouter } from './routes/AppRouter';
import { store } from './redux/store';

export const App = () => {
  return (

    <Provider store={store}>
      <AppRouter />
    </Provider>  

  )
}