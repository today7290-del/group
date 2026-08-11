/**
 * [공동체 관계 스타일] 모바일 유형 테스트 웹 애플리케이션 - JavaScript
 * 30문항 기반 공동체 관계 및 사랑의 언어 유형 분석
 */

document.addEventListener('DOMContentLoaded', () => {

  ;
  // 1. 5가지 공동체 사랑 유형 데이터 정의
  const TYPES = {
    '격려형': {
      id: 'ENCOURAGE',
      name: '격려형',
      title: '① 격려형',
      subtitle: '"따뜻한 말 한마디가 마음을 움직이는 사람"',
      emoji: '👏',
      tags: ['#격려형', '#칭찬요정', '#응원과용기', '#긍정언어'],
      strengths: [
        '다른 사람의 진심 어린 말을 소중하게 여깁니다.',
        '격려를 받으면 다시 힘을 낼 수 있습니다.',
        '자신의 장점을 발견해 주는 사람에게 마음을 엽니다.',
        '말 한마디에 담긴 마음을 잘 느낍니다.'
      ],
      cautions: [
        '무심한 말이나 비판적인 말을 오래 마음에 담아둘 수 있습니다.',
        '말로 표현하지 않으면 상대가 자신을 소중하게 여기지 않는다고 느낄 수 있습니다.',
        '상대의 말에 너무 큰 의미를 부여하지 않도록 주의할 필요가 있습니다.'
      ],
      community: [
        '말로 마음을 표현해 줄 때',
        '"수고했어요."',
        '"당신이 있어서 참 좋아요."',
        '"잘하고 있어요."',
        '누군가 나의 장점을 알아주었을 때'
         ],
      beware: [
        '부정적인 말은 조심해주세요.',
'무심한 말로 상처 주지 말아주세요.',
'다른 사람과 비교하지 말아주세요.',
'수고와 노력을 가볍게 여기지 말아주세요.'
      ],
      love: 
        '"내가 한 일과 나의 존재를 알아주는 따뜻한 말 한마디에 마음이 열립니다. 나의 존재와 수고를 알아주고 따뜻한 말로 표현해 주세요."'
      ,
      weeklyAction: '"이번 주 한 사람에게 구체적인 칭찬이나 격려의 말을 먼저 전해보기"'
    },

    '동행형': {
      id: 'COMPANION',
      name: '동행형',
      title: '② 동행형',
      subtitle: '"함께 있어주는 것이 사랑이라고 믿는 사람"',
      emoji: '☕',
      tags: ['#동행형', '#함께하는시간', '#경청과교제', '#관계의연결고리'],
      strengths: [
        '관계를 소중하게 여깁니다.',
        '깊이 있는 대화를 중요하게 생각합니다.',
        '함께하는 시간에서 안정감을 느낍니다.',
        '상대방의 관심과 집중을 잘 알아차립니다.'
      ],
      cautions: [
        '함께하지 못하는 것을 사랑이 부족한 것으로 오해할 수 있습니다.',
        '상대가 바쁘거나 혼자 있을 시간이 필요한 것을 개인적인 거절로 받아들이지 않도록 주의할 필요가 있습니다.',
        '관계에 지나치게 많은 시간과 에너지를 사용하지 않도록 자신의 경계도 돌봐야 합니다.'
      ],
      community: [
        '함께 식사할 때',
        '나의 이야기를 충분히 들어줄 때',
        '함께 산책하거나 차를 마실 때',
        '바쁜 중에도 나를 위해 시간을 내어줄 때'
          ],
           beware: [
        '대화할 때 건성으로 듣지 말아주세요.',
'약속을 쉽게 취소하지 말아주세요.',
'함께하지 못한다고 마음이 없다고 생각하지 말아주세요.',
'혼자 있는 시간을 존중해주세요.'
      ],
      love: [
        '나와 함께 시간을 보내고, 내가 하는 이야기에 관심을 가져주세요.'
      ],
      weeklyAction: '이번 주 한 사람에게 먼저 시간을 내어 함께 식사하거나 차를 마시자고 제안하기'
    },

    '실천형': {
      id: 'ACTION',
      name: '실천형',
      title: '③ 실천형',
      subtitle: '"말보다 행동에서 사랑을 느끼는 사람"',
      emoji: '🛠️',
      tags: ['#실천형', '#행동파', '#책임감갑', '#묵묵한섬김'],
      strengths: [
        '행동의 진심을 잘 알아봅니다.',
        '책임감과 성실함을 중요하게 생각합니다.',
        '말보다 실제적인 배려를 신뢰합니다.',
        '어려운 상황에서 누군가의 도움을 받으면 깊이 감사할 줄 압니다.'
      ],
      cautions: [
        '도움을 받지 못하면 관심이 없다고 느낄 수있습니다.',
        '말이나 마음으로 표현하는 사랑의 가치를 작게 생각할 수 있습니다.',
        '상대가 도와주지 못하는 상황을 사랑의 부족으로 해석하지 않도록 주의할 필요가 있습니다'
      ],
      community: [
        '누군가 힘든 일을 함께 해결해 줄 때.',
        '필요한 것을 먼저 챙겨줄 때.',
        '내가 부탁하기 전에 도움을 줄 때',
        '말보다 행동으로 배려해 줄 때'
              ],
       beware: [
        '도움이 필요할 때 외면하지 말아주세요.',
'도움을 주기 전에 먼저 물어봐 주세요.',
'혼자 감당하게 두지 말아주세요.',
'도움을 받는 방식을 대신 결정하지 말아주세요.'
      ],
      love: [
        '말뿐 아니라 실제적인 행동으로 나를 도와주세요',
      ],
      weeklyAction: '이번 주 누군가에게 "무엇을 도와드릴까요?"라고 먼저 묻고 한 가지 행동으로 돕기'
    },

    '마음형': {
      id: 'HEART',
      name: '마음형',
      title: '④ 마음형',
      subtitle: '"나를 생각해 준 마음과 정성이 사랑으로 느껴지는 사람"',
      emoji: '💌',
      tags: ['#마음형', '#정성어린 선물', '#세심함', '#추억과기억'],
      strengths: [
        '작은 정성과 배려를 잘 알아봅니다.',
        '추억과 의미를 소중하게 생각합니다.',
        '다른 사람의 세심한 마음을 감사하게 받아들입니다.',
        '작은 것에도 담긴 마음을 발견합니다.'
      ],
      cautions: [
        '자신이 기대한 표현이 없으면 서운할 수 있습니다.',
        '선물이나 특별한 표현의 크기로 사랑의 크기를 판단하지 않도록 주의할 필요가 있습니다.',
        '상대가 표현하지 않았다고 해서 마음이 없는 것은 아닙니다.'
      ],
      community: [
        '나를 기억하고 작은 것을 챙겨줄 때',
        '생일이나 중요한 일을 기억해 줄 때',
        '손편지나 메모를 받을 때',
        '나를 생각하며 준비한 마음이 느껴질 때'
      ],
       beware: [
        '작은 표현을 가볍게 여기지 말아주세요.',
'중요한 날을 무심하게 넘기지 말아주세요.',
'정성을 당연하게 여기지 말아주세요.',
'선물의 크기로 마음을 판단하지 말아주세요.',
           ],
      love: [
        '나를 기억하고 있다는 마음을 작은 정성(선물, 편지 등)으로 표현해주세요.'
      ],
      weeklyAction: '이번 주 한 사람을 생각하며 작은 메모, 간식, 또는 정성 어린 것을 준비해 전하기'
    },

    '친밀형': {
      id: 'INTIMATE',
      name: '친밀형',
      title: '⑤ 친밀형',
      subtitle: '"따뜻한 존재감이 사랑이라고 믿는 사람"',
      emoji: '🤗',
      tags: ['#친밀형', '#따뜻한온기', '#친근한맞이', '#정서적안정감'],
      strengths: [
        '사람의 표정과 분위기를 잘 느낍니다.',
        '따뜻한 반응에서 정서적인 안정감을 얻습니다.',
        '상대의 기쁨과 슬픔에 자연스럽게 공감합니다.',
        '편안하고 따뜻한 관계를 중요하게 생각합니다.'
      ],
      cautions: [
        '사람마다 편안하게 느끼는 거리와 표현 방식이 다르다는 점을 존중해야 합니다.',
        '내가 편안하게 느끼는 표현이 상대에게는 부담스러울 수 있습니다.',
        '상대의 반응이 차갑게 느껴진다고 해서 반드시 나를 싫어하는 것은 아닙니다.'],
      community: [
        '환하게 웃으며 반겨줄 때.',
        '따뜻한 눈빛으로 바라봐줄 때.',
        '기쁜 일을 함께 기뻐해 줄 때.',
        '악수, 하이파이브 포옹 등 상대가 편안하게 받아들일 수 있는 표현을 해줄 때.'
      ],
       beware: [
        '차갑거나 무관심하게 대하지 말아주세요.',
'반갑지 않은 듯한 반응은 조심해주세요.',
'상대가 원하지 않는 신체 접촉은 하지 말아주세요.',
'편안한 거리를 존중해주세요.'
           ],
      love: 
        '따뜻한 표정과 반응으로 나를 반겨주고 마음을 표현해 주세요.',
      
      weeklyAction: '이번 주 만나는 사람에게 먼저 미소로 인사하고, 상대가 편안해하는 방식으로 따뜻함을 표현하기'
    }
  };

  // 2. 30개 문항 데이터셋 (Q1 ~ Q30) 및 채점표 매핑
const QUESTIONS = [
  {
    id: 1,
    optA: { text: '나를 생각해서 준비한 선물이나 메모를 받으면 사랑받고 있다는 느낌이 든다.', type: '마음형' },
    optB: { text: '진심 어린 격려와 응원의 말을 들으면 사랑받고 있다는 느낌이 든다.', type: '격려형' }
  },
  {
    id: 2,
    optA: { text: "내가 어려울 때 필요한 일을 실제로 도와주면 큰 고마움을 느낀다.", type: '실천형' },
    optB: { text: "나를 위해 시간을 내어 함께 있어주면 큰 고마움을 느낀다.", type: '동행형' }
  },
  {
    id: 3,
    optA: { text: "반갑게 맞아주고 따뜻한 표정과 눈빛으로 반응해 주면 가까워진 느낌이 든다.", type: '친밀형' },
    optB: { text: "내 마음을 알아주는 따뜻한 말을 건네주면 가까워진 느낌이 든다.", type: '격려형' }
  },
  {
    id: 4,
    optA: { text: "특별한 날이 아니어도 나를 기억하고 작은 정성을 보여주면 마음이 따뜻해진다.", type: '마음형' },
    optB: { text: "힘들 때 실제적인 도움을 주거나 필요한 일을 함께 해결해 주면 마음이 따뜻해진다.", type: '실천형' }
  },
  {
    id: 5,
    optA: { text: "함께 식사하거나 산책하며 편안하게 이야기를 나누는 시간이 좋다.", type: '동행형' },
    optB: { text: "작은 미소나 따뜻한 반응으로 반갑게 맞아주는 순간이 좋다.", type: '친밀형' }
  },
  {
    id: 6,
    optA: { text: "힘들 때 따뜻한 미소와 눈맞춤, 편안한 반응으로 곁을 지켜주면 위로가 된다.", type: '친밀형' },
    optB: { text: "나를 생각하며 준비한 간식이나 선물을 받으면 위로가 된다.", type: '마음형' }
  },
  {
    id: 7,
    optA: { text: "내가 잘한 일을 알아보고 구체적으로 칭찬해 주면 다시 힘을 낼 수 있다.", type: '격려형' },
    optB: { text: "내가 힘든 일을 겪을 때 실제적인 도움을 주면 다시 힘을 낼 수 있다.", type: '실천형' }
  },
  {
    id: 8,
    optA: { text: "말보다 행동으로 나를 배려해 주는 것이 사랑으로 느껴진다.", type: '실천형' },
    optB: { text: "나의 이야기를 충분히 들어주고 함께 시간을 보내주는 것이 사랑으로 느껴진다.", type: '동행형' }
  },
  {
    id: 9,
    optA: { text: "나를 위해 시간을 내어 함께 식사하거나 차를 마시면 마음이 열린다.", type: '동행형' },
    optB: { text: "나를 생각하며 정성껏 준비한 선물을 받으면 마음이 열린다.", type: '마음형' }
  },
  {
    id: 10,
    optA: { text: "내가 노력한 것을 알아주고 인정과 격려를 해주면 마음이 열린다.", type: '격려형' },
    optB: { text: "따뜻하게 웃어주고 반갑게 맞아주며 함께 기뻐해 주면 마음이 열린다.", type: '친밀형' }
  },
  {
    id: 11,
    optA: { text: "나를 생각해서 준비한 손편지나 선물이 오래 기억에 남는다.", type: '마음형' },
    optB: { text: "내가 어려울 때 실제로 도움을 주었던 행동이 오래 기억에 남는다.", type: '실천형' }
  },
  {
    id: 12,
    optA: { text: "밝게 웃으며 반갑게 맞아주고 자연스럽게 따뜻함을 표현해 주는 것이 좋다.", type: '친밀형' },
    optB: { text: "내 이야기에 관심을 가지고 함께 시간을 보내주는 것이 좋다.", type: '동행형' }
  },
  {
    id: 13,
    optA: { text: "힘들 때 누군가 곁에서 함께해 주며 이야기를 들어주면 위로가 된다.", type: '동행형' },
    optB: { text: "힘들 때 진심 어린 응원과 격려의 말을 들으면 위로가 된다.", type: '격려형' }
  },
  {
    id: 14,
    optA: { text: "필요한 일을 먼저 알아차리고 행동으로 도와주면 깊은 고마움을 느낀다.", type: '실천형' },
    optB: { text: "따뜻한 말과 격려로 나의 마음을 살펴주면 깊은 고마움을 느낀다.", type: '격려형' }
  },
  {
    id: 15,
    optA: { text: "내가 좋아할 만한 것을 기억하고 준비해 준 정성이 사랑으로 느껴진다.", type: '마음형' },
    optB: { text: "나를 반갑게 바라보고 따뜻하게 반응해 주는 것이 사랑으로 느껴진다.", type: '친밀형' }
  },
  {
    id: 16,
    optA: { text: "바쁜 중에도 나를 위해 시간을 내어주면 사랑받고 있다고 느낀다.", type: '동행형' },
    optB: { text: "나의 장점이나 수고를 알아보고 인정해 주면 사랑받고 있다고 느낀다.", type: '격려형' }
  },
  {
    id: 17,
    optA: { text: "힘든 일이 있을 때 실제로 도움을 주고 함께 해결해 주면 든든하다.", type: '실천형' },
    optB: { text: "나를 생각하며 선물이나 메모를 준비해 주면 든든하다.", type: '마음형' }
  },
  {
    id: 18,
    optA: { text: "따뜻한 미소나 눈맞춤, 자연스러운 손길처럼 편안한 표현을 받으면 친근하게 느껴진다.", type: '친밀형' },
    optB: { text: "내 이야기를 들어주고 나를 위해 충분한 시간을 내어주면 친근하게 느껴진다.", type: '동행형' }
  },
  {
    id: 19,
    optA: { text: "진심이 담긴 응원과 격려의 말을 들으면 다시 도전할 힘이 생긴다.", type: '격려형' },
    optB: { text: "내가 힘든 상황에서 실제적인 도움을 받으면 다시 도전할 힘이 생긴다.", type: '실천형' }
  },
  {
    id: 20,
    optA: { text: "따뜻하게 웃으며 반갑게 맞아주고 함께 기뻐해 주면 기분이 좋아진다.", type: '친밀형' },
    optB: { text: "나를 생각하며 준비한 선물이나 간식을 받으면 기분이 좋아진다.", type: '마음형' }
  },
  {
    id: 21,
    optA: { text: "서로의 생각과 마음을 나누며 충분한 시간을 보내는 것이 관계를 깊게 만든다고 느낀다.", type: '동행형' },
    optB: { text: "서로의 마음을 따뜻한 말로 표현하고 격려하는 것이 관계를 깊게 만든다고 느낀다.", type: '격려형' }
  },
  {
    id: 22,
    optA: { text: "힘든 일이 있을 때 내 몫까지 함께 나누고 직접 도와주는 사람이 좋다.", type: '실천형' },
    optB: { text: "작은 것이라도 나를 생각하며 정성껏 준비해 주는 사람이 좋다.", type: '마음형' }
  },
  {
    id: 23,
    optA: { text: "환하게 웃으며 반갑게 맞아주고 따뜻하게 반응해 주면 힘이 난다.", type: '친밀형' },
    optB: { text: "나를 위해 시간을 내어 함께 걸으며 이야기를 나누면 힘이 난다.", type: '동행형' }
  },
  {
    id: 24,
    optA: { text: "나의 노력이나 성과를 알아보고 칭찬해 주는 사람이 오래 기억에 남는다.", type: '격려형' },
    optB: { text: "내가 어려울 때 먼저 다가와 실제로 도와주는 사람이 오래 기억에 남는다.", type: '실천형' }
  },
  {
    id: 25,
    optA: { text: "나를 생각하며 준비한 기념품이나 정성스러운 선물이 오래 기억에 남는다.", type: '마음형' },
    optB: { text: "힘들 때 따뜻한 눈빛과 표정으로 위로해 준 순간이 오래 기억에 남는다.", type: '친밀형' }
  },
  {
    id: 26,
    optA: { text: "함께 식사하거나 차를 마시며 마음을 나누는 시간이 관계를 깊게 만든다고 느낀다.", type: '동행형' },
    optB: { text: "진심 어린 감사와 격려의 말이 관계를 깊게 만든다고 느낀다.", type: '격려형' }
  },
  {
    id: 27,
    optA: { text: "나를 위해 직접 행동으로 보여준 배려가 가장 고맙게 느껴진다.", type: '실천형' },
    optB: { text: "나를 생각하며 시간과 정성을 들여 준비한 것이 가장 고맙게 느껴진다.", type: '마음형' }
  },
  {
    id: 28,
    optA: { text: "편안한 미소와 눈맞춤, 가벼운 하이파이브처럼 서로 편안하게 받아들일 수 있는 표현이 친근하게 느껴진다.", type: '친밀형' },
    optB: { text: "함께 산책하거나 차를 마시며 편안하게 이야기하는 사람이 친근하게 느껴진다.", type: '동행형' }
  },
  {
    id: 29,
    optA: { text: "힘들 때 진심 어린 응원과 격려를 받으면 내가 소중한 사람이라는 생각이 든다.", type: '격려형' },
    optB: { text: "힘들 때 필요한 일을 함께 해결해 주면 내가 소중한 사람이라는 생각이 든다.", type: '실천형' }
  },
  {
    id: 30,
    optA: { text: "나를 위해 준비한 간식이나 물건에서 나를 생각해 준 마음이 느껴진다.", type: '마음형' },
    optB: { text: "따뜻하게 웃어주고 반갑게 맞아주는 모습에서 나를 향한 마음이 느껴진다.", type: '친밀형' }
  }
];

  // 3. 상태 변수 (State)
  let currentIndex = 0;
  let userAnswers = []; // 각 질문별 선택 유형 저장 배열 ['격려형', '실천형', ...]

  // 4. DOM 엘리먼트 참조
  const startScreen = document.getElementById('startScreen');
  const quizScreen = document.getElementById('quizScreen');
  const loadingScreen = document.getElementById('loadingScreen');
  const resultScreen = document.getElementById('resultScreen');

  const startBtn = document.getElementById('startBtn');
  const prevBtn = document.getElementById('prevBtn');
  const restartBtn = document.getElementById('restartBtn');
  const shareBtn = document.getElementById('shareBtn');

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
  const resultWeeklyAction = document.getElementById('resultWeeklyAction');

  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // 5. 화면 전환 메서드
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

  // 6. 질문 렌더링
  function renderQuestion() {
    const q = QUESTIONS[currentIndex];

    // 프로그레스 바 & 진행 카운트
    currentStepText.textContent = currentIndex + 1;
    const progressPercent = ((currentIndex + 1) / QUESTIONS.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;

    // 질문 정보
    qCategoryBadge.textContent = `Q${q.id}`;
    qTitle.textContent = `Q${q.id}. 나에게 더 가까운 모습은?`;

    optionAText.textContent = q.optA.text;
    optionBText.textContent = q.optB.text;

    // 이전 질문 버튼 표시 여부
    if (currentIndex > 0) {
      prevBtn.style.visibility = 'visible';
    } else {
      prevBtn.style.visibility = 'hidden';
    }

    // 카드 전환 페이드 효과
    const questionCard = document.getElementById('questionCard');
    questionCard.classList.remove('fade-slide-in');
    void questionCard.offsetWidth; // Trigger Reflow
    questionCard.classList.add('fade-slide-in');
  }

  // 7. 선택지 클릭 핸들러
  function handleSelectOption(choice) {
    const q = QUESTIONS[currentIndex];
    const selectedType = choice === 'A' ? q.optA.type : q.optB.type;

    userAnswers[currentIndex] = selectedType;

    if (currentIndex < QUESTIONS.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      // 30문항 선택 완료 -> 로딩 화면
      showScreen(loadingScreen);
      setTimeout(() => {
        calculateAndShowResult();
      }, 1200);
    }
  }

  // 8. 결과 계산 및 결과 화면 출력
  function calculateAndShowResult() {
    // 유형별 점수 집계
    const scores = {
      격려형: 0,
      동행형: 0,
      실천형: 0,
      마음형: 0,
      친밀형: 0
    };

    userAnswers.forEach(type => {
      if (scores[type] !== undefined) {
        scores[type]++;
      }
    });

    // 최고 점수 유형 찾기
    let maxScore = -1;
    let topTypeKey = '격려형';

    Object.keys(scores).forEach(key => {
      if (scores[key] > maxScore) {
        maxScore = scores[key];
        topTypeKey = key;
      }
    });

    const resultData = TYPES[topTypeKey];

    // DOM 업데이트
    resultTitle.textContent = resultData.title;
    resultSubtitle.textContent = resultData.subtitle;
    resultEmojiVisual.textContent = resultData.emoji;

    // 태그
    resultTags.innerHTML = '';
    resultData.tags.forEach(tagText => {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'tag';
      tagSpan.textContent = tagText;
      resultTags.appendChild(tagSpan);
    });

    // 강점
    resultStrengths.innerHTML = '';
    resultData.strengths.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      resultStrengths.appendChild(li);
    });

    // 주의할 점
    resultCautions.innerHTML = '';
    resultData.cautions.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      resultCautions.appendChild(li);
    });

    // 공동체에서 이런 순간에 마음이 열립니다
    resultCommunity.innerHTML = '';
    resultData.community.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      resultCommunity.appendChild(li);
    });

    // 나에게 필요한 사랑
    const resultLove = document.getElementById('resultLove');
    if (resultLove) {
      resultLove.innerHTML = '';
      resultData.love.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        resultLove.appendChild(li);
      });
    }

    // 이번 주 실천
    resultWeeklyAction.textContent = resultData.weeklyAction;

    showScreen(resultScreen);
  }

  // 9. 이전 질문 버튼 (롤백)
  function handlePrev() {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  }

  // 10. 테스트 다시하기 (초기화)
  function handleRestart() {
    currentIndex = 0;
    userAnswers = [];
    showScreen(startScreen);
  }

  // 11. 공유하기 (클립보드 복사)
  function handleShare() {
    const shareUrl = window.location.href;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast('결과 링크가 클립보드에 복사되었습니다! 💕');
      }).catch(() => {
        fallbackCopyTextToClipboard(shareUrl);
      });
    } else {
      fallbackCopyTextToClipboard(shareUrl);
    }
  }

  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('결과 링크가 클립보드에 복사되었습니다! 💕');
    } catch (err) {
      showToast('주소를 직접 복사해 주세요.');
    }
    document.body.removeChild(textArea);
  }

  function showToast(msg) {
    toastMessage.textContent = msg;
    toastNotification.classList.remove('hidden');
    toastNotification.classList.add('show');

    setTimeout(() => {
      toastNotification.classList.remove('show');
      setTimeout(() => {
        toastNotification.classList.add('hidden');
      }, 300);
    }, 2500);
  }

  // 12. 이벤트 리스너 바인딩
  startBtn.addEventListener('click', () => {
    currentIndex = 0;
    userAnswers = [];
    showScreen(quizScreen);
    renderQuestion();
  });

  prevBtn.addEventListener('click', handlePrev);

  optionABtn.addEventListener('click', () => handleSelectOption('A'));
  optionBBtn.addEventListener('click', () => handleSelectOption('B'));

  restartBtn.addEventListener('click', handleRestart);
  shareBtn.addEventListener('click', handleShare);

});
