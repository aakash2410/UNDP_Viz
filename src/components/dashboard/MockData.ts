export interface RadarDataPoint {
  parameter: string;
  Malaysia: number;
  Cambodia: number;
  Philippines: number;
  Bangladesh: number;
  Nepal: number;
  fullMark: number;
}

export const radarData: RadarDataPoint[] = [
  { parameter: 'AI Ecosystem Maturity', Malaysia: 3, Cambodia: 3, Philippines: 3, Bangladesh: 2, Nepal: 0, fullMark: 5 },
  { parameter: 'DPI Ecosystem Maturity', Malaysia: 4, Cambodia: 3, Philippines: 4, Bangladesh: 3, Nepal: 0, fullMark: 5 },
  { parameter: 'Digital Infra Availability', Malaysia: 4, Cambodia: 2, Philippines: 3, Bangladesh: 3, Nepal: 0, fullMark: 5 },
  { parameter: 'Political Stability', Malaysia: 3, Cambodia: 3, Philippines: 3, Bangladesh: 2, Nepal: 0, fullMark: 5 },
  { parameter: 'Stakeholder Participation', Malaysia: 3, Cambodia: 3, Philippines: 3, Bangladesh: 3, Nepal: 0, fullMark: 5 },
  { parameter: 'Funding Landscape', Malaysia: 3, Cambodia: 3, Philippines: 3, Bangladesh: 2, Nepal: 0, fullMark: 5 },
];

export interface MetricCard {
  title: string;
  status: string;
  description: string;
  implementationAgency?: string;
  modalDetails?: {
    fullContext: string;
    keyMetrics: string[];
    timeline?: string;
  };
}

export interface Actor {
  id: string;
  name: string;
  type: string;
  role: string;
  initiatives: string[];
}

export interface InsightPoint {
  id: string;
  text: string;
}

export interface CountryDetailData {
  countryName: string;
  dpiEcosystem: {
    digitalId: MetricCard;
    payments: MetricCard;
    dataExchange: MetricCard;
  };
  aiEcosystem: {
    policy: MetricCard;
    governance: MetricCard;
    legislation: MetricCard;
    initiatives: MetricCard;
  };
  sectionB: {
    fundingLandscape?: string;
    electricityAccess: number;
    internetPenetration: number;
    deviceAccess?: number;
    dataCenters?: string;
    politicalStability: string;
    electionCycles: string;
    infraModalDetails?: {
      fullContext: string;
      keyMetrics: string[];
      timeline?: string;
    };
    leadershipQuote?: {
      text: string;
      author: string;
      context: string;
    };
    politicalModalDetails?: {
      fullContext: string;
      keyMetrics: string[];
      timeline?: string;
    };
    politicalSubParameters?: {
      label: string;
      value: string;
    }[];
  };
  sectionC: {
    actors: Actor[];
  };
  sources?: string[];
  sectionD: {
    opportunities: InsightPoint[];
    risks: InsightPoint[];
    partnerships: InsightPoint[];
  };
}

export const malaysiaData: CountryDetailData = {
  countryName: 'Malaysia',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Implemented (Maturing)', description: 'MyDigital ID (8.7M users)', implementationAgency: 'My Digital ID Sdn Bhd',
      modalDetails: {
        fullContext: "MyDigital ID was formally launched in 2024 with an RM80 million allocation, managed by My Digital ID Sdn Bhd and the Ministry of Digital. It serves as the national foundation for verified digital interactions.",
        keyMetrics: ["8.7 million registered users (~33% adoption)", "RM80.0M central budget allocation", "Used as unified SSO across 10 ministry portals"],
        timeline: "Launched 2024"
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'DuitNow (5.3 bn transactions)', implementationAgency: 'PayNet',
      modalDetails: {
        fullContext: "Implemented initially via the Real-time Retail Payments Platform, DuitNow (managed by PayNet) operates as the primary sovereign retail payment rail, bridging fragmented banking architectures and achieving massive national saturation.",
        keyMetrics: ["5.3 billion transactions processed in 2024", "RM5.4 Trillion in transaction value", "Near-universal banking integration"],
        timeline: "Launched 2018"
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Implemented', description: 'MYGDX (35 million transactions)', implementationAgency: 'MAMPU',
      modalDetails: {
        fullContext: "The Malaysia Government Central Data Exchange (MYGDX) is a secure, API-driven data brokerage platform preventing data duplication across ministries and facilitating immediate citizen services.",
        keyMetrics: ["35 million successful transactions", "125 unique agencies integrated", "Hosts 262 distinct data services"],
        timeline: "Launched 2020"
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Implemented', description: 'Malaysia Artificial Intelligence Roadmap 2021-2025', implementationAgency: 'Malaysian National AI Office (NAIO)',
      modalDetails: {
        fullContext: "Malaysia's Artificial Intelligence Roadmap 2021-2025 outlines the strategic policy.",
        keyMetrics: ["Roadmap 2021-2025"],
        timeline: "Implemented"
      }
    },
    governance: {
      title: 'AI Governance', status: 'Implemented', description: 'National Guidelines on AI Governance and Ethics (AIGE)', implementationAgency: 'Malaysian National AI Office (NAIO)',
      modalDetails: {
        fullContext: "The following guidelines are currently being used: National Guidelines on AI Governance and Ethics (AIGE).",
        keyMetrics: ["AIGE Guidelines active"],
        timeline: "Implemented"
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Implemented', description: 'Data Protection and Privacy Laws', implementationAgency: 'Department of Personal Data Protection',
      modalDetails: {
        fullContext: "Data Protection and Privacy Laws including the Electronic and Postal regulatory frameworks.",
        keyMetrics: ["Data Protection laws active"],
        timeline: "Implemented"
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Active', description: 'AI in Healthcare & Digital Hospitals', implementationAgency: 'Ministry of Health',
      modalDetails: {
        fullContext: "Initiatives include AI in Healthcare through the establishment of Digital Hospitals.",
        keyMetrics: ["AI in Healthcare"],
        timeline: "Ongoing"
      }
    },
  },
  sectionB: {
    fundingLandscape: "",
    electricityAccess: 100,
    internetPenetration: 97.7,
    deviceAccess: 95.5,
    dataCenters: '32 operational, 19 under construction',
    politicalStability: 'Flawed Democracy (44/167)',
    electionCycles: '5 years (Next: Nov-Dec 2027)',
    politicalSubParameters: [
      { label: 'Democracy Index', value: '44/167 (Flawed Democracy)' },
      { label: 'Digital Stability', value: 'High resilience with centralised state backing.' }
    ],
    leadershipQuote: {
      text: "The digital transformation of our nation must be inclusive, ensuring that no one is left behind in reaping its benefits.",
      author: "Datuk Seri Anwar Ibrahim",
      context: "Prime Minister of Malaysia"
    }
  },
  sectionC: {
    actors: [
      { id: 'm1', type: 'Government', name: 'MOSTI, Ministry of Digital, MAMPU, NAIO', role: 'Decision-makers & Implementers', initiatives: ['National AI Roadmap 2021-2025', 'National Guidelines on AI Governance and Ethics', 'RM285M MOSTI budget allocation'] },
      { id: 'm2', type: 'Private', name: 'Petronas, Google, Microsoft, Grab', role: 'Implementers & Influencers', initiatives: ['Data Cloud Region expansions', 'USD 18B+ foreign AI investment', 'Smart City integrations'] },
      { id: 'm3', type: 'Development Partners', name: 'UNESCO, UNDP, World Bank', role: 'Policy Influencers & Funders', initiatives: ['AI Readiness Assessment Methodology (RAM)', 'Ethics Recommendation implementations', 'DFAT Australia standards funding'] },
      { id: 'm4', type: 'Academia', name: 'UTM, UM, MIMOS', role: 'R&D & Talent Pipeline', initiatives: ['AI Sandbox 2024 Pilot', 'Faculty of AI (UTM)', 'RM50M AI education budget'] },
    ],
  },
  sectionD: {
    opportunities: [
      { id: 'mo1', text: 'Public service AI integration: Expanding the "AI at Work" initiative to enhance efficiency across 10 key socio-economic sectors.' },
      { id: 'mo2', text: 'Rapid startup growth: Utilising the AI Sandbox to increase the number of AI technology companies from 284 to 900 by 2026.' },
      { id: 'mo3', text: 'Regional AI leadership: Leveraging the NAIO and the 2024 AIGE guidelines to position Malaysia as a regional hub for ethical AI.' },
    ],
    risks: [
      { id: 'mr1', text: 'Governance and regulatory risks: Legal infrastructure requires significant updates, particularly in data protection and enforceable ethical standards.' },
      { id: 'mr2', text: 'Loss of cultural and linguistic heritage: A lack of explicit policies addressing AI\'s impact on cultural preservation and indigenous languages could lead to a loss of national identity.' },
      { id: 'mr3', text: 'Dependence on foreign Tech: There is a high cost and potential over-dependence on foreign AI vendors which can limit homegrown innovation and sovereign control over AI solutions.' },
    ],
    partnerships: [
      { id: 'mp1', text: 'Green AI advocacy: Working with the Ministry of Digital to establish monitoring systems and policies for sustainable data centers.' },
      { id: 'mp2', text: 'Public sector digital literacy: Support the Department of National Digital (JDN) in implementing the "Public Sector AI Adaptation Guidelines". UNDP can help design training modules for civil servants.' },
      { id: 'mp3', text: 'Strategic innovation-AI Sandbox: Collaborate with the AI Sandbox initiative to provide grants and mentorship for startups focusing on AI for Good.' },
      { id: 'mp4', text: 'Operationalising ethical impact assessments: Partner with the NAIO and MOSTI to pilot UNESCO’s EIA tools to ensure that public sector AI succession remains human-centric, transparent, and accountable.' },
    ],
  },
  sources: ["https://mastic.mosti.gov.my/publication/artificial-intelligence-roadmap-2021-2025/","https://mastic.mosti.gov.my/publication/the-national-guidelines-on-ai-governance-ethics/","https://asean.org/book/asean-guide-on-ai-governance-and-ethics/","https://www.unesco.org/ethics-ai/en/malaysia","https://digitaldevelopmentcompass.undp.org/country/MYS","https://www.mygov.gov.my/ms-MY","https://www.digital-id.my/_next/about","https://www.mosti.gov.my/wp-content/uploads/2023/12/PR-231212-MYDIGITAL-ID-REGISTRATION-FOR-THE-GENERAL-PUBLIC-WILL-COMMENCE-IN-MARCH-2024.pdf","https://www.thestar.com.my/news/nation/2026/02/24/weaknesses-in-management-and-expenditure-of-mydid-project-revealed","https://fastpayments.worldbank.org/sites/default/files/2021","https://www.malaysia.gov.my/en","https://www.biometricupdate.com/202510/malaysia-targets-15m-mydigital-id-users-2026-funds-allocated","https://malaysia.news.yahoo.com/only-2-8-million-malaysians-044521446.html","https://www.malaymail.com/news/malaysia/2026/01/17/mydigital-id-hits-87-million-users-sets-sights-on-15-million-sign-ups-with-e-hailing-boost/205833","https://fastpayments.worldbank.org/sites/default/files/2021-09/World_Bank_FPS_Malaysia_RPP_Case_Study.pdf","https://paynet.my/","https://en.wikipedia.org/wiki/Elections_in_Malaysia","https://en.wikipedia.org/wiki/2022_Malaysian_general_election","https://www.electiondata.my/elections","https://www.malaysia.gov.my/en/government/sistem-pemerintahan-negara/federal-government","https://www.eiu.com/n/campaigns/democracy-index-2024-confirmation/","https://www.worldbank.org/en/publication/worldwide-governance-indicators/interactive-data-access","https://www.ai.gov.my/","https://www.ai.gov.my/thought-leadership"]
};

export const cambodiaData: CountryDetailData = {
  countryName: 'Cambodia',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Implemented (Early Success)', description: 'CamDigiKey (86k Users)', implementationAgency: 'MEF',
      modalDetails: {
        fullContext: "Launched by the Ministry of Economy and Finance in 2019, CamDigiKey is Cambodia’s national platform for verified e-kyc, though adoption presently leans heavily toward business-related government services over retail civilian use.",
        keyMetrics: ["86,000 active users", "Managed by MEF", "Primary driver for business e-services"],
        timeline: "Launched 2019"
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'Bakong (60% adult population)', implementationAgency: 'NBC',
      modalDetails: {
        fullContext: "Bakong is Cambodia's flagship sovereign digital payment system. Operating on blockchain-inspired quasi-decentralised ledgers under the National Bank of Cambodia, it successfully synthesized mobile payments nationwide.",
        keyMetrics: ["Reaches 60% of the adult population", "Operates across local banks and e-wallets", "Blockchain-enabled architecture"],
        timeline: "Launched 2020"
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Implemented', description: 'CamDX', implementationAgency: 'Techo Startup Center',
      modalDetails: {
        fullContext: "CamDX acts as the unified data exchange layer for the Cambodian government, notably powering systems like Verify.gov.kh for secure government document verification.",
        keyMetrics: ["Managed by MEF", "Powers Verify.gov.kh", "Core to Cambodian e-gov architecture"],
        timeline: "Launched 2020"
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Drafted', description: 'National AI Strategy 2025-30', implementationAgency: 'N/A',
      modalDetails: {
        fullContext: "National AI Strategy 2025-30 is in the draft stage.",
        keyMetrics: ["Draft 2025-30 stage"],
        timeline: "Drafted"
      }
    },
    governance: {
      title: 'AI Governance', status: 'Drafted', description: 'AI Readiness Assessment', implementationAgency: 'N/A',
      modalDetails: {
        fullContext: "Cambodia scored 55 out of 100 in the Artificial Intelligence Readiness Assessment, with drafts of Legislation on Personal Data Protection and Cybersecurity yet to pass.",
        keyMetrics: ["Score: 55/100 (AI Readiness)"],
        timeline: "Drafted"
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Drafted', description: 'Data protection and Privacy regulation', implementationAgency: 'N/A',
      modalDetails: {
        fullContext: "Low amount of Data protection and Privacy regulation. Sector Specific AI Regulations haven't been proposed yet; sweeping legislation is in draft.",
        keyMetrics: ["Regulations in draft stage"],
        timeline: "Drafted"
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Early Success', description: 'National Research Center on AI & Landmine mapping', implementationAgency: 'CMAC & MPTC',
      modalDetails: {
        fullContext: "As part of the draft of the National AI Strategy, Cambodia has created the National Research Center on AI for Education, while for practical uses, Landmine detection tools using AI are being built.",
        keyMetrics: ["National Research Center on AI", "Landmine detection tools"],
        timeline: "Active"
      }
    },
  },
  sectionB: {
    fundingLandscape: "",
    electricityAccess: 92.3,
    internetPenetration: 60.0,
    dataCenters: '4 Commercial Data Centres',
    politicalStability: 'Authoritarian Regime - 123/169',
    electionCycles: 'Next: 2028',
    leadershipQuote: {
      text: "Building a digital economy and society is a key priority to drive new economic growth and realize the vision of becoming a high-income country by 2050.",
      author: "Hun Manet",
      context: "Prime Minister of Cambodia (Digital Government Forum 2024)"
    }
  },
  sectionC: {
    actors: [
      { id: 'c1', type: 'Government', name: 'MPTC, MISTI, MOEYS', role: 'Decision-maker & Lead', initiatives: ['National AI Strategy (2024-2035)', '"AI for Good" policies', 'Khmer Large Language Model (Sarika)'] },
      { id: 'c2', type: 'Private', name: 'Techo Startup Center', role: 'Implementer', initiatives: ['Biometric eID deployment', 'OCR liveness checks', 'Bakong fraud detection'] },
      { id: 'c3', type: 'Development Partners', name: 'UNESCO, UNDP, ADB', role: 'Policy Influencer / Funder', initiatives: ['UNESCO AI Ethics RAM Implementation', '$50M ADB digital loan', '"AI Ethics Experts Without Borders"'] },
      { id: 'c4', type: 'Academia', name: 'Cambodia Academy of Digital Tech (CADT)', role: 'Research Hub', initiatives: ['Research Area in AI for Education (RAIE)', '$27M STEPCam Phase II funding', 'LBE Research Grants'] },
    ],
  },
  sectionD: {
    opportunities: [
      { id: 'co1', text: 'Early Succession of e-ID: eID has low Early Succession rates in Cambodia, majorly availed for business-related government service. Expanding this can ensure marginalized populations aren\'t left behind.' },
      { id: 'co2', text: 'National AI Strategy implementation: Focus on AI Safety with operationalizing AI Sandboxes for public health and governance.' },
      { id: 'co3', text: 'Infrastructure Bottlenecks: Connectivity in terms of internet and electricity is improving constantly, though GPU and CPU servers remain scarce.' },
    ],
    risks: [
      { id: 'cr1', text: 'Deepening Digital Divide: Rapid 5G and AI Early Succession risk leaving rural communities and women behind.' },
      { id: 'cr2', text: 'Data Vulnerability & Privacy: With the Law on Personal Data Protection still in the drafting/ratification stage, there is a risk of data misuse.' },
      { id: 'cr3', text: 'Institutional Fragmentation: Digital initiatives are currently split across MPTC, MISTI, and MEF along with separate working groups.' },
    ],
    partnerships: [
      { id: 'cp1', text: 'Joint Human Capital Initiatives: Collaborate with CADT and UNESCO on the $27M STEPCam Phase II to ensure the curriculum includes "Future of Work" skills and AI ethics.' },
      { id: 'cp2', text: 'South-South Cooperation: UNDP can facilitate knowledge exchange between Cambodia and other regional leaders (like Singapore or Vietnam) on DPI implementations.' },
      { id: 'cp3', text: 'Policy Support for AI Ethics: Building on the UNESCO AI Readiness Assessment, partners can provide technical expertise to help turn ethical recommendations into enforceable local laws.' },
      { id: 'cp4', text: 'Private Sector De-risking: Work with the Techo Startup Center to provide grants or technical mentorship for "Impact Tech" startups that solve local developmental challenges using AI.' },
    ],
  },
  sources: ["https://oecd.ai/en/data","https://data.opendevelopmentcambodia.net/en/dataset/5524b0b4-bb31-4cad-abf4-a36f8e82073d/resource/a35e29b9-3dbf-4a5d-92a9-4d3558ed3c03/download/nais-v5-en-for-consultation-clean.pdf","https://www.unesco.org/ethics-ai/en/global-hub","https://www.unesco.org/ethics-ai/en/cambodia","https://www.dlapiperdataprotection.com/","https://www.dlapiperdataprotection.com/?t=law&amp;c=KH#insight","https://www.nec.com/en/press/202510/global_20251029_04.html","https://www.worldbank.org/en/programs/govtech/gtmi-2025-update","https://datahub.itu.int/dashboards/idi/?e=BGD&amp;y=2025","https://dpimap.org/","https://camdigikey.gov.kh/en","https://bakong.nbc.gov.kh/en/","https://camdx.gov.kh/","https://dpiexplorer.org/explore","http://verify.gov/","https://verify.gov.kh/","https://kiripost.com/stories/nbcs-bakong-charts-transaction-growth-at-13b-in-2025","https://www.khmertimeskh.com/501517074/camdx-sees-13-increase-in-usage-to-17-3m-transactions/","https://www.itu.int/reports/wsis-gdc-implementation/objectives/gdc-objective-4/data-for-sustainable-development-goals/","https://kiripost.com/stories/cambodias-untold-digital-divide-why-not-all-daughters-get-to-imagine-a-different-future","https://www.eiu.com/n/global-themes/democracy-index/","https://cambodianess.com/article/hun-manet-says-teachers-catalysts-of-cambodias-ai-transformation","https://databank.worldbank.org/reports.aspx?dsid=31&amp;series=IQ.CPA.MACR.XQ","https://docs.google.com/spreadsheets/d/1vNBjyTfs7Ysur_2Zwu3cPb26NQurQAkcQp_InWwLI0Y/edit?gid=0#gid=0","https://theinvestor.vn/cambodia-focuses-on-digital-revolution-d9023.html#:~:text=By%20Vietnam%20News%20Agency,growth%20and%20improve%20social%20welfare.","https://www.mordorintelligence.com/industry-reports/cambodia-ict-market/companies","https://firstcambodia.com.kh/","https://www.alibabacloud.com/en/campaign/cambodia-contact-us?_p_lc=1#:~:text=Secure%2C%20convenient%2C%20and%20private%20connections,private%20domain%20name%20management%20service","https://www.zoominfo.com/top-lists/top-telecommunications-companies-in-KH","https://cambodia.un.org/en/about/un-entities-in-country?afd_azwaf_tok=eyJraWQiOiJGQ0U3Q0M5QjEyMjMyMDkzMkU2RUI5N0I5MTM5NTkzREU2NUZDNjlBRDFDQUVGMkY5REFFOUY1MEJFMEVCNTcwIiwiYWxnIjoiUlMyNTYifQ.eyJhdWQiOiJjYW1ib2RpYS51bi5vcmciLCJleHAiOjE3NzA5Nzc5OTAsImlhdCI6MTc3MDk3Nzk4MCwiaXNzIjoidGllcjEtNjg1YmZiOTU1Ni03ODR0NyIsInN1YiI6IjEyNDo0OToxNDg4OmVhMmE6YTczZDo1YzE0OmVjOGU6NzVmZSIsImRhdGEiOnsidHlwZSI6Imlzc3VlZCIsInJlZiI6IjIwMjYwMjEzVDEwMTk0MFotMTY4NWJmYjk1NTY3ODR0N2hDMUJPTW1tZzQwMDAwMDAwZmNnMDAwMDAwMDAyNHNzIiwiYiI6IkktWC12UFNGTUc0UmItRmxJOVJZSG5zdWtVcHkwc3ZSNHZtVGQxSnhEa0EiLCJoIjoiVDhPVTl3UFpadHBEaU1ONWpFenVMTHF6alljNmo2emVMZXdGNEgzd1FQUSJ9fQ.OqXDB32T7SrmR4kTCQbxCyMv9pCZlP0-6ZYEXcNwGB81XIVwBbXtrjRIR-JTl37MqqIIpc4Gxgl0YIQipsQHhNtHptVlhh-4VRIVD_f_T2MHiWtyPe85PTaMaInH7gJaGFmbzweBHAnQpnGlurLJNUfgyfhTdWNr1jL06G8l8vqontZStkLernOSryiXXjBDUOIker2pdsaE8SPepBN_KWaxjKk6vRxXYAZs8t9x6ZXbYppgI2OGwdcqo2hajUveiY--VIvb2sczO1TqdFzaKbhXjOS4NIG595iFIQ3fl_OUfPco3lbKG3YPinFoweMRSVTAJhS7AwVZDYpzKtXXTQ.WF3obl2IDtqgvMFRqVdYkD5s","https://cambodiainvestmentreview.com/2026/02/17/cna-documentary-highlights-6-7b-ai-opportunity-by-2030-or-a-widening-digital-divide-for-cambodia-video/"]
};

export const philippinesData: CountryDetailData = {
  countryName: 'Philippines',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Implemented', description: 'PhilSys / PhilID', implementationAgency: 'PSA & BSP',
      modalDetails: {
        fullContext: "PhilSys / PhilID acts as the sovereign foundational identification framework.",
        keyMetrics: ["Implemented"],
        timeline: "Active"
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'PhilPASSPlus, InstaPay, PESONet', implementationAgency: 'PSA & BSP',
      modalDetails: {
        fullContext: "PhilPASSPlus is governed centrally alongside commercial payment rails like InstaPay, PESONet & QR Ph.",
        keyMetrics: ["PhilPASSPlus", "InstaPay", "PESONet"],
        timeline: "Active"
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Implemented', description: 'eGovDX', implementationAgency: 'DICT',
      modalDetails: {
        fullContext: "eGovDX serves as the primary data exchange integration layer.",
        keyMetrics: ["eGovDX active"],
        timeline: "Active"
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Adopted', description: 'National Artificial Intelligence Strategy', implementationAgency: 'DTI',
      modalDetails: {
        fullContext: "Adopted, National Artificial Intelligence Strategy.",
        keyMetrics: ["Adopted"],
        timeline: "Implemented"
      }
    },
    governance: {
      title: 'AI Governance', status: 'Drafted', description: 'Senate Bill no 25', implementationAgency: 'Senate',
      modalDetails: {
        fullContext: "Draft, Pending Appoval for Senate Bill no 25 and others.",
        keyMetrics: ["Senate Bill 25 pending"],
        timeline: "Planned"
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Implemented', description: 'Data Privacy Act', implementationAgency: 'NPC',
      modalDetails: {
        fullContext: "The Philippines’ data protection regime is governed by the national Data Privacy Act.",
        keyMetrics: ["Data Privacy Act"],
        timeline: "Implemented"
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Active', description: 'AI-4RP & SkAI-Pinas', implementationAgency: 'DOST',
      modalDetails: {
        fullContext: "AI-4RP (AI Weather Forecasting & Disaster Resilience) and SkAI-Pinas & ASTI-ALaM among others.",
        keyMetrics: ["AI Weather Forecasting", "SkAI-Pinas"],
        timeline: "Active"
      }
    },
  },
  sectionB: {
    fundingLandscape: "",
    electricityAccess: 97.5,
    internetPenetration: 83.8,
    deviceAccess: 81.0,
    dataCenters: '28 operational, 13 upcoming',
    politicalStability: 'Flawed Democracy (51/167)',
    electionCycles: '6-year cycle (Next: May 2028)',
    politicalSubParameters: [
      { label: 'Democracy Index', value: '51/167 (Flawed Democracy)' },
      { label: 'Regulatory Framework', value: 'Active legislative modernization.' }
    ],
    leadershipQuote: {
      text: "Digitalization is the call of today; not the call of the future—but of the present. It is here. It is needed, and it is needed now.",
      author: "Ferdinand R. Marcos Jr.",
      context: "President of the Philippines (State of the Nation Address)"
    }
  },
  sectionC: {
    actors: [
      { id: 'p1', type: 'Government', name: 'DICT, DTI, DOST, PSA', role: 'Decision-makers & Implementers', initiatives: ['eGovPH Superapp deployment', 'National AI Strategy Roadmap 2.0', '₱18.9 Billion DICT budget allocation'] },
      { id: 'p2', type: 'Private', name: 'GCash, Maya, Globe, PLDT', role: 'Implementers & Influencers', initiatives: ['Expansion of scalable digital banking', '$2B in domestic data center investments', '$4.1 Billion market valuation architectures'] },
      { id: 'p3', type: 'Development Partners', name: 'UNDP, World Bank, ADB', role: 'Policy Influencers & Funders', initiatives: ['Digital-PINAS foundation', 'Philippine Digital Infrastructure Project (PDIP)', '$378M World Bank/AIIB Loans'] },
      { id: 'p4', type: 'Academia', name: 'UP, DLSU, Center for AI Research (CAIR)', role: 'R&D & Talent Development', initiatives: ['AI4RP Weather Forecasting', 'GATES Program for Geospatial AI', 'DOST-funded R&D grants'] },
    ],
  },
  sectionD: {
    opportunities: [
      { id: 'po1', text: 'Accelerating National AI Policy Momentum: Release of NAISR 2.0 and updated DOST AI Roadmap reflects strong government commitment to advancing AI Early Succession.' },
      { id: 'po2', text: 'Expanding Digital Economy: Digital economy drives significant GDP contribution, with above global AI Early Succession and strong projected economic gains.' },
      { id: 'po3', text: 'Growing Multi-Stakeholder Engagement on AI: Active participation from industry, academia, and civil society supports a whole-of-nation approach to AI development.' },
    ],
    risks: [
      { id: 'pr1', text: 'Siloed AI Policymaking & Lack of Lead Agency: Absence of a dedicated coordinating mechanism weakens policy coherence and implementation effectiveness.' },
      { id: 'pr2', text: 'Persistent Infrastructure & Connectivity Gaps: Government R&D spending remains below global benchmarks, limiting domestic innovation and ethical AI research outputs.' },
      { id: 'pr3', text: 'Public Trust Risks: Cyber threats, deepfakes, and potential labor disruption raise concerns over public trust and economic stability.' },
    ],
    partnerships: [
      { id: 'pp1', text: 'Support Establishment of AI Agency Coordination: Assist in operationalizing a dedicated inter-agency (DTI, DICT, DOST, NEDA) mechanism to address siloed AI challenges.' },
      { id: 'pp2', text: 'Increase Capacity Building and R&D Support: Facilitate initiatives to expand funding, strengthen industry-academia collaboration, and boost domestic AI research.' },
      { id: 'pp3', text: 'Strengthen Ethical AI Policy Integration: Support contextualizing AI ethics within Filipino socio-cultural frameworks and promote responsible AI awareness.' },
      { id: 'pp4', text: 'Enhance Data Governance: Support robust data governance frameworks, cross-sector data sharing mechanisms, and AI cybersecurity risk mitigation.' },
    ],
  },
  sources: ["https://erikalegara.com/uploads/NAISR2.0_July2024.pdf","https://senate.gov.ph/legislative-documents/bills/594456","https://www.deped.gov.ph/wp-content/uploads/DO_s2025_013.pdf","https://www.lexology.com/library/detail.aspx?g=91e88551-72ff-439e-82a6-05ace8a7dd61","https://asti.dost.gov.ph/news-articles/asti-pagasa-partner-with-atmo-for-ai-powered-weather-forecasting/","https://atmo.ai/news/philippines-ai-transition","https://asti.dost.gov.ph/projects/itanong/","https://asti.dost.gov.ph/projects/alam-project/","https://pia.gov.ph/news/mmda-eyes-use-of-ai-in-traffic-management/","https://www.pchrd.dost.gov.ph/heartnovation/aina-artificial-intelligence-nutrition-assistant/","https://registry.healthresearch.ph/index.php/registry?cid=8363&layout=details&view=research","https://www.pchrd.dost.gov.ph/news_and_updates/dost-pchrd-presents-ai-driven-innovations-at-amcham-philippines/","https://asti.dost.gov.ph/events/launch-of-the-national-artificial-intelligence-center-for-research-and-innovation/","https://www.ditosapilipinas.com/national/news/article/05/19/2025/dost-asti-inclusive-ai-ecosystem/1599","https://mb.com.ph/2026/02/21/dost-to-launch-national-ai-center","https://pia.gov.ph/news/soccsksargen-backs-dosts-geospatial-technology-ai-initiative/","https://asti.dost.gov.ph/wp-content/uploads/PPAs-2025.pdf","https://dict.gov.ph/news-and-updates/25385","https://pia.gov.ph/news/first-in-asia-world-ph-to-use-blockchain-tech-for-budget/","https://businessmirror.com.ph/2025/07/28/government-to-provide-%E2%82%B11-5-b-for-ai-upskilling-in-2026/","https://news.microsoft.com/source/asia/2026/02/03/deped-and-microsoft-accelerate-learning-recovery-and-ai-literacy-for-filipinos/","https://coare.asti.dost.gov.ph/services","https://asti.dost.gov.ph/news-articles/coare-supercomputing-facility-highlights-its-continuous-support-to-covid-19-centric-initiatives/","https://datacommons.up.edu.ph/about-updc/","https://datareportal.com/reports/digital-2026-philippines"]
};

export const bangladeshData: CountryDetailData = {
  countryName: 'Bangladesh',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Implemented', description: 'National ID', implementationAgency: 'Ministry of Home Affairs',
      modalDetails: {
        fullContext: "The National ID system in Bangladesh managed by the Ministry of Home Affairs is heavily integrated. Youth aged 16 or above are now eligible for NID cards and services, expanding the reach of the e-KYC infrastructure.",
        keyMetrics: ["Tk 70.63 crore allocated for 2026-27", "Youth aged 16+ eligible", "Managed by Ministry of Home Affairs"],
        timeline: "Launched 2016"
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'National Payment Switch Bangladesh', implementationAgency: 'Bangladesh Bank',
      modalDetails: {
        fullContext: "The National Payment Switch Bangladesh (NPSB) facilitates interoperability among banks and MFS providers, setting standardised transfer fees to accelerate adoption.",
        keyMetrics: ["Managed by Bangladesh Bank", "Standardized transfer fees", "Cross-bank interoperability limit established"],
        timeline: "Launched 2012"
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Implemented', description: 'National E-Service Bus & Doptor', implementationAgency: 'BNEA',
      modalDetails: {
        fullContext: "The National E-Service Bus managed by the Bangladesh National Enterprise Architecture (BNEA) provides secure interoperability. Meanwhile, Doptor offers over 10 services and 40 applications to 14,000+ public offices.",
        keyMetrics: ["E-Service Bus used by 15 government agencies", "Doptor serves 140k users", "Scalable interoperability framework"],
        timeline: "National E-Service Bus launched 2019"
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Drafted', description: 'National AI Policy Bangladesh 2026-30', implementationAgency: 'Ministry of ICT',
      modalDetails: {
        fullContext: "Vision: To develop an ethical and innovative environment for the use and development of AI to accelerate Bangladesh’s path towards a middle-income country, as outlined in the Vision 2041 master plan.",
        keyMetrics: ["Aligned with Vision 2041", "Establishes a Smart Bangladesh", "Promotes economic growth"],
        timeline: "Drafted"
      }
    },
    governance: {
      title: 'AI Governance', status: 'Absent', description: '-', implementationAgency: 'N/A',
      modalDetails: {
        fullContext: "No formal AI Governance frameworks or regulations currently exist independently of the drafted AI Policy.",
        keyMetrics: ["None"],
        timeline: "-"
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Implemented', description: 'Personal Data Protection Ordinance', implementationAgency: 'Ministry of ICT',
      modalDetails: {
        fullContext: "Vision: Make provisions for processing personal data ensuring privacy, confidentiality and security. Mission: Creating a unified framework that aligns with international standards.",
        keyMetrics: ["Citizen focused control", "Consent based processes", "Digital sovereignty"],
        timeline: "Implemented"
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Early Success', description: 'MyGov, Kagoj AI & EBLICT', implementationAgency: 'Ministry of ICT',
      modalDetails: {
        fullContext: "MyGov is a one-stop access point for 172 digitised services. Kagoj AI is the first AI platform for Bangla. EBLICT is a joint initiative increasing Bengali inclusion for AI.",
        keyMetrics: ["172 digitised services on MyGov", "Kagoj AI for Bangla NLP", "EBLICT for R&D"],
        timeline: "Active"
      }
    },
  },
  sectionB: {
    fundingLandscape: "",
    electricityAccess: 99.5,
    internetPenetration: 45,
    deviceAccess: 40.0,
    dataCenters: '36 total operational',
    politicalStability: 'Hybrid Regime (100/167)',
    electionCycles: 'Jan 2024 / Feb 2026',
    politicalSubParameters: [
      { label: 'Democracy Index', value: '100/167 (Hybrid Regime)' },
      { label: 'Reform Priorities', value: 'Recent leadership changes driving transparency.' }
    ],
    leadershipQuote: {
      text: "The Smart Bangladesh Vision 2041 aims to bridge the digital divide and ensure services reach every citizen equitably.",
      author: "National Strategy Manifesto",
      context: "Smart Bangladesh Vision 2041"
    }
  },
  sectionC: {
    actors: [
      { id: 'b1', type: 'Government', name: 'MoPTICT, Bangladesh Bank, A2i', role: 'Decision-makers & Implementers', initiatives: ['Smart Bangladesh Vision 2041', 'National ID deployment', '~$200M ICT Division allocation'] },
      { id: 'b2', type: 'Private', name: 'bKash, Banglalink, Intellier', role: 'Implementers', initiatives: ['bHive by Bkash', 'MyBL by Banglalink', 'Nidle by Intellier'] },
      { id: 'b3', type: 'Development Partners', name: 'World Bank, ADB', role: 'Policy Influencers & Funders', initiatives: ['Enhancing Digital Government & Economy Project (EDGE)', 'Promoting AI-Enhanced Distribution Support'] },
    ],
  },
  sectionD: {
    opportunities: [
      { id: 'bo1', text: 'Interbank Payment System: From September 2025, the Bangladesh bank aims to develop an interoperable payment system with the Gates Foundation, built on Mojaloop-based IIPS by July 2027.' },
      { id: 'bo2', text: 'ICT Division Roadmap: A phased approach scaling from immediate technological requirements (Phase 1) to achieving a robust digital economy (Phase 3) by 2030.' },
      { id: 'bo3', text: 'Phygital Public Infrastructure: Aiming to bridge gaps for marginalised groups with physical and digital inclusion touchpoints across urban and rural sectors.' },
    ],
    risks: [
      { id: 'br1', text: 'Data Vulnerability: The NID breach of 2023 exposed about 50 million citizen records, emphasizing a severe shortage of cybersecurity professionals.' },
      { id: 'br2', text: 'Siloed Architectures: Bangladesh’s digital data remains heavily fragmented and isolated, leading to high operational costs and lack of secure interoperability.' },
      { id: 'br3', text: 'Digital Literacy Gap: High volumes of cyberattacks compounded by low public digital literacy and last mile connectivity issues pose significant scaling barriers.' },
    ],
    partnerships: [
      { id: 'bp1', text: 'Data Pending: Information on specific UNDP partnerships in Bangladesh is currently being compiled and will be available in the next report update.' },
      { id: 'bp2', text: 'Cybersecurity Capacity Building: Potential opportunities exist to support MoPTICT in training a resilient workforce to address the critical shortage of cybersecurity professionals.' },
    ],
  },
  sources: ["https://oxfordinsights.com/wp-content/uploads/2025/12/2025-Government-AI-Readiness-Index-2.pdf","https://aipolicy.gov.bd/docs/national-ai-policy-bangladesh-2026-2030-draft-v1.1.pdf","https://www.unesco.org/ethics-ai/en/global-hub","https://www.dlapiperdataprotection.com/","https://file-rangpur.portal.gov.bd/files/pbs2.dinajpur.gov.bd/files/1885c0a0_28a4_4fcc_8d4d_dcd7ce23fd8b/7b684f19a15dfcd0f542382764572486.pdf","https://dev.mygov.bd/#:~:text=Keyboard%20Shortcut%20Keys%0A%0AmyGov%20%2D%20%E0%A6%AE%E0%A6%BE%E0%A6%87%E0%A6%97%E0%A6%AD%20is%20an,apply%20for%20services%20via%20multiple%20access%20points.","https://dpiexplorer.org/explore","https://www.bkash.com/en","https://datahub.itu.int/dashboards/idi/?e=BGD&amp;y=2025","https://dpimap.org/","https://services.nidw.gov.bd/nid-pub/citizen-home/apply","https://www.old.eps.com.bd/blog-details/npsb-national-payment-switch-bangladesh","https://bnda.gov.bd/page/service-detail.jsp?name=service-bus","https://dikkha.com/","https://www.linkedin.com/pulse/identity-infrastructure-why-bangladesh-must-get-id-md-saifuddin-cfa-ix37c#:~:text=Smart%20National%20ID%20Cards:%20Embedded,%2C%20selfies%2C%20and%20mobile%20OTP.","https://www.thedailystar.net/business/news/digital-payments-lose-ground-cash-despite-growth-volume-bb-4037511#:~:text=Bangladesh%20Bank%20data%20show%20that,in%20both%20number%20and%20value.","https://lightcastlepartners.com/cases/digital-transformation-bangladesh-integrated-dpi/#:~:text=However%2C%20the%20study%20found%20that,frameworks%20limit%20seamless%20user%20experiences.","https://www.itu.int/reports/wsis-gdc-implementation/objectives/gdc-objective-4/data-for-sustainable-development-goals/","https://www.undp.org/sites/g/files/zskgke326/files/2025-11/final_digital_bangladesh_ai_ram.pdf","https://www.wipo.int/gii-ranking/en/indicators/313","https://decentralization.net/countries/bangladesh/","https://www.eiu.com/n/global-themes/democracy-index/","https://www.worldbank.org/en/publication/worldwide-governance-indicators","https://govinsider.asia/intl-en/article/bangladeshs-phygital-public-infrastructure-bridges-dpi-theory-and-practice","https://databank.worldbank.org/reports.aspx?dsid=31&amp;series=IQ.CPA.MACR.XQ","https://ega.ee/government-of-bangladesh-signed-strategic-partnership-advance-digital-government/#:~:text=The%20Government%20of%20Bangladesh%20signed%20a%20strategic%20partnership%20with%20the,supported%20E%2Dffective%20Governance%20project.","https://lightcastlepartners.com/cases/digital-transformation-bangladesh-integrated-dpi/","https://ptd.gov.bd/","https://bjitgroup.com/","https://www.acmeai.tech/","https://colocity.com.bd/","https://banglalink.net/en","https://www.unesco.org/en/articles/bangladesh-advances-responsible-ai-agenda-through-multi-partner-cooperation-0#:~:text=Bangladesh%20advances%20responsible%20AI%20agenda%20through%20multi%2Dpartner%20cooperation,Dr.","https://documents1.worldbank.org/curated/en/099082525051033525/pdf/P511786-ad6fb108-5072-428b-a766-0d4659d179d5.pdf","https://www.adb.org/where-we-work/bangladesh","https://www.bd.emb-japan.go.jp/en/assistance/rollingplan2013.pdf","https://www.adb.org/sites/default/files/publication/1050686/asian-development-policy-report-2025.pdf","https://bigd.bracu.ac.bd/wp-content/uploads/2021/12/SCANNING-FOR-DIGITAL-INNOVATIONS-AND-OPPORTUNITIES.pdf","https://erc.undp.org/evaluation/evaluations/detail/13448","https://bnnrc.net/","https://mojaloop.io/bangladesh-bank-building-mojaloop-based-ips/","https://blogs.lse.ac.uk/southasia/2026/02/16/bangladesh-elections-democratic-transition-or-ideological-shift/","https://50in5.net/wp-content/uploads/2024/12/Bangladesh.pdf","https://dspace.bracu.ac.bd/xmlui/bitstream/handle/10361/24162/21164018_MBA.pdf?sequence=1&amp;isAllowed=y#:~:text=Inadequate%20infrastructure%2C%20resource%20restrictions%2C%20political,Bangladesh%2C%20according%20to%20the%20research.","https://dl.acm.org/doi/10.1145/3700794.3700820","https://thefinancialexpress.com.bd/views/views/ai-challenges-bangladeshs-promise-of-inclusion","https://earthjournalism.net/stories/digital-dreams-parched-reality-the-hidden-cost-of-bangladeshs-data-industry-gold-rush#:~:text=The%20Kaliakoir%20Hi%2DTech%20Park%2C%20for%20instance%2C%20has%20a,the%20city's%2024%20million%20residents.","https://www.tbsnews.net/economy/koica-grants-96m-boost-bangladeshs-future-advanced-tech-ai-and-sustainable-development","https://www.adb.org/sites/default/files/publication/1114321/digital-public-infrastructure-south-asia.pdf","https://www.undp.org/bangladesh/publications/bangladesh-artificial-intelligence-readiness-assessment-report"]
};

export const nepalData: CountryDetailData = {
  countryName: 'Nepal',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Implemented (Maturing)', description: 'Rastriya Parichaya Patra', implementationAgency: 'Department of National ID',
      modalDetails: { fullContext: "As of 2025, over 17 million people have been registered which is about 57% of the population and approximately 6 million cards have been printed. The government has started making it mandatory for banking and services.", keyMetrics: ["17 million people registered", "Mandatory in 28 districts for pensions", "97% of local govts online"], timeline: "Launched 2018" }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'National Payments Interface (NPI)', implementationAgency: 'Nepal Rastra Bank',
      modalDetails: { fullContext: "National Payments Interface (NPI) is the consolidated set of APIs of multiple payment systems hosted by NCHL. Fonepay Payment Service Ltd is the largest interoperable network licensed by the Central Bank. In 2024/25, NCHL processed 186M transactions.", keyMetrics: ["186M+ transactions in 2024/25", "Rs 98.43 trillion total transaction value", "Interoperable with UPI Nepal"], timeline: "Launched 2019" }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Pipeline', description: 'Government Cloud', implementationAgency: 'MoCIT',
      modalDetails: { fullContext: "The government of Nepal has partnered with cloud service providers to build infrastructure. The Government Integrated Data Center (GIDC) is operational but data exchange is manual and siloed.", keyMetrics: ["GIDC operational", "Nepal National Single Window (NNSW) central hub"], timeline: "Pipeline" }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Implemented', description: 'National AI Policy 2025', implementationAgency: 'MoCIT',
      modalDetails: { fullContext: "Vision: To build a human-Centered, ethical, and prosperous Nepal through AI. Goals include producing 5k skilled human resources within 5 years and establishing AI Excellence Centres.", keyMetrics: ["5k skilled workers target", "AI Excellence centers in all provinces", "Increase AI literary"], timeline: "Implemented 2025" }
    },
    governance: {
      title: 'AI Governance', status: 'Implemented', description: 'National AI Policy 2025', implementationAgency: 'MoCIT',
      modalDetails: { fullContext: "The Nepal government embedded ethical AI principles and AI Governance within the broader National AI Policy 2025 framework rather than as a standalone legislation.", keyMetrics: ["Tied exclusively to AI Policy 2025"], timeline: "Implemented 2025" }
    },
    legislation: {
      title: 'Data Legislation', status: 'Implemented', description: 'National Cyber Security Policy 2023', implementationAgency: 'MoCIT',
      modalDetails: { fullContext: "To ensure information and data security through developing legal and institutional structure. Goal: to increase Global Cyber Security Index score from 44.99% to 80% in 15 years.", keyMetrics: ["Goal: 80% GCR Index score", "Establish legal framework"], timeline: "Implemented 2023" }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Early Success', description: 'Lalitpur Traffic & SITA', implementationAgency: 'Ministry of Health / LMC',
      modalDetails: { fullContext: "Lalitpur Metropolitan City uses an AI-based intelligent traffic light system. SITA, developed with UNFPA, is an AI platform to rapidly analyse massive national datasets (e.g. NDHS).", keyMetrics: ["Intelligent traffic lights active", "SITA analyzing national datasets", "Plantsat Nepal in Agri in use"], timeline: "Active" }
    },
  },
  sectionB: {
    fundingLandscape: "",
    electricityAccess: 0,
    internetPenetration: 0,
    deviceAccess: 0,
    dataCenters: 'Data Pending',
    politicalStability: 'Data Pending',
    electionCycles: 'Data Pending',
    politicalSubParameters: [
      { label: 'Democracy Index', value: 'Data Pending' },
      { label: 'Regulatory Framework', value: 'Data Pending' }
    ],
  },
  sectionC: {
    actors: [
      { id: 'n1', type: 'Pending', name: 'Actors Pending', role: 'Pending', initiatives: ['Updates available in upcoming version'] },
    ],
  },
  sectionD: {
    opportunities: [{ id: 'no1', text: 'Data Pending: Information will be updated in the upcoming cycle.' }],
    risks: [{ id: 'nr1', text: 'Data Pending: Information will be updated in the upcoming cycle.' }],
    partnerships: [{ id: 'np1', text: 'Data Pending: Information will be updated in the upcoming cycle.' }],
  },
  sources: ["https://nepaleconomicforum.org/a-view-on-the-national-ai-policy/","https://asiapacific.unfpa.org/en/news/sita-nepals-new-ai-tool-could-change-how-country-uses-data","https://www.datacentermap.com/nepal/","https://nagarikapp.gov.np/","https://www.nepjol.info/index.php/njes2/article/view/82964/63413","https://susasan.org/tools","https://www.myrepublica.nagariknetwork.com/amp/news/national-id-backlog-details-of-20m-collected-only-75m-cards-printed-19-46.html#:~:text=Listen,Related%20story","https://english.nepalnews.com/s/business/nepals-digital-transactions-hit-rs-98-43-trillion-in-fy-2024-25/","https://nasc.org.np/sites/default/files/IT%20Infrastructure%20report.pdf","https://www.wipo.int/gii-ranking/en/indicators/313","https://carnegieendowment.org/russia-eurasia/research/2025/09/nepal-gen-z-topple-government","https://risingnepaldaily.com/news/66941","https://www.britishcouncil.org.np/sites/default/files/nepal_cso_landsape_study_final_report.pdf","https://nexus.ingroupe.com/nepals-national-pki-relies-on-nexus","https://digitalrightsnepal.org/wp-content/uploads/2025/05/Final-2022_organized.pdf","https://www.digitalpublicgoods.net/r/rahat","https://nta.gov.np/uploads/contents/MIS%202079%20Magh.pdf","https://www.undp.org/nepal/funding-delivery","https://www.worldbank.org/en/news/press-release/2026/02/09/nepal-world-bank-approves-50-million-digital-transformation-project","https://docs.google.com/document/d/1fkS-vL6lOiX4vC5YfVEqGEmiGCafAZE8zq9ZgcYeDvA/edit?tab=t.wcy24r1uwpnr","https://english.biznessnews.com/posts/nepal-to-resign-world-bank-loan-for-digital-transformation-"]
};
