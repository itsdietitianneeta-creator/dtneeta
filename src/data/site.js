export const siteData = {
  formEndpoint: 'https://script.google.com/macros/s/AKfycbza3t8jJ8wl1euGyK6G0cYs1WoFuzxu3j8UgBDR0ddV41R4bo63whK1yz3tcKI3eFRw/exec', // Paste your Google Apps Script Web App URL here

  brand: {
    name: 'Dietitian Neeta',
    tagline: 'PCOS & Thyroid Expert',
    icon: 'fa-solid fa-leaf',
    logo: 'https://res.cloudinary.com/fxrjzppj/image/upload/v1788249152/WhatsApp_Image_2026-08-11_at_16.55.40.jpg'
  },

  packages: {
    simple: {
      label: 'Simple Diet Package',
      pricing: [
        { label: '1 Month', price: 2500 },
        { label: '3 Months', price: 6000 },
        { label: '6 Months', price: 10000 }
      ]
    },
    therapeutic: {
      label: 'Therapeutic Diet Package',
      description: 'For therapeutic conditions like Thyroid, PCOD, PCOS, Diabetes, high blood pressure, excess uric acid and more.',
      pricing: [
        { label: '1 Month', price: 3000 },
        { label: '3 Months', price: 7500 },
        { label: '6 Months', price: 12000 }
      ]
    }
  },

  programIncludes: [
    'Different diet plan each week',
    'Daily follow up',
    'Recipe support',
    'WhatsApp support 24/7',
    'Meal picture monitoring',
    'Call support',
    'Weight management diet free at the end of the package',
    'Great result and body toning'
  ],

  nav: {
    links: [
      { href: '/about', label: 'About' },
      { href: '/#programs', label: 'Programs' },
      { href: '/transformations', label: 'Transformations' },
      { href: '/#testimonials', label: 'Testimonials' },
      { href: '/#contact', label: 'Contact' }
    ],
    mobileLinks: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Neeta' },
      { href: '/#programs', label: 'Programs' },
      { href: '/transformations', label: 'Transformations' },
      { href: '/#testimonials', label: 'Testimonials' },
      { href: '/#contact', label: 'Contact & Booking' }
    ],
    ctaText: 'Book Consultation'
  },

  whatsapp: {
    number: '918837281177',
    consultationMessage: 'Hi Dietitian Neeta, I want to book a consultation',
    floatingMessage: 'Hi Dietitian Neeta, I want to know more about PCOS and weight loss diet plans',
    floatingTooltip: 'Chat with Neeta Tiwari'
  },

  social: {
    instagramUrl: 'https://www.instagram.com/dietitian_neeta/',
    instagramHandle: '@dietitian_neeta',
    facebookUrl: 'https://facebook.com',
    followers: '73.7K',
    posts: '1,081',
    clients: '3000+'
  },

  hero: {
    badge: 'Certified Nutritionist & Health Coach',
    badgeIcon: 'fa-solid fa-certificate',
    titlePrefix: 'Reverse PCOS & Thyroid Naturally — ',
    titleHighlight: 'Lose Weight the Right Way',
    subheadline: 'Certified Nutritionist Neeta Tiwari lost 25kg and reversed her own PCOS & Thyroid — now helping 3000+ clients do the same without starvation or crash diets.',
    ctaPrimary: 'Book Consultation',
    ctaSecondary: 'See Transformations',
    image: 'https://res.cloudinary.com/fxrjzppj/image/upload/v1788335418/WhatsApp_Image_2026-09-01_at_20.59.29_1.jpg',
    imageAlt: 'Dietitian Neeta Tiwari - Certified Nutritionist',
    stats: [
      { num: '25 kg', label: 'Personal Weight Loss' },
      { num: '3000+', label: 'Clients Transformed' },
      { num: '73.7K', label: 'Instagram Community' }
    ],
    floatingBadges: [
      { icon: 'fa-solid fa-heart-pulse', iconClass: 'green-icon', title: '100% Natural', subtitle: 'No Crash Diets' },
      { icon: 'fa-solid fa-award', iconClass: 'blue-icon', title: 'PCOS Reversed', subtitle: 'Sustainable Results' }
    ]
  },

  about: {
    subtitle: 'Meet Your Nutritionist',
    titlePrefix: 'Hi, I’m ',
    titleHighlight: 'Neeta Tiwari',
    lead: 'Dietitian, mother of 2 kids, and health coach helping women reverse PCOS, Thyroid, and manage weight naturally with everyday Indian home food.',
    image: 'https://res.cloudinary.com/fxrjzppj/image/upload/v1788335418/WhatsApp_Image_2026-09-01_at_20.59.29_2.jpg',
    imageAlt: 'Neeta Tiwari - Certified Nutritionist Hyderabad',
    experienceBadge: { num: '5+ Yrs', label: 'Experience' },
    location: 'Hyderabad, Telangana',
    storyQuoteBefore: 'As a mother of 2 kids diagnosed with Thyroid and PCOD, I gained 25kg and felt deeply insecure. But I decided to act — I earned my Diploma in Nutrition & Dietetics at 34, and ',
    storyQuoteBold: 'I reversed my PCOD & Thyroid conditions and lost 25kg permanently',
    storyQuoteAfter: ' with real Indian home food. If I can rebuild my health, you can too.',
    philosophy: 'I strongly believe our Indian spices, grains, and millets help us lose weight easily. I give dishes with ingredients that are common and easy to find — no supplements, just home food eaten the right way.',
    statCards: [
      { icon: 'fa-solid fa-scale-unbalanced-flip', title: '25kg Reversed', subtitle: 'Personal Transformation' },
      { icon: 'fa-solid fa-users', title: '3000+ Clients', subtitle: 'Helped Globally' },
      { icon: 'fa-brands fa-instagram', title: '73.7K Community', subtitle: 'Active Instagram' },
      { icon: 'fa-solid fa-award', title: '5+ Years', subtitle: 'Of Experience' },
      { icon: 'fa-solid fa-heart', title: '100%', subtitle: 'Customer Retention' },
      { icon: 'fa-solid fa-chart-line', title: '99%', subtitle: 'Success Rate' }
    ],
    ctaText: 'Start Your Journey',
    knowMoreText: 'Know More About My Journey',

    photoGallery: [
      'https://res.cloudinary.com/fxrjzppj/image/upload/v1788335418/WhatsApp_Image_2026-09-01_at_20.59.29_3.jpg',
      'https://res.cloudinary.com/fxrjzppj/image/upload/v1788335418/WhatsApp_Image_2026-09-01_at_20.59.29_1.jpg',
      'https://res.cloudinary.com/fxrjzppj/image/upload/v1788335421/WhatsApp_Image_2026-09-01_at_20.59.29.jpg',
      'https://res.cloudinary.com/fxrjzppj/image/upload/v1788250131/Screenshot_2026-09-01_133835.png',
      'https://res.cloudinary.com/fxrjzppj/image/upload/v1788335418/WhatsApp_Image_2026-09-01_at_20.59.29_2.jpg'
    ],

    journey: [
      { icon: 'fa-solid fa-heart-crack', title: 'The Struggle', desc: 'Diagnosed with Thyroid and PCOD, gaining around 25kg as a mom of 2 kids — struggling with low energy, depression, and hormonal imbalance.' },
      { icon: 'fa-solid fa-graduation-cap', title: 'The Decision to Act', desc: 'Instead of overthinking, I enrolled to study Nutrition & Dietetics at 34 years old to understand root-cause metabolic science.' },
      { icon: 'fa-solid fa-seedling', title: 'Natural Healing', desc: 'With simple Indian kitchen ingredients, spices, and millets — no starvation or supplements — I reversed my Thyroid & PCOD and lost 25kg.' },
      { icon: 'fa-solid fa-award', title: '5+ Years of Guidance', desc: 'Certified Dietitian with 5+ years of experience giving clients common, accessible meal plans tailored to their unique health goals.' },
      { icon: 'fa-solid fa-trophy', title: '3000+ Clients Transformed', desc: 'Helping women across PCOS, Thyroid, Fatty Liver, and Diabetes achieve sustainable health with 100% natural home food.' }
    ],
    beliefs: [
      { icon: 'fa-solid fa-utensils', title: 'Food is Medicine', desc: 'Every plan is built around real, home-cooked Indian meals — spices, grains, and millets without supplements or pills.' },
      { icon: 'fa-solid fa-ban', title: 'No Starvation Diets', desc: 'Crash diets fail long-term. My programs work with your body, not against it.' },
      { icon: 'fa-solid fa-magnifying-glass', title: 'Root Cause, Not Symptoms', desc: 'We fix the underlying hormonal or metabolic issue — not just chase the number on the scale.' },
      { icon: 'fa-solid fa-infinity', title: 'Built to Last', desc: 'Every plan includes a maintenance phase so results stay — not bounce back in 3 months.' }
    ]
  },

  contact: {
    subtitle: 'Get in Touch',
    titlePrefix: 'Start Your ',
    titleHighlight: 'Transformation Today',
    lead: 'Book a 1-on-1 discovery consultation with Certified Nutritionist Neeta Tiwari. Let’s map out a natural plan for your health goals.',
    location: 'Hyderabad, Telangana, India (Online & In-person Consultations)',
    formHeading: 'Enrollment Form',
    formSubheading: 'All fields are required — pick your program and duration to see the price',
    privacyNote: 'Your information is 100% confidential. No spam.',
    successNote: '’s team will reach out to you on'
  },

  footer: {
    bio: 'Empowering women across Hyderabad and worldwide to reverse PCOS, manage Thyroid, and lose weight permanently through personalized Indian home diets.',
    quickLinks: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Neeta' },
      { href: '/#programs', label: 'Programs' },
      { href: '/#transformations', label: 'Client Transformations' },
      { href: '/#testimonials', label: 'Client Reviews' },
      { href: '/#contact', label: 'Book Consultation' }
    ],
    specializations: [
      'PCOS Reversal Diet',
      'Thyroid Management Coaching',
      'Non-Starvation Weight Loss',
      'Hormone Balancing',
      'Post-Pregnancy Recovery'
    ]
  },

  // ─── PAYMENT ─────────────────────────────────────────────────────────────
  // QR code is generated dynamically from the UPI deep link (see PaymentPage.jsx) —
  // no static QR image needed, it always reflects the exact amount + program.
  payment: {
    bankName: 'HDFC Bank',
    accountName: 'Neeta Tiwari',
    accountNumber: '50100407570020',
    ifsc: 'HDFC0000115',
    upiId: '8837281177@pthdfc'
  }
};
