import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string[];
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "What is a pump foil?",
    answer: [
      "A pump foil is a hydrofoil connected to a board, powered entirely by leg movements (pumping) to create lift.",
      "It allows for flight above water without the need for waves or wind.",
      "It provides a unique 'infinite glide' sensation unlike any other sport."
    ]
  },
  {
    question: "Who invented pump foiling?",
    answer: [
      "Pump foiling was pioneered largely by Laird Hamilton in the early 2000s, who experimented with foiling in various forms.",
      "The specific discipline of pump foiling as a standalone activity is most closely associated with Kai Lenny, who popularized it around 2018–2019"
    ]
  },
  {
    question: "How does a pump foil work?",
    answer: [
      "The front wing of a pump foil works exactly like airplane wings, using Bernoulli's principle.",
      "When you pump a foil, you rhythmically shift your weight down and up through your legs, alternately changing the foil's angle of attack. Pressing down pitches the nose downward, accelerating water over the curved wing surface and generating lift and forward thrust; pulling up pitches the nose back, converting that momentum into upward travel.",
      "Repeated in a dolphin-kick rhythm, this oscillation continuously translates vertical body movement into horizontal forward propulsion - essentially the same mechanism fish and cetaceans use to swim - keeping the board airborne above the water on the submerged foil with no external power source required."
    ]
  },
  {
    question: "What does it take to learn pump foiling?",
    answer: [
      "High resilience: Consistency is more important than raw strength.",
      "Weekly practice: Once you start, aim for at least one session per week to maintain muscle memory.",
      "Learning curve: Typically takes 5-10 sessions of 1-2 hours to reach consistent takeoff.",
      "Community: Practicing with others is the best way to improve."
    ]
  },
  {
    question: "What are the types of start?",
    answer: [
      "Dockstart: Running on a dock and jumping onto the board (most common).",
      "Dropstart: Jumping from a height (60-100cm) onto a foil held above water.",
      "Deadstart: Starting from a standstill with the foil in water (advanced).",
      "Launcher start: Putting the foil on an inflatable launcher and jumping on it (beginner).",
      "Beachstart: Running from the shore into the water (hardest).",
      "Ladder start: Using a ladder on the shore to jump into flight."
    ]
  },
  {
    question: "How long can one pump?",
    answer: [
      "The 'Power Pumper' Milestone: Reaching 1 minute of sustained flight.",
      "Intermediate standard: 2-5 minutes is considered a very solid session.",
      "World Record: 4h 25m (66km) held by Nicolas Iten.",
      "Energy usage: It is an intense cardio workout that scales with efficiency."
    ]
  }
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Knowledge Base</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-4 uppercase tracking-tighter">Frequently Asked Questions</h2>
          <div className="h-1.5 w-20 bg-cyan-500 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-3xl transition-all duration-300 ${activeIndex === index ? 'border-cyan-500 bg-slate-50 shadow-xl' : 'border-slate-100 bg-white hover:border-slate-200'}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-black text-[#001f3f] uppercase tracking-tight leading-tight">
                  {item.question}
                </span>
                <span className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${activeIndex === index ? 'rotate-180 bg-cyan-100 text-cyan-600' : 'text-slate-400'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8">
                  <ul className="space-y-3">
                    {item.answer.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3 text-slate-600 text-lg leading-relaxed font-medium">
                        <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/50"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;