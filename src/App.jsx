import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import LaundryServiceIslamabad from './pages/LaundryServiceIslamabad.jsx';
import DryCleaningIslamabad from './pages/DryCleaningIslamabad.jsx';
import IroningServiceIslamabad from './pages/IroningServiceIslamabad.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/laundry-service-islamabad" element={<LaundryServiceIslamabad />} />
        <Route path="/dry-cleaning-islamabad" element={<DryCleaningIslamabad />} />
        <Route path="/ironing-service-islamabad" element={<IroningServiceIslamabad />} />
      </Route>
    </Routes>
  );
}
