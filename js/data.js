/* ===================== 한국OH! Content Data ===================== */

const ACHIEVEMENTS = [
  { id: "first_steps", icon: "🏆", name: "First Steps", desc: "Complete your first lesson", check: (s) => s.lessonsCompleted.length >= 1 },
  { id: "streak_7", icon: "🔥", name: "7-Day Learner", desc: "Maintain a 7-day streak", check: (s) => s.streak >= 7 },
  { id: "word_collector", icon: "📖", name: "Word Collector", desc: "Learn 100 Korean words", check: (s) => Object.keys(s.vocabProgress).length >= 100 },
  { id: "good_listener", icon: "🎧", name: "Good Listener", desc: "Complete 20 listening exercises", check: (s) => s.listeningDone >= 20 },
  { id: "topik_challenger", icon: "✍️", name: "TOPIK Challenger", desc: "Complete your first TOPIK practice set", check: (s) => s.topikSetsCompleted >= 1 },
  { id: "level_5", icon: "⭐", name: "Rising Star", desc: "Reach Level 5", check: (s) => levelFromXP(s.xp).level >= 5 },
  { id: "grammar_5", icon: "📐", name: "Grammar Geek", desc: "Complete 5 grammar topics", check: (s) => s.grammarCompleted.length >= 5 },
  { id: "perfect_lesson", icon: "💯", name: "Perfectionist", desc: "Finish a lesson with 100% accuracy", check: (s) => s.perfectLessons >= 1 },
];

/* Vocabulary bank: word, romanization, meaning, example, category */
const VOCAB = [
  { id: "v1", ko: "학교", rom: "hakgyo", en: "school", ex: "저는 학교에 가요.", exEn: "I go to school.", cat: "Places" },
  { id: "v2", ko: "안녕하세요", rom: "annyeonghaseyo", en: "hello", ex: "안녕하세요, 만나서 반가워요!", exEn: "Hello, nice to meet you!", cat: "Greetings" },
  { id: "v3", ko: "감사합니다", rom: "gamsahamnida", en: "thank you", ex: "도와주셔서 감사합니다.", exEn: "Thank you for helping me.", cat: "Greetings" },
  { id: "v4", ko: "물", rom: "mul", en: "water", ex: "물 좀 주세요.", exEn: "Please give me some water.", cat: "Food" },
  { id: "v5", ko: "밥", rom: "bap", en: "rice / meal", ex: "밥을 먹었어요.", exEn: "I ate a meal.", cat: "Food" },
  { id: "v6", ko: "친구", rom: "chingu", en: "friend", ex: "친구랑 같이 가요.", exEn: "I go together with a friend.", cat: "People" },
  { id: "v7", ko: "사람", rom: "saram", en: "person", ex: "저 사람은 누구예요?", exEn: "Who is that person?", cat: "People" },
  { id: "v8", ko: "하나", rom: "hana", en: "one (native)", ex: "사과 하나 주세요.", exEn: "Give me one apple.", cat: "Numbers" },
  { id: "v9", ko: "둘", rom: "dul", en: "two (native)", ex: "커피 둘 주세요.", exEn: "Two coffees, please.", cat: "Numbers" },
  { id: "v10", ko: "집", rom: "jip", en: "house / home", ex: "저는 집에 있어요.", exEn: "I am at home.", cat: "Places" },
  { id: "v11", ko: "오늘", rom: "oneul", en: "today", ex: "오늘은 월요일이에요.", exEn: "Today is Monday.", cat: "Time" },
  { id: "v12", ko: "내일", rom: "naeil", en: "tomorrow", ex: "내일 만나요.", exEn: "See you tomorrow.", cat: "Time" },
  { id: "v13", ko: "먹다", rom: "meokda", en: "to eat", ex: "저는 사과를 먹어요.", exEn: "I eat an apple.", cat: "Verbs" },
  { id: "v14", ko: "가다", rom: "gada", en: "to go", ex: "학교에 가요.", exEn: "I go to school.", cat: "Verbs" },
  { id: "v15", ko: "좋다", rom: "jota", en: "to be good", ex: "날씨가 좋아요.", exEn: "The weather is good.", cat: "Adjectives" },
  { id: "v16", ko: "이름", rom: "ireum", en: "name", ex: "제 이름은 민수예요.", exEn: "My name is Minsu.", cat: "People" },
  { id: "v17", ko: "시간", rom: "sigan", en: "time", ex: "시간이 없어요.", exEn: "I don't have time.", cat: "Time" },
  { id: "v18", ko: "돈", rom: "don", en: "money", ex: "돈이 조금 있어요.", exEn: "I have a little money.", cat: "Objects" },
  { id: "v19", ko: "책", rom: "chaek", en: "book", ex: "저는 책을 읽어요.", exEn: "I read a book.", cat: "Objects" },
  { id: "v20", ko: "커피", rom: "keopi", en: "coffee", ex: "커피 한 잔 주세요.", exEn: "One cup of coffee, please.", cat: "Food" },
];

/* Grammar library */
const GRAMMAR = [
  {
    id: "g1", level: "Beginner", pattern: "은/는 (topic marker)",
    meaning: "marks the topic of a sentence",
    explanation: "은/는 introduces what the sentence is about. Use 는 after a vowel, 은 after a consonant.",
    examples: [
      { ko: "저는 학생이에요.", en: "I am a student." },
      { ko: "이것은 책이에요.", en: "This is a book." },
    ],
    practice: { type: "fill", prompt: "저___ 한국 사람이에요.", answer: "는", options: ["은", "는", "이", "가"] },
  },
  {
    id: "g2", level: "Beginner", pattern: "이/가 (subject marker)",
    meaning: "marks the grammatical subject",
    explanation: "이/가 highlights the subject doing the action or being described. 가 after a vowel, 이 after a consonant.",
    examples: [
      { ko: "날씨가 좋아요.", en: "The weather is good." },
      { ko: "이름이 뭐예요?", en: "What is your name?" },
    ],
    practice: { type: "fill", prompt: "친구___ 와요.", answer: "가", options: ["가", "이", "은", "를"] },
  },
  {
    id: "g3", level: "Beginner", pattern: "을/를 (object marker)",
    meaning: "marks the object of a verb",
    explanation: "을/를 marks what receives the action. 를 after a vowel, 을 after a consonant.",
    examples: [
      { ko: "밥을 먹어요.", en: "I eat rice." },
      { ko: "책을 읽어요.", en: "I read a book." },
    ],
    practice: { type: "fill", prompt: "물___ 마셔요.", answer: "을", options: ["를", "을", "가", "은"] },
  },
  {
    id: "g4", level: "Beginner", pattern: "~아요/어요/해요",
    meaning: "polite present tense ending",
    explanation: "The everyday polite speech ending. Use 아요 after ㅏ/ㅗ stems, 어요 otherwise, 해요 for 하다 verbs.",
    examples: [
      { ko: "가요.", en: "I go. (polite)" },
      { ko: "먹어요.", en: "I eat. (polite)" },
    ],
    practice: { type: "mc", prompt: "'먹다' in polite present tense is:", answer: "먹어요", options: ["먹어요", "먹아요", "먹해요", "먹다요"] },
  },
  {
    id: "g5", level: "Intermediate", pattern: "~고 싶다",
    meaning: "want to do something",
    explanation: "Attach 고 싶다 to a verb stem to express desire to do that action.",
    examples: [
      { ko: "한국에 가고 싶어요.", en: "I want to go to Korea." },
      { ko: "커피를 마시고 싶어요.", en: "I want to drink coffee." },
    ],
    practice: { type: "mc", prompt: "'want to eat' is:", answer: "먹고 싶어요", options: ["먹고 싶어요", "먹어 싶어요", "먹으고 싶다", "먹다 싶어요"] },
  },
  {
    id: "g6", level: "Intermediate", pattern: "~(으)ㄴ 후에",
    meaning: "after doing something",
    explanation: "Attached to a verb stem to indicate that an action happens after another finishes.",
    examples: [
      { ko: "숙제를 한 후에 자요.", en: "I sleep after doing homework." },
      { ko: "먹은 후에 이를 닦아요.", en: "I brush my teeth after eating." },
    ],
    practice: { type: "mc", prompt: "'after eating' is:", answer: "먹은 후에", options: ["먹은 후에", "먹고 후에", "먹기 후에", "먹으 후에"] },
  },
  {
    id: "g7", level: "Intermediate", pattern: "~(으)면",
    meaning: "if / when",
    explanation: "A conditional connector attached to a verb or adjective stem meaning 'if' or 'when'.",
    examples: [
      { ko: "시간이 있으면 만나요.", en: "If I have time, let's meet." },
      { ko: "비가 오면 집에 있어요.", en: "If it rains, I stay home." },
    ],
    practice: { type: "mc", prompt: "'if you go' is:", answer: "가면", options: ["가면", "가서", "가고", "간면"] },
  },
  {
    id: "g8", level: "Formal", pattern: "~습니다/ㅂ니다",
    meaning: "formal present tense ending",
    explanation: "Used in formal, official, or news contexts. More formal than 아요/어요.",
    examples: [
      { ko: "감사합니다.", en: "Thank you. (formal)" },
      { ko: "여기 있습니다.", en: "Here it is. (formal)" },
    ],
    practice: { type: "mc", prompt: "Formal version of '가요' is:", answer: "갑니다", options: ["갑니다", "가습니다", "가ㅂ니다", "가답니다"] },
  },
];

/* Learning path sections */
const PATH = [
  {
    section: "Foundation",
    units: [
      { id: "u_hangul", title: "Hangul", icon: "가", lessonIds: ["l1"] },
      { id: "u_basicvocab", title: "Basic Vocabulary", icon: "📚", lessonIds: ["l2"] },
      { id: "u_greetings", title: "Greetings", icon: "🙏", lessonIds: ["l3"] },
      { id: "u_numbers", title: "Numbers", icon: "🔢", lessonIds: ["l4"] },
      { id: "u_sentence", title: "Basic Sentence Structure", icon: "📐", lessonIds: ["l5"] },
    ],
  },
  {
    section: "Beginner Korean",
    units: [
      { id: "u_particles", title: "Particles", icon: "🔗", lessonIds: ["l6"] },
      { id: "u_verbconj", title: "Verb Conjugation", icon: "🔄", lessonIds: ["l7"] },
      { id: "u_daily", title: "Daily Activities", icon: "☀️", lessonIds: ["l8"] },
      { id: "u_time", title: "Time & Dates", icon: "🕐", lessonIds: ["l9"] },
      { id: "u_places", title: "Places & Directions", icon: "🗺️", lessonIds: ["l10"] },
    ],
  },
  {
    section: "Intermediate Korean",
    units: [
      { id: "u_intgram", title: "Intermediate Grammar", icon: "🧩", lessonIds: ["l11"] },
      { id: "u_formal", title: "Formal Speech", icon: "🎩", lessonIds: ["l12"] },
      { id: "u_connect", title: "Connecting Sentences", icon: "➰", lessonIds: ["l13"] },
      { id: "u_reading", title: "Reading Practice", icon: "📰", lessonIds: ["l14"] },
      { id: "u_listening", title: "Listening Practice", icon: "🎧", lessonIds: ["l15"] },
    ],
  },
  {
    section: "TOPIK Preparation",
    units: [
      { id: "u_topikvocab", title: "Vocabulary", icon: "🈺", lessonIds: ["l16"] },
      { id: "u_topikread", title: "Reading", icon: "📖", lessonIds: ["l17"] },
      { id: "u_topiklisten", title: "Listening", icon: "🔊", lessonIds: ["l18"] },
      { id: "u_topikwrite", title: "Writing", icon: "✍️", lessonIds: ["l19"] },
      { id: "u_topikmock", title: "Mock Questions", icon: "🧪", lessonIds: ["l20"] },
    ],
  },
];

/* Full lesson definitions — at least 3 complete with rich question variety */
const LESSONS = {
  l1: {
    id: "l1", title: "Hangul Basics", unit: "u_hangul", xp: 20,
    vocabIds: ["v16"],
    questions: [
      { type: "mc", prompt: "Which letter makes the 'ㅁ' sound (like 'm')?", options: ["ㅁ", "ㄴ", "ㅅ", "ㄹ"], answer: "ㅁ" },
      { type: "mc", prompt: "What does 가 represent?", options: ["ga", "na", "da", "ma"], answer: "ga" },
      { type: "translate_ko_en", prompt: "이름", answer: "name" },
      { type: "fill", prompt: "저는 ___이에요. (name)", answer: "이름", options: ["이름", "학교", "친구", "사람"] },
      { type: "match", prompt: "Match the Hangul to its romanization", pairs: [["가", "ga"], ["나", "na"], ["다", "da"], ["라", "ra"]] },
    ],
  },
  l2: {
    id: "l2", title: "Everyday Objects", unit: "u_basicvocab", xp: 20,
    vocabIds: ["v10", "v19", "v20", "v18"],
    questions: [
      { type: "translate_ko_en", prompt: "책", answer: "book" },
      { type: "translate_en_ko", prompt: "coffee", answer: "커피", options: ["커피", "물", "밥", "책"] },
      { type: "mc", prompt: "'집' means:", options: ["house", "school", "friend", "money"], answer: "house" },
      { type: "fill", prompt: "저는 ___에 있어요. (home)", answer: "집", options: ["집", "책", "돈", "커피"] },
      { type: "match", prompt: "Match the word to its meaning", pairs: [["책", "book"], ["돈", "money"], ["집", "house"], ["커피", "coffee"]] },
    ],
  },
  l3: {
    id: "l3", title: "First Greetings", unit: "u_greetings", xp: 25,
    vocabIds: ["v2", "v3", "v6"],
    questions: [
      { type: "translate_ko_en", prompt: "안녕하세요", answer: "hello" },
      { type: "translate_en_ko", prompt: "thank you", answer: "감사합니다", options: ["감사합니다", "안녕하세요", "친구", "사람"] },
      { type: "mc", prompt: "How do you politely say 'hello'?", options: ["안녕하세요", "감사합니다", "친구", "이름"], answer: "안녕하세요" },
      { type: "arrange", prompt: "Arrange to form: 'Nice to meet you, friend.'", words: ["친구야,", "만나서", "반가워요"], answer: "친구야, 만나서 반가워요" },
      { type: "listening", prompt: "Listen and choose what you hear", audioText: "감사합니다", options: ["감사합니다", "안녕하세요", "죄송합니다", "괜찮아요"], answer: "감사합니다" },
    ],
  },
  l4: {
    id: "l4", title: "Counting in Korean", unit: "u_numbers", xp: 20,
    vocabIds: ["v8", "v9"],
    questions: [
      { type: "mc", prompt: "'하나' means:", options: ["one", "two", "three", "four"], answer: "one" },
      { type: "translate_en_ko", prompt: "two", answer: "둘", options: ["하나", "둘", "셋", "넷"] },
      { type: "fill", prompt: "사과 ___ 주세요. (one)", answer: "하나", options: ["하나", "둘", "셋", "넷"] },
      { type: "match", prompt: "Match numbers to Hangul", pairs: [["1", "하나"], ["2", "둘"], ["3", "셋"], ["4", "넷"]] },
    ],
  },
  l5: {
    id: "l5", title: "Simple Sentences", unit: "u_sentence", xp: 25,
    vocabIds: ["v1", "v14"],
    questions: [
      { type: "arrange", prompt: "Arrange to form: 'I go to school.'", words: ["저는", "학교에", "가요"], answer: "저는 학교에 가요" },
      { type: "fill", prompt: "저는 학교___ 가요. (to)", answer: "에", options: ["에", "가", "을", "는"] },
      { type: "translate_ko_en", prompt: "저는 학교에 가요.", answer: "I go to school." },
      { type: "mc", prompt: "Basic Korean sentence order is:", options: ["Subject-Object-Verb", "Subject-Verb-Object", "Verb-Subject-Object", "Object-Verb-Subject"], answer: "Subject-Object-Verb" },
    ],
  },
  l6: {
    id: "l6", title: "Particles in Action", unit: "u_particles", xp: 25,
    vocabIds: ["v7", "v11"],
    questions: [
      { type: "fill", prompt: "친구___ 와요. (subject)", answer: "가", options: ["가", "을", "는", "에"] },
      { type: "fill", prompt: "물___ 마셔요. (object)", answer: "을", options: ["을", "가", "는", "에서"] },
      { type: "mc", prompt: "은/는 is used to mark:", options: ["topic", "object", "location", "time"], answer: "topic" },
      { type: "translate_en_ko", prompt: "today", answer: "오늘", options: ["오늘", "내일", "지금", "어제"] },
    ],
  },
  l7: {
    id: "l7", title: "Conjugating Verbs", unit: "u_verbconj", xp: 25,
    vocabIds: ["v13", "v14", "v15"],
    questions: [
      { type: "mc", prompt: "Polite present of '가다' (to go) is:", options: ["가요", "가아요", "가해요", "간요"], answer: "가요" },
      { type: "fill", prompt: "저는 사과를 ___. (eat, polite)", answer: "먹어요", options: ["먹어요", "먹아요", "먹해요", "먹다요"] },
      { type: "translate_ko_en", prompt: "날씨가 좋아요.", answer: "The weather is good." },
      { type: "listening", prompt: "Listen and choose what you hear", audioText: "먹어요", options: ["먹어요", "가요", "좋아요", "와요"], answer: "먹어요" },
    ],
  },
  l8: {
    id: "l8", title: "My Daily Routine", unit: "u_daily", xp: 25,
    vocabIds: ["v5", "v13"],
    questions: [
      { type: "arrange", prompt: "Arrange: 'I ate a meal.'", words: ["저는", "밥을", "먹었어요"], answer: "저는 밥을 먹었어요" },
      { type: "reading", prompt: "저는 아침에 밥을 먹어요. 그리고 학교에 가요.", question: "What does the person do in the morning first?", options: ["Eats a meal", "Goes to school", "Drinks coffee", "Reads a book"], answer: "Eats a meal" },
      { type: "mc", prompt: "'먹었어요' means:", options: ["ate (past)", "eat (present)", "will eat (future)", "eating"], answer: "ate (past)" },
    ],
  },
  l9: {
    id: "l9", title: "Talking About Time", unit: "u_time", xp: 25,
    vocabIds: ["v11", "v12", "v17"],
    questions: [
      { type: "translate_en_ko", prompt: "tomorrow", answer: "내일", options: ["내일", "오늘", "어제", "시간"] },
      { type: "fill", prompt: "___ 만나요. (tomorrow)", answer: "내일", options: ["내일", "오늘", "친구", "학교"] },
      { type: "mc", prompt: "'시간이 없어요' means:", options: ["I don't have time", "I have time", "I like time", "Time is good"], answer: "I don't have time" },
    ],
  },
  l10: {
    id: "l10", title: "Finding Your Way", unit: "u_places", xp: 25,
    vocabIds: ["v1", "v10"],
    questions: [
      { type: "reading", prompt: "학교 옆에 집이 있어요.", question: "Where is the house?", options: ["Next to the school", "Inside the school", "Far from the school", "Behind the coffee shop"], answer: "Next to the school" },
      { type: "translate_ko_en", prompt: "학교가 어디예요?", answer: "Where is the school?" },
      { type: "mc", prompt: "'옆' means:", options: ["next to", "far", "inside", "behind"], answer: "next to" },
    ],
  },
  l11: {
    id: "l11", title: "Expressing Desire", unit: "u_intgram", xp: 30,
    vocabIds: [],
    questions: [
      { type: "mc", prompt: "'~고 싶다' expresses:", options: ["wanting to do something", "having done something", "being able to do something", "not wanting to do something"], answer: "wanting to do something" },
      { type: "fill", prompt: "한국에 가___ 싶어요. (want to go)", answer: "고", options: ["고", "면", "서", "은"] },
      { type: "translate_en_ko", prompt: "I want to eat", answer: "먹고 싶어요", options: ["먹고 싶어요", "먹어 싶어요", "먹다 싶어요", "먹으 싶어요"] },
    ],
  },
  l12: {
    id: "l12", title: "Speaking Formally", unit: "u_formal", xp: 30,
    vocabIds: [],
    questions: [
      { type: "mc", prompt: "Formal version of '가요' (go) is:", options: ["갑니다", "가습니다", "가답니다", "가ㅂ습니다"], answer: "갑니다" },
      { type: "translate_ko_en", prompt: "여기 있습니다.", answer: "Here it is." },
      { type: "fill", prompt: "감사___. (formal thank you)", answer: "합니다", options: ["합니다", "해요", "하고", "한다"] },
    ],
  },
  l13: {
    id: "l13", title: "Connecting Ideas", unit: "u_connect", xp: 30,
    vocabIds: [],
    questions: [
      { type: "mc", prompt: "'~(으)면' means:", options: ["if / when", "after", "because", "but"], answer: "if / when" },
      { type: "fill", prompt: "비가 ___ 집에 있어요. (if it rains)", answer: "오면", options: ["오면", "오고", "온 후에", "오지만"] },
      { type: "arrange", prompt: "Arrange: 'If I have time, let's meet.'", words: ["시간이", "있으면,", "만나요"], answer: "시간이 있으면, 만나요" },
    ],
  },
  l14: {
    id: "l14", title: "Reading a Short Note", unit: "u_reading", xp: 30,
    vocabIds: [],
    questions: [
      { type: "reading", prompt: "민수: 오늘 시간 있어요? 저녁에 만나고 싶어요.\n지나: 네, 좋아요! 7시에 만나요.", question: "What do Minsu and Jina agree to do?", options: ["Meet at 7", "Meet tomorrow", "Study together", "Eat lunch"], answer: "Meet at 7" },
      { type: "translate_ko_en", prompt: "저녁에 만나고 싶어요.", answer: "I want to meet in the evening." },
      { type: "mc", prompt: "'좋아요!' in this context expresses:", options: ["agreement", "disagreement", "confusion", "apology"], answer: "agreement" },
    ],
  },
  l15: {
    id: "l15", title: "Listening in Context", unit: "u_listening", xp: 30,
    vocabIds: [],
    questions: [
      { type: "listening", prompt: "Listen and choose what you hear", audioText: "오늘 시간 있어요?", options: ["오늘 시간 있어요?", "내일 시간 있어요?", "오늘 뭐 해요?", "오늘 어디 가요?"], answer: "오늘 시간 있어요?" },
      { type: "listening", prompt: "Listen and choose what you hear", audioText: "7시에 만나요.", options: ["7시에 만나요.", "8시에 만나요.", "7시에 가요.", "7시에 먹어요."], answer: "7시에 만나요." },
      { type: "mc", prompt: "'시에' is used with:", options: ["clock time", "dates", "places", "people"], answer: "clock time" },
    ],
  },
  l16: {
    id: "l16", title: "TOPIK Vocabulary I", unit: "u_topikvocab", xp: 30,
    vocabIds: [],
    questions: [
      { type: "mc", prompt: "'경험' means:", options: ["experience", "environment", "exercise", "example"], answer: "experience" },
      { type: "translate_ko_en", prompt: "노력하다", answer: "to make an effort" },
      { type: "fill", prompt: "저는 매일 한국어를 ___. (study, polite)", answer: "공부해요", options: ["공부해요", "공부하다", "공부했다", "공부할"] },
    ],
  },
  l17: {
    id: "l17", title: "TOPIK Reading I", unit: "u_topikread", xp: 30,
    vocabIds: [],
    questions: [
      { type: "reading", prompt: "저는 매일 아침 공원에서 운동을 합니다. 운동을 하면 기분이 좋아집니다.", question: "Why does the writer feel good?", options: ["Because of exercising", "Because of eating", "Because of sleeping", "Because of studying"], answer: "Because of exercising" },
      { type: "mc", prompt: "(Practice question, not an official TOPIK item) '기분이 좋아지다' means:", options: ["mood improves", "mood worsens", "gets tired", "gets hungry"], answer: "mood improves" },
    ],
  },
  l18: {
    id: "l18", title: "TOPIK Listening I", unit: "u_topiklisten", xp: 30,
    vocabIds: [],
    questions: [
      { type: "listening", prompt: "Listen and choose what you hear (practice item)", audioText: "공원에서 운동을 해요.", options: ["공원에서 운동을 해요.", "학교에서 공부를 해요.", "집에서 쉬어요.", "식당에서 밥을 먹어요."], answer: "공원에서 운동을 해요." },
    ],
  },
  l19: {
    id: "l19", title: "TOPIK Writing Basics", unit: "u_topikwrite", xp: 30,
    vocabIds: [],
    questions: [
      { type: "arrange", prompt: "Arrange (practice item): 'I exercise at the park every morning.'", words: ["저는", "매일", "아침에", "공원에서", "운동을", "합니다"], answer: "저는 매일 아침에 공원에서 운동을 합니다" },
      { type: "fill", prompt: "(practice item) 운동을 ___ 기분이 좋아져요. (if I exercise)", answer: "하면", options: ["하면", "하고", "한 후에", "하지만"] },
    ],
  },
  l20: {
    id: "l20", title: "TOPIK Mock Set", unit: "u_topikmock", xp: 40,
    vocabIds: [],
    questions: [
      { type: "reading", prompt: "(practice item) 어제는 비가 왔지만 오늘은 날씨가 좋습니다.", question: "How was the weather yesterday?", options: ["It rained", "It was sunny", "It snowed", "It was windy"], answer: "It rained" },
      { type: "listening", prompt: "Listen (practice item) and choose what you hear", audioText: "오늘 날씨가 좋습니다.", options: ["오늘 날씨가 좋습니다.", "오늘 날씨가 나쁩니다.", "어제 비가 왔습니다.", "내일 눈이 옵니다."], answer: "오늘 날씨가 좋습니다." },
      { type: "mc", prompt: "(practice item) '~지만' means:", options: ["but", "and", "because", "if"], answer: "but" },
    ],
  },
};

/* TOPIK practice sets (clearly original/practice material) */
const TOPIK_SETS = [
  { id: "t1", level: "TOPIK I", skill: "Reading", lessonId: "l17" },
  { id: "t2", level: "TOPIK I", skill: "Listening", lessonId: "l18" },
  { id: "t3", level: "TOPIK II", skill: "Writing", lessonId: "l19" },
  { id: "t4", level: "TOPIK II", skill: "Mock Set", lessonId: "l20" },
];

function levelFromXP(xp) {
  const perLevel = 100;
  const level = Math.floor(xp / perLevel) + 1;
  const into = xp % perLevel;
  return { level, into, need: perLevel };
}

