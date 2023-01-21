import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { ProductsSection } from "./components/ProductsSection/ProductsSection";
import { SearchSection } from "./components/SearchSection/SearchSection";
import { SingleProduct } from "./components/SingleProduct/SingleProduct";
import { ProductsContext } from "./context/ProductsContext";

function App() {

  const { page } = useContext(ProductsContext);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#fb118e20] to-white border-t-[1px] border-myPink">
        <SearchSection />

        <Routes>
          <Route path='/' element={ <Navigate to={`/page/${page}`} />} />
          <Route path='/page/:nr' element={ <ProductsSection /> } />
          <Route path='/:id' element={ <SingleProduct /> } />

          <Route path="/*" element={ <Navigate to={`/page/${page}`} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
