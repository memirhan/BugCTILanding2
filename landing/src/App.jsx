import React, { useState, useEffect } from 'react';
import { Rocket, Mail, Shield } from 'lucide-react';
import logo from '../assets/bugcti-logo.png';

const App = () => {
    // Countdown to July 1, 2026
    const calculateTimeLeft = () => {
        const difference = +new Date("2026-07-01T00:00:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const handleWaitlistSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#020408] text-[#c9d1d9] font-sans selection:bg-brand-indigo/30 selection:text-white">
            
            {/* Minimalist Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-indigo/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Navbar */}
            <nav className="w-full relative z-10 pt-10">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/5 p-0 flex items-center justify-center shadow-lg overflow-hidden border border-white/10">
                            <img src={logo} alt="BugCTI Logo" className="w-full h-full object-cover scale-110 translate-y-0.5" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white transition-colors">BugCTI</span>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 relative z-10 flex flex-col items-center justify-center py-20">
                <section className="w-full max-w-7xl mx-auto px-6 text-center">
                    <div className="animate-fade-in-up">
                        <h1 className="text-7xl md:text-[10rem] font-black text-white mb-10 tracking-[-0.05em] leading-[0.85] max-w-5xl mx-auto">
                            Secure code <br />
                            starts <span className="text-gradient">before</span> deployment.
                        </h1>

                        <p className="text-xl md:text-2xl text-github-muted max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
                            The minimalist command center for modern engineering teams. 
                            Connect BugCTI and secure your infrastructure in minutes.
                        </p>
                        
                        {/* Countdown Timer */}
                        <div className="flex justify-center gap-4 md:gap-8 mb-16 animate-fade-in" style={{ animationDelay: '300ms' }}>
                            {Object.entries(timeLeft).map(([unit, value]) => (
                                <div key={unit} className="flex flex-col items-center p-4 min-w-[80px] md:min-w-[100px] rounded-2xl bg-white/[0.02] border border-white/5 shadow-[0_20px_40px_rgba(255,255,255,0.02)] backdrop-blur-sm">
                                    <span className="text-4xl md:text-5xl font-black text-white mb-2">{String(value).padStart(2, '0')}</span>
                                    <span className="text-xs md:text-sm text-github-muted font-bold uppercase tracking-widest">{unit}</span>
                                </div>
                            ))}
                        </div>

                        {/* Waitlist Form */}
                        <div className="max-w-md mx-auto animate-fade-in" style={{ animationDelay: '500ms' }}>
                            {submitted ? (
                                <div className="p-6 rounded-2xl bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo font-medium flex items-center justify-center gap-3">
                                    <Rocket className="w-6 h-6" />
                                    Thanks for joining! We'll be in touch.
                                </div>
                            ) : (
                                <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3">
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address" 
                                        required
                                        className="flex-1 px-6 py-4 rounded-2xl bg-[#010409]/80 backdrop-blur-xl border border-white/10 text-white placeholder-github-muted focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-lg"
                                    />
                                    <button 
                                        type="submit" 
                                        className="px-8 py-4 rounded-2xl bg-white text-black font-black text-lg hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                                    >
                                        <Rocket className="w-5 h-5" />
                                        Join
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-10 relative z-10">
                <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center gap-2 text-github-muted font-medium text-sm">
                        <Shield className="w-4 h-4 opacity-50" />
                        © 2026 BugCTI. All rights reserved.
                    </div>
                    <div className="flex items-center gap-2 text-github-muted hover:text-white transition-colors text-sm">
                        <Mail className="w-4 h-4 opacity-50" />
                        <a href="mailto:memirhansumer@gmail.com">memirhansumer@gmail.com</a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default App;
