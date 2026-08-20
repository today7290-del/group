/**
 * [관계 스타일 테스트] 모바일 웹 애플리케이션 - JavaScript
 * 30문항 기반 관계 및 사랑의 언어 스타일 분석
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. 5가지 관계 스타일 데이터 정의
  const TYPES = {
    '격려형': {
      id: 'ENCOURAGE',
      name: '격려형',
      title: '👏 격려형',
      subtitle: '"따뜻한 말 한마디가 마음을 움직이는 사람"',
      emoji: '👏',
      tags: ['#격려형', '#칭찬과인정', '#응원과용기', '#긍정언어'],
      strengths: [
        '다른 사람의 진심 어린 말을 소중하게 가슴에 새깁니다.',
        '진심 어린 격려를 받으면 다시 일어설 용기와 힘을 얻습니다.',
        '자신의 노고와 장점을 알아봐 주는 사람에게 깊은 고마움을 느낍니다.',
        '따뜻한 말 한마디에 담긴 진심을 잘 알아차립니다.'
      ],
      cautions: [
        '무심하거나 비판적인 말을 오래 마음에 담아둘 수 있습니다.',
        '말로 표현받지 못하면 상대가 나를 소중히 여기지 않는다고 느낄 수 있습니다.',
        '상대의 한마디에 감정이 쉽게 흔들리지 않도록 마인드 컨트롤이 필요합니다.'
      ],
      community: [
        '따뜻한 말로 마음을 전해줄 때',
        '"수고했어", "네가 있어서 정말 든든해", "잘하고 있어"',
        '나의 수고와 장점을 구체적으로 칭찬해 줄 때'
      ],
      beware: [
        '부정적이거나 날카로운 비판을 들을 때',
        '무심하고 차가운 반응을 접할 때',
        '나의 수고와 노력이 당연하게 여겨질 때'
      ],
      love: '나의 존재와 노력을 알아주고 따뜻한 칭찬과 응원의 말로 표현해 주는 사랑입니다.',
      weeklyAction: '오늘 소중한 사람에게 구체적인 칭찬과 따뜻한 격려 한마디 건네보기'
    },

    '동행형': {
      id: 'COMPANION',
      name: '동행형',
      title: '🤝 동행형',
      subtitle: '"함께 시간을 보내주는 것이 사랑이라고 믿는 사람"',
      emoji: '☕',
      tags: ['#동행형', '#함께하는시간', '#경청과교감', '#오롯한집중'],
      strengths: [
        '소중한 사람과의 깊이 있는 대화와 시간을 매우 가치 있게 여깁니다.',
        '나에게 온전히 집중해 주는 순간에서 큰 안정감과 사랑을 느낍니다.',
        '상대의 작은 관심과 경청의 태도를 빠르게 알아차립니다.',
        '함께 걷거나 다정하게 만나는 시간 자체를 진심으로 즐깁니다.'
      ],
      cautions: [
        '바빠서 시간을 함께 보내지 못하는 것을 나에 대한 애정 부족으로 오해할 수 있습니다.',
        '상대방이 혼자만의 시간이 필요할 때 서운함을 느낄 수 있으니 주의가 필요합니다.'
      ],
      community: [
        '차를 마시거나 산책하며 오롯이 대화할 때',
        '나의 이야기에 휴대폰을 내려놓고 몰입해 줄 때',
        '바쁜 와중에도 나를 위해 시간을 내어줄 때'
      ],
      beware: [
        '함께 있을 때 휴대폰만 보거나 딴청을 피울 때',
        '약속 시간을 가볍게 미루거나 취소할 때',
        '건성으로 이야기를 들을 때'
      ],
      love: '다른 방해 요소 없이 나에게 온전히 눈을 맞추며 함께 시간을 나누는 사랑입니다.',
      weeklyAction: '이번 주 소중한 사람과 휴대폰을 내려놓고 30분 동안 깊은 대화 나눠보기'
    },

    '실천형': {
      id: 'ACTION',
      name: '실천형',
      title: '🛠️ 실천형',
      subtitle: '"말보다 행동에서 깊은 사랑을 느끼는 사람"',
      emoji: '🛠️',
      tags: ['#실천형', '#묵묵한배려', '#도움과섬김', '#책임감'],
      strengths: [
        '말뿐인 고백보다 구체적인 행동으로 도움을 주는 진심을 알아봅니다.',
        '어려운 상황에서 먼저 손 내밀어 주는 이에게 깊은 감사를 느낍니다.',
        '상대방의 필요를 먼저 알아차리고 현실적으로 챙겨주는 섬김을 귀하게 여깁니다.'
      ],
      cautions: [
        '말이나 선물로만 표현할 때 행동이 없으면 진정성을 낮게 평가할 수 있습니다.',
        '상대가 사정상 직접 도와주지 못할 때 오해하지 않도록 배려가 필요합니다.'
      ],
      community: [
        '내가 힘들어하는 일을 먼저 도와줄 때',
        '필요한 것을 말하기 전에 챙겨줄 때',
        '말에 그치지 않고 약속을 행동으로 보여줄 때'
      ],
      beware: [
        '말만 앞서고 구체적인 도움이 없을 때',
        '도움을 요청했는데 외면받는 느낌이 들 때',
        '약속한 일을 차일피일 미룰 때'
      ],
      love: '말보다는 내 짐을 나누어 주고 현실적인 도움을 건네는 행동의 사랑입니다.',
      weeklyAction: '주변 사람의 번거롭고 힘든 일 한 가지를 말없이 먼저 도와주기'
    },

    '마음형': {
      id: 'HEART',
      name: '마음형',
      title: '🎁 마음형',
      subtitle: '"나를 생각하며 준비한 마음과 정성에 감동받는 사람"',
      emoji: '🎁',
      tags: ['#마음형', '#정성어린선물', '#기억과추억', '#손편지'],
      strengths: [
        '작은 선물이나 손편지에 담긴 상대의 정성과 기쁨을 깊이 알아봅니다.',
        '나를 떠올리며 준비한 시간과 마음의 가치를 매우 소중히 여깁니다.',
        '소소한 기념일이나 지나가는 말로 했던 취향을 기억해 주면 큰 감동을 받습니다.'
      ],
      cautions: [
        '선물의 물질적 가치보다 그 안에 담긴 "나를 생각한 마음"에 집중해야 합니다.',
        '정성이 느껴지지 않는 형식적인 반응에 상처를 받을 수 있습니다.'
      ],
      community: [
        '내가 좋아하는 간식이나 소품을 깜짝 챙겨줄 때',
        '나를 생각하며 쓴 진심 어린 메모나 편지를 받을 때',
        '내가 좋아하는 취향을 잊지 않고 기억해 줄 때'
      ],
      beware: [
        '중요한 날이나 기억을 무성의하게 지나칠 때',
        '성의 없이 겉치레로만 응대할 때',
        '내가 준 정성을 가볍게 여길 때'
      ],
      love: '나를 떠올리고 고민하며 준비한 정성 어린 마음과 선물로 전해지는 사랑입니다.',
      weeklyAction: '소중한 사람의 취향을 담은 작은 선물이나 진심 어린 손메모 전달하기'
    },

    '친밀형': {
      id: 'INTIMACY',
      name: '친밀형',
      title: '😊 친밀형',
      subtitle: '"따뜻한 표정과 미소, 친근한 반응에서 마음이 열리는 사람"',
      emoji: '😊',
      tags: ['#친밀형', '#따뜻한미소', '#반가운반응', '#친근한교감'],
      strengths: [
        '상대의 따뜻한 비언어적 표정과 반가운 눈빛에서 큰 안도감을 느낍니다.',
        '밝은 미소와 친근하게 건네는 인사에 편안하게 마음의 문을 엽니다.',
        '분위기를 온화하고 다정하게 만드는 능력과 정서적 교감 능력이 뛰어납니다.'
      ],
      cautions: [
        '상대의 무표정이나 차가운 눈빛에 필요 이상으로 위축될 수 있습니다.',
        '상대의 컨디션 저하로 인한 굳은 표정을 나 때문으로 오인하지 않는 지혜가 필요합니다.'
      ],
      community: [
        '나를 보며 환하게 웃어주고 반갑게 맞아줄 때',
        '다정한 어조와 따뜻한 눈빛으로 반응해 줄 때',
        '가벼운 하이파이브나 친근한 악수로 마음을 나눌 때'
      ],
      beware: [
        '굳은 표정으로 차갑게 마주할 때',
        '인사를 건넸는데 무표정하게 지나칠 때',
        '차가운 분위기를 조율 없이 방치할 때'
      ],
      love: '따뜻한 눈빛과 다정한 미소, 편안한 온기로 마음을 감싸주는 사랑입니다.',
      weeklyAction: '오늘 만나는 사람들에게 먼저 환하고 따뜻한 미소로 인사를 건네기'
    }
  };

  // 2. 30가지 질문 데이터
  const QUESTIONS = [
    {
      id: 1,
      optA: { text: "진심 어린 칭찬과 따뜻한 격려의 말을 들을 때 마음이 편안해진다.", type: '격려형' },
      optB: { text: "나를 향해 환하게 웃어주며 반갑게 맞아줄 때 마음이 편안해진다.", type: '친밀형' }
    },
    {
      id: 2,
      optA: { text: "내가 힘들어할 때 직접 와서 일을 도와주면 깊이 고맙다.", type: '실천형' },
      optB: { text: "시간을 내어 곁에 함께 있어주고 내 말을 들어주면 깊이 고맙다.", type: '동행형' }
    },
    {
      id: 3,
      optA: { text: "반갑게 맞아주고 따뜻한 표정으로 반응해 주면 친밀함이 느껴진다.", type: '친밀형' },
      optB: { text: "용기를 주는 따뜻한 말을 건네주면 친밀함이 느껴진다.", type: '격려형' }
    },
    {
      id: 4,
      optA: { text: "나를 생각해 마련해 준 소소한 선물을 받을 때 감동을 받는다.", type: '마음형' },
      optB: { text: "어려운 일이 생겼을 때 함께 해결하려고 손 내밀어 줄 때 감동을 받는다.", type: '실천형' }
    },
    {
      id: 5,
      optA: { text: "함께 산책하거나 차를 마시며 시간을 보낼 때 마음이 충만하다.", type: '동행형' },
      optB: { text: "따뜻하고 밝은 미소로 나를 바라봐 줄 때 마음이 충만하다.", type: '친밀형' }
    },
    {
      id: 6,
      optA: { text: "힘들 때 다정한 표정과 안도감을 주는 반응을 받으면 위로가 된다.", type: '친밀형' },
      optB: { text: "나를 위해 준비한 맛있는 간식이나 작은 정성을 받으면 위로가 된다.", type: '마음형' }
    },
    {
      id: 7,
      optA: { text: "내가 한 일을 알아보고 구체적으로 칭찬해 주면 다시 힘이 난다.", type: '격려형' },
      optB: { text: "내가 마주한 문제에 실질적인 도움을 주면 다시 힘이 난다.", type: '실천형' }
    },
    {
      id: 8,
      optA: { text: "말보다는 실질적인 행동과 묵묵한 배려에서 사랑을 느낀다.", type: '실천형' },
      optB: { text: "나에게 오롯이 집중하며 함께 시간을 보내주는 것에서 사랑을 느낀다.", type: '동행형' }
    },
    {
      id: 9,
      optA: { text: "바쁜 일정 중에도 나를 위해 시간을 내어줄 때 마음의 문이 열린다.", type: '동행형' },
      optB: { text: "나의 취향을 기억하고 준비한 작은 선물을 받을 때 마음의 문이 열린다.", type: '마음형' }
    },
    {
      id: 10,
      optA: { text: "나의 수고와 장점을 알아주고 칭찬해 줄 때 마음이 밝아진다.", type: '격려형' },
      optB: { text: "다정하게 눈을 맞추며 친근하게 다가와 줄 때 마음이 밝아진다.", type: '친밀형' }
    },
    {
      id: 11,
      optA: { text: "나를 생각해 쓴 손편지나 메모가 오래 기억에 남는다.", type: '마음형' },
      optB: { text: "어려울 때 묵묵히 곁에서 일을 도와준 실천이 오래 기억에 남는다.", type: '실천형' }
    },
    {
      id: 12,
      optA: { text: "밝은 미소로 다정하게 대해주는 사람이 좋다.", type: '친밀형' },
      optB: { text: "내 이야기를 귀담아들어 주며 함께 시간을 보내주는 사람이 좋다.", type: '동행형' }
    },
    {
      id: 13,
      optA: { text: "힘들 때 곁에서 차분히 대화를 나누어 주면 큰 위안이 된다.", type: '동행형' },
      optB: { text: "힘들 때 '넌 잘해낼 수 있어'라는 응원의 말을 들으면 큰 위안이 된다.", type: '격려형' }
    },
    {
      id: 14,
      optA: { text: "내가 필요한 것을 먼저 알아차리고 행동으로 도와주면 고맙다.", type: '실천형' },
      optB: { text: "따뜻한 말 한마디로 내 감정을 정성껏 어루만져 주면 고맙다.", type: '격려형' }
    },
    {
      id: 15,
      optA: { text: "내가 좋아할 만한 것을 기억하고 전해주는 마음이 소중하다.", type: '마음형' },
      optB: { text: "언제나 다정하고 환한 표정으로 반응해 주는 태도가 소중하다.", type: '친밀형' }
    },
    {
      id: 16,
      optA: { text: "바쁜 시간 속에서도 나와의 시간을 약속해 줄 때 소중함을 느낀다.", type: '동행형' },
      optB: { text: "나의 작은 성취도 놓치지 않고 축하하고 인정해 줄 때 소중함을 느낀다.", type: '격려형' }
    },
    {
      id: 17,
      optA: { text: "내가 번거로워하는 일을 대신 깔끔하게 정리해 주면 든든하다.", type: '실천형' },
      optB: { text: "나를 생각하며 준비한 귀여운 선물이나 메시지가 있으면 든든하다.", type: '마음형' }
    },
    {
      id: 18,
      optA: { text: "자연스럽고 친근한 표정과 분위기가 나를 편안하게 해준다.", type: '친밀형' },
      optB: { text: "다른 방해 없이 오롯이 나에게 집중해 주는 시간이 나를 편안하게 해준다.", type: '동행형' }
    },
    {
      id: 19,
      optA: { text: "진심 어린 격려와 긍정적인 말을 들을 때 자신감이 생긴다.", type: '격려형' },
      optB: { text: "내가 처한 상황에서 든든하게 현실적인 지원을 받을 때 자신감이 생긴다.", type: '실천형' }
    },
    {
      id: 20,
      optA: { text: "나를 보며 밝고 환하게 반응해 줄 때 기분이 좋아진다.", type: '친밀형' },
      optB: { text: "나를 위해 정성스럽게 챙겨준 음료나 선물을 받으면 기분이 좋아진다.", type: '마음형' }
    },
    {
      id: 21,
      optA: { text: "충분한 시간을 함께 보내며 대화하는 것이 관계의 핵심이다.", type: '동행형' },
      optB: { text: "서로에게 긍정적이고 따뜻한 말을 건네는 것이 관계의 핵심이다.", type: '격려형' }
    },
    {
      id: 22,
      optA: { text: "내가 부닥친 짐을 나누어 가볍게 만들어 주는 사람이 참 고맙다.", type: '실천형' },
      optB: { text: "작은 것도 나를 기억하고 세심하게 챙겨주는 사람이 참 고맙다.", type: '마음형' }
    },
    {
      id: 23,
      optA: { text: "따뜻한 눈빛으로 기쁘게 맞아주는 다정함이 좋다.", type: '친밀형' },
      optB: { text: "나와 함께 천천히 발을 맞추어 걸어가며 대화하는 것이 좋다.", type: '동행형' }
    },
    {
      id: 24,
      optA: { text: "나의 노력과 수고를 정당하게 알아주는 모습에 마음이 간다.", type: '격려형' },
      optB: { text: "말보다 먼저 행동으로 배려를 실천하는 모습에 마음이 간다.", type: '실천형' }
    },
    {
      id: 25,
      optA: { text: "나를 생각해 준비한 선물과 메시지가 마음에 오래 남는다.", type: '마음형' },
      optB: { text: "따뜻하고 반가운 반응으로 나를 마주해주던 순간이 마음에 오래 남는다.", type: '친밀형' }
    },
    {
      id: 26,
      optA: { text: "함께 음식을 나누거나 차를 마시며 여유를 갖는 시간이 소중하다.", type: '동행형' },
      optB: { text: "서로를 향해 '고마워', '잘했어'라고 말해주는 시간이 소중하다.", type: '격려형' }
    },
    {
      id: 27,
      optA: { text: "내가 할 일을 대신 챙겨서 해결해 준 행동에 깊이 감동한다.", type: '실천형' },
      optB: { text: "시간과 정성을 들여 나를 위한 무언가를 고르고 준비한 것에 깊이 감동한다.", type: '마음형' }
    },
    {
      id: 28,
      optA: { text: "편안한 미소와 다정한 어조로 건네는 대화가 편안하다.", type: '친밀형' },
      optB: { text: "나와 약속한 시간을 소중히 여기며 지켜주는 행동이 편안하다.", type: '동행형' }
    },
    {
      id: 29,
      optA: { text: "나의 장점을 발굴하고 아낌없이 칭찬해 주는 표현이 좋다.", type: '격려형' },
      optB: { text: "나를 기쁘게 해주려고 준비한 작은 깜짝 정성이 좋다.", type: '마음형' }
    },
    {
      id: 30,
      optA: { text: "필요할 때 망설임 없이 손길을 내밀어 주는 도움에 사랑을 느낀다.", type: '실천형' },
      optB: { text: "언제나 한결같이 다정하고 반가운 태도로 맞이해 주는 모습에 사랑을 느낀다.", type: '친밀형' }
    }
  ];

  // 3. 앱 상태 변수
  let currentIndex = 0;
  let userAnswers = []; // 각 문항별 선택 유형 기록
  let scores = {
    '격려형': 0,
    '동행형': 0,
    '실천형': 0,
    '마음형': 0,
    '친밀형': 0
  };

  // 4. DOM 엘리먼트 참조
  const startScreen = document.getElementById('startScreen');
  const quizScreen = document.getElementById('quizScreen');
  const loadingScreen = document.getElementById('loadingScreen');
  const resultScreen = document.getElementById('resultScreen');

  const startBtn = document.getElementById('startBtn');
  const prevBtn = document.getElementById('prevBtn');
  const restartBtn = document.getElementById('restartBtn');
  const shareBtn = document.getElementById('shareBtn');
  const otherTypesBtn = document.getElementById('otherTypesBtn');

  const otherTypesModal = document.getElementById('otherTypesModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const otherTypesList = document.getElementById('otherTypesList');

  const currentStepText = document.getElementById('currentStepText');
  const progressBarFill = document.getElementById('progressBarFill');
  const qCategoryBadge = document.getElementById('qCategoryBadge');
  const qTitle = document.getElementById('qTitle');
  const optionABtn = document.getElementById('optionABtn');
  const optionBBtn = document.getElementById('optionBBtn');
  const optionAText = document.getElementById('optionAText');
  const optionBText = document.getElementById('optionBText');

  const resultTitle = document.getElementById('resultTitle');
  const resultSubtitle = document.getElementById('resultSubtitle');
  const resultEmojiVisual = document.getElementById('resultEmojiVisual');
  const resultTags = document.getElementById('resultTags');
  const resultStrengths = document.getElementById('resultStrengths');
  const resultCautions = document.getElementById('resultCautions');
  const resultCommunity = document.getElementById('resultCommunity');
  const resultBeware = document.getElementById('resultBeware');
  const resultLove = document.getElementById('resultLove');
  const resultWeeklyAction = document.getElementById('resultWeeklyAction');

  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  let currentSortedRankings = [];

  // 5. 화면 전환 함수
  function showScreen(screenToShow) {
    [startScreen, quizScreen, loadingScreen, resultScreen].forEach(screen => {
      if (screen === screenToShow) {
        screen.classList.remove('hidden');
        screen.classList.add('active');
      } else {
        screen.classList.add('hidden');
        screen.classList.remove('active');
      }
    });
  }

  // 6. 질문 렌더링 함수
  function renderQuestion() {
    const q = QUESTIONS[currentIndex];

    currentStepText.textContent = currentIndex + 1;
    const progressPercent = ((currentIndex + 1) / QUESTIONS.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;

    qCategoryBadge.textContent = `Q${q.id}`;
    qTitle.textContent = `Q${q.id}. 나에게 더 편안하고 마음이 열리는 순간은?`;

    optionAText.textContent = q.optA.text;
    optionBText.textContent = q.optB.text;

    // 이전 버튼 제어
    if (currentIndex > 0) {
      prevBtn.style.visibility = 'visible';
    } else {
      prevBtn.style.visibility = 'hidden';
    }
  }

  // 7. 선택지 클릭 처리
  function handleSelect(choiceKey) {
    const q = QUESTIONS[currentIndex];
    const selectedType = choiceKey === 'A' ? q.optA.type : q.optB.type;

    userAnswers[currentIndex] = selectedType;

    if (currentIndex < QUESTIONS.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      // 30문항 완료
      calculateAndShowResult();
    }
  }

  // 8. 점수 계산 및 결과 렌더링
  function calculateAndShowResult() {
    // 점수 초기화
    Object.keys(scores).forEach(k => scores[k] = 0);

    // 집계
    userAnswers.forEach(type => {
      if (scores[type] !== undefined) {
        scores[type]++;
      }
    });

    // 정렬 (점수 내림차순)
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    currentSortedRankings = sorted;

    showScreen(loadingScreen);

    setTimeout(() => {
      const topTypeName = sorted[0][0];
      const topTypeData = TYPES[topTypeName];

      // 결과 화면 데이터 바인딩
      resultTitle.textContent = topTypeData.title;
      resultSubtitle.textContent = topTypeData.subtitle;
      resultEmojiVisual.textContent = topTypeData.emoji;

      // 태그
      resultTags.innerHTML = topTypeData.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

      // 강점
      resultStrengths.innerHTML = topTypeData.strengths.map(item => `<li>${item}</li>`).join('');

      // 주의할 점
      resultCautions.innerHTML = topTypeData.cautions.map(item => `<li>${item}</li>`).join('');

      // 마음이 열리는 순간
      resultCommunity.innerHTML = topTypeData.community.map(item => `<li>${item}</li>`).join('');

      // 마음이 닫히는 순간
      resultBeware.innerHTML = topTypeData.beware.map(item => `<li>${item}</li>`).join('');

      // 사랑과 실천
      resultLove.textContent = `"${topTypeData.love}"`;
      resultWeeklyAction.textContent = `"${topTypeData.weeklyAction}"`;

      showScreen(resultScreen);
    }, 1200);
  }

  // 9. 모달 (2~5위 결과) 렌더링
  function renderOtherTypesModal() {
    otherTypesList.innerHTML = '';

    // 2위부터 5위까지
    for (let i = 1; i < currentSortedRankings.length; i++) {
      const [typeName, score] = currentSortedRankings[i];
      const typeData = TYPES[typeName];
      const percent = Math.round((score / QUESTIONS.length) * 100);

      const itemEl = document.createElement('div');
      itemEl.className = 'type-rank-item';
      itemEl.innerHTML = `
        <div class="rank-top-bar">
          <div class="rank-badge-name">
            <span>${i + 1}위</span>
            <span>${typeData.emoji} ${typeData.name}</span>
          </div>
          <div class="rank-score">${score}점 (${percent}%)</div>
        </div>
        <div class="rank-progress-track">
          <div class="rank-progress-bar" style="width: ${percent}%;"></div>
        </div>
        <p class="rank-summary">${typeData.subtitle}</p>
      `;

      otherTypesList.appendChild(itemEl);
    }

    otherTypesModal.classList.remove('hidden');
    otherTypesModal.setAttribute('aria-hidden', 'false');
  }

  // 10. 토스트 메세지 출력
  function showToast(msg) {
    toastMessage.textContent = msg;
    toastNotification.classList.remove('hidden');

    setTimeout(() => {
      toastNotification.classList.add('hidden');
    }, 2500);
  }

  // 11. 이벤트 리스너 등록
  startBtn.addEventListener('click', () => {
    currentIndex = 0;
    userAnswers = [];
    showScreen(quizScreen);
    renderQuestion();
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  });

  optionABtn.addEventListener('click', () => handleSelect('A'));
  optionBBtn.addEventListener('click', () => handleSelect('B'));

  restartBtn.addEventListener('click', () => {
    currentIndex = 0;
    userAnswers = [];
    showScreen(startScreen);
  });

  shareBtn.addEventListener('click', () => {
    const currentUrl = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(currentUrl)
        .then(() => showToast("테스트 링크가 클립보드에 복사되었습니다! 🎉"))
        .catch(() => showToast("링크 복사에 실패했습니다. 주소창을 이용해 주세요."));
    } else {
      showToast("결과 링크가 복사되었습니다! 🎉");
    }
  });

  otherTypesBtn.addEventListener('click', renderOtherTypesModal);

  closeModalBtn.addEventListener('click', () => {
    otherTypesModal.classList.add('hidden');
    otherTypesModal.setAttribute('aria-hidden', 'true');
  });

  otherTypesModal.addEventListener('click', (e) => {
    if (e.target === otherTypesModal) {
      otherTypesModal.classList.add('hidden');
      otherTypesModal.setAttribute('aria-hidden', 'true');
    }
  });

});