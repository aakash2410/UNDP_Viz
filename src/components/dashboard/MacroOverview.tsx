'use client';

import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { radarData } from './MockData';
import { Globe, Info, Scale, ShieldAlert, Lightbulb, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MacroOverview() {
    const [visibleCountries, setVisibleCountries] = useState({
        Malaysia: true,
        Cambodia: true,
        Philippines: true,
    });

    const toggleCountry = (country: keyof typeof visibleCountries) => {
        setVisibleCountries(prev => ({
            ...prev,
            [country]: !prev[country]
        }));
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-16 font-sans text-slate-900">

            {/* Hero Section */}
            <header className="mb-16 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center justify-center space-x-2 bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-base font-semibold mb-8">
                    <Globe className="w-5 h-5" />
                    <span>UNDP Digital Transformation Support</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight" aria-label="Digital Transformation Readiness in Asia Pacific">
                    Digital Transformation Readiness<br />
                    <span className="text-blue-600">Asia Pacific Overview</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-loose">
                    Interactive dashboard mapping the foundational digital public infrastructure (DPI), artificial intelligence (AI) ecosystem maturity, and political landscapes across key APAC country offices.
                </p>
            </header>

            {/* Radar Chart Section */}
            <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-14">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            Regional Ecosystem Comparison
                            <button
                                className="text-slate-400 hover:text-blue-600 transition-colors"
                                aria-label="Learn more about this chart"
                                title="This chart compares countries across 6 core parameters. Higher values indicate higher maturity."
                            >
                                <Info className="w-5 h-5" />
                            </button>
                        </h2>
                        <p className="text-slate-500 mt-1">Multi-dimensional assessment of digital readiness parameters.</p>
                    </div>

                    {/* Legend / Toggles */}
                    <div className="flex flex-wrap gap-3" role="group" aria-label="Toggle countries">
                        {(Object.keys(visibleCountries) as Array<keyof typeof visibleCountries>).map((country) => {
                            const isActive = visibleCountries[country];
                            const getBgColor = (c: string) => {
                                if (c === 'Malaysia') return isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200';
                                if (c === 'Cambodia') return isActive ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200';
                                if (c === 'Philippines') return isActive ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200';
                                return '';
                            };

                            const getBorderColor = (c: string) => {
                                if (c === 'Malaysia') return isActive ? 'border-blue-600' : 'border-slate-200';
                                if (c === 'Cambodia') return isActive ? 'border-emerald-600' : 'border-slate-200';
                                if (c === 'Philippines') return isActive ? 'border-amber-500' : 'border-slate-200';
                                return '';
                            };

                            return (
                                <button
                                    key={country}
                                    onClick={() => toggleCountry(country)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${getBgColor(country)} ${getBorderColor(country)}`}
                                    aria-pressed={isActive}
                                >
                                    {country}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Chart Container */}
                <div className="w-full h-[500px]" aria-label="Radar chart showing country data">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                            <PolarGrid stroke="#e2e8f0" />
                            <PolarAngleAxis
                                dataKey="parameter"
                                tick={{ fill: '#475569', fontSize: 13, fontWeight: 500 }}
                            />
                            <PolarRadiusAxis
                                angle={30}
                                domain={[0, 5]}
                                tick={{ fill: '#94a3b8' }}
                                tickCount={6}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                itemStyle={{ fontWeight: 600 }}
                            />

                            {visibleCountries.Malaysia && (
                                <Radar
                                    name="Malaysia"
                                    dataKey="Malaysia"
                                    stroke="#2563eb"
                                    fill="#2563eb"
                                    fillOpacity={0.4}
                                    isAnimationActive={true}
                                />
                            )}
                            {visibleCountries.Cambodia && (
                                <Radar
                                    name="Cambodia"
                                    dataKey="Cambodia"
                                    stroke="#059669"
                                    fill="#059669"
                                    fillOpacity={0.4}
                                    isAnimationActive={true}
                                />
                            )}
                            {visibleCountries.Philippines && (
                                <Radar
                                    name="Philippines"
                                    dataKey="Philippines"
                                    stroke="#f59e0b"
                                    fill="#f59e0b"
                                    fillOpacity={0.4}
                                    isAnimationActive={true}
                                />
                            )}
                        </RadarChart>
                    </ResponsiveContainer>
                </div>

                {/* Regional Synthesis */}
                <div className="mt-16 pt-12 border-t border-slate-100">
                    <h3 className="text-2xl font-bold tracking-tight mb-8">Regional Synthesis</h3>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <Scale className="w-8 h-8 text-blue-600 mb-4" />
                            <h4 className="font-bold text-slate-900 mb-2">Siloed AI Policymaking</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                The absence of dedicated coordinating mechanisms weakens policy coherence. While the Philippines is establishing an inter-agency AI coordination lead (DTI, DICT, DOST), other nations still rely on fragmented, ministerial-level digital strategies.
                            </p>
                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <ShieldAlert className="w-8 h-8 text-amber-500 mb-4" />
                            <h4 className="font-bold text-slate-900 mb-2">Connectivity & R&D Gaps</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                While internet penetration scales rapidly, deficits in compute-capable infrastructure limit innovation. Cambodia relies heavily on $50M ADB digital infrastructure loans, whereas Malaysia attracts massive initial foreign capital (e.g., USD 18B+ AI investment) due to higher baseline readiness.
                            </p>
                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <Lightbulb className="w-8 h-8 text-emerald-600 mb-4" />
                            <h4 className="font-bold text-slate-900 mb-2">Public Trust & Coordination</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Emerging concerns surrounding deepfakes and labor disruption demand robust data governance. Cambodia is actively drafting its National AI Governance Framework for 2024, mirroring Malaysia's recent AIGE guidelines, emphasizing transparency and multi-stakeholder participation.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Additional Resources Link */}
            <section className="max-w-6xl mx-auto mt-8 flex justify-end">
                <Link
                    href="/scoring"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
                >
                    <Info className="w-4 h-4" />
                    How is scoring done?
                    <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </Link>
            </section>

            {/* Country Profile Links */}
            <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8" aria-label="Country detailing profiles">
                {['malaysia', 'cambodia', 'philippines'].map((c) => (
                    <Link key={c} href={`/countries/${c}`} className="block bg-white rounded-xl shadow-sm border border-slate-200 p-8 hover:shadow-md transition-all hover:border-blue-300 group">
                        <h3 className="text-2xl font-bold capitalize text-slate-800 group-hover:text-blue-600 flex items-center justify-between mb-3">
                            {c} Profile
                            <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" aria-hidden="true">→</span>
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed">View detailed ecosystem analysis, infrastructure metrics, and strategic insights.</p>
                    </Link>
                ))}
            </section>

        </div>
    );
}
