/* ===================== 한국OH! Content Data ===================== */

const ACHIEVEMENTS = [
  // ──────────────── LESSONS ────────────────
  {
    id: "first_steps",
    icon: "🏆",
    name: "First Steps",
    desc: "Complete your first lesson",
    check: (s) => s.lessonsCompleted.length >= 1
  },
  {
    id: "lesson_5",
    icon: "📚",
    name: "Getting Started",
    desc: "Complete 5 lessons",
    check: (s) => s.lessonsCompleted.length >= 5
  },
  {
    id: "lesson_10",
    icon: "🎓",
    name: "Dedicated Learner",
    desc: "Complete 10 lessons",
    check: (s) => s.lessonsCompleted.length >= 10
  },
  {
    id: "lesson_25",
    icon: "🏅",
    name: "Committed Student",
    desc: "Complete 25 lessons",
    check: (s) => s.lessonsCompleted.length >= 25
  },
  {
    id: "lesson_50",
    icon: "👑",
    name: "Korean Master",
    desc: "Complete 50 lessons",
    check: (s) => s.lessonsCompleted.length >= 50
  },

  // ──────────────── STREAKS ────────────────
  {
    id: "streak_3",
    icon: "🔥",
    name: "On a Roll",
    desc: "Maintain a 3-day streak",
    check: (s) => s.streak >= 3
  },
  {
    id: "streak_7",
    icon: "🔥",
    name: "7-Day Learner",
    desc: "Maintain a 7-day streak",
    check: (s) => s.streak >= 7
  },
  {
    id: "streak_14",
    icon: "🔥",
    name: "Two-Week Warrior",
    desc: "Maintain a 14-day streak",
    check: (s) => s.streak >= 14
  },
  {
    id: "streak_30",
    icon: "🔥",
    name: "Monthly Master",
    desc: "Maintain a 30-day streak",
    check: (s) => s.streak >= 30
  },
  {
    id: "streak_100",
    icon: "💎",
    name: "Unstoppable",
    desc: "Maintain a 100-day streak",
    check: (s) => s.streak >= 100
  },

  // ──────────────── VOCABULARY ────────────────
  {
    id: "word_collector",
    icon: "📖",
    name: "Word Collector",
    desc: "Learn 100 Korean words",
    check: (s) => Object.keys(s.vocabProgress).length >= 100
  },
  {
    id: "vocab_25",
    icon: "📝",
    name: "Word Explorer",
    desc: "Learn 25 Korean words",
    check: (s) => Object.keys(s.vocabProgress).length >= 25
  },
  {
    id: "vocab_50",
    icon: "📚",
    name: "Vocabulary Builder",
    desc: "Learn 50 Korean words",
    check: (s) => Object.keys(s.vocabProgress).length >= 50
  },
  {
    id: "vocab_250",
    icon: "📚",
    name: "Vocabulary Expert",
    desc: "Learn 250 Korean words",
    check: (s) => Object.keys(s.vocabProgress).length >= 250
  },
  {
    id: "vocab_500",
    icon: "🧠",
    name: "Korean Word Bank",
    desc: "Learn 500 Korean words",
    check: (s) => Object.keys(s.vocabProgress).length >= 500
  },

  // ──────────────── LISTENING ────────────────
  {
    id: "first_listener",
    icon: "🎧",
    name: "First Listen",
    desc: "Complete your first listening exercise",
    check: (s) => s.listeningDone >= 1
  },
  {
    id: "good_listener",
    icon: "🎧",
    name: "Good Listener",
    desc: "Complete 20 listening exercises",
    check: (s) => s.listeningDone >= 20
  },
  {
    id: "listening_50",
    icon: "🎵",
    name: "Sharp Ears",
    desc: "Complete 50 listening exercises",
    check: (s) => s.listeningDone >= 50
  },
  {
    id: "listening_100",
    icon: "🎧",
    name: "Listening Pro",
    desc: "Complete 100 listening exercises",
    check: (s) => s.listeningDone >= 100
  },

  // ──────────────── TOPIK ────────────────
  {
    id: "topik_challenger",
    icon: "✍️",
    name: "TOPIK Challenger",
    desc: "Complete your first TOPIK practice set",
    check: (s) => s.topikSetsCompleted >= 1
  },
  {
    id: "topik_5",
    icon: "📄",
    name: "TOPIK Trainee",
    desc: "Complete 5 TOPIK practice sets",
    check: (s) => s.topikSetsCompleted >= 5
  },
  {
    id: "topik_10",
    icon: "🎯",
    name: "TOPIK Regular",
    desc: "Complete 10 TOPIK practice sets",
    check: (s) => s.topikSetsCompleted >= 10
  },
  {
    id: "topik_25",
    icon: "🏆",
    name: "TOPIK Veteran",
    desc: "Complete 25 TOPIK practice sets",
    check: (s) => s.topikSetsCompleted >= 25
  },

  // ──────────────── LEVEL / XP ────────────────
  {
    id: "level_2",
    icon: "⭐",
    name: "Level Up!",
    desc: "Reach Level 2",
    check: (s) => levelFromXP(s.xp).level >= 2
  },
  {
    id: "level_5",
    icon: "⭐",
    name: "Rising Star",
    desc: "Reach Level 5",
    check: (s) => levelFromXP(s.xp).level >= 5
  },
  {
    id: "level_10",
    icon: "🌟",
    name: "Korean Learner",
    desc: "Reach Level 10",
    check: (s) => levelFromXP(s.xp).level >= 10
  },
  {
    id: "level_20",
    icon: "💫",
    name: "Korean Scholar",
    desc: "Reach Level 20",
    check: (s) => levelFromXP(s.xp).level >= 20
  },

  // ──────────────── GRAMMAR ────────────────
  {
    id: "grammar_first",
    icon: "📐",
    name: "Grammar Beginner",
    desc: "Complete your first grammar topic",
    check: (s) => s.grammarCompleted.length >= 1
  },
  {
    id: "grammar_5",
    icon: "📐",
    name: "Grammar Geek",
    desc: "Complete 5 grammar topics",
    check: (s) => s.grammarCompleted.length >= 5
  },
  {
    id: "grammar_10",
    icon: "📖",
    name: "Grammar Pro",
    desc: "Complete 10 grammar topics",
    check: (s) => s.grammarCompleted.length >= 10
  },
  {
    id: "grammar_20",
    icon: "🧠",
    name: "Grammar Master",
    desc: "Complete 20 grammar topics",
    check: (s) => s.grammarCompleted.length >= 20
  },

  // ──────────────── ACCURACY ────────────────
  {
    id: "perfect_lesson",
    icon: "💯",
    name: "Perfectionist",
    desc: "Finish a lesson with 100% accuracy",
    check: (s) => s.perfectLessons >= 1
  },
  {
    id: "perfect_5",
    icon: "💯",
    name: "Perfect Streak",
    desc: "Finish 5 lessons with 100% accuracy",
    check: (s) => s.perfectLessons >= 5
  },
  {
    id: "perfect_10",
    icon: "🏆",
    name: "Flawless",
    desc: "Finish 10 lessons with 100% accuracy",
    check: (s) => s.perfectLessons >= 10
  },

  // ──────────────── XP MILESTONES ────────────────
  {
    id: "xp_100",
    icon: "✨",
    name: "First Hundred",
    desc: "Earn 100 XP",
    check: (s) => s.xp >= 100
  },
  {
    id: "xp_500",
    icon: "💖",
    name: "XP Collector",
    desc: "Earn 500 XP",
    check: (s) => s.xp >= 500
  },
  {
    id: "xp_1000",
    icon: "💎",
    name: "XP Master",
    desc: "Earn 1,000 XP",
    check: (s) => s.xp >= 1000
  },
  {
    id: "xp_5000",
    icon: "👑",
    name: "XP Legend",
    desc: "Earn 5,000 XP",
    check: (s) => s.xp >= 5000
  },

  // ──────────────── SPECIAL ────────────────
  {
    id: "all_rounder",
    icon: "🌸",
    name: "All-Rounder",
    desc: "Complete a lesson, grammar topic, and TOPIK practice set",
    check: (s) =>
      s.lessonsCompleted.length >= 1 &&
      s.grammarCompleted.length >= 1 &&
      s.topikSetsCompleted >= 1
  },

  {
    id: "language_lover",
    icon: "💗",
    name: "Language Lover",
    desc: "Learn 100 Korean words and complete 10 lessons",
    check: (s) =>
      Object.keys(s.vocabProgress).length >= 100 &&
      s.lessonsCompleted.length >= 10
  },

  {
    id: "dedication",
    icon: "🌷",
    name: "Pure Dedication",
    desc: "Maintain a 30-day streak and complete 25 lessons",
    check: (s) =>
      s.streak >= 30 &&
      s.lessonsCompleted.length >= 25
  }
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
  { id: "v9", ko: "둘", rom: "dul", en: "two (native)", ex: "사과 둘이 있습니다.", exEn: "There are two apples.", cat: "Numbers" },
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
  { id: "v21", ko: "사과", rom: "sagwa", en: "apple", ex: "사과를 먹어요.", exEn: "I eat an apple.", cat: "Food" },
  { id: "v22", ko: "셋", rom: "set", en: "three (native)", ex: "고양이 셋이 있습니다.", exEn: "There are three cats.", cat: "Numbers" },
  { id: "v23", ko: "식당", rom: "sikdang", en: "restaurant", ex: "식당에서 밥을 먹어요.", exEn: "I eat at a restaurant.", cat: "Places" },
  { id: "v24", ko: "공원", rom: "gongwon", en: "park", ex: "공원에서 운동해요.", exEn: "I exercise at the park.", cat: "Places" },
  { id: "v25", ko: "도서관", rom: "doseogwan", en: "library", ex: "도서관에서 책을 읽어요.", exEn: "I read a book at the library.", cat: "Places" },
  { id: "v26", ko: "병원", rom: "byeongwon", en: "hospital", ex: "병원에 가요.", exEn: "I go to the hospital.", cat: "Places" },
  { id: "v27", ko: "시장", rom: "sijang", en: "market", ex: "시장에서 과일을 사요.", exEn: "I buy fruit at the market.", cat: "Places" },
  { id: "v28", ko: "가족", rom: "gajok", en: "family", ex: "우리 가족은 네 명이에요.", exEn: "There are four people in my family.", cat: "People" },
  { id: "v29", ko: "선생님", rom: "seonsaengnim", en: "teacher", ex: "선생님께 질문해요.", exEn: "I ask the teacher a question.", cat: "People" },
  { id: "v30", ko: "학생", rom: "haksaeng", en: "student", ex: "저는 학생이에요.", exEn: "I am a student.", cat: "People" },
  { id: "v31", ko: "한국", rom: "hanguk", en: "Korea", ex: "저는 한국에 가고 싶어요.", exEn: "I want to go to Korea.", cat: "Places" },
  { id: "v32", ko: "한국어", rom: "hangugeo", en: "Korean language", ex: "한국어를 공부해요.", exEn: "I study Korean.", cat: "Language" },
  { id: "v33", ko: "공부하다", rom: "gongbuhada", en: "to study", ex: "매일 한국어를 공부해요.", exEn: "I study Korean every day.", cat: "Verbs" },
  { id: "v34", ko: "읽다", rom: "ikda", en: "to read", ex: "책을 읽어요.", exEn: "I read a book.", cat: "Verbs" },
  { id: "v35", ko: "마시다", rom: "masida", en: "to drink", ex: "물을 마셔요.", exEn: "I drink water.", cat: "Verbs" },
  { id: "v36", ko: "보다", rom: "boda", en: "to see / watch", ex: "영화를 봐요.", exEn: "I watch a movie.", cat: "Verbs" },
  { id: "v37", ko: "듣다", rom: "deutda", en: "to listen / hear", ex: "음악을 들어요.", exEn: "I listen to music.", cat: "Verbs" },
  { id: "v38", ko: "만나다", rom: "mannada", en: "to meet", ex: "친구를 만나요.", exEn: "I meet a friend.", cat: "Verbs" },
  { id: "v39", ko: "자다", rom: "jada", en: "to sleep", ex: "밤에 자요.", exEn: "I sleep at night.", cat: "Verbs" },
  { id: "v40", ko: "일어나다", rom: "ireonada", en: "to get up", ex: "아침에 일어나요.", exEn: "I get up in the morning.", cat: "Verbs" },
  { id: "v41", ko: "빠르다", rom: "ppareuda", en: "to be fast", ex: "기차가 빨라요.", exEn: "The train is fast.", cat: "Adjectives" },
  { id: "v42", ko: "느리다", rom: "neurida", en: "to be slow", ex: "인터넷이 느려요.", exEn: "The internet is slow.", cat: "Adjectives" },
  { id: "v43", ko: "크다", rom: "keuda", en: "to be big", ex: "집이 커요.", exEn: "The house is big.", cat: "Adjectives" },
  { id: "v44", ko: "작다", rom: "jakda", en: "to be small", ex: "방이 작아요.", exEn: "The room is small.", cat: "Adjectives" },
  { id: "v45", ko: "예쁘다", rom: "yeppeuda", en: "to be pretty", ex: "꽃이 예뻐요.", exEn: "The flower is pretty.", cat: "Adjectives" },
  { id: "v46", ko: "맛있다", rom: "masitda", en: "to be delicious", ex: "김치가 맛있어요.", exEn: "The kimchi is delicious.", cat: "Adjectives" },
  { id: "v47", ko: "어제", rom: "eoje", en: "yesterday", ex: "어제는 비가 왔어요.", exEn: "It rained yesterday.", cat: "Time" },
  { id: "v48", ko: "지금", rom: "jigeum", en: "now", ex: "지금 뭐 해요?", exEn: "What are you doing now?", cat: "Time" },
  { id: "v49", ko: "아침", rom: "achim", en: "morning", ex: "아침에 일어나요.", exEn: "I get up in the morning.", cat: "Time" },
  { id: "v50", ko: "저녁", rom: "jeonyeok", en: "evening / dinner", ex: "저녁에 친구를 만나요.", exEn: "I meet my friend in the evening.", cat: "Time" },
  { id: "v51", ko: "주말", rom: "jumal", en: "weekend", ex: "주말에 쉬어요.", exEn: "I rest on the weekend.", cat: "Time" },
  { id: "v52", ko: "월요일", rom: "woryoil", en: "Monday", ex: "월요일에 학교에 가요.", exEn: "I go to school on Monday.", cat: "Time" },
  { id: "v53", ko: "날씨", rom: "nalssi", en: "weather", ex: "오늘 날씨가 좋아요.", exEn: "The weather is good today.", cat: "Nature" },
  { id: "v54", ko: "비", rom: "bi", en: "rain", ex: "비가 와요.", exEn: "It is raining.", cat: "Nature" },
  { id: "v55", ko: "눈", rom: "nun", en: "snow", ex: "겨울에 눈이 와요.", exEn: "It snows in winter.", cat: "Nature" },
  { id: "v56", ko: "음악", rom: "eumak", en: "music", ex: "음악을 들어요.", exEn: "I listen to music.", cat: "Entertainment" },
  { id: "v57", ko: "영화", rom: "yeonghwa", en: "movie", ex: "주말에 영화를 봐요.", exEn: "I watch a movie on the weekend.", cat: "Entertainment" },
  { id: "v58", ko: "운동", rom: "undong", en: "exercise", ex: "매일 운동을 해요.", exEn: "I exercise every day.", cat: "Activities" },
  { id: "v59", ko: "여행", rom: "yeohaeng", en: "travel / trip", ex: "한국으로 여행을 가요.", exEn: "I travel to Korea.", cat: "Activities" },
  { id: "v60", ko: "사진", rom: "sajin", en: "photo", ex: "사진을 찍어요.", exEn: "I take a photo.", cat: "Objects" },
  { id: "v61", ko: "영어", rom: "yeongeo", en: "English language", ex: "영어 공부하고 있어요.", exEn: "I am learning English.", cat: "Language" },
  { id: "v62", ko: "은행", rom: "eunhaeng", en: "bank", ex: "은행에 가요.", exEn: "I go to the bank.", cat: "Places" },
  { id: "v63", ko: "우체국", rom: "ucheguk", en: "post office", ex: "우체국에서 편지를 보내요.", exEn: "I send a letter at the post office.", cat: "Places" },
  { id: "v64", ko: "공항", rom: "gonghang", en: "airport", ex: "공항에 도착했어요.", exEn: "I arrived at the airport.", cat: "Places" },
  { id: "v65", ko: "역", rom: "yeok", en: "station", ex: "역에서 친구를 만나요.", exEn: "I meet my friend at the station.", cat: "Places" },
  { id: "v66", ko: "카페", rom: "kape", en: "cafe", ex: "카페에서 커피를 마셔요.", exEn: "I drink coffee at a cafe.", cat: "Places" },
  { id: "v67", ko: "마트", rom: "mateu", en: "supermarket", ex: "마트에서 장을 봐요.", exEn: "I shop for groceries at the supermarket.", cat: "Places" },
  { id: "v68", ko: "서점", rom: "seojeom", en: "bookstore", ex: "서점에서 책을 사요.", exEn: "I buy a book at the bookstore.", cat: "Places" },
  { id: "v69", ko: "박물관", rom: "bangmulgwan", en: "museum", ex: "박물관을 구경해요.", exEn: "I look around the museum.", cat: "Places" },
  { id: "v70", ko: "극장", rom: "geukjang", en: "theater", ex: "극장에서 영화를 봐요.", exEn: "I watch a movie at the theater.", cat: "Places" },
  { id: "v71", ko: "호텔", rom: "hotel", en: "hotel", ex: "호텔에서 쉬어요.", exEn: "I rest at the hotel.", cat: "Places" },
  { id: "v72", ko: "안녕", rom: "annyeong", en: "hi / bye", ex: "안녕! 잘 지냈어?", exEn: "Hi! How have you been?", cat: "Greetings" },
  { id: "v73", ko: "반갑습니다", rom: "bangapseumnida", en: "nice to meet you", ex: "만나서 반갑습니다.", exEn: "Nice to meet you.", cat: "Greetings" },
  { id: "v74", ko: "반가워요", rom: "bangawoyo", en: "nice to meet you", ex: "만나서 반가워요.", exEn: "Nice to meet you.", cat: "Greetings" },
  { id: "v75", ko: "죄송합니다", rom: "joesonghamnida", en: "I'm sorry", ex: "늦어서 죄송합니다.", exEn: "I'm sorry for being late.", cat: "Greetings" },
  { id: "v76", ko: "미안해요", rom: "mianhaeyo", en: "sorry", ex: "미안해요. 제가 잘못했어요.", exEn: "Sorry. I made a mistake.", cat: "Greetings" },
  { id: "v77", ko: "괜찮아요", rom: "gwaenchanayo", en: "it's okay", ex: "괜찮아요. 걱정하지 마세요.", exEn: "It's okay. Don't worry.", cat: "Greetings" },
  { id: "v78", ko: "어서 오세요", rom: "eoseo oseyo", en: "welcome", ex: "어서 오세요!", exEn: "Welcome!", cat: "Greetings" },
  { id: "v79", ko: "잘 지냈어요?", rom: "jal jinaesseoyo", en: "how have you been?", ex: "오랜만이에요. 잘 지냈어요?", exEn: "Long time no see. How have you been?", cat: "Greetings" },
  { id: "v80", ko: "잘 가요", rom: "jal gayo", en: "goodbye", ex: "내일 봐요. 잘 가요!", exEn: "See you tomorrow. Goodbye!", cat: "Greetings" },
  { id: "v81", ko: "잘 자요", rom: "jal jayo", en: "good night", ex: "늦었어요. 잘 자요.", exEn: "It's late. Good night.", cat: "Greetings" },
  { id: "v82", ko: "또 만나요", rom: "tto mannayo", en: "see you again", ex: "다음 주에 또 만나요.", exEn: "See you again next week.", cat: "Greetings" },
  { id: "v83", ko: "실례합니다", rom: "sillyehamnida", en: "excuse me", ex: "실례합니다. 질문이 있어요.", exEn: "Excuse me. I have a question.", cat: "Greetings" },
  { id: "v84", ko: "축하합니다", rom: "chukhahamnida", en: "congratulations", ex: "졸업을 축하합니다.", exEn: "Congratulations on your graduation.", cat: "Greetings" },
  { id: "v85", ko: "좋은 아침이에요", rom: "joeun achimieyo", en: "good morning", ex: "좋은 아침이에요!", exEn: "Good morning!", cat: "Greetings" },
  { id: "v86", ko: "수고하세요", rom: "sugohaseyo", en: "have a good day / keep up the good work", ex: "먼저 갈게요. 수고하세요.", exEn: "I'll go first. Have a good day.", cat: "Greetings" },
  { id: "v87", ko: "다녀오세요", rom: "danyeooseyo", en: "see you when you get back", ex: "잘 다녀오세요.", exEn: "See you when you get back.", cat: "Greetings" },
  { id: "v88", ko: "다녀왔어요", rom: "danyeowasseoyo", en: "I'm back", ex: "학교에서 다녀왔어요.", exEn: "I'm back from school.", cat: "Greetings" },
  { id: "v89", ko: "잘 부탁드립니다", rom: "jal butakdeurimnida", en: "I look forward to working with you", ex: "앞으로 잘 부탁드립니다.", exEn: "I look forward to working with you.", cat: "Greetings" },
  { id: "v91", ko: "김치", rom: "gimchi", en: "kimchi", ex: "김치를 먹어요.", exEn: "I eat kimchi.", cat: "Food" },
  { id: "v92", ko: "라면", rom: "ramyeon", en: "ramen", ex: "라면을 끓여요.", exEn: "I cook ramen.", cat: "Food" },
  { id: "v93", ko: "고기", rom: "gogi", en: "meat", ex: "고기를 좋아해요.", exEn: "I like meat.", cat: "Food" },
  { id: "v94", ko: "생선", rom: "saengseon", en: "fish", ex: "생선을 먹어요.", exEn: "I eat fish.", cat: "Food" },
  { id: "v95", ko: "과일", rom: "gwail", en: "fruit", ex: "과일을 많이 먹어요.", exEn: "I eat a lot of fruit.", cat: "Food" },
  { id: "v96", ko: "빵", rom: "ppang", en: "bread", ex: "아침에 빵을 먹어요.", exEn: "I eat bread in the morning.", cat: "Food" },
  { id: "v97", ko: "우유", rom: "uyu", en: "milk", ex: "우유를 마셔요.", exEn: "I drink milk.", cat: "Food" },
  { id: "v98", ko: "주스", rom: "juseu", en: "juice", ex: "오렌지 주스를 마셔요.", exEn: "I drink orange juice.", cat: "Food" },
  { id: "v99", ko: "김밥", rom: "gimbap", en: "gimbap", ex: "김밥을 먹고 싶어요.", exEn: "I want to eat gimbap.", cat: "Food" },
  { id: "v100", ko: "떡", rom: "tteok", en: "rice cake", ex: "떡을 먹어요.", exEn: "I eat rice cakes.", cat: "Food" },
  { id: "v101", ko: "국", rom: "guk", en: "soup", ex: "따뜻한 국을 먹어요.", exEn: "I eat warm soup.", cat: "Food" },
  { id: "v102", ko: "채소", rom: "chaeso", en: "vegetables", ex: "채소를 많이 먹어요.", exEn: "I eat lots of vegetables.", cat: "Food" },
  { id: "v103", ko: "고추", rom: "gochu", en: "chili pepper", ex: "고추가 매워요.", exEn: "The chili pepper is spicy.", cat: "Food" },
  { id: "v104", ko: "설탕", rom: "seoltang", en: "sugar", ex: "커피에 설탕을 넣어요.", exEn: "I put sugar in my coffee.", cat: "Food" },
  { id: "v105", ko: "소금", rom: "sogeum", en: "salt", ex: "음식에 소금을 넣어요.", exEn: "I add salt to the food.", cat: "Food" },
  { id: "v106", ko: "어머니", rom: "eomeoni", en: "mother", ex: "어머니와 함께 살아요.", exEn: "I live with my mother.", cat: "People" },
  { id: "v107", ko: "아버지", rom: "abeoji", en: "father", ex: "아버지는 회사원이에요.", exEn: "My father is an office worker.", cat: "People" },
  { id: "v108", ko: "형", rom: "hyeong", en: "older brother (male speaker)", ex: "형과 영화를 봐요.", exEn: "I watch a movie with my older brother.", cat: "People" },
  { id: "v109", ko: "누나", rom: "nuna", en: "older sister (male speaker)", ex: "누나는 학생이에요.", exEn: "My older sister is a student.", cat: "People" },
  { id: "v110", ko: "오빠", rom: "oppa", en: "older brother (female speaker)", ex: "오빠와 쇼핑해요.", exEn: "I shop with my older brother.", cat: "People" },
  { id: "v111", ko: "언니", rom: "eonni", en: "older sister (female speaker)", ex: "언니가 요리를 해요.", exEn: "My older sister cooks.", cat: "People" },
  { id: "v112", ko: "동생", rom: "dongsaeng", en: "younger sibling", ex: "동생과 놀아요.", exEn: "I play with my younger sibling.", cat: "People" },
  { id: "v113", ko: "아이", rom: "ai", en: "child", ex: "아이가 웃어요.", exEn: "The child is laughing.", cat: "People" },
  { id: "v114", ko: "남자", rom: "namja", en: "man", ex: "저 남자는 선생님이에요.", exEn: "That man is a teacher.", cat: "People" },
  { id: "v115", ko: "여자", rom: "yeoja", en: "woman", ex: "저 여자는 의사예요.", exEn: "That woman is a doctor.", cat: "People" },
  { id: "v116", ko: "의사", rom: "uisa", en: "doctor", ex: "의사에게 질문해요.", exEn: "I ask the doctor a question.", cat: "People" },
  { id: "v117", ko: "회사원", rom: "hoesawon", en: "office worker", ex: "저는 회사원이에요.", exEn: "I am an office worker.", cat: "People" },
  { id: "v118", ko: "손님", rom: "sonnim", en: "customer / guest", ex: "손님이 많아요.", exEn: "There are many customers.", cat: "People" },
  { id: "v119", ko: "친척", rom: "chincheok", en: "relative", ex: "주말에 친척을 만나요.", exEn: "I meet relatives on the weekend.", cat: "People" },
  { id: "v120", ko: "넷", rom: "net", en: "four (native)", ex: "사과 넷 주세요.", exEn: "Please give me four apples.", cat: "Numbers" },
  { id: "v121", ko: "다섯", rom: "daseot", en: "five (native)", ex: "학생 다섯 명이 있어요.", exEn: "There are five students.", cat: "Numbers" },
  { id: "v122", ko: "여섯", rom: "yeoseot", en: "six (native)", ex: "사과 여섯 개가 있어요.", exEn: "There are six apples.", cat: "Numbers" },
  { id: "v123", ko: "일곱", rom: "ilgop", en: "seven (native)", ex: "일곱 명이 왔어요.", exEn: "Seven people came.", cat: "Numbers" },
  { id: "v124", ko: "여덟", rom: "yeodeol", en: "eight (native)", ex: "여덟 개 주세요.", exEn: "Please give me eight.", cat: "Numbers" },
  { id: "v125", ko: "아홉", rom: "ahop", en: "nine (native)", ex: "아홉 명이 있어요.", exEn: "There are nine people.", cat: "Numbers" },
  { id: "v126", ko: "열", rom: "yeol", en: "ten (native)", ex: "열 개 있어요.", exEn: "There are ten.", cat: "Numbers" },
  { id: "v127", ko: "스물", rom: "seumul", en: "twenty (native)", ex: "스무 살이에요.", exEn: "I am twenty years old.", cat: "Numbers" },
  { id: "v128", ko: "일", rom: "il", en: "one (Sino-Korean)", ex: "일 번을 선택하세요.", exEn: "Choose number one.", cat: "Numbers" },
  { id: "v129", ko: "이", rom: "i", en: "two (Sino-Korean)", ex: "이 층에 있어요.", exEn: "It is on the second floor.", cat: "Numbers" },
  { id: "v130", ko: "삼", rom: "sam", en: "three (Sino-Korean)", ex: "삼 분 기다려 주세요.", exEn: "Please wait three minutes.", cat: "Numbers" },
  { id: "v131", ko: "사", rom: "sa", en: "four (Sino-Korean)", ex: "사 번 문제예요.", exEn: "It is question number four.", cat: "Numbers" },
  { id: "v132", ko: "오", rom: "o", en: "five (Sino-Korean)", ex: "오 월이에요.", exEn: "It is May.", cat: "Numbers" },
  { id: "v133", ko: "육", rom: "yuk", en: "six (Sino-Korean)", ex: "육 시에 만나요.", exEn: "Let's meet at six.", cat: "Numbers" },
  { id: "v134", ko: "칠", rom: "chil", en: "seven (Sino-Korean)", ex: "칠 월에 여행해요.", exEn: "I travel in July.", cat: "Numbers" },
  { id: "v135", ko: "팔", rom: "pal", en: "eight (Sino-Korean)", ex: "팔 번 버스를 타요.", exEn: "I take bus number eight.", cat: "Numbers" },
  { id: "v136", ko: "구", rom: "gu", en: "nine (Sino-Korean)", ex: "구 월에 시작해요.", exEn: "It starts in September.", cat: "Numbers" },
  { id: "v137", ko: "새벽", rom: "saebyeok", en: "dawn / early morning", ex: "새벽에 일어나요.", exEn: "I wake up at dawn.", cat: "Time" },
  { id: "v138", ko: "오전", rom: "ojeon", en: "morning / AM", ex: "오전에 수업이 있어요.", exEn: "I have class in the morning.", cat: "Time" },
  { id: "v139", ko: "오후", rom: "ohu", en: "afternoon / PM", ex: "오후에 만나요.", exEn: "Let's meet in the afternoon.", cat: "Time" },
  { id: "v140", ko: "밤", rom: "bam", en: "night", ex: "밤에 책을 읽어요.", exEn: "I read a book at night.", cat: "Time" },
  { id: "v141", ko: "주", rom: "ju", en: "week", ex: "일주일은 칠 일이에요.", exEn: "A week has seven days.", cat: "Time" },
  { id: "v142", ko: "달", rom: "dal", en: "month", ex: "한 달 동안 공부했어요.", exEn: "I studied for one month.", cat: "Time" },
  { id: "v143", ko: "년", rom: "nyeon", en: "year", ex: "일 년 동안 한국어를 공부했어요.", exEn: "I studied Korean for one year.", cat: "Time" },
  { id: "v144", ko: "요일", rom: "yoil", en: "day of the week", ex: "오늘은 무슨 요일이에요?", exEn: "What day of the week is today?", cat: "Time" },
  { id: "v145", ko: "휴일", rom: "hyuil", en: "holiday", ex: "휴일에는 집에서 쉬어요.", exEn: "I rest at home on holidays.", cat: "Time" },
  { id: "v146", ko: "평일", rom: "pyeongil", en: "weekday", ex: "평일에는 바빠요.", exEn: "I am busy on weekdays.", cat: "Time" },
  { id: "v147", ko: "나중", rom: "najung", en: "later", ex: "나중에 전화할게요.", exEn: "I'll call you later.", cat: "Time" },
  { id: "v148", ko: "먼저", rom: "meonjeo", en: "first / beforehand", ex: "제가 먼저 갈게요.", exEn: "I'll go first.", cat: "Time" },
  { id: "v149", ko: "쓰다", rom: "sseuda", en: "to write / use", ex: "편지를 써요.", exEn: "I write a letter.", cat: "Verbs" },
  { id: "v150", ko: "배우다", rom: "baeuda", en: "to learn", ex: "한국어를 배워요.", exEn: "I learn Korean.", cat: "Verbs" },
  { id: "v151", ko: "일하다", rom: "ilhada", en: "to work", ex: "회사에서 일해요.", exEn: "I work at a company.", cat: "Verbs" },
  { id: "v152", ko: "쉬다", rom: "swida", en: "to rest", ex: "주말에 쉬어요.", exEn: "I rest on the weekend.", cat: "Verbs" },
  { id: "v153", ko: "사다", rom: "sada", en: "to buy", ex: "책을 사요.", exEn: "I buy a book.", cat: "Verbs" },
  { id: "v154", ko: "팔다", rom: "palda", en: "to sell", ex: "가게에서 과일을 팔아요.", exEn: "I sell fruit at the store.", cat: "Verbs" },
  { id: "v155", ko: "만들다", rom: "mandeulda", en: "to make", ex: "김밥을 만들어요.", exEn: "I make gimbap.", cat: "Verbs" },
  { id: "v156", ko: "열다", rom: "yeolda", en: "to open", ex: "문을 열어요.", exEn: "I open the door.", cat: "Verbs" },
  { id: "v157", ko: "닫다", rom: "datda", en: "to close", ex: "창문을 닫아요.", exEn: "I close the window.", cat: "Verbs" },
  { id: "v158", ko: "기다리다", rom: "gidarida", en: "to wait", ex: "친구를 기다려요.", exEn: "I wait for my friend.", cat: "Verbs" },
  { id: "v159", ko: "찾다", rom: "chatda", en: "to find / look for", ex: "열쇠를 찾아요.", exEn: "I look for the key.", cat: "Verbs" },
  { id: "v160", ko: "덥다", rom: "deopda", en: "to be hot", ex: "오늘은 더워요.", exEn: "It is hot today.", cat: "Adjectives" },
  { id: "v161", ko: "춥다", rom: "chupda", en: "to be cold", ex: "겨울에는 추워요.", exEn: "It is cold in winter.", cat: "Adjectives" },
  { id: "v162", ko: "따뜻하다", rom: "ttatteuthada", en: "to be warm", ex: "날씨가 따뜻해요.", exEn: "The weather is warm.", cat: "Adjectives" },
  { id: "v163", ko: "시원하다", rom: "siwonhada", en: "to be cool / refreshing", ex: "바람이 시원해요.", exEn: "The wind is cool.", cat: "Adjectives" },
  { id: "v164", ko: "비싸다", rom: "bissada", en: "to be expensive", ex: "이 가방은 비싸요.", exEn: "This bag is expensive.", cat: "Adjectives" },
  { id: "v165", ko: "싸다", rom: "ssada", en: "to be cheap", ex: "이 책은 싸요.", exEn: "This book is cheap.", cat: "Adjectives" },
  { id: "v166", ko: "어렵다", rom: "eoryeopda", en: "to be difficult", ex: "한국어가 어려워요.", exEn: "Korean is difficult.", cat: "Adjectives" },
  { id: "v167", ko: "쉽다", rom: "swipda", en: "to be easy", ex: "이 문제는 쉬워요.", exEn: "This question is easy.", cat: "Adjectives" },
  { id: "v168", ko: "재미있다", rom: "jaemiitda", en: "to be interesting / fun", ex: "영화가 재미있어요.", exEn: "The movie is interesting.", cat: "Adjectives" },
  { id: "v169", ko: "재미없다", rom: "jaemieopda", en: "to be boring / not fun", ex: "그 영화는 재미없어요.", exEn: "That movie is boring.", cat: "Adjectives" },
  { id: "v170", ko: "바쁘다", rom: "bappeuda", en: "to be busy", ex: "오늘은 바빠요.", exEn: "I am busy today.", cat: "Adjectives" },
  { id: "v171", ko: "한가하다", rom: "hangahada", en: "to be free / not busy", ex: "주말에는 한가해요.", exEn: "I am free on weekends.", cat: "Adjectives" },
  { id: "v172", ko: "피곤하다", rom: "pigonhada", en: "to be tired", ex: "오늘 너무 피곤해요.", exEn: "I am very tired today.", cat: "Adjectives" },
  { id: "v173", ko: "건강하다", rom: "geonganghada", en: "to be healthy", ex: "저는 건강해요.", exEn: "I am healthy.", cat: "Adjectives" },
  { id: "v174", ko: "가방", rom: "gabang", en: "bag", ex: "가방이 무거워요.", exEn: "The bag is heavy.", cat: "Objects" },
  { id: "v175", ko: "연필", rom: "yeonpil", en: "pencil", ex: "연필로 써요.", exEn: "I write with a pencil.", cat: "Objects" },
  { id: "v176", ko: "펜", rom: "pen", en: "pen", ex: "펜을 빌려 주세요.", exEn: "Please lend me a pen.", cat: "Objects" },
  { id: "v177", ko: "공책", rom: "gongchaek", en: "notebook", ex: "공책에 이름을 써요.", exEn: "I write my name in the notebook.", cat: "Objects" },
  { id: "v178", ko: "의자", rom: "uija", en: "chair", ex: "의자에 앉아요.", exEn: "I sit on a chair.", cat: "Objects" },
  { id: "v179", ko: "책상", rom: "chaeksang", en: "desk", ex: "책상 위에 책이 있어요.", exEn: "There is a book on the desk.", cat: "Objects" },
  { id: "v180", ko: "문", rom: "mun", en: "door", ex: "문을 열어요.", exEn: "I open the door.", cat: "Objects" },
  { id: "v181", ko: "창문", rom: "changmun", en: "window", ex: "창문을 닫아요.", exEn: "I close the window.", cat: "Objects" },
  { id: "v182", ko: "휴대폰", rom: "hyudaepon", en: "mobile phone", ex: "휴대폰을 사용해요.", exEn: "I use a mobile phone.", cat: "Objects" },
  { id: "v183", ko: "열쇠", rom: "yeolsoe", en: "key", ex: "열쇠를 찾고 있어요.", exEn: "I am looking for the key.", cat: "Objects" },
  { id: "v184", ko: "우산", rom: "usan", en: "umbrella", ex: "비가 와서 우산을 써요.", exEn: "It is raining, so I use an umbrella.", cat: "Objects" },
  { id: "v185", ko: "시계", rom: "sigye", en: "clock / watch", ex: "시계를 봐요.", exEn: "I look at the clock.", cat: "Objects" },
  { id: "v186", ko: "안경", rom: "angyeong", en: "glasses", ex: "안경을 써요.", exEn: "I wear glasses.", cat: "Objects" },
  { id: "v187", ko: "지갑", rom: "jigap", en: "wallet", ex: "지갑을 잃어버렸어요.", exEn: "I lost my wallet.", cat: "Objects" },
  { id: "v188", ko: "사진기", rom: "sajingi", en: "camera", ex: "사진기로 사진을 찍어요.", exEn: "I take photos with a camera.", cat: "Objects" },
  { id: "v189", ko: "컵", rom: "keop", en: "cup", ex: "컵에 물이 있어요.", exEn: "There is water in the cup.", cat: "Objects" },
  { id: "v190", ko: "접시", rom: "jeopsi", en: "plate", ex: "접시에 음식을 담아요.", exEn: "I put food on the plate.", cat: "Objects" },
  { id: "v191", ko: "단어", rom: "daneo", en: "word", ex: "새 단어를 배워요.", exEn: "I learn a new word.", cat: "Language" },
  { id: "v192", ko: "문장", rom: "munjang", en: "sentence", ex: "문장을 읽어요.", exEn: "I read the sentence.", cat: "Language" },
  { id: "v193", ko: "문법", rom: "munbeop", en: "grammar", ex: "한국어 문법을 공부해요.", exEn: "I study Korean grammar.", cat: "Language" },
  { id: "v194", ko: "발음", rom: "bareum", en: "pronunciation", ex: "발음을 연습해요.", exEn: "I practice pronunciation.", cat: "Language" },
  { id: "v195", ko: "뜻", rom: "tteut", en: "meaning", ex: "이 단어의 뜻이 뭐예요?", exEn: "What does this word mean?", cat: "Language" },
  { id: "v196", ko: "질문", rom: "jilmun", en: "question", ex: "질문이 있어요.", exEn: "I have a question.", cat: "Language" },
  { id: "v197", ko: "대답", rom: "daedap", en: "answer", ex: "질문에 대답해요.", exEn: "I answer the question.", cat: "Language" },
  { id: "v198", ko: "말", rom: "mal", en: "speech / words", ex: "천천히 말해 주세요.", exEn: "Please speak slowly.", cat: "Language" },
  { id: "v199", ko: "이야기", rom: "iyagi", en: "story / conversation", ex: "친구와 이야기를 해요.", exEn: "I have a conversation with my friend.", cat: "Language" },
  { id: "v200", ko: "대화", rom: "daehwa", en: "conversation", ex: "한국어로 대화해요.", exEn: "I have a conversation in Korean.", cat: "Language" },
  { id: "v201", ko: "소리", rom: "sori", en: "sound", ex: "큰 소리가 들려요.", exEn: "I hear a loud sound.", cat: "Language" },
  { id: "v202", ko: "글", rom: "geul", en: "writing / text", ex: "글을 읽어요.", exEn: "I read the text.", cat: "Language" },
  { id: "v203", ko: "일본어", rom: "ilboneo", en: "Japanese language", ex: "일본어로 말해 주세요.", exEn: "Please speak in Japanese.", cat: "Language" },
  { id: "v204", ko: "중국어", rom: "junggugeo", en: "Chinese language", ex: "중국어로 설명해 주세요.", exEn: "Please explain it in Chinese.", cat: "Language" },
  { id: "v205", ko: "번역", rom: "beonyeok", en: "translation", ex: "이 문장을 번역해 주세요.", exEn: "Please translate this sentence.", cat: "Language" },
  { id: "v206", ko: "설명", rom: "seolmyeong", en: "explanation", ex: "문법을 설명해 주세요.", exEn: "Please explain the grammar.", cat: "Language" },
  { id: "v207", ko: "표현", rom: "pyohyeon", en: "expression / phrase", ex: "새로운 표현을 배웠어요.", exEn: "I learned a new expression.", cat: "Language" },
  { id: "v208", ko: "대화하다", rom: "daehwahada", en: "to converse", ex: "친구와 한국어로 대화해요.", exEn: "I converse with my friend in Korean.", cat: "Language" },
  { id: "v209", ko: "하늘", rom: "haneul", en: "sky", ex: "하늘이 맑아요.", exEn: "The sky is clear.", cat: "Nature" },
  { id: "v210", ko: "구름", rom: "gureum", en: "cloud", ex: "구름이 많아요.", exEn: "There are many clouds.", cat: "Nature" },
  { id: "v211", ko: "바람", rom: "baram", en: "wind", ex: "바람이 불어요.", exEn: "The wind is blowing.", cat: "Nature" },
  { id: "v212", ko: "해", rom: "hae", en: "sun", ex: "해가 떠요.", exEn: "The sun rises.", cat: "Nature" },
  { id: "v213", ko: "달빛", rom: "dalbit", en: "moonlight", ex: "달빛이 아름다워요.", exEn: "The moonlight is beautiful.", cat: "Nature" },
  { id: "v214", ko: "별", rom: "byeol", en: "star", ex: "밤에 별을 봐요.", exEn: "I see stars at night.", cat: "Nature" },
  { id: "v215", ko: "꽃", rom: "kkot", en: "flower", ex: "꽃이 예뻐요.", exEn: "The flower is pretty.", cat: "Nature" },
  { id: "v216", ko: "나무", rom: "namu", en: "tree", ex: "공원에 나무가 많아요.", exEn: "There are many trees in the park.", cat: "Nature" },
  { id: "v217", ko: "산", rom: "san", en: "mountain", ex: "주말에 산에 가요.", exEn: "I go to the mountain on the weekend.", cat: "Nature" },
  { id: "v218", ko: "바다", rom: "bada", en: "sea", ex: "여름에 바다에 가요.", exEn: "I go to the sea in summer.", cat: "Nature" },
  { id: "v219", ko: "강", rom: "gang", en: "river", ex: "강 옆을 걸어요.", exEn: "I walk beside the river.", cat: "Nature" },
  { id: "v220", ko: "호수", rom: "hosu", en: "lake", ex: "호수가 정말 아름다워요.", exEn: "The lake is really beautiful.", cat: "Nature" },
  { id: "v221", ko: "숲", rom: "sup", en: "forest", ex: "숲에서 산책해요.", exEn: "I take a walk in the forest.", cat: "Nature" },
  { id: "v222", ko: "꽃잎", rom: "kkotip", en: "flower petal", ex: "꽃잎이 떨어져요.", exEn: "Flower petals are falling.", cat: "Nature" },
  { id: "v223", ko: "번개", rom: "beongae", en: "lightning", ex: "번개가 쳐요.", exEn: "There is lightning.", cat: "Nature" },
  { id: "v224", ko: "천둥", rom: "cheondung", en: "thunder", ex: "천둥 소리가 커요.", exEn: "The sound of thunder is loud.", cat: "Nature" },
  { id: "v225", ko: "태풍", rom: "taepung", en: "typhoon", ex: "태풍이 오고 있어요.", exEn: "A typhoon is coming.", cat: "Nature" },
  { id: "v226", ko: "노래", rom: "norae", en: "song", ex: "좋아하는 노래를 들어요.", exEn: "I listen to my favorite song.", cat: "Entertainment" },
  { id: "v227", ko: "가수", rom: "gasu", en: "singer", ex: "그 가수를 좋아해요.", exEn: "I like that singer.", cat: "Entertainment" },
  { id: "v228", ko: "드라마", rom: "deurama", en: "drama / TV series", ex: "한국 드라마를 봐요.", exEn: "I watch Korean dramas.", cat: "Entertainment" },
  { id: "v229", ko: "게임", rom: "geim", en: "game", ex: "친구와 게임을 해요.", exEn: "I play games with my friend.", cat: "Entertainment" },
  { id: "v230", ko: "음악회", rom: "eumakhoe", en: "concert", ex: "주말에 음악회에 가요.", exEn: "I go to a concert on the weekend.", cat: "Entertainment" },
  { id: "v231", ko: "콘서트", rom: "konseoteu", en: "concert", ex: "콘서트에 가고 싶어요.", exEn: "I want to go to a concert.", cat: "Entertainment" },
  { id: "v232", ko: "배우", rom: "baeu", en: "actor / actress", ex: "그 배우가 유명해요.", exEn: "That actor is famous.", cat: "Entertainment" },
  { id: "v233", ko: "만화", rom: "manhwa", en: "comic", ex: "만화를 읽어요.", exEn: "I read comics.", cat: "Entertainment" },
  { id: "v234", ko: "웹툰", rom: "webtun", en: "webtoon", ex: "웹툰을 자주 봐요.", exEn: "I often read webtoons.", cat: "Entertainment" },
  { id: "v235", ko: "책장", rom: "chaekjang", en: "bookshelf", ex: "책장에 만화책이 있어요.", exEn: "There are comic books on the bookshelf.", cat: "Entertainment" },
  { id: "v236", ko: "춤", rom: "chum", en: "dance", ex: "춤을 배워요.", exEn: "I learn dance.", cat: "Entertainment" },
  { id: "v237", ko: "노래방", rom: "noraebang", en: "karaoke room", ex: "친구와 노래방에 가요.", exEn: "I go to karaoke with my friend.", cat: "Entertainment" },
  { id: "v238", ko: "공연", rom: "gongyeon", en: "performance", ex: "공연을 보러 가요.", exEn: "I go to see a performance.", cat: "Entertainment" },
  { id: "v239", ko: "관객", rom: "gwangaek", en: "audience member", ex: "관객이 많아요.", exEn: "There are many audience members.", cat: "Entertainment" },
  { id: "v240", ko: "취미", rom: "chwimi", en: "hobby", ex: "제 취미는 음악 감상이에요.", exEn: "My hobby is listening to music.", cat: "Entertainment" },
  { id: "v241", ko: "독서", rom: "dokseo", en: "reading", ex: "주말에 독서를 해요.", exEn: "I read on weekends.", cat: "Entertainment" },
  { id: "v242", ko: "미술", rom: "misul", en: "art", ex: "미술을 좋아해요.", exEn: "I like art.", cat: "Entertainment" },
  { id: "v243", ko: "그림", rom: "geurim", en: "drawing / picture", ex: "그림을 그려요.", exEn: "I draw a picture.", cat: "Entertainment" },
  { id: "v244", ko: "산책", rom: "sanchaek", en: "walk / stroll", ex: "공원에서 산책해요.", exEn: "I take a walk in the park.", cat: "Activities" },
  { id: "v245", ko: "쇼핑", rom: "syoping", en: "shopping", ex: "주말에 쇼핑해요.", exEn: "I go shopping on the weekend.", cat: "Activities" },
  { id: "v246", ko: "요리", rom: "yori", en: "cooking", ex: "요리를 좋아해요.", exEn: "I like cooking.", cat: "Activities" },
  { id: "v247", ko: "수영", rom: "suyeong", en: "swimming", ex: "여름에 수영을 해요.", exEn: "I swim in summer.", cat: "Activities" },
  { id: "v248", ko: "축구", rom: "chukgu", en: "soccer", ex: "친구와 축구를 해요.", exEn: "I play soccer with my friend.", cat: "Activities" },
  { id: "v249", ko: "농구", rom: "nonggu", en: "basketball", ex: "농구를 좋아해요.", exEn: "I like basketball.", cat: "Activities" },
  { id: "v250", ko: "달리기", rom: "dalligi", en: "running", ex: "아침에 달리기를 해요.", exEn: "I run in the morning.", cat: "Activities" },
  { id: "v251", ko: "등산", rom: "deungsan", en: "hiking", ex: "주말에 등산을 가요.", exEn: "I go hiking on the weekend.", cat: "Activities" },
  { id: "v252", ko: "캠핑", rom: "kaemping", en: "camping", ex: "여름에 캠핑을 가요.", exEn: "I go camping in summer.", cat: "Activities" },
  { id: "v253", ko: "사진 찍기", rom: "sajin jjikgi", en: "taking photos", ex: "여행하면서 사진 찍기를 좋아해요.", exEn: "I like taking photos while traveling.", cat: "Activities" },
  { id: "v254", ko: "청소", rom: "cheongso", en: "cleaning", ex: "아침에 방을 청소해요.", exEn: "I clean my room in the morning.", cat: "Activities" },
  { id: "v255", ko: "운전", rom: "unjeon", en: "driving", ex: "운전을 배워요.", exEn: "I learn to drive.", cat: "Activities" },
  { id: "v256", ko: "공부", rom: "gongbu", en: "study / studying", ex: "한국어 공부를 해요.", exEn: "I study Korean.", cat: "Activities" },
  { id: "v257", ko: "회의", rom: "hoeui", en: "meeting", ex: "오후에 회의가 있어요.", exEn: "I have a meeting in the afternoon.", cat: "Activities" },
  { id: "v258", ko: "준비", rom: "junbi", en: "preparation", ex: "시험을 준비해요.", exEn: "I prepare for the exam.", cat: "Activities" },
  { id: "v259", ko: "연습", rom: "yeonseup", en: "practice", ex: "매일 한국어를 연습해요.", exEn: "I practice Korean every day.", cat: "Activities" },
  { id: "v260", ko: "운동하기", rom: "undonghagi", en: "exercising", ex: "매일 운동하기를 좋아해요.", exEn: "I like exercising every day.", cat: "Activities" },
  { id: "v261", ko: "여가", rom: "yeoga", en: "leisure", ex: "여가 시간에 영화를 봐요.", exEn: "I watch movies during my leisure time.", cat: "Activities" },
  { id: "v262", ko: "컴퓨터", rom: "keompyuteo", en: "computer", ex: "컴퓨터로 공부해요.", exEn: "I study using a computer.", cat: "Software & Technology" },
  { id: "v263", ko: "프로그램", rom: "peurogeuraem", en: "program", ex: "새 프로그램을 만들어요.", exEn: "I make a new program.", cat: "Software & Technology" },
  { id: "v264", ko: "소프트웨어", rom: "sopeuteuweeo", en: "software", ex: "소프트웨어를 개발해요.", exEn: "I develop software.", cat: "Software & Technology" },
  { id: "v265", ko: "하드웨어", rom: "hadeuweeo", en: "hardware", ex: "하드웨어를 공부해요.", exEn: "I study hardware.", cat: "Software & Technology" },
  { id: "v266", ko: "코드", rom: "kodeu", en: "code", ex: "코드를 작성해요.", exEn: "I write code.", cat: "Software & Technology" },
  { id: "v267", ko: "코딩", rom: "koding", en: "coding", ex: "매일 코딩을 연습해요.", exEn: "I practice coding every day.", cat: "Software & Technology" },
  { id: "v268", ko: "개발", rom: "gaebal", en: "development", ex: "소프트웨어 개발을 공부해요.", exEn: "I study software development.", cat: "Software & Technology" },
  { id: "v269", ko: "개발자", rom: "gaebalja", en: "developer", ex: "저는 소프트웨어 개발자가 되고 싶어요.", exEn: "I want to become a software developer.", cat: "Software & Technology" },
  { id: "v270", ko: "웹사이트", rom: "websaiteu", en: "website", ex: "웹사이트를 만들어요.", exEn: "I make a website.", cat: "Software & Technology" },
  { id: "v271", ko: "인터넷", rom: "inteonet", en: "internet", ex: "인터넷을 사용해요.", exEn: "I use the internet.", cat: "Software & Technology" },
  { id: "v272", ko: "데이터", rom: "deiteo", en: "data", ex: "데이터를 분석해요.", exEn: "I analyze data.", cat: "Software & Technology" },
  { id: "v273", ko: "서버", rom: "seobeo", en: "server", ex: "서버에 데이터를 저장해요.", exEn: "I store data on the server.", cat: "Software & Technology" },
  { id: "v274", ko: "파일", rom: "pail", en: "file", ex: "파일을 저장해요.", exEn: "I save the file.", cat: "Software & Technology" },
  { id: "v275", ko: "폴더", rom: "poldeo", en: "folder", ex: "새 폴더를 만들어요.", exEn: "I create a new folder.", cat: "Software & Technology" },
  { id: "v276", ko: "앱", rom: "aep", en: "app", ex: "새 앱을 다운로드했어요.", exEn: "I downloaded a new app.", cat: "Software & Technology" },
  { id: "v277", ko: "다운로드", rom: "dauneullodeu", en: "download", ex: "파일을 다운로드해요.", exEn: "I download the file.", cat: "Software & Technology" },
  { id: "v278", ko: "업데이트", rom: "eopdeiteu", en: "update", ex: "프로그램을 업데이트해요.", exEn: "I update the program.", cat: "Software & Technology" },
  { id: "v279", ko: "비밀번호", rom: "bimilbeonho", en: "password", ex: "비밀번호를 입력하세요.", exEn: "Please enter your password.", cat: "Software & Technology" },
  { id: "v280", ko: "로그인", rom: "rogeuin", en: "login", ex: "웹사이트에 로그인해요.", exEn: "I log in to the website.", cat: "Software & Technology" },
  { id: "v281", ko: "버그", rom: "beogeu", en: "bug", ex: "프로그램에서 버그를 찾았어요.", exEn: "I found a bug in the program.", cat: "Software & Technology" },
  { id: "v282", ko: "십", rom: "ship", en: "ten (Sino-Korean)", ex: "십분 남았습니다.", exEn: "Ten minutes left.", cat: "Numbers" },
];

/* ===================== Hangul Learning Data ===================== */

const HANGUL = [
  /* ==================== CONSONANTS ==================== */

  {
    id: "h_giyeok",
    character: "ㄱ",
    type: "Consonant",
    name: "기역",
    sound: "G / K",
    rom: "g / k",
    memory: "🔫 Gun",
    story: "You start the story by pointing a GUN.",
    example: "가",
    exampleRom: "ga",
    exampleMeaning: "go / syllable example"
  },

  {
    id: "h_nieun",
    character: "ㄴ",
    type: "Consonant",
    name: "니은",
    sound: "N",
    rom: "n",
    memory: "👃 Nose",
    story: "You smell something bad with your NOSE.",
    example: "나",
    exampleRom: "na",
    exampleMeaning: "I / me (informal)"
  },

  {
    id: "h_digeut",
    character: "ㄷ",
    type: "Consonant",
    name: "디귿",
    sound: "D / T",
    rom: "d / t",
    memory: "🚪 Door",
    story: "You open a DOOR to see what is making the strange smell.",
    example: "다",
    exampleRom: "da",
    exampleMeaning: "syllable example"
  },

  {
    id: "h_rieul",
    character: "ㄹ",
    type: "Consonant",
    name: "리을",
    sound: "R / L",
    rom: "r / l",
    memory: "🐍 Rattlesnake",
    story: "Behind the door, you find a slithering RATTLESNAKE.",
    example: "라",
    exampleRom: "ra",
    exampleMeaning: "syllable example"
  },

  {
    id: "h_mieum",
    character: "ㅁ",
    type: "Consonant",
    name: "미음",
    sound: "M",
    rom: "m",
    memory: "👄 Mouth",
    story: "Your MOUTH opens wide in shock when you see the snake.",
    example: "마",
    exampleRom: "ma",
    exampleMeaning: "syllable example"
  },

  {
    id: "h_bieup",
    character: "ㅂ",
    type: "Consonant",
    name: "비읍",
    sound: "B / P",
    rom: "b / p",
    memory: "🪣 Bucket",
    story: "You grab a BUCKET and try to trap the snake.",
    example: "바",
    exampleRom: "ba",
    exampleMeaning: "syllable example"
  },

  {
    id: "h_siot",
    character: "ㅅ",
    type: "Consonant",
    name: "시옷",
    sound: "S",
    rom: "s",
    memory: "⛰️ Summit",
    story: "You fail to catch the snake, panic, and run to a mountain SUMMIT.",
    example: "사",
    exampleRom: "sa",
    exampleMeaning: "four / syllable example"
  },

  {
    id: "h_ieung",
    character: "ㅇ",
    type: "Consonant",
    name: "이응",
    sound: "NG / silent",
    rom: "ng",
    memory: "⭕ Nothing",
    story: "At the top of the mountain, you look around and find NOTHING.",
    example: "아",
    exampleRom: "a",
    exampleMeaning: "syllable example"
  },

  {
    id: "h_jieut",
    character: "ㅈ",
    type: "Consonant",
    name: "지읒",
    sound: "J",
    rom: "j",
    memory: "🦘 Jump",
    story: "You panic and decide to JUMP off the mountain.",
    example: "자",
    exampleRom: "ja",
    exampleMeaning: "sleep / syllable example"
  },

  {
    id: "h_chieut",
    character: "ㅊ",
    type: "Consonant",
    name: "치읓",
    sound: "CH",
    rom: "ch",
    memory: "🏆 Champion",
    story: "You land safely and become a triumphant CHAMPION.",
    example: "차",
    exampleRom: "cha",
    exampleMeaning: "car / tea"
  },

  {
    id: "h_kieuk",
    character: "ㅋ",
    type: "Consonant",
    name: "키읔",
    sound: "K",
    rom: "k",
    memory: "🔫 Kill",
    story: "You go back and pull the trigger of your GUN to KILL the snake",
    example: "카",
    exampleRom: "ka",
    exampleMeaning: "syllable example"
  },

  {
    id: "h_tigeut",
    character: "ㅌ",
    type: "Consonant",
    name: "티읕",
    sound: "T",
    rom: "t",
    memory: "2️⃣ Two",
    story: "You miss and hit the DOOR, splitting it into TWO pieces.",
    example: "타",
    exampleRom: "ta",
    exampleMeaning: "syllable example"
  },

  {
    id: "h_pieup",
    character: "ㅍ",
    type: "Consonant",
    name: "피읖",
    sound: "P",
    rom: "p",
    memory: "🏛️ Pillars",
    story: "You try to pull a Samson and push down the house PILLARS.",
    example: "파",
    exampleRom: "pa",
    exampleMeaning: "green onion / syllable example"
  },

  {
    id: "h_hieuh",
    character: "ㅎ",
    type: "Consonant",
    name: "히읗",
    sound: "H",
    rom: "h",
    memory: "🎩 Hat",
    story: "A mysterious man wearing a HAT appears to congratulate you.",
    example: "하",
    exampleRom: "ha",
    exampleMeaning: "syllable example"
  },

  /* ==================== VOWELS ==================== */

  {
    id: "h_a",
    character: "ㅏ",
    type: "Vowel",
    name: "아",
    sound: "A",
    rom: "a",
    memory: "👉 A / Right",
    story: "Imagine a person standing straight. The short line points RIGHT — ㅏ is A.",
    example: "아",
    exampleRom: "a",
    exampleMeaning: "ah!"
  },

  {
    id: "h_ae",
    character: "ㅐ",
    type: "Vowel",
    name: "애",
    sound: "AE",
    rom: "ae",
    memory: "👉👉 A + E",
    story: "ㅐ looks like ㅏ with an extra line. Think A + E.",
    example: "애",
    exampleRom: "ae",
    exampleMeaning: "child (애)"
  },

  {
    id: "h_ya",
    character: "ㅑ",
    type: "Vowel",
    name: "야",
    sound: "YA",
    rom: "ya",
    memory: "👉👉 YA",
    story: "ㅑ is ㅏ with TWO short lines. Think: A becomes YA.",
    example: "야",
    exampleRom: "ya",
    exampleMeaning: "hey! / informal calling"
  },

  {
    id: "h_yae",
    character: "ㅒ",
    type: "Vowel",
    name: "얘",
    sound: "YAE",
    rom: "yae",
    memory: "👉👉👉 YA + E",
    story: "ㅒ is ㅐ with two short lines, giving it the Y sound: YAE.",
    example: "얘",
    exampleRom: "yae",
    exampleMeaning: "this child / this person"
  },

  {
    id: "h_eo",
    character: "ㅓ",
    type: "Vowel",
    name: "어",
    sound: "EO",
    rom: "eo",
    memory: "👈 EO / Left",
    story: "The short line points LEFT. Think of ㅓ as the opposite direction of ㅏ.",
    example: "어",
    exampleRom: "eo",
    exampleMeaning: "uh!"
  },

  {
    id: "h_e",
    character: "ㅔ",
    type: "Vowel",
    name: "에",
    sound: "E",
    rom: "e",
    memory: "👈 E",
    story: "ㅔ is ㅓ with an extra line. Think E.",
    example: "에",
    exampleRom: "e",
    exampleMeaning: "at / to"
  },

  {
    id: "h_yeo",
    character: "ㅕ",
    type: "Vowel",
    name: "여",
    sound: "YEO",
    rom: "yeo",
    memory: "👈👈 YEO",
    story: "ㅕ is ㅓ with TWO short lines. Add Y to EO → YEO.",
    example: "여",
    exampleRom: "yeo",
    exampleMeaning: "syllable example"
  },

  {
    id: "h_ye",
    character: "ㅖ",
    type: "Vowel",
    name: "예",
    sound: "YE",
    rom: "ye",
    memory: "👈👈 YE",
    story: "ㅖ is ㅔ with TWO short lines. Add Y to E → YE.",
    example: "예",
    exampleRom: "ye",
    exampleMeaning: "yes / example syllable"
  },

  {
    id: "h_o",
    character: "ㅗ",
    type: "Vowel",
    name: "오",
    sound: "O",
    rom: "o",
    memory: "⬆️ O / Up",
    story: "The short line points UP. Remember: ㅗ = O goes UP.",
    example: "오",
    exampleRom: "o",
    exampleMeaning: "five / syllable example"
  },

  {
    id: "h_u",
    character: "ㅜ",
    type: "Vowel",
    name: "우",
    sound: "U",
    rom: "u",
    memory: "⬇️ U / Down",
    story: "The short line points DOWN. Remember: ㅜ = U goes DOWN.",
    example: "우",
    exampleRom: "u",
    exampleMeaning: "milk / syllable example"
  },

  {
    id: "h_eu",
    character: "ㅡ",
    type: "Vowel",
    name: "으",
    sound: "EU",
    rom: "eu",
    memory: "➖ Flat",
    story: "ㅡ is completely flat. Keep your mouth relaxed and think of a flat EU sound.",
    example: "으",
    exampleRom: "eu",
    exampleMeaning: "syllable example"
  },

  {
    id: "h_i",
    character: "ㅣ",
    type: "Vowel",
    name: "이",
    sound: "I",
    rom: "i",
    memory: "🧍 Standing",
    story: "ㅣ looks like a person standing straight. Think I = standing.",
    example: "이",
    exampleRom: "i",
    exampleMeaning: "this / tooth / two (depending on context)"
  },

  /* ==================== COMPOUND VOWELS ==================== */

  {
    id: "h_wa",
    character: "ㅘ",
    type: "Vowel",
    name: "와",
    sound: "WA",
    rom: "wa",
    memory: "ㅗ + ㅏ",
    story: "Combine O (ㅗ) + A (ㅏ) → WA.",
    example: "와",
    exampleRom: "wa",
    exampleMeaning: "wow! / and"
  },

  {
    id: "h_wae",
    character: "ㅙ",
    type: "Vowel",
    name: "왜",
    sound: "WAE",
    rom: "wae",
    memory: "ㅗ + ㅐ",
    story: "Combine O (ㅗ) + AE (ㅐ) → WAE.",
    example: "왜",
    exampleRom: "wae",
    exampleMeaning: "why"
  },

  {
    id: "h_oe",
    character: "ㅚ",
    type: "Vowel",
    name: "외",
    sound: "OE / WE",
    rom: "oe / we",
    memory: "ㅗ + ㅣ",
    story: "Combine O (ㅗ) + I (ㅣ) → OE, commonly pronounced close to WE.",
    example: "외",
    exampleRom: "oe",
    exampleMeaning: "outside / example syllable"
  },

  {
    id: "h_wo",
    character: "ㅝ",
    type: "Vowel",
    name: "워",
    sound: "WO",
    rom: "wo",
    memory: "ㅜ + ㅓ",
    story: "Combine U (ㅜ) + EO (ㅓ) → WO.",
    example: "워",
    exampleRom: "wo",
    exampleMeaning: "syllable example"
  },

  {
    id: "h_we",
    character: "ㅞ",
    type: "Vowel",
    name: "웨",
    sound: "WE",
    rom: "we",
    memory: "ㅜ + ㅔ",
    story: "Combine U (ㅜ) + E (ㅔ) → WE.",
    example: "웨",
    exampleRom: "we",
    exampleMeaning: "syllable example"
  },

  {
    id: "h_wi",
    character: "ㅟ",
    type: "Vowel",
    name: "위",
    sound: "WI",
    rom: "wi",
    memory: "ㅜ + ㅣ",
    story: "Combine U (ㅜ) + I (ㅣ) → WI.",
    example: "위",
    exampleRom: "wi",
    exampleMeaning: "above / on"
  },

  {
    id: "h_ui",
    character: "ㅢ",
    type: "Vowel",
    name: "의",
    sound: "UI",
    rom: "ui",
    memory: "ㅡ + ㅣ",
    story: "Combine EU (ㅡ) + I (ㅣ) → UI.",
    example: "의",
    exampleRom: "ui",
    exampleMeaning: "of / possessive marker"
  }
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

  {
    id: "g9", level: "Beginner", pattern: "에 (location / destination)",
    meaning: "marks a destination, location, or specific time",
    explanation: "에 is commonly used after a place to show where someone goes or is, and after a time expression.",
    examples: [
      { ko: "학교에 가요.", en: "I go to school." },
      { ko: "집에 있어요.", en: "I am at home." },
    ],
    practice: { type: "fill", prompt: "학교___ 가요.", answer: "에", options: ["에", "에서", "을", "는"] },
  },
  {
    id: "g10", level: "Beginner", pattern: "에서 (place of action)",
    meaning: "marks the place where an action occurs",
    explanation: "에서 is used after a location where an activity or action takes place.",
    examples: [
      { ko: "학교에서 공부해요.", en: "I study at school." },
      { ko: "공원에서 운동해요.", en: "I exercise at the park." },
    ],
    practice: { type: "fill", prompt: "도서관___ 책을 읽어요.", answer: "에서", options: ["에서", "에", "을", "가"] },
  },
  {
    id: "g11", level: "Beginner", pattern: "도 (also / too)",
    meaning: "means also, too, or as well",
    explanation: "도 replaces particles such as 은/는, 이/가, and 을/를 when expressing the meaning 'also' or 'too'.",
    examples: [
      { ko: "저도 학생이에요.", en: "I am also a student." },
      { ko: "커피도 마셔요.", en: "I also drink coffee." },
    ],
    practice: { type: "fill", prompt: "저___ 한국어를 공부해요. (also)", answer: "도", options: ["도", "는", "가", "를"] },
  },
  {
    id: "g12", level: "Beginner", pattern: "와/과, 하고, (이)랑",
    meaning: "and / with",
    explanation: "These forms can connect nouns or express doing something with someone. 와/과 is more formal, while 하고 and 이랑/랑 are common in conversation.",
    examples: [
      { ko: "친구와 영화를 봐요.", en: "I watch a movie with a friend." },
      { ko: "밥하고 김치를 먹어요.", en: "I eat rice and kimchi." },
    ],
    practice: { type: "mc", prompt: "Which can mean 'with a friend'?", answer: "친구와", options: ["친구와", "친구를", "친구가", "친구에"] },
  },
  {
    id: "g13", level: "Beginner", pattern: "있다 / 없다",
    meaning: "to have / exist and to not have / not exist",
    explanation: "있다 expresses existence or possession, while 없다 expresses non-existence or lack of something.",
    examples: [
      { ko: "시간이 있어요.", en: "I have time." },
      { ko: "돈이 없어요.", en: "I don't have money." },
    ],
    practice: { type: "mc", prompt: "'I don't have time' is:", answer: "시간이 없어요.", options: ["시간이 없어요.", "시간이 있어요.", "시간을 없어요.", "시간은 가요."] },
  },
  {
    id: "g14", level: "Beginner", pattern: "안 + Verb/Adjective",
    meaning: "simple negation",
    explanation: "Place 안 before a verb or adjective to make a simple negative statement.",
    examples: [
      { ko: "학교에 안 가요.", en: "I don't go to school." },
      { ko: "커피를 안 마셔요.", en: "I don't drink coffee." },
    ],
    practice: { type: "fill", prompt: "저는 커피를 ___ 마셔요.", answer: "안", options: ["안", "못", "도", "더"] },
  },
  {
    id: "g15", level: "Beginner", pattern: "못 + Verb",
    meaning: "cannot / be unable to",
    explanation: "못 is placed before a verb to express inability or inability due to circumstances.",
    examples: [
      { ko: "한국어를 못 해요.", en: "I can't speak Korean." },
      { ko: "오늘 못 가요.", en: "I can't go today." },
    ],
    practice: { type: "mc", prompt: "'I can't go today' is:", answer: "오늘 못 가요.", options: ["오늘 못 가요.", "오늘 안 가요.", "오늘도 가요.", "오늘 가고 싶어요."] },
  },
  {
    id: "g16", level: "Intermediate", pattern: "~아/어서",
    meaning: "because / so / and then",
    explanation: "아/어서 connects related clauses and can express a reason, result, or sequence of actions.",
    examples: [
      { ko: "배가 아파서 병원에 가요.", en: "My stomach hurts, so I go to the hospital." },
      { ko: "집에 와서 숙제를 해요.", en: "I come home and then do homework." },
    ],
    practice: { type: "mc", prompt: "'because I am tired' is:", answer: "피곤해서", options: ["피곤해서", "피곤하면", "피곤하지만", "피곤하고"] },
  },
  {
    id: "g17", level: "Intermediate", pattern: "~지만",
    meaning: "but / although",
    explanation: "지만 connects two contrasting ideas and can be translated as 'but' or 'although'.",
    examples: [
      { ko: "비가 오지만 학교에 가요.", en: "It is raining, but I go to school." },
      { ko: "작지만 예뻐요.", en: "It is small, but pretty." },
    ],
    practice: { type: "fill", prompt: "비가 오___ 학교에 가요.", answer: "지만", options: ["지만", "고", "면", "서"] },
  },
  {
    id: "g18", level: "Intermediate", pattern: "~기 때문에",
    meaning: "because / due to",
    explanation: "기 때문에 gives a clear reason for an action or situation. It is common in writing and more formal explanations.",
    examples: [
      { ko: "비가 오기 때문에 집에 있어요.", en: "I stay home because it is raining." },
      { ko: "시험이 있기 때문에 공부해요.", en: "I study because I have an exam." },
    ],
    practice: { type: "mc", prompt: "'because I have an exam' is:", answer: "시험이 있기 때문에", options: ["시험이 있기 때문에", "시험이 있으면", "시험이 있지만", "시험이 있고"] },
  },
  {
    id: "g19", level: "Intermediate", pattern: "~(으)ㄹ 수 있다/없다",
    meaning: "can / cannot",
    explanation: "This pattern expresses ability or possibility. Use 을 수 after a consonant and ㄹ 수 after a vowel.",
    examples: [
      { ko: "한국어를 읽을 수 있어요.", en: "I can read Korean." },
      { ko: "오늘 만날 수 없어요.", en: "I cannot meet today." },
    ],
    practice: { type: "mc", prompt: "'I can go' is:", answer: "갈 수 있어요", options: ["갈 수 있어요", "가고 싶어요", "가야 해요", "가면 돼요"] },
  },
  {
    id: "g20", level: "Intermediate", pattern: "~아/어야 하다",
    meaning: "must / have to",
    explanation: "This grammar pattern expresses obligation or necessity, meaning that someone must or has to do something.",
    examples: [
      { ko: "숙제를 해야 해요.", en: "I have to do my homework." },
      { ko: "학교에 가야 해요.", en: "I have to go to school." },
    ],
    practice: { type: "mc", prompt: "'I have to study' is:", answer: "공부해야 해요", options: ["공부해야 해요", "공부하고 싶어요", "공부할 수 있어요", "공부하지 않아요"] },
  },
  {
    id: "g21", level: "Beginner", pattern: "부터",
    meaning: "from / starting from",
    explanation: "부터 marks the starting point of an action, time, or place.",
    examples: [
      { ko: "아침부터 공부해요.", en: "I study from the morning." },
      { ko: "월요일부터 시작해요.", en: "I start from Monday." },
    ],
    practice: { type: "fill", prompt: "오늘___ 운동해요.", answer: "부터", options: ["부터", "까지", "에서", "에게"] },
  },
  {
    id: "g22", level: "Beginner", pattern: "까지",
    meaning: "until / up to / as far as",
    explanation: "까지 marks the endpoint of a time, place, or range.",
    examples: [
      { ko: "밤까지 공부해요.", en: "I study until night." },
      { ko: "학교까지 걸어가요.", en: "I walk as far as the school." },
    ],
    practice: { type: "fill", prompt: "5시___ 일해요.", answer: "까지", options: ["까지", "부터", "에서", "으로"] },
  },
  {
    id: "g23", level: "Beginner", pattern: "만",
    meaning: "only / just",
    explanation: "만 is attached to a noun to express the meaning 'only' or 'just'.",
    examples: [
      { ko: "물만 마셔요.", en: "I only drink water." },
      { ko: "오늘만 쉬어요.", en: "I rest only today." },
    ],
    practice: { type: "fill", prompt: "커피___ 마셔요.", answer: "만", options: ["만", "도", "는", "가"] },
  },
  {
    id: "g24", level: "Beginner", pattern: "의",
    meaning: "possessive / of",
    explanation: "의 connects two nouns to show possession or a relationship, similar to 'of' or apostrophe-s in English.",
    examples: [
      { ko: "제 친구의 책이에요.", en: "It is my friend's book." },
      { ko: "한국의 음식이에요.", en: "It is Korean food." },
    ],
    practice: { type: "fill", prompt: "민수___ 책이에요.", answer: "의", options: ["의", "가", "를", "에"] },
  },
  {
    id: "g25", level: "Beginner", pattern: "에게/한테",
    meaning: "to / from a person",
    explanation: "에게 and 한테 indicate the person who receives something or is the target of an action. 한테 is more conversational.",
    examples: [
      { ko: "친구에게 편지를 써요.", en: "I write a letter to my friend." },
      { ko: "선생님한테 질문해요.", en: "I ask the teacher a question." },
    ],
    practice: { type: "mc", prompt: "'to my friend' is:", answer: "친구에게", options: ["친구에게", "친구를", "친구가", "친구에서"] },
  },
  {
    id: "g26", level: "Beginner", pattern: "하고",
    meaning: "and / with",
    explanation: "하고 can connect nouns or indicate the person someone does something with. It is common in everyday Korean.",
    examples: [
      { ko: "친구하고 영화 봐요.", en: "I watch a movie with a friend." },
      { ko: "사과하고 바나나를 먹어요.", en: "I eat an apple and a banana." },
    ],
    practice: { type: "fill", prompt: "친구___ 같이 가요.", answer: "하고", options: ["하고", "에게", "에서", "까지"] },
  },
  {
    id: "g27", level: "Beginner", pattern: "~고 있다",
    meaning: "be doing / currently doing",
    explanation: "Attach 고 있다 to a verb stem to describe an action that is currently in progress.",
    examples: [
      { ko: "한국어를 공부하고 있어요.", en: "I am studying Korean." },
      { ko: "지금 책을 읽고 있어요.", en: "I am reading a book now." },
    ],
    practice: { type: "mc", prompt: "'I am eating' is:", answer: "먹고 있어요", options: ["먹고 있어요", "먹어 있어요", "먹고 싶어요", "먹을 거예요"] },
  },
  {
    id: "g28", level: "Beginner", pattern: "~(으)ㄹ 거예요",
    meaning: "will / be going to",
    explanation: "This pattern expresses a future plan, intention, or expectation. Use ㄹ 거예요 after a vowel and 을 거예요 after a consonant.",
    examples: [
      { ko: "내일 학교에 갈 거예요.", en: "I will go to school tomorrow." },
      { ko: "주말에 영화를 볼 거예요.", en: "I will watch a movie on the weekend." },
    ],
    practice: { type: "mc", prompt: "'I will study' is:", answer: "공부할 거예요", options: ["공부할 거예요", "공부하고 있어요", "공부해야 해요", "공부하고 싶어요"] },
  },
  {
    id: "g29", level: "Beginner", pattern: "그리고",
    meaning: "and / and then",
    explanation: "그리고 connects sentences or ideas and is commonly used to mean 'and' or 'and then'.",
    examples: [
      { ko: "밥을 먹어요. 그리고 커피를 마셔요.", en: "I eat a meal. And then I drink coffee." },
      { ko: "학교에 가요. 그리고 공부해요.", en: "I go to school. And then I study." },
    ],
    practice: { type: "mc", prompt: "Which word means 'and / and then'?", answer: "그리고", options: ["그리고", "하지만", "그래서", "왜"] },
  },
    {
    id: "g30", level: "Intermediate", pattern: "~(으)ㄴ/는 것 같다",
    meaning: "seem / appear / think that",
    explanation: "This pattern expresses an impression, guess, or uncertainty about something. The form changes depending on whether it follows a noun, adjective, or verb.",
    examples: [
      { ko: "비가 오는 것 같아요.", en: "It seems like it is raining." },
      { ko: "이 음식은 맛있는 것 같아요.", en: "I think this food is delicious." },
    ],
    practice: { type: "mc", prompt: "'It seems like it is raining' is:", answer: "비가 오는 것 같아요.", options: ["비가 오는 것 같아요.", "비가 오고 싶어요.", "비가 와야 해요.", "비가 오면 돼요."] },
  },
  {
    id: "g31", level: "Intermediate", pattern: "~(으)ㄹ 때",
    meaning: "when / while",
    explanation: "This pattern is attached to a verb or adjective to describe the time when something happens.",
    examples: [
      { ko: "학교에 갈 때 친구를 만나요.", en: "I meet my friend when I go to school." },
      { ko: "시간이 있을 때 운동해요.", en: "I exercise when I have time." },
    ],
    practice: { type: "fill", prompt: "밥을 먹___ 음악을 들어요.", answer: "을 때", options: ["을 때", "으면", "어서", "지만"] },
  },
  {
    id: "g32", level: "Intermediate", pattern: "~기 전에",
    meaning: "before doing something",
    explanation: "Attach 기 전에 to a verb stem to say that one action happens before another.",
    examples: [
      { ko: "자기 전에 책을 읽어요.", en: "I read a book before sleeping." },
      { ko: "학교에 가기 전에 밥을 먹어요.", en: "I eat before going to school." },
    ],
    practice: { type: "mc", prompt: "'before sleeping' is:", answer: "자기 전에", options: ["자기 전에", "자는 후에", "자고 싶어요", "자면"] },
  },
  {
    id: "g33", level: "Intermediate", pattern: "~면서",
    meaning: "while doing / simultaneously",
    explanation: "Attach 면서 to a verb stem when two actions happen at the same time.",
    examples: [
      { ko: "음악을 들으면서 공부해요.", en: "I study while listening to music." },
      { ko: "걸으면서 이야기해요.", en: "I talk while walking." },
    ],
    practice: { type: "fill", prompt: "음악을 들으___ 공부해요.", answer: "면서", options: ["면서", "지만", "으면", "어서"] },
  },
  {
    id: "g34", level: "Intermediate", pattern: "~아/어 보다",
    meaning: "try doing something",
    explanation: "Attach 아/어 보다 to a verb stem to express trying an action or experiencing something.",
    examples: [
      { ko: "김치를 먹어 봤어요.", en: "I have tried eating kimchi." },
      { ko: "한국어로 말해 보세요.", en: "Please try speaking in Korean." },
    ],
    practice: { type: "mc", prompt: "'Try eating it' is:", answer: "먹어 보세요", options: ["먹어 보세요", "먹어 주세요", "먹어야 해요", "먹고 있어요"] },
  },
  {
    id: "g35", level: "Intermediate", pattern: "~아/어 주다",
    meaning: "do something for someone",
    explanation: "Attach 아/어 주다 to a verb to express doing something as a favor for another person.",
    examples: [
      { ko: "도와 주세요.", en: "Please help me." },
      { ko: "친구가 책을 빌려 줬어요.", en: "My friend lent me a book." },
    ],
    practice: { type: "mc", prompt: "'Please help me' is:", answer: "도와 주세요.", options: ["도와 주세요.", "도와 봐요.", "도와야 해요.", "도와 싶어요."] },
  },
  {
    id: "g36", level: "Intermediate", pattern: "~(으)려고 하다",
    meaning: "intend / plan to do",
    explanation: "This pattern expresses an intention or plan to do something.",
    examples: [
      { ko: "한국에 가려고 해요.", en: "I intend to go to Korea." },
      { ko: "주말에 쉬려고 해요.", en: "I plan to rest on the weekend." },
    ],
    practice: { type: "mc", prompt: "'I plan to study' is:", answer: "공부하려고 해요", options: ["공부하려고 해요", "공부하고 있어요", "공부할 수 있어요", "공부한 후에"] },
  },
  {
    id: "g37", level: "Intermediate", pattern: "~(으)러 가다/오다",
    meaning: "go / come in order to do",
    explanation: "This pattern expresses going or coming somewhere for the purpose of doing an action.",
    examples: [
      { ko: "도서관에 책을 읽으러 가요.", en: "I go to the library to read a book." },
      { ko: "친구를 만나러 학교에 와요.", en: "I come to school to meet my friend." },
    ],
    practice: { type: "mc", prompt: "'I go to study' is:", answer: "공부하러 가요", options: ["공부하러 가요", "공부하고 가요", "공부하면 가요", "공부해야 가요"] },
  },
  {
    id: "g38", level: "Intermediate", pattern: "~(으)ㄹ까요?",
    meaning: "shall we? / shall I? / do you think?",
    explanation: "This ending is used to suggest an action, ask for someone's opinion, or wonder about a possibility.",
    examples: [
      { ko: "같이 갈까요?", en: "Shall we go together?" },
      { ko: "커피를 마실까요?", en: "Shall we drink coffee?" },
    ],
    practice: { type: "mc", prompt: "'Shall we go?' is:", answer: "갈까요?", options: ["갈까요?", "가세요.", "가고 싶어요.", "갔어요."] },
  },
  {
    id: "g39", level: "Intermediate", pattern: "~(으)ㄴ 적이 있다/없다",
    meaning: "have / have not experienced",
    explanation: "This pattern describes whether someone has had an experience at least once in the past.",
    examples: [
      { ko: "한국에 가 본 적이 있어요.", en: "I have been to Korea before." },
      { ko: "김치를 먹은 적이 없어요.", en: "I have never eaten kimchi." },
    ],
    practice: { type: "mc", prompt: "'I have been to Korea before' is:", answer: "한국에 가 본 적이 있어요.", options: ["한국에 가 본 적이 있어요.", "한국에 가고 있어요.", "한국에 가야 해요.", "한국에 가려고 해요."] },
  },
  {
    id: "g40", level: "Intermediate", pattern: "~는 동안",
    meaning: "while / during",
    explanation: "는 동안 indicates that something happens throughout the period when another action or situation is taking place.",
    examples: [
      { ko: "공부하는 동안 음악을 들었어요.", en: "I listened to music while studying." },
      { ko: "여행하는 동안 사진을 많이 찍었어요.", en: "I took many photos during the trip." },
    ],
    practice: { type: "fill", prompt: "여행하___ 동안 사진을 찍었어요.", answer: "는", options: ["는", "면", "고", "서"] },
  },
  {
    id: "g41", level: "Intermediate", pattern: "~도록 하다",
    meaning: "make sure to / arrange for",
    explanation: "This pattern is used to express a goal, instruction, or intention to make sure that something happens.",
    examples: [
      { ko: "매일 운동하도록 해요.", en: "I make sure to exercise every day." },
      { ko: "늦지 않도록 하세요.", en: "Please make sure not to be late." },
    ],
    practice: { type: "mc", prompt: "'Make sure to study' is:", answer: "공부하도록 하세요.", options: ["공부하도록 하세요.", "공부하고 싶어요.", "공부할 수 있어요.", "공부한 후에요."] },
  },
    {
    id: "g42", level: "Formal", pattern: "~습니까/ㅂ니까?",
    meaning: "formal question ending",
    explanation: "This ending forms formal and polite questions, commonly used in presentations, interviews, announcements, and official situations.",
    examples: [
      { ko: "어디에 갑니까?", en: "Where are you going? (formal)" },
      { ko: "학생입니까?", en: "Are you a student? (formal)" },
    ],
    practice: { type: "mc", prompt: "Formal question form of '가요?' is:", answer: "갑니까?", options: ["갑니까?", "가요?", "가세요?", "가는가요?"] },
  },
  {
    id: "g43", level: "Formal", pattern: "~(으)십시오",
    meaning: "please do / formal command",
    explanation: "This is a highly polite and formal command or request, frequently seen in announcements, instructions, signs, and official situations.",
    examples: [
      { ko: "여기에 앉으십시오.", en: "Please sit here. (formal)" },
      { ko: "잠시 기다리십시오.", en: "Please wait a moment. (formal)" },
    ],
    practice: { type: "mc", prompt: "Formal 'Please wait' is:", answer: "기다리십시오.", options: ["기다리십시오.", "기다려요.", "기다리고 싶어요.", "기다릴까요?"] },
  },
  {
    id: "g44", level: "Formal", pattern: "~(으)ㅂ시다",
    meaning: "let's do",
    explanation: "This formal-polite ending is used to make a suggestion or proposal to do something together.",
    examples: [
      { ko: "같이 갑시다.", en: "Let's go together. (formal)" },
      { ko: "시작합시다.", en: "Let's begin. (formal)" },
    ],
    practice: { type: "mc", prompt: "Formal 'Let's study' is:", answer: "공부합시다.", options: ["공부합시다.", "공부하세요.", "공부합니다.", "공부하고 있습니다."] },
  },
  {
    id: "g45", level: "Formal", pattern: "~(으)시~",
    meaning: "honorific subject marker",
    explanation: "The honorific marker 시 is inserted into a verb or adjective when the subject is someone deserving respect.",
    examples: [
      { ko: "선생님이 오세요.", en: "The teacher is coming. (honorific)" },
      { ko: "어머니가 주무세요.", en: "Mother is sleeping. (honorific)" },
    ],
    practice: { type: "mc", prompt: "The honorific form of '가요' is:", answer: "가세요", options: ["가세요", "갑니다", "가요요", "가십시오요"] },
  },
  {
    id: "g46", level: "Formal", pattern: "께서",
    meaning: "honorific subject marker",
    explanation: "께서 is the honorific form of the subject marker 이/가 and is used when the subject deserves respect.",
    examples: [
      { ko: "선생님께서 말씀하셨어요.", en: "The teacher spoke. (honorific)" },
      { ko: "부모님께서 오셨어요.", en: "My parents came. (honorific)" },
    ],
    practice: { type: "fill", prompt: "선생님___ 오셨어요.", answer: "께서", options: ["께서", "이", "가", "은"] },
  },
  {
    id: "g47", level: "Formal", pattern: "께",
    meaning: "to / for someone deserving respect",
    explanation: "께 is the honorific form of 에게/한테 and is used when referring to someone who deserves respect.",
    examples: [
      { ko: "선생님께 질문을 드려요.", en: "I ask the teacher a question. (honorific)" },
      { ko: "부모님께 편지를 썼어요.", en: "I wrote a letter to my parents." },
    ],
    practice: { type: "fill", prompt: "선생님___ 질문해요.", answer: "께", options: ["께", "에게", "한테", "에서"] },
  },
  {
    id: "g48", level: "Formal", pattern: "드리다",
    meaning: "to give / do for someone respectfully",
    explanation: "드리다 is the humble form of 주다 and is used when the speaker gives something or does something for someone deserving respect.",
    examples: [
      { ko: "선생님께 선물을 드렸어요.", en: "I gave a gift to the teacher." },
      { ko: "부모님께 말씀을 드려요.", en: "I speak to my parents respectfully." },
    ],
    practice: { type: "mc", prompt: "The respectful form of 'give' to a teacher is:", answer: "드리다", options: ["드리다", "주다", "받다", "보내다"] },
  },
  {
    id: "g49", level: "Formal", pattern: "주시다",
    meaning: "to give / do for someone respectfully",
    explanation: "주시다 is an honorific form used when someone respected gives something or does something for another person.",
    examples: [
      { ko: "선생님이 책을 주셨어요.", en: "The teacher gave me a book." },
      { ko: "도와주셔서 감사합니다.", en: "Thank you for helping me." },
    ],
    practice: { type: "mc", prompt: "Which is the honorific form of 주다?", answer: "주시다", options: ["주시다", "드리다", "받으시다", "주무시다"] },
  },
  {
    id: "g50", level: "Formal", pattern: "말씀하시다",
    meaning: "to speak / say respectfully",
    explanation: "말씀하시다 is the honorific form used for saying or speaking when referring respectfully to another person.",
    examples: [
      { ko: "선생님께서 말씀하셨어요.", en: "The teacher spoke." },
      { ko: "무슨 말씀을 하셨어요?", en: "What did you say? (respectful)" },
    ],
    practice: { type: "mc", prompt: "The respectful expression for 'to speak' is:", answer: "말씀하시다", options: ["말씀하시다", "말하다", "이야기하다", "듣다"] },
  },
  {
    id: "g51", level: "Formal", pattern: "계시다",
    meaning: "to be / exist respectfully",
    explanation: "계시다 is the honorific form of 있다 when referring to a respected person's presence or location.",
    examples: [
      { ko: "선생님이 교실에 계세요.", en: "The teacher is in the classroom." },
      { ko: "부모님은 집에 계십니다.", en: "My parents are at home. (formal)" },
    ],
    practice: { type: "mc", prompt: "The honorific form of 있다 is:", answer: "계시다", options: ["계시다", "있으시다", "있다", "가시다"] },
  },
  {
    id: "g52", level: "Formal", pattern: "드시다",
    meaning: "to eat / drink respectfully",
    explanation: "드시다 is an honorific expression used instead of 먹다 or 마시다 when referring respectfully to another person's eating or drinking.",
    examples: [
      { ko: "선생님께서 식사를 드세요.", en: "The teacher is eating a meal." },
      { ko: "어르신께서 물을 드십니다.", en: "The elderly person drinks water. (formal)" },
    ],
    practice: { type: "mc", prompt: "A respectful form of 먹다 is:", answer: "드시다", options: ["드시다", "먹으시다", "잡수다", "마시다"] },
  },
  {
    id: "g53", level: "Formal", pattern: "주무시다",
    meaning: "to sleep respectfully",
    explanation: "주무시다 is the honorific form of 자다 and is used when respectfully referring to someone sleeping.",
    examples: [
      { ko: "할머니께서 주무세요.", en: "Grandmother is sleeping." },
      { ko: "아버지께서 주무십니다.", en: "Father is sleeping. (formal)" },
    ],
    practice: { type: "mc", prompt: "The respectful form of 자다 is:", answer: "주무시다", options: ["주무시다", "자시다", "자다", "쉬시다"] },
  },
  {
    id: "g54", level: "Formal", pattern: "여쭈다",
    meaning: "to ask respectfully",
    explanation: "여쭈다 is a humble expression used when the speaker respectfully asks someone of higher status a question.",
    examples: [
      { ko: "선생님께 여쭤봤어요.", en: "I asked the teacher." },
      { ko: "한 가지 여쭤봐도 될까요?", en: "May I ask you one thing?" },
    ],
    practice: { type: "mc", prompt: "A humble form of 묻다/질문하다 is:", answer: "여쭈다", options: ["여쭈다", "주시다", "계시다", "말씀하시다"] },
  },
  {
    id: "g55", level: "Formal", pattern: "뵙다",
    meaning: "to meet / see respectfully",
    explanation: "뵙다 is a humble form of 보다 used when the speaker meets or sees someone deserving respect.",
    examples: [
      { ko: "내일 선생님을 뵙겠습니다.", en: "I will see the teacher tomorrow." },
      { ko: "처음 뵙겠습니다.", en: "It is a pleasure to meet you. (formal)" },
    ],
    practice: { type: "mc", prompt: "A humble form of 'to meet/see' is:", answer: "뵙다", options: ["뵙다", "보다", "만나다", "보이다"] },
  },
  {
    id: "g56", level: "Formal", pattern: "~겠습니다",
    meaning: "I will / I intend to / I suppose",
    explanation: "겠습니다 expresses a formal intention, promise, willingness, or prediction and is common in official speech and announcements.",
    examples: [
      { ko: "열심히 공부하겠습니다.", en: "I will study hard." },
      { ko: "다시 연락하겠습니다.", en: "I will contact you again." },
    ],
    practice: { type: "mc", prompt: "Formal 'I will do my best' is:", answer: "최선을 다하겠습니다.", options: ["최선을 다하겠습니다.", "최선을 다해요.", "최선을 다하고 싶어요.", "최선을 다할까요?"] },
  },
  {
    id: "g57", level: "Formal", pattern: "~(으)시겠습니까?",
    meaning: "would you / will you?",
    explanation: "This highly polite question form is used to ask about someone's intention, preference, or willingness in formal situations.",
    examples: [
      { ko: "어디로 가시겠습니까?", en: "Where would you like to go?" },
      { ko: "커피를 드시겠습니까?", en: "Would you like coffee?" },
    ],
    practice: { type: "mc", prompt: "Formal 'Would you like coffee?' is:", answer: "커피를 드시겠습니까?", options: ["커피를 드시겠습니까?", "커피를 마셔요?", "커피를 마실까요?", "커피를 드세요?"] },
  },
  {
    id: "g58", level: "Formal", pattern: "~(으)시기 바랍니다",
    meaning: "please / we ask that you",
    explanation: "This formal expression is commonly used in announcements, notices, instructions, and official communication to politely request an action.",
    examples: [
      { ko: "안전벨트를 착용하시기 바랍니다.", en: "Please fasten your seat belt." },
      { ko: "조용히 해주시기 바랍니다.", en: "Please remain quiet." },
    ],
    practice: { type: "mc", prompt: "Which is an appropriate formal request?", answer: "기다리시기 바랍니다.", options: ["기다리시기 바랍니다.", "기다려!", "기다려요.", "기다릴까요?"] },
  },
  {
    id: "g59", level: "Formal", pattern: "~에 따르면",
    meaning: "according to",
    explanation: "에 따르면 is used in formal speech and writing to introduce information or a statement based on a source.",
    examples: [
      { ko: "뉴스에 따르면 내일 비가 온다고 합니다.", en: "According to the news, it will rain tomorrow." },
      { ko: "선생님 말씀에 따르면 시험은 다음 주입니다.", en: "According to the teacher, the exam is next week." },
    ],
    practice: { type: "fill", prompt: "뉴스___ 따르면 내일 비가 와요.", answer: "에", options: ["에", "에서", "을", "으로"] },
  },
  {
    id: "g60", level: "Formal", pattern: "~에 의하면",
    meaning: "according to / based on",
    explanation: "에 의하면 is a formal expression meaning 'according to' and is especially common in formal writing, reports, and presentations.",
    examples: [
      { ko: "연구에 의하면 운동은 건강에 좋습니다.", en: "According to research, exercise is good for health." },
      { ko: "보고서에 의하면 문제가 해결되었습니다.", en: "According to the report, the problem has been resolved." },
    ],
    practice: { type: "mc", prompt: "'According to the report' is:", answer: "보고서에 의하면", options: ["보고서에 의하면", "보고서를 의하면", "보고서가 의하면", "보고서에서 의하면"] },
  },
];

/* =========================================================
   LEARNING PATH
   ========================================================= */

const PATH = [
  {
    section: "Foundation",
    units: [
      {
        id: "u_hangul",
        title: "Hangul",
        icon: "가",
        lessonIds: ["l1", "l2", "l3", "l4", "l5"]
      },
      {
        id: "u_basicvocab",
        title: "Basic Vocabulary",
        icon: "📚",
        lessonIds: ["l6", "l7", "l8", "l9", "l10"]
      },
      {
        id: "u_greetings",
        title: "Greetings",
        icon: "🙏",
        lessonIds: ["l11", "l12", "l13", "l14", "l15"]
      },
      {
        id: "u_numbers",
        title: "Numbers",
        icon: "🔢",
        lessonIds: ["l16", "l17", "l18", "l19", "l20"]
      },
      {
        id: "u_sentence",
        title: "Basic Sentence Structure",
        icon: "📐",
        lessonIds: ["l21", "l22", "l23", "l24", "l25"]
      }
    ]
  },

  {
    section: "Beginner Korean",
    units: [
      {
        id: "u_particles",
        title: "Particles",
        icon: "🔗",
        lessonIds: ["l26", "l27", "l28", "l29", "l30"]
      },
      {
        id: "u_verbconj",
        title: "Verb Conjugation",
        icon: "🔄",
        lessonIds: ["l31", "l32", "l33", "l34", "l35"]
      },
      {
        id: "u_daily",
        title: "Daily Activities",
        icon: "☀️",
        lessonIds: ["l36", "l37", "l38", "l39", "l40"]
      },
      {
        id: "u_time",
        title: "Time & Dates",
        icon: "🕐",
        lessonIds: ["l41", "l42", "l43", "l44", "l45"]
      },
      {
        id: "u_places",
        title: "Places & Directions",
        icon: "🗺️",
        lessonIds: ["l46", "l47", "l48", "l49", "l50"]
      }
    ]
  },

  {
    section: "Intermediate Korean",
    units: [
      {
        id: "u_intgram",
        title: "Intermediate Grammar",
        icon: "🧩",
        lessonIds: ["l51", "l52", "l53", "l54", "l55"]
      },
      {
        id: "u_formal",
        title: "Formal Speech",
        icon: "🎩",
        lessonIds: ["l56", "l57", "l58", "l59", "l60"]
      },
      {
        id: "u_connect",
        title: "Connecting Sentences",
        icon: "➰",
        lessonIds: ["l61", "l62", "l63", "l64", "l65"]
      },
      {
        id: "u_reading",
        title: "Reading Practice",
        icon: "📰",
        lessonIds: ["l66", "l67", "l68", "l69", "l70"]
      },
      {
        id: "u_listening",
        title: "Listening Practice",
        icon: "🎧",
        lessonIds: ["l71", "l72", "l73", "l74", "l75"]
      }
    ]
  },

  {
    section: "TOPIK Preparation",
    units: [
      {
        id: "u_topikvocab",
        title: "Vocabulary",
        icon: "📝",
        lessonIds: ["l76", "l77", "l78", "l79", "l80"]
      },
      {
        id: "u_topikread",
        title: "Reading",
        icon: "📖",
        lessonIds: ["l81", "l82", "l83", "l84", "l85"]
      },
      {
        id: "u_topiklisten",
        title: "Listening",
        icon: "🔊",
        lessonIds: ["l86", "l87", "l88", "l89", "l90"]
      },
      {
        id: "u_topikwrite",
        title: "Writing",
        icon: "✍️",
        lessonIds: ["l91", "l92", "l93", "l94", "l95"]
      },
      {
        id: "u_topikmock",
        title: "Mock Questions",
        icon: "🧪",
        lessonIds: ["l96", "l97", "l98", "l99", "l100"]
      }
    ]
  }
];


/* =========================================================
   LESSON DEFINITIONS
   FOUNDATION — HANGUL
   ========================================================= */

const LESSONS = {

  /* -------------------------------------------------------
     HANGUL — LESSON 1
     Basic consonants + vowels
     ------------------------------------------------------- */

  l1: {
    id: "l1",
    title: "Hangul 1 — Basic Characters",
    unit: "u_hangul",
    xp: 20,

    description:
      "Learn the basic Korean consonants and vowels and how they are pronounced.",

    vocabIds: [],

    questions: [

      /* Set 1 — Basic consonants */

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'g/k' sound?",
        options: ["ㄱ", "ㄴ", "ㄷ", "ㅁ"],
        answer: "ㄱ"
      },

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'n' sound?",
        options: ["ㄹ", "ㄴ", "ㅂ", "ㅅ"],
        answer: "ㄴ"
      },

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'd/t' sound?",
        options: ["ㄷ", "ㄱ", "ㅈ", "ㅎ"],
        answer: "ㄷ"
      },

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'm' sound?",
        options: ["ㅁ", "ㅂ", "ㅅ", "ㅇ"],
        answer: "ㅁ"
      },

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'b/p' sound?",
        options: ["ㅂ", "ㄷ", "ㄹ", "ㅈ"],
        answer: "ㅂ"
      },

      /* Set 2 — More consonants */

      {
        type: "mc",
        prompt: "Which character represents the 's' sound?",
        options: ["ㅅ", "ㅈ", "ㅊ", "ㅎ"],
        answer: "ㅅ"
      },

      {
        type: "mc",
        prompt: "Which character represents the 'j' sound?",
        options: ["ㅈ", "ㄱ", "ㄷ", "ㅂ"],
        answer: "ㅈ"
      },

      {
        type: "mc",
        prompt: "Which character represents the 'h' sound?",
        options: ["ㅎ", "ㅅ", "ㅇ", "ㄹ"],
        answer: "ㅎ"
      },

      {
        type: "mc",
        prompt: "Which character represents the 'r/l' sound?",
        options: ["ㄹ", "ㄴ", "ㅁ", "ㅂ"],
        answer: "ㄹ"
      },

      {
        type: "mc",
        prompt: "Which character represents the 'ng' sound when used as a final consonant?",
        options: ["ㅇ", "ㅎ", "ㅁ", "ㄴ"],
        answer: "ㅇ"
      },

      /* Set 3 — Basic vowels */

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'a' sound?",
        options: ["ㅏ", "ㅓ", "ㅗ", "ㅜ"],
        answer: "ㅏ"
      },

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'eo' sound?",
        options: ["ㅓ", "ㅏ", "ㅗ", "ㅡ"],
        answer: "ㅓ"
      },

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'o' sound?",
        options: ["ㅗ", "ㅜ", "ㅏ", "ㅣ"],
        answer: "ㅗ"
      },

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'u' sound?",
        options: ["ㅜ", "ㅗ", "ㅓ", "ㅡ"],
        answer: "ㅜ"
      },

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'eu' sound?",
        options: ["ㅡ", "ㅣ", "ㅓ", "ㅏ"],
        answer: "ㅡ"
      },

      /* Set 4 — Final basic vowel */

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'i' sound?",
        options: ["ㅣ", "ㅡ", "ㅏ", "ㅓ"],
        answer: "ㅣ"
      },

      {
        type: "match",
        prompt: "Match each basic vowel with its sound.",
        pairs: [
          ["ㅏ", "a"],
          ["ㅓ", "eo"],
          ["ㅗ", "o"],
          ["ㅜ", "u"],
          ["ㅡ", "eu"],
          ["ㅣ", "i"]
        ]
      },

      /* Set 5 — Character recognition */

      {
        type: "mc",
        prompt: "Which of these is a Korean vowel?",
        options: ["ㄱ", "ㄴ", "ㅏ", "ㅁ"],
        answer: "ㅏ"
      },

      {
        type: "mc",
        prompt

/* ===================== TOPIK PRACTICE SETS ===================== */

const TOPIK_SETS = [
  /* TOPIK I */

  {
    id: "t1",
    level: "TOPIK I",
    skill: "Reading",
    title: "TOPIK Reading I",
    lessonId: "l21"
  },

  {
    id: "t2",
    level: "TOPIK I",
    skill: "Listening",
    title: "TOPIK Listening I",
    lessonId: "l22"
  },

  {
    id: "t3",
    level: "TOPIK I",
    skill: "Writing Basics",
    title: "TOPIK Writing Basics",
    lessonId: "l23"
  },

  {
    id: "t4",
    level: "TOPIK I",
    skill: "Mock Test",
    title: "TOPIK I Mock Test",
    lessonId: "l26",
    mock: true
  },


  /* TOPIK II */

  {
    id: "t5",
    level: "TOPIK II",
    skill: "Reading",
    title: "TOPIK Reading II",
    lessonId: "l24"
  },

  {
    id: "t6",
    level: "TOPIK II",
    skill: "Listening",
    title: "TOPIK Listening II",
    lessonId: "l25"
  },

  {
    id: "t7",
    level: "TOPIK II",
    skill: "Writing Basics",
    title: "TOPIK Writing Basics",
    lessonId: "l23"
  },

  {
    id: "t8",
    level: "TOPIK II",
    skill: "Mock Test",
    title: "TOPIK II Mock Test",
    lessonId: "l27",
    mock: true
  }
];

function levelFromXP(xp) {
  const perLevel = 100;
  const level = Math.floor(xp / perLevel) + 1;
  const into = xp % perLevel;
  return { level, into, need: perLevel };
    }
