import {useEffect} from 'react'
import Router from './router/Router'
import './App.css';
import {fetchProducts} from './store/reducers/cart';
import { useDispatch } from 'react-redux';

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [dispatch])
  return (
    <Router />
  )
}

export default App