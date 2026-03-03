export interface RadarDataPoint {
  parameter: string;
  Malaysia: number;
  Cambodia: number;
  Philippines: number;
  fullMark: number;
}

export const radarData: RadarDataPoint[] = [
  { parameter: 'AI Ecosystem Maturity', Malaysia: 3, Cambodia: 3, Philippines: 3, fullMark: 5 },
  { parameter: 'DPI Ecosystem Maturity', Malaysia: 4, Cambodia: 3, Philippines: 4, fullMark: 5 },
  { parameter: 'Digital Infra Availability', Malaysia: 4, Cambodia: 2, Philippines: 3, fullMark: 5 },
  { parameter: 'Political Stability', Malaysia: 3, Cambodia: 3, Philippines: 3, fullMark: 5 },
  { parameter: 'Stakeholder Participation', Malaysia: 3, Cambodia: 3, Philippines: 3, fullMark: 5 },
  { parameter: 'Funding Landscape', Malaysia: 3, Cambodia: 3, Philippines: 3, fullMark: 5 },
];

export interface MetricCard {
  title: string;
  status: string;
  description: string;
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
    electricityAccess: number;
    internetPenetration: number;
    dataCenters?: string;
    politicalStability: string;
    electionCycles: string;
    leadershipQuote?: {
      text: string;
      author: string;
      context: string;
    };
  };
  sectionC: {
    actors: Actor[];
  };
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
      title: 'Digital ID', status: 'Implemented (Maturing)', description: 'MyDigital ID (8.7M users)',
      modalDetails: {
        fullContext: "MyDigital ID was formally launched in 2024 with an RM80 million allocation, managed by My Digital ID Sdn Bhd and the Ministry of Digital. It serves as the national foundation for verified digital interactions.",
        keyMetrics: ["8.7 million registered users (~33% adoption)", "RM80.0M central budget allocation", "Used as unified SSO across 10 ministry portals"],
        timeline: "Launched 2024"
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'DuitNow (5.3 bn transactions)',
      modalDetails: {
        fullContext: "Implemented initially via the Real-time Retail Payments Platform, DuitNow (managed by PayNet) operates as the primary sovereign retail payment rail, bridging fragmented banking architectures and achieving massive national saturation.",
        keyMetrics: ["5.3 billion transactions processed in 2024", "RM5.4 Trillion in transaction value", "Near-universal banking integration"],
        timeline: "Launched 2018"
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Implemented', description: 'MYGDX (35 million transactions)',
      modalDetails: {
        fullContext: "The Malaysia Government Central Data Exchange (MYGDX) is a secure, API-driven data brokerage platform preventing data duplication across ministries and facilitating immediate citizen services.",
        keyMetrics: ["35 million successful transactions", "125 unique agencies integrated", "Hosts 262 distinct data services"],
        timeline: "Launched 2020"
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Implemented (Early Success)', description: 'National AI Roadmap 2021-2025',
      modalDetails: {
        fullContext: "The National Artificial Intelligence Roadmap (2021-2025) outlines seven strategic thrusts to foster a resilient AI ecosystem, positioning Malaysia globally as an ethical AI hub.",
        keyMetrics: ["Drafted by MOSTI", "Goal: 30% increase in AI productivity", "Framework for cross-ministerial deployment"],
        timeline: "Published 2021"
      }
    },
    governance: {
      title: 'AI Governance', status: 'Implemented', description: 'National Guidelines on AI Governance and Ethics',
      modalDetails: {
        fullContext: "The National Guidelines on AI Governance and Ethics (AIGE) establish strict, human-centric operating guardrails for public and private organizations building AI tools inside the country.",
        keyMetrics: ["AIGE Guidelines published 2024", "Establishes 7 principles for Responsible AI", "Enforced by NAIO (National AI Office)"],
        timeline: "Implemented 2024"
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Implemented', description: 'Personal Data Protection (Amendment) Act 2024',
      modalDetails: {
        fullContext: "The PDP Act 2010 was fundamentally amended in 2024 to increase sovereign security, aligning local data protection structures with modern demands including mandatory breach reporting constraints.",
        keyMetrics: ["Managed by JPDP", "Mandates 72-hour breach reporting", "Modernizes data-controller responsibilities"],
        timeline: "Amended 2024"
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Maturing', description: 'NAIO promoting AI across Healthcare, Transport, and MSME',
      modalDetails: {
        fullContext: "Through the AI Sandbox initiative and dedicated AI capability modules, the government actively subsidizes the transition of SMEs toward AI automation and funds targeted, public-good algorithms.",
        keyMetrics: ["Goal: 900 new AI Startups by 2026", "Focus areas: Healthcare & Transportation", "Supported by RM10M foundational grant"],
        timeline: "Ongoing"
      }
    },
  },
  sectionB: {
    electricityAccess: 100,
    internetPenetration: 97.7,
    dataCenters: '32 operational, 19 under construction',
    politicalStability: 'Flawed Democracy (44/167)',
    electionCycles: '5 years (Next: Nov-Dec 2027)',
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
};

export const cambodiaData: CountryDetailData = {
  countryName: 'Cambodia',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Implemented (Early Success)', description: 'CamDigiKey (86k Users)',
      modalDetails: {
        fullContext: "Launched by the Ministry of Economy and Finance in 2019, CamDigiKey is Cambodia’s national platform for verified e-kyc, though adoption presently leans heavily toward business-related government services over retail civilian use.",
        keyMetrics: ["86,000 active users", "Managed by MEF", "Primary driver for business e-services"],
        timeline: "Launched 2019"
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'Bakong (60% adult population)',
      modalDetails: {
        fullContext: "Bakong is Cambodia's flagship sovereign digital payment system. Operating on blockchain-inspired quasi-decentralized ledgers under the National Bank of Cambodia, it successfully synthesized mobile payments nationwide.",
        keyMetrics: ["Reaches 60% of the adult population", "Operates across local banks and e-wallets", "Blockchain-enabled architecture"],
        timeline: "Launched 2020"
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Implemented', description: 'CamDX',
      modalDetails: {
        fullContext: "CamDX acts as the unified data exchange layer for the Cambodian government, notably powering systems like Verify.gov.kh for secure government document verification.",
        keyMetrics: ["Managed by MEF", "Powers Verify.gov.kh", "Core to Cambodian e-gov architecture"],
        timeline: "Launched 2020"
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Drafted', description: 'National AI Strategy 2024 (Ministry of Post & Telecom)',
      modalDetails: {
        fullContext: "The National AI Strategy, finalized by the Ministry of Post & Telecommunications in 2024, establishes the foundational trajectory for AI capability and procurement in Cambodia.",
        keyMetrics: ["Drafted by MPTC", "Targets public health and governance", "Introduces AI Sandboxes"],
        timeline: "Drafted 2024"
      }
    },
    governance: {
      title: 'AI Governance', status: 'Drafted', description: 'National AI Governance Framework 2024',
      modalDetails: {
        fullContext: "Designed concurrently with the National Strategy, this framework intends to regulate AI deployment, emphasizing safety and human-centric deployment principles before widespread public integration.",
        keyMetrics: ["Drafted by MPTC", "Focus on safety guardrails", "Awaits parliamentary ratification"],
        timeline: "Drafted 2024"
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Drafted', description: 'Law on Personal Data Protection (Expected 2025)',
      modalDetails: {
        fullContext: "Currently in the final drafting and ratification phases, this law will represent Cambodia's first comprehensive shield against data misuse and algorithmic vulnerability in the digital era.",
        keyMetrics: ["Expected passage in 2025", "Led by MPTC", "Core pillar for public trust"],
        timeline: "Expected 2025"
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Early Success', description: 'NEC predictive landmine mapping and Khmer LLM Development',
      modalDetails: {
        fullContext: "Cambodia is piloting high-impact AI models, most notably partnering with the Cambodian Mine Action Center for predictive landmine mapping, and collaborating with Singapore to develop a sovereign Khmer Large Language Model.",
        keyMetrics: ["Predictive landmine mapping (CMAC)", "Khmer LLM cross-border partnership", "National Research Center on AI (2025)"],
        timeline: "Active"
      }
    },
  },
  sectionB: {
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
};

export const philippinesData: CountryDetailData = {
  countryName: 'Philippines',
  dpiEcosystem: {
    digitalId: {
      title: 'Digital ID', status: 'Implemented (Mature)', description: 'PhilSys (90.02 Million registered)',
      modalDetails: {
        fullContext: "The Philippine Identification System (PhilSys) is one of the most mature identity platforms in the region, achieving massive penetration and serving as the primary KYC protocol for banking and social welfare.",
        keyMetrics: ["90.02 Million registered citizens", "Foundation for eGov PH app", "Drives financial inclusion"],
        timeline: "Active Maturity"
      }
    },
    payments: {
      title: 'Digital Payments', status: 'Implemented', description: 'InstaPay, PESONet',
      modalDetails: {
        fullContext: "Fueled by private sector wallet ecosystems (like GCash and Maya) and sovereign rails like InstaPay and PESONet, digital payments form a critical backbone to the robust Philippine digital economy.",
        keyMetrics: ["Universal e-wallet adoption", "Supports massive remittance flows", "Regulated by Bangko Sentral"],
        timeline: "Active Maturity"
      }
    },
    dataExchange: {
      title: 'Data Exchange', status: 'Implemented', description: 'eGov PH Super App',
      modalDetails: {
        fullContext: "The eGov PH Super App acts as a centralized sovereign multiplex, weaving together multiple municipal and national agency APIs into a single point of interaction for the public.",
        keyMetrics: ["Managed by DICT", "Aggregates local & national services", "Integrates directly with PhilSys"],
        timeline: "Active"
      }
    },
  },
  aiEcosystem: {
    policy: {
      title: 'AI Strategy', status: 'Implemented', description: 'National AI Strategy Roadmap 2.0 (DTI)',
      modalDetails: {
        fullContext: "The NAISR 2.0 reflects aggressive government commitment to advancing AI adoption, focusing heavily on bridging the R&D funding gap and stimulating domestic technology innovation.",
        keyMetrics: ["Roadmap updated 2.0", "Spearheaded by DTI", "Aims for global competitiveness"],
        timeline: "Implemented"
      }
    },
    governance: {
      title: 'AI Governance', status: 'Planned', description: 'AI Regulation Act (AIRA - SB 25)',
      modalDetails: {
        fullContext: "The proposed Artificial Intelligence Regulation Act (Senate Bill 25) seeks to formally establish a comprehensive legal framework for AI development, attempting to balance innovation with labor disruption concerns.",
        keyMetrics: ["Senate Bill 25", "Focuses on labor market safety", "Currently under legislative review"],
        timeline: "Planned"
      }
    },
    legislation: {
      title: 'Data Legislation', status: 'Implemented', description: 'Data Privacy Act of 2012',
      modalDetails: {
        fullContext: "The Data Privacy Act of 2012 is a mature, long-standing pillar of the Philippine digital arena, heavily enforcing regional data sovereignty, consent tracking, and breach liabilities.",
        keyMetrics: ["Established 2012", "Enforced by NPC", "Strict sovereign compliance"],
        timeline: "Implemented 2012"
      }
    },
    initiatives: {
      title: 'Government AI Initiatives', status: 'Early Success', description: 'Center for AI Research (CAIR) & ALAM Project',
      modalDetails: {
        fullContext: "Government bodies actively fund advanced research hubs like CAIR, alongside initiatives like DOST's AI4RP (Weather Forecasting) and the GATES Program (Geospatial AI).",
        keyMetrics: ["CAIR established for R&D", "AI4RP for meteorological prediction", "Funded by DOST"],
        timeline: "Active"
      }
    },
  },
  sectionB: {
    electricityAccess: 97.5,
    internetPenetration: 83.8,
    dataCenters: '28 operational, 13 upcoming',
    politicalStability: 'Flawed Democracy (51/167)',
    electionCycles: '6-year cycle (Next: May 2028)',
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
};
