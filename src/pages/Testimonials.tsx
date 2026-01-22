import LA from "../assets/LA.webp";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";

const testimonialsHighlights = [
  "David Watson",
  "Private Investigator",
  "Austin American Statesman Jobs Section",
];

export const Testimonials = () => {
  return (
    <div>
      <PageHero image={LA} title="TESTIMONIALS" imageAlt="Los Angeles" />

      {/* Content */}
      <div className="p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column - Testimonials */}
          <div className="md:w-2/3">
            <div className="space-y-6">
              {/* Child Custody */}
              <div className="bg-white border-l-4 border-yellow-500 shadow-md rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">CHILD CUSTODY</span>
                    <div className="text-gray-600 leading-relaxed space-y-3 text-sm sm:text-base">
                      <p><strong>My wife had taken my children in the dark of the night from our home in Hawaii.</strong> I spent over 40k dollars and used numerous investigators and attorneys trying to locate my children. We were quickly approaching a crucial deadline concerning the jurisdiction of the case. After two months of dead ends, I contacted <strong>Watson Private Investigation Services</strong>. I was surprised that <strong>Mr. Watson</strong> himself answered the phone. He immediately advised me of what I should do and the procedure he would take to locate my children.</p>
                      <p><strong>Well, two days later, YES TWO DAYS, I received a phone call from Mr. Watson stating that he had located my wife and children.</strong> My attorney in Hawaii then forwarded him the documents to have her served. She was served and jurisdiction was then held in Hawaii and she was forced to bring my children back home.</p>
                      <p>If it weren't for that one call to <strong>Watson Private Investigation Services</strong>, my relationship with my children would have been overseas. Today, I am looking over the beaches once again with my two boys, in fact, we are going surfing today.</p>
                      <p>Thank you, Mr. Watson, I should hope that if anyone ever has to go through the hardships that I have endured that they are lucky enough to have read this and call you.</p>
                      <p className="text-yellow-600 font-semibold mt-2">— Client / Hawaii</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Missing Person */}
              <div className="bg-white border-l-4 border-yellow-500 shadow-md rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">MISSING PERSON</span>
                    <div className="text-gray-600 leading-relaxed space-y-3 text-sm sm:text-base">
                      <p>My daughter had met a young man here in San Francisco and I reluctantly allowed him to stay at our home while he was going through "hard times." Months later, my daughter was gone, along with the youth that I had tried to help.</p>
                      <p>Weeks and then months went by and we had but moments of contact with her. Her mother and I were heartbroken to think that someone could have had so much control over her.</p>
                      <p>Upon advice from an attorney friend of mine, I contacted Dave Watson. I felt awkward telling him that I had lost my daughter to a stranger, even worse one that I allowed to move in my own home. <strong>Mr. Watson made that feeling go away. He then immediately began to implement a plan of action upon gathering all of my information.</strong></p>
                      <p>He located my daughter who was being used to run drugs and was forced to work at a strip club. He then advised me to purchase an airline ticket from Austin to San Francisco for my daughter and assisted in scheduling my flight to and from Austin. Mr. Watson established a meeting place for me and my daughter in an open public location and monitored for any outside intervention. He was our guardian.</p>
                      <p><strong>I was reunited with my daughter and we immediately flew back to San Francisco. Thank you so much, Dave, you have redirected my daughter's life and future.</strong></p>
                      <p className="text-yellow-600 font-semibold mt-2">— Client / San Francisco</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Surveillance */}
              <div className="bg-white border-l-4 border-yellow-500 shadow-md rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">SURVEILLANCE</span>
                    <div className="text-gray-600 leading-relaxed space-y-3 text-sm sm:text-base">
                      <p><strong>I have served two terms in Iraq and will soon be stationed in Afghanistan. I first began to have suspicions of my wife cheating in 2009. I could not believe that this was happening to me or my newly born son</strong>, but the reality was my suspicions were soon confirmed by <strong>Watson Private Investigations.</strong></p>
                      <p>I first contacted Mr. Watson who spoke with me for an hour on the telephone. <strong>I learned that he was an LAPD veteran and had extensive training; this made me feel much more comfortable speaking with him on a personal level.</strong> I learned that he had conducted numerous investigations where our military, both men and women, were overseas fighting for our country while our significant others had their personal desires on their front line.</p>
                      <p>I was lost and did not know where to turn; my immediate family all resided out of the United States, only my wife and child were in the state of Texas, the state I now call home. Mr. Watson recommended surveillance to be established on my wife. The results of the investigation were difficult to accept. I learned that she was not only having an affair but an affair with one of the guys that I had bunked with at boot camp years earlier.</p>
                      <p><strong>A consultation with Mr. Watson was held once I returned to the states and he briefed me on everything, including the hard to watch video. He then established an attorney to fight for me and my son.</strong> I cannot thank you enough, Mr. Watson, for the diligent work and professional attitude through all of my emotional turmoil.</p>
                      <p className="text-yellow-600 font-semibold mt-2">— Client / Military - Killeen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Infidelity 1 */}
              <div className="bg-white border-l-4 border-yellow-500 shadow-md rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">INFIDELITY</span>
                    <div className="text-gray-600 leading-relaxed space-y-3 text-sm sm:text-base">
                      <p><strong>My most difficult task was to make the call to Watson Private Investigations.</strong> I knew something was going on with my husband and felt certain he was having an affair, however; I did not know what to say, where to start and did not know how to tell a stranger my most intimate fears and concerns.</p>
                      <p><strong>I was not on the phone for five minutes with Mr. Watson when all of those fears subsided. He was kind and caring, not in the sense that you feel you are being sold, but he genuinely listened and responded to each of my concerns.</strong> For the first time in over six months, I knew that I was going to be OK. He gave me a new found confidence within myself. I began to realize that I could be strong and fight for myself and my children.</p>
                      <p><strong>The information obtained through his investigation changed my whole life.</strong> I never realized that my husband of over ten years was living a second life with another family. How could I have been so blind?</p>
                      <p>I did not know any attorneys or where to turn once he showed me the facts. <strong>Mr. Watson coordinated a meeting between me and his recommended attorney who performed flawlessly.</strong> I am now living my new found life with my children and have the financial support to do so, thanks to the evidence that Mr. Watson presented in court.</p>
                      <p className="text-yellow-600 font-semibold mt-2">— Client / Austin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Law Firm */}
              <div className="bg-white border-l-4 border-yellow-500 shadow-md rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">LAW FIRM</span>
                    <div className="text-gray-600 leading-relaxed space-y-3 text-sm sm:text-base">
                      <p>"Over my thirty years of law practice, I have had the occasion to use the services of probably a dozen or more private investigators. Quite frankly, the degree of satisfaction I have obtained from some has been less than desired.</p>
                      <p>About 6 years ago, I had the occasion to give an assignment to Mr. David Watson, the principal, and Owner of Watson Private Investigation Services Inc. <strong>His performance and results have been uniformly outstanding. He has come to be my first choice and only choice when I need a private investigator.</strong> I know that several of my law partners likewise use him exclusively and are very pleased with his services.</p>
                      <p>I recommend his services as a private investigator without qualification or reservation."</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Infidelity 2 */}
              <div className="bg-white border-l-4 border-yellow-500 shadow-md rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">INFIDELITY</span>
                    <div className="text-gray-600 leading-relaxed space-y-3 text-sm sm:text-base">
                      <p>"I was having problems with my marriage and my husband was taking a lot of business trips and weekends with the boys. My husband advised me that he was going off to Las Vegas with a three-day notice to me. I did not believe him but I felt confused about what to do and with such a short time to react to the situation. I called an attorney friend of mine who quickly recommend <strong>David Watson of Watson Private Investigation Services Inc.</strong> I called him and told him what was going on. He was very professional and made me feel that he would take care of everything. That's exactly what he did. He was on a plane to Vegas. Needless to say, he located my husband in Vegas with his new girlfriend. He supplied my lawyer with three days of video. I was devastated but relieved. My lawyer used this information to get me and my two kids what we deserve.</p>
                      <p><strong>Thank you, Mr. Watson, for doing such a great job. I will always feel gratitude for what you have done for me and my kids.</strong>"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Infidelity 3 */}
              <div className="bg-white border-l-4 border-yellow-500 shadow-md rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">INFIDELITY</span>
                    <div className="text-gray-600 leading-relaxed space-y-3 text-sm sm:text-base">
                      <p>"I had been married for 15 years and my wife was starting to act differently around the house. She started hiding her cell phone and going out more than usual. I got on the web and searched for private investigators. I located <strong>Watson Private Investigation Services Inc. I selected this company because the owner David Watson was an LAPD veteran with a lot of experience in undercover surveillance experience.</strong> I called him and he actually picked up the phone. I was surprised to be talking to the owner of the company and I was also surprised that I did not get an answering machine. I had called some other PI companies with no response and answering machines. I explained to Mr. Watson what my concerns were concerning my wife. He understood and of course had heard my story numerous times. He made me feel comfortable talking to him about my personal problems. He quickly acted and set up surveillance within three days. Well, my wife did not have a boyfriend. She had three boyfriends. Mr. Watson filmed my wife making out with three different men within one week time at nightclubs in the Austin Area. <strong>I was saddened to hear the news but thank god I have the answers to my questions so that I could move on with my life. Thank you, Mr. Watson.</strong>"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Missing Person 2 */}
              <div className="bg-white border-l-4 border-yellow-500 shadow-md rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">MISSING PERSON</span>
                    <div className="text-gray-600 leading-relaxed space-y-3 text-sm sm:text-base">
                      <p>I had reported my daughter missing with the Austin Police Department. She was 14 years old and ran away from home. I contacted the Austin Police Department daily with no response in helping me find my daughter. I was referred to <strong>Watson Private Investigation Services</strong> by a lawyer friend of mine. I called Mr. Watson and he immediately came to my house to interview me. He started looking for my daughter when he left my house. I will tell you what was so amazing. Three hours later he had found my daughter and was eating with her at a local McDonalds. He knew that if he brought her home with the same issues brewing that she would just run away again. He contacted me and asked me if it was OK for her to go stay at my sister's house so that it would give us time to set up counseling for the both of us. Mr. Watson brought my daughter by so I could see that she was OK. Mr. Watson then facilitated the transportation of my daughter to my sisters' house. <strong>Mr. Watson went out of his way not only finding my daughter but showing compassion in solving the problem so that it would not happen again. He asked for my permission before he did anything and made me feel in control of my out of control situation. Thanks again, Mr. Watson.</strong>"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form and Highlights */}
          <div className="md:w-1/3">
            <ContactForm highlights={testimonialsHighlights} />
          </div>
        </div>
      </div>
    </div>
  );
};
