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
        fullContext: "MyDigital ID (RM80M budget) is a secure, government digital identity solution facilitating access to online portals via single sign-on. It references government databases for identity verification without storing any personal data.",
        keyMetrics: [
          "RM80 million budget allocation",
          "Registration began in 2024 via MyGOV Malaysia",
          "Identity verification without storing personal data"
        ],
        timeline: ""
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'DuitNow (5.3 bn transactions)', implementationAgency: 'PayNet',
      modalDetails: {
        fullContext: "The Real-time Retail Payments Platform (RPP), launched in 2018 and operated by PayNet, is a fast payment system enabling real-time, data-rich transactions among Malaysian consumers, businesses, and government agencies.",
        keyMetrics: [
          "Real-time Retail Payments Platform (RPP) launched in 2018",
          "Enables real-time, data-rich payments between accounts",
          "Operated by PayNet (merger of MEPS and MyClear)",
          "5.3 billion transactions recorded in 2024, representing RM5.4T transaction value"
        ],
        timeline: ""
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Implemented', description: 'MYGDX (35 million transactions)', implementationAgency: 'MAMPU',
      modalDetails: {
        fullContext: "The Malaysian Government Central Data Exchange (MyGDX) is a secure data-sharing ecosystem allowing classified data to be coordinated efficiently across ministries, reducing integration costs and empowering data-driven governance.",
        keyMetrics: [
          "Enhances end-to-end (E2E) online services towards a data-driven government",
          "Reduces cost of infrastructure and system integration",
          "MyGDX currently supports 657 users and 35 million transactions"
        ],
        timeline: ""
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Implemented', description: 'Malaysia Artificial Intelligence Roadmap 2021-2025', implementationAgency: 'Malaysian National AI Office (NAIO)',
      modalDetails: {
        fullContext: "Malaysia\'s AI Roadmap 2021-2025 (MOSTI) aims to augment jobs, drive national competitiveness, and encourage innovation. Outcomes focus on establishing governance, advancing R&D, and fostering AI talents securely.",
        keyMetrics: [
          "Malaysia's Artificial Intelligence Roadmap 2021-2025",
          "Aims to augment jobs and drive national competitiveness",
          "Six envisioned outcomes including AI governance, R&D, and talent",
          "RM285M allocated to MOSTI for AI governance and RM10M for National AI Office (NAIO) in 2025 Budget"
        ],
        timeline: ""
      }
    },
    governance: {
      title: 'AI Governance', status: 'Implemented', description: 'National Guidelines on AI Governance and Ethics (AIGE)', implementationAgency: 'Malaysian National AI Office (NAIO)',
      modalDetails: {
        fullContext: "Regulated via the National Guidelines on AI Governance and Ethics (AIGE) and ASEAN AI guides. Structured across Users, Regulators, and Developers, it is built on 7 principles including fairness, reliability, and human-centricity.",
        keyMetrics: [
          "Built on 7 AI Principles including fairness, reliability, and human-centricity",
          "Structured across three levels: Users, Regulators, and Developers",
          "Guided by National Guidelines (AIGE) and ASEAN AI guide"
        ],
        timeline: ""
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Implemented', description: 'Data Protection and Privacy Laws', implementationAgency: 'Department of Personal Data Protection',
      modalDetails: {
        fullContext: "Governed prominently by the Personal Data Protection Act (PDPA) 2010 (amended 2024) alongside the Computer Crimes Act 1997. The JPDP oversees enforcement, achieving a dynamic legal framework score of 4.17/5 in privacy.",
        keyMetrics: [
          "Personal Data Protection (Amendment) Act 2024 addresses privacy",
          "Score of 4.17/5 in data and privacy (UNDP Digital Development Compass)",
          "Score of 5/5 in cybersecurity (UNDP Digital Development Compass)"
        ],
        timeline: ""
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Active', description: 'AI in Healthcare & Digital Hospitals', implementationAgency: 'Ministry of Health',
      modalDetails: {
        fullContext: "Healthcare commands primary focus with initiatives like MySejahtera (Public Health Gateway), DR MATA (Diabetic Retinopathy Screening), Cof\'e (Cough Sound Screening), and CODIC-MY (Remote Monitoring).",
        keyMetrics: [
          "MySejahtera: Public Health Digital Gateway",
          "DR MATA: AI-Based Diabetic Retinopathy Screening",
          "Cof’e: AI-Driven Cough Sound Screening for COVID-19",
          "CODIC-MY: AI-Powered Remote Monitoring"
        ],
        timeline: ""
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
      { label: 'Elections', value: '5-year cycle (last: Nov 2022). Historical instability since 2020 led to changes in coalition governments.' },
      { label: 'Governance Structure', value: 'Federal Parliamentary Democracy under a Constitutional Monarchy with distinct Executive, Judicial, and Legislative branches.' },
      { label: 'Political Stability', value: 'Stable but fragile. Ranked 44/167 (Flawed Democracy). Metrics: Accountability (54.6), Stability (72.4), Rule of Law (62.9).' },
      { label: 'Institutional Capacity', value: 'Strong focus on digital upskilling via MyDIGITAL, Public Sector AI Guidelines, and private partnerships (e.g., Microsoft). Lacks a uniform training mandate.' },
      { label: 'Leadership Champions', value: 'Prime Minister Anwar Ibrahim and Minister of Digital Gobind Singh Deo are vocal advocates for inclusive, AI-driven transformation.' },
      { label: 'Key Influencers', value: 'MOSTI AI Governance Structures, National Digital Economy Council (MED4IRN), and the Prime Minister\'s Office.' }
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
  sources: ["https://mastic.mosti.gov.my/publication/artificial-intelligence-roadmap-2021-2025/", "https://mastic.mosti.gov.my/publication/the-national-guidelines-on-ai-governance-ethics/", "https://asean.org/book/asean-guide-on-ai-governance-and-ethics/", "https://www.unesco.org/ethics-ai/en/malaysia", "https://digitaldevelopmentcompass.undp.org/country/MYS", "https://www.mygov.gov.my/ms-MY", "https://www.digital-id.my/_next/about", "https://www.mosti.gov.my/wp-content/uploads/2023/12/PR-231212-MYDIGITAL-ID-REGISTRATION-FOR-THE-GENERAL-PUBLIC-WILL-COMMENCE-IN-MARCH-2024.pdf", "https://www.thestar.com.my/news/nation/2026/02/24/weaknesses-in-management-and-expenditure-of-mydid-project-revealed", "https://fastpayments.worldbank.org/sites/default/files/2021", "https://www.malaysia.gov.my/en", "https://www.biometricupdate.com/202510/malaysia-targets-15m-mydigital-id-users-2026-funds-allocated", "https://malaysia.news.yahoo.com/only-2-8-million-malaysians-044521446.html", "https://www.malaymail.com/news/malaysia/2026/01/17/mydigital-id-hits-87-million-users-sets-sights-on-15-million-sign-ups-with-e-hailing-boost/205833", "https://fastpayments.worldbank.org/sites/default/files/2021-09/World_Bank_FPS_Malaysia_RPP_Case_Study.pdf", "https://paynet.my/", "https://en.wikipedia.org/wiki/Elections_in_Malaysia", "https://en.wikipedia.org/wiki/2022_Malaysian_general_election", "https://www.electiondata.my/elections", "https://www.malaysia.gov.my/en/government/sistem-pemerintahan-negara/federal-government", "https://www.eiu.com/n/campaigns/democracy-index-2024-confirmation/", "https://www.worldbank.org/en/publication/worldwide-governance-indicators/interactive-data-access", "https://www.ai.gov.my/", "https://www.ai.gov.my/thought-leadership"]
};

export const cambodiaData: CountryDetailData = {
  countryName: 'Cambodia',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Implemented (Early Success)', description: 'CamDigiKey (86k Users)', implementationAgency: 'MEF',
      modalDetails: {
        fullContext: "Digital identity is prioritized in Phase 1 (2021-2025) of the Cambodia Digital Economy Policy Framework, focusing on the successful deployment of E-ID alongside digital payment gateways and robust cybersecurity laws.",
        keyMetrics: [
          "Targeted in Phase 1 (2021-2025) of the Digital Economy Framework",
          "Focus restricted to foundational E-ID and payment gateways",
          "CamDigiKey adoption currently stands at ~86,000 users"
        ],
        timeline: ""
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'Bakong (60% adult population)', implementationAgency: 'NBC',
      modalDetails: {
        fullContext: "Bakong operates as a primary, DPI-like overarching digital payments infrastructure.",
        keyMetrics: [
          "Bakong identified as primary DPI-like digital payment mechanism"
        ],
        timeline: ""
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Implemented', description: 'CamDX', implementationAgency: 'Techo Startup Center',
      modalDetails: {
        fullContext: "CamDigiKey acts as a foundational, DPI-like digital identity system facilitating governmental digital exchange.",
        keyMetrics: [
          "CamDigiKey listed as primary DPI-like digital ID and exchange mechanism",
          "Verify.gov Cambodia successfully integrated for national government document verification"
        ],
        timeline: ""
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Drafted', description: 'National AI Strategy 2025-30', implementationAgency: 'N/A',
      modalDetails: {
        fullContext: "The Draft National AI Strategy 2025-30 aims to transform Cambodia into a skillful AI adopter. It focuses on developing human capital, digital government excellence, Khmer-language LLM inclusion, and sovereign HPC data centers.",
        keyMetrics: [
          "Draft National AI Strategy 2025-30",
          "Establishing a National AI and Data Science Lab",
          "Strategic push for Khmer Large Language Model (LLM)",
          "AI Strategy is integrated into the $10.1B national budget, targeting an R&D rise from current 0.09% GDP"
        ],
        timeline: ""
      }
    },
    governance: {
      title: 'AI Governance', status: 'Drafted', description: 'AI Readiness Assessment', implementationAgency: 'N/A',
      modalDetails: {
        fullContext: "Cambodia pursues a \'soft law\' approach guided by UNESCO RAM and ASEAN standards. The MPTC oversees efforts to foster a human-centered, rights-based governance ecosystem with drafts for Cybersecurity and Data Protection pending.",
        keyMetrics: [
          "Scored 55 out of 100 in UNESCO AI Readiness Assessment",
          "Implementing a 'soft law' approach guided by UNESCO RAM",
          "Foundational laws on Data Protection and Cybersecurity pending"
        ],
        timeline: ""
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Drafted', description: 'Data protection and Privacy regulation', implementationAgency: 'N/A',
      modalDetails: {
        fullContext: "Currently operating on a limited privacy framework. Sub-Decree 252 applies exclusively to Ministry of Interior identification data. A broader Draft Law on Personal Data Protection was pushed for public consultation in July 2025.",
        keyMetrics: [
          "Sub-Decree 252 applies only to Ministry of Interior identification data",
          "Draft Law on Personal Data Protection released for public consultation (July 2025)"
        ],
        timeline: ""
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Early Success', description: 'National Research Center on AI & Landmine mapping', implementationAgency: 'CMAC & MPTC',
      modalDetails: {
        fullContext: "Key projects include the National Research Center on AI for Education, AI-based Landmine detection tools aimed at achieving a landmine-free status by 2030, and a Khmer-based LLM building on open-source frameworks.",
        keyMetrics: [
          "National Research Center on AI for Education inaugurated (Nov 2025)",
          "AI-assisted Landmine detection targeting a landmine-free status by 2030",
          "Developing an open-source Khmer Large Language Model with Singapore"
        ],
        timeline: ""
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
    politicalSubParameters: [
      { label: 'Elections', value: '5-year cycle (last: 2023-24; next: 2028-29). Predominantly single-party governance model.' },
      { label: 'Governance Structure', value: 'Constitutional Monarchy with a Parliamentary system, governed centrally with one-party dominance.' },
      { label: 'Political Stability', value: 'Classified as \'Authoritarian\' (Rank 123/169) in the 2024 Democracy Index.' },
      { label: 'Digital Priority', value: 'High priority on human development and digital skills, prominently featuring a National AI Strategy draft and the National Research Center on AI for Education.' },
      { label: 'Institutional Capacity', value: 'Data infrastructure capacity is improving steadily (2019-2023), aligning with long-term digital transformation objectives.' },
      { label: 'Leadership Champions', value: 'Prime Minister Hun Manet and Minister of Post and Telecommunications expressly champion digital skills and ethical technology.' },
      { label: 'Key Influencers', value: 'Ministry of Post and Telecommunications (MPTC) and Ministry of Industry, Science, Technology and Innovation (MISTI).' }
    ],
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
  sources: ["https://oecd.ai/en/data", "https://data.opendevelopmentcambodia.net/en/dataset/5524b0b4-bb31-4cad-abf4-a36f8e82073d/resource/a35e29b9-3dbf-4a5d-92a9-4d3558ed3c03/download/nais-v5-en-for-consultation-clean.pdf", "https://www.unesco.org/ethics-ai/en/global-hub", "https://www.unesco.org/ethics-ai/en/cambodia", "https://www.dlapiperdataprotection.com/", "https://www.dlapiperdataprotection.com/?t=law&amp;c=KH#insight", "https://www.nec.com/en/press/202510/global_20251029_04.html", "https://www.worldbank.org/en/programs/govtech/gtmi-2025-update", "https://datahub.itu.int/dashboards/idi/?e=BGD&amp;y=2025", "https://dpimap.org/", "https://camdigikey.gov.kh/en", "https://bakong.nbc.gov.kh/en/", "https://camdx.gov.kh/", "https://dpiexplorer.org/explore", "http://verify.gov/", "https://verify.gov.kh/", "https://kiripost.com/stories/nbcs-bakong-charts-transaction-growth-at-13b-in-2025", "https://www.khmertimeskh.com/501517074/camdx-sees-13-increase-in-usage-to-17-3m-transactions/", "https://www.itu.int/reports/wsis-gdc-implementation/objectives/gdc-objective-4/data-for-sustainable-development-goals/", "https://kiripost.com/stories/cambodias-untold-digital-divide-why-not-all-daughters-get-to-imagine-a-different-future", "https://www.eiu.com/n/global-themes/democracy-index/", "https://cambodianess.com/article/hun-manet-says-teachers-catalysts-of-cambodias-ai-transformation", "https://databank.worldbank.org/reports.aspx?dsid=31&amp;series=IQ.CPA.MACR.XQ", "https://docs.google.com/spreadsheets/d/1vNBjyTfs7Ysur_2Zwu3cPb26NQurQAkcQp_InWwLI0Y/edit?gid=0#gid=0", "https://theinvestor.vn/cambodia-focuses-on-digital-revolution-d9023.html#:~:text=By%20Vietnam%20News%20Agency,growth%20and%20improve%20social%20welfare.", "https://www.mordorintelligence.com/industry-reports/cambodia-ict-market/companies", "https://firstcambodia.com.kh/", "https://www.alibabacloud.com/en/campaign/cambodia-contact-us?_p_lc=1#:~:text=Secure%2C%20convenient%2C%20and%20private%20connections,private%20domain%20name%20management%20service", "https://www.zoominfo.com/top-lists/top-telecommunications-companies-in-KH", "https://cambodia.un.org/en/about/un-entities-in-country?afd_azwaf_tok=eyJraWQiOiJGQ0U3Q0M5QjEyMjMyMDkzMkU2RUI5N0I5MTM5NTkzREU2NUZDNjlBRDFDQUVGMkY5REFFOUY1MEJFMEVCNTcwIiwiYWxnIjoiUlMyNTYifQ.eyJhdWQiOiJjYW1ib2RpYS51bi5vcmciLCJleHAiOjE3NzA5Nzc5OTAsImlhdCI6MTc3MDk3Nzk4MCwiaXNzIjoidGllcjEtNjg1YmZiOTU1Ni03ODR0NyIsInN1YiI6IjEyNDo0OToxNDg4OmVhMmE6YTczZDo1YzE0OmVjOGU6NzVmZSIsImRhdGEiOnsidHlwZSI6Imlzc3VlZCIsInJlZiI6IjIwMjYwMjEzVDEwMTk0MFotMTY4NWJmYjk1NTY3ODR0N2hDMUJPTW1tZzQwMDAwMDAwZmNnMDAwMDAwMDAyNHNzIiwiYiI6IkktWC12UFNGTUc0UmItRmxJOVJZSG5zdWtVcHkwc3ZSNHZtVGQxSnhEa0EiLCJoIjoiVDhPVTl3UFpadHBEaU1ONWpFenVMTHF6alljNmo2emVMZXdGNEgzd1FQUSJ9fQ.OqXDB32T7SrmR4kTCQbxCyMv9pCZlP0-6ZYEXcNwGB81XIVwBbXtrjRIR-JTl37MqqIIpc4Gxgl0YIQipsQHhNtHptVlhh-4VRIVD_f_T2MHiWtyPe85PTaMaInH7gJaGFmbzweBHAnQpnGlurLJNUfgyfhTdWNr1jL06G8l8vqontZStkLernOSryiXXjBDUOIker2pdsaE8SPepBN_KWaxjKk6vRxXYAZs8t9x6ZXbYppgI2OGwdcqo2hajUveiY--VIvb2sczO1TqdFzaKbhXjOS4NIG595iFIQ3fl_OUfPco3lbKG3YPinFoweMRSVTAJhS7AwVZDYpzKtXXTQ.WF3obl2IDtqgvMFRqVdYkD5s", "https://cambodiainvestmentreview.com/2026/02/17/cna-documentary-highlights-6-7b-ai-opportunity-by-2030-or-a-widening-digital-divide-for-cambodia-video/"]
};

export const philippinesData: CountryDetailData = {
  countryName: 'Philippines',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Implemented', description: 'PhilSys / PhilID', implementationAgency: 'PSA & BSP',
      modalDetails: {
        fullContext: "The Philippine Identification System (PhilSys) administers the PhilID and a unique biometric-supported identification number. Driven by the Philippine Statistics Authority, it streamlines transactions strictly under Data Privacy Act safeguards.",
        keyMetrics: [
          "PhilSys issues unique identification number supported by biometric data",
          "Administered by the Philippine Statistics Authority",
          "90.02 Million registered users (~80% of population) utilizing PhilSys backed by a ₱30B budget"
        ],
        timeline: ""
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'PhilPASSPlus, InstaPay, PESONet', implementationAgency: 'PSA & BSP',
      modalDetails: {
        fullContext: "PhilPaSSplus constitutes the BSP-operated real-time gross settlement system. It enables high-value interbank fund transfers and market settlements, strengthening payment system resilience and national liquidity management.",
        keyMetrics: [
          "PhilPaSSplus enables real time high-value interbank fund transfers",
          "Operated by the Bangko Sentral ng Pilipinas",
          "Projected ₱24.745 trillion in total transaction value by the end of 2025 across InstaPay and PESONet"
        ],
        timeline: ""
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Implemented', description: 'eGovDX', implementationAgency: 'DICT',
      modalDetails: {
        fullContext: "The eGovDX platform (DICT) enables interoperable inter-agency data sharing. Complementary retail payments rely on InstaPay, PESONet, and QR Ph for real-time, low-cost financial fund routing.",
        keyMetrics: [
          "eGovDX enables interoperable data sharing among government agencies",
          "InstaPay, PESONet, and QR Ph facilitate electronic fund transfers",
          "eGov PH Super App achieved 5M+ downloads with 42 out of 75 NGAs integrated successfully"
        ],
        timeline: ""
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Adopted', description: 'National Artificial Intelligence Strategy', implementationAgency: 'DTI',
      modalDetails: {
        fullContext: "The National AI Strategy Roadmap (NAISR) 2.0 targets boosting R&D spending to 1.0% GDP. It centers on the Center for AI Research (CAIR) to orchestrate sustainable agriculture, resilience, and large-scale workforce upskilling.",
        keyMetrics: [
          "National AI Strategy Roadmap (NAISR) 2.0 targets 1.0% of GDP R&D spending",
          "Aims to boost economy by up to PHP 2.6 trillion annually",
          "Launched the Center for AI Research (CAIR)",
          "Center for AI Research (CAIR) launched alongside machine learning optimization (ALAM Project)"
        ],
        timeline: ""
      }
    },
    governance: {
      title: 'AI Governance', status: 'Drafted', description: 'Senate Bill no 25', implementationAgency: 'Senate',
      modalDetails: {
        fullContext: "Senate Bill No. 25 (AI Regulation Act) is pending. It proposes a National AI Commission, an AI Ethics Review Board, risk-based system classifications, and strict labor protections requiring advanced notification of AI workplace integration.",
        keyMetrics: [
          "Senate Bill No. 25 proposes a National AI Commission",
          "Mandates risk-based classification of AI systems",
          "Requires employers to provide advance notification for AI integration"
        ],
        timeline: ""
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Implemented', description: 'Data Privacy Act', implementationAgency: 'NPC',
      modalDetails: {
        fullContext: "The Data Privacy Act of 2012 (enforced by the National Privacy Commission) strictly regulates personal data processing, mandating lawful bases like consent, strict confidentiality, and 72-hour breach notifications.",
        keyMetrics: [
          "Governed by the Data Privacy Act of 2012 (Republic Act No. 10173)",
          "Regulated by the independent National Privacy Commission",
          "Requires 72-hour breach notification where risk of harm exists"
        ],
        timeline: ""
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Active', description: 'AI-4RP & SkAI-Pinas', implementationAgency: 'DOST',
      modalDetails: {
        fullContext: "Over 12 major projects, including AI-4RP (weather forecasting), iTANONG (natural language government queries), AI traffic signaling by the MMDA, the National Data Lakehouse, and a ₱1.5 Billion national AI upskilling allocation.",
        keyMetrics: [
          "₱1.5 Billion national allocation for AI Upskilling Initiative",
          "Digital Bayanihan Chain (Blockchain for National Budget Transparency)",
          "AI-4RP AI-enhanced weather forecasting with DOST-ASTI",
          "National Data Lakehouse under GATES Program"
        ],
        timeline: ""
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
      { label: 'Elections', value: '6-year presidential terms; 3-year midterms (last: May 2025; next presidential: 2028). Transitions are often influenced by political alliance shifts.' },
      { label: 'Governance Structure', value: 'Unitary Republic with significant decentralization to local governments, plus the autonomous BARMM region.' },
      { label: 'Political Stability', value: 'Constitutionally stable but prone to elite factional polarization. Accountability is relatively high, but political stability counts are impacted by internal conflicts.' },
      { label: 'Digital Priority', value: 'Shifting from basic connectivity to heavy digital economy emphasis (AI and cloud-first policies) targeting 12% GDP contribution by 2026.' },
      { label: 'Institutional Capacity', value: 'Uneven. Central agencies demonstrate high technical capacity, whereas rural local government units often lack sufficient budget and technical staff.' },
      { label: 'Leadership Champions', value: 'President Marcos Jr. (championing National ID) and DICT Secretary Henry Rhoel Aguda (driving tech ecosystem orchestration).' },
      { label: 'Key Influencers', value: 'DICT (implementer), NEDA (funding), and Anti-Red Tape Authority (enforcing service automation).' },
      { label: 'Civil Society', value: 'Vibrant and highly active, though facing challenges with disinformation and the complete inclusion of marginalized groups.' }
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
  sources: ["https://erikalegara.com/uploads/NAISR2.0_July2024.pdf", "https://senate.gov.ph/legislative-documents/bills/594456", "https://www.deped.gov.ph/wp-content/uploads/DO_s2025_013.pdf", "https://www.lexology.com/library/detail.aspx?g=91e88551-72ff-439e-82a6-05ace8a7dd61", "https://asti.dost.gov.ph/news-articles/asti-pagasa-partner-with-atmo-for-ai-powered-weather-forecasting/", "https://atmo.ai/news/philippines-ai-transition", "https://asti.dost.gov.ph/projects/itanong/", "https://asti.dost.gov.ph/projects/alam-project/", "https://pia.gov.ph/news/mmda-eyes-use-of-ai-in-traffic-management/", "https://www.pchrd.dost.gov.ph/heartnovation/aina-artificial-intelligence-nutrition-assistant/", "https://registry.healthresearch.ph/index.php/registry?cid=8363&layout=details&view=research", "https://www.pchrd.dost.gov.ph/news_and_updates/dost-pchrd-presents-ai-driven-innovations-at-amcham-philippines/", "https://asti.dost.gov.ph/events/launch-of-the-national-artificial-intelligence-center-for-research-and-innovation/", "https://www.ditosapilipinas.com/national/news/article/05/19/2025/dost-asti-inclusive-ai-ecosystem/1599", "https://mb.com.ph/2026/02/21/dost-to-launch-national-ai-center", "https://pia.gov.ph/news/soccsksargen-backs-dosts-geospatial-technology-ai-initiative/", "https://asti.dost.gov.ph/wp-content/uploads/PPAs-2025.pdf", "https://dict.gov.ph/news-and-updates/25385", "https://pia.gov.ph/news/first-in-asia-world-ph-to-use-blockchain-tech-for-budget/", "https://businessmirror.com.ph/2025/07/28/government-to-provide-%E2%82%B11-5-b-for-ai-upskilling-in-2026/", "https://news.microsoft.com/source/asia/2026/02/03/deped-and-microsoft-accelerate-learning-recovery-and-ai-literacy-for-filipinos/", "https://coare.asti.dost.gov.ph/services", "https://asti.dost.gov.ph/news-articles/coare-supercomputing-facility-highlights-its-continuous-support-to-covid-19-centric-initiatives/", "https://datacommons.up.edu.ph/about-updc/", "https://datareportal.com/reports/digital-2026-philippines"]
};

export const bangladeshData: CountryDetailData = {
  countryName: 'Bangladesh',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Implemented', description: 'National ID', implementationAgency: 'Ministry of Home Affairs',
      modalDetails: {
        fullContext: "The National ID is a microchip-embedded smart card featuring a unique 10-digit National Identification Number (NIN). It is historically foundational for verifying access to banking, mobile registration, and voting.",
        keyMetrics: [
          "National ID is a smart card featuring a unique 10-digit NIN",
          "90 million NID cards achieved by 2018 under World Bank IDEAS Project",
          "Youth aged 16 or above now eligible for NID cards as of February 2026",
          "Tk 70.63 crore allocated for NID initiatives spanning 2026-27"
        ],
        timeline: ""
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'National Payment Switch Bangladesh', implementationAgency: 'Bangladesh Bank',
      modalDetails: {
        fullContext: "Operational since 2012, the National Payment Switch (NPSB) allows seamless, structured fund routing from customers to banks to Mobile Financial Services (MFS) with strictly regulated transfer rates.",
        keyMetrics: [
          "National Payment Switch Bangladesh (NPSB) operational since 2012",
          "Fees regulated at Tk 1.5 per Tk 1,000 (Bank-to-MFS)",
          "Regulated transaction fees: Bank-to-MFS set at Tk 1.5/Tk 1,000; MFS-to-bank at Tk 8.5/Tk 1,000"
        ],
        timeline: ""
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Implemented', description: 'National E-Service Bus & Doptor', implementationAgency: 'BNEA',
      modalDetails: {
        fullContext: "The National E-Service Bus connects roughly 15 government agencies (e.g. NID, agricultural ministries) by standardizing API specifications and operational technical capacity for consolidated service delivery.",
        keyMetrics: [
          "National E-Service Bus used by ~15 government agencies (Aug 2025)",
          "World Bank assisting with API standardization and capacity building",
          "National E-Service Bus utilization scaled to 15 key Bangladeshi government agencies as of August 2025"
        ],
        timeline: ""
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Drafted', description: 'National AI Policy Bangladesh 2026-30', implementationAgency: 'Ministry of ICT',
      modalDetails: {
        fullContext: "The Draft National AI Policy 2026-30 envisions a \'Smart Bangladesh\' mapped across Smart Government, Society, Economy, and Citizen. It focuses on elevating global AI readiness and ethical compliance.",
        keyMetrics: [
          "National AI Policy 2026-30 (Draft V2.0)",
          "4 Pillars: Smart Government, Smart Society, Smart Economy, Smart Citizen",
          "Aligned with the Vision 2041 master plan"
        ],
        timeline: ""
      }
    },
    governance: {
      title: 'AI Governance', status: 'Absent', description: '-', implementationAgency: 'N/A',
      modalDetails: {
        fullContext: "Governance targets are woven into the AI Policy drafting mechanisms to institute ethical oversight, secure compliance mandates, and champion innovation strictly within the public sector.",
        keyMetrics: [
          "Objectives mandate ethical and secure AI governance and compliance"
        ],
        timeline: ""
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Implemented', description: 'Personal Data Protection Ordinance', implementationAgency: 'Ministry of ICT',
      modalDetails: {
        fullContext: "The Personal Data Protection Ordinance 2025 intends to establish a unified data framework prioritizing citizen-focused control, consent-based operational processes, and overarching digital sovereignty.",
        keyMetrics: [
          "Personal Data Protection Ordinance (2025)",
          "Recognizes personal data as a personal right of the data-subject",
          "Prioritizes citizen-focused control and consent-based processes"
        ],
        timeline: ""
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Early Success', description: 'MyGov, Kagoj AI & EBLICT', implementationAgency: 'Ministry of ICT',
      modalDetails: {
        fullContext: "Prominent deployments include \'MyGov\' (centralizing 172 digitized services) and \'Kagoj AI\' (Bangladesh’s first Bangla-language AI processing platform enhancing dual-language digitized writing).",
        keyMetrics: [
          "MyGov platform centralizes 172 digitized services across 7 sectors",
          "Kagoj AI supports AI-driven language processing in Bangla",
          "EBLICT initiative to increase inclusion of Bengali for AI development"
        ],
        timeline: ""
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
      { label: 'Elections', value: 'National elections have recently concluded, initiating transitions in parliamentary dynamics.' },
      { label: 'Governance Structure', value: 'Centralized Democratic Republic. Unicameral parliament (Jatiya Sangsad) with an indirectly elected President and Prime Minister-led cabinet.' },
      { label: 'Political Stability', value: 'Faces challenges. Scored lower on global Governance Indicators, particularly in Control of Corruption (25.5) and Accountability (36.5).' },
      { label: 'Digital Priority', value: 'Transitioning from \'Digital Bangladesh\' to \'Smart Bangladesh 2041,\' prioritizing secure AI ecosystems and aiming for 50k cybersecurity experts by 2030.' },
      { label: 'Institutional Capacity', value: 'Moderate macroeconomic management rating (3/6), reflecting ongoing efforts to improve central policy implementation.' },
      { label: 'Leadership Champions', value: 'Strategic capacity-building partnerships formally signed with the e-Governance Academy and British Council to advance digital frameworks.' },
      { label: 'Key Influencers', value: 'a2i (Aspire to Innovate), Bangladesh Bank, and the ICT Division of the Ministry of Posts and Telecommunications.' },
      { label: 'Technical Expertise', value: 'Specialized authorities (BGD e-GOV CIRT, Digital Service Design Lab) collaborate tightly with academia to train civil servants.' }
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
  sources: ["https://oxfordinsights.com/wp-content/uploads/2025/12/2025-Government-AI-Readiness-Index-2.pdf", "https://aipolicy.gov.bd/docs/national-ai-policy-bangladesh-2026-2030-draft-v1.1.pdf", "https://www.unesco.org/ethics-ai/en/global-hub", "https://www.dlapiperdataprotection.com/", "https://file-rangpur.portal.gov.bd/files/pbs2.dinajpur.gov.bd/files/1885c0a0_28a4_4fcc_8d4d_dcd7ce23fd8b/7b684f19a15dfcd0f542382764572486.pdf", "https://dev.mygov.bd/#:~:text=Keyboard%20Shortcut%20Keys%0A%0AmyGov%20%2D%20%E0%A6%AE%E0%A6%BE%E0%A6%87%E0%A6%97%E0%A6%AD%20is%20an,apply%20for%20services%20via%20multiple%20access%20points.", "https://dpiexplorer.org/explore", "https://www.bkash.com/en", "https://datahub.itu.int/dashboards/idi/?e=BGD&amp;y=2025", "https://dpimap.org/", "https://services.nidw.gov.bd/nid-pub/citizen-home/apply", "https://www.old.eps.com.bd/blog-details/npsb-national-payment-switch-bangladesh", "https://bnda.gov.bd/page/service-detail.jsp?name=service-bus", "https://dikkha.com/", "https://www.linkedin.com/pulse/identity-infrastructure-why-bangladesh-must-get-id-md-saifuddin-cfa-ix37c#:~:text=Smart%20National%20ID%20Cards:%20Embedded,%2C%20selfies%2C%20and%20mobile%20OTP.", "https://www.thedailystar.net/business/news/digital-payments-lose-ground-cash-despite-growth-volume-bb-4037511#:~:text=Bangladesh%20Bank%20data%20show%20that,in%20both%20number%20and%20value.", "https://lightcastlepartners.com/cases/digital-transformation-bangladesh-integrated-dpi/#:~:text=However%2C%20the%20study%20found%20that,frameworks%20limit%20seamless%20user%20experiences.", "https://www.itu.int/reports/wsis-gdc-implementation/objectives/gdc-objective-4/data-for-sustainable-development-goals/", "https://www.undp.org/sites/g/files/zskgke326/files/2025-11/final_digital_bangladesh_ai_ram.pdf", "https://www.wipo.int/gii-ranking/en/indicators/313", "https://decentralization.net/countries/bangladesh/", "https://www.eiu.com/n/global-themes/democracy-index/", "https://www.worldbank.org/en/publication/worldwide-governance-indicators", "https://govinsider.asia/intl-en/article/bangladeshs-phygital-public-infrastructure-bridges-dpi-theory-and-practice", "https://databank.worldbank.org/reports.aspx?dsid=31&amp;series=IQ.CPA.MACR.XQ", "https://ega.ee/government-of-bangladesh-signed-strategic-partnership-advance-digital-government/#:~:text=The%20Government%20of%20Bangladesh%20signed%20a%20strategic%20partnership%20with%20the,supported%20E%2Dffective%20Governance%20project.", "https://lightcastlepartners.com/cases/digital-transformation-bangladesh-integrated-dpi/", "https://ptd.gov.bd/", "https://bjitgroup.com/", "https://www.acmeai.tech/", "https://colocity.com.bd/", "https://banglalink.net/en", "https://www.unesco.org/en/articles/bangladesh-advances-responsible-ai-agenda-through-multi-partner-cooperation-0#:~:text=Bangladesh%20advances%20responsible%20AI%20agenda%20through%20multi%2Dpartner%20cooperation,Dr.", "https://documents1.worldbank.org/curated/en/099082525051033525/pdf/P511786-ad6fb108-5072-428b-a766-0d4659d179d5.pdf", "https://www.adb.org/where-we-work/bangladesh", "https://www.bd.emb-japan.go.jp/en/assistance/rollingplan2013.pdf", "https://www.adb.org/sites/default/files/publication/1050686/asian-development-policy-report-2025.pdf", "https://bigd.bracu.ac.bd/wp-content/uploads/2021/12/SCANNING-FOR-DIGITAL-INNOVATIONS-AND-OPPORTUNITIES.pdf", "https://erc.undp.org/evaluation/evaluations/detail/13448", "https://bnnrc.net/", "https://mojaloop.io/bangladesh-bank-building-mojaloop-based-ips/", "https://blogs.lse.ac.uk/southasia/2026/02/16/bangladesh-elections-democratic-transition-or-ideological-shift/", "https://50in5.net/wp-content/uploads/2024/12/Bangladesh.pdf", "https://dspace.bracu.ac.bd/xmlui/bitstream/handle/10361/24162/21164018_MBA.pdf?sequence=1&amp;isAllowed=y#:~:text=Inadequate%20infrastructure%2C%20resource%20restrictions%2C%20political,Bangladesh%2C%20according%20to%20the%20research.", "https://dl.acm.org/doi/10.1145/3700794.3700820", "https://thefinancialexpress.com.bd/views/views/ai-challenges-bangladeshs-promise-of-inclusion", "https://earthjournalism.net/stories/digital-dreams-parched-reality-the-hidden-cost-of-bangladeshs-data-industry-gold-rush#:~:text=The%20Kaliakoir%20Hi%2DTech%20Park%2C%20for%20instance%2C%20has%20a,the%20city's%2024%20million%20residents.", "https://www.tbsnews.net/economy/koica-grants-96m-boost-bangladeshs-future-advanced-tech-ai-and-sustainable-development", "https://www.adb.org/sites/default/files/publication/1114321/digital-public-infrastructure-south-asia.pdf", "https://www.undp.org/bangladesh/publications/bangladesh-artificial-intelligence-readiness-assessment-report"]
};

export const nepalData: CountryDetailData = {
  countryName: 'Nepal',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Implemented (Maturing)', description: 'Rastriya Parichaya Patra', implementationAgency: 'Department of National ID',
      modalDetails: {
        fullContext: "The Rastriya Parichaya Patra (National Identity) integrates closely with the Nagarik App. It is mandated for vital events, banking, and social security across millions, though physical KYC authentication hurdles remain common.",
        keyMetrics: [
          "Rastriya Parichaya Patra registered over 17 million people (57% of population)",
          "Mandated in 28 districts for access to pensions and health insurance",
          "Integrated with the Nagarik App",
          "Rastriya Parichaya Patra enrollment reached 57% of the total demographic population"
        ],
        timeline: ""
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'National Payments Interface (NPI)', implementationAgency: 'Nepal Rastra Bank',
      modalDetails: {
        fullContext: "The National Payments Interface (NPI) consolidates APIs across public payment systems (NCHL-IPS, RPS). Operated by Nepal Clearing House Limited, it handles immense trading volumes encompassing nearly 90% of government expenses.",
        keyMetrics: [
          "National Payments Interface (NPI) handles ~90% of government digital expenses",
          "Processed 186 million transactions in 2024/25",
          "QR payments accepted by over 2 million merchants (117% volume growth)",
          "NPI processed 186 million transactions, covering 17% of total market volume but 77% of value"
        ],
        timeline: ""
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Pipeline', description: 'Government Cloud', implementationAgency: 'MoCIT',
      modalDetails: {
        fullContext: "Inter-agency data interoperability predominantly rides the rails of the National Payments Interface stack to orchestrate real-time financial clearing routes.",
        keyMetrics: [
          "Operates an Open API platform concept via the National Payments Interface"
        ],
        timeline: ""
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Implemented', description: 'National AI Policy 2025', implementationAgency: 'MoCIT',
      modalDetails: {
        fullContext: "The National AI Policy 2025 strives to dramatically elevate socio-economic development, boost IT GDP contributions by 1%, train 5,000 AI professionals, establish provincial AI centers, and achieve universal AI literacy.",
        keyMetrics: [
          "National AI Policy 2025 aims to increase IT sector GDP contribution by 1%",
          "Goal to produce 5,000 skilled AI human resources within 5 years",
          "Establish AI Excellence Centres across all provinces"
        ],
        timeline: ""
      }
    },
    governance: {
      title: 'AI Governance', status: 'Implemented', description: 'National AI Policy 2025', implementationAgency: 'MoCIT',
      modalDetails: {
        fullContext: "Directly embedded inside the overarching AI Policy objectives to orchestrate a sustainable, reliable, and secure AI ecosystem bridging public service delivery systems.",
        keyMetrics: [
          "Goal to improve Nepal’s position within the top 50 in Global Government AI Readiness",
          "Build a sustainable and reliable AI ecosystem"
        ],
        timeline: ""
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Implemented', description: 'National Cyber Security Policy 2023', implementationAgency: 'MoCIT',
      modalDetails: {
        fullContext: "Governed dynamically by the National Cyber Security Policy 2023, which aims to protect critical national infrastructure and aggressively scale Nepal\'s Global Cyber Security Index to 80% over 15 years.",
        keyMetrics: [
          "National Cyber Security Policy 2023",
          "Goal to increase Global Cyber Security Index score to 80% within 15 years",
          "Aims to protect critical national infrastructure"
        ],
        timeline: ""
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Early Success', description: 'Lalitpur Traffic & SITA', implementationAgency: 'Ministry of Health / LMC',
      modalDetails: {
        fullContext: "Implementations encompass a pioneering AI-based intelligent traffic light grid in Lalitpur City and the \'SITA\' AI platform which analyzes immense demographic datasets to instantly generate actionable, human-quality narrative insights.",
        keyMetrics: [
          "SITA AI platform developed with UNFPA to rapidly analyze national datasets",
          "AI-based intelligent traffic light system deployed in Lalitpur Metropolitan City"
        ],
        timeline: ""
      }
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
      { label: 'Elections', value: '5-year cycle (next: March 2026). Recent mass youth-led protests (Sept 2025) prompted the appointment of an interim government.' },
      { label: 'Governance Structure', value: 'Federal Democratic Republic (since 2015), comprising seven administrative regions to decentralize power and increase citizen participation.' },
      { label: 'Political Stability', value: 'Historically unstable with 27 Prime Ministers since 1990. Scored 58.8 in Political Stability and 55.8 in Accountability, though government effectiveness remains low (34.1).' },
      { label: 'Digital Priority', value: 'Executing the \'Digital Nepal Framework,\' emphasizing decentralized technology access and foundational e-governance restructuring.' },
      { label: 'Institutional Capacity', value: 'Moderate implementation capacity (rating: 3/6), constrained by structural turnover and resourcing gaps.' },
      { label: 'Leadership Champions', value: 'Previous leadership explicitly endorsed the Digital Nepal Framework and successfully pushed Cabinet approval of the National AI Policy.' },
      { label: 'Technical Expertise', value: 'GovTech Index score (0.439) indicates a pressing need to upgrade technical skills and core systems across the civil service suite.' },
      { label: 'Civil Society', value: 'Highly active network of nearly 50,000 NGOs, user groups, and tech policy think-tanks (e.g. Digital Rights Nepal) driving civil transparency.' }
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
  sources: ["https://nepaleconomicforum.org/a-view-on-the-national-ai-policy/", "https://asiapacific.unfpa.org/en/news/sita-nepals-new-ai-tool-could-change-how-country-uses-data", "https://www.datacentermap.com/nepal/", "https://nagarikapp.gov.np/", "https://www.nepjol.info/index.php/njes2/article/view/82964/63413", "https://susasan.org/tools", "https://www.myrepublica.nagariknetwork.com/amp/news/national-id-backlog-details-of-20m-collected-only-75m-cards-printed-19-46.html#:~:text=Listen,Related%20story", "https://english.nepalnews.com/s/business/nepals-digital-transactions-hit-rs-98-43-trillion-in-fy-2024-25/", "https://nasc.org.np/sites/default/files/IT%20Infrastructure%20report.pdf", "https://www.wipo.int/gii-ranking/en/indicators/313", "https://carnegieendowment.org/russia-eurasia/research/2025/09/nepal-gen-z-topple-government", "https://risingnepaldaily.com/news/66941", "https://www.britishcouncil.org.np/sites/default/files/nepal_cso_landsape_study_final_report.pdf", "https://nexus.ingroupe.com/nepals-national-pki-relies-on-nexus", "https://digitalrightsnepal.org/wp-content/uploads/2025/05/Final-2022_organized.pdf", "https://www.digitalpublicgoods.net/r/rahat", "https://nta.gov.np/uploads/contents/MIS%202079%20Magh.pdf", "https://www.undp.org/nepal/funding-delivery", "https://www.worldbank.org/en/news/press-release/2026/02/09/nepal-world-bank-approves-50-million-digital-transformation-project", "https://docs.google.com/document/d/1fkS-vL6lOiX4vC5YfVEqGEmiGCafAZE8zq9ZgcYeDvA/edit?tab=t.wcy24r1uwpnr", "https://english.biznessnews.com/posts/nepal-to-resign-world-bank-loan-for-digital-transformation-"]
};
