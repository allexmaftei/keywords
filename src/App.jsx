import { useMemo, useState } from 'react';

const subjectDecks = [
  {
    id: 'biology',
    name: 'Biology',
    short: 'BIO',
    level: 'IGCSE / AS / A Level',
    color: '#3FC9A1',
    accent: '#DFFBF2',
    chapters: [
      { title: 'Cell structure', cards: 22 },
      { title: 'Biological molecules', cards: 18 },
      { title: 'Enzymes & metabolism', cards: 16 },
      { title: 'Transport systems', cards: 19 },
      { title: 'Inheritance & evolution', cards: 24 },
      { title: 'Ecology', cards: 20 },
    ],
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    short: 'CHEM',
    level: 'IGCSE / AS / A Level',
    color: '#FF7A59',
    accent: '#FFE1D8',
    chapters: [
      { title: 'Atomic structure', cards: 19 },
      { title: 'Bonding', cards: 21 },
      { title: 'Stoichiometry', cards: 17 },
      { title: 'Energetics', cards: 15 },
      { title: 'Kinetics & equilibrium', cards: 18 },
      { title: 'Organic chemistry', cards: 26 },
    ],
  },
  {
    id: 'physics',
    name: 'Physics',
    short: 'PHYS',
    level: 'IGCSE / AS / A Level',
    color: '#5B7CFF',
    accent: '#E8EEFF',
    chapters: [
      { title: 'Measurement & motion', cards: 18 },
      { title: 'Forces & momentum', cards: 20 },
      { title: 'Electricity', cards: 22 },
      { title: 'Waves', cards: 17 },
      { title: 'Thermal physics', cards: 14 },
      { title: 'Nuclear & quantum', cards: 16 },
    ],
  },
  {
    id: 'maths',
    name: 'Mathematics',
    short: 'MATH',
    level: 'IGCSE / AS / A Level',
    color: '#F4B740',
    accent: '#FFF1C7',
    chapters: [
      { title: 'Algebra', cards: 24 },
      { title: 'Functions', cards: 18 },
      { title: 'Geometry & trigonometry', cards: 20 },
      { title: 'Calculus', cards: 22 },
      { title: 'Probability', cards: 16 },
      { title: 'Stats & data', cards: 15 },
    ],
  },
  {
    id: 'english',
    name: 'English Language',
    short: 'ENG',
    level: 'IGCSE / AS / A Level',
    color: '#C86BFF',
    accent: '#F3E2FF',
    chapters: [
      { title: 'Reading comprehension', cards: 14 },
      { title: 'Language analysis', cards: 17 },
      { title: 'Summary & synthesis', cards: 12 },
      { title: 'Creative writing', cards: 13 },
      { title: 'Comparative analysis', cards: 15 },
      { title: 'Context & style', cards: 16 },
    ],
  },
  {
    id: 'economics',
    name: 'Economics',
    short: 'ECO',
    level: 'IGCSE / AS / A Level',
    color: '#5CD3B8',
    accent: '#D9FFF7',
    chapters: [
      { title: 'Basic economic problem', cards: 17 },
      { title: 'Demand & supply', cards: 19 },
      { title: 'Production & costs', cards: 15 },
      { title: 'Market structure', cards: 18 },
      { title: 'Macro indicators', cards: 16 },
      { title: 'Development & trade', cards: 20 },
    ],
  },
];

const sampleCards = [
  {
    subjectId: 'biology',
    chapter: 'Cell structure',
    term: 'Osmosis',
    prompt: 'Describe the movement of water through a partially permeable membrane in terms of water potential.',
    answer: 'Water moves from a region of higher water potential to lower water potential by osmosis.',
  },
  {
    subjectId: 'chemistry',
    chapter: 'Bonding',
    term: 'Covalent bond',
    prompt: 'What is formed when atoms share a pair of electrons?',
    answer: 'A covalent bond is formed when two atoms share one or more pairs of electrons.',
  },
  {
    subjectId: 'physics',
    chapter: 'Electricity',
    term: 'Resistance',
    prompt: 'How does resistance affect current for a fixed potential difference?',
    answer: 'Resistance opposes current flow; for a fixed voltage, higher resistance means lower current.',
  },
  {
    subjectId: 'maths',
    chapter: 'Functions',
    term: 'Quadratic',
    prompt: 'What is the general shape of a quadratic graph?',
    answer: 'A quadratic graph is a parabola, usually U-shaped or inverted U-shaped.',
  },
  {
    subjectId: 'english',
    chapter: 'Language analysis',
    term: 'Semantic field',
    prompt: 'What is a semantic field?',
    answer: 'A semantic field is a group of words connected by a shared meaning or theme.',
  },
  {
    subjectId: 'economics',
    chapter: 'Demand & supply',
    term: 'Elasticity',
    prompt: 'What does price elasticity of demand measure?',
    answer: 'It measures the responsiveness of quantity demanded to a change in price.',
  },
];

const quickQuiz = [
  {
    question: 'Which term describes the passive movement of particles from high concentration to low concentration?',
    choices: ['Osmosis', 'Diffusion', 'Respiration', 'Transpiration'],
    answer: 'Diffusion',
  },
  {
    question: 'Which chemistry concept measures how quickly reactants are converted into products?',
    choices: ['Kinetics', 'Periodicity', 'Hydrolysis', 'Precipitation'],
    answer: 'Kinetics',
  },
  {
    question: 'Which value is equal to the work done per unit charge moved?',
    choices: ['Current', 'Voltage', 'Resistance', 'Power'],
    answer: 'Voltage',
  },
];

const stats = [
  { label: 'Cards mastered', value: '1,248' },
  { label: 'Streak', value: '17 days' },
  { label: 'Accuracy', value: '92%' },
  { label: 'XP', value: '4,680' },
];

function App() {
  const [activeSubject, setActiveSubject] = useState('biology');

  const selectedSubject = useMemo(
    () => subjectDecks.find((subject) => subject.id === activeSubject) ?? subjectDecks[0],
    [activeSubject]
  );

  const currentCard = sampleCards.find((card) => card.subjectId === selectedSubject.id) ?? sampleCards[0];

  const totalCards = subjectDecks.reduce(
    (sum, subject) => sum + subject.chapters.reduce((chapterSum, chapter) => chapterSum + chapter.cards, 0),
    0
  );

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">K</div>
          <div>
            <p className="eyebrow">Revision lab</p>
            <h1>KeyPulse</h1>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Decks</button>
          <button className="nav-item">Challenge</button>
          <button className="nav-item">Progress</button>
        </nav>

        <div className="mini-card">
          <span>Daily goal</span>
          <strong>74%</strong>
          <div className="progress-bar"><span /></div>
          <small>12 / 16 cards</small>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Cambridge CIE planner</p>
            <h2>Keyword blitz</h2>
          </div>

          <div className="top-actions">
            <button className="ghost-btn">Filter</button>
            <button className="primary-btn">+ New deck</button>
          </div>
        </header>

        <section className="stat-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="hero-row">
          <div className="flashcard-panel">
            <div className="flashcard-header">
              <div className="subject-switcher">
                {subjectDecks.map((subject) => (
                  <button
                    key={subject.id}
                    className={subject.id === activeSubject ? 'subject-pill active' : 'subject-pill'}
                    style={{
                      background: subject.id === activeSubject ? `${subject.color}24` : 'rgba(255,255,255,0.02)',
                      color: subject.color,
                    }}
                    onClick={() => setActiveSubject(subject.id)}
                    type="button"
                  >
                    {subject.short}
                  </button>
                ))}
              </div>
            </div>

            <div className="flashcard">
              <div className="card-meta-row">
                <span className="tag" style={{ background: `${selectedSubject.color}20`, color: selectedSubject.color }}>
                  {selectedSubject.name}
                </span>
                <span className="tag tag-muted">{currentCard.chapter}</span>
              </div>

              <p className="label">Prompt</p>
              <h3>{currentCard.prompt}</h3>

              <div className="flashcard-answer">
                <span>Answer</span>
                <strong>{currentCard.answer}</strong>
              </div>
            </div>

            <div className="score-row">
              <button className="score-btn hard" type="button">Again</button>
              <button className="score-btn" type="button">Hard</button>
              <button className="score-btn good" type="button">Good</button>
              <button className="score-btn easy" type="button">Easy</button>
            </div>
          </div>

          <div className="quest-panel">
            <div className="quest-header">
              <p className="eyebrow">Quick play</p>
              <h3>Rapid fire</h3>
            </div>

            {quickQuiz.map((item, index) => (
              <div key={item.question} className="quiz-item">
                <span className="quiz-index">0{index + 1}</span>
                <p>{item.question}</p>
                <div className="choice-grid">
                  {item.choices.map((choice) => (
                    <button
                      key={choice}
                      className={`choice ${choice === item.answer ? 'correct' : ''}`}
                      type="button"
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="library-panel">
          <div className="panel-title-row">
            <div>
              <p className="eyebrow">Syllabus map</p>
              <h3>Cambridge CIE content</h3>
            </div>
            <button className="ghost-btn">{totalCards} cards</button>
          </div>

          <div className="deck-grid">
            {subjectDecks.map((subject) => (
              <article
                key={subject.id}
                className={`deck-card ${activeSubject === subject.id ? 'selected' : ''}`}
                style={{ borderColor: `${subject.color}65` }}
                onClick={() => setActiveSubject(subject.id)}
              >
                <div className="deck-topline">
                  <span className="subject-dot" style={{ background: subject.color }} />
                  <span>{subject.short}</span>
                </div>

                <h4>{subject.name}</h4>
                <p>{subject.level}</p>

                <ul>
                  {subject.chapters.map((chapter) => (
                    <li key={`${subject.id}-${chapter.title}`}>
                      <span>{chapter.title}</span>
                      <strong>{chapter.cards}</strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

