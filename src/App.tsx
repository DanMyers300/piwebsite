import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { MenuBar } from "./components/MenuBar.tsx";
import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";
import { Services } from "./pages/Services.tsx";
import { Testimonials } from "./pages/Testimonials.tsx";
import { FAQs } from "./pages/FAQs.tsx";
import { Blog } from "./pages/Blog.tsx";
import { Contact } from "./pages/Contact.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <MenuBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
