export const subjectDecks = [
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

export const flashcards = [
  {
    id: 1,
    subjectId: 'biology',
    chapter: 'Cell structure',
    term: 'Osmosis',
    prompt: 'Describe the movement of water through a partially permeable membrane in terms of water potential.',
    answer: 'Water moves from a region of higher water potential to lower water potential by osmosis.',
    difficulty: 'Medium',
  },
  {
    id: 2,
    subjectId: 'biology',
    chapter: 'Inheritance & evolution',
    term: 'Mutation',
    prompt: 'What is a mutation in genetic terms?',
    answer: 'A mutation is a change in the DNA sequence that can alter gene function or create variation.',
    difficulty: 'Hard',
  },
  {
    id: 3,
    subjectId: 'chemistry',
    chapter: 'Bonding',
    term: 'Covalent bond',
    prompt: 'What is formed when atoms share a pair of electrons?',
    answer: 'A covalent bond is formed when two atoms share one or more pairs of electrons.',
    difficulty: 'Easy',
  },
  {
    id: 4,
    subjectId: 'chemistry',
    chapter: 'Kinetics & equilibrium',
    term: 'Catalyst',
    prompt: 'How does a catalyst affect the activation energy of a reaction?',
    answer: 'A catalyst lowers the activation energy and speeds up the rate of reaction without being consumed.',
    difficulty: 'Medium',
  },
  {
    id: 5,
    subjectId: 'physics',
    chapter: 'Electricity',
    term: 'Resistance',
    prompt: 'How does resistance affect current for a fixed potential difference?',
    answer: 'Resistance opposes the flow of current; greater resistance means less current for the same voltage.',
    difficulty: 'Medium',
  },
  {
    id: 6,
    subjectId: 'physics',
    chapter: 'Waves',
    term: 'Frequency',
    prompt: 'What does frequency measure in a wave?',
    answer: 'Frequency measures the number of wave cycles passing a point per second, in hertz.',
    difficulty: 'Easy',
  },
  {
    id: 7,
    subjectId: 'maths',
    chapter: 'Functions',
    term: 'Quadratic',
    prompt: 'What is the general shape of a quadratic graph?',
    answer: 'A quadratic graph is a parabola, usually U-shaped or inverted U-shaped.',
    difficulty: 'Medium',
  },
  {
    id: 8,
    subjectId: 'maths',
    chapter: 'Calculus',
    term: 'Derivative',
    prompt: 'What does a derivative represent?',
    answer: 'A derivative represents the instantaneous rate of change of a function with respect to a variable.',
    difficulty: 'Hard',
  },
  {
    id: 9,
    subjectId: 'english',
    chapter: 'Language analysis',
    term: 'Semantic field',
    prompt: 'What is a semantic field?',
    answer: 'A semantic field is a group of words connected by a shared meaning or theme.',
    difficulty: 'Easy',
  },
  {
    id: 10,
    subjectId: 'english',
    chapter: 'Summary & synthesis',
    term: 'Inference',
    prompt: 'What is inference in reading analysis?',
    answer: 'Inference is a conclusion drawn from evidence or clues in the text rather than directly stated facts.',
    difficulty: 'Medium',
  },
  {
    id: 11,
    subjectId: 'economics',
    chapter: 'Demand & supply',
    term: 'Elasticity',
    prompt: 'What does price elasticity of demand measure?',
    answer: 'It measures the responsiveness of quantity demanded to a change in price.',
    difficulty: 'Hard',
  },
  {
    id: 12,
    subjectId: 'economics',
    chapter: 'Macro indicators',
    term: 'Inflation',
    prompt: 'What is inflation?',
    answer: 'Inflation is the sustained increase in the general price level of goods and services over time.',
    difficulty: 'Medium',
  },
];

export const quickQuiz = [
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
  {
    question: 'What is the derivative of x²?',
    choices: ['x', '2x', 'x²', '2'],
    answer: '2x',
  },
  {
    question: 'Which word describes a comparison made without using “like” or “as”?',
    choices: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
    answer: 'Metaphor',
  },
  {
    question: 'If demand is price elastic, a small rise in price will usually lead to:',
    choices: ['A large fall in quantity demanded', 'No change in quantity demanded', 'A rise in supply', 'A rise in marginal cost'],
    answer: 'A large fall in quantity demanded',
  },
];

export const stats = [
  { label: 'Cards mastered', value: '1,248' },
  { label: 'Streak', value: '17 days' },
  { label: 'Accuracy', value: '92%' },
  { label: 'XP', value: '4,680' },
];

export const navItems = ['Dashboard', 'Decks', 'Challenge', 'Progress'];

export const subjectIndex = Object.fromEntries(subjectDecks.map((subject) => [subject.id, subject]));

export const totalCards = subjectDecks.reduce(
  (sum, subject) => sum + subject.chapters.reduce((chapterTotal, chapter) => chapterTotal + chapter.cards, 0),
  0
);

export default subjectDecks;

