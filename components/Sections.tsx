import React from 'react';
import { 
  Clock, ShieldCheck, FileCheck, Droplets, ScanEye, Wind, 
  Hammer, Building2, Skull, Waves, Warehouse, Home, 
  MapPin, AlertTriangle, CloudRain, Zap, Pipette,
  CheckCircle2, ArrowRight, Star, Play
} from 'lucide-react';
import { Card, Button, Badge, Accordion, StarRating } from './UI';
import { ProcessStep, ServiceItem } from '../types';

// --- HERO SECTION ---
export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 px-4 lg:px-12 overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-surface pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `radial-gradient(#1a73e8 1px, transparent 1px)`, 
               backgroundSize: '32px 32px' 
             }}>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in-up">
             <Badge text="IICRC Certified" icon={ShieldCheck} className="bg-white/80 backdrop-blur-sm" />
             <Badge text="60-Min Response" icon={Clock} color="green" className="bg-white/80 backdrop-blur-sm" />
             <Badge text="Direct Billing" icon={FileCheck} color="slate" className="bg-white/80 backdrop-blur-sm" />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
            Water Damage Restoration in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Northern Virginia</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
            Expert restoration, mold remediation, and flood cleanup. We handle the mess and the insurance claim so you can recover faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:8774970007" className="w-full sm:w-auto">
              <Button size="xl" icon={Clock} className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white shadow-red-200">
                Emergency: (877) 497-0007
              </Button>
            </a>
            <Button variant="outline" size="xl" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-2" onClick={() => document.getElementById('assessment')?.scrollIntoView({behavior: 'smooth'})}>
              Free Damage Assessment
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500">
             <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="User" />
                  </div>
                ))}
             </div>
             <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span>Trusted by 500+ Neighbors</span>
             </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
           {/* Abstract visual representation of service - clean, technical */}
           <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                 <Card className="bg-white/90 backdrop-blur" noPadding>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-primary mb-4">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">Water Extraction</h3>
                      <p className="text-sm text-slate-500">Powerful truck-mounted removal</p>
                    </div>
                 </Card>
                 <Card className="bg-white/90 backdrop-blur" noPadding>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                        <Wind className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">Rapid Drying</h3>
                      <p className="text-sm text-slate-500">Industrial dehumidification</p>
                    </div>
                 </Card>
              </div>
              <div className="space-y-4">
                 <Card className="bg-primary text-white shadow-primary/30 shadow-xl border-none" noPadding>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-4">
                        <Clock className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">24/7 Response</h3>
                      <p className="text-sm text-white/80">We arrive in 60 minutes or less</p>
                    </div>
                 </Card>
                 <Card className="bg-white/90 backdrop-blur" noPadding>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">Mold Prevention</h3>
                      <p className="text-sm text-slate-500">Sanitization & anti-microbial</p>
                    </div>
                 </Card>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- INTRODUCTION ---
export const Introduction: React.FC = () => {
  return (
    <section id="intro" className="py-20 px-4 lg:px-12 max-w-7xl mx-auto">
      <div className="bg-white rounded-[48px] p-8 lg:p-16 shadow-xl border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-blue-300"></div>
        <div className="grid lg:grid-cols-5 gap-12 items-center">
           <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Water damage doesn't wait for convenient times.</h2>
              <div className="prose prose-lg text-slate-600 space-y-4">
                <p>
                  Whether from a burst pipe, appliance failure, sewage backup, or storm flooding, water intrusion causes progressive damage to your Northern Virginia home. Within hours, water saturates flooring, drywall, and insulation. Within days, mold begins growing in damp areas. 
                </p>
                <p className="font-medium text-slate-800">
                  Professional water damage restoration stops this progression and returns your property to pre-loss condition.
                </p>
                <p>
                  Flood Doctor LLC provides comprehensive water damage restoration services throughout Fairfax County, Northern Virginia, Washington DC, and Maryland. Our IICRC-certified technicians respond 24/7, arriving with professional equipment to extract water, dry structures, and restore your home completely.
                </p>
              </div>
           </div>
           <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                Why Speed Matters
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs shrink-0 mr-3">1h</div>
                  <p className="text-sm text-slate-600">Water spreads, saturating porous materials like drywall and pad.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs shrink-0 mr-3">24h</div>
                  <p className="text-sm text-slate-600">Microbial growth can begin. Furniture stains appear on carpets.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs shrink-0 mr-3">48h+</div>
                  <p className="text-sm text-slate-600">Mold growth becomes likely. Structural integrity may be compromised.</p>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <a href="tel:8774970007" className="flex items-center justify-between text-primary font-bold hover:underline group">
                   Call for Immediate Help
                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- EMERGENCY SERVICES ---
export const EmergencyServices: React.FC = () => {
  const features = [
    {
      title: "Immediate Extraction",
      icon: Droplets,
      desc: "Truck-mounted units & submersible pumps remove hundreds of gallons per hour.",
      points: ["Basement flooding", "Carpet & pad extraction", "Hardwood salvage"]
    },
    {
      title: "Moisture Detection",
      icon: ScanEye,
      desc: "Hidden moisture causes long-term damage. We find it all.",
      points: ["Thermal imaging", "Penetrating meters", "Humidity tracking"]
    },
    {
      title: "Structural Drying",
      icon: Wind,
      desc: "Industrial LGR dehumidifiers and air movers accelerate evaporation.",
      points: ["Wall cavity injection", "Desiccant drying", "Daily monitoring"]
    }
  ];

  return (
    <section id="emergency" className="py-24 px-4 lg:px-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <Badge text="Emergency Response" color="red" className="mb-4" icon={AlertTriangle} />
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">24/7 Emergency Services</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Every hour of delayed action increases damage severity. Flood Doctor maintains emergency crews ready to respond to water damage calls throughout Northern Virginia at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Card key={i} className="h-full group" variant="elevated">
              <div className="w-16 h-16 bg-primary-light rounded-[20px] flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{f.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{f.desc}</p>
              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-3">
                  {f.points.map((p, j) => (
                    <li key={j} className="flex items-center text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-3 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- RESTORATION SERVICES ---
export const RestorationServices: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-slate-100 pb-8">
          <div className="max-w-2xl">
            <Badge text="End-to-End" className="mb-4" color="blue" />
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">Complete Restoration Solutions</h2>
            <p className="text-slate-600 text-lg">From initial emergency response through final reconstruction, we handle every aspect of your property's recovery.</p>
          </div>
          <Button variant="secondary" className="mt-8 md:mt-0" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} icon={ArrowRight}>
            Schedule Service
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Residential Card - Large */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-blue-50/50 to-white border-blue-100" title="Residential Restoration" subtitle="Home Services">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <h4 className="font-bold text-slate-900 flex items-center mb-4 text-lg">
                  <Home className="w-5 h-5 mr-2 text-primary"/> Living Areas
                </h4>
                <ul className="space-y-3">
                  {['Carpet & Flooring replacement', 'Drywall & plaster repair', 'Trim restoration', 'Furniture cleaning'].map((item, i) => (
                     <li key={i} className="flex items-center text-slate-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-2.5" />
                        {item}
                     </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center mb-4 text-lg">
                  <Waves className="w-5 h-5 mr-2 text-primary"/> Basements
                </h4>
                <ul className="space-y-3">
                  {['Complete extraction', 'Sump pump evaluation', 'Foundation assessment', 'Vapor barriers'].map((item, i) => (
                     <li key={i} className="flex items-center text-slate-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-2.5" />
                        {item}
                     </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center mb-4 text-lg">
                  <Droplets className="w-5 h-5 mr-2 text-primary"/> Kitchens & Baths
                </h4>
                <ul className="space-y-3">
                  {['Cabinet drying & restoration', 'Tile & Grout restoration', 'Under-sink repairs', 'Appliance inspection'].map((item, i) => (
                     <li key={i} className="flex items-center text-slate-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-2.5" />
                        {item}
                     </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Side Stack */}
          <div className="space-y-8">
            <Card className="h-full flex flex-col justify-center border-l-4 border-l-indigo-500" variant="elevated">
              <div className="flex items-start mb-6">
                <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 mr-5 shadow-sm">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Commercial</h3>
                  <Badge text="Min. Downtime" color="blue" className="mt-2" />
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We understand business interruption costs money. We serve offices, retail, warehouses, and medical facilities with speed.
              </p>
            </Card>
            
            <Card className="h-full flex flex-col justify-center border-l-4 border-l-red-500 bg-red-50/30" variant="elevated">
              <div className="flex items-start mb-6">
                <div className="p-4 bg-red-100 rounded-2xl text-red-600 mr-5 shadow-sm">
                  <Skull className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Biohazard</h3>
                  <Badge text="Category 3" color="red" className="mt-2" />
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Safe cleanup of sewage backups. EPA-registered antimicrobials, HEPA filtration, and strict sanitization protocols.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- WHY CHOOSE US ---
export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 px-4 lg:px-12 bg-slate-900 text-white rounded-t-[48px] lg:rounded-t-[80px] -mx-2 lg:-mx-4 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Why Choose Flood Doctor?</h2>
          <p className="text-slate-400 text-xl font-light">We combine speed, expertise, and insurance advocacy to make a stressful situation manageable.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "IICRC Certified", text: "Our technicians hold WRT, ASD, & Mold Remediation certifications, ensuring industry-standard care." },
            { icon: FileCheck, title: "Direct Billing", text: "We speak the insurance language. We handle the paperwork, photos, and billing directly with your carrier." },
            { icon: ScanEye, title: "Free Assessment", text: "Not sure? We provide expert evaluation of damage extent and category at no cost to you." },
            { icon: Clock, title: "60-Min Response", text: "Time is the enemy. Our average arrival time in Northern VA is 1 hour or less." },
          ].map((item, i) => (
            <div key={i} className="group bg-slate-800/40 p-8 rounded-[32px] border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center text-primary-light mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                 <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PROCESS ---
export const Process: React.FC = () => {
  const steps = [
    { num: 1, title: "Dispatch", text: "24/7 immediate response from our local center." },
    { num: 2, title: "Inspection", text: "Thermal mapping and damage assessment." },
    { num: 3, title: "Extraction", text: "Removal of standing water to stop damage." },
    { num: 4, title: "Drying", text: "3-5 days of monitored dehumidification." },
    { num: 5, title: "Cleaning", text: "HEPA vacuuming and antimicrobial treatment." },
    { num: 6, title: "Repairs", text: "Reconstruction to pre-loss condition." },
  ];

  return (
    <section id="process" className="py-24 px-4 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
           <Badge text="The Roadmap to Recovery" className="mb-4" />
           <h2 className="text-4xl font-extrabold text-slate-900">Our 6-Step Restoration Process</h2>
        </div>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {steps.map((step) => (
              <div key={step.num} className="relative group bg-white rounded-3xl p-6 hover:bg-surface transition-colors">
                <div className="flex items-center mb-6">
                  <div className="w-24 h-24 rounded-3xl bg-white border-2 border-slate-100 flex items-center justify-center font-black text-4xl text-slate-200 shadow-sm group-hover:border-primary group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                    {step.num}
                  </div>
                  {/* Small connector for mobile */}
                  <div className="h-0.5 bg-slate-200 flex-1 ml-4 lg:hidden"></div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} size="lg">
             Start Your Recovery Now
          </Button>
        </div>
      </div>
    </section>
  );
};

// --- COMMON CAUSES ---
export const CommonCauses: React.FC = () => {
  return (
    <section id="causes" className="py-20 px-4 lg:px-12 bg-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Common Causes of Damage</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
              { icon: AlertTriangle, title: "Burst Pipes", sub: "Frozen pipes & corrosion" },
              { icon: CloudRain, title: "Storm Damage", sub: "Roof leaks & ice dams" },
              { icon: Zap, title: "Appliance Failures", sub: "Washing machines & heaters" },
              { icon: Warehouse, title: "Sewer Backup", sub: "Tree roots & clogs" }
          ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-[32px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-slate-50 rounded-full mb-6 flex items-center justify-center text-slate-600">
                      <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-medium">{item.sub}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SERVICE AREAS & FAQ ---
export const InfoSections: React.FC = () => {
  const areas = [
    { 
      title: "Fairfax County", 
      icon: MapPin,
      content: (
        <div className="grid grid-cols-2 gap-2 text-sm">
          {["Fairfax City", "Vienna", "Great Falls", "McLean", "Tysons Corner", "Reston", "Herndon", "Centreville", "Chantilly", "Burke", "Springfield", "Annandale", "Falls Church"].map(c => (
            <span key={c} className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-2"></div>{c}</span>
          ))}
        </div>
      ) 
    },
    { 
      title: "Arlington & Alexandria", 
      icon: MapPin,
      content: (
        <div className="grid grid-cols-2 gap-2 text-sm">
          {["Ballston", "Clarendon", "Rosslyn", "Crystal City", "Shirlington", "Old Town", "Del Ray", "Landmark"].map(c => (
            <span key={c} className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-2"></div>{c}</span>
          ))}
        </div>
      )
    },
    { 
      title: "Loudoun & Prince William",
      icon: MapPin, 
      content: "Leesburg, Ashburn, Sterling, South Riding, Manassas, Woodbridge, Gainesville" 
    },
    { 
      title: "DC & Maryland", 
      icon: MapPin,
      content: "All DC neighborhoods, Bethesda, Silver Spring, Rockville" 
    }
  ];

  const faqs = [
    { title: "How quickly can you respond?", content: "Our average response time is 60 minutes. We maintain 24/7 emergency crews throughout Northern Virginia and dispatch immediately upon receiving your call." },
    { title: "Does insurance cover water damage?", content: "Most homeowner policies cover sudden/accidental damage (burst pipes, appliances). Flood damage (rising water) usually requires flood insurance. We help document everything for your claim." },
    { title: "How long does restoration take?", content: "Extraction: 1-4 hours. Drying: 3-5 days. Reconstruction: 1-4 weeks depending on severity. Minor damage may be complete in 4-5 days." },
    { title: "Can you prevent mold?", content: "Yes. Rapid response and proper drying prevent mold growth. If we dry your property within 24-48 hours, mold growth is prevented. We also apply antimicrobial treatments." },
    { title: "Do you offer 24/7 service?", content: "Yes. True 24/7/365 emergency response. Live dispatchers answer calls at all hours." },
    { title: "What should I do before you arrive?", content: "If safe: Turn off water source, turn off electricity to affected areas, move valuables away from water, take photographs, do not use household vacuums on standing water." }
  ];

  return (
    <section id="faq" className="py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Badge text="Service Area" className="mb-4" color="orange" />
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Where We Serve</h2>
          <Card className="bg-orange-50/50 border-orange-100" noPadding>
            <div className="p-2">
              <Accordion items={areas} />
            </div>
          </Card>
        </div>
        <div className="lg:col-span-7">
          <Badge text="Common Questions" className="mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <Accordion items={faqs.map(f => ({...f, content: <p>{f.content}</p>}))} />
        </div>
      </div>
    </section>
  );
};

// --- TESTIMONIALS ---
export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 lg:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-surface hover:bg-white" variant="outlined">
                  <div className="mb-4">
                    <StarRating rating={5} />
                  </div>
                  <p className="text-lg text-slate-700 mb-6 italic leading-relaxed">"Our basement flooded during a storm, and Flood Doctor had a crew there within an hour. They worked through the night to extract the water and saved our finished basement."</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold mr-3">TH</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Thomas H.</p>
                      <p className="text-xs text-slate-500">McLean, VA</p>
                    </div>
                  </div>
              </Card>
              <Card className="bg-surface hover:bg-white" variant="outlined">
                  <div className="mb-4">
                    <StarRating rating={5} />
                  </div>
                  <p className="text-lg text-slate-700 mb-6 italic leading-relaxed">"A pipe burst while we were on vacation. Flood Doctor handled everything—the water removal, the drying, the insurance claim, and the repairs. Highly recommend."</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold mr-3">PW</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Patricia W.</p>
                      <p className="text-xs text-slate-500">Reston, VA</p>
                    </div>
                  </div>
              </Card>
          </div>
        </div>
    </section>
  );
};

// --- FOOTER ---
export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-24 pb-24 px-4 lg:px-12 rounded-t-[64px] relative overflow-hidden">
        {/* Footer glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge text="Emergency Response" className="bg-red-500/10 text-red-300 border-red-500/20 mb-8" icon={AlertTriangle} />
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tighter">Water Damage<br/>Worsens Every Hour</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">Don't wait until mold begins to grow. Our emergency crews are ready 24/7 to save your home.</p>
            
            <a href="tel:8774970007" className="inline-block mb-16 group">
                <Button size="xl" className="bg-white text-slate-950 hover:bg-blue-50 text-xl px-12 py-6 h-auto shadow-2xl shadow-blue-900/50">
                    Call (877) 497-0007
                </Button>
                <p className="mt-4 text-sm text-slate-500 font-medium group-hover:text-white transition-colors">Average response time: 60 minutes</p>
            </a>

            <div className="grid md:grid-cols-3 gap-12 text-sm text-slate-400 border-t border-slate-800 pt-12">
                <div className="text-center md:text-left">
                    <h4 className="text-white font-bold mb-4 text-lg">Flood Doctor LLC</h4>
                    <p className="leading-relaxed">8466D Tyco Rd<br/>Vienna, VA 22182</p>
                    <p className="mt-2 text-slate-500">DPOR #2705155505</p>
                </div>
                <div className="text-center">
                    <h4 className="text-white font-bold mb-4 text-lg">Certifications</h4>
                    <div className="flex flex-col gap-2 items-center">
                      <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">IICRC Certified Firm</span>
                      <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">Licensed & Insured</span>
                    </div>
                </div>
                <div className="text-center md:text-right">
                    <h4 className="text-white font-bold mb-4 text-lg">Hours</h4>
                    <p className="font-semibold text-white">24/7 Emergency Service</p>
                    <p>365 Days a Year</p>
                </div>
            </div>
            
            <div className="mt-16 text-slate-600 text-xs">
              © {new Date().getFullYear()} Flood Doctor LLC. All rights reserved.
            </div>
        </div>
    </footer>
  );
};
