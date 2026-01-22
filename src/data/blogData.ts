export interface BlogPost {
  month: string;
  day: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    month: "Jun",
    day: "16",
    title: "Finding a Private Investigator who takes on Infidelity Cases",
    excerpt: "One of the worst things that a spouse can go through is wondering if their husband or wife is being unfaithful. When you have serious concerns regarding your marriage sometimes it is best to hire a professional with the experience to either confirm y...",
    date: "June 16th, 2020",
    slug: "/blog/finding-a-private-investigator-infidelity",
    tags: ["private investigator infidelity", "infidelity private investigator"],
    content: "One of the worst things that a spouse can go through is wondering if their husband or wife is being unfaithful. When you have serious concerns regarding your marriage sometimes it is best to hire a professional with the experience to either confirm your fears or put your fears to rest. Since infidelity is a very sensitive and emotional subject it is best to handle things through an outside, non-partisan party. You certainly would not want to enlist the help of a close friend or family member to spy on your spouse as this would probably cause all sorts of problems. When you hire a professional investigator you know you will have an ally who will be working only for you to bring you the honest truth of what is going on. Most private investigators are also trained to help you keep calm when faced with the ongoing issues of an investigation. Typically, by the time someone has gone to the effort of hiring a private investigator they are pretty convinced that their spouse is cheating on them and they simply want or need proof of the infidelity. Private investigators know what information is required by law in the event that it is needed for a divorce hearing, child custody issues or alimony proceedings. When you have any type of community property or asset it is extremely important that you hire a professional who can make sure your interests are protected.",
  },
  {
    month: "Jun",
    day: "9",
    title: "Best Way To Hire A Private Investigator",
    excerpt: "Check with the Licensing Board Before you consider hiring a private investigator for hire, check with the local licensing board. The licensing board can provide you with a list of investigators who are licensed to work in your area. An investigato...",
    date: "June 9th, 2020",
    slug: "/blog/best-way-to-hire-a-private-investigator",
    tags: ["hire private investigator", "how to hire a pi", "best ways to hire a pi"],
    content: "Before you consider hiring a private investigator for hire, check with the local licensing board. The licensing board can provide you with a list of investigators who are licensed to work in your area. An investigator working without a license has complete disregard for the law. If you encounter a private investigator that does not have a license, don't even consider hiring him. An investigator working without a license has complete disregard for the law. Furthermore, an investigator without a license is likely to be hiding something undesirable, such as a criminal record or a lack of experience. On the other hand, most states have strict guidelines for obtaining a private investigator's license, including background checks, proof of applicable experience, and insurance. An investigator with a license has met these expectations and is more likely to be a competent private investigator. After obtaining a list of licensed private investigators, ask the licensing board if any complaints have been filed against the investigators on the list. During the interview, you should be asking a lot of questions. The best private investigators, however, will ask you an abundance of questions, too. This is the sign of a seasoned professional who takes his job seriously. Make contact with a few references to find out how satisfied they were with the investigator's job performance. Hiring a private investigator should never be rushed into. If the investigation is important enough to be done in the first place, it is important enough to be done right.",
  },
  {
    month: "Apr",
    day: "15",
    title: "SIGNS OF A CHEATING SPOUSE",
    excerpt: "This is the topic that everybody has an interest in. With all the technology such as Facebook and tweeting and the other social media that is so much a part of our lives today makes cheating more common today. Most of the calls we receive usually s...",
    date: "April 15th, 2015",
    slug: "/blog/signs-of-a-cheating-spouse",
    tags: ["Private Investigator Austin TX", "Private Investigation Services Austin TX", "Private Investigators Austin TX"],
    content: "This is the topic that everybody has an interest in. With all the technology such as Facebook and tweeting and the other social media that is so much a part of our lives today makes cheating more common today. Most of the calls we receive usually start with, I was looking on face book and I saw. Also in today's world, marriage does not seem to hold people together like it once did. It seems like relationships became harder or people just don't seem to want to put the work in. Divorce seems to be the problem solving method for bad relationships. When you are in a relationship, there are patterns that people have in their routines. People usually come home at a certain time. They have a schedule that for the most part, they keep. Anytime you see a change in a routine in a partner, you need to start paying attention. Change of routine, attire changes, cell phone behavior, email secrecy, money patterns, dating sites. If your spouse comes home and they avoid contact or head straight for the shower, start paying attention. The cheating spouse will hide the cell phone. When he/she sleeps the phone will be hidden. Using email is also a good way for the cheating spouse to communicate with their new love interest. If your spouse is having an affair, there will be an increase of ATM withdrawals. Cash cannot be traced and is the method of concealment of a cheating spouse. Dating sites today are sometimes comical. They cover everything. The point is that if a spouse wants to have a discreet affair, there is a web site to help him/her in that effort.",
  },
];

export const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
).sort();
