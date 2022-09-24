import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <HomePage /> }/>
          <Route path="about" element={ <AboutPage /> }/>
          <Route path="contact" element={ <ContactPage /> }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
