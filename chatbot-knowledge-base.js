/*
  Private chatbot knowledge base.
  Every entry is deliberately general information. Update answers only after
  checking their linked source page and compliance wording.
*/
window.MUTUALS_CHAT_KNOWLEDGE = [
  {
    id: 'about-mutual', topic: 'About Mutual Solutions',
    questions: ['What does Mutual Solutions do?', 'What services do you offer?', 'Who are Mutual Solutions?', 'Can you help people outside Palmerston North?'],
    phrases: ['who are you', 'what does mutual', 'what do you do', 'what services', 'about mutual', 'where are you based', 'where do you work', 'nationwide', 'new zealand'],
    answer: 'Mutual Solutions Limited is an independent financial advice firm based in Palmerston North and serving clients across New Zealand. Its public service areas include personal insurance, home loans and KiwiSaver advice.',
    source: 'https://mutuals.co.nz/about-us.html', sourceLabel: 'About Mutual Solutions'
  },
  {
    id: 'independence', topic: 'Independence',
    questions: ['Are you independent?', 'Are you tied to a bank or insurer?', 'Do you work for an insurance company?'],
    phrases: ['independent', 'bank bias', 'tied to', 'bank owned', 'work for a bank', 'work for an insurer', 'compare providers'],
    answer: 'Mutual Solutions states that it is not owned by or aligned with a bank or insurance company. Any personal recommendation or provider comparison must be made by an adviser after considering the client’s circumstances.',
    source: 'https://mutuals.co.nz/disclosure.html', sourceLabel: 'Disclosure information'
  },
  {
    id: 'financial-adviser', topic: 'Financial adviser registration',
    questions: ['Is Upmeet a financial adviser?', 'Are you registered?', 'What are your FSP numbers?'],
    phrases: ['financial adviser', 'registered adviser', 'fsp number', 'fsp', 'registered provider', 'licensed adviser'],
    answer: 'Upmeet Sodhi is a Financial Adviser, FSP 250405. Mutual Solutions Limited is a registered Financial Advice Provider, FSP 729871. Registration and disclosure information is available on the website.',
    source: 'https://mutuals.co.nz/disclosure.html', sourceLabel: 'Disclosure information'
  },
  {
    id: 'cost', topic: 'Fees and commissions',
    questions: ['Does it cost anything to use you?', 'How are you paid?', 'Are consultations free?', 'Do you charge a fee?'],
    phrases: ['what does it cost', 'how much does it cost', 'costs', 'fee', 'fees', 'free consultation', 'free advice', 'commission', 'commissions', 'charge', 'charges', 'price', 'prices', 'pay you'],
    answer: 'Mutual Solutions’ disclosure says financial advice is generally provided at no direct cost to the client. It may receive commission from an insurer or lender when a policy or loan settles, and the applicable commission is disclosed before a recommendation is made.',
    source: 'https://mutuals.co.nz/disclosure.html#fees', sourceLabel: 'Fees and commissions'
  },
  {
    id: 'consultation', topic: 'Consultations',
    questions: ['How do I book a consultation?', 'Can I speak with Upmeet?', 'Can we meet by video?', 'How do I get in touch?'],
    phrases: ['book', 'appointment', 'consultation', 'speak with', 'talk to', 'get in touch', 'contact details', 'call you', 'video meeting', 'in person meeting'],
    answer: 'For a conversation about your own circumstances, contact Mutual Solutions directly. The website offers booking, phone, email and in-person or video options.',
    source: 'https://mutuals.co.nz/contact-us.html', sourceLabel: 'Contact Mutual Solutions'
  },
  {
    id: 'ongoing-support', topic: 'Ongoing support',
    questions: ['Do you provide ongoing support?', 'Will you help after I become a client?', 'Do you do annual reviews?'],
    phrases: ['ongoing support', 'after i become', 'annual review', 'annual reviews', 'long term support', 'after the policy', 'after the loan'],
    answer: 'Mutual Solutions says it provides ongoing support, including annual reviews for insurance clients and help through the claims process. The service provided in any individual case depends on the agreed scope of advice.',
    source: 'https://mutuals.co.nz/about-us.html', sourceLabel: 'How Mutual Solutions works'
  },
  {
    id: 'life-basics', topic: 'Life insurance',
    questions: ['What is life insurance?', 'What does life cover do?', 'How does life insurance work?'],
    phrases: ['life insurance', 'life cover', 'death cover', 'life policy'],
    answer: 'Life insurance generally pays a lump sum when an insured person dies, subject to the policy terms. It is commonly used to help with financial commitments, but the suitable amount and structure are personal advice questions.',
    source: 'https://mutuals.co.nz/life-insurance.html', sourceLabel: 'Life insurance information'
  },
  {
    id: 'life-amount', topic: 'Life insurance amount',
    questions: ['How much life insurance do I need?', 'How much life cover should I have?', 'What amount of life cover is right?'],
    phrases: ['how much life', 'amount of life', 'life cover amount', 'life cover should', 'life insurance should'],
    answer: 'The appropriate amount of life cover depends on personal factors such as dependants, debts, savings and financial commitments. This assistant cannot calculate or recommend an amount; an adviser can discuss that in a personal advice conversation.',
    source: 'https://mutuals.co.nz/faq.html', sourceLabel: 'Life insurance FAQ', handoff: true
  },
  {
    id: 'life-premiums', topic: 'Life insurance premiums',
    questions: ['Will a life insurance claim increase premiums?', 'Why do life insurance premiums change?', 'What is stepped versus level premium?'],
    phrases: ['life premium', 'life premiums', 'claim increase premium', 'why premiums change', 'stepped premium', 'level premium'],
    answer: 'Personal insurance premiums can change for reasons such as age, policy design and wider insurer pricing. A claim does not necessarily determine future premium changes, but the answer can depend on the policy and insurer. Stepped and level premiums are different pricing approaches that should be explained against the policy wording.',
    source: 'https://mutuals.co.nz/life-insurance.html', sourceLabel: 'Life insurance information'
  },
  {
    id: 'health-basics', topic: 'Health insurance',
    questions: ['What is health insurance?', 'How does private health insurance work?', 'What is medical insurance?'],
    phrases: ['health insurance', 'health cover', 'medical insurance', 'medical cover', 'private health', 'private medical', 'healthcare insurance'],
    answer: 'Private health insurance can help with eligible private treatment costs under the policy terms. Cover, exclusions, excesses, waiting periods and eligibility vary between policies and people.',
    source: 'https://mutuals.co.nz/health-insurance.html', sourceLabel: 'Health insurance information'
  },
  {
    id: 'health-claim', topic: 'Health insurance claims',
    questions: ['Will a health insurance claim increase my premium?', 'Do claims affect health insurance premiums?'],
    phrases: ['health claim premium', 'health claim increase', 'medical claim premium', 'medical claim increase'],
    answer: 'Mutual Solutions’ health-insurance information says a personal health-insurance claim does not itself increase premiums. Premiums can still change for broader reasons such as age, cover selected and market-wide claims costs.',
    source: 'https://mutuals.co.nz/health-insurance.html', sourceLabel: 'Health insurance information'
  },
  {
    id: 'health-personal', topic: 'Health insurance personal questions',
    questions: ['Will health insurance cover my condition?', 'Can I get health cover after a diagnosis?', 'Which health policy should I choose?'],
    phrases: ['cover my condition', 'my diagnosis', 'pre existing', 'pre-existing', 'which health policy', 'health policy should'],
    answer: 'Whether a condition is covered, excluded or accepted depends on the policy wording, underwriting and personal health information. This needs a confidential conversation with an adviser or insurer rather than discussion in this chat.',
    source: 'https://mutuals.co.nz/contact-us.html', sourceLabel: 'Speak with Mutual Solutions', handoff: true
  },
  {
    id: 'income-basics', topic: 'Income protection',
    questions: ['What is income protection?', 'How does income protection work?', 'What is income cover?'],
    phrases: ['income protection', 'income protect', 'income cover', 'income policy'],
    answer: 'Income protection is generally designed to provide a regular benefit if illness or injury prevents someone from working, subject to the policy terms. Benefit limits and waiting periods vary.',
    source: 'https://mutuals.co.nz/income-protection.html', sourceLabel: 'Income protection information'
  },
  {
    id: 'income-acc', topic: 'Income protection and ACC',
    questions: ['What is the difference between ACC and income protection?', 'Does ACC cover illness?', 'Do I need income protection if I have ACC?'],
    phrases: ['acc and income', 'difference between acc', 'does acc cover illness', 'acc cover illness', 'have acc'],
    answer: 'ACC generally relates to accidental injury. Income protection may respond when illness or injury prevents work, subject to the policy terms. Whether someone needs, already has, or should change cover requires personal advice.',
    source: 'https://mutuals.co.nz/income-protection.html', sourceLabel: 'Income protection information', handoff: true
  },
  {
    id: 'income-personal', topic: 'Income protection personal questions',
    questions: ['How much income protection do I need?', 'Would income protection cover my job?', 'Can I get income protection if I am self-employed?'],
    phrases: ['how much income protection', 'income protection do i need', 'cover my job', 'my income protection', 'i am self employed', 'i am self-employed'],
    answer: 'The appropriate income-protection structure depends on employment, earnings, leave arrangements, existing cover and policy terms. That needs personal advice and should not be assessed through this chat.',
    source: 'https://mutuals.co.nz/contact-us.html', sourceLabel: 'Speak with Mutual Solutions', handoff: true
  },
  {
    id: 'trauma-basics', topic: 'Trauma cover',
    questions: ['What is trauma insurance?', 'What is critical illness cover?', 'How does trauma cover work?'],
    phrases: ['trauma insurance', 'trauma cover', 'critical illness', 'serious illness cover'],
    answer: 'Trauma cover, often called critical illness cover, may pay a lump sum for defined serious illnesses or events under a policy. The conditions covered and payment criteria vary by insurer and policy wording.',
    source: 'https://mutuals.co.nz/life-insurance.html', sourceLabel: 'Personal insurance information'
  },
  {
    id: 'claims-process', topic: 'Insurance claims',
    questions: ['How do I make an insurance claim?', 'Will you help me make a claim?', 'What happens when I claim?'],
    phrases: ['make a claim', 'making a claim', 'claim process', 'help me claim', 'claiming insurance', 'insurance claim'],
    answer: 'If a claim is needed, contact the insurer or adviser promptly, keep relevant documents and follow the insurer’s claim process. Mutual Solutions says it supports clients through claims, but every claim is assessed under its own policy terms and no outcome can be guaranteed.',
    source: 'https://mutuals.co.nz/contact-us.html', sourceLabel: 'Contact Mutual Solutions'
  },
  {
    id: 'policy-review', topic: 'Policy reviews',
    questions: ['What is a policy review?', 'Can you review my insurance?', 'Can I get a second opinion on my cover?'],
    phrases: ['policy review', 'review my cover', 'review my policy', 'review insurance', 'existing cover', 'second opinion'],
    answer: 'A policy review is a conversation to check whether existing arrangements still reflect changes in circumstances and policy details. Only an adviser can provide personal advice about keeping, changing or replacing cover.',
    source: 'https://mutuals.co.nz/contact-us.html', sourceLabel: 'Ask about a policy review', handoff: true
  },
  {
    id: 'mortgage-basics', topic: 'Home loans',
    questions: ['What does a mortgage adviser do?', 'How do home loan advisers work?', 'What is a mortgage broker?'],
    phrases: ['home loan', 'home loans', 'mortgage adviser', 'mortgage broker', 'mortgages', 'buying a house', 'buying a home'],
    answer: 'A home-loan adviser can explain the lending process, help prepare an application and work with lenders. Lending decisions, rates, approval criteria and loan structures vary, so this assistant cannot assess borrowing ability or recommend a lender.',
    source: 'https://mutuals.co.nz/home-loans.html', sourceLabel: 'Home loan information'
  },
  {
    id: 'mortgage-cost', topic: 'Home loan adviser fees',
    questions: ['Do mortgage advisers charge a fee?', 'How much does mortgage advice cost?', 'Are home loan advisers free?'],
    phrases: ['mortgage fee', 'mortgage fees', 'mortgage advice cost', 'home loan fee', 'home loan fees', 'home loan advice cost'],
    answer: 'Mutual Solutions’ home-loan information says it is generally paid commission by the lender when a loan settles, so there is usually no separate adviser fee payable by the client. The current disclosure sets out the full position.',
    source: 'https://mutuals.co.nz/home-loans.html', sourceLabel: 'Home loan information'
  },
  {
    id: 'mortgage-personal', topic: 'Home loan personal questions',
    questions: ['How much can I borrow?', 'Will I be approved for a mortgage?', 'Which bank should I use?', 'Can I get a better rate?'],
    phrases: ['how much can i borrow', 'will i be approved', 'will i qualify', 'which bank', 'best rate', 'better rate', 'my borrowing'],
    answer: 'Borrowing capacity, lender approval, interest rates and loan structure depend on individual financial circumstances and current lender criteria. This assistant cannot assess or recommend them; speak with an adviser for personal advice.',
    source: 'https://mutuals.co.nz/contact-us.html', sourceLabel: 'Speak with Mutual Solutions', handoff: true
  },
  {
    id: 'first-home', topic: 'First-home buyers',
    questions: ['Can you help first-home buyers?', 'How does a first home loan work?', 'Can I use KiwiSaver for my first home?'],
    phrases: ['first home', 'first-home', 'buy my first house', 'buy my first home', 'kiwisaver for a first home'],
    answer: 'Mutual Solutions offers home-loan advice for first-home buyers. First-home lending and KiwiSaver withdrawal rules have eligibility requirements and may change, so an adviser can explain the current process for a person’s circumstances.',
    source: 'https://mutuals.co.nz/home-loans.html', sourceLabel: 'First-home buyer information', handoff: true
  },
  {
    id: 'refinance', topic: 'Refinancing',
    questions: ['What does refinancing mean?', 'Can you help me refinance?', 'How does mortgage refinancing work?'],
    phrases: ['refinance', 'refinancing', 'refinance my home loan', 'switch my mortgage'],
    answer: 'Refinancing generally means replacing an existing loan with a new loan or lender arrangement. Costs, rates, break fees, lending criteria and suitability differ by situation, so the assistant cannot say whether refinancing is appropriate for an individual.',
    source: 'https://mutuals.co.nz/home-loans.html', sourceLabel: 'Home loan information', handoff: true
  },
  {
    id: 'kiwisaver-basics', topic: 'KiwiSaver',
    questions: ['What is KiwiSaver?', 'How does KiwiSaver work?', 'Can you help with KiwiSaver?'],
    phrases: ['kiwisaver', 'kiwi saver', 'kiwi-saver', 'retirement fund'],
    answer: 'KiwiSaver is a voluntary retirement savings scheme. Fund choice, contribution settings and withdrawal rules depend on current settings and personal circumstances. Mutual Solutions provides KiwiSaver advice, while this assistant provides only general information.',
    source: 'https://mutuals.co.nz/kiwisaver.html', sourceLabel: 'KiwiSaver information'
  },
  {
    id: 'kiwisaver-fund', topic: 'KiwiSaver fund choice',
    questions: ['Which KiwiSaver fund is best?', 'Am I in the right KiwiSaver fund?', 'Should I change my KiwiSaver fund?'],
    phrases: ['which kiwisaver fund', 'right kiwisaver fund', 'change my kiwisaver', 'best kiwisaver fund', 'my kiwisaver fund'],
    answer: 'Fund choice depends on a person’s goals, time horizon, risk tolerance and wider circumstances. This assistant cannot recommend a fund or switch; a KiwiSaver review with an adviser can provide personal advice.',
    source: 'https://mutuals.co.nz/kiwisaver.html', sourceLabel: 'KiwiSaver information', handoff: true
  },
  {
    id: 'kiwisaver-contributions', topic: 'KiwiSaver contributions',
    questions: ['What KiwiSaver contribution rate should I use?', 'Can I change my KiwiSaver contribution rate?', 'How much should I contribute to KiwiSaver?'],
    phrases: ['kiwisaver contribution', 'kiwi saver contribution', 'contribution rate', 'how much should i contribute'],
    answer: 'Contribution settings can change and the right rate is personal to someone’s goals and cash flow. Check current settings with Inland Revenue and speak with an adviser for personal guidance; this chat cannot recommend a rate.',
    source: 'https://mutuals.co.nz/faq.html', sourceLabel: 'KiwiSaver FAQ', handoff: true
  },
  {
    id: 'complaints', topic: 'Complaints',
    questions: ['How do I make a complaint?', 'What happens if I am unhappy?', 'Who do I contact about a complaint?'],
    phrases: ['complaint', 'complaints', 'unhappy', 'problem with', 'dispute'],
    answer: 'If something has gone wrong, contact Mutual Solutions directly first. Its published complaints process says it will confirm receipt as soon as possible and aims to resolve matters within 20 working days. If unresolved, Financial Services Complaints Limited is the external dispute-resolution scheme listed in the disclosure.',
    source: 'https://mutuals.co.nz/disclosure.html#complaints', sourceLabel: 'Complaints process'
  },
  {
    id: 'privacy', topic: 'Privacy',
    questions: ['Is this chat private?', 'What do you do with my information?', 'Should I upload my policy documents?'],
    phrases: ['is this private', 'privacy', 'my information', 'upload policy', 'upload document', 'policy document', 'sensitive information'],
    answer: 'This prototype does not collect or transmit chat messages. The live assistant should not accept documents, health information, policy details or other sensitive personal information. Use Mutual Solutions’ approved contact process for confidential matters.',
    source: 'https://mutuals.co.nz/disclosure.html', sourceLabel: 'Privacy information'
  }
];
