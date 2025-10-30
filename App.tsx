
import React, { useState } from 'react';

// --- Content Components ---

const HomeContent = ({ setActiveView }: { setActiveView: (view: string) => void }) => (
  <div className="space-y-6">
    <p>
        I am a Fulbright Scholar and a Postdoctoral Researcher at the University of Wisconsin-Madison's <a href="https://wcer.wisc.edu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Wisconsin Center for Education Research (WCER)</a>. My research concerns topics that span educational management, administration, leadership, policy, and technology, as well as Islamic education, with a particular focus on issues of (in)equity.
    </p>
    <p>
        My research has been supported by the <a href="https://www.aminef.or.id/grants-for-indonesians/fulbright-programs/scholarship/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">U.S. Department of State</a> (Fulbright Scholarship), the <a href="https://lpdp.kemenkeu.go.id/en/tentang/selayang-pandang/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Ministry of Finance, Republic of Indonesia</a> (LPDP Scholarship), and the <a href="https://kemenag.go.id/artikel/sejarah" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Ministry of Religious Affairs, Republic of Indonesia</a>. I also develop several AI-powered applications, including <a href="https://eddata-explainer-734080419889.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">EdData Explainer</a>, <a href="https://toefl-itp-structure-written-expression-simulator-734080419889.us-west1.run.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">TOEFL ITP Simulation</a>, <a href="https://schoolpedia-v3-734080419889.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Schoolpedia</a>, and <a href="https://kyai-734080419889.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">kyAI</a>.
    </p>
    <p>
        I received my PhD from the <a href="https://www.wisc.edu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">University of Wisconsin-Madison, USA</a>. Before that, I received an M.Ed. from <a href="https://www.monash.edu/about/who" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Monash University, Australia</a>, and a B.Ed. from <a href="https://uinjkt.ac.id/en/history" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Syarif Hidayatullah State Islamic University Jakarta, Indonesia</a>. I was previously a Researcher at the <a href="https://ppim.uinjkt.ac.id/profil/ppim-uin-jakarta/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Center for the Study of Islam and Society (PPIM)</a> at Syarif Hidayatullah State Islamic University Jakarta.
    </p>
  </div>
);

const CvContent = () => (
  <div className="space-y-10">
    <div className="mb-8">
        <p className="mb-4">You can download the full version of my CV here:</p>
        <a 
            href="https://docs.google.com/document/d/1y-ieMYDn9EJSo0fqiY7nucn9MyVEFwv-sVXZcWl8CxY/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-5 py-2 rounded hover:bg-black transition-colors"
            aria-label="Download full CV"
        >
            Download CV
        </a>
    </div>
    <div>
        <h2 className="text-2xl font-light mb-6">Education</h2>
        <div className="space-y-4">
            <p><strong>Ph.D. in Educational Leadership and Policy Analysis</strong>, University of Wisconsin-Madison, USA, 2021 – 2025</p>
            <p><strong>M.Ed. in General Education Studies</strong>, Monash University, Australia, 2016 – 2018</p>
            <p><strong>B.Ed. in English Education</strong>, Syarif Hidayatullah State Islamic University Jakarta, Indonesia, 2010 – 2015</p>
        </div>
    </div>
    <div>
        <h2 className="text-2xl font-light mb-6">Academic Positions</h2>
        <div className="space-y-4">
            <p><strong>Postdoctoral Researcher</strong>, Wisconsin Center for Education Research, University of Wisconsin-Madison, USA, 2025 – Present</p>
            <p><strong>Graduate Researcher</strong>, Wisconsin Center for Education Research, University of Wisconsin-Madison, USA, 2021 – 2025</p>
            <p><strong>Teaching Assistant</strong>, Department of Educational Leadership and Policy Analysis, University of Wisconsin-Madison, USA, 2022 – 2025</p>
            <p><strong>Researcher</strong>, Pusat Pengkajian Islam dan Masyarakat (Center for the Study of Islam and Society), Syarif Hidayatullah State Islamic University Jakarta, Indonesia, 2019 – 2021</p>
        </div>
    </div>
    <div>
        <h2 className="text-2xl font-light mb-6">Public Service & Leadership Experience</h2>
        <div className="space-y-4">
            <p><strong>Secretary</strong>, Pengurus Cabang Istimewa (Special Branch Management of) Nahdlatul Ulama, United States-Canada, 2025 – 2027</p>
            <p><strong>Communications Specialist Intern</strong>, Kantor Staf Presiden (The Executive Office of the President), the Republic of Indonesia - Open Data Initiative, Jan – May 2019</p>
        </div>
    </div>
    <div>
        <h2 className="text-2xl font-light mb-6">Scholarships, Honors, & Grants</h2>
        <div className="space-y-4">
            <p>Fulbright Scholarship for PhD program ($150,000), U.S. Department of State, 2021-2025</p>
            <p>Lanore A. Netzer and Glen G. Eye Scholarship ($3,750), University of Wisconsin-Madison, 2024-2025</p>
            <p>Research Grant: Religious Moderation at Mosque ($14,000), Ministry of Religious Affairs, Republic of Indonesia, 2021</p>
            <p>LPDP Scholarship for Master's program ($136,300), Ministry of Finance, Republic of Indonesia, 2016-2018</p>
        </div>
    </div>
    <div>
        <h2 className="text-2xl font-light mb-6">Professional Membership</h2>
        <div className="space-y-4">
            <p>American Educational Research Association (AERA), 2021 – Present</p>
            <p>University Council for Educational Administration (UCEA), 2021 – Present</p>
        </div>
    </div>
  </div>
);

const DataContent = () => (
    <div>
        <h2 className="text-2xl font-light mb-6">Data</h2>
        <div className="space-y-10">
            <div>
                <div className="flex items-center mb-4">
                    <h3 className="text-xl font-light">Islamic Education Publications (1970-2023)</h3>
                    <a 
                        href="https://drive.google.com/file/d/1poabI5PTZcfKk10LnRi-cjiBqs2dF2x_/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-4 inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded hover:bg-gray-200 transition-colors text-base"
                        aria-label="Download Islamic education publication data"
                    >
                        Download
                    </a>
                </div>
                <p>
                    This dataset, retrieved from the Scopus database, was used for my research exploring the evolution of topics and the global networks of research production and collaboration in Islamic education. The dataset includes comprehensive bibliometric information, such as document titles, authors, publication years, abstracts, author affiliations, and citation records. A publication associated with the dataset is <a href="https://studiaislamika.ppimcensis.or.id/index.php/studia-islamika/article/view/41513" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">this</a>.
                </p>
            </div>
            <div>
                <div className="flex items-center mb-4">
                    <h3 className="text-xl font-light">Educational Leadership Preparation Publications (1966-2023)</h3>
                    <a 
                        href="https://drive.google.com/file/d/1_FzzNjvZClFxpk18HyLNVyISIKuhODOe/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-4 inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded hover:bg-gray-200 transition-colors text-base"
                        aria-label="Download educational leadership preparation data"
                    >
                        Download
                    </a>
                </div>
                <p>
                    This dataset contains full-text articles on educational leadership preparation, which I collected to explore research topics within the field. The data includes details such as article titles, authors, publication years, full texts, the country context of the research, and the methodologies employed. A publication associated with the dataset is <a href="https://www.tandfonline.com/doi/full/10.1080/13603124.2025.2544994" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">this</a>.
                </p>
            </div>
        </div>
    </div>
);

const PapersContent = () => (
    <div className="space-y-10">
        <div>
            <h2 className="text-2xl font-light mb-6">Peer-Reviewed Journal Articles</h2>
            <div className="space-y-4">
                <p><strong>Awaludin, A.</strong> (2025). <a href="https://www.tandfonline.com/doi/abs/10.1080/13603124.2025.2544994" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Educational Leadership Preparation Research Through the Decades: Topics and Evolutions, 1966-2023</a>. <em>International Journal of Leadership in Education</em>, 1-23.</p>
                <p>Molle, D., Liou, Y. H., Childs, J., Saldaña, C., Clifford, M., <strong>Awaludin, A.</strong>, Guan, X., Halverson, R. R., & Lee, Y-S. (2025). <a href="https://www.emerald.com/jpcc/article/10/2/230/1273230/Exploring-the-evolution-of-district-university" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Exploring the Evolution of District-University Partnerships Focused on Equity-Centered Leadership</a>. <em>Journal of Professional Capital and Community</em>, 10(2), 230-249.</p>
                <p><strong>Awaludin, A.</strong> (2024). <a href="https://studiaislamika.ppimcensis.or.id/index.php/studia-islamika/article/view/41513" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Documenting the Half-Century Evolution of Islamic Education Research: A Probabilistic Topic Modeling Study of the Literature from 1970 to 2023</a>. <em>Studia Islamika</em>, 31(3), 439-475.</p>
            </div>
        </div>
        <div>
            <h2 className="text-2xl font-light mb-6">Peer-Reviewed Proceedings: American Educational Research Association (AERA) Conference</h2>
            <div className="space-y-4">
                <p><strong>Awaludin, A.</strong>, Halverson, R. R. (2025). “Connecting the Dots”: Analyzing District Partnership Team Networks to Center Equity in School Principal Preparation. Proceedings of the 2025 AERA Annual Meeting, Denver CO, USA (paper session). <a href="https://doi.org/10.3102/2185329" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.3102/2185329</a></p>
                <p><strong>Awaludin, A.</strong>, Halverson, R. R. (2025). Detangling the Webs of Communication and Collaboration Networks of Organizations for Equity-Centered Principal Preparation. Proceedings of the 2025 AERA Annual Meeting, Denver CO, USA (paper session). <a href="https://doi.org/10.3102/2187484" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.3102/2187484</a></p>
                <p>Saldaña, C., Liou, Y. H., Molle, D., Guan, X., Clifford, M. A., <strong>Awaludin, A.</strong>, Childs, J., Halverson, R. R. (2025). Examining School District Costs Associated with Designing, Implementing, and Operating Equity-Centered School Leadership Systems. Presented at the 2025 AERA Annual Meeting, Denver CO, USA (symposium session).</p>
                <p><strong>Awaludin, A.</strong> (2025). Designing Effective, Equity-Centered Educational Leadership Preparation Programs: A Review of the Scholarship. Proceedings of the 2025 AERA Annual Meeting, Denver CO, USA (roundtable session). <a href="https://doi.org/10.3102/2183738" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.3102/2183738</a></p>
                <p><strong>Awaludin, A.</strong> (2025). Critical Race Theory (CRT) in Education, 1994-2023: Mapping Temporal, Geographical, and Topical Landscapes of CRT-Education Knowledge Base. (2025). Proceedings of the 2025 AERA Annual Meeting, Denver CO, USA (roundtable session). <a href="https://doi.org/10.3102/2183566" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.3102/2183566</a></p>
                <p><strong>Awaludin, A.</strong> (2025). Documenting the Half-Century Evolution of Islamic Education Research: A Correlated Topic Modeling (CTM) Study of the Literature from 1970 to 2023. Proceedings of the 2025 AERA Annual Meeting, Denver CO, USA (paper session). <a href="https://doi.org/10.3102/2178518" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.3102/2178518</a></p>
                <p><strong>Awaludin, A.</strong> (2025). Global Trends and Influences in Islamic Education Scholarship: A Bibliometric and Social Network Analysis. Proceedings of the 2025 AERA Annual Meeting, Denver CO, USA (e-lighting ed-talk & poster session). <a href="https://doi.org/10.3102/2184317" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.3102/2184317</a></p>
                <p><strong>Awaludin, A.</strong> (2024). Tracing the Evolution of Educational Leader Preparation Research, 1966-2023: A Topographical and Automated Text Analysis. Proceedings of the 2024 AERA Annual Meeting, Philadelphia PA, USA (roundtable session). <a href="https://doi.org/10.3102/2097346" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.3102/2097346</a></p>
                <p><strong>Awaludin, A.</strong>, Guan, X., Halverson, R. R. (2024). Exploring Partnership Evolution in Support of Systems Change Toward Equity-Centered Leadership: A Mixed-Methods Social Network Analysis. Proceedings of the 2024 AERA Annual Meeting, Philadelphia PA, USA (poster session). <a href="https://doi.org/10.3102/2106215" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.3102/2106215</a></p>
                <p>Liou, Y. H., Saldaña, C., Clifford, M. A., <strong>Awaludin, A.</strong>, Guan, X., Choi, Y., Molle, D., Childs, J., & Halverson, R. R. (2024). Collaborating to Support Equity-Centered Leadership: A Two-Year Social Network Analysis of Eight Districts. Proceedings of the 2024 AERA Annual Meeting, Philadelphia PA, USA (paper session).</p>
                <p><strong>Awaludin, A.</strong> (2023). Mapping Equity Discourses Within a Principal Pipeline Initiative of Urban School Districts: An Epistemic Network Study. Proceedings of the 2023 AERA Annual Meeting, Chicago IL, USA (roundtable session). <a href="https://doi.org/10.3102/2003227" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.3102/2003227</a></p>
                <p>Clifford, M. A., Molle, D., Halverson, R. R., Kallio, J. M., Saldaña, C., <strong>Awaludin, A.</strong>, Childs, J., & Guan, X. (2023). Preparing for Innovation: Mapping Districts’ Initial Efforts to Build Partnerships Around Equity-Centered Principal Pipelines. Proceedings of the 2023 AERA Annual Meeting, Chicago IL, USA (paper session). <a href="https://doi.org/10.3102/2007015" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">https://doi.org/10.3102/2007015</a></p>
            </div>
        </div>
    </div>
);

const ApplicationsContent = () => (
    <div>
        <h2 className="text-2xl font-light mb-6">Applications</h2>
        <div className="space-y-8">
            <div>
                <h3 className="text-xl font-light mb-2">
                    <a href="https://eddata-explainer-734080419889.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">EdData Explainer</a>
                </h3>
                <p>An AI-powered tool to interpret and explain educational data, making complex datasets understandable for educators, policymakers, and researchers.</p>
            </div>
            <div>
                <h3 className="text-xl font-light mb-2">
                    <a href="https://toefl-itp-structure-written-expression-simulator-734080419889.us-west1.run.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">TOEFL ITP Simulation</a>
                </h3>
                <p>An interactive simulator for the TOEFL ITP Structure and Written Expression section, providing practice and feedback to help users prepare for the exam.</p>
            </div>
            <div>
                <h3 className="text-xl font-light mb-2">
                    <a href="https://schoolpedia-v3-734080419889.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Schoolpedia</a>
                </h3>
                <p>A comprehensive knowledge base about educational development, utilizing AI to provide research-based information and insights for educators and researchers alike.</p>
            </div>
            <div>
                <h3 className="text-xl font-light mb-2">
                    <a href="https://kyai-734080419889.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">kyAI</a>
                </h3>
                <p>An AI assistant focused on Islamic knowledge, providing answers and explanations based on traditional texts and scholarly sources.</p>
            </div>
        </div>
    </div>
);

const BookContent = () => (
    <div>
        <h2 className="text-2xl font-light mb-6">Books</h2>
        <div className="space-y-4">
            <p><strong>Awaludin, A.</strong> (2020). <em>Kamus Santri</em> (Muslim Student Dictionary in Indonesian, English, and Arabic). El-Bukhari Institute. <a href="https://www.tokopedia.com/zeralvestore/kamus-santri-3-bahasa-indonesia-inggris-arab-terbaik-dan-gaul?utm_source=google&utm_medium=organic&utm_campaign=pdp" target="_blank" rel="noopener noreferrer" className="ml-2 inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded hover:bg-gray-200 transition-colors" aria-label="Order Kamus Santri book">Order</a></p>
            <p>Halimatusa'diyah, I., Sutanto, T., Nur Jannah, A., <strong>Awaludin, A.</strong>, & Imam Fauzy, F. (2020). <em>Beragama di Dunia Maya: Media Sosial dan Pandangan Keagamaan di Indonesia</em> (Being Religious in the Digital World: Social Media and Religious Perspectives in Indonesia). PPIM UIN Jakarta.</p>
            <p><strong>Awaludin, A.</strong> (2017). <em>April</em> (a novel). Santri Nulis.</p>
        </div>
    </div>
);

// --- Main App Component ---

const App: React.FC = () => {
    const [activeView, setActiveView] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['home', 'cv', 'data', 'papers', 'applications', 'books'];

    const renderContent = () => {
        switch (activeView) {
            case 'cv': return <CvContent />;
            case 'data': return <DataContent />;
            case 'papers': return <PapersContent />;
            case 'applications': return <ApplicationsContent />;
            case 'books': return <BookContent />;
            case 'home':
            default:
                return <HomeContent setActiveView={setActiveView} />;
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans text-gray-800">
            <header className="md:hidden flex justify-between items-center p-6">
                <h1 
                    onClick={() => setActiveView('home')}
                    className="text-3xl font-thin tracking-tight text-black cursor-pointer"
                >
                    Aziz Awaludin
                </h1>
                <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="p-2"
                    aria-label="Open navigation menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </header>

            <div className="max-w-6xl mx-auto px-6 pb-12 md:px-12 md:py-20">
                <div className="md:grid md:grid-cols-[1fr_5fr] md:gap-16">
                    <nav className="hidden md:block mb-10 md:mb-0 md:pt-1">
                        <ul>
                            {navItems.map(item => (
                                <li key={item}>
                                    <button
                                        onClick={() => setActiveView(item)}
                                        aria-current={activeView === item ? 'page' : undefined}
                                        className={`block text-left w-full mb-2 p-1 transition-colors duration-200 ${
                                            activeView === item ? 'text-black' : 'text-gray-400 hover:text-black'
                                        }`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <main>
                        <h1 
                            onClick={() => setActiveView('home')}
                            className="hidden md:block text-5xl md:text-6xl font-thin mb-12 tracking-tight text-black cursor-pointer"
                        >
                            Aziz Awaludin
                        </h1>
                        <div className="text-base md:text-[17px] leading-relaxed text-gray-700">
                            {renderContent()}
                        </div>
                    </main>
                </div>
                <footer className="text-center pt-16 mt-16 text-gray-500 text-sm">
                    © 2025 Aziz Awaludin
                </footer>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 p-6 flex flex-col" role="dialog" aria-modal="true">
                    <div className="flex justify-end">
                        <button 
                            onClick={() => setIsMenuOpen(false)} 
                            className="p-2"
                            aria-label="Close navigation menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <nav className="mt-8">
                        <ul>
                            {navItems.map(item => (
                                <li key={item}>
                                    <button
                                        onClick={() => {
                                            setActiveView(item);
                                            setIsMenuOpen(false);
                                        }}
                                        aria-current={activeView === item ? 'page' : undefined}
                                        className={`block w-full text-left text-3xl font-light p-2 mb-4 transition-colors duration-200 ${
                                            activeView === item ? 'text-black' : 'text-gray-400 hover:text-black'
                                        }`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default App;
