import MessageScreen from "./Screens/MessageScreen/MessageScreen"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import { BrowserRouter, Route, Routes } from "react-router"
import { ContactListProvider } from "./Context/ContactListContext"
import { ContactDetailProvider } from "./Context/ContactDetailContext"
import ContactDataScreen from "./Screens/ContactDataScreen/ContactDataScreen"
import NewContactScreen from "./Screens/NewContactScreen/NewContactScreen"
import './App.css'

function App() {

  return (
    <main className="App">
      <ContactListProvider>
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<HomeScreen />} />

            <Route path="/nuevoContacto" element={<NewContactScreen />} />

            <Route element={<ContactDetailProvider/>}>
              <Route path="/contacto/:id_contacto" element={<MessageScreen />} />
              <Route path="/contacto/:id_contacto/data" element={<ContactDataScreen />} />
            </Route>
  
          </Routes>
        </BrowserRouter>
      </ContactListProvider>
    </main>
  )
}

export default App
