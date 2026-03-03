'use client';

import React, { useState } from 'react';
import {
    Network, Zap, CheckCircle2, AlertCircle, Clock,
    Map, Activity, Users, Building2, Lightbulb, TrendingUp, Handshake, Globe, ShieldCheck, FileText, Cpu, ArrowLeft, X, Info
} from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { Actor, CountryDetailData, MetricCard } from './MockData';

// Reusable Status Badge
const StatusBadge = ({ status }: { status: string }) => {
    const getStyles = () => {
        const lower = status.toLowerCase();
        if (lower.includes('advanced') || lower.includes('mature') || lower.includes('maturing')) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
        if (lower.includes('early success')) return 'bg-indigo-100 text-indigo-800 border-indigo-200';
        if (lower.includes('nascent') || lower.includes('drafted') || lower.includes('planned')) return 'bg-amber-100 text-amber-800 border-amber-200';
        if (lower.includes('implemented')) return 'bg-blue-100 text-blue-800 border-blue-200';
        return 'bg-slate-100 text-slate-800 border-slate-200';
    };

    return (
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStyles()}`}>
            {status}
        </span>
    );
};

// Animation Variants
const containerVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, bounce: 0, duration: 0.4 } },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

export default function CountryDetailDashboard({ data }: { data: CountryDetailData }) {
    const [activeTab, setActiveTab] = useState<'Opportunities' | 'Risks' | 'Partnerships'>('Opportunities');
    const [expandedActorId, setExpandedActorId] = useState<string | null>(null);
    const [selectedMetric, setSelectedMetric] = useState<MetricCard | null>(null);
    const [allActorsExpanded, setAllActorsExpanded] = useState(false);

    // --- Utility Helpers ---

    // Auto-highlights financial figures (e.g., $50M, USD 18B, 100%) and specific keywords
    const highlightKeyMetrics = (text: string) => {
        const regex = /(\$?\d+(?:\.\d+)?[MBKmbk]?\b|\d+(?:\.\d+)?%|USD \d+(?:\.\d+)?[MBKmbk]?|RM\d+(?:\.\d+)?[MBKmbk]?)/g;
        const parts = text.split(regex);
        return parts.map((part, i) => {
            if (part.match(regex)) {
                return <strong key={i} className="bg-amber-100 text-amber-900 px-1 rounded mx-0.5">{part}</strong>;
            }
            return part;
        });
    };

    // --- Render Helpers ---

    // Section A
    const renderMetricCard = (cardData: MetricCard, icon: React.ReactNode) => (
        <motion.div
            variants={itemVariant}
            onClick={() => cardData.modalDetails && setSelectedMetric(cardData)}
            className={`flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-slate-200 transition-all relative overflow-hidden group ${cardData.modalDetails ? 'cursor-pointer hover:shadow-md hover:border-blue-300 hover:-translate-y-1' : ''}`}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {icon}
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 leading-tight">{cardData.title}</h3>
                </div>
            </div>
            <div className="mb-4">
                <StatusBadge status={cardData.status} />
            </div>
            <p className="text-sm text-slate-600 mt-auto">{cardData.description}</p>
            {cardData.modalDetails && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="text-sm font-semibold flex items-center gap-1.5">
                        <Info className="w-4 h-4" /> View Context
                    </span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                        <ArrowLeft className="w-4 h-4 rotate-135 transform -rotate-45" />
                    </div>
                </div>
            )}
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-slate-900">

            {/* Modal Overlay built with AnimatePresence */}
            <AnimatePresence>
                {selectedMetric && selectedMetric.modalDetails && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                            onClick={() => setSelectedMetric(null)}
                            aria-hidden="true"
                        />

                        {/* Modal Dialog */}
                        <motion.div
                            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
                            variants={modalVariants}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            {/* Modal Header */}
                            <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
                                <div>
                                    <h2 id="modal-title" className="text-2xl font-bold tracking-tight text-slate-900">{selectedMetric.title}</h2>
                                    <div className="mt-2 text-sm text-slate-500">
                                        <StatusBadge status={selectedMetric.status} />
                                        {selectedMetric.modalDetails.timeline && (
                                            <span className="ml-3 italic">&bull; {selectedMetric.modalDetails.timeline}</span>
                                        )}
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedMetric(null)}
                                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8 space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Historical Context</h3>
                                    <p className="text-slate-700 leading-relaxed text-base">
                                        {selectedMetric.modalDetails.fullContext}
                                    </p>
                                </div>

                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-800 mb-4">Key Metrics & Milestones</h3>
                                    <ul className="space-y-3">
                                        {selectedMetric.modalDetails.keyMetrics.map((point, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <div className="flex-shrink-0 mt-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                                </div>
                                                <span className="text-slate-700 font-medium">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium hover:-translate-x-1 duration-200">
                    <ArrowLeft className="w-4 h-4" /> Back to Regional Dashboard
                </Link>
            </div>

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-10 border-b border-slate-200 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Map className="w-6 h-6 text-blue-600" />
                        <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Country Profile</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{data.countryName}</h1>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/scoring"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm rounded-xl hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm cursor-pointer"
                    >
                        <ShieldCheck className="w-4 h-4" /> Scoring Methodology
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-16">

                {/* SECTION A.1: Digital Public Infrastructure */}
                <section aria-labelledby="section-dpi-title">
                    <div className="flex items-center gap-3 mb-8">
                        <Network className="w-8 h-8 text-blue-600" />
                        <h2 id="section-dpi-title" className="text-3xl font-bold tracking-tight">Digital Public Infrastructure</h2>
                    </div>
                    <motion.div
                        variants={containerVariant}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {renderMetricCard(data.dpiEcosystem.digitalId, <CheckCircle2 className="w-6 h-6" />)}
                        {renderMetricCard(data.dpiEcosystem.payments, <Zap className="w-6 h-6" />)}
                        {renderMetricCard(data.dpiEcosystem.dataExchange, <Activity className="w-6 h-6" />)}
                    </motion.div>
                </section>

                {/* SECTION A.2: AI Ecosystems (Expanded) */}
                <section aria-labelledby="section-ai-title">
                    <div className="flex items-center gap-3 mb-8">
                        <Cpu className="w-8 h-8 text-emerald-600" />
                        <h2 id="section-ai-title" className="text-3xl font-bold tracking-tight">Artificial Intelligence Ecosystem</h2>
                    </div>
                    <motion.div
                        variants={containerVariant}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {renderMetricCard(data.aiEcosystem.policy, <FileText className="w-6 h-6" />)}
                        {renderMetricCard(data.aiEcosystem.governance, <Globe className="w-6 h-6" />)}
                        {renderMetricCard(data.aiEcosystem.legislation, <ShieldCheck className="w-6 h-6" />)}
                        {renderMetricCard(data.aiEcosystem.initiatives, <Cpu className="w-6 h-6" />)}
                    </motion.div>
                </section>

                {/* SECTION B: Infrastructure & Politics */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    aria-labelledby="section-b-title"
                    className="grid lg:grid-cols-2 gap-10"
                >
                    <div className="bg-white rounded-2xl border border-slate-200 p-10 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h2 id="section-b-title" className="text-2xl font-bold mb-8 border-b border-slate-100 pb-5 tracking-tight">Physical Infrastructure</h2>

                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-lg font-semibold text-slate-700">Access to Electricity</span>
                                    <span className="font-bold text-slate-900">{data.sectionB.electricityAccess}%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden" role="progressbar" aria-valuenow={data.sectionB.electricityAccess} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="bg-amber-400 h-3 rounded-full" style={{ width: `${data.sectionB.electricityAccess}% ` }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-slate-700">Internet Penetration</span>
                                    <span className="font-bold text-slate-900">{data.sectionB.internetPenetration}%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden" role="progressbar" aria-valuenow={data.sectionB.internetPenetration} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${data.sectionB.internetPenetration}%` }}></div>
                                </div>
                            </div>

                            {data.sectionB.dataCenters && (
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold text-slate-700">Data Centers</span>
                                    </div>
                                    <div className="text-sm font-medium text-slate-900 bg-slate-50 py-3 px-4 rounded-xl border border-slate-100">
                                        {data.sectionB.dataCenters}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 p-10 shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-colors">
                        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h2 className="text-2xl font-bold mb-8 border-b border-slate-100 pb-5 tracking-tight">Political Context</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1"><Building2 className="w-5 h-5 text-slate-400" /></div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Political Stability</h4>
                                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{data.sectionB.politicalStability}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1"><Clock className="w-5 h-5 text-slate-400" /></div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Election Cycles</h4>
                                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{data.sectionB.electionCycles}</p>
                                </div>
                            </div>
                            {data.sectionB.leadershipQuote && (
                                <div className="mt-6 pt-6 border-t border-emerald-100/80">
                                    <blockquote className="relative p-5 bg-emerald-50/50 rounded-xl border border-emerald-100 transition-all hover:bg-emerald-50">
                                        <div className="absolute -top-1 left-2 text-5xl text-emerald-200/60 font-serif leading-none" aria-hidden="true">&ldquo;</div>
                                        <p className="relative z-10 text-sm text-slate-700 italic leading-relaxed pl-6 pr-2">
                                            {data.sectionB.leadershipQuote.text}
                                        </p>
                                        <footer className="mt-4 pl-6">
                                            <p className="text-sm font-bold text-emerald-900">{data.sectionB.leadershipQuote.author}</p>
                                            <p className="text-xs text-emerald-700/80 font-medium">{data.sectionB.leadershipQuote.context}</p>
                                        </footer>
                                    </blockquote>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.section>

                {/* SECTION C: Ecosystem Actors Map */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    aria-labelledby="section-c-title"
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                >
                    <div className="p-8 md:p-10 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                            <Users className="w-8 h-8 text-slate-700" />
                            <h2 id="section-c-title" className="text-3xl font-bold tracking-tight">Community & Key Actors</h2>
                        </div>
                        <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <p className="text-lg text-slate-600">Click on an organization to view their associated major initiatives and goals.</p>
                            <button
                                onClick={() => setAllActorsExpanded(!allActorsExpanded)}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg text-sm transition-colors"
                            >
                                {allActorsExpanded ? 'Collapse All' : 'Expand All'}
                            </button>
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left text-lg" aria-label="Community Actors">
                            <thead className="bg-slate-50/80 backdrop-blur-md sticky top-0 z-10">
                                <tr>
                                    <th scope="col" className="px-8 py-5 font-bold text-slate-900 border-b border-slate-200">Organization Name</th>
                                    <th scope="col" className="px-8 py-5 font-bold text-slate-900 border-b border-slate-200">Sector</th>
                                    <th scope="col" className="px-8 py-5 font-bold text-slate-900 border-b border-slate-200">Primary Role</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {data.sectionC.actors.map((actor: Actor) => {
                                    const isExpanded = allActorsExpanded || expandedActorId === actor.id;
                                    return (
                                        <React.Fragment key={actor.id}>
                                            <tr
                                                className="hover:bg-blue-50/40 cursor-pointer transition-colors group"
                                                onClick={() => {
                                                    if (allActorsExpanded) setAllActorsExpanded(false);
                                                    setExpandedActorId(isExpanded ? null : actor.id);
                                                }}
                                                aria-expanded={isExpanded}
                                            >
                                                <td className="px-8 py-6 font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{actor.name}</td>
                                                <td className="px-8 py-6">
                                                    <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                                                        {actor.type}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-6 text-slate-700 max-w-sm truncate">{actor.role}</td>
                                            </tr>
                                            {/* Collapsible content (Progressive Disclosure) */}
                                            {isExpanded && (
                                                <tr className="bg-blue-50/20" aria-hidden={expandedActorId !== actor.id}>
                                                    <td colSpan={3} className="px-8 py-6">
                                                        <div className="pl-6 border-l-4 border-blue-500 py-3">
                                                            <h5 className="font-bold text-sm uppercase tracking-wider text-slate-600 mb-3">Major Initiatives</h5>
                                                            {actor.initiatives && actor.initiatives.length > 0 ? (
                                                                <ul className="list-disc list-inside space-y-2 text-base text-slate-800">
                                                                    {actor.initiatives.map((init, idx) => (
                                                                        <li key={idx}>{init}</li>
                                                                    ))}
                                                                </ul>
                                                            ) : (
                                                                <p className="text-slate-500 italic">No explicit initiatives documented.</p>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </motion.section>

                {/* SECTION D: Strategic Insights Tabs */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    aria-labelledby="section-d-title"
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm"
                >
                    <div className="p-8 md:p-10 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <Lightbulb className="w-8 h-8 text-slate-700" />
                            <h2 id="section-d-title" className="text-3xl font-bold tracking-tight">Strategic Insights</h2>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="flex border-b border-slate-200" role="tablist">
                            <button
                                role="tab"
                                aria-selected={activeTab === 'Opportunities'}
                                onClick={() => setActiveTab('Opportunities')}
                                className={`flex items - center gap - 2 px - 6 py - 3 font - medium transition - colors border - b - 2 font - medium ${activeTab === 'Opportunities' ? 'border-emerald-500 text-emerald-700 bg-emerald-50/50' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'} `}
                            >
                                <TrendingUp className="w-4 h-4" /> Emerging Opportunities
                            </button>
                            <button
                                role="tab"
                                aria-selected={activeTab === 'Risks'}
                                onClick={() => setActiveTab('Risks')}
                                className={`flex items - center gap - 2 px - 6 py - 3 font - medium transition - colors border - b - 2 font - medium ${activeTab === 'Risks' ? 'border-rose-500 text-rose-700 bg-rose-50/50' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'} `}
                            >
                                <AlertCircle className="w-4 h-4" /> Potential Risks
                            </button>
                            <button
                                role="tab"
                                aria-selected={activeTab === 'Partnerships'}
                                onClick={() => setActiveTab('Partnerships')}
                                className={`flex items - center gap - 2 px - 6 py - 3 font - medium transition - colors border - b - 2 font - medium ${activeTab === 'Partnerships' ? 'border-blue-500 text-blue-700 bg-blue-50/50' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'} `}
                            >
                                <Handshake className="w-4 h-4" /> Partnerships
                            </button>
                        </div>

                        <div className="pt-6" role="tabpanel">
                            <ul className="space-y-4">
                                {activeTab === 'Opportunities' && data.sectionD.opportunities.map(item => (
                                    <li key={item.id} className="flex gap-4 bg-emerald-50/30 p-5 rounded-2xl border border-emerald-100">
                                        <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-600" /></div>
                                        <p className="text-slate-800 leading-relaxed text-base">{highlightKeyMetrics(item.text)}</p>
                                    </li>
                                ))}
                                {activeTab === 'Risks' && data.sectionD.risks.map(item => (
                                    <li key={item.id} className="flex gap-4 bg-rose-50/30 p-5 rounded-2xl border border-rose-100">
                                        <div className="mt-1"><AlertCircle className="w-6 h-6 text-rose-600" /></div>
                                        <p className="text-slate-800 leading-relaxed text-base">{highlightKeyMetrics(item.text)}</p>
                                    </li>
                                ))}
                                {activeTab === 'Partnerships' && data.sectionD.partnerships.map(item => (
                                    <li key={item.id} className="flex gap-4 bg-blue-50/30 p-5 rounded-2xl border border-blue-100">
                                        <div className="mt-1"><Handshake className="w-6 h-6 text-blue-600" /></div>
                                        <p className="text-slate-800 leading-relaxed text-base">{highlightKeyMetrics(item.text)}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
}
