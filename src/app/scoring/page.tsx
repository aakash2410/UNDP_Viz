'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Info, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const scoringCriteria = [
    {
        parameter: "1. AI Ecosystem Maturity",
        greenfield: "No mention of intent to draft a Central AI policy or legislation.",
        openToAdopt: "No national AI strategy or ad-hoc initiatives only. Government showed intent to draft AI policy.",
        earlySuccess: "National AI strategy published; governance frameworks defined; initial public-sector pilots underway.",
        maturing: "Strategy implemented with measurable targets; dedicated budget; regulatory enforcement in practice.",
        roleModel: "Dedicated investment for capacity building and R&D for AI, education for public-sector workers with promotion of private actors."
    },
    {
        parameter: "2. DPI Ecosystem Maturity",
        greenfield: "Plan/Pilot implementation DPI Asset, or no plans yet.",
        openToAdopt: "1 foundational DPI operational; limited interoperability.",
        earlySuccess: "At least 2 foundational DPIs operational and interoperable.",
        maturing: "3 foundational DPIs operational and interoperable; 2 foundational DPIs have at least 50% TAM adoption.",
        roleModel: "Foundational DPIs operational, cross-sectoral, and interoperable with widely used use-cases. Adoption rate >70%."
    },
    {
        parameter: "3. Digital Infrastructure",
        greenfield: "Electricity or internet penetration <70%; backbone infrastructure incomplete, no evidence of expansion.",
        openToAdopt: "Electricity or internet penetration <70%; backbone infrastructure incomplete, but expansion underway.",
        earlySuccess: "Electricity & internet penetration >80%; basic cloud/data hosting exists.",
        maturing: "Electricity & internet penetration >95%; compute-capable data centres; cloud infrastructure exists.",
        roleModel: "100% Electricity & Internet penetration. Compute and cloud sovereignty provides guidance to other countries."
    },
    {
        parameter: "4. Political Stability",
        greenfield: "Scores for governance indicators (WB) - Political stability - 0-20 percentile.",
        openToAdopt: "Scores for governance indicators (WB) - Political stability - 20+ to 40 percentile.",
        earlySuccess: "Scores for governance indicators (WB) - Political stability - 40+ to 60 percentile.",
        maturing: "Scores for governance indicators (WB) - Political stability - 60+ to 80 percentile.",
        roleModel: "Scores for governance indicators (WB) - Political stability - 80+ to 100 percentile."
    },
    {
        parameter: "5. Stakeholder Participation",
        greenfield: "No formal AI/DPI initiative; no designated lead agency for digital transformation/AI/DPI.",
        openToAdopt: "Single ministry/agency leading DT; limited cross-sector coordination.",
        earlySuccess: "Inter-ministerial coordination mechanism established; structured consultations with private sector and academia documented.",
        maturing: "Institutionalised multi-stakeholder platforms (advisory councils); regulatory sandboxes; recurring engagement cycles.",
        roleModel: "Continuous co-creation model across government, private sector, academia, and civil society; transparent decision-making."
    },
    {
        parameter: "6. Funding Landscape",
        greenfield: "No dedicated AI/DPI budget; no identifiable funding line.",
        openToAdopt: "Ministry or agency identified; limited annual budget allocation OR externally supported funding primarily for strategy/pilot.",
        earlySuccess: "Ministry responsible for AI/DPI development provided with dedicated budget OR recurrent investment through MDB partnerships.",
        maturing: "Sustained multi-year public investment; budget execution rates reported; domestic co-financing mechanisms.",
        roleModel: "Long-term strategic or sovereign funding mechanisms; significant R&D allocation, strong domestic VC/private capital ecosystem."
    }
];

export default function ScoringMethodologyPage() {
    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-slate-900">
            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium hover:-translate-x-1 duration-200">
                    <ArrowLeft className="w-4 h-4" /> Back to Regional Dashboard
                </Link>
            </div>

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-10 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                    <HelpCircle className="w-6 h-6 text-indigo-600" />
                    <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Methodology</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">How is scoring done?</h1>
                <p className="text-xl text-slate-600 max-w-4xl leading-relaxed">
                    The Radar Chart scores are derived from arguably assessing qualitative milestones within six structural parameters against a progressive 1-to-5 maturity framework (Greenfield through Role Model).
                </p>
            </div>

            {/* Matrix Table */}
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="p-4 md:p-6 font-bold text-slate-900 w-1/6">Parameter</th>
                                <th className="p-4 md:p-6 font-semibold text-slate-700 w-1/6 border-l border-slate-100">
                                    <div className="flex items-center gap-2 relative group">
                                        <div className="w-2 h-2 rounded-full bg-slate-300"></div> Greenfield
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Score: 1</span>
                                    </div>
                                </th>
                                <th className="p-4 md:p-6 font-semibold text-slate-700 w-1/6 border-l border-slate-100">
                                    <div className="flex items-center gap-2 relative group">
                                        <div className="w-2 h-2 rounded-full bg-blue-300"></div> Open to Adopt
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Score: 2</span>
                                    </div>
                                </th>
                                <th className="p-4 md:p-6 font-semibold text-slate-700 w-1/6 border-l border-slate-100">
                                    <div className="flex items-center gap-2 relative group">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div> Early Success
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Score: 3</span>
                                    </div>
                                </th>
                                <th className="p-4 md:p-6 font-semibold text-slate-700 w-1/6 border-l border-slate-100">
                                    <div className="flex items-center gap-2 relative group">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div> Maturing
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Score: 4</span>
                                    </div>
                                </th>
                                <th className="p-4 md:p-6 font-semibold text-slate-700 w-1/6 border-l border-slate-100">
                                    <div className="flex items-center gap-2 relative group">
                                        <div className="w-2 h-2 rounded-full bg-purple-600"></div> Role Model
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Score: 5</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {scoringCriteria.map((row, idx) => (
                                <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="p-4 md:p-6 font-bold text-slate-800 group-hover:text-blue-700 transition-colors align-top">{row.parameter}</td>
                                    <td className="p-4 md:p-6 text-sm text-slate-600 align-top border-l border-slate-50">{row.greenfield}</td>
                                    <td className="p-4 md:p-6 text-sm text-slate-600 align-top border-l border-slate-50">{row.openToAdopt}</td>
                                    <td className="p-4 md:p-6 text-sm text-slate-600 align-top border-l border-slate-50 bg-blue-50/20">{row.earlySuccess}</td>
                                    <td className="p-4 md:p-6 text-sm text-slate-600 align-top border-l border-slate-50 bg-indigo-50/10">{row.maturing}</td>
                                    <td className="p-4 md:p-6 text-sm text-slate-600 align-top border-l border-slate-50 bg-purple-50/10">{row.roleModel}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Descriptive Note */}
            <div className="max-w-7xl mx-auto mt-8 flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900 leading-relaxed">
                    <strong>Note on methodology:</strong> This framework parses categorical milestones from the UNDP Scoping Report and assigns quantifiable equivalents (1 through 5). A score of 5 ("Role Model") indicates the nation provides sovereign guidance and robust, resilient ecosystems acting as a standard-setter for the region, while a 1 ("Greenfield") indicates foundational gaps.
                </p>
            </div>
        </div>
    );
}
