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
        options: ["ㄷ", "ㄴ", "ㄱ", "ㅁ"],
        answer: "ㄱ"
      },

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'n' sound?",
        options: ["ㄹ", "ㅅ", "ㅂ", "ㄴ"],
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
        options: ["ㅂ", "ㅁ", "ㅅ", "ㅇ"],
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
        options: ["ㅊ", "ㅈ", "ㅅ", "ㅎ"],
        answer: "ㅅ"
      },

      {
        type: "mc",
        prompt: "Which character represents the 'j' sound?",
        options: ["ㅅ", "ㄱ", "ㄷ", "ㅈ"],
        answer: "ㅈ"
      },

      {
        type: "mc",
        prompt: "Which character represents the 'h' sound?",
        options: ["ㅈ", "ㅎ", "ㅇ", "ㄹ"],
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
        options: ["ㄴ", "ㅎ", "ㅁ", "ㅇ"],
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
        options: ["ㅣ", "ㅏ", "ㅗ", "ㅓ"],
        answer: "ㅓ"
      },

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'o' sound?",
        options: ["ㅓ", "ㅜ", "ㅏ", "ㅗ"],
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
        options: ["ㅣ", "ㅓ", "ㅡ", "ㅏ"],
        answer: "ㅡ"
      },

      /* Set 4 — Final basic vowel */

      {
        type: "mc",
        prompt: "Which Hangul character represents the 'i' sound?",
        options: ["ㅏ", "ㅡ", "ㅣ", "ㅓ"],
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
        prompt: "Which of these is a Korean consonant?",
        options: ["ㅗ", "ㅜ", "ㅣ", "ㄱ"],
        answer: "ㄱ"
      },

      {
        type: "match",
        prompt: "Match the character to its pronunciation.",
        pairs: [
          ["ㄱ", "g/k"],
          ["ㄴ", "n"],
          ["ㄷ", "d/t"],
          ["ㅁ", "m"],
          ["ㅂ", "b/p"]
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     HANGUL — LESSON 2
     Remaining basic consonants + vowels
     ------------------------------------------------------- */

  l2: {
    id: "l2",
    title: "Hangul 2 — More Characters",
    unit: "u_hangul",
    xp: 20,

    description:
      "Learn the remaining basic consonants and vowel combinations.",

    vocabIds: [],

    questions: [

      /* Set 1 — Basic consonant review */

      {
        type: "match",
        prompt: "Match the consonant to its pronunciation.",
        pairs: [
          ["ㄱ", "g/k"],
          ["ㄴ", "n"],
          ["ㄷ", "d/t"],
          ["ㄹ", "r/l"],
          ["ㅁ", "m"]
        ]
      },

      {
        type: "match",
        prompt: "Match the consonant to its pronunciation.",
        pairs: [
          ["ㅂ", "b/p"],
          ["ㅅ", "s"],
          ["ㅇ", "ng"],
          ["ㅈ", "j"],
          ["ㅎ", "h"]
        ]
      },

      /* Set 2 — Aspirated consonants */

      {
        type: "mc",
        prompt: "Which character represents the stronger 'k' sound?",
        options: ["ㅋ", "ㄱ", "ㄷ", "ㅌ"],
        answer: "ㅋ"
      },

      {
        type: "mc",
        prompt: "Which character represents the stronger 't' sound?",
        options: ["ㅋ", "ㄷ", "ㅌ", "ㅍ"],
        answer: "ㅌ"
      },

      {
        type: "mc",
        prompt: "Which character represents the stronger 'p' sound?",
        options: ["ㅂ", "ㅍ", "ㅌ", "ㅋ"],
        answer: "ㅍ"
      },

      /* Set 3 — ㅊ and aspirated sounds */

      {
        type: "mc",
        prompt: "Which character represents the 'ch' sound?",
        options: ["ㅈ", "ㅁ", "ㅅ", "ㅊ"],
        answer: "ㅊ"
      },

      {
        type: "match",
        prompt: "Match the aspirated consonants.",
        pairs: [
          ["ㅋ", "k"],
          ["ㅌ", "t"],
          ["ㅍ", "p"],
          ["ㅊ", "ch"]
        ]
      },

      /* Set 4 — Compound vowels */

      {
        type: "mc",
        prompt: "Which vowel represents the 'ya' sound?",
        options: ["ㅛ", "ㅕ", "ㅑ", "ㅠ"],
        answer: "ㅑ"
      },

      {
        type: "mc",
        prompt: "Which vowel represents the 'yeo' sound?",
        options: ["ㅕ", "ㅑ", "ㅛ", "ㅒ"],
        answer: "ㅕ"
      },

      {
        type: "mc",
        prompt: "Which vowel represents the 'yo' sound?",
        options: ["ㅛ", "ㅠ", "ㅕ", "ㅑ"],
        answer: "ㅛ"
      },

      {
        type: "mc",
        prompt: "Which vowel represents the 'yu' sound?",
        options: ["ㅛ", "ㅠ", "ㅕ", "ㅑ"],
        answer: "ㅠ"
      },

      /* Set 5 — Recognition */

      {
        type: "match",
        prompt: "Match the vowels with their sounds.",
        pairs: [
          ["ㅑ", "ya"],
          ["ㅕ", "yeo"],
          ["ㅛ", "yo"],
          ["ㅠ", "yu"]
        ]
      },

      {
        type: "mc",
        prompt: "Which character is NOT a consonant?",
        options: ["ㅋ", "ㅊ", "ㅌ", "ㅕ"],
        answer: "ㅕ"
      }
    ]
  },


  /* -------------------------------------------------------
     HANGUL — LESSON 3
     Double consonants + additional vowels
     ------------------------------------------------------- */

  l3: {
    id: "l3",
    title: "Hangul 3 — Double Consonants & Vowels",
    unit: "u_hangul",
    xp: 20,

    description:
      "Learn tense consonants and additional Korean vowel combinations.",

    vocabIds: [],

    questions: [

      /* Set 1 — Double consonants */

      {
        type: "mc",
        prompt: "Which character is ㄲ?",
        options: ["ㅋ", "ㄲ", "ㄱ", "ㄸ"],
        answer: "ㄲ"
      },

      {
        type: "mc",
        prompt: "Which character is the tense form of ㄷ?",
        options: ["ㅃ", "ㅌ", "ㄷ","ㄸ"],
        answer: "ㄸ"
      },

      {
        type: "mc",
        prompt: "Which character is the tense form of ㅂ?",
        options: ["ㅂ", "ㅍ", "ㅃ", "ㅉ"],
        answer: "ㅃ"
      },

      /* Set 2 — More double consonants */

      {
        type: "mc",
        prompt: "Which character is the tense form of ㅅ?",
        options: ["ㅆ", "ㅈ", "ㅊ", "ㅅ"],
        answer: "ㅆ"
      },

      {
        type: "mc",
        prompt: "Which character is the tense form of ㅈ?",
        options: ["ㅉ", "ㅊ", "ㅈ", "ㅆ"],
        answer: "ㅉ"
      },

      {
        type: "match",
        prompt: "Match the tense consonants.",
        pairs: [
          ["ㄲ", "kk"],
          ["ㄸ", "tt"],
          ["ㅃ", "pp"],
          ["ㅆ", "ss"],
          ["ㅉ", "jj"]
        ]
      },

      /* Set 3 — Compound vowels */

      {
        type: "mc",
        prompt: "Which vowel represents 'ae'?",
        options: ["ㅏ", "ㅔ", "ㅐ", "ㅓ"],
        answer: "ㅐ"
      },

      {
        type: "mc",
        prompt: "Which vowel represents 'e'?",
        options: ["ㅓ", "ㅐ", "ㅣ","ㅔ"],
        answer: "ㅔ"
      },

      {
        type: "mc",
        prompt: "Which vowel represents 'wa'?",
        options: ["ㅘ", "ㅙ", "ㅚ", "ㅝ"],
        answer: "ㅘ"
      },

      /* Set 4 — More compound vowels */

      {
        type: "mc",
        prompt: "Which vowel represents 'wo'?",
        options: ["ㅘ", "ㅝ", "ㅚ", "ㅟ"],
        answer: "ㅝ"
      },

      {
        type: "mc",
        prompt: "Which vowel represents 'we'?",
        options: ["ㅚ", "ㅙ", "ㅞ", "ㅟ"],
        answer: "ㅞ"
      },

      {
        type: "mc",
        prompt: "Which vowel represents 'wi'?",
        options: ["ㅟ", "ㅞ", "ㅝ", "ㅚ"],
        answer: "ㅟ"
      },

      /* Set 5 — Recognition */

      {
        type: "match",
        prompt: "Match the compound vowels.",
        pairs: [
          ["ㅐ", "ae"],
          ["ㅔ", "e"],
          ["ㅘ", "wa"],
          ["ㅝ", "wo"],
          ["ㅟ", "wi"]
        ]
      },

      {
        type: "mc",
        prompt: "Which one is a tense consonant?",
        options: ["ㅌ", "ㅊ", "ㅆ,", "ㅋ"],
        answer: "ㅆ"
      }
    ]
  },


  /* -------------------------------------------------------
     HANGUL — LESSON 4
     Remaining vowels + syllable blocks
     ------------------------------------------------------- */

  l4: {
    id: "l4",
    title: "Hangul 4 — Syllable Blocks",
    unit: "u_hangul",
    xp: 20,

    description:
      "Learn the remaining vowels and how Korean characters combine into syllable blocks.",

    vocabIds: [],

    questions: [

      /* Set 1 — Remaining vowels */

      {
        type: "mc",
        prompt: "Which vowel represents 'oe'?",
        options: ["ㅞ", "ㅙ", "ㅚ", "ㅟ"],
        answer: "ㅚ"
      },

      {
        type: "mc",
        prompt: "Which vowel represents 'yae'?",
        options: ["ㅒ", "ㅖ", "ㅐ", "ㅔ"],
        answer: "ㅒ"
      },

      {
        type: "mc",
        prompt: "Which vowel represents 'ye'?",
        options: ["ㅖ", "ㅒ", "ㅔ", "ㅕ"],
        answer: "ㅖ"
      },

      /* Set 2 — Final vowel combinations */

      {
        type: "mc",
        prompt: "Which vowel represents 'ui'?",
        options: ["ㅟ", "ㅢ", "ㅚ", "ㅡ"],
        answer: "ㅢ"
      },

      {
        type: "mc",
        prompt: "Which vowel represents 'ae'?",
        options: ["ㅖ", "ㅔ", "ㅒ", "ㅐ"],
        answer: "ㅐ"
      },

      {
        type: "match",
        prompt: "Match the vowels with their common romanization.",
        pairs: [
          ["ㅚ", "oe"],
          ["ㅙ", "wae"],
          ["ㅞ", "we"],
          ["ㅒ", "yae"],
          ["ㅖ", "ye"]
        ]
      },

      /* Set 3 — Syllable blocks */

      {
        type: "mc",
        prompt: "What does 가 represent?",
        options: ["da", "na", "ga", "ma"],
        answer: "ga"
      },

      {
        type: "mc",
        prompt: "What does 나 represent?",
        options: ["ga", "da", "na", "ra"],
        answer: "na"
      },

      {
        type: "mc",
        prompt: "What does 다 represent?",
        options: ["da", "ma", "ba", "sa"],
        answer: "da"
      },

      /* Set 4 — Building syllables */

      {
        type: "mc",
        prompt: "Which syllable is made from ㄴ + ㅏ?",
        options: ["가", "나", "마", "라"],
        answer: "나"
      },

      {
        type: "mc",
        prompt: "Which syllable is made from ㄱ + ㅏ?",
        options: ["가", "나", "사", "자"],
        answer: "가"
      },

      {
        type: "mc",
        prompt: "Which syllable is made from ㅁ + ㅏ + ㅅ?",
        options: ["가", "바", "나", "맛"],
        answer: "맛"
      },

      /* Set 5 — Recognition */

      {
        type: "match",
        prompt: "Match the syllable block to its pronunciation.",
        pairs: [
          ["가", "ga"],
          ["나", "na"],
          ["다", "da"],
          ["라", "ra"],
          ["마", "ma"]
        ]
      },

      {
        type: "mc",
        prompt: "Which one is a complete Hangul syllable block?",
        options: ["ㅅ", "ㄱ", "ㅏ", "값"],
        answer: "값"
      }
    ]
  },


  /* -------------------------------------------------------
     HANGUL — LESSON 5
     Full Hangul review
     IMPORTANT: No vocabulary assumptions.
     This lesson completes the Hangul unit.
     ------------------------------------------------------- */

  l5: {
    id: "l5",
    title: "Hangul 5 — Full Review",
    unit: "u_hangul",
    xp: 25,

    description:
      "Review Korean consonants, vowels, syllable blocks, and character recognition before moving to vocabulary.",

    vocabIds: [],

    questions: [

      /* Set 1 — Basic consonants */

      {
        type: "match",
        prompt: "Match the basic consonants to their sounds.",
        pairs: [
          ["ㄱ", "g/k"],
          ["ㄴ", "n"],
          ["ㄷ", "d/t"],
          ["ㄹ", "r/l"],
          ["ㅁ", "m"]
        ]
      },

      /* Set 2 — Remaining consonants */

      {
        type: "match",
        prompt: "Match the consonants to their sounds.",
        pairs: [
          ["ㅂ", "b/p"],
          ["ㅅ", "s"],
          ["ㅇ", "ng"],
          ["ㅈ", "j"],
          ["ㅎ", "h"]
        ]
      },

      {
        type: "match",
        prompt: "Match the aspirated consonants.",
        pairs: [
          ["ㅋ", "k"],
          ["ㅌ", "t"],
          ["ㅍ", "p"],
          ["ㅊ", "ch"]
        ]
      },

      /* Set 3 — Tense consonants */

      {
        type: "match",
        prompt: "Match the tense consonants.",
        pairs: [
          ["ㄲ", "kk"],
          ["ㄸ", "tt"],
          ["ㅃ", "pp"],
          ["ㅆ", "ss"],
          ["ㅉ", "jj"]
        ]
      },

      /* Set 4 — Vowels */

      {
        type: "match",
        prompt: "Match the basic vowels.",
        pairs: [
          ["ㅏ", "a"],
          ["ㅓ", "eo"],
          ["ㅗ", "o"],
          ["ㅜ", "u"],
          ["ㅡ", "eu"],
          ["ㅣ", "i"]
        ]
      },

      /* Set 5 — Compound vowels */

      {
        type: "match",
        prompt: "Match the compound vowels.",
        pairs: [
          ["ㅑ", "ya"],
          ["ㅕ", "yeo"],
          ["ㅛ", "yo"],
          ["ㅠ", "yu"],
          ["ㅐ", "ae"],
          ["ㅔ", "e"]
        ]
      },

      {
        type: "match",
        prompt: "Match the remaining compound vowels.",
        pairs: [
          ["ㅘ", "wa"],
          ["ㅙ", "wae"],
          ["ㅚ", "oe"],
          ["ㅝ", "wo"],
          ["ㅞ", "we"],
          ["ㅟ", "wi"]
        ]
      },

      {
        type: "match",
        prompt: "Match the final vowel combinations.",
        pairs: [
          ["ㅒ", "yae"],
          ["ㅖ", "ye"],
          ["ㅢ", "ui"]
        ]
      },

      /* Set 5 — Final syllable review */

      {
        type: "match",
        prompt: "Match the Hangul syllables to their pronunciation.",
        pairs: [
          ["가", "ga"],
          ["나", "na"],
          ["다", "da"],
          ["라", "ra"],
          ["마", "ma"],
          ["바", "ba"],
          ["사", "sa"],
          ["자", "ja"]
        ]
      },

      {
        type: "mc",
        prompt: "Which Korean syllable is pronounced 'bam'?",
        options: ["밤", "마", "사", "자"],
        answer: "밤"
      },

      {
        type: "mc",
        prompt: "Which Korean syllable is pronounced 'jam'?",
        options: ["사", "참", "잠", "다"],
        answer: "잠"
      },

      {
        type: "mc",
        prompt: "Which Korean syllable is pronounced 'sam'?",
        options: ["자", "삼", "차", "밤"],
        answer: "삼"
      },

      {
        type: "mc",
        prompt: "Which of the following contains only Hangul characters?",
        options: ["한국", "hello", "Korea", "한국OH"],
        answer: "한국"
      }
    ]
  },


  /* =========================================================
     BASIC VOCABULARY
     Only vocabulary from this unit is tested here.
     ========================================================= */

  /* -------------------------------------------------------
     BASIC VOCAB — LESSON 6
     Everyday Objects
     ------------------------------------------------------- */

  l6: {
    id: "l6",
    title: "Basic Vocabulary 1 — Everyday Objects",
    unit: "u_basicvocab",
    xp: 20,

    description:
      "Learn common Korean words for everyday objects.",

    vocabIds: [
      "v10",
      "v18",
      "v19",
      "v20"
    ],

    questions: [

      {
        type: "translate_ko_en",
        prompt: "책",
        answer: "book"
      },

      {
        type: "translate_ko_en",
        prompt: "집",
        answer: "house"
      },

      {
        type: "translate_ko_en",
        prompt: "돈",
        answer: "money"
      },

      {
        type: "translate_ko_en",
        prompt: "커피",
        answer: "coffee"
      },

      {
        type: "translate_en_ko",
        prompt: "book",
        answer: "책",
        options: ["돈", "집", "책", "커피"]
      },

      {
        type: "translate_en_ko",
        prompt: "house",
        answer: "집",
        options: ["집", "책", "돈", "커피"]
      },

      {
        type: "translate_en_ko",
        prompt: "money",
        answer: "돈",
        options: ["책", "집", "커피", "돈"]
      },

      {
        type: "translate_en_ko",
        prompt: "coffee",
        answer: "커피",
        options: ["책", "집", "돈", "커피"]
      },

      {
        type: "match",
        prompt: "Match each Korean word with its meaning.",
        pairs: [
          ["책", "book"],
          ["집", "house"],
          ["돈", "money"],
          ["커피", "coffee"]
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     BASIC VOCAB — LESSON 7
     People
     ------------------------------------------------------- */

  l7: {
    id: "l7",
    title: "Basic Vocabulary 2 — People",
    unit: "u_basicvocab",
    xp: 20,

    description:
      "Learn common Korean words for people and relationships.",

    vocabIds: [
      "v1",
      "v6",
      "v7"
    ],

    questions: [

      {
        type: "translate_ko_en",
        prompt: "사람",
        answer: "person"
      },

      {
        type: "translate_ko_en",
        prompt: "친구",
        answer: "friend"
      },

      {
        type: "translate_en_ko",
        prompt: "person",
        answer: "사람",
        options: ["사람", "친구", "학교", "집"]
      },

      {
        type: "translate_en_ko",
        prompt: "friend",
        answer: "친구",
        options: ["사람", "친구", "학교", "책"]
      },

      {
        type: "mc",
        prompt: "'친구' means:",
        options: ["book", "person", "school", "friend"],
        answer: "friend"
      },

      {
        type: "mc",
        prompt: "'사람' means:",
        options: ["friend", "person", "house", "coffee"],
        answer: "person"
      },

      {
        type: "match",
        prompt: "Match the Korean words to their meanings.",
        pairs: [
          ["사람", "person"],
          ["친구", "friend"]
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     BASIC VOCAB — LESSON 8
     Places
     ------------------------------------------------------- */

  l8: {
    id: "l8",
    title: "Basic Vocabulary 3 — Places",
    unit: "u_basicvocab",
    xp: 20,

    description:
      "Learn common Korean words for places.",

    vocabIds: [
      "v1",
      "v10"
    ],

    questions: [

      {
        type: "translate_ko_en",
        prompt: "학교",
        answer: "school"
      },

      {
        type: "translate_ko_en",
        prompt: "집",
        answer: "house"
      },

      {
        type: "translate_en_ko",
        prompt: "school",
        answer: "학교",
        options: ["학교", "집", "책", "친구"]
      },

      {
        type: "translate_en_ko",
        prompt: "house",
        answer: "집",
        options: ["학교", "돈", "집", "커피"]
      },

      {
        type: "mc",
        prompt: "'학교' means:",
        options: ["coffee", "house", "school", "friend"],
        answer: "school"
      },

      {
        type: "mc",
        prompt: "'집' means:",
        options: ["house", "school", "coffee", "money"],
        answer: "house"
      },

      {
        type: "match",
        prompt: "Match the places to their meanings.",
        pairs: [
          ["학교", "school"],
          ["집", "house"]
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     BASIC VOCAB — LESSON 9
     Food & Drinks
     ------------------------------------------------------- */

  l9: {
    id: "l9",
    title: "Basic Vocabulary 4 — Food & Drinks",
    unit: "u_basicvocab",
    xp: 20,

    description:
      "Learn basic Korean vocabulary related to food and drinks.",

    vocabIds: [
      "v5",
      "v18",
      "v20"
    ],

    questions: [

      {
        type: "translate_ko_en",
        prompt: "밥",
        answer: "rice / meal"
      },

      {
        type: "translate_ko_en",
        prompt: "커피",
        answer: "coffee"
      },

      {
        type: "translate_en_ko",
        prompt: "rice / meal",
        answer: "밥",
        options: ["돈", "커피", "밥", "집"]
      },

      {
        type: "translate_en_ko",
        prompt: "coffee",
        answer: "커피",
        options: ["밥", "커피", "물", "책"]
      },

      {
        type: "mc",
        prompt: "'밥' commonly refers to:",
        options: ["rice / meal", "book", "house", "friend"],
        answer: "rice / meal"
      },

      {
        type: "mc",
        prompt: "'커피' means:",
        options: ["milk", "water", "rice", "coffee"],
        answer: "coffee"
      },

      {
        type: "match",
        prompt: "Match the food and drink words.",
        pairs: [
          ["밥", "rice / meal"],
          ["커피", "coffee"]
        ]
      }
    ]
  },


  /* -------------------------------------------------------
     BASIC VOCAB — LESSON 10
     Core Everyday Words
     ------------------------------------------------------- */

  l10: {
    id: "l10",
    title: "Basic Vocabulary 5 — Everyday Words Review",
    unit: "u_basicvocab",
    xp: 25,

    description:
      "Review the essential everyday vocabulary learned in the Basic Vocabulary unit.",

    vocabIds: [
      "v1",
      "v5",
      "v6",
      "v10",
      "v18",
      "v19",
      "v20"
    ],

    questions: [

      {
        type: "match",
        prompt: "Match the Korean word to its meaning.",
        pairs: [
          ["학교", "school"],
          ["친구", "friend"],
          ["책", "book"],
          ["집", "house"],
          ["돈", "money"]
        ]
      },

      {
        type: "match",
        prompt: "Match the Korean word to its meaning.",
        pairs: [
          ["밥", "rice / meal"],
          ["커피", "coffee"],
          ["사람", "person"]
        ]
      },

      {
        type: "translate_en_ko",
        prompt: "school",
        answer: "학교",
        options: ["학교", "친구", "책", "집"]
      },

      {
        type: "translate_en_ko",
        prompt: "friend",
        answer: "친구",
        options: ["사람", "학교", "돈", "친구"]
      },

      {
        type: "translate_en_ko",
        prompt: "book",
        answer: "책",
        options: ["책", "돈", "집", "사람"]
      },

      {
        type: "translate_en_ko",
        prompt: "house",
        answer: "집",
        options: ["학교", "집", "돈", "친구"]
      },

      {
        type: "translate_en_ko",
        prompt: "money",
        answer: "돈",
        options: ["돈", "책", "밥", "커피"]
      },

      {
        type: "translate_en_ko",
        prompt: "rice / meal",
        answer: "밥",
        options: ["학교", "집", "사람", "밥"]
      },

      {
        type: "translate_en_ko",
        prompt: "coffee",
        answer: "커피",
        options: ["돈", "책", "친구", "커피"]
      },

      {
        type: "translate_ko_en",
        prompt: "친구",
        answer: "friend"
      }
    ]
  },


  /* =========================================================
     GREETINGS
     ========================================================= */

  l11: {
    id: "l11",
    title: "Greetings 1 — Hello & Goodbye",
    unit: "u_greetings",
    xp: 20,

    vocabIds: ["v2"],

    questions: [
      {
        type: "translate_ko_en",
        prompt: "안녕하세요",
        answer: "hello"
      },

      {
        type: "translate_en_ko",
        prompt: "hello",
        answer: "안녕하세요",
        options: ["안녕하세요", "감사합니다", "죄송합니다", "괜찮아요"]
      },

      {
        type: "mc",
        prompt: "Which phrase is used to politely greet someone?",
        options: ["미안해요", "감사합니다", "안녕하세요", "괜찮아요"],
        answer: "안녕하세요"
      },

      {
        type: "listening",
        prompt: "Listen and choose what you hear.",
        audioText: "안녕하세요",
        options: [
          "괜찮아요",
          "감사합니다",
          "죄송합니다",
          "안녕하세요"
        ],
        answer: "안녕하세요"
      },

      {
        type: "match",
        prompt: "Match the greeting.",
        pairs: [
          ["안녕하세요", "hello"]
        ]
      }
    ]
  },


  l12: {
    id: "l12",
    title: "Greetings 2 — Thank You",
    unit: "u_greetings",
    xp: 20,

    vocabIds: ["v3"],

    questions: [
      {
        type: "translate_ko_en",
        prompt: "감사합니다",
        answer: "thank you"
      },

      {
        type: "translate_en_ko",
        prompt: "thank you",
        answer: "감사합니다",
        options: ["감사합니다", "안녕하세요", "죄송합니다", "괜찮아요"]
      },

      {
        type: "mc",
        prompt: "Which phrase means 'thank you'?",
        options: ["안녕하세요", "감사합니다", "괜찮아요", "친구"],
        answer: "감사합니다"
      },

      {
        type: "listening",
        prompt: "Listen and choose what you hear.",
        audioText: "감사합니다",
        options: [
          "괜찮아요",
          "안녕하세요",
          "죄송합니다",
          "감사합니다"
        ],
        answer: "감사합니다"
      },

      {
        type: "match",
        prompt: "Match the phrase to its meaning.",
        pairs: [
          ["감사합니다", "thank you"]
        ]
      }
    ]
  },


  l13: {
    id: "l13",
    title: "Greetings 3 — Apologies",
    unit: "u_greetings",
    xp: 20,

    vocabIds: ["v6"],

    questions: [
      {
        type: "translate_ko_en",
        prompt: "죄송합니다",
        answer: "I'm sorry"
      },

      {
        type: "translate_en_ko",
        prompt: "I'm sorry",
        answer: "죄송합니다",
        options: ["괜찮아요", "감사합니다", "안녕하세요", "죄송합니다"]
      },

      {
        type: "mc",
        prompt: "Which phrase is used to apologize politely?",
        options: ["안녕하세요", "감사합니다", "죄송합니다", "친구"],
        answer: "죄송합니다"
      },

      {
        type: "listening",
        prompt: "Listen and choose what you hear.",
        audioText: "죄송합니다",
        options: [
          "죄송합니다",
          "감사합니다",
          "안녕하세요",
          "괜찮아요"
        ],
        answer: "죄송합니다"
      },

      {
        type: "match",
        prompt: "Match the phrase to its meaning.",
        pairs: [
          ["죄송합니다", "I'm sorry"]
        ]
      }
    ]
  },


  l14: {
    id: "l14",
    title: "Greetings 4 — Responses",
    unit: "u_greetings",
    xp: 20,

    vocabIds: ["v6"],

    questions: [
      {
        type: "translate_ko_en",
        prompt: "괜찮아요",
        answer: "It's okay"
      },

      {
        type: "translate_en_ko",
        prompt: "It's okay",
        answer: "괜찮아요",
        options: ["죄송합니다", "괜찮아요", "감사합니다", "안녕하세요"]
      },

      {
        type: "mc",
        prompt: "What can you say in response to an apology to mean 'It's okay'?",
        options: ["괜찮아요", "감사합니다", "안녕하세요", "친구"],
        answer: "괜찮아요"
      },

      {
        type: "listening",
        prompt: "Listen and choose what you hear.",
        audioText: "괜찮아요",
        options: [
          "안녕하세요",
          "죄송합니다",
          "감사합니다",
          "괜찮아요"
        ],
        answer: "괜찮아요"
      },

      {
        type: "match",
        prompt: "Match the response.",
        pairs: [
          ["괜찮아요", "It's okay"]
        ]
      }
    ]
  },


  l15: {
    id: "l15",
    title: "Greetings 5 — Conversation Review",
    unit: "u_greetings",
    xp: 25,

    vocabIds: ["v2", "v3", "v6"],

    questions: [

      {
        type: "match",
        prompt: "Match each greeting expression with its meaning.",
        pairs: [
          ["안녕하세요", "hello"],
          ["감사합니다", "thank you"],
          ["죄송합니다", "I'm sorry"],
          ["괜찮아요", "It's okay"]
        ]
      },

      {
        type: "mc",
        prompt: "Someone says 감사합니다. What does it mean?",
        options: ["I'm sorry", "Hello", "Thank you", "It's okay"],
        answer: "Thank you"
      },

      {
        type: "mc",
        prompt: "Someone says 죄송합니다. What does it mean?",
        options: ["I'm sorry", "Thank you", "Hello", "Goodbye"],
        answer: "I'm sorry"
      },

      {
        type: "mc",
        prompt: "Someone apologizes. Which response means 'It's okay'?",
        options: ["죄송합니다", "감사합니다", "안녕하세요", "괜찮아요"],
        answer: "괜찮아요"
      },

      {
        type: "listening",
        prompt: "Listen and identify the phrase.",
        audioText: "감사합니다",
        options: [
          "안녕하세요",
          "감사합니다",
          "죄송합니다",
          "괜찮아요"
        ],
        answer: "감사합니다"
      },

      {
        type: "listening",
        prompt: "Listen and identify the phrase.",
        audioText: "안녕하세요",
        options: [
          "안녕하세요",
          "감사합니다",
          "죄송합니다",
          "괜찮아요"
        ],
        answer: "안녕하세요"
      }
    ]
  },


  /* =========================================================
     NUMBERS
     ========================================================= */

  l16: {
    id: "l16",
    title: "Numbers 1 — 하나 to 다섯",
    unit: "u_numbers",
    xp: 20,

    vocabIds: ["v8"],

    questions: [
      {
        type: "translate_ko_en",
        prompt: "하나",
        answer: "one"
      },
      {
        type: "translate_ko_en",
        prompt: "둘",
        answer: "two"
      },
      {
        type: "translate_ko_en",
        prompt: "셋",
        answer: "three"
      },
      {
        type: "translate_ko_en",
        prompt: "넷",
        answer: "four"
      },
      {
        type: "translate_ko_en",
        prompt: "다섯",
        answer: "five"
      },

      {
        type: "match",
        prompt: "Match the numbers.",
        pairs: [
          ["1", "하나"],
          ["2", "둘"],
          ["3", "셋"],
          ["4", "넷"],
          ["5", "다섯"]
        ]
      }
    ]
  },


  l17: {
    id: "l17",
    title: "Numbers 2 — Six to Ten",
    unit: "u_numbers",
    xp: 20,

    vocabIds: ["v9"],

    questions: [
      {
        type: "translate_ko_en",
        prompt: "여섯",
        answer: "six"
      },
      {
        type: "translate_ko_en",
        prompt: "일곱",
        answer: "seven"
      },
      {
        type: "translate_ko_en",
        prompt: "여덟",
        answer: "eight"
      },
      {
        type: "translate_ko_en",
        prompt: "아홉",
        answer: "nine"
      },
      {
        type: "translate_ko_en",
        prompt: "열",
        answer: "ten"
      },

      {
        type: "match",
        prompt: "Match the numbers.",
        pairs: [
          ["6", "여섯"],
          ["7", "일곱"],
          ["8", "여덟"],
          ["9", "아홉"],
          ["10", "열"]
        ]
      }
    ]
  },


  l18: {
    id: "l18",
    title: "Numbers 3 — Counting Practice",
    unit: "u_numbers",
    xp: 20,

    vocabIds: ["v8", "v9"],

    questions: [
      {
        type: "mc",
        prompt: "Which Korean number means 3?",
        options: ["셋", "둘", "넷", "다섯"],
        answer: "셋"
      },

      {
        type: "mc",
        prompt: "Which Korean number means 7?",
        options: ["여섯", "일곱", "여덟", "아홉"],
        answer: "일곱"
      },

      {
        type: "mc",
        prompt: "Which Korean number means 10?",
        options: ["아홉", "열", "여덟", "일곱"],
        answer: "열"
      },

      {
        type: "fill",
        prompt: "사과 ___ 주세요. (one)",
        answer: "하나",
        options: ["넷", "둘", "셋", "하나"]
      },

      {
        type: "fill",
        prompt: "사과 ___ 주세요. (two)",
        answer: "둘",
        options: ["하나", "셋", "둘", "넷"]
      }
    ]
  },


  l19: {
    id: "l19",
    title: "Numbers 4 — Native Korean Numbers",
    unit: "u_numbers",
    xp: 20,

    vocabIds: ["v8", "v9"],

    questions: [
      {
        type: "match",
        prompt: "Match each number.",
        pairs: [
          ["1", "하나"],
          ["2", "둘"],
          ["3", "셋"],
          ["4", "넷"],
          ["5", "다섯"]
        ]
      },

      {
        type: "match",
        prompt: "Match each number.",
        pairs: [
          ["6", "여섯"],
          ["7", "일곱"],
          ["8", "여덟"],
          ["9", "아홉"],
          ["10", "열"]
        ]
      },

      {
        type: "mc",
        prompt: "What is 5 in Korean?",
        options: ["넷", "다섯", "여섯", "셋"],
        answer: "다섯"
      },

      {
        type: "mc",
        prompt: "What is 8 in Korean?",
        options: ["여섯", "일곱", "아홉", "여덟"],
        answer: "여덟"
      },

      {
        type: "mc",
        prompt: "What is 9 in Korean?",
        options: ["아홉", "여덟", "열", "일곱"],
        answer: "아홉"
      }
    ]
  },


  l20: {
    id: "l20",
    title: "Numbers 5 — Numbers Review",
    unit: "u_numbers",
    xp: 25,

    vocabIds: ["v8", "v9"],

    questions: [

      {
        type: "match",
        prompt: "Match 1–5.",
        pairs: [
          ["1", "하나"],
          ["2", "둘"],
          ["3", "셋"],
          ["4", "넷"],
          ["5", "다섯"]
        ]
      },

      {
        type: "match",
        prompt: "Match 6–10.",
        pairs: [
          ["6", "여섯"],
          ["7", "일곱"],
          ["8", "여덟"],
          ["9", "아홉"],
          ["10", "열"]
        ]
      },

      {
        type: "translate_en_ko",
        prompt: "one",
        answer: "하나",
        options: ["셋", "둘", "하나", "넷"]
      },

      {
        type: "translate_en_ko",
        prompt: "five",
        answer: "다섯",
        options: ["넷", "여섯", "일곱", "다섯"]
      },

      {
        type: "translate_en_ko",
        prompt: "ten",
        answer: "열",
        options: ["열", "아홉", "여덟", "일곱"]
      },

      {
        type: "fill",
        prompt: "사과 ___ 주세요. (three)",
        answer: "셋",
        options: ["하나", "둘", "셋", "넷"]
      },

      {
        type: "fill",
        prompt: "사과 ___ 주세요. (four)",
        answer: "넷",
        options: ["하나", "둘", "셋", "넷"]
      }
    ]
  },


  /* =========================================================
     BASIC SENTENCE STRUCTURE
     ========================================================= */

  l21: {
    id: "l21",
    title: "Sentence Structure 1 — Korean Word Order",
    unit: "u_sentence",
    xp: 25,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What is the basic Korean sentence order?",
        options: [
          "Verb-Subject-Object",
          "Subject-Verb-Object",
          "Subject-Object-Verb",
          "Object-Subject-Verb"
        ],
        answer: "Subject-Object-Verb"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I eat rice.'",
        words: ["저는", "밥을", "먹어요"],
        answer: "저는 밥을 먹어요"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I drink coffee.'",
        words: ["저는", "커피를", "마셔요"],
        answer: "저는 커피를 마셔요"
      },

      {
        type: "mc",
        prompt: "Where does the verb normally appear in a basic Korean sentence?",
        options: ["At the end", "At the beginning", "In the middle", "It can never appear"],
        answer: "At the end"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I go to school.'",
        words: ["저는", "학교에", "가요"],
        answer: "저는 학교에 가요"
      }
    ]
  },


  l22: {
    id: "l22",
    title: "Sentence Structure 2 — Subject & Topic",
    unit: "u_sentence",
    xp: 25,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which particle commonly marks the topic?",
        options: ["을/를", "은/는", "에", "에서"],
        answer: "은/는"
      },

      {
        type: "fill",
        prompt: "저___ 학생이에요.",
        answer: "는",
        options: ["가", "를", "에", "는"]
      },

      {
        type: "fill",
        prompt: "친구___ 와요.",
        answer: "가",
        options: ["가", "를", "는", "에"]
      },

      {
        type: "mc",
        prompt: "Which particle commonly marks the subject?",
        options: ["은/는", "이/가", "을/를", "에"],
        answer: "이/가"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'The friend comes.'",
        words: ["친구가", "와요"],
        answer: "친구가 와요"
      }
    ]
  },


  l23: {
    id: "l23",
    title: "Sentence Structure 3 — Objects",
    unit: "u_sentence",
    xp: 25,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which particle marks the object?",
        options: ["에", "은/는", "이/가", "을/를"],
        answer: "을/를"
      },

      {
        type: "fill",
        prompt: "밥___ 먹어요.",
        answer: "을",
        options: ["을", "가", "는", "에"]
      },

      {
        type: "fill",
        prompt: "커피___ 마셔요.",
        answer: "를",
        options: ["가", "를", "에", "는"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I eat rice.'",
        words: ["저는", "밥을", "먹어요"],
        answer: "저는 밥을 먹어요"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I drink coffee.'",
        words: ["저는", "커피를", "마셔요"],
        answer: "저는 커피를 마셔요"
      }
    ]
  },


  l24: {
    id: "l24",
    title: "Sentence Structure 4 — Locations",
    unit: "u_sentence",
    xp: 25,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which particle commonly marks a destination or location?",
        options: ["은/는", "을/를", "에", "이/가"],
        answer: "에"
      },

      {
        type: "fill",
        prompt: "학교___ 가요.",
        answer: "에",
        options: ["에", "를", "는", "가"]
      },

      {
        type: "fill",
        prompt: "집___ 있어요.",
        answer: "에",
        options: ["에", "를", "는", "가"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I go to school.'",
        words: ["저는", "학교에", "가요"],
        answer: "저는 학교에 가요"
      },

      {
        type: "mc",
        prompt: "In '학교에 가요', what does 에 indicate?",
        options: ["subject", "object", "topic", "destination"],
        answer: "destination"
      }
    ]
  },


  l25: {
    id: "l25",
    title: "Sentence Structure 5 — Full Review",
    unit: "u_sentence",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What is the basic Korean word order?",
        options: [
          "Subject-Object-Verb",
          "Subject-Verb-Object",
          "Object-Verb-Subject",
          "Verb-Object-Subject"
        ],
        answer: "Subject-Object-Verb"
      },

      {
        type: "fill",
        prompt: "저___ 학생이에요.",
        answer: "는",
        options: ["를", "는", "에", "가"]
      },

      {
        type: "fill",
        prompt: "밥___ 먹어요.",
        answer: "을",
        options: ["는", "을", "에", "가"]
      },

      {
        type: "fill",
        prompt: "학교___ 가요.",
        answer: "에",
        options: ["가", "를", "는", "에"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I go to school.'",
        words: ["저는", "학교에", "가요"],
        answer: "저는 학교에 가요"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I eat rice.'",
        words: ["저는", "밥을", "먹어요"],
        answer: "저는 밥을 먹어요"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I drink coffee.'",
        words: ["저는", "커피를", "마셔요"],
        answer: "저는 커피를 마셔요"
      }
    ]
  },

    l26: {
    id: "l26",
    title: "Particles 1 — 은/는: Topic Marker",
    unit: "u_particles",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 은/는 mainly mark?",
        options: [
          "The topic of a sentence",
          "The object of a sentence",
          "A location",
          "A verb"
        ],
        answer: "The topic of a sentence"
      },

      {
        type: "fill",
        prompt: "저___ 학생이에요.",
        answer: "는",
        options: ["에", "를", "는", "가"]
      },

      {
        type: "fill",
        prompt: "민수___ 친구예요.",
        answer: "는",
        options: ["에", "을", "는", "가"]
      },

      {
        type: "mc",
        prompt: "Which sentence correctly uses 는?",
        options: [
          "저가 학생이에요.",
          "저를 학생이에요.",
          "저에 학생이에요.",
          "저는 학생이에요."
        ],
        answer: "저는 학생이에요."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I am a student.'",
        words: ["저는", "학생이에요"],
        answer: "저는 학생이에요"
      }
    ]
  },

  l27: {
    id: "l27",
    title: "Particles 2 — 이/가: Subject Marker",
    unit: "u_particles",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 이/가 mainly mark?",
        options: [
          "The topic",
          "The subject",
          "The object",
          "The destination"
        ],
        answer: "The subject"
      },

      {
        type: "fill",
        prompt: "친구___ 와요.",
        answer: "가",
        options: ["를", "가", "는", "에"]
      },

      {
        type: "fill",
        prompt: "학생___ 많아요.",
        answer: "이",
        options: ["에", "는", "을", "이"]
      },

      {
        type: "mc",
        prompt: "Which sentence correctly uses 이/가?",
        options: [
          "친구가 와요.",
          "친구를 와요.",
          "친구에 와요.",
          "친구는 와요."
        ],
        answer: "친구가 와요."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'My friend comes.'",
        words: ["친구가", "와요"],
        answer: "친구가 와요"
      }
    ]
  },

  l28: {
    id: "l28",
    title: "Particles 3 — 을/를: Object Marker",
    unit: "u_particles",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 을/를 mark?",
        options: [
          "The object",
          "The topic",
          "The subject",
          "The location"
        ],
        answer: "The object"
      },

      {
        type: "fill",
        prompt: "밥___ 먹어요.",
        answer: "을",
        options: ["에", "는", "을", "가"]
      },

      {
        type: "fill",
        prompt: "커피___ 마셔요.",
        answer: "를",
        options: ["를", "이", "는", "에"]
      },

      {
        type: "mc",
        prompt: "Which sentence correctly uses 를?",
        options: [
          "커피가 마셔요.",
          "커피를 마셔요.",
          "커피에 마셔요.",
          "커피는 마셔요."
        ],
        answer: "커피를 마셔요."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I eat rice.'",
        words: ["저는", "밥을", "먹어요"],
        answer: "저는 밥을 먹어요"
      }
    ]
  },

  l29: {
    id: "l29",
    title: "Particles 4 — 에: Time & Destination",
    unit: "u_particles",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What can 에 mark?",
        options: [
          "A destination or specific time",
          "Only an object",
          "Only a subject",
          "A person's name"
        ],
        answer: "A destination or specific time"
      },

      {
        type: "fill",
        prompt: "학교___ 가요.",
        answer: "에",
        options: ["는", "를", "에", "가"]
      },

      {
        type: "fill",
        prompt: "세 시___ 만나요.",
        answer: "에",
        options: ["가", "를", "에", "는"]
      },

      {
        type: "mc",
        prompt: "Which sentence correctly uses 에?",
        options: [
          "학교에 가요.",
          "학교를 가요.",
          "학교가 가요.",
          "학교는 가요."
        ],
        answer: "학교에 가요."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I go to school at 8.'",
        words: ["저는", "8", "시에", "학교에", "가요"],
        answer: "저는 8 시에 학교에 가요"
      }
    ]
  },

  l30: {
    id: "l30",
    title: "Particles 5 — Full Review",
    unit: "u_particles",
    xp: 35,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which particle marks the topic?",
        options: ["에", "이/가", "을/를", "은/는"],
        answer: "은/는"
      },

      {
        type: "mc",
        prompt: "Which particle marks the subject?",
        options: ["은/는", "이/가", "을/를", "에"],
        answer: "이/가"
      },

      {
        type: "mc",
        prompt: "Which particle marks the object?",
        options: ["은/는", "이/가", "을/를", "에"],
        answer: "을/를"
      },

      {
        type: "fill",
        prompt: "저___ 한국어___ 공부해요.",
        answer: "는, 를",
        options: [
          "는, 를",
          "를, 는",
          "가, 에",
          "에, 가"
        ]
      },

      {
        type: "fill",
        prompt: "친구___ 학교___ 가요.",
        answer: "가, 에",
        options: [
          "에, 가",
          "를, 는",
          "는, 를",
          "가, 에"
        ]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I study Korean at school.'",
        words: ["저는", "학교에서", "한국어를", "공부해요"],
        answer: "저는 학교에서 한국어를 공부해요"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'My friend goes to school.'",
        words: ["친구가", "학교에", "가요"],
        answer: "친구가 학교에 가요"
      }
    ]
  },


  /* ===================== VERB CONJUGATION ===================== */

  l31: {
    id: "l31",
    title: "Verb Conjugation 1 — 가다 & 오다",
    unit: "u_verbconj",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What is the dictionary form of '가요'?",
        options: ["보다", "오다", "먹다", "가다"],
        answer: "가다"
      },

      {
        type: "mc",
        prompt: "What is the polite present form of 가다?",
        options: ["가어요", "가다요", "갑요", "가요"],
        answer: "가요"
      },

      {
        type: "fill",
        prompt: "학교에 ___요. (go)",
        answer: "가",
        options: ["오", "가", "먹", "보"]
      },

      {
        type: "mc",
        prompt: "What is the polite present form of 오다?",
        options: ["옵니다", "오요", "와요", "오아요"],
        answer: "와요"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I go home.'",
        words: ["저는", "집에", "가요"],
        answer: "저는 집에 가요"
      }
    ]
  },

  l32: {
    id: "l32",
    title: "Verb Conjugation 2 — 먹다 & 마시다",
    unit: "u_verbconj",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What is the polite present form of 먹다?",
        options: ["먹어요", "먹아요", "먹요", "먹습니다요"],
        answer: "먹어요"
      },

      {
        type: "mc",
        prompt: "What is the polite present form of 마시다?",
        options: ["마셔요", "마시어요", "마시요", "마십요"],
        answer: "마셔요"
      },

      {
        type: "fill",
        prompt: "밥을 ___요. (eat)",
        answer: "먹어",
        options: ["와", "마셔", "가", "먹어"]
      },

      {
        type: "fill",
        prompt: "물을 ___요. (drink)",
        answer: "마셔",
        options: ["먹어", "마셔", "가", "봐"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I drink coffee.'",
        words: ["저는", "커피를", "마셔요"],
        answer: "저는 커피를 마셔요"
      }
    ]
  },

  l33: {
    id: "l33",
    title: "Verb Conjugation 3 — 보다 & 하다",
    unit: "u_verbconj",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What is the polite present form of 보다?",
        options: ["봅니다요", "보어요", "보요", "봐요"],
        answer: "봐요"
      },

      {
        type: "mc",
        prompt: "What is the polite present form of 하다?",
        options: ["해요", "하요", "하여요", "합니다요"],
        answer: "해요"
      },

      {
        type: "fill",
        prompt: "영화를 ___요. (watch)",
        answer: "봐",
        options: ["해", "봐", "먹어", "가"]
      },

      {
        type: "fill",
        prompt: "한국어를 공부___요.",
        answer: "해",
        options: ["해", "봐", "먹어", "와"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I study Korean.'",
        words: ["저는", "한국어를", "공부해요"],
        answer: "저는 한국어를 공부해요"
      }
    ]
  },

  l34: {
    id: "l34",
    title: "Verb Conjugation 4 — Past Tense",
    unit: "u_verbconj",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 먹었어요 mean?",
        options: ["will eat", "eat", "ate", "am eating"],
        answer: "ate"
      },

      {
        type: "mc",
        prompt: "What is the past form of 가다?",
        options: ["갔어요", "가요", "갈 거예요", "가세요"],
        answer: "갔어요"
      },

      {
        type: "fill",
        prompt: "어제 밥을 ___어요. (eat)",
        answer: "먹었",
        options: ["먹었", "먹어", "먹을", "먹는"]
      },

      {
        type: "fill",
        prompt: "어제 학교에 ___어요. (go)",
        answer: "갔",
        options: ["가는", "가", "갈", "갔"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I watched a movie yesterday.'",
        words: ["저는", "어제", "영화를", "봤어요"],
        answer: "저는 어제 영화를 봤어요"
      }
    ]
  },

  l35: {
    id: "l35",
    title: "Verb Conjugation 5 — Full Review",
    unit: "u_verbconj",
    xp: 35,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What is the polite present form of 가다?",
        options: ["갈 거예요", "갔어요", "가요", "가세요"],
        answer: "가요"
      },

      {
        type: "mc",
        prompt: "What is the polite present form of 먹다?",
        options: ["먹었어요", "먹어요", "먹을 거예요", "먹습니다만"],
        answer: "먹어요"
      },

      {
        type: "mc",
        prompt: "What is the past form of 보다?",
        options: ["보세요", "봐요", "볼 거예요", "봤어요"],
        answer: "봤어요"
      },

      {
        type: "fill",
        prompt: "오늘 한국어를 공부___요.",
        answer: "해",
        options: ["해", "했", "할", "하"]
      },

      {
        type: "fill",
        prompt: "어제 친구를 만났___요.",
        answer: "어요",
        options: ["는", "아요", "을", "어요"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I ate rice yesterday.'",
        words: ["저는", "어제", "밥을", "먹었어요"],
        answer: "저는 어제 밥을 먹었어요"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I go to school.'",
        words: ["저는", "학교에", "가요"],
        answer: "저는 학교에 가요"
      }
    ]
  },


  /* ===================== DAILY ACTIVITIES ===================== */

  l36: {
    id: "l36",
    title: "Daily Activities 1 — Waking Up & Sleeping",
    unit: "u_daily",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 일어나다 mean?",
        options: ["to wake up / get up", "to sleep", "to eat", "to study"],
        answer: "to wake up / get up"
      },

      {
        type: "translate_ko_en",
        prompt: "자다",
        answer: "to sleep"
      },

      {
        type: "translate_en_ko",
        prompt: "wake up",
        answer: "일어나다",
        options: ["먹다", "자다", "일어나다", "가다"]
      },

      {
        type: "fill",
        prompt: "아침 7시에 ___요. (wake up)",
        answer: "일어나",
        options: ["자", "일어나", "먹어", "가"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I sleep at 11.'",
        words: ["저는", "11시에", "자요"],
        answer: "저는 11시에 자요"
      }
    ]
  },

  l37: {
    id: "l37",
    title: "Daily Activities 2 — Eating & Drinking",
    unit: "u_daily",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 아침을 먹다 mean?",
        options: [
          "to eat lunch",
          "to eat breakfast",
          "to eat dinner",
          "to drink breakfast"
        ],
        answer: "to eat breakfast"
      },

      {
        type: "mc",
        prompt: "Which verb means 'to drink'?",
        options: ["읽다", "먹다", "자다", "마시다"],
        answer: "마시다"
      },

      {
        type: "fill",
        prompt: "아침에 밥을 ___요.",
        answer: "먹어",
        options: ["가", "자", "읽어", "먹어"]
      },

      {
        type: "fill",
        prompt: "커피를 ___요.",
        answer: "마셔",
        options: ["먹어", "마셔", "자", "가"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I drink coffee in the morning.'",
        words: ["저는", "아침에", "커피를", "마셔요"],
        answer: "저는 아침에 커피를 마셔요"
      }
    ]
  },

  l38: {
    id: "l38",
    title: "Daily Activities 3 — School & Study",
    unit: "u_daily",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 공부하다 mean?",
        options: ["to study", "to work", "to sleep", "to exercise"],
        answer: "to study"
      },

      {
        type: "translate_ko_en",
        prompt: "학교에 가다",
        answer: "to go to school"
      },

      {
        type: "fill",
        prompt: "학교에서 한국어를 ___요.",
        answer: "공부해",
        options: ["공부해", "자", "먹어", "마셔"]
      },

      {
        type: "mc",
        prompt: "Where does the person study in this sentence? '학교에서 공부해요.'",
        options: ["At restaurant", "At home", "At a school", "At a park"],
        answer: "At school"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I study Korean at school.'",
        words: ["저는", "학교에서", "한국어를", "공부해요"],
        answer: "저는 학교에서 한국어를 공부해요"
      }
    ]
  },

  l39: {
    id: "l39",
    title: "Daily Activities 4 — Work, Exercise & Free Time",
    unit: "u_daily",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 운동하다 mean?",
        options: ["to sleep", "to study", "to exercise", "to eat"],
        answer: "to exercise"
      },

      {
        type: "mc",
        prompt: "What does 일하다 mean?",
        options: ["to rest", "to work", "to read", "to watch"],
        answer: "to work"
      },

      {
        type: "fill",
        prompt: "매일 운동___요.",
        answer: "해",
        options: ["해", "가", "먹어", "자"]
      },

      {
        type: "reading",
        prompt: "저는 아침에 일하고 저녁에 운동해요.",
        question: "When does the person exercise?",
        options: ["In the morning", "In the afternoon", "In the evening", "At night"],
        answer: "In the evening"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I exercise in the evening.'",
        words: ["저는", "저녁에", "운동해요"],
        answer: "저는 저녁에 운동해요"
      }
    ]
  },

  l40: {
    id: "l40",
    title: "Daily Activities 5 — Full Routine Review",
    unit: "u_daily",
    xp: 35,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 일어나다 mean?",
        options: ["to wake up", "to sleep", "to eat", "to work"],
        answer: "to wake up"
      },

      {
        type: "mc",
        prompt: "What does 공부하다 mean?",
        options: ["to drink", "to study", "to sleep", "to exercise"],
        answer: "to study"
      },

      {
        type: "reading",
        prompt: "저는 아침 7시에 일어납니다. 아침을 먹고 학교에 갑니다. 학교에서 한국어를 공부합니다. 저녁에는 운동을 합니다.",
        question: "What does the person do after eating breakfast?",
        options: [
          "Goes to sleep",
          "Goes to school",
          "Drinks coffee",
          "Exercises"
        ],
        answer: "Goes to school"
      },

      {
        type: "reading",
        prompt: "저는 아침 7시에 일어납니다. 아침을 먹고 학교에 갑니다. 학교에서 한국어를 공부합니다. 저녁에는 운동을 합니다.",
        question: "When does the person exercise?",
        options: ["Morning", "Afternoon", "Evening", "Night"],
        answer: "Evening"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I wake up at 7 and go to school.'",
        words: ["저는", "7시에", "일어나고", "학교에", "가요"],
        answer: "저는 7시에 일어나고 학교에 가요"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I study Korean at school.'",
        words: ["저는", "학교에서", "한국어를", "공부해요"],
        answer: "저는 학교에서 한국어를 공부해요"
      }
    ]
  },


  /* ===================== TIME & DATES ===================== */

  l41: {
    id: "l41",
    title: "Time & Dates 1 — Basic Time",
    unit: "u_time",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 시간 mean?",
        options: ["month", "day", "week", "time"],
        answer: "time"
      },

      {
        type: "translate_en_ko",
        prompt: "time",
        answer: "시간",
        options: ["내일", "오늘", "시간", "날짜"]
      },

      {
        type: "fill",
        prompt: "지금 몇 ___예요?",
        answer: "시",
        options: ["일", "시", "월", "년"]
      },

      {
        type: "mc",
        prompt: "Which word means 'hour / o'clock'?",
        options: ["시", "분", "일", "월"],
        answer: "시"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'What time is it now?'",
        words: ["지금", "몇", "시예요?"],
        answer: "지금 몇 시예요?"
      }
    ]
  },

  l42: {
    id: "l42",
    title: "Time & Dates 2 — Minutes & Clock Time",
    unit: "u_time",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 분 mean?",
        options: ["minute", "hour", "day", "month"],
        answer: "minute"
      },

      {
        type: "fill",
        prompt: "3시 30__",
        answer: "분",
        options: ["30", "몇", "시", "분"]
      },

      {
        type: "mc",
        prompt: "Which sentence means 'I meet at 3 o'clock'?",
        options: [
          "3시에 만나요.",
          "3분에 만나요.",
          "3일에 만나요.",
          "3월에 만나요."
        ],
        answer: "3시에 만나요."
      },

      {
        type: "mc",
        prompt: "두 시 삼십분에 만나요. What time?",    
        options: ["08:18", "02:00", "11:30", "02:30"],
        answer: "2:30"
      },
      
      {
        type: "arrange",
        prompt: "Arrange: 'I meet at 7:30.'",
        words: ["7시 30분에", "만나요"],
        answer: "7시 30분에 만나요"
      }
    ]
  },

  l43: {
    id: "l43",
    title: "Time & Dates 3 — Days of the Week",
    unit: "u_time",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 월요일 mean?",
        options: ["Wednesday", "Tuesday", "Monday", "Sunday"],
        answer: "Monday"
      },

      {
        type: "translate_ko_en",
        prompt: "금요일",
        answer: "Friday"
      },

      {
        type: "mc",
        prompt: "Which word means Sunday?",
        options: ["토요일", "금요일", "일요일", "월요일"],
        answer: "일요일"
      },

      {
        type: "fill",
        prompt: "___에 학교에 가요. (Monday)",
        answer: "월요일",
        options: ["금요일", "일요일", "토요일", "월요일"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I meet my friend on Saturday.'",
        words: ["토요일에", "친구를", "만나요"],
        answer: "토요일에 친구를 만나요"
      }
    ]
  },

  l44: {
    id: "l44",
    title: "Time & Dates 4 — Today, Tomorrow & Yesterday",
    unit: "u_time",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 오늘 mean?",
        options: ["today", "tomorrow", "yesterday", "now"],
        answer: "today"
      },

      {
        type: "mc",
        prompt: "What does 내일 mean?",
        options: ["today", "tomorrow", "yesterday", "morning"],
        answer: "tomorrow"
      },

      {
        type: "mc",
        prompt: "What does 어제 mean?",
        options: ["today", "tomorrow", "yesterday", "tonight"],
        answer: "yesterday"
      },

      {
        type: "fill",
        prompt: "___ 친구를 만나요. (tomorrow)",
        answer: "내일",
        options: ["지금", "어제", "오늘", "내일"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I studied yesterday.'",
        words: ["어제", "공부했어요"],
        answer: "어제 공부했어요"
      }
    ]
  },

  l45: {
    id: "l45",
    title: "Time & Dates 5 — Full Review",
    unit: "u_time",
    xp: 35,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which word means 'today'?",
        options: ["오늘", "내일", "어제", "시간"],
        answer: "오늘"
      },

      {
        type: "mc",
        prompt: "Which particle is commonly used with clock time?",
        options: ["에", "를", "은", "이"],
        answer: "에"
      },

      {
        type: "reading",
        prompt: "민수는 내일 오후 3시에 친구를 만납니다.",
        question: "When does Minsu meet his friend?",
        options: [
          "Today at 3 PM",
          "Tomorrow at 3 PM",
          "Yesterday at 3 PM",
          "Tomorrow at 5 PM"
        ],
        answer: "Tomorrow at 3 PM"
      },

      {
        type: "fill",
        prompt: "토요일 ___ 오후 2시에 만나요.",
        answer: "에",
        options: ["가", "를", "에", "는"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I will meet my friend tomorrow at 5.'",
        words: ["내일", "5시에", "친구를", "만나요"],
        answer: "내일 5시에 친구를 만나요"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I studied Korean yesterday.'",
        words: ["어제", "한국어를", "공부했어요"],
        answer: "어제 한국어를 공부했어요"
      }
    ]
  },


  /* ===================== PLACES & DIRECTIONS ===================== */

  l46: {
    id: "l46",
    title: "Places & Directions 1 — Common Places",
    unit: "u_places",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 학교 mean?",
        options: ["hospital", "school", "library", "restaurant"],
        answer: "school"
      },

      {
        type: "translate_ko_en",
        prompt: "병원",
        answer: "hospital"
      },

      {
        type: "translate_en_ko",
        prompt: "library",
        answer: "도서관",
        options: ["도서관", "학교", "병원", "식당"]
      },

      {
        type: "mc",
        prompt: "What does 식당 mean?",
        options: ["bank", "school", "library", "restaurant"],
        answer: "restaurant"
      },

      {
        type: "match",
        prompt: "Match each place with its meaning.",
        pairs: [
          ["학교", "school"],
          ["병원", "hospital"],
          ["도서관", "library"],
          ["식당", "restaurant"]
        ]
      }
    ]
  },

  l47: {
    id: "l47",
    title: "Places & Directions 2 — Location Words",
    unit: "u_places",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 앞 mean?",
        options: ["inside", "behind", "front", "outside"],
        answer: "front"
      },

      {
        type: "mc",
        prompt: "What does 뒤 mean?",
        options: ["front", "behind", "next to", "between"],
        answer: "behind"
      },

      {
        type: "mc",
        prompt: "What does 옆 mean?",
        options: ["next to", "inside", "far", "under"],
        answer: "next to"
      },

      {
        type: "fill",
        prompt: "학교 ___에 집이 있어요. (next to)",
        answer: "옆",
        options: ["앞", "뒤", "옆", "안"]
      },

      {
        type: "reading",
        prompt: "학교 앞에 카페가 있어요.",
        question: "Where is the cafe?",
        options: [
          "In front of the school",
          "Behind the school",
          "Inside the school",
          "Far from the school"
        ],
        answer: "In front of the school"
      }
    ]
  },

  l48: {
    id: "l48",
    title: "Places & Directions 3 — 에서 & 에",
    unit: "u_places",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which particle is commonly used for the place where an action happens?",
        options: ["은", "에", "를", "에서"],
        answer: "에서"
      },

      {
        type: "mc",
        prompt: "Which particle is commonly used with a destination?",
        options: ["에", "에서", "를", "가"],
        answer: "에"
      },

      {
        type: "fill",
        prompt: "학교___ 공부해요.",
        answer: "에서",
        options: ["에서", "에", "를", "가"]
      },

      {
        type: "fill",
        prompt: "학교___ 가요.",
        answer: "에",
        options: ["에서", "에", "를", "는"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I study at the library.'",
        words: ["도서관에서", "공부해요"],
        answer: "도서관에서 공부해요"
      }
    ]
  },

  l49: {
    id: "l49",
    title: "Places & Directions 4 — Asking for Directions",
    unit: "u_places",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 어디 mean?",
        options: ["where", "who", "what", "when"],
        answer: "where"
      },

      {
        type: "translate_ko_en",
        prompt: "어디예요?",
        answer: "Where is it?"
      },

      {
        type: "mc",
        prompt: "What does '어디에 가요?' mean?",
        options: [
          "Where are you going?",
          "Where are you?",
          "Who are you meeting?",
          "What are you doing?"
        ],
        answer: "Where are you going?"
      },

      {
        type: "fill",
        prompt: "화장실이 ___예요?",
        answer: "어디",
        options: ["무엇", "누구", "어디", "언제"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'Where is the hospital?'",
        words: ["병원이", "어디예요?"],
        answer: "병원이 어디예요?"
      }
    ]
  },

  l50: {
    id: "l50",
    title: "Places & Directions 5 — Full Review",
    unit: "u_places",
    xp: 35,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which particle is used for a destination?",
        options: ["에서", "에", "를", "는"],
        answer: "에"
      },

      {
        type: "mc",
        prompt: "Which particle is used for the place where an action happens?",
        options: ["를", "에", "에서", "가"],
        answer: "에서"
      },

      {
        type: "reading",
        prompt: "학교 옆에 도서관이 있습니다. 도서관에서 학생들이 공부합니다.",
        question: "Where is the library?",
        options: [
          "Next to the school",
          "Behind the school",
          "Inside the school",
          "In front of the hospital"
        ],
        answer: "Next to the school"
      },

      {
        type: "reading",
        prompt: "학교 옆에 도서관이 있습니다. 도서관에서 학생들이 공부합니다.",
        question: "Where do the students study?",
        options: [
          "At the school",
          "At the library",
          "At the hospital",
          "At the restaurant"
        ],
        answer: "At the library"
      },

      {
        type: "fill",
        prompt: "도서관___ 공부하고 학교___ 가요.",
        answer: "에서, 에",
        options: [
          "에서, 에",
          "에, 에서",
          "를, 는",
          "가, 를"
        ]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'Where is the library?'",
        words: ["도서관이", "어디예요?"],
        answer: "도서관이 어디예요?"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I go to the hospital.'",
        words: ["저는", "병원에", "가요"],
        answer: "저는 병원에 가요"
      }
    ]
  },

    l51: {
    id: "l51",
    title: "Intermediate Grammar 1 — -(으)ㄴ/는 것",
    unit: "u_intermediate_grammar",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does -(으)ㄴ/는 것 generally do?",
        options: [
          "Shows possession",
          "Marks the location of an action",
          "Turns a verb or adjective into a noun-like expression",
          "Marks the subject"
        ],
        answer: "Turns a verb or adjective into a noun-like expression"
      },

      {
        type: "fill",
        prompt: "한국어를 배우___ 재미있어요.",
        answer: "는 것이",
        options: ["을 에", "는 것이", "가 를", "에 는"]
      },

      {
        type: "mc",
        prompt: "Which sentence means 'I like reading books.'?",
        options: [
          "책을 읽는 것을 좋아해요.",
          "책이 읽는 것을 좋아해요.",
          "책을 읽고를 좋아해요.",
          "책에 읽는 것을 좋아해요."
        ],
        answer: "책을 읽는 것을 좋아해요."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'Learning Korean is fun.'",
        words: ["한국어를", "배우는", "것이", "재미있어요"],
        answer: "한국어를 배우는 것이 재미있어요"
      },

      {
        type: "mc",
        prompt: "Which expression means 'I don't like waking up early'?",
        options: [
          "일찍 일어나는 것을 싫어해요.",
          "일찍 일어나는 것이 싫어요.",
          "Both A and B",
          "일찍 일어나서 싫어해요."
        ],
        answer: "Both A and B"
      }
    ]
  },

  l52: {
    id: "l52",
    title: "Intermediate Grammar 2 — -(으)ㄹ 것 같다",
    unit: "u_intermediate_grammar",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does -(으)ㄹ 것 같다 commonly express?",
        options: [
          "A location",
          "A past experience",
          "A command",
          "A guess or expectation"
        ],
        answer: "A guess or expectation"
      },

      {
        type: "fill",
        prompt: "내일 비가 올 ___ 같아요.",
        answer: "것",
        options: ["을", "는", "것", "에"]
      },

      {
        type: "mc",
        prompt: "What does '맛있을 것 같아요' mean?",
        options: [
          "It looks like it will be delicious.",
          "It was delicious.",
          "I ate something delicious.",
          "Make it delicious."
        ],
        answer: "It looks like it will be delicious."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I think it will be difficult.'",
        words: ["어려울", "것", "같아요"],
        answer: "어려울 것 같아요"
      },

      {
        type: "mc",
        prompt: "Which sentence expresses a prediction?",
        options: [
          "친구가 왔어요.",
          "친구가 올 것 같아요.",
          "친구가 와요.",
          "친구가 오세요."
        ],
        answer: "친구가 올 것 같아요."
      }
    ]
  },

  l53: {
    id: "l53",
    title: "Intermediate Grammar 3 — -(으)면서",
    unit: "u_intermediate_grammar",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does -(으)면서 express?",
        options: [
          "Two actions happening at the same time",
          "A completed action",
          "A future plan only",
          "Possession"
        ],
        answer: "Two actions happening at the same time"
      },

      {
        type: "fill",
        prompt: "음악을 들으___ 공부해요.",
        answer: "면서",
        options: ["면서", "지만", "니까", "려고"]
      },

      {
        type: "mc",
        prompt: "What does '걸으면서 전화해요' mean?",
        options: [
          "I cannot walk and call.",
          "I walk after making a phone call.",
          "I make a phone call while walking.",
          "I called before walking."
        ],
        answer: "I make a phone call while walking."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I study while listening to music.'",
        words: ["음악을", "들으면서", "공부해요"],
        answer: "음악을 들으면서 공부해요"
      },

      {
        type: "fill",
        prompt: "밥을 먹으___ 이야기를 했어요.",
        answer: "면서",
        options: ["으면", "니까", "지만", "면서"]
      }
    ]
  },

  l54: {
    id: "l54",
    title: "Intermediate Grammar 4 — -(으)려고 하다",
    unit: "u_intermediate_grammar",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does -(으)려고 하다 express?",
        options: [
          "A past habit",
          "A completed action",
          "A comparison",
          "An intention or plan"
        ],
        answer: "An intention or plan"
      },

      {
        type: "fill",
        prompt: "주말에 영화를 보___ 해요.",
        answer: "려고",
        options: ["면서", "지만", "려고", "니까"]
      },

      {
        type: "mc",
        prompt: "What does '한국에 가려고 해요' mean?",
        options: [
          "I plan/intend to go to Korea.",
          "I went to Korea.",
          "I cannot go to Korea.",
          "I have never been to Korea."
        ],
        answer: "I plan/intend to go to Korea."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I am planning to study tonight.'",
        words: ["오늘", "밤에", "공부하려고", "해요"],
        answer: "오늘 밤에 공부하려고 해요"
      },

      {
        type: "mc",
        prompt: "Which sentence expresses intention?",
        options: [
          "친구를 만나요.",
          "친구를 만났어요.",
          "친구를 만나려고 해요.",
          "친구를 만나지 않았어요."
        ],
        answer: "친구를 만나려고 해요."
      }
    ]
  },

  l55: {
    id: "l55",
    title: "Intermediate Grammar 5 — Grammar Review",
    unit: "u_intermediate_grammar",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which grammar expresses a guess?",
        options: [
          "-(으)ㄹ 것 같다",
          "-(으)면서",
          "-(으)려고 하다",
          "-는 것"
        ],
        answer: "-(으)ㄹ 것 같다"
      },

      {
        type: "mc",
        prompt: "Which grammar connects two simultaneous actions?",
        options: [
          "-는 것",
          "-(으)ㄹ 것 같다",
          "-(으)려고 하다",
          "-(으)면서"
        ],
        answer: "-(으)면서"
      },

      {
        type: "fill",
        prompt: "내일 친구를 만나___ 해요.",
        answer: "려고",
        options: ["면서", "려고", "것", "지만"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I think this movie will be fun.'",
        words: ["이", "영화가", "재미있을", "것", "같아요"],
        answer: "이 영화가 재미있을 것 같아요"
      },

      {
        type: "mc",
        prompt: "Which sentence means 'I like studying Korean'?",
        options: [
          "한국어를 공부하는 것을 좋아해요.",
          "한국어를 공부할 것 같아요.",
          "한국어를 공부하면서 해요.",
          "한국어를 공부하려고 좋아해요."
        ],
        answer: "한국어를 공부하는 것을 좋아해요."
      }
    ]
  },

  l56: {
    id: "l56",
    title: "Formal Speech 1 — -(스)ㅂ니다",
    unit: "u_formal_speech",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What is -(스)ㅂ니다 used for?",
        options: [
          "Only past tense",
          "Casual speech with friends",
          "Only questions",
          "Formal and polite speeche"
        ],
        answer: "Formal and polite speech"
      },

      {
        type: "fill",
        prompt: "저는 학생___.",
        answer: "입니다",
        options: ["있어요", "이에요", "입니다", "합니다"]
      },

      {
        type: "fill",
        prompt: "저는 한국어를 공부___.",
        answer: "합니다",
        options: ["합니다", "이에요", "입니다", "있습니다"]
      },

      {
        type: "mc",
        prompt: "Which is the formal version of '먹어요'?",
        options: [
          "먹어요요",
          "먹습니다",
          "먹이습니다",
          "먹습니다요"
        ],
        answer: "먹습니다"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I am a student.'",
        words: ["저는", "학생입니다"],
        answer: "저는 학생입니다"
      }
    ]
  },

  l57: {
    id: "l57",
    title: "Formal Speech 2 — Questions and Answers",
    unit: "u_formal_speech",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which ending is commonly used for formal questions?",
        options: [
          "-ㅂ니까/습니까?",
          "-아요?",
          "-어?",
          "-지?"
        ],
        answer: "-ㅂ니까/습니까?"
      },

      {
        type: "fill",
        prompt: "학생___?",
        answer: "입니까",
        options: ["입니까", "이에요", "있습니까요", "합니다"]
      },

      {
        type: "fill",
        prompt: "어디에 갑___?",
        answer: "니까",
        options: ["니다", "어요", "니까", "세요"]
      },

      {
        type: "mc",
        prompt: "What is the formal question '어디에 갑니까?' asking?",
        options: [
          "What are you studying?",
          "Where did you eat?",
          "Where are you going?",
          "Who are you meeting?"
        ],
        answer: "Where are you going?"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'Do you study Korean?'",
        words: ["한국어를", "공부합니까"],
        answer: "한국어를 공부합니까"
      }
    ]
  },

  l58: {
    id: "l58",
    title: "Formal Speech 3 — Formal Past and Future",
    unit: "u_formal_speech",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What is the formal past form of '갔어요'?",
        options: [
          "갔습니까요",
          "갑니다",
          "가겠습니다",
          "갔습니다"
        ],
        answer: "갔습니다"
      },

      {
        type: "mc",
        prompt: "Which form can express a formal future intention?",
        options: [
          "-았어요",
          "-겠습니다",
          "-는 것",
          "-면서"
        ],
        answer: "-겠습니다"
      },

      {
        type: "fill",
        prompt: "내일 다시 오___.",
        answer: "겠습니다",
        options: ["어요", "았습니다", "겠습니다", "는"]
      },

      {
        type: "fill",
        prompt: "어제 학교에 갔___.",
        answer: "습니다",
        options: ["겠습니다", "어요", "습니다", "니까"]
      },

      {
        type: "mc",
        prompt: "What does '도와드리겠습니다' communicate?",
        options: [
          "I will help you.",
          "I helped you yesterday.",
          "I cannot help you.",
          "I am asking for help."
        ],
        answer: "I will help you."
      }
    ]
  },

  l59: {
    id: "l59",
    title: "Formal Speech 4 — Honorific Expressions",
    unit: "u_formal_speech",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which verb is the honorific form of '먹다'?",
        options: [
          "먹는다",
          "먹으시다요",
          "먹이다",
          "드시다"
        ],
        answer: "드시다"
      },

      {
        type: "mc",
        prompt: "Which is a polite honorific expression for 'to be'?",
        options: [
          "하다",
          "먹다",
          "가다",
          "계시다"
        ],
        answer: "계시다"
      },

      {
        type: "fill",
        prompt: "선생님께서 학교에 가___.",
        answer: "십니다",
        options: ["십니다", "습니다요", "어요", "는다"]
      },

      {
        type: "mc",
        prompt: "Which sentence appropriately uses honorific speech?",
        options: [
          "선생님께서 오십니다.",
          "선생님이 와.",
          "선생님께서 와요요.",
          "선생님을 옵니다."
        ],
        answer: "선생님께서 오십니다."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'The teacher is here.'",
        words: ["선생님께서", "계십니다"],
        answer: "선생님께서 계십니다"
      }
    ]
  },

  l60: {
    id: "l60",
    title: "Formal Speech 5 — Full Review",
    unit: "u_formal_speech",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which sentence is formal?",
        options: [
          "저 학생이야.",
          "나는 학생이야.",
          "저는 학생입니다.",
          "학생이에요?"
        ],
        answer: "저는 학생입니다."
      },

      {
        type: "fill",
        prompt: "저는 매일 운동합___.",
        answer: "니다",
        options: ["어요", "니다", "니까", "시다"]
      },

      {
        type: "mc",
        prompt: "Which ending is used in formal questions?",
        options: [
          "-어!",
          "-자!",
          "-ㅂ니까/습니까?",
          "-지?"
        ],
        answer: "-ㅂ니까/습니까?"
      },

      {
        type: "fill",
        prompt: "내일 다시 만나___!",
        answer: "겠습니다",
        options: ["았어요", "겠습니다", "면서", "는 것"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'Where are you going?' (formal)",
        words: ["어디에", "갑니까"],
        answer: "어디에 갑니까"
      }
    ]
  },

  l61: {
    id: "l61",
    title: "Connecting Sentences 1 — 그리고",
    unit: "u_connecting",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 그리고 mean?",
        options: [
          "If",
          "But",
          "Because",
          "And / and then"
        ],
        answer: "And / and then"
      },

      {
        type: "mc",
        prompt: "Which sentence correctly uses 그리고?",
        options: [
          "밥을 먹었어요. 그리고 커피를 마셨어요.",
          "밥을 먹었어요. 그리고를 커피를 마셨어요.",
          "그리고 밥을 먹었어요 그리고를.",
          "밥 그리고를 먹었어요."
        ],
        answer: "밥을 먹었어요. 그리고 커피를 마셨어요."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I studied. And I watched a movie.'",
        words: ["공부했어요", "그리고", "영화를", "봤어요"],
        answer: "공부했어요 그리고 영화를 봤어요"
      },

      {
        type: "mc",
        prompt: "Which word connects two similar or sequential ideas?",
        options: [
          "하지만",
          "그리고",
          "그래서",
          "왜냐하면"
        ],
        answer: "그리고"
      },

      {
        type: "fill",
        prompt: "친구를 만났어요. ___ 같이 밥을 먹었어요.",
        answer: "그리고",
        options: ["그래서", "하지만", "그리고", "만약"]
      }
    ]
  },

  l62: {
    id: "l62",
    title: "Connecting Sentences 2 — 하지만",
    unit: "u_connecting",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 하지만 mean?",
        options: [
          "Because",
          "And",
          "But / however",
          "Then"
        ],
        answer: "But / however"
      },

      {
        type: "fill",
        prompt: "한국어는 어려워요. ___ 재미있어요.",
        answer: "하지만",
        options: ["또", "그리고", "그래서", "하지만"]
      },

      {
        type: "mc",
        prompt: "Which sentence correctly shows contrast?",
        options: [
          "비싸요. 또 하지만 사고 싶어요.",
          "비싸요. 그리고 사고 싶어요.",
          "비싸요. 그래서 하지만 사고 싶어요.",
          "비싸요. 하지만 사고 싶어요."
        ],
        answer: "비싸요. 하지만 사고 싶어요."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'It is difficult, but it is interesting.'",
        words: ["어려워요", "하지만", "재미있어요"],
        answer: "어려워요 하지만 재미있어요"
      },

      {
        type: "mc",
        prompt: "Which connector should be used for contrasting ideas?",
        options: [
          "그리고",
          "하지만",
          "그래서",
          "그러면"
        ],
        answer: "하지만"
      }
    ]
  },

  l63: {
    id: "l63",
    title: "Connecting Sentences 3 — 그래서",
    unit: "u_connecting",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What does 그래서 mean?",
        options: [
          "But",
          "So / therefore",
          "And",
          "Although"
        ],
        answer: "So / therefore"
      },

      {
        type: "fill",
        prompt: "비가 와요. ___ 우산을 가져가요.",
        answer: "그래서",
        options: ["그래서", "하지만", "그리고", "또"]
      },

      {
        type: "mc",
        prompt: "Which sentence correctly shows a result?",
        options: [
          "늦었어요. 그래서 택시를 탔어요.",
          "늦었어요. 하지만 택시를 탔어요.",
          "늦었어요. 그리고 택시를 탔어요.",
          "늦었어요. 그래서 하지만 택시를 탔어요."
        ],
        answer: "늦었어요. 그래서 택시를 탔어요."
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I was tired, so I went home.'",
        words: ["피곤했어요", "그래서", "집에", "갔어요"],
        answer: "피곤했어요 그래서 집에 갔어요"
      },

      {
        type: "mc",
        prompt: "Which connector introduces a consequence?",
        options: [
          "그리고",
          "하지만",
          "그래서",
          "또"
        ],
        answer: "그래서"
      }
    ]
  },

  l64: {
    id: "l64",
    title: "Connecting Sentences 4 — -(으)니까 / -아/어서",
    unit: "u_connecting",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "What can -(으)니까 express?",
        options: [
          "A noun",
          "Only a location",
          "A reason or cause",
          "A greeting"
        ],
        answer: "A reason or cause"
      },

      {
        type: "fill",
        prompt: "늦었으___ 빨리 가세요.",
        answer: "니까",
        options: ["려고", "면서", "니까", "지만"]
      },

      {
        type: "mc",
        prompt: "Which sentence means 'Because it is cold, wear a coat'?",
        options: [
          "추우니까 코트를 입으세요.",
          "추우면서 코트를 입으세요.",
          "추우려고 코트를 입으세요.",
          "추웠지만 코트를 입으세요."
        ],
        answer: "추우니까 코트를 입으세요."
      },

      {
        type: "fill",
        prompt: "배가 고파___ 밥을 먹었어요.",
        answer: "서",
        options: ["면서", "니까", "지만", "서"]
      },

      {
        type: "mc",
        prompt: "Which connector can link a reason to a result?",
        options: [
          "-(으)니까 / -아/어서",
          "-(으)면서",
          "-(으)려고",
          "-는 것"
        ],
        answer: "-(으)니까 / -아/어서"
      }
    ]
  },

  l65: {
    id: "l65",
    title: "Connecting Sentences 5 — Connector Review",
    unit: "u_connecting",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "mc",
        prompt: "Which connector means 'but'?",
        options: [
          "그래서",
          "하지만",
          "그리고",
          "왜냐하면"
        ],
        answer: "하지만"
      },

      {
        type: "mc",
        prompt: "Which connector means 'so / therefore'?",
        options: [
          "그래서",
          "하지만",
          "그리고",
          "또"
        ],
        answer: "그래서"
      },

      {
        type: "fill",
        prompt: "비가 많이 왔어요. ___ 집에 있었어요.",
        answer: "그래서",
        options: ["또", "하지만", "그리고", "그래서"]
      },

      {
        type: "fill",
        prompt: "피곤했어요. ___ 숙제를 했어요.",
        answer: "하지만",
        options: ["그래서", "하지만", "그리고", "왜냐하면"]
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I was hungry, so I ate.'",
        words: ["배가", "고팠어요", "그래서", "먹었어요"],
        answer: "배가 고팠어요 그래서 먹었어요"
      }
    ]
  },

  l66: {
    id: "l66",
    title: "Reading Practice 1 — Daily Routine",
    unit: "u_reading",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "reading",
        passage: "저는 매일 아침 7시에 일어납니다. 그리고 아침을 먹고 학교에 갑니다. 학교에서 한국어를 공부합니다. 오후에는 친구들과 운동을 합니다.",
        prompt: "What time does the speaker wake up?",
        options: ["6 AM", "7 AM", "8 AM", "9 AM"],
        answer: "7 AM"
      },

      {
        type: "mc",
        prompt: "Where does the speaker study Korean?",
        options: [
          "At school",
          "At home",
          "At a café",
          "At the library"
        ],
        answer: "At school"
      },

      {
        type: "mc",
        prompt: "What does the speaker do in the afternoon?",
        options: [
          "Goes home",
          "Studies alone",
          "Exercises with friends",
          "Works at a café"
        ],
        answer: "Exercises with friends"
      },

      {
        type: "fill",
        prompt: "저는 매일 아침 ___시에 일어납니다.",
        answer: "7",
        options: ["6", "7", "8", "9"]
      },

      {
        type: "mc",
        prompt: "What speech style is mainly used in the passage?",
        options: [
          "Honorific commands only",
          "Casual speech",
          "Banmal",
          "Formal polite speech"
        ],
        answer: "Formal polite speech"
      }
    ]
  },

  l67: {
    id: "l67",
    title: "Reading Practice 2 — A Weekend Plan",
    unit: "u_reading",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "reading",
        passage: "이번 주말에 친구와 같이 서울에 가려고 합니다. 토요일에는 박물관에 가고 맛있는 음식을 먹을 것입니다. 일요일에는 집에서 쉴 것 같습니다.",
        prompt: "Where does the speaker plan to go?",
        options: ["수원", "부산", "제주도", "서울"],
        answer: "서울"
      },

      {
        type: "mc",
        prompt: "What will the speaker do on Saturday?",
        options: [
          "Visit a museum and eat delicious food",
          "Stay home all day",
          "Study at school",
          "Go to work"
        ],
        answer: "Visit a museum and eat delicious food"
      },

      {
        type: "mc",
        prompt: "What does the speaker think about Sunday?",
        options: [
          "They will go to Seoul.",
          "They will probably rest at home.",
          "They will study Korean.",
          "They will meet a teacher."
        ],
        answer: "They will probably rest at home."
      },

      {
        type: "fill",
        prompt: "토요일에는 ___에 갑니다.",
        answer: "박물관",
        options: ["회사", "학교", "박물관", "병원"]
      },

      {
        type: "mc",
        prompt: "Which expression in the passage shows intention?",
        options: [
          "맛있는 음식",
          "먹을 것입니다",
          "쉴 것 같습니다",
          "가려고 합니다"
        ],
        answer: "가려고 합니다"
      }
    ]
  },

  l68: {
    id: "l68",
    title: "Reading Practice 3 — University Life",
    unit: "u_reading",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "reading",
        passage: "저는 대학생입니다. 평일에는 수업이 많아서 바쁩니다. 수업이 끝난 후에는 도서관에서 과제를 합니다. 시간이 있으면 친구를 만나서 같이 저녁을 먹습니다.",
        prompt: "Why is the speaker busy on weekdays?",
        options: [
          "Because they have many classes",
          "Because they work at a restaurant",
          "Because they exercise",
          "Because they travel"
        ],
        answer: "Because they have many classes"
      },

      {
        type: "mc",
        prompt: "Where does the speaker do assignments?",
        options: [
          "At home",
          "At the library",
          "At a restaurant",
          "At school cafeteria"
        ],
        answer: "At the library"
      },

      {
        type: "mc",
        prompt: "What does the speaker do when they have time?",
        options: [
          "Goes to work",
          "Meets a friend and eats dinner",
          "Studies alone",
          "Goes home immediately"
        ],
        answer: "Meets a friend and eats dinner"
      },

      {
        type: "fill",
        prompt: "수업이 끝난 후에는 ___에서 과제를 합니다.",
        answer: "도서관",
        options: ["도서관", "회사", "병원", "공원"]
      },

      {
        type: "mc",
        prompt: "What does '시간이 있으면' mean?",
        options: [
          "If there is time",
          "Because there is time",
          "After time",
          "Before time"
        ],
        answer: "If there is time"
      }
    ]
  },

  l69: {
    id: "l69",
    title: "Reading Practice 4 — Travel",
    unit: "u_reading",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "reading",
        passage: "지난달에 가족과 함께 부산에 갔습니다. 날씨가 좋았지만 바람이 많이 불었습니다. 우리는 바닷가를 산책하고 맛있는 해산물을 먹었습니다. 저녁에는 호텔에서 쉬었습니다.",
        prompt: "When did the speaker visit Busan?",
        options: [
          "Next month",
          "Yesterday",
          "This week",
          "Last month"
        ],
        answer: "Last month"
      },

      {
        type: "mc",
        prompt: "Who did the speaker travel with?",
        options: [
          "Friends",
          "Family",
          "Classmates",
          "Alone"
        ],
        answer: "Family"
      },

      {
        type: "mc",
        prompt: "What was the weather like?",
        options: [
          "It was snowy.",
          "It was rainy.",
          "It was nice, but windy.",
          "It was very cold."
        ],
        answer: "It was nice, but windy."
      },

      {
        type: "fill",
        prompt: "우리는 바닷가를 ___했습니다.",
        answer: "산책",
        options: ["요리", "공부", "운동", "산책"]
      },

      {
        type: "mc",
        prompt: "Where did they rest in the evening?",
        options: [
          "At the hotel",
          "At the beach",
          "At a restaurant",
          "At the airport"
        ],
        answer: "At the hotel"
      }
    ]
  },

  l70: {
    id: "l70",
    title: "Reading Practice 5 — Full Reading Review",
    unit: "u_reading",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "reading",
        passage: "민수 씨는 아침에 일찍 일어나서 운동을 합니다. 운동한 후에 샤워를 하고 아침을 먹습니다. 회사에 가기 전에 커피를 마십니다. 회사에서는 동료들과 한국어로 이야기합니다. 일이 끝나면 집에 돌아와서 저녁을 먹고 책을 읽습니다.",
        prompt: "What does Minsu do after exercising?",
        options: [
          "Reads a book",
          "Goes directly to work",
          "Takes a shower and eats breakfast",
          "Meets his friends"
        ],
        answer: "Takes a shower and eats breakfast"
      },

      {
        type: "mc",
        prompt: "What does Minsu drink before going to work?",
        options: [
          "Water",
          "Tea",
          "Coffee",
          "Juice"
        ],
        answer: "Coffee"
      },

      {
        type: "mc",
        prompt: "Who does Minsu speak Korean with at work?",
        options: [
          "His teacher",
          "His coworkers",
          "His family",
          "His friends"
        ],
        answer: "His coworkers"
      },

      {
        type: "mc",
        prompt: "What does Minsu do after returning home?",
        options: [
          "Drinks coffee",
          "Exercises",
          "Goes to school",
          "Eats dinner and reads a book"
        ],
        answer: "Eats dinner and reads a book"
      },

      {
        type: "mc",
        prompt: "Which expression means 'before going to work'?",
        options: [
          "회사에 가려고",
          "회사에 간 후에",
          "회사에 가면서",
          "회사에 가기 전에"
        ],
        answer: "회사에 가기 전에"
      }
    ]
  },

  l71: {
    id: "l71",
    title: "Listening Practice 1 — Daily Conversation",
    unit: "u_listening",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "listening",
        audioText: "오늘 아침에 뭐 했어요? 저는 아침 7시에 일어나서 아침을 먹었어요. 그리고 학교에 갔어요.",
        prompt: "What did the speaker do after waking up?",
        options: [
          "Went to work",
          "Ate breakfast",
          "Went shopping",
          "Went back to sleep"
        ],
        answer: "Ate breakfast"
      },

      {
        type: "mc",
        prompt: "What time did the speaker wake up?",
        options: ["6 AM", "7 AM", "8 AM", "9 AM"],
        answer: "7 AM"
      },

      {
        type: "mc",
        prompt: "Where did the speaker go after breakfast?",
        options: [
          "School",
          "Home",
          "The library",
          "The café"
        ],
        answer: "School"
      },

      {
        type: "fill",
        prompt: "저는 아침 7시에 ___났어요.",
        answer: "일어",
        options: ["일어", "먹", "가", "자"]
      },

      {
        type: "mc",
        prompt: "Which connector is used to continue the sequence?",
        options: [
          "왜냐하면",
          "하지만",
          "그래서",
          "그리고"
        ],
        answer: "그리고"
      }
    ]
  },

  l72: {
    id: "l72",
    title: "Listening Practice 2 — Making Plans",
    unit: "u_listening",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "listening",
        audioText: "이번 토요일에 뭐 할 거예요? 친구하고 영화를 보려고 해요. 영화가 끝난 후에는 같이 저녁을 먹을 것 같아요.",
        prompt: "What does the speaker plan to do on Saturday?",
        options: [
          "Watch a movie with a friend",
          "Study at home",
          "Go shopping alone",
          "Visit family"
        ],
        answer: "Watch a movie with a friend"
      },

      {
        type: "mc",
        prompt: "Who will the speaker watch the movie with?",
        options: [
          "Family",
          "A teacher",
          "A friend",
          "A coworker"
        ],
        answer: "A friend"
      },

      {
        type: "mc",
        prompt: "What will they probably do after the movie?",
        options: [
          "Go to school",
          "Go home immediately",
          "Study",
          "Eat dinner together"
        ],
        answer: "Eat dinner together"
      },

      {
        type: "fill",
        prompt: "영화를 ___고 해요.",
        answer: "보려고",
        options: ["보니까", "보면서", "봤지만", "보려고"]
      },

      {
        type: "mc",
        prompt: "Which expression shows uncertainty about the future?",
        options: [
          "먹을 것 같아요",
          "먹으려고 해요",
          "먹었어요",
          "먹습니다"
        ],
        answer: "먹을 것 같아요"
      }
    ]
  },

  l73: {
    id: "l73",
    title: "Listening Practice 3 — At a Café",
    unit: "u_listening",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "listening",
        audioText: "어서 오세요. 무엇을 드릴까요? 아메리카노 한 잔하고 케이크 하나 주세요. 케이크는 어떤 것이 맛있어요? 딸기 케이크가 맛있습니다. 그러면 딸기 케이크 하나 주세요.",
        prompt: "What does the customer order first?",
        options: [
          "Juice and cookies",
          "Tea and bread",
          "An Americano and a cake",
          "Coffee only"
        ],
        answer: "An Americano and a cake"
      },

      {
        type: "mc",
        prompt: "What kind of cake does the customer choose?",
        options: [
          "Cheese cake",
          "Chocolate cake",
          "Strawberry cake",
          "Green tea cake"
        ],
        answer: "Strawberry cake"
      },

      {
        type: "mc",
        prompt: "Which formal expression does the staff use?",
        options: [
          "뭐 먹어?",
          "무엇을 드릴까요?",
          "뭐 줄까?",
          "뭐 먹어요?"
        ],
        answer: "무엇을 드릴까요?"
      },

      {
        type: "fill",
        prompt: "아메리카노 한 ___하고 케이크 하나 주세요.",
        answer: "잔",
        options: ["개", "잔", "명", "곳"]
      },

      {
        type: "mc",
        prompt: "What does '그러면' mean in this context?",
        options: [
          "Although",
          "But",
          "Because",
          "Then / in that case"
        ],
        answer: "Then / in that case"
      }
    ]
  },

  l74: {
    id: "l74",
    title: "Listening Practice 4 — At the University",
    unit: "u_listening",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "listening",
        audioText: "내일 수업이 몇 시에 시작합니까? 오전 9시에 시작합니다. 수업이 끝난 후에는 도서관에서 과제를 하려고 합니다. 같이 공부하시겠습니까?",
        prompt: "What time does the class start?",
        options: [
          "8 AM",
          "9 AM",
          "10 AM",
          "11 AM"
        ],
        answer: "9 AM"
      },

      {
        type: "mc",
        prompt: "Where does the speaker plan to study after class?",
        options: [
          "At the library",
          "At a café",
          "At home",
          "At the classroom"
        ],
        answer: "At the library"
      },

      {
        type: "mc",
        prompt: "What does the speaker plan to do?",
        options: [
          "Do an assignment",
          "Eat lunch",
          "Go shopping",
          "Watch a movie"
        ],
        answer: "Do an assignment"
      },

      {
        type: "fill",
        prompt: "오전 ___시에 시작합니다.",
        answer: "9",
        options: ["8", "10", "12", "9"]
      },

      {
        type: "mc",
        prompt: "Which expression is a formal invitation?",
        options: [
          "같이 공부해?",
          "같이 공부할래?",
          "같이 공부하시겠습니까?",
          "같이 공부하자."
        ],
        answer: "같이 공부하시겠습니까?"
      }
    ]
  },

  l75: {
    id: "l75",
    title: "Listening Practice 5 — Full Review",
    unit: "u_listening",
    xp: 30,

    vocabIds: [],

    questions: [

      {
        type: "listening",
        audioText: "안녕하세요. 저는 지수입니다. 평일에는 학교에서 공부하고 주말에는 아르바이트를 합니다. 이번 주말에는 친구와 만나려고 합니다. 하지만 일이 끝나는 시간이 늦어서 저녁에 만날 것 같습니다. 친구를 만나면 같이 맛있는 음식을 먹고 싶습니다.",
        prompt: "What does Jisu do on weekdays?",
        options: [
          "Works part-time",
          "Studies at school",
          "Travels",
          "Studies at home"
        ],
        answer: "Studies at school"
      },

      {
        type: "mc",
        prompt: "What does Jisu do on weekends?",
        options: [
          "Stays home",
          "Goes to school",
          "Travels",
          "Works part-time"
        ],
        answer: "Works part-time"
      },

      {
        type: "mc",
        prompt: "Why will Jisu probably meet the friend in the evening?",
        options: [
          "Because work ends late",
          "Because school starts late",
          "Because the friend is busy",
          "Because the restaurant opens late"
        ],
        answer: "Because work ends late"
      },

      {
        type: "mc",
        prompt: "What does Jisu want to do with the friend?",
        options: [
          "Go shopping",
          "Study Korean",
          "Eat delicious food",
          "Watch a movie"
        ],
        answer: "Eat delicious food"
      },

      {
        type: "arrange",
        prompt: "Arrange: 'I think I will meet my friend in the evening.'",
        words: ["저녁에", "만날", "것", "같습니다"],
        answer: "저녁에 만날 것 같습니다"
      }
    ]
  },

/* =========================================================
   TOPIK PREPARATION
   ========================================================= */


/* =========================
   TOPIK I — VOCABULARY
   ========================= */

l76: {
  id: "l76",
  title: "TOPIK I Vocabulary 1 — Daily Life",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "다음 단어의 뜻으로 알맞은 것은? '가망성'",
      options: [
        "운동",
        "여행",
        "약속",
        "식사"
      ],
      answer: "약속"
    },

    {
      type: "mc",
      prompt: "다음 중 '준비하다'와 가장 관계있는 것은?",
      options: [
        "비",
        "시험",
        "색깔",
        "계절"
      ],
      answer: "시험"
    },

    {
      type: "fill",
      prompt: "저는 매일 아침에 학교에 ___.",
      options: ["먹습니다", "갑니다", "잡니다", "만듭니다"],
      answer: "갑니다"
    },

    {
      type: "mc",
      prompt: "'바쁘다'의 반대말은 무엇입니까?",
      options: [
        "어렵다",
        "빠르다",
        "한가하다",
        "멀다"
      ],
      answer: "한가하다"
    },

    {
      type: "mc",
      prompt: "다음 중 장소를 나타내는 단어는 무엇입니까?",
      options: [
        "맛있다",
        "어제",
        "천천히",
        "병원"
      ],
      answer: "병원"
    }
  ]
},


l77: {
  id: "l77",
  title: "TOPIK I Vocabulary 2 — Food and Shopping",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "'값'과 관계있는 것은 무엇입니까?",
      options: [
        "주소",
        "날씨",
        "시간",
        "가격"
      ],
      answer: "가격"
    },

    {
      type: "mc",
      prompt: "다음 중 음식이 아닌 것은 무엇입니까?",
      options: [
        "김치",
        "비빔밥",
        "우유",
        "지갑"
      ],
      answer: "지갑"
    },

    {
      type: "fill",
      prompt: "이 옷은 너무 비싸요. 조금 ___ 주세요.",
      options: ["깎아", "먹어", "읽어", "기다려"],
      answer: "깎아"
    },

    {
      type: "mc",
      prompt: "'사다'의 반대말로 가장 알맞은 것은?",
      options: [
        "팔다",
        "만나다",
        "빌리다",
        "배우다"
      ],
      answer: "팔다"
    },

    {
      type: "mc",
      prompt: "물건을 넣어서 가지고 다니는 것은 무엇입니까?",
      options: [
        "냉장고",
        "가방",
        "의자",
        "우산"
      ],
      answer: "가방"
    }
  ]
},


l78: {
  id: "l78",
  title: "TOPIK I Vocabulary 3 — School and Work",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "'수업'과 관계있는 것은 무엇입니까?",
      options: [
        "식당",
        "공항",
        "학생",
        "은행"
      ],
      answer: "학생"
    },

    {
      type: "mc",
      prompt: "회사에서 일하는 사람을 무엇이라고 합니까?",
      options: [
        "회사원",
        "손님",
        "환자",
        "관광객"
      ],
      answer: "회사원"
    },

    {
      type: "fill",
      prompt: "오늘은 시험이 있어서 열심히 ___.",
      options: ["공부합니다", "요리합니다", "운동합니다", "여행합니다"],
      answer: "공부합니다"
    },

    {
      type: "mc",
      prompt: "'숙제'는 언제 하는 것이 좋습니까?",
      options: [
        "병원에서",
        "공항에서",
        "식당에서",
        "수업 후"
      ],
      answer: "수업 후"
    },

    {
      type: "mc",
      prompt: "회사에 가서 일을 시작하는 시간을 무엇이라고 합니까?",
      options: [
        "취침 시간",
        "출근 시간",
        "식사 시간",
        "휴일"
      ],
      answer: "출근 시간"
    }
  ]
},


l79: {
  id: "l79",
  title: "TOPIK I Vocabulary 4 — Travel and Transportation",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "비행기를 타고 다른 나라에 갈 때 가는 곳은 어디입니까?",
      options: [
        "도서관",
        "공항",
        "시장",
        "약국"
      ],
      answer: "공항"
    },

    {
      type: "mc",
      prompt: "'표'와 관계있는 것은 무엇입니까?",
      options: [
        "기차",
        "침대",
        "냉장고",
        "우체국"
      ],
      answer: "기차"
    },

    {
      type: "fill",
      prompt: "서울에서 부산까지 기차를 ___.",
      options: ["먹습니다", "탑니다", "입습니다", "씁니다"],
      answer: "탑니다"
    },

    {
      type: "mc",
      prompt: "여행할 때 머무는 곳은 무엇입니까?",
      options: [
        "병원",
        "학교",
        "은행",
        "호텔"
      ],
      answer: "호텔"
    },

    {
      type: "mc",
      prompt: "'출발하다'의 반대말은 무엇입니까?",
      options: [
        "준비하다",
        "도착하다",
        "기다리다",
        "예약하다"
      ],
      answer: "도착하다"
    }
  ]
},


l80: {
  id: "l80",
  title: "TOPIK II Vocabulary 1 — Society and Academic Words",
  unit: "u_topik",
  xp: 35,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "'현상'의 뜻과 가장 가까운 것은 무엇입니까?",
      options: [
        "물건을 사는 행위",
        "어떤 일이 나타나는 모습",
        "사람이 이동하는 장소",
        "하루의 일정"
      ],
      answer: "어떤 일이 나타나는 모습"
    },

    {
      type: "mc",
      prompt: "'영향을 미치다'와 가장 가까운 뜻은 무엇입니까?",
      options: [
        "어떤 것에 변화를 일으키다",
        "어떤 것을 잊어버리다",
        "어떤 곳을 방문하다",
        "어떤 물건을 구입하다"
      ],
      answer: "어떤 것에 변화를 일으키다"
    },

    {
      type: "fill",
      prompt: "인터넷의 발달은 사람들의 생활에 큰 ___을 미쳤습니다.",
      options: ["여행", "약속", "영향", "식사"],
      answer: "영향"
    },

    {
      type: "mc",
      prompt: "'증가하다'의 반대말은 무엇입니까?",
      options: [
        "해결하다",
        "발생하다",
        "유지하다",
        "감소하다"
      ],
      answer: "감소하다"
    },

    {
      type: "mc",
      prompt: "'문제를 해결하다'에서 '해결하다'의 의미는 무엇입니까?",
      options: [
        "문제를 만들다",
        "문제를 풀다",
        "문제를 숨기다",
        "문제를 미루다"
      ],
      answer: "문제를 풀다"
    }
  ]
},


/* =========================
   TOPIK I — READING
   ========================= */

l81: {
  id: "l81",
  title: "TOPIK I Reading 1 — Daily Life",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "다음 글을 읽고 알맞은 답을 고르십시오.\n\n민수 씨는 매일 아침 일곱 시에 일어납니다. 아침을 먹고 버스를 타고 학교에 갑니다. 수업은 아홉 시에 시작합니다.\n\n민수 씨는 몇 시에 학교에 갑니까?",
      options: [
        "일곱 시",
        "여덟 시",
        "아홉 시",
        "열 시"
      ],
      answer: "여덟 시"
    },

    {
      type: "mc",
      prompt: "민수 씨는 학교에 무엇을 타고 갑니까?",
      options: [
        "택시",
        "기차",
        "버스",
        "자전거"
      ],
      answer: "버스"
    },

    {
      type: "mc",
      prompt: "수업은 몇 시에 시작합니까?",
      options: [
        "일곱 시",
        "여덟 시",
        "아홉 시",
        "열 시"
      ],
      answer: "아홉 시"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 올바른 순서로 배열하십시오.",
      words: ["학교에", "버스를", "타고", "갑니다"],
      answer: "버스를 타고 학교에 갑니다"
    },

    {
      type: "fill",
      prompt: "민수 씨는 아침을 ___ 학교에 갑니다.",
      options: ["먹고", "먹어", "먹은", "먹는"],
      answer: "먹고"
    }
  ]
},


l82: {
  id: "l82",
  title: "TOPIK I Reading 2 — Shopping",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "다음 글을 읽고 알맞은 답을 고르십시오.\n\n수진 씨는 오늘 백화점에 갔습니다. 여름 옷을 사고 싶어서 셔츠와 바지를 보았습니다. 셔츠는 삼만 원이고 바지는 오만 원이었습니다. 수진 씨는 셔츠를 샀습니다.\n\n수진 씨는 무엇을 샀습니까?",
      options: [
        "가방",
        "바지",
        "구두",
        "셔츠"
      ],
      answer: "셔츠"
    },

    {
      type: "mc",
      prompt: "셔츠는 얼마입니까?",
      options: [
        "육만 원",
        "사만 원",
        "오만 원",
        "삼만 원"
      ],
      answer: "삼만 원"
    },

    {
      type: "mc",
      prompt: "수진 씨는 왜 백화점에 갔습니까?",
      options: [
        "여름 옷을 사려고",
        "친구를 만나려고",
        "영화를 보려고",
        "식사를 하려고"
      ],
      answer: "여름 옷을 사려고"
    },

    {
      type: "fill",
      prompt: "수진 씨는 셔츠를 ___.",
      options: ["빌렸습니다", "팔았습니다", "샀습니다", "만들었습니다"],
      answer: "샀습니다"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 올바른 순서로 배열하십시오.",
      words: ["여름", "옷을", "사고", "싶습니다"],
      answer: "여름 옷을 사고 싶습니다"
    }
  ]
},


l83: {
  id: "l83",
  title: "TOPIK I Reading 3 — Schedule",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "다음 글을 읽고 알맞은 답을 고르십시오.\n\n지영 씨는 토요일에 친구와 영화를 봅니다. 영화는 오후 두 시에 시작합니다. 영화가 끝난 후에는 친구와 식당에서 저녁을 먹습니다.\n\n영화는 몇 시에 시작합니까?",
      options: [
        "오전 열 시",
        "오후 한 시",
        "오후 두 시",
        "오후 세 시"
      ],
      answer: "오후 두 시"
    },

    {
      type: "mc",
      prompt: "지영 씨는 누구와 영화를 봅니까?",
      options: [
        "친구",
        "가족",
        "선생님",
        "회사원"
      ],
      answer: "친구"
    },

    {
      type: "mc",
      prompt: "영화가 끝난 후에 무엇을 합니까?",
      options: [
        "집에서 잡니다",
        "학교에 갑니다",
        "운동을 합니다",
        "저녁을 먹습니다"
      ],
      answer: "저녁을 먹습니다"
    },

    {
      type: "fill",
      prompt: "영화가 ___ 후에 식당에 갑니다.",
      options: ["끝난", "끝나는", "끝날", "끝내는"],
      answer: "끝난"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 올바른 순서로 배열하십시오.",
      words: ["친구와", "영화를", "봅니다", "토요일에"],
      answer: "토요일에 친구와 영화를 봅니다"
    }
  ]
},


l84: {
  id: "l84",
  title: "TOPIK I Reading 4 — Places",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "다음 글을 읽고 알맞은 답을 고르십시오.\n\n민지 씨는 감기에 걸렸습니다. 그래서 오늘 아침에 병원에 갔습니다. 의사 선생님에게 진찰을 받고 약을 받았습니다. 집에 돌아와서 약을 먹고 쉬었습니다.\n\n민지 씨는 왜 병원에 갔습니까?",
      options: [
        "감기에 걸려서",
        "친구를 만나서",
        "운동을 하려고",
        "책을 빌리려고"
      ],
      answer: "감기에 걸려서"
    },

    {
      type: "mc",
      prompt: "민지 씨는 병원에서 무엇을 받았습니까?",
      options: [
        "책",
        "약",
        "옷",
        "음식"
      ],
      answer: "약"
    },

    {
      type: "mc",
      prompt: "집에 돌아온 후에 무엇을 했습니까?",
      options: [
        "친구를 만났습니다",
        "학교에 갔습니다",
        "약을 먹고 쉬었습니다",
        "운동을 했습니다"
      ],
      answer: "약을 먹고 쉬었습니다"
    },

    {
      type: "fill",
      prompt: "민지 씨는 의사 선생님에게 ___을 받았습니다.",
      options: ["수업", "여행", "약속", "진찰"],
      answer: "진찰"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 올바른 순서로 배열하십시오.",
      words: ["병원에", "감기에", "걸려서", "갔습니다"],
      answer: "감기에 걸려서 병원에 갔습니다"
    }
  ]
},


l85: {
  id: "l85",
  title: "TOPIK II Reading 1 — Social Issues",
  unit: "u_topik",
  xp: 35,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "다음 글을 읽고 알맞은 답을 고르십시오.\n\n최근에는 온라인으로 물건을 구매하는 사람들이 증가하고 있다. 온라인 쇼핑은 시간과 장소에 관계없이 이용할 수 있다는 장점이 있다. 그러나 직접 물건을 확인할 수 없다는 단점도 있다.\n\n이 글의 중심 내용은 무엇입니까?",
      options: [
        "백화점의 변화",
        "온라인 쇼핑의 역사",
        "온라인 쇼핑의 장단점",
        "물건의 가격 비교"
      ],
      answer: "온라인 쇼핑의 장단점"
    },

    {
      type: "mc",
      prompt: "온라인 쇼핑의 장점은 무엇입니까?",
      options: [
        "시간과 장소에 관계없이 이용할 수 있다",
        "물건을 직접 확인할 수 있다",
        "항상 가격이 저렴하다",
        "상품을 바로 받을 수 있다"
      ],
      answer: "시간과 장소에 관계없이 이용할 수 있다"
    },

    {
      type: "mc",
      prompt: "온라인 쇼핑의 단점은 무엇입니까?",
      options: [
        "이용 시간이 짧다",
        "물건을 직접 확인하기 어렵다",
        "장소가 많지 않다",
        "상품의 종류가 적다"
      ],
      answer: "물건을 직접 확인하기 어렵다"
    },

    {
      type: "fill",
      prompt: "온라인으로 물건을 구매하는 사람들이 ___하고 있다.",
      options: ["감소", "증가", "출발", "도착"],
      answer: "증가"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 올바른 순서로 배열하십시오.",
      words: ["온라인", "쇼핑은", "장점이", "있다"],
      answer: "온라인 쇼핑은 장점이 있다"
    }
  ]
},


/* =========================
   TOPIK I — LISTENING
   ========================= */

l86: {
  id: "l86",
  title: "TOPIK I Listening 1 — Daily Conversation",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "listening",
      audioText: "오늘 학교에 가요?",
      prompt: "남자는 오늘 무엇을 합니까?",
      options: [
        "운동을 합니다",
        "집에서 쉽니다",
        "친구를 만납니다",
        "학교에 갑니다"
      ],
      answer: "학교에 갑니다"
    },

    {
      type: "listening",
      audioText: "오늘은 학교에 안 가요. 집에서 공부할 거예요.",
      prompt: "여자는 오늘 어디에서 공부합니까?",
      options: [
        "학교",
        "집",
        "도서관",
        "카페"
      ],
      answer: "집"
    },

    {
      type: "listening",
      audioText: "주말에 뭐 해요? 친구하고 영화를 봐요.",
      prompt: "남자는 주말에 무엇을 합니까?",
      options: [
        "공부합니다",
        "영화를 봅니다",
        "여행합니다",
        "운동합니다"
      ],
      answer: "영화를 봅니다"
    },

    {
      type: "listening",
      audioText: "오늘 날씨가 추워요. 코트를 입으세요.",
      prompt: "오늘 날씨는 어떻습니까?",
      options: [
        "춥습니다",
        "덥습니다",
        "비가 옵니다",
        "바람이 없습니다"
      ],
      answer: "춥습니다"
    },

    {
      type: "listening",
      audioText: "지금 몇 시예요? 세 시예요.",
      prompt: "지금 몇 시입니까?",
      options: [
        "두 시",
        "세 시",
        "네 시",
        "다섯 시"
      ],
      answer: "세 시"
    }
  ]
},


l87: {
  id: "l87",
  title: "TOPIK I Listening 2 — Shopping",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "listening",
      audioText: "이 사과는 얼마예요? 한 개에 천 원이에요.",
      prompt: "사과 한 개는 얼마입니까?",
      options: [
        "오백 원",
        "천 원",
        "이천 원",
        "삼천 원"
      ],
      answer: "천 원"
    },

    {
      type: "listening",
      audioText: "이 셔츠 얼마예요? 오만 원이에요. 조금 비싸네요. 그럼 사만 원에 드릴게요.",
      prompt: "셔츠를 얼마에 살 수 있습니까?",
      options: [
        "삼만 원",
        "오만 원",
        "사만 원",
        "육만 원"
      ],
      answer: "사만 원"
    },

    {
      type: "listening",
      audioText: "무엇을 찾으세요? 검은색 가방을 찾고 있어요.",
      prompt: "여자는 무엇을 찾고 있습니까?",
      options: [
        "검은색 가방",
        "흰색 신발",
        "파란색 셔츠",
        "빨간색 모자"
      ],
      answer: "검은색 가방"
    },

    {
      type: "listening",
      audioText: "이 신발은 조금 작아요. 더 큰 사이즈가 있나요? 네, 있습니다.",
      prompt: "남자는 어떤 신발을 원합니까?",
      options: [
        "다른 색 신발",
        "더 작은 신발",
        "더 비싼 신발",
        "더 큰 신발"
      ],
      answer: "더 큰 신발"
    },

    {
      type: "listening",
      audioText: "봉투 필요하세요? 네, 하나 주세요.",
      prompt: "손님은 무엇을 원합니까?",
      options: [
        "우산",
        "영수증",
        "카드",
        "봉투"
      ],
      answer: "봉투"
    }
  ]
},


l88: {
  id: "l88",
  title: "TOPIK I Listening 3 — Transportation",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "listening",
      audioText: "서울역에 어떻게 가요? 지하철을 타고 가세요.",
      prompt: "서울역에 어떻게 갑니까?",
      options: [
        "지하철을 탑니다",
        "버스를 탑니다",
        "택시를 탑니다",
        "걸어갑니다"
      ],
      answer: "지하철을 탑니다"
    },

    {
      type: "listening",
      audioText: "부산행 기차는 몇 시에 출발합니까? 오후 세 시에 출발합니다.",
      prompt: "부산행 기차는 몇 시에 출발합니까?",
      options: [
        "오후 두 시",
        "오후 네 시",
        "오후 세 시",
        "오후 다섯 시"
      ],
      answer: "오후 세 시"
    },

    {
      type: "listening",
      audioText: "공항에 몇 시까지 가야 해요? 늦어도 여섯 시까지 가야 해요.",
      prompt: "공항에 언제까지 가야 합니까?",
      options: [
        "다섯 시까지",
        "여섯 시까지",
        "일곱 시까지",
        "여덟 시까지"
      ],
      answer: "여섯 시까지"
    },

    {
      type: "listening",
      audioText: "버스 정류장이 어디에 있어요? 은행 앞에 있어요.",
      prompt: "버스 정류장은 어디에 있습니까?",
      options: [
        "은행 앞",
        "학교 뒤",
        "시장 옆",
        "병원 안"
      ],
      answer: "은행 앞"
    },

    {
      type: "listening",
      audioText: "택시를 타고 얼마나 걸려요? 약 십 분 걸려요.",
      prompt: "택시로 얼마나 걸립니까?",
      options: [
        "약 오 분",
        "약 삼십 분",
        "약 이십 분",
        "약 십 분"
      ],
      answer: "약 십 분"
    }
  ]
},


l89: {
  id: "l89",
  title: "TOPIK I Listening 4 — School and Work",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "listening",
      audioText: "오늘 수업이 몇 시에 시작해요? 아홉 시에 시작해요.",
      prompt: "수업은 몇 시에 시작합니까?",
      options: [
        "아홉 시",
        "열 시",
        "열한 시",
        "열두 시"
      ],
      answer: "아홉 시"
    },

    {
      type: "listening",
      audioText: "숙제 다 했어요? 아니요, 아직 안 했어요.",
      prompt: "여자는 숙제를 했습니까?",
      options: [
        "네, 다 했습니다",
        "아니요, 아직 안 했습니다",
        "네, 조금 했습니다",
        "숙제가 없습니다"
      ],
      answer: "아니요, 아직 안 했습니다"
    },

    {
      type: "listening",
      audioText: "오늘 회사에 몇 시에 출근해요? 여덟 시 반에 출근해요.",
      prompt: "남자는 몇 시에 출근합니까?",
      options: [
        "여덟 시",
        "여덟 시 반",
        "아홉 시",
        "아홉 시 반"
      ],
      answer: "여덟 시 반"
    },

    {
      type: "listening",
      audioText: "점심시간에 뭐 먹어요? 회사 근처 식당에서 비빔밥을 먹어요.",
      prompt: "남자는 점심에 무엇을 먹습니까?",
      options: [
        "냉면",
        "김밥",
        "라면",
        "비빔밥"
      ],
      answer: "비빔밥"
    },

    {
      type: "listening",
      audioText: "내일 시험이 있어서 오늘 도서관에서 공부할 거예요.",
      prompt: "여자는 오늘 무엇을 할 예정입니까?",
      options: [
        "영화를 봅니다",
        "친구를 만납니다",
        "도서관에서 공부합니다",
        "집에서 쉽니다"
      ],
      answer: "도서관에서 공부합니다"
    }
  ]
},


l90: {
  id: "l90",
  title: "TOPIK II Listening 1 — Social and Academic Topics",
  unit: "u_topik",
  xp: 35,

  vocabIds: [],

  questions: [

    {
      type: "listening",
      audioText: "최근에는 온라인 수업을 이용하는 학생들이 많아졌습니다. 온라인 수업은 장소에 관계없이 참여할 수 있다는 장점이 있지만, 집중력이 떨어질 수 있다는 단점도 있습니다.",
      prompt: "온라인 수업의 장점과 단점으로 알맞은 것을 고르십시오.",
      options: [
        "교사와 직접 만날 수 있지만 장소가 제한된다",
        "수업 시간이 짧지만 비용이 비싸다",
        "장소에 관계없이 참여할 수 있지만 집중력이 떨어질 수 있다",
        "학생 수가 적지만 교재가 부족하다"
      ],
      answer: "장소에 관계없이 참여할 수 있지만 집중력이 떨어질 수 있다"
    },

    {
      type: "listening",
      audioText: "요즘 많은 사람들이 건강을 위해 규칙적으로 운동하려고 노력합니다. 특히 걷기 운동은 특별한 장비가 필요하지 않고 누구나 쉽게 시작할 수 있다는 장점이 있습니다.",
      prompt: "걷기 운동의 장점으로 언급된 것은 무엇입니까?",
      options: [
        "특별한 장비가 필요하지 않다",
        "전문적인 교육이 필요하다",
        "시간이 오래 걸린다",
        "비용이 많이 든다"
      ],
      answer: "특별한 장비가 필요하지 않다"
    },

    {
      type: "listening",
      audioText: "최근 한 조사에 따르면 사람들이 뉴스를 접하는 방법이 크게 달라졌습니다. 과거에는 텔레비전이나 신문을 이용하는 사람이 많았지만, 현재는 스마트폰을 통해 뉴스를 확인하는 사람이 증가하고 있습니다.",
      prompt: "사람들이 뉴스를 접하는 방법은 어떻게 변화했습니까?",
      options: [
        "신문을 이용하는 사람이 증가했습니다",
        "스마트폰을 이용하는 사람이 증가했습니다",
        "텔레비전을 이용하는 사람이 증가했습니다",
        "라디오를 이용하는 사람이 증가했습니다"
      ],
      answer: "스마트폰을 이용하는 사람이 증가했습니다"
    },

    {
      type: "listening",
      audioText: "이번 행사는 환경 보호의 중요성을 알리기 위해 마련되었습니다. 참가자들은 공원 주변의 쓰레기를 수거하고 재활용에 관한 교육도 받을 예정입니다.",
      prompt: "이번 행사의 목적으로 알맞은 것은 무엇입니까?",
      options: [
        "지역 축제를 준비하기 위해",
        "공원을 새로 만들기 위해",
        "운동 방법을 가르치기 위해",
        "환경 보호의 중요성을 알리기 위해"
      ],
      answer: "환경 보호의 중요성을 알리기 위해"
    },

    {
      type: "listening",
      audioText: "회의는 원래 오전 열 시에 시작할 예정이었지만 참석자들의 일정이 변경되어 오후 두 시로 연기되었습니다.",
      prompt: "회의 시간은 어떻게 변경되었습니까?",
      options: [
        "오전 열 시에서 오후 두 시로 변경되었습니다",
        "오후 두 시에서 오전 열 시로 변경되었습니다",
        "오전 열 시에서 오전 열두 시로 변경되었습니다",
        "오후 두 시에서 오후 네 시로 변경되었습니다"
      ],
      answer: "오전 열 시에서 오후 두 시로 변경되었습니다"
    }
  ]
},


/* =========================
   TOPIK I — WRITING
   ========================= */

l91: {
  id: "l91",
  title: "TOPIK I Writing 1 — Basic Sentences",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "arrange",
      prompt: "다음 단어를 바르게 배열하십시오.",
      words: ["저는", "학생입니다"],
      answer: "저는 학생입니다"
    },

    {
      type: "arrange",
      prompt: "다음 단어를 바르게 배열하십시오.",
      words: ["학교에", "갑니다", "저는"],
      answer: "저는 학교에 갑니다"
    },

    {
      type: "fill",
      prompt: "저는 매일 한국어___ 공부합니다.",
      options: ["가", "에", "를", "는"],
      answer: "를"
    },

    {
      type: "fill",
      prompt: "친구___ 같이 영화를 봅니다.",
      options: ["를", "와", "에", "가"],
      answer: "와"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 바르게 배열하십시오.",
      words: ["주말에", "친구를", "만납니다"],
      answer: "주말에 친구를 만납니다"
    }
  ]
},


l92: {
  id: "l92",
  title: "TOPIK I Writing 2 — Describing Daily Life",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "arrange",
      prompt: "다음 단어를 바르게 배열하십시오.",
      words: ["아침에", "일어납니다", "일곱", "시에"],
      answer: "아침에 일곱 시에 일어납니다"
    },

    {
      type: "fill",
      prompt: "아침을 먹___ 학교에 갑니다.",
      options: ["고", "는", "을", "에"],
      answer: "고"
    },

    {
      type: "arrange",
      prompt: "다음 단어를 바르게 배열하십시오.",
      words: ["저녁에는", "숙제를", "합니다"],
      answer: "저녁에는 숙제를 합니다"
    },

    {
      type: "fill",
      prompt: "주말에는 친구___ 영화를 봅니다.",
      options: ["가", "를", "에", "와"],
      answer: "와"
    },

    {
      type: "arrange",
      prompt: "다음 단어를 바르게 배열하십시오.",
      words: ["밤에", "책을", "읽습니다"],
      answer: "밤에 책을 읽습니다"
    }
  ]
},


l93: {
  id: "l93",
  title: "TOPIK I Writing 3 — Places and Activities",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "arrange",
      prompt: "다음 단어를 바르게 배열하십시오.",
      words: ["도서관에서", "책을", "읽습니다"],
      answer: "도서관에서 책을 읽습니다"
    },

    {
      type: "fill",
      prompt: "학교___ 한국어를 공부합니다.",
      options: ["에", "에서", "를", "가"],
      answer: "에서"
    },

    {
      type: "arrange",
      prompt: "다음 단어를 바르게 배열하십시오.",
      words: ["친구와", "카페에서", "커피를", "마십니다"],
      answer: "친구와 카페에서 커피를 마십니다"
    },

    {
      type: "fill",
      prompt: "주말에 공원___ 운동합니다.",
      options: ["가", "에", "를", "에서"],
      answer: "에서"
    },

    {
      type: "arrange",
      prompt: "다음 단어를 바르게 배열하십시오.",
      words: ["병원에", "아파서", "갔습니다"],
      answer: "아파서 병원에 갔습니다"
    }
  ]
},


l94: {
  id: "l94",
  title: "TOPIK I Writing 4 — Connectors and Reasons",
  unit: "u_topik",
  xp: 30,

  vocabIds: [],

  questions: [

    {
      type: "fill",
      prompt: "비가 ___ 우산을 가져갑니다.",
      options: ["와서", "오고", "오는", "오면"],
      answer: "와서"
    },

    {
      type: "fill",
      prompt: "시간이 없___ 택시를 탔습니다.",
      options: ["는", "고", "어서", "을"],
      answer: "어서"
    },

    {
      type: "arrange",
      prompt: "다음 단어를 바르게 배열하십시오.",
      words: ["피곤해서", "집에서", "쉬었습니다"],
      answer: "피곤해서 집에서 쉬었습니다"
    },

    {
      type: "fill",
      prompt: "한국어가 재미있___ 매일 공부합니다.",
      options: ["고", "어서", "는", "을"],
      answer: "어서"
    },

    {
      type: "arrange",
      prompt: "다음 단어를 바르게 배열하십시오.",
      words: ["날씨가", "좋아서", "공원에", "갔습니다"],
      answer: "날씨가 좋아서 공원에 갔습니다"
    }
  ]
},


l95: {
  id: "l95",
  title: "TOPIK II Writing 1 — Short Written Responses",
  unit: "u_topik",
  xp: 35,

  vocabIds: [],

  questions: [

    {
      type: "fill",
      prompt: "최근에는 온라인 수업을 이용하는 학생들이 ___하고 있습니다.",
      options: ["증가", "감소", "출발", "도착"],
      answer: "증가"
    },

    {
      type: "fill",
      prompt: "건강을 유지하기 위해서는 규칙적으로 운동할 ___가 있습니다.",
      options: ["필요", "약속", "여행", "계절"],
      answer: "필요"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 바르게 배열하십시오.",
      words: ["환경을", "보호하기", "위해서", "노력해야", "합니다"],
      answer: "환경을 보호하기 위해서 노력해야 합니다"
    },

    {
      type: "fill",
      prompt: "인터넷은 정보를 쉽게 얻을 수 있다는 ___이 있습니다.",
      options: ["계획", "문제", "약속", "장점"],
      answer: "장점"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 바르게 배열하십시오.",
      words: ["문제를", "해결하기", "위해서는", "원인을", "찾아야", "합니다"],
      answer: "문제를 해결하기 위해서는 원인을 찾아야 합니다"
    }
  ]
},


/* =========================
   TOPIK I — MOCK TEST
   ========================= */

l96: {
  id: "l96",
  title: "TOPIK I Mock Test",
  unit: "u_topik",
  xp: 50,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "다음 중 '학교'와 관계있는 것은 무엇입니까?",
      options: [
        "시장",
        "비행기",
        "병원",
        "학생"
      ],
      answer: "학생"
    },

    {
      type: "fill",
      prompt: "저는 아침에 학교___ 갑니다.",
      options: ["에", "를", "가", "는"],
      answer: "에"
    },

    {
      type: "listening",
      audioText: "오늘은 날씨가 좋아서 친구와 공원에 갈 거예요.",
      prompt: "오늘 무엇을 할 예정입니까?",
      options: [
        "학교에서 공부합니다",
        "친구와 공원에 갑니다",
        "집에서 쉽니다",
        "병원에 갑니다"
      ],
      answer: "친구와 공원에 갑니다"
    },

    {
      type: "mc",
      prompt: "다음 글의 내용과 같은 것을 고르십시오.\n\n유나는 매일 아침 버스를 타고 회사에 갑니다. 회사는 집에서 멀기 때문에 보통 삼십 분 정도 걸립니다.",
      options: [
        "유나는 회사에 가지 않습니다",
        "유나는 매일 걸어서 회사에 갑니다",
        "회사는 집에서 가깝습니다",
        "유나는 버스를 타고 회사에 갑니다"
      ],
      answer: "유나는 버스를 타고 회사에 갑니다"
    },

    {
      type: "arrange",
      prompt: "다음 단어를 바르게 배열하십시오.",
      words: ["주말에", "친구와", "영화를", "봤습니다"],
      answer: "주말에 친구와 영화를 봤습니다"
    }
  ]
},


/* =========================
   TOPIK II — READING
   ========================= */

l97: {
  id: "l97",
  title: "TOPIK II Mock Reading Practice",
  unit: "u_topik",
  xp: 35,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "다음 글을 읽고 중심 내용을 고르십시오.\n\n현대 사회에서는 개인의 생활 방식이 다양해지면서 혼자 생활하는 사람도 증가하고 있다. 이러한 변화에 따라 1인 가구를 위한 소형 가전제품이나 간편식 시장도 함께 성장하고 있다.",
      options: [
        "1인 가구 증가에 따른 시장의 변화",
        "가전제품의 역사",
        "전통적인 가족의 특징",
        "간편식의 제조 방법"
      ],
      answer: "1인 가구 증가에 따른 시장의 변화"
    },

    {
      type: "mc",
      prompt: "다음 글에서 언급된 변화로 알맞은 것은 무엇입니까?",
      options: [
        "소형 가전제품의 사용이 줄고 있다",
        "가족의 규모가 커지고 있다",
        "1인 가구가 증가하고 있다",
        "간편식 시장이 사라지고 있다"
      ],
      answer: "1인 가구가 증가하고 있다"
    },

    {
      type: "fill",
      prompt: "이러한 변화에 ___ 소형 가전제품 시장도 성장하고 있다.",
      options: ["대해", "따라", "통해", "위해"],
      answer: "따라"
    },

    {
      type: "mc",
      prompt: "'함께 성장하고 있다'와 의미가 가장 가까운 것은 무엇입니까?",
      options: [
        "빠르게 감소하고 있다",
        "서로 경쟁하고 있다",
        "점점 사라지고 있다",
        "같이 발전하고 있다"
      ],
      answer: "같이 발전하고 있다"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 바르게 배열하십시오.",
      words: ["생활", "방식이", "다양해지면서", "변화하고", "있다"],
      answer: "생활 방식이 다양해지면서 변화하고 있다"
    }
  ]
},


l98: {
  id: "l98",
  title: "TOPIK II Mock Listening Practice",
  unit: "u_topik",
  xp: 35,

  vocabIds: [],

  questions: [

    {
      type: "listening",
      audioText: "최근 기업들은 직원들의 업무 효율성을 높이기 위해 재택근무 제도를 도입하고 있습니다. 직원들은 출퇴근 시간을 절약할 수 있다는 점을 장점으로 생각하지만, 동료들과의 의사소통이 어려워질 수 있다는 우려도 나타나고 있습니다.",
      prompt: "재택근무에 대한 설명으로 알맞은 것을 고르십시오.",
      options: [
        "출퇴근 시간을 줄일 수 있지만 의사소통에 어려움이 있을 수 있다",
        "업무 시간이 늘어나지만 의사소통은 쉬워진다",
        "직원들의 이동이 증가하지만 업무 효율은 낮아진다",
        "기업들이 재택근무 제도를 모두 폐지하고 있다"
      ],
      answer: "출퇴근 시간을 줄일 수 있지만 의사소통에 어려움이 있을 수 있다"
    },

    {
      type: "listening",
      audioText: "한 연구 결과에 따르면 충분한 수면을 취한 사람은 그렇지 않은 사람보다 집중력이 높게 나타났습니다. 연구진은 수면이 단순히 피로를 해소하는 것뿐만 아니라 학습 능력과 기억력에도 영향을 미친다고 설명했습니다.",
      prompt: "연구진은 수면이 무엇에 영향을 미친다고 설명했습니까?",
      options: [
        "경제 활동과 소비 습관",
        "식사 습관과 운동량",
        "출퇴근 시간과 업무량",
        "학습 능력과 기억력"
      ],
      answer: "학습 능력과 기억력"
    },

    {
      type: "listening",
      audioText: "정부는 대중교통 이용을 활성화하기 위해 교통비 지원 정책을 확대할 계획입니다. 이를 통해 시민들의 경제적 부담을 줄이는 동시에 교통 혼잡과 대기 오염 문제도 완화할 수 있을 것으로 기대하고 있습니다.",
      prompt: "정부가 교통비 지원 정책을 확대하려는 이유는 무엇입니까?",
      options: [
        "경제적 부담과 교통 및 환경 문제를 줄이기 위해",
        "자동차 이용을 증가시키기 위해",
        "대중교통 이용 요금을 인상하기 위해",
        "시민들의 이동을 제한하기 위해"
      ],
      answer: "경제적 부담과 교통 및 환경 문제를 줄이기 위해"
    },

    {
      type: "listening",
      audioText: "이번 조사는 청년층의 취업에 대한 인식을 알아보기 위해 실시되었습니다. 조사 결과 응답자의 상당수가 높은 임금보다 안정적인 근무 환경과 개인의 성장 가능성을 중요하게 생각하는 것으로 나타났습니다.",
      prompt: "조사 결과 청년층이 중요하게 생각하는 것은 무엇입니까?",
      options: [
        "높은 임금만을 중요하게 생각한다",
        "안정적인 근무 환경과 성장 가능성",
        "짧은 근무 시간만을 중요하게 생각한다",
        "회사와의 거리를 가장 중요하게 생각한다"
      ],
      answer: "안정적인 근무 환경과 성장 가능성"
    },

    {
      type: "listening",
      audioText: "도시의 인구가 지속적으로 증가하면서 주거 공간 부족 문제가 심각해지고 있습니다. 이에 따라 지방자치단체에서는 빈 건물을 활용하거나 새로운 주거 시설을 공급하는 등 다양한 대책을 마련하고 있습니다.",
      prompt: "지방자치단체는 어떤 대책을 마련하고 있습니까?",
      options: [
        "주거 시설을 줄이고 있다",
        "도시의 인구를 증가시키고 있다",
        "빈 건물을 활용하고 새로운 주거 시설을 공급하고 있다",
        "빈 건물을 모두 철거하고 있다"
      ],
      answer: "빈 건물을 활용하고 새로운 주거 시설을 공급하고 있다"
    }
  ]
},


/* =========================
   TOPIK II — WRITING
   ========================= */

l99: {
  id: "l99",
  title: "TOPIK II Writing Practice",
  unit: "u_topik",
  xp: 40,

  vocabIds: [],

  questions: [

    {
      type: "fill",
      prompt: "환경 문제를 해결하기 ___ 정부와 시민의 노력이 필요하다.",
      options: ["위해서는", "때문에는", "대해서는", "통해서는"],
      answer: "위해서는"
    },

    {
      type: "fill",
      prompt: "최근에는 1인 가구가 증가함___ 따라 소비 형태도 변화하고 있다.",
      options: ["이", "을", "에", "는"],
      answer: "에"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 바르게 배열하십시오.",
      words: ["기술의", "발달로", "우리의", "생활이", "편리해졌다"],
      answer: "기술의 발달로 우리의 생활이 편리해졌다"
    },

    {
      type: "fill",
      prompt: "이 문제를 해결하기 위해서는 원인을 정확하게 ___ 필요가 있다.",
      options: ["파악하고", "파악하는", "파악해서", "파악할"],
      answer: "파악할"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 바르게 배열하십시오.",
      words: ["개인의", "노력뿐만", "아니라", "사회적인", "관심도", "필요하다"],
      answer: "개인의 노력뿐만 아니라 사회적인 관심도 필요하다"
    }
  ]
},


/* =========================
   TOPIK II — MOCK TEST
   ========================= */

l100: {
  id: "l100",
  title: "TOPIK II Mock Test",
  unit: "u_topik",
  xp: 50,

  vocabIds: [],

  questions: [

    {
      type: "mc",
      prompt: "다음 단어의 뜻과 가장 가까운 것을 고르십시오. '지속되다'",
      options: [
        "갑자기 시작되다",
        "계속되다",
        "완전히 사라지다",
        "빠르게 변화하다"
      ],
      answer: "계속되다"
    },

    {
      type: "mc",
      prompt: "다음 글의 중심 내용으로 알맞은 것을 고르십시오.\n\n기술의 발전은 사람들의 생활을 편리하게 만들었지만 새로운 사회적 문제도 발생시키고 있다. 따라서 기술을 효과적으로 활용하기 위해서는 편리함뿐만 아니라 그에 따른 부작용도 함께 고려해야 한다.",
      options: [
        "기술의 발전과 그에 따른 문제를 함께 고려해야 한다",
        "기술은 사회에 아무런 영향을 미치지 않는다",
        "기술 발전을 완전히 중단해야 한다",
        "편리함보다 기술의 가격이 중요하다"
      ],
      answer: "기술의 발전과 그에 따른 문제를 함께 고려해야 한다"
    },

    {
      type: "listening",
      audioText: "최근에는 환경 보호에 대한 관심이 높아지면서 일회용품 사용을 줄이려는 움직임이 확산되고 있습니다. 일부 기업에서는 다회용기를 도입하고 있으며 소비자들도 개인 컵이나 장바구니를 사용하는 등 일상생활에서 실천할 수 있는 방법을 찾고 있습니다.",
      prompt: "환경 보호를 위해 어떤 움직임이 확산되고 있습니까?",
      options: [
        "다회용기 사용을 줄이려는 움직임",
        "일회용품 생산을 늘리려는 움직임",
        "개인 컵 사용을 금지하려는 움직임",
        "일회용품 사용을 줄이려는 움직임"
      ],
      answer: "일회용품 사용을 줄이려는 움직임"
    },

    {
      type: "fill",
      prompt: "사회 문제를 해결하기 위해서는 개인의 노력뿐만 아니라 정부의 적극적인 ___도 필요하다.",
      options: [
        "여행",
        "정책",
        "약속",
        "취미"
      ],
      answer: "정책"
    },

    {
      type: "arrange",
      prompt: "다음 문장을 바르게 배열하십시오.",
      words: ["사회가", "변화함에", "따라", "사람들의", "생활 방식도", "달라지고", "있다"],
      answer: "사회가 변화함에 따라 사람들의 생활 방식도 달라지고 있다"
    }
  ]
 }
}

/* ================================
   TOPIK PRACTICE SETS
   ================================ */

const TOPIK_SETS = [

  /* =========================
     TOPIK I
     ========================= */

  {
    id: "t1",
    level: "TOPIK I",
    skill: "Vocabulary",
    title: "TOPIK I Vocabulary",
    lessonId: "l76"
  },

  {
    id: "t2",
    level: "TOPIK I",
    skill: "Reading",
    title: "TOPIK I Reading",
    lessonId: "l81"
  },

  {
    id: "t3",
    level: "TOPIK I",
    skill: "Listening",
    title: "TOPIK I Listening",
    lessonId: "l86"
  },

  {
    id: "t4",
    level: "TOPIK I",
    skill: "Writing",
    title: "TOPIK I Writing",
    lessonId: "l91"
  },

  {
    id: "t5",
    level: "TOPIK I",
    skill: "Mock Test",
    title: "TOPIK I Mock Test",
    lessonId: "l96",
    mock: true
  },


  /* =========================
     TOPIK II
     ========================= */

  {
    id: "t6",
    level: "TOPIK II",
    skill: "Vocabulary",
    title: "TOPIK II Vocabulary",
    lessonId: "l80"
  },

  {
    id: "t7",
    level: "TOPIK II",
    skill: "Reading",
    title: "TOPIK II Reading",
    lessonId: "l85"
  },

  {
    id: "t8",
    level: "TOPIK II",
    skill: "Listening",
    title: "TOPIK II Listening",
    lessonId: "l90"
  },

  {
    id: "t9",
    level: "TOPIK II",
    skill: "Writing",
    title: "TOPIK II Writing",
    lessonId: "l95"
  },

  {
    id: "t10",
    level: "TOPIK II",
    skill: "Mock Test",
    title: "TOPIK II Mock Test",
    lessonId: "l100",
    mock: true
  }

];

function levelFromXP(xp) {
  const perLevel = 100;
  const level = Math.floor(xp / perLevel) + 1;
  const into = xp % perLevel;
  return { level, into, need: perLevel };
    }
