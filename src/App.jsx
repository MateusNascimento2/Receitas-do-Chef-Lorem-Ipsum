// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages 
import { Home, SearchByLetter, SearchForIngredients, Recipe, ByIngredient} from './pages/index';
// components
import  Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/by-letter/:letter?' element={<SearchByLetter />} />
        <Route path='/ingredients' element={<SearchForIngredients />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        <Route path='/by-ingredient/:ingredient' element={<ByIngredient />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
