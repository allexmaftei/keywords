import { useMemo, useState } from 'react';
import { flashcards, quickQuiz, stats, navItems, subjectDecks, totalCards } from './data';

function App() {
  const [activeSubject, setActiveSubject] = useState('biology');
  const [selectedChapter, setSelectedChapter] = useState('All chapters');
  const [showAnswer, setShowAnswer] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const selectedSubject = useMemo(
    () => subjectDecks.find((subject) => subject.id === activeSubject) ?? subjectDecks[0],
    [activeSubject]
  );

  const subjectCards = useMemo(
    () =>
      flashcards.filter((card) => {
        const matchesSubject = card.subjectId === activeSubject;
        const matchesChapter = selectedChapter === 'All chapters' || card.chapter === selectedChapter;
        return matchesSubject && matchesChapter;
      }),
    [activeSubject, selectedChapter]
  );

  const currentCard = subjectCards[cardIndex % subjectCards.length] ?? flashcards[0];

  const chapterOptions = ['All chapters', ...selectedSubject.chapters.map((chapter) => chapter.title)];

  const advanceCard = () => {
    setShowAnswer(false);
    setCardIndex((prev) => (subjectCards.length > 1 ? (prev + 1) % subjectCards.length : 0));
  };

  const handleRating = (rating) => {
    console.log(`Rated ${rating} for ${currentCard.term}`);
    advanceCard();
  };

  const quizItem = quickQuiz[Math.floor((cardIndex + 1) % quickQuiz.length)];

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
          {navItems.map((item, index) => (
            <button key={item} className={`nav-item ${index === 0 ? 'active' : ''}`} type="button">
              {item}
            </button>
          ))}
        </nav>

        <div className="mini-card">
          <span>Daily goal</span>
          <strong>74%</strong>
          <div className="progress-bar">
            <span />
          </div>
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
            <button className="ghost-btn" type="button">Filter</button>
            <button className="primary-btn" type="button">+ New deck</button>
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
                      background: subject.id === activeSubject ? `${subject.color}22` : 'rgba(255,255,255,0.02)',
                      color: subject.color,
                    }}
                    onClick={() => {
                      setActiveSubject(subject.id);
                      setSelectedChapter('All chapters');
                      setShowAnswer(false);
                      setCardIndex(0);
                    }}
                    type="button"
                  >
                    {subject.short}
                  </button>
                ))}
              </div>
            </div>

            <div className="card-toolbar">
              <label className="chapter-select-wrap">
                <span>Chapter</span>
                <select
                  value={selectedChapter}
                  onChange={(event) => {
                    setSelectedChapter(event.target.value);
                    setShowAnswer(false);
                    setCardIndex(0);
                  }}
                >
                  {chapterOptions.map((chapter) => (
                    <option key={chapter} value={chapter}>
                      {chapter}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flashcard" style={{ borderColor: `${selectedSubject.color}40` }}>
              <div className="card-meta-row">
                <span className="tag" style={{ background: `${selectedSubject.color}20`, color: selectedSubject.color }}>
                  {selectedSubject.name}
                </span>
                <span className="tag tag-muted">{currentCard.chapter}</span>
              </div>

              <p className="label">Prompt</p>
              <h3>{currentCard.prompt}</h3>

              {showAnswer && (
                <div className="flashcard-answer">
                  <span>Answer</span>
                  <strong>{currentCard.answer}</strong>
                </div>
              )}
            </div>

            <div className="flashcard-actions">
              <button className="secondary-btn" type="button" onClick={() => setShowAnswer((prev) => !prev)}>
                {showAnswer ? 'Hide answer' : 'Reveal answer'}
              </button>
              <button className="secondary-btn" type="button" onClick={advanceCard}>
                Skip
              </button>
            </div>

            <div className="score-row">
              <button className="score-btn hard" type="button" onClick={() => handleRating('Again')}>Again</button>
              <button className="score-btn" type="button" onClick={() => handleRating('Hard')}>Hard</button>
              <button className="score-btn good" type="button" onClick={() => handleRating('Good')}>Good</button>
              <button className="score-btn easy" type="button" onClick={() => handleRating('Easy')}>Easy</button>
            </div>
          </div>

          <div className="quest-panel">
            <div className="quest-header">
              <p className="eyebrow">Quick play</p>
              <h3>Rapid fire</h3>
            </div>

            <div className="quiz-item">
              <span className="quiz-index">01</span>
              <p>{quizItem.question}</p>
              <div className="choice-grid">
                {quizItem.choices.map((choice) => (
                  <button key={choice} className={`choice ${choice === quizItem.answer ? 'correct' : ''}`} type="button">
                    {choice}
                  </button>
                ))}
              </div>
            </div>

            <div className="mini-score-card">
              <span>XP boost</span>
              <strong>+120</strong>
              <p>Perfect streak active</p>
            </div>
          </div>
        </section>

        <section className="library-panel">
          <div className="panel-title-row">
            <div>
              <p className="eyebrow">Syllabus map</p>
              <h3>Cambridge CIE content</h3>
            </div>
            <button className="ghost-btn" type="button">{totalCards} cards</button>
          </div>

          <div className="deck-grid">
            {subjectDecks.map((subject) => (
              <article
                key={subject.id}
                className={`deck-card ${activeSubject === subject.id ? 'selected' : ''}`}
                style={{ borderColor: `${subject.color}65` }}
                onClick={() => {
                  setActiveSubject(subject.id);
                  setSelectedChapter('All chapters');
                  setShowAnswer(false);
                  setCardIndex(0);
                }}
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

