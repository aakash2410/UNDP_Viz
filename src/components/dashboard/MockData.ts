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
  { parameter: 'AI Ecosystem Maturity', Malaysia: 4, Cambodia: 2, Philippines: 3, Bangladesh: 2, Nepal: 0, fullMark: 5 },
  { parameter: 'DPI Ecosystem Maturity', Malaysia: 3, Cambodia: 4, Philippines: 4, Bangladesh: 3, Nepal: 0, fullMark: 5 },
  { parameter: 'Digital Infra Availability', Malaysia: 5, Cambodia: 2, Philippines: 3, Bangladesh: 3, Nepal: 0, fullMark: 5 },
  { parameter: 'Political Stability', Malaysia: 4, Cambodia: 4, Philippines: 4, Bangladesh: 2, Nepal: 0, fullMark: 5 },
  { parameter: 'Stakeholder Participation', Malaysia: 3, Cambodia: 3, Philippines: 4, Bangladesh: 3, Nepal: 0, fullMark: 5 },
  { parameter: 'Funding Landscape', Malaysia: 3, Cambodia: 2, Philippines: 4, Bangladesh: 2, Nepal: 0, fullMark: 5 },
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

export interface SubParameterStage {
  name: string;
  stage: string;
}

export interface ParameterStageEntry {
  parameter: string;
  parameterStage: string;
  subParameters: SubParameterStage[];
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
    digitalInclusion?: string;
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
  parameterStages?: Record<string, ParameterStageEntry>;
}

export const malaysiaData: CountryDetailData = {
  countryName: 'Malaysia',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Maturing', description: 'MyDigital ID (8.7M users)', implementationAgency: 'My Digital ID Sdn Bhd',
      modalDetails: {
        fullContext: "MyDigital ID (RM80M allocation) is a secure government-backed digital identity enabling single sign-on for online portals, with 8.7M registered users. Goal: 95% of federal services integrated by 2030.",
        keyMetrics: [
          "RM80 million budget allocation",
          "Registration began in 2024 via MyGOV Malaysia",
          "Identity verification without storing personal data"
        ],
        timeline: ""
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Maturing', description: 'DuitNow (5.3 bn transactions)', implementationAgency: 'PayNet',
      modalDetails: {
        fullContext: "The Real-time Retail Payments Platform (DuitNow), launched in 2018 and operated by PayNet, facilitated 5.3 billion transactions (RM5.4T value) in 2024. Over 70% of the adult population has made at least one digital payment.",
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
      title: 'Data Exchange', status: 'Maturing', description: 'MYGDX (35 million transactions)', implementationAgency: 'MAMPU',
      modalDetails: {
        fullContext: "The Malaysian Government Central Data Exchange (MyGDX), managed by MAMPU since 2018, supports 657 users and 35 million transactions to empower data-driven governance across ministries.",
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
      title: 'AI Strategy', status: 'Maturing', description: 'Malaysia Artificial Intelligence Roadmap 2021-2025', implementationAgency: 'Malaysian National AI Office (NAIO)',
      modalDetails: {
        fullContext: "Malaysia's AI Roadmap 2021-2025, overseen by the National AI Office (est. 2024), aims to augment jobs and drive innovation across 5 priority sectors. As of Q3 2024, implementation stands at 63% completion.",
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
      title: 'AI Governance', status: 'Early Success', description: 'National Guidelines on AI Governance and Ethics (AIGE)', implementationAgency: 'Malaysian National AI Office (NAIO)',
      modalDetails: {
        fullContext: "Guided by the voluntary National Guidelines on AI Governance & Ethics (AIGE), Malaysia aims for safe and trustworthy AI deployment built on seven core principles. No AI-specific legislation is enacted yet.",
        keyMetrics: [
          "Built on 7 AI Principles including fairness, reliability, and human-centricity",
          "Structured across three levels: Users, Regulators, and Developers",
          "Guided by National Guidelines (AIGE) and ASEAN AI guide"
        ],
        timeline: ""
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Maturing', description: 'Data Protection and Privacy Laws', implementationAgency: 'Department of Personal Data Protection',
      modalDetails: {
        fullContext: "Governed by the Personal Data Protection (Amendment) Act 2024, enforced by the JPDP. Malaysia scores 4.17/5 in data privacy and 5/5 in cybersecurity on the UNDP Digital Development Compass.",
        keyMetrics: [
          "Personal Data Protection (Amendment) Act 2024 addresses privacy",
          "Score of 4.17/5 in data and privacy (UNDP Digital Development Compass)",
          "Score of 5/5 in cybersecurity (UNDP Digital Development Compass)"
        ],
        timeline: ""
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Maturing', description: 'AI in Healthcare & Digital Hospitals', implementationAgency: 'Ministry of Health',
      modalDetails: {
        fullContext: "11 national AI use cases defined across healthcare, agriculture, smart cities, education, and public services. Key deployments include DR. MATA for diabetic retinopathy, AI traffic analysis in Kuala Lumpur, and the National Fraud Portal.",
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
    fundingLandscape: "The 2025 Budget allocates RM285M to MOSTI for AI governance and RM10M for NAIO. Between 2021-2023, Malaysia attracted RM114.7B in data centre investments. In 2024, over USD 18B in foreign AI investments were secured from Microsoft, Google, ByteDance, and Oracle.",
    electricityAccess: 100, // 100% access to electricity (World Bank, 2022) 
    internetPenetration: 97.7, // 97.7% internet penetration rate (ITU, 2024)
    deviceAccess: 95.5,
    digitalInclusion: "Nearly equal access for men and women, urban and rural areas.",
    dataCenters: '87 data centres as of Nov 2024; RM114.7B in data centre and cloud investments (2021-2023)',
    politicalStability: 'Political stability improved from 2014 to 2024 by ~5 percentage points (67.4 to 72.47) (Source: WB WGI 2024)',
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
      { id: 'm1', type: 'Lead Agency & Govt Coordination', name: 'Ministry of Digital, MOSTI, MAMPU, NAIO', role: 'Decision-makers & Implementers', initiatives: ['National AI Roadmap 2021-2025', 'National Guidelines on AI Governance and Ethics', 'RM285M MOSTI + RM10M NAIO budget allocation', '8 agencies under Ministry of Digital coordinating across ministries'] },
      { id: 'm2', type: 'Private Sector', name: 'Toshiba, Microsoft, Google, AWS, YTL Power, ByteDance, Oracle', role: 'Implementers & Co-Investors', initiatives: ['Microsoft: USD 2.2B for cloud and AI services', 'Google: USD 2B for first data centre region', 'YTL Power: Developing Ilmu 0.1, a Malaysian LLM', '284 AI companies, targeting 900 by 2026'] },
      { id: 'm3', type: 'Development Partners & MDBs', name: 'MYCentre4IR (WEF), UNESCO, UNDP', role: 'Advisory & Strategy Support', initiatives: ['MYCentre4IR connects NAIO with global WEF experts', 'AI Readiness Assessment Methodology (RAM)', 'Co-developing thought leadership publications'] },
      { id: 'm4', type: 'Academic & Research', name: 'UTM (CAIRO), UM (MALAYA AIR), UMS (AiRU), Nottingham Malaysia', role: 'R&D & Talent Pipeline', initiatives: ['Centre for AI and Robotics (CAIRO) at UTM', 'RM50M AI education budget across research universities', 'AI Sandbox 2024 Pilot', 'Curriculum development and talent pipelines'] },
      { id: 'm5', type: 'Civil Society', name: 'PIKOM, MIFA, Women in AI', role: 'Advocacy & Inclusion', initiatives: ['Promoting AI literacy and digital inclusion', 'Gender equity in AI adoption', 'Quadruple Helix Model engagement'] },
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
  parameterStages: {
    P1: {
      parameter: 'AI Ecosystem Maturity', parameterStage: 'Maturing', subParameters: [
        { name: 'IMF AI Preparedness Index (AIPI)', stage: 'Maturing' },
        { name: 'National AI Strategy / Policy Status', stage: 'Maturing' },
        { name: 'AI Governance & Ethical AI Principles', stage: 'Early Success' },
        { name: 'Data Protection & Privacy Legislation', stage: 'Maturing' },
        { name: 'Government AI Initiatives & Projects', stage: 'Maturing' },
      ]
    },
    P2: {
      parameter: 'DPI Ecosystem Maturity', parameterStage: 'Early Success', subParameters: [
        { name: 'National Digital Transformation Strategy', stage: 'Maturing' },
        { name: 'Digital ID', stage: 'Maturing' },
        { name: 'Digital Payments', stage: 'Maturing' },
        { name: 'Data Exchange', stage: 'Maturing' },
        { name: 'Use Cases of DPI Assets', stage: 'Early Success' },
      ]
    },
    P3: {
      parameter: 'Digital-Physical Infrastructure', parameterStage: 'Role Model', subParameters: [
        { name: 'Electricity Access & Reliability', stage: 'Role Model' },
        { name: 'Internet Penetration', stage: 'Maturing' },
        { name: 'Compute & Cloud Capacity', stage: 'Maturing' },
        { name: 'Digital Inclusion', stage: 'Role Model' },
      ]
    },
    P4: {
      parameter: 'Political Stability & Governance', parameterStage: 'Maturing', subParameters: [
        { name: 'WB Political Stability Score (2024)', stage: 'Maturing' },
      ]
    },
    P5: {
      parameter: 'Stakeholder Participation', parameterStage: 'Early Success', subParameters: [
        { name: 'Lead Agency & Govt Coordination', stage: 'Maturing' },
        { name: 'Private Sector Engagement', stage: 'Early Success' },
        { name: 'Development Partners & MDBs', stage: 'Open to Adopt' },
        { name: 'Academic & Research Institutions', stage: 'Maturing' },
        { name: 'Civil Society Engagement', stage: 'Early Success' },
      ]
    },
    P6: {
      parameter: 'Funding Landscape', parameterStage: 'Early Success', subParameters: [
        { name: 'Domestic Public Budget for AI/DPI', stage: 'Early Success' },
      ]
    },
  },
  sources: ["https://mastic.mosti.gov.my/publication/artificial-intelligence-roadmap-2021-2025/", "https://mastic.mosti.gov.my/publication/the-national-guidelines-on-ai-governance-ethics/", "https://asean.org/book/asean-guide-on-ai-governance-and-ethics/", "https://www.unesco.org/ethics-ai/en/malaysia", "https://digitaldevelopmentcompass.undp.org/country/MYS", "https://www.mygov.gov.my/ms-MY", "https://www.digital-id.my/_next/about", "https://www.mosti.gov.my/wp-content/uploads/2023/12/PR-231212-MYDIGITAL-ID-REGISTRATION-FOR-THE-GENERAL-PUBLIC-WILL-COMMENCE-IN-MARCH-2024.pdf", "https://www.thestar.com.my/news/nation/2026/02/24/weaknesses-in-management-and-expenditure-of-mydid-project-revealed", "https://fastpayments.worldbank.org/sites/default/files/2021", "https://www.malaysia.gov.my/en", "https://www.biometricupdate.com/202510/malaysia-targets-15m-mydigital-id-users-2026-funds-allocated", "https://malaysia.news.yahoo.com/only-2-8-million-malaysians-044521446.html", "https://www.malaymail.com/news/malaysia/2026/01/17/mydigital-id-hits-87-million-users-sets-sights-on-15-million-sign-ups-with-e-hailing-boost/205833", "https://fastpayments.worldbank.org/sites/default/files/2021-09/World_Bank_FPS_Malaysia_RPP_Case_Study.pdf", "https://paynet.my/", "https://en.wikipedia.org/wiki/Elections_in_Malaysia", "https://en.wikipedia.org/wiki/2022_Malaysian_general_election", "https://www.electiondata.my/elections", "https://www.malaysia.gov.my/en/government/sistem-pemerintahan-negara/federal-government", "https://www.eiu.com/n/campaigns/democracy-index-2024-confirmation/", "https://www.worldbank.org/en/publication/worldwide-governance-indicators/interactive-data-access", "https://www.ai.gov.my/", "https://www.ai.gov.my/thought-leadership"]
};

export const cambodiaData: CountryDetailData = {
  countryName: 'Cambodia',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Early Success', description: 'CamDigiKey (86k Users)', implementationAgency: 'MEF',
      modalDetails: {
        fullContext: "CamDigiKey, launched by the Ministry of Economy & Finance, serves as Cambodia's national e-KYC platform. With only ~86K downloads out of 18M population, adoption is concentrated in business-related government services.",
        keyMetrics: [
          "Targeted in Phase 1 (2021-2025) of the Digital Economy Framework",
          "Focus restricted to foundational E-ID and payment gateways",
          "CamDigiKey adoption currently stands at ~86,000 users"
        ],
        timeline: ""
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Maturing', description: 'Bakong (60% adult population)', implementationAgency: 'NBC',
      modalDetails: {
        fullContext: "Bakong, Cambodia's sovereign blockchain-based digital payment system under the National Bank of Cambodia, achieves ~100M transactions per month and reaches 60% of the adult population.",
        keyMetrics: ["Reaches 60% of the adult population", "Operates across local banks and e-wallets", "Blockchain-enabled architecture"],
        timeline: "Launched 2020"
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Maturing', description: 'CamDX', implementationAgency: 'Techo Startup Center',
      modalDetails: {
        fullContext: "CamDX is the unified data exchange layer for the Cambodian government, deployed across 22 ministries and processing 1M transactions monthly. It also powers Verify.gov.kh for secure document verification.",
        keyMetrics: ["Managed by MEF", "Powers Verify.gov.kh", "Core to Cambodian e-gov architecture", "Verify.gov Cambodia successfully integrated for national government document verification"],
        timeline: "Launched 2020"
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Open to Adopt', description: 'National AI Strategy 2025-30', implementationAgency: 'Ministry of Post and Telecommunications',
      modalDetails: {
        fullContext: "The National AI Strategy 2025-30 (drafted by MPTC) outlines six strategic priorities including a skilled workforce, digital government excellence, Khmer language inclusion via a national LLM, and establishing a National AI and Data Science Lab.",
        keyMetrics: [
          "Draft National AI Strategy 2025-30",
          "Establishing a National AI and Data Science Lab",
          "Strategic push for Khmer Large Language Model (LLM)",
          "AI Strategy is integrated into the $10.1B national budget, targeting an R&D rise from current 0.09% GDP"
        ],
        timeline: "Drafted 2024"
      }
    },
    governance: {
      title: 'AI Governance', status: 'Open to Adopt', description: 'AI Readiness Assessment', implementationAgency: 'Ministry of Post and Telecommunications (MPTC)',
      modalDetails: {
        fullContext: "AI governance is being built through UNESCO RAM recommendations and the National AI Strategy. Cambodia scored 55/100 in the UNESCO AI Readiness Assessment, with data protection and cybersecurity laws still in draft stage.",
        keyMetrics: [
          "Scored 55 out of 100 in UNESCO AI Readiness Assessment",
          "Implementing a 'soft law' approach guided by UNESCO RAM",
          "Foundational laws on Data Protection and Cybersecurity drafted, pending consultation"
        ],
        timeline: "Drafted 2024"
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Open to Adopt', description: 'Data protection and Privacy regulation', implementationAgency: 'Ministry of Post and Telecommunications (MPTC)',
      modalDetails: {
        fullContext: "Sub-Decree 252 governs only MOI-held personal data. A comprehensive Draft Law on Personal Data Protection was released for public consultation in July 2025, expected to create a broader legal framework.",
        keyMetrics: [
          "Sub-Decree 252 applies only to Ministry of Interior identification data",
          "Draft Law on Personal Data Protection released for public consultation (July 2025)"
        ],
        timeline: "Expected to pass in 2026"
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Early Success', description: 'National Research Center on AI & Landmine mapping', implementationAgency: 'CMAC & MPTC',
      modalDetails: {
        fullContext: "Key initiatives include AI-assisted landmine detection (CMAC), the National Research Center on AI for Education (inaugurated Nov 2025), and a partnership with AI Singapore to develop an open-source Khmer Large Language Model.",
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
    fundingLandscape: "The government approved over $10B in investments in 2025, with AI/DPI R&D targeted to rise from 0.09% of GDP. However, dedicated domestic public funding for AI/DPI remains limited, with heavy reliance on external development assistance and annual project-tied approvals.",
    electricityAccess: 92.3,
    internetPenetration: 60.0,
    digitalInclusion: "Stark urban-rural gap with internet usage concentrated among young urban users. UNICEF reports digital literacy restrictions for rural women.",
    dataCenters: '4 modern data centres established; cloud services sparsely available. Only 11% of institutions have on-premises GPU processors',
    politicalStability: 'WB Political Stability: 68th percentile (Maturing). Authoritarian Regime — 123/169 (Source: Democracy Index 2024)',
    electionCycles: '5-year cycle (Previous: 2023-24; Next: 2028-29)',
    politicalSubParameters: [
      { label: 'Elections', value: '5-year cycle (last: 2023-24; next: 2028-29). Predominantly one-party governance model — could track key people of interest and their ministerial terms.' },
      { label: 'Governance Structure', value: 'Constitutional Monarchy with a Parliamentary system, governed centrally by mostly one-party rule.' },
      { label: 'Political Stability', value: 'WB Political Stability at 68th percentile (Maturing). Democracy Index 2024: Authoritarian (123/169). Cambodia-Thailand border tensions could escalate, potentially shifting priorities from DT toward national security.' },
      { label: 'Digital Priority', value: 'Strong and growing. Pentagonal Strategy Phase I places human development and digital transformation as core pillars. National AI Strategy drafted, National Research Center on AI for Education inaugurated Nov 2025.' },
      { label: 'Institutional Capacity', value: 'DataBank Performance Indicators show increasing capacity (2019-2023), especially in institutional data collection. Digital transformation policies are gaining institutional depth.' },
      { label: 'Leadership Champions', value: 'PM Hun Manet (Digital Revolution emphasis); H.E. Chea Vandeth (Minister of PTC, Head of Digital Governance Committee, ethics-technology balance); H.E. Sam Sethserey (DG of ICT at MPTC, cybersecurity & startup ecosystem); Seng Molika (DDG of STI at MISTI, DT unit lead).' },
      { label: 'Key Influencers', value: 'MPTC (backbone and governance), MISTI (R&D and adoption), Working Group on AI and Data Science R&D (drafted the National AI Strategy).' }
    ],
    leadershipQuote: {
      text: "Building a digital economy and society is a key priority to drive new economic growth and realize the vision of becoming a high-income country by 2050.",
      author: "Hun Manet",
      context: "Prime Minister of Cambodia (Digital Government Forum 2024)"
    }
  },
  sectionC: {
    actors: [
      { id: 'c1', type: 'Lead Agency & Govt Coordination', name: 'MPTC, MISTI, MEF', role: 'Decision-maker & Lead', initiatives: ['National AI Strategy 2025-30 (drafted by MPTC)', 'Digital Economy and Society Policy Framework 2021-2035', 'No single agency for overall DT — fragmented across ministries'] },
      { id: 'c2', type: 'Private Sector', name: 'Techo Startup Center, First Cambodia, Smart Axiata, Alibaba Cloud', role: 'Implementer & Incubator', initiatives: ['Techo Startup Center: govt-supported private incubator/accelerator', 'Smart Axiata works with MPTC on connectivity', 'Alibaba Cloud increasing presence in Cambodia'] },
      { id: 'c3', type: 'Development Partners & MDBs', name: 'UNESCO, ADB, UN ESCAP, AI Singapore', role: 'Technical Expertise & Funding', initiatives: ['~$3.1B in ADB concessional loans/SDRs', 'UNESCO "AI Ethics Experts Without Borders"', 'MoU with AI Singapore for open-source Khmer LLM'] },
      { id: 'c4', type: 'Academic & Research', name: 'Cambodia Academy of Digital Technology (CADT)', role: 'Research & Capacity Building', initiatives: ['Co-drafted the National AI Strategy', 'National Research Center on AI for Education (inaugurated Nov 2025)', 'Part of country\'s capacity building efforts'] },
      { id: 'c5', type: 'Civil Society', name: 'Development Innovations Project, Civil Society Consultations', role: 'Advocacy & Digital Literacy', initiatives: ['Cambodian Development Innovations Project (since 2013)', 'Civil societies actively consulted during NAS formulation', 'Internet penetration rose from 6.8% to 56.7% (2013-2024)'] },
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
  parameterStages: {
    P1: {
      parameter: 'AI Ecosystem Maturity', parameterStage: 'Open to Adopt', subParameters: [
        { name: 'IMF AI Preparedness Index (AIPI)', stage: 'Open to Adopt' },
        { name: 'National AI Strategy / Policy Status', stage: 'Open to Adopt' },
        { name: 'AI Governance & Ethical AI Principles', stage: 'Open to Adopt' },
        { name: 'Data Protection & Privacy Legislation', stage: 'Open to Adopt' },
      ]
    },
    P2: {
      parameter: 'DPI Ecosystem Maturity', parameterStage: 'Maturing', subParameters: [
        { name: 'National Digital Transformation Strategy', stage: 'Maturing' },
        { name: 'Digital ID', stage: 'Early Success' },
        { name: 'Digital Payments', stage: 'Maturing' },
        { name: 'Data Exchange', stage: 'Maturing' },
        { name: 'Availability / Deployment Use Cases', stage: 'Early Success' },
      ]
    },
    P3: {
      parameter: 'Digital-Physical Infrastructure', parameterStage: 'Open to Adopt', subParameters: [
        { name: 'Electricity Access & Reliability', stage: 'Early Success' },
        { name: 'Internet Penetration', stage: 'Greenfield' },
        { name: 'Compute & Cloud Capacity', stage: 'Early Success' },
        { name: 'Digital Inclusion', stage: 'Open to Adopt' },
      ]
    },
    P4: {
      parameter: 'Political Stability & Governance', parameterStage: 'Maturing', subParameters: [
        { name: 'WB Political Stability Score (2024)', stage: 'Maturing' },
      ]
    },
    P5: {
      parameter: 'Stakeholder Participation', parameterStage: 'Early Success', subParameters: [
        { name: 'Lead Agency & Govt Coordination', stage: 'Open to Adopt' },
        { name: 'Private Sector Engagement', stage: 'Open to Adopt' },
        { name: 'Development Partners & MDBs', stage: 'Early Success' },
        { name: 'Academic & Research Institutions', stage: 'Early Success' },
        { name: 'Civil Society Engagement', stage: 'Early Success' },
      ]
    },
    P6: {
      parameter: 'Funding Landscape', parameterStage: 'Open to Adopt', subParameters: [
        { name: 'Domestic Public Budget for AI/DPI', stage: 'Open to Adopt' },
      ]
    },
  },
  sources: ["https://oecd.ai/en/data", "https://data.opendevelopmentcambodia.net/en/dataset/5524b0b4-bb31-4cad-abf4-a36f8e82073d/resource/a35e29b9-3dbf-4a5d-92a9-4d3558ed3c03/download/nais-v5-en-for-consultation-clean.pdf", "https://www.unesco.org/ethics-ai/en/global-hub", "https://www.unesco.org/ethics-ai/en/cambodia", "https://www.dlapiperdataprotection.com/", "https://www.dlapiperdataprotection.com/?t=law&amp;c=KH#insight", "https://www.nec.com/en/press/202510/global_20251029_04.html", "https://www.worldbank.org/en/programs/govtech/gtmi-2025-update", "https://datahub.itu.int/dashboards/idi/?e=BGD&amp;y=2025", "https://dpimap.org/", "https://camdigikey.gov.kh/en", "https://bakong.nbc.gov.kh/en/", "https://camdx.gov.kh/", "https://dpiexplorer.org/explore", "http://verify.gov/", "https://verify.gov.kh/", "https://kiripost.com/stories/nbcs-bakong-charts-transaction-growth-at-13b-in-2025", "https://www.khmertimeskh.com/501517074/camdx-sees-13-increase-in-usage-to-17-3m-transactions/", "https://www.itu.int/reports/wsis-gdc-implementation/objectives/gdc-objective-4/data-for-sustainable-development-goals/", "https://kiripost.com/stories/cambodias-untold-digital-divide-why-not-all-daughters-get-to-imagine-a-different-future", "https://www.eiu.com/n/global-themes/democracy-index/", "https://cambodianess.com/article/hun-manet-says-teachers-catalysts-of-cambodias-ai-transformation", "https://databank.worldbank.org/reports.aspx?dsid=31&amp;series=IQ.CPA.MACR.XQ", "https://docs.google.com/spreadsheets/d/1vNBjyTfs7Ysur_2Zwu3cPb26NQurQAkcQp_InWwLI0Y/edit?gid=0#gid=0", "https://theinvestor.vn/cambodia-focuses-on-digital-revolution-d9023.html#:~:text=By%20Vietnam%20News%20Agency,growth%20and%20improve%20social%20welfare.", "https://www.mordorintelligence.com/industry-reports/cambodia-ict-market/companies", "https://firstcambodia.com.kh/", "https://www.alibabacloud.com/en/campaign/cambodia-contact-us?_p_lc=1#:~:text=Secure%2C%20convenient%2C%20and%20private%20connections,private%20domain%20name%20management%20service", "https://www.zoominfo.com/top-lists/top-telecommunications-companies-in-KH", "https://cambodia.un.org/en/about/un-entities-in-country?afd_azwaf_tok=eyJraWQiOiJGQ0U3Q0M5QjEyMjMyMDkzMkU2RUI5N0I5MTM5NTkzREU2NUZDNjlBRDFDQUVGMkY5REFFOUY1MEJFMEVCNTcwIiwiYWxnIjoiUlMyNTYifQ.eyJhdWQiOiJjYW1ib2RpYS51bi5vcmciLCJleHAiOjE3NzA5Nzc5OTAsImlhdCI6MTc3MDk3Nzk4MCwiaXNzIjoidGllcjEtNjg1YmZiOTU1Ni03ODR0NyIsInN1YiI6IjEyNDo0OToxNDg4OmVhMmE6YTczZDo1YzE0OmVjOGU6NzVmZSIsImRhdGEiOnsidHlwZSI6Imlzc3VlZCIsInJlZiI6IjIwMjYwMjEzVDEwMTk0MFotMTY4NWJmYjk1NTY3ODR0N2hDMUJPTW1tZzQwMDAwMDAwZmNnMDAwMDAwMDAyNHNzIiwiYiI6IkktWC12UFNGTUc0UmItRmxJOVJZSG5zdWtVcHkwc3ZSNHZtVGQxSnhEa0EiLCJoIjoiVDhPVTl3UFpadHBEaU1ONWpFenVMTHF6alljNmo2emVMZXdGNEgzd1FQUSJ9fQ.OqXDB32T7SrmR4kTCQbxCyMv9pCZlP0-6ZYEXcNwGB81XIVwBbXtrjRIR-JTl37MqqIIpc4Gxgl0YIQipsQHhNtHptVlhh-4VRIVD_f_T2MHiWtyPe85PTaMaInH7gJaGFmbzweBHAnQpnGlurLJNUfgyfhTdWNr1jL06G8l8vqontZStkLernOSryiXXjBDUOIker2pdsaE8SPepBN_KWaxjKk6vRxXYAZs8t9x6ZXbYppgI2OGwdcqo2hajUveiY--VIvb2sczO1TqdFzaKbhXjOS4NIG595iFIQ3fl_OUfPco3lbKG3YPinFoweMRSVTAJhS7AwVZDYpzKtXXTQ.WF3obl2IDtqgvMFRqVdYkD5s", "https://cambodiainvestmentreview.com/2026/02/17/cna-documentary-highlights-6-7b-ai-opportunity-by-2030-or-a-widening-digital-divide-for-cambodia-video/"]
};

export const philippinesData: CountryDetailData = {
  countryName: 'Philippines',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Maturing', description: 'PhilSys / PhilID', implementationAgency: 'PSA & BSP',
      modalDetails: {
        fullContext: "PhilSys has enrolled 90 million Filipinos (~80% of population) with multi-modal biometrics. It is interoperable with banking (BSP Circular 1105 for instant e-KYC) and the eGovPH Super App for single sign-on across government services.",
        keyMetrics: [
          "PhilSys issues unique identification number supported by biometric data",
          "Administered by the Philippine Statistics Authority",
          "90.02 Million registered users (~80% of population) utilizing PhilSys backed by a ₱30B budget"
        ],
        timeline: ""
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Maturing', description: 'PhilPASSPlus, InstaPay, PESONet', implementationAgency: 'PSA & BSP',
      modalDetails: {
        fullContext: "PhilPaSSplus (ISO 20022 compliant) processed PHP 151.3 trillion in Q3 2025 (up 21% YoY). Retail rails include InstaPay and PESONet, with system expansion toward 24/7 operations in 2026 underpinning a wholesale CBDC pilot.",
        keyMetrics: [
          "PhilPaSSplus enables real time high-value interbank fund transfers",
          "Operated by the Bangko Sentral ng Pilipinas",
          "Projected ₱24.745 trillion in total transaction value by the end of 2025 across InstaPay and PESONet"
        ],
        timeline: ""
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Maturing', description: 'eGovDX', implementationAgency: 'DICT',
      modalDetails: {
        fullContext: "eGovDX (DICT) provides secure middleware for interoperable data sharing across national agencies via standardised APIs, governed by the Data Privacy Act and Data Sharing Agreements. Active cross-agency use cases include DSWD-BSP and PSA-BSP integrations.",
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
      title: 'AI Strategy', status: 'Early Success', description: 'National Artificial Intelligence Strategy', implementationAgency: 'DTI',
      modalDetails: {
        fullContext: "NAISR 2.0 launched July 2024 by DTI, covering seven strategic imperatives. The Centre for AI Research (CAIR) targets agriculture and healthcare. Implementation remains early-stage with no public monitoring framework yet in place.",
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
      title: 'AI Governance', status: 'Open to Adopt', description: 'Senate Bill no 25', implementationAgency: 'Senate',
      modalDetails: {
        fullContext: "Senate Bill No. 25 (AI Regulation Act) remains in committee. DICT and CSC published a draft Joint Memorandum Circular on Ethical AI Use in Government (April 2024) drawing on OECD and UNESCO principles, but it is not yet enacted.",
        keyMetrics: [
          "Senate Bill No. 25 proposes a National AI Commission",
          "Mandates risk-based classification of AI systems",
          "Requires employers to provide advance notification for AI integration"
        ],
        timeline: ""
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Maturing', description: 'Data Privacy Act', implementationAgency: 'NPC',
      modalDetails: {
        fullContext: "The Data Privacy Act of 2012 (RA 10173) is comprehensive and actively enforced by the National Privacy Commission. NPC Advisory 2024-04 extends regulation to AI, requiring Privacy Impact Assessments and meaningful human intervention in automated decision-making.",
        keyMetrics: [
          "Governed by the Data Privacy Act of 2012 (Republic Act No. 10173)",
          "Regulated by the independent National Privacy Commission",
          "Requires 72-hour breach notification where risk of harm exists"
        ],
        timeline: ""
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Maturing', description: 'AI-4RP & SkAI-Pinas', implementationAgency: 'DOST',
      modalDetails: {
        fullContext: "NAICRI launched Feb 2026 as the national HPC hub. Key deployments include Project AGAP.AI (1.5M learners), UTAK AI for brain tumour detection, AI weather forecasting (AI-4RP), and the Digital Bayanihan Chain for budget transparency.",
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
    fundingLandscape: "2026 National Budget: PHP 6.793 trillion with record DepEd allocation of PHP 992.7B. World Bank digital portfolio totals USD 1.637B. Digital Bayanihan Chain records the entire national budget on blockchain for fiscal transparency.",
    electricityAccess: 89,
    internetPenetration: 83.8,
    deviceAccess: 81.0,
    digitalInclusion: "47.5 percentage point gap between Metro Manila (68.7%) and Zamboanga Peninsula (21.2%). Near gender parity but affordability remains the primary barrier for 58% of unconnected households.",
    dataCenters: '28 operational colocation facilities (632.80 MW); Google Cloud first PH region in 2026; NAICRI shared HPC via DOST-ASTI COARE',
    politicalStability: 'WB Political Stability: 52.67 percentile (40-60th range). E-Governance Act (RA 12254) institutionalises DT as state policy. (Source: WB WGI 2024)',
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
      { id: 'p1', type: 'Lead Agency & Govt Coordination', name: 'DICT, DTI, DOST, PSA, NPC, BSP', role: 'Decision-makers & Implementers', initiatives: ['DICT is legally designated lead for DT (RA 10844, RA 12254)', 'BSP Circular 1153: regulatory sandbox for fintech/AI', 'NPC oversees data protection; PSA manages PhilSys', 'Gap: No single lead agency for AI governance as of 2026'] },
      { id: 'p2', type: 'Private Sector', name: 'GCash (Mynt), Microsoft, Google Cloud, PLDT/Smart, Aboitiz Data', role: 'Implementers & Co-Investors', initiatives: ['GCash: 94M users, de facto digital public infrastructure', 'Microsoft: MOU with DICT for government Azure cloud', 'Google Cloud: first Philippine region activated early 2026', 'PLDT VITRO & STT Fairview: AI-ready hyperscale facilities'] },
      { id: 'p3', type: 'Development Partners & MDBs', name: 'World Bank, ADB, USAID BEACON, Gates Foundation', role: 'Policy Influencers & Funders', initiatives: ['World Bank: USD 1.637B digital portfolio (DPLs + PDIP)', 'ADB ProSPER: digital tools for Mindanao agriculture', 'USAID BEACON: community network deployments', 'Gates Foundation: PhilSys + digital financial services grants'] },
      { id: 'p4', type: 'Academic & Research', name: 'Ateneo TRL, University of the Philippines, DOST-ASTI COARE', role: 'R&D & Talent Development', initiatives: ['Ateneo TRL: DPI testing hub for PhilSys integration', 'UP Principles for Responsible AI (soft-law guide)', 'DepEd-Microsoft E-CAIR: AI literacy scaled to millions', 'DOST-ASTI COARE HPC: supercomputing for AI research'] },
      { id: 'p5', type: 'Civil Society', name: 'Foundation for Media Alternatives (FMA), Democracy.Net.PH', role: 'Advocacy & Oversight', initiatives: ['FMA: lead digital rights watchdog monitoring DICT policy', 'Democracy.Net.PH: crowdsourced Magna Carta for Philippine Internet Freedom', 'Civil society consulted for E-Governance Act (RA 12254) IRR', 'Gap: PWDs, indigenous peoples, informal workers excluded from AI/DPI consultations'] },
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
  parameterStages: {
    P1: {
      parameter: 'AI Ecosystem Maturity', parameterStage: 'Early Success', subParameters: [
        { name: 'IMF AI Preparedness Index (AIPI)', stage: 'Early Success' },
        { name: 'National AI Strategy / Policy Status', stage: 'Early Success' },
        { name: 'AI Governance & Ethical AI Principles', stage: 'Open to Adopt' },
        { name: 'Data Protection & Privacy Legislation', stage: 'Maturing' },
        { name: 'Government AI Initiatives & Projects', stage: 'Maturing' },
      ]
    },
    P2: {
      parameter: 'DPI Ecosystem Maturity', parameterStage: 'Maturing', subParameters: [
        { name: 'National Digital Transformation Strategy', stage: 'Maturing' },
        { name: 'Digital ID', stage: 'Maturing' },
        { name: 'Digital Payments', stage: 'Maturing' },
        { name: 'Data Exchange', stage: 'Maturing' },
        { name: 'Use Cases of DPI Assets', stage: 'Maturing' },
      ]
    },
    P3: {
      parameter: 'Digital-Physical Infrastructure', parameterStage: 'Early Success', subParameters: [
        { name: 'Electricity Access & Reliability', stage: 'Early Success' },
        { name: 'Internet Penetration', stage: 'Early Success' },
        { name: 'Compute & Cloud Capacity', stage: 'Maturing' },
      ]
    },
    P4: {
      parameter: 'Political Stability & Governance', parameterStage: 'Maturing', subParameters: [
        { name: 'WB Political Stability Score (2024)', stage: 'Early Success' },
        { name: 'Strategic & Long-term Subjective Call', stage: 'Maturing' },
      ]
    },
    P5: {
      parameter: 'Stakeholder Participation', parameterStage: 'Maturing', subParameters: [
        { name: 'Lead Agency & Govt Coordination', stage: 'Maturing' },
        { name: 'Private Sector Engagement', stage: 'Maturing' },
        { name: 'Development Partners & MDBs', stage: 'Maturing' },
        { name: 'Academic & Research Institutions', stage: 'Maturing' },
        { name: 'Civil Society Engagement', stage: 'Early Success' },
      ]
    },
    P6: {
      parameter: 'Funding Landscape', parameterStage: 'Maturing', subParameters: [
        { name: 'Domestic Public Budget for AI/DPI', stage: 'Maturing' },
      ]
    },
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
      title: 'Government AI Initiatives', status: 'Drafted', description: 'MyGov, Kagoj AI & EBLICT', implementationAgency: 'Ministry of ICT',
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
    fundingLandscape: "The government has aggressively prioritized digitalization, allocating ~$200 million to the ICT Division and $11 million to support digital entrepreneurship in the fiscal year 2024/25. Important multilateral support is also active via World Bank and ADB loans.",
    electricityAccess: 99.5,
    internetPenetration: 45,
    deviceAccess: 40.0,
    digitalInclusion: "Higher access in urban areas (71.3% men, 62.4% women) vs rural (36.6% men, 23% women). Overall geographic divide: 66.8% vs 29.7%.",
    dataCenters: '36 total operational',
    politicalStability: 'Hybrid Regime (100/167) (Source: Democracy Index 2024)',
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
      title: 'Digital ID', status: 'Implemented', description: 'Rastriya Parichaya Patra', implementationAgency: 'Department of National ID',
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
      title: 'Data Exchange', status: 'Implemented', description: 'Government Cloud', implementationAgency: 'MoCIT',
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
      title: 'Government AI Initiatives', status: 'Implemented', description: 'Lalitpur Traffic & SITA', implementationAgency: 'Ministry of Health / LMC',
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
    fundingLandscape: "In 2021, UNDP Nepal implemented development programmes across the nation with a total expenditure of $20.4 million. The World Bank and the ADB have also jointly co-financed the Nepal Digital Transformation Project, contributing $50 million and $40 million respectively.",
    electricityAccess: 94,
    internetPenetration: 56,
    deviceAccess: 95.5,
    digitalInclusion: "Higher internet access in urban areas (65%) versus rural regions (22%). Only 53% have 4G coverage.",
    dataCenters: '37 data centres (Internet Society: Pulse)',
    politicalStability: 'Hybrid Regime (4.6/10) (Source: Democracy Index 2024)',
    electionCycles: 'November 2022 | March 2026',
    politicalSubParameters: [
      { label: 'Elections', value: 'National Election cycle spans from November 2022 up to the upcoming March 2026 cycle.' },
      { label: 'Political Stability', value: 'Categorized as a Hybrid Regime (4.6/10). Saw a 10.87% increase in Political Stability Index (from 47.94 in 2014 to 58.81 in 2024).' },
      { label: 'Digital Inclusion Gaps', value: 'Higher internet access in urban areas (65%) versus rural regions (22%). Only 53% have 4G coverage and just 56% used the internet recently.' },
      { label: 'Institutional Capacity', value: 'Nepal is participating in the global 50-in-5 initiative for policy implementation.' }
    ]
  },
  sectionC: {
    actors: [
      { id: 'nepal-g1', type: 'Government', name: 'MoCIT, Nepal e-governance board, Fonepay, NTA, OCC', role: 'Decision-makers & Implementers', initiatives: ['Fonepay collaborated with NPCI to facilitate UPI payments'] },
      { id: 'nepal-p1', type: 'Private', name: 'Leapfrog, F1Soft, Verisk Nepal, CloudFactory, Fusemachines', role: 'Implementers', initiatives: [] },
      { id: 'nepal-d1', type: 'Development Partners', name: 'World Bank, ADB, UNDP, GEF, GCF', role: 'Policy Influencers & Funders', initiatives: ['UNDP implemented $20.4M programmes in 2021', 'WB & ADB co-financed $90M Digital Transformation Project'] },
      { id: 'nepal-a1', type: 'Academia', name: 'Open Knowledge Nepal', role: 'Policy Influencers', initiatives: [] },
      { id: 'nepal-c1', type: 'Civil Society', name: 'Digital Rights Nepal', role: 'Policy Influencers & Implementers', initiatives: [] },
      { id: 'nepal-f1', type: 'Funding Orgs', name: 'NPCI (NIPL), AI Association Nepal', role: 'Funders', initiatives: [] }
    ],
  },
  sectionD: {
    opportunities: [
      { id: 'nepal-o1', text: 'Nepal Digital Transformation Project: World Bank approved a $50m loan that aims to strengthen Nepal’s digital public infrastructure and improve the delivery and use of inclusive, high-impact digital government services.' },
      { id: 'nepal-o2', text: 'Broadband and Data Infrastructure Expansion: IFC, Standard Chartered Bank Nepal Limited, and WorldLink Communications Ltd. partner on $29 million project to expand connectivity, create jobs, and drive economic growth.' }
    ],
    risks: [
      { id: 'nepal-r1', text: 'GIDC lacks resources which results in outages/breaches: Government Integrated Data Center (GIDC) is understaffed and lacks resources including technical infrastructure which led to outages and data loss across 10–15 agencies in 2023.' },
      { id: 'nepal-r2', text: 'Weak Systems and Limited Uptake: DPI understanding remains low beyond central ministries, limiting sectoral uptake. Nepal scores 0.439 on the GovTech Index, reflecting weak systems and skills across government.' },
      { id: 'nepal-r3', text: 'Data Protection Landscape: The 2024 Draft Cyber Bill has been criticised for potentially enabling government surveillance and censorship — especially through a proposed national internet gateway — while lacking strong privacy safeguards and adequate public consultation.' }
    ],
    partnerships: [
      { id: 'nepal-p1', text: 'Strengthening of GDIC: UNDP could support the institutional strengthening of the Government Integrated Data Center (GIDC) by helping design operational standards, cybersecurity protocols, and workforce capacity programmes for digital infrastructure management.' },
      { id: 'nepal-p2', text: 'Focused Capacity-Building Across High-Priority Ministries: Since DPI understanding remains concentrated within central ministries, UNDP could run capacity-building programmes for specific ministries to increase adoption of digital systems.' },
      { id: 'nepal-p3', text: 'Supporting Rights-Based Data Governance: With concerns around the 2024 Draft Cyber Bill, UNDP could facilitate multi-stakeholder dialogue and technical assistance on data protection and cybersecurity legislation, ensuring alignment with international norms.' },
      { id: 'nepal-p4', text: 'Given Nepal’s focus on digital infrastructure expansion, there is scope for the country to become a part of the 50-in-5 initiative.' }
    ]
  },

  sources: ["https://nepaleconomicforum.org/a-view-on-the-national-ai-policy/", "https://asiapacific.unfpa.org/en/news/sita-nepals-new-ai-tool-could-change-how-country-uses-data", "https://www.datacentermap.com/nepal/", "https://nagarikapp.gov.np/", "https://www.nepjol.info/index.php/njes2/article/view/82964/63413", "https://susasan.org/tools", "https://www.myrepublica.nagariknetwork.com/amp/news/national-id-backlog-details-of-20m-collected-only-75m-cards-printed-19-46.html#:~:text=Listen,Related%20story", "https://english.nepalnews.com/s/business/nepals-digital-transactions-hit-rs-98-43-trillion-in-fy-2024-25/", "https://nasc.org.np/sites/default/files/IT%20Infrastructure%20report.pdf", "https://www.wipo.int/gii-ranking/en/indicators/313", "https://carnegieendowment.org/russia-eurasia/research/2025/09/nepal-gen-z-topple-government", "https://risingnepaldaily.com/news/66941", "https://www.britishcouncil.org.np/sites/default/files/nepal_cso_landsape_study_final_report.pdf", "https://nexus.ingroupe.com/nepals-national-pki-relies-on-nexus", "https://digitalrightsnepal.org/wp-content/uploads/2025/05/Final-2022_organized.pdf", "https://www.digitalpublicgoods.net/r/rahat", "https://nta.gov.np/uploads/contents/MIS%202079%20Magh.pdf", "https://www.undp.org/nepal/funding-delivery", "https://www.worldbank.org/en/news/press-release/2026/02/09/nepal-world-bank-approves-50-million-digital-transformation-project", "https://docs.google.com/document/d/1fkS-vL6lOiX4vC5YfVEqGEmiGCafAZE8zq9ZgcYeDvA/edit?tab=t.wcy24r1uwpnr", "https://english.biznessnews.com/posts/nepal-to-resign-world-bank-loan-for-digital-transformation-"]
};
