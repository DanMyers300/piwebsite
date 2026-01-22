import LA from "../assets/LA.webp";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";

const faqs = [
  {
    question: "What should I expect when I call?",
    answer: "A consultation will scheduled to discuss your needs in detail. Upon your approval, an investigator will be assigned to your case. You now have a professional investigation firm looking out for your best interest.",
  },
  {
    question: "Why should I hire Watson Private Investigation Services Inc.?",
    answer: "Watson Private Investigation has over 20 years experience with the Los Angeles Police Department and private investigations. David Watson has been involved in operations with the anti-terrorist division, organized crime, vice, undercover operations, patrol watch commander, and numerous other operations. He has personally trained his investigators. You won't find a more experienced investigation company to get the answers you need for your peace of mind.",
  },
  {
    question: "How will the surveillance be reported to me?",
    answer: "All surveillance activities will be videotaped and presented to the client on a dvd. In addition a detailed report will be supplied to the client. If requested, a copy will be given to the client's attorney.",
  },
  {
    question: "How much will it cost?",
    answer: "The average surveillance takes approximately 15 hours. Some more, some less. Please contact us and we will go over the cost of getting you the peace of mind you need.",
  },
  {
    question: "What should I do while the surveillance is occuring?",
    answer: "Do nothing, act normally. If there's any sudden changes in your behavior it might warn that person that something is wrong and they may stop what they're doing until they feel that its safe to resume. I recommend when possible for the client to leave town or at least go away for a day. Anything to make the target feel more comfortable always helps the success of the surveillance.",
  },
  {
    question: "What are the signs of a cheating spouse?",
    answer: "There are many but these are the most common: Normal routine suddenly changes, they get home later, they have more weekend trips with the guys/girls, they get protective over their cell phones and the bill, there are more cash withdrawals to conceal where they are at, they become agitated for no apparent reason, they make excuses to leave the house, the sexual intimacy stops or is reduced, they buy new clothes, they started going to the gym or going to the gym more frequently.",
  },
  {
    question: "What is surveillance?",
    answer: "Surveillance is a fluid situation that is always changing. Our experienced investigators are very experienced in surveillance techniques. The techniques I learned with the Los Angeles Police Department has made for very successful surveillance. I will use all that experience in getting you the answers you need. Techniques used in organized crime surveillance, anti-terrorist surveillance, and undercover vice surveillance will be used to conduct your surveillance. Depending on the complication of the surveillance, we may use two investigators. We follow individuals and video all their activities. The more intelligence we receive from the client gives us a better understanding of the person we are following.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, checks, and cash. If you are paying with a credit card, a credit cart authorization form will be emailed to you along with a retainer agreement. Once the forms are returned the investigation will begin.",
  },
];

export const FAQs = () => {
  return (
    <div>
      <PageHero image={LA} title="FAQs" imageAlt="Los Angeles" />

      {/* Content */}
      <div className="p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column - FAQs */}
          <div className="md:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800 flex items-start gap-3">
                      <span className="bg-yellow-500 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span>{faq.question}</span>
                    </h3>
                  </div>
                  <div className="px-5 py-4 pl-14">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form only, no highlights */}
          <div className="md:w-1/3">
            <ContactForm highlights={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};
