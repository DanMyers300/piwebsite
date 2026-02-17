import LA from "../assets/LA.webp";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { SEO } from "../components/SEO";

const servicesHighlights = [
  "Background Checks",
  "Criminal Cases",
  "Employment Screening",
  "Marriage & Divorce",
  "Debugging",
  "Fraud Investigation",
  "Embezzlement",
  "Insurance Fraud",
  "Security Consultation",
  "Services for Attorneys",
  "Missing Persons",
  "Process Server",
  "Service of Subpoena",
  "Surveillance",
  "Undercover Investigations",
  "Criminal & Civil Cases",
  "Custody Investigations",
  "Cheating Spouses",
];

export const Services = () => {
  return (
    <div>
      <SEO
        title="Services | Watson PI Services"
        description="Professional PI services including surveillance, infidelity investigation, background checks, insurance fraud, civil & criminal cases."
        path="/services"
      />
      <PageHero image={LA} title="SERVICES" imageAlt="Los Angeles" />

      {/* Content */}
      <div className="p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column - Services */}
          <div className="md:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              To make a decision, know the facts...
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mb-8"></div>

            <div className="grid gap-6">
              {/* Surveillance */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-800 text-white px-5 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">SURVEILLANCE</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Watson Private Investigation has over 23 years of surveillance experience. Conducting successful surveillance takes patience and experience. Proper surveillance will supply the customer with everything they will need to prove their case.</p>
                </div>
              </div>

              {/* Divorce */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-800 text-white px-5 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">DIVORCE</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Divorce can be a very sensitive and emotional time for people. A private investigator's responsibilities may include surveillance that will supply the customer with photographs, pictures, etc. My advice to most people is that if you have gone this far and have accessed this site or contacted a private investigator, there is a problem. Finding the answer to the problem is what we do.</p>
                </div>
              </div>

              {/* Child Custody */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-800 text-white px-5 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <h3 className="font-bold">CHILD CUSTODY</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Sensitivity is demanded on issues that involve children. Custody investigations require operatives to retrieve evidence and information in delicate situations. You want high-quality information so that you and your attorney can make informed decisions on the well being of your child or children. If there is something you need to know in a timely manner to be able to proceed, we can get results with discretion.</p>
                </div>
              </div>

              {/* Debugging */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-800 text-white px-5 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">DEBUGGING</h3>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">I received my experience in detecting threats to personal privacy during my experience with the LAPD. I worked a unit that worked closely with the secret service. We conducted VIP dignitary protection details that required debugging.</p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">If you are worried that you are being investigated, call our office from a payphone preferably some distance from your home. Do not call us from your home telephone. We can search for bugs and cameras using various techniques, many of them transparent to those doing the monitoring.</p>
                </div>
              </div>

              {/* Criminal */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-800 text-white px-5 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">CRIMINAL</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">We do criminal defense work all over Texas. I am an approved vendor for Travis County and do criminal defense work for all types of criminal offenses. I have numerous references from criminal defense attorneys that I have worked with in their criminal cases.</p>
                </div>
              </div>

              {/* Insurance Fraud */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-800 text-white px-5 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">INSURANCE FRAUD</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">As an approved vendor with State Farm, we work with the law firms that represent the insurance companies. I have conducted numerous insurance fraud investigations and have numerous references upon request. We can help you recover assets and identify the amateurs and professionals engaged in these activities.</p>
                </div>
              </div>

              {/* Missing Person */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-800 text-white px-5 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">MISSING PERSON</h3>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Missing person, locate someone, or address: however you are searching for a person, you have come to the right place for fast, affordable professional help locating people.</p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Watson Private Investigation Services has conducted several missing person investigations. This type of investigation requires a strong investigator with leadership skills.</p>
                </div>
              </div>

              {/* Civil */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-800 text-white px-5 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">CIVIL</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">I have conducted numerous civil cases that range from product liability to wrongful death.</p>
                </div>
              </div>

              {/* Process Service */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-800 text-white px-5 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">PROCESS SERVICE</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Watson Private Investigation serves all types of citations and subpoenas. We also have a service to find individuals so that they can be served.</p>
                </div>
              </div>

              {/* Undercover Investigation */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-800 text-white px-5 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">UNDERCOVER INVESTIGATION</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Undercover investigations are specialized and require experience. With 5 years undercover experience, including internal affairs with the LAPD we have a proven track record of successful undercover operations that get results for our clients. We customize each case so you only get the services you need, whether it's an undercover sting operation, fraud detection, or litigation support we can help.</p>
                </div>
              </div>

              {/* Background Checks */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-800 text-white px-5 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">BACKGROUND CHECKS</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Many companies now require employee pre-screening investigations prior to employment. Watson Investigation can provide unique background checks based on the level of depth you require. As a licensed private investigator, we use the latest methods and technology possible to provide you with an accurate, detailed background check.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form and Highlights */}
          <div className="md:w-1/3">
            <ContactForm highlights={servicesHighlights} />
          </div>
        </div>
      </div>
    </div>
  );
};
