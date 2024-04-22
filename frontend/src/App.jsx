import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateBooks from "./pages/CreateBooks"
import ShowBooks from "./pages/ShowBooks"
import EditeBooks from "./pages/EditeBooks"
import DeleteBooks from "./pages/DeleteBooks"

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/books/create" element={<CreateBooks />}/>
      <Route path="/books/details/:id" element={<ShowBooks />}/>
      <Route path="/books/edit/:id" element={<EditeBooks />}/>
      <Route path="/books/delete/:id" element={<DeleteBooks />}/>
    </Routes>
  )
}

export default App