import MessageScreen from "./Screens/MessageScreen/MessageScreen"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import { BrowserRouter, Route, Routes } from "react-router"
import { ContactListProvider } from "./Context/ContactListContext"
import './App.css'

function App() {

  return (
    <main className="App">
      <ContactListProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/contacto/:id_contacto" element={<MessageScreen />} />
          </Routes>
        </BrowserRouter>
      </ContactListProvider>
    </main>
  )
}

export default App
