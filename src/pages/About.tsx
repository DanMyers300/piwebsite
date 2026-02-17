import LA from "../assets/LA.webp";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { SEO } from "../components/SEO";

export const About = () => {
  return (
    <div>
      <SEO
        title="About Us | Watson PI Services"
        description="Meet Dave Watson — former LAPD sergeant with extensive law enforcement experience. Learn about his background in investigations."
        path="/about"
      />
      <PageHero image={LA} title="ABOUT US" imageAlt="Los Angeles" />

      {/* Content */}
      <div className="p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column - Personal Letter */}
          <div className="md:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Personal Letter From Dave Watson:
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mb-6"></div>

            <div className="text-gray-600 leading-relaxed space-y-4 text-sm sm:text-base">
              <p>My experience in law enforcement ranged from patrol to undercover assignments. After graduating from the <a href="https://www.lapdonline.org/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 font-medium">Los Angeles Police academy</a>, I was assigned to uniform patrol duties. Shortly thereafter, I was assigned as a Training Officer in various Divisions throughout the city. Those responsibilities consisted of training new recruits on investigation skills and court preparation along with many other duties.</p>

              <p>I also was assigned to vice undercover investigations. This position consisted of taking vice complaints from citizens and initiating investigations. Many of these investigations required continued surveillance. Evidence was collected from photographs and videotape. After arrests were made, the cases were filed with the District Attorney.</p>

              <p>During my tenure, I was also assigned to <a href="https://www.lapdonline.org/office-of-the-chief-of-police/office-of-special-operations/metropolitan-division/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 font-medium">Metro Division</a>. This is an elite Division of LAPD that conducts Dignitary protection for presidents of countries along with other VIP individuals. In addition, this Division conducts crime suppression on areas where crime statistics are on the increase. This Division also serves felony warrants throughout the city. The Officers of this Division receive additional training on investigations, self-defense, firearms, and crowd control situations.</p>

              <p>After approximately six years with the Department, I was promoted to Sergeant. Initially, I was assigned over a patrol watch. My responsibilities were to ensure that investigations were handled and documented correctly.</p>

              <p>Shortly after my patrol supervision assignment, I was assigned to supervise a vice undercover unit. My responsibilities were to plan undercover investigations and ensure that assignments were handled in a safe and professional manner. I also conducted background checks on officers to ensure that they were qualified for the assignment. My other responsibilities included approving arrest reports and ensuring that investigations were completed correctly. I also supervised filing cases with the District Attorney.</p>

              <p>I was then assigned to the Internal Affairs Division of the Los Angeles Police Department. I was assigned as an Advocate for the Department. The Los Angeles Police Department has an administrative process to handle serious allegations of police misconduct. My responsibilities consisted of conducting board hearings against the officer when an allegation of misconduct was alleged. In addition, I completed the investigations and presented them to the Board. I interviewed all witnesses, prepared them to testify and made arrangements for them to appear at the Board. I questioned witnesses during the hearing and presented opening and closing arguments for the Department. I also completed the final disposition reports for the Chief of Police.</p>

              <p>I was then assigned to assist a Captain of a Division. My assignment was to assist in daily operations of the Division. My responsibilities included conducting background checks on officers to qualify them to work undercover assignments. In addition, I finalized and approved personnel complaint investigations on officers.</p>

              <p>I was then assigned to the Management Services Division. My responsibilities included conducting research investigation reports for the Chief of Police. This Division specializes in finding information that is not readily available.</p>

              <p>I was then assigned to assist a Commander of the Los Angeles Police Department in the specialized "Criminal Intelligence Group" Division of the Department. This Division consists of "Anti-terrorist Division, Organized Crime, and Vice Division and Narcotics Division." These are the three highly confidential units of the Los Angeles Police Department. The function and responsibilities of these units are confidential and cannot be released.</p>

              <p>As the founder of <a href="/" className="text-yellow-500 hover:text-yellow-600 font-medium">Watson Private Investigation Services Inc.</a>, I have conducted numerous civil and criminal investigations. Whether your interest is criminal or civil, my company can assist in your situation. I have numerous references upon request.</p>

              <p>Thank you for the inquiry.</p>

              <p className="font-semibold text-gray-800">David Watson</p>
            </div>
          </div>

          {/* Right Column - Form and Highlights */}
          <div className="md:w-1/3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
