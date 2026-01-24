import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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
import { SignsOfACheatingSpouse } from "./components/blog/SignsOfACheatingSpouse.tsx";
import { BestWayToHireAPrivateInvestigator } from "./components/blog/BestWayToHireAPrivateInvestigator.tsx";
import { FindingAPrivateInvestigatorInfidelity } from "./components/blog/FindingAPrivateInvestigatorInfidelity.tsx";
import { BlogSearch } from "./pages/BlogSearch.tsx";
import { NotFound } from "./pages/NotFound.tsx";

const ExternalRedirect = ({ url }: { url: string }) => {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);
  return null;
};

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
            <Route path="/blog/search" element={<BlogSearch />} />
            <Route path="/blog/signs-of-a-cheating-spouse" element={<SignsOfACheatingSpouse />} />
            <Route path="/blog/best-way-to-hire-a-private-investigator" element={<BestWayToHireAPrivateInvestigator />} />
            <Route path="/blog/finding-a-private-investigator-infidelity" element={<FindingAPrivateInvestigatorInfidelity />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<ExternalRedirect url="https://cloud.umami.is" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
