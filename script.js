/**
 * [공동체 관계 스타일] 모바일 유형 테스트 웹 애플리케이션 - JavaScript
 * 30문항 기반 공동체 관계 및 사랑의 언어 유형 분석
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. 5가지 공동체 사랑 유형 데이터 정의
  const TYPES = {
    격려형: {
      id: 'ENCOURAGE',
      name: '격려형',
      title: '① 격려형',
      subtitle: '"말 한마디가 사람을 세운다고 믿는 사람"',
      emoji: '👏',
      tags: ['#격려형', '#칭찬요정', '#응원과용기', '#긍정언어'],
      strengths: [
        '사람을 잘 칭찬합니다.',
        '용기를 북돋워 줍니다.',
        '분위기를 밝게 만듭니다.',
        '다른 사람의 장점을 잘 발견합니다.'
      ],
      cautions: [
        '따뜻한 말은 하지만 실제 도움이 부족할 수 있습니다.',
        '비판적인 말을 오래 마음에 담아둘 수 있습니다.'
      ],
      community: [
        '응원 메시지를 잘 보냅니다.',
        '축복기도를 잘합니다.',
        '사람을 세워주는 리더가 됩니다.'
      ],
      weeklyAction: '"오늘 한 사람을 구체적으로 칭찬해 보기"'
    },

    동행형: {
      id: 'COMPANION',
      name: '동행형',
      title: '② 동행형',
      subtitle: '"함께 있어주는 것이 사랑이라고 믿는 사람"',
      emoji: '☕',
      tags: ['#동행형', '#함께하는시간', '#경청과교제', '#관계의연결고리'],
      strengths: [
        '사람을 편안하게 만듭니다.',
        '이야기를 잘 들어줍니다.',
        '관계를 오래 유지합니다.',
        '공동체의 연결고리가 됩니다.'
      ],
      cautions: [
        '시간을 내주지 않으면 서운함을 느낄 수 있습니다.',
        '혼자 있는 시간을 어려워할 수 있습니다.'
      ],
      community: [
        '식사 약속을 잘 잡습니다.',
        '새가족을 잘 챙깁니다.',
        '함께 걷고 이야기하는 것을 좋아합니다.'
      ],
      weeklyAction: '"한 사람과 30분 동안 집중해서 대화하기"'
    },

    실천형: {
      id: 'ACTION',
      name: '실천형',
      title: '③ 실천형',
      subtitle: '"사랑은 행동으로 보여준다고 믿는 사람"',
      emoji: '🛠️',
      tags: ['#실천형', '#행동파', '#책임감갑', '#묵묵한섬김'],
      strengths: [
        '먼저 움직입니다.',
        '책임감이 강합니다.',
        '봉사를 즐깁니다.',
        '어려운 일을 잘 도와줍니다.'
      ],
      cautions: [
        '행동하지 않는 사람을 답답하게 볼 수 있습니다.',
        '혼자 일을 떠안기 쉽습니다.'
      ],
      community: [
        '보이지 않는 일을 묵묵히 합니다.',
        '행사 준비를 잘합니다.',
        '어려운 사람을 먼저 돕습니다.'
      ],
      weeklyAction: '"누군가 부탁하기 전에 먼저 도와주기"'
    },

    마음형: {
      id: 'HEART',
      name: '마음형',
      title: '④ 마음형',
      subtitle: '"정성과 기억이 사랑이라고 믿는 사람"',
      emoji: '💌',
      tags: ['#마음형', '#정성어린선물', '#세심함', '#추억과기억'],
      strengths: [
        '세심합니다.',
        '작은 것도 잘 기억합니다.',
        '기념일과 추억을 소중히 여깁니다.',
        '상대를 위한 준비를 즐깁니다.'
      ],
      cautions: [
        '표현이 없으면 서운할 수 있습니다.',
        '의미를 너무 깊게 해석할 수도 있습니다.'
      ],
      community: [
        '손편지를 잘 씁니다.',
        '작은 선물로 감사를 표현합니다.',
        '생일을 잘 기억합니다.'
      ],
      weeklyAction: '"감사의 마음을 작은 메모나 선물로 표현하기"'
    },

    친밀형: {
      id: 'INTIMATE',
      name: '친밀형',
      title: '⑤ 친밀형',
      subtitle: '"따뜻한 존재감이 사랑이라고 믿는 사람"',
      emoji: '🤗',
      tags: ['#친밀형', '#따뜻한온기', '#친근한맞이', '#정서적안정감'],
      strengths: [
        '사람을 편안하게 합니다.',
        '친근함을 잘 표현합니다.',
        '반갑게 맞이합니다.',
        '정서적 안정감을 줍니다.'
      ],
      cautions: [
        '사람마다 신체적·정서적 경계가 다르다는 점을 존중해야 합니다.',
        '친밀함을 서두르기보다 상대의 편안함을 먼저 살피는 것이 중요합니다.'
      ],
      community: [
        '밝게 인사합니다.',
        '반갑게 맞이합니다.',
        '가까이 있어 주는 것만으로도 위로가 됩니다.'
      ],
      weeklyAction: '"미소와 따뜻한 인사로 한 사람을 먼저 맞아주기"'
    }
  };

  // 2. 30개 문항 데이터셋 (Q1 ~ Q30) 및 채점표 매핑
  const QUESTIONS = [
    {
      id: 1,
      optA: { text: "진심 어린 격려를 들으면 오래 힘이 된다.", type: '격려형' },
      optB: { text: "함께 시간을 보내준 것이 더 오래 기억난다.", type: '동행형' }
    },
    {
      id: 2,
      optA: { text: "실제로 도와주는 행동이 가장 고맙다.", type: '실천형' },
      optB: { text: "나를 생각하며 준비한 작은 선물이 더 감동이다.", type: '마음형' }
    },
    {
      id: 3,
      optA: { text: "반갑게 악수하거나 포옹하며 인사하면 친밀감을 느낀다.", type: '친밀형' },
      optB: { text: "진심 어린 칭찬 한마디가 더 힘이 된다.", type: '격려형' }
    },
    {
      id: 4,
      optA: { text: "함께 식사하거나 산책하는 시간이 가장 좋다.", type: '동행형' },
      optB: { text: "말없이 도와주는 사람이 더 믿음직하다.", type: '실천형' }
    },
    {
      id: 5,
      optA: { text: "작은 편지나 메모를 받으면 오래 간직한다.", type: '마음형' },
      optB: { text: "따뜻한 포옹이나 악수가 더 큰 위로가 된다.", type: '친밀형' }
    },
    {
      id: 6,
      optA: { text: "격려받으면 다시 도전할 용기가 생긴다.", type: '격려형' },
      optB: { text: "힘든 일을 함께해 주는 사람이 더 고맙다.", type: '실천형' }
    },
    {
      id: 7,
      optA: { text: "나를 위해 시간을 비워주는 것이 가장 감동이다.", type: '동행형' },
      optB: { text: "작은 선물에도 담긴 마음이 크게 느껴진다.", type: '마음형' }
    },
    {
      id: 8,
      optA: { text: "함께 기도하며 손을 맞잡는 시간이 좋다.", type: '친밀형' },
      optB: { text: "함께 커피를 마시며 이야기하는 시간이 좋다.", type: '동행형' }
    },
    {
      id: 9,
      optA: { text: "행동으로 보여주는 배려가 더 진심이라고 느낀다.", type: '실천형' },
      optB: { text: "칭찬과 인정의 말이 더 큰 힘이 된다.", type: '격려형' }
    },
    {
      id: 10,
      optA: { text: "나를 기억하며 준비한 작은 선물이 감동이다.", type: '마음형' },
      optB: { text: "자연스러운 스킨십이 관계를 가깝게 만든다.", type: '친밀형' }
    },
    {
      id: 11,
      optA: { text: "끝까지 이야기를 들어주는 사람이 좋다.", type: '동행형' },
      optB: { text: '"잘했어요."라는 말을 들으면 힘이 난다.', type: '격려형' }
    },
    {
      id: 12,
      optA: { text: "부탁하지 않아도 먼저 도와주는 사람이 좋다.", type: '실천형' },
      optB: { text: "특별한 날이 아니어도 작은 선물을 받으면 기쁘다.", type: '마음형' }
    },
    {
      id: 13,
      optA: { text: "따뜻한 손길이 위로가 된다.", type: '친밀형' },
      optB: { text: "함께 시간을 보내는 것이 사랑이라고 느낀다.", type: '동행형' }
    },
    {
      id: 14,
      optA: { text: "격려와 인정은 사람을 변화시킨다고 생각한다.", type: '격려형' },
      optB: { text: "말보다 행동이 더 신뢰를 준다.", type: '실천형' }
    },
    {
      id: 15,
      optA: { text: "누군가 나를 위해 준비한 선물이 기억에 남는다.", type: '마음형' },
      optB: { text: "반갑게 맞아주는 인사가 더 기억에 남는다.", type: '친밀형' }
    },
    {
      id: 16,
      optA: { text: "함께 있는 것만으로도 위로가 된다.", type: '동행형' },
      optB: { text: "인정과 칭찬을 받을 때 사랑받는다고 느낀다.", type: '격려형' }
    },
    {
      id: 17,
      optA: { text: "실제로 도움을 받으면 마음이 열린다.", type: '실천형' },
      optB: { text: "나를 생각한 작은 이 더 감동이다.", type: '마음형' }
    },
    {
      id: 18,
      optA: { text: "악수나 하이파이브처럼 자연스러운 신체 접촉이 좋다.", type: '친밀형' },
      optB: { text: "필요한 시간을 함께 보내주는 것이 좋다.", type: '동행형' }
    },
    {
      id: 19,
      optA: { text: "진심 어린 격려가 나를 성장시킨다.", type: '격려형' },
      optB: { text: "작은 배려를 행동으로 보여주는 사람이 좋다.", type: '실천형' }
    },
    {
      id: 20,
      optA: { text: "예상하지 못한 작은 선물이 기쁘다.", type: '마음형' },
      optB: { text: "따뜻하게 안아주는 것이 더 큰 위로가 된다.", type: '친밀형' }
    },
    {
      id: 21,
      optA: { text: "깊은 대화를 오래 나누는 시간이 좋다.", type: '동행형' },
      optB: { text: "감사와 칭찬의 표현을 자주 듣고 싶다.", type: '격려형' }
    },
    {
      id: 22,
      optA: { text: "힘든 일을 함께 나누어 주는 사람이 좋다.", type: '실천형' },
      optB: { text: "손편지처럼 마음을 담은 표현이 좋다.", type: '마음형' }
    },
    {
      id: 23,
      optA: { text: "함께 기도하며 손을 잡는 시간이 의미 있다.", type: '친밀형' },
      optB: { text: "누군가 나를 위해 시간을 내주는 것이 더 의미 있다.", type: '동행형' }
    },
    {
      id: 24,
      optA: { text: "인정받으면 더 열심히 하고 싶어진다.", type: '격려형' },
      optB: { text: "먼저 도와주는 사람이 더 기억에 남는다.", type: '실천형' }
    },
    {
      id: 25,
      optA: { text: "여행에서 받은 작은 기념품도 오래 간직한다.", type: '마음형' },
      optB: { text: "따뜻하게 등을 토닥여 주는 위로가 좋다.", type: '친밀형' }
    },
    {
      id: 26,
      optA: { text: "함께 식사하는 시간이 관계를 깊게 만든다.", type: '동행형' },
      optB: { text: "격려의 말 한마디가 관계를 깊게 만든다.", type: '격려형' }
    },
    {
      id: 27,
      optA: { text: "행동으로 보여주는 사랑이 가장 진실하다고 생각한다.", type: '실천형' },
      optB: { text: "나를 위해 준비한 작은 정성이 가장 기억에 남는다.", type: '마음형' }
    },
    {
      id: 28,
      optA: { text: "자연스럽게 손을 잡아주는 사람이 친근하게 느껴진다.", type: '친밀형' },
      optB: { text: "함께 산책하며 이야기하는 사람이 친근하게 느껴진다.", type: '동행형' }
    },
    {
      id: 29,
      optA: { text: "칭찬보다 진심이 담긴 격려가 좋다.", type: '격려형' },
      optB: { text: "말없이 도와주는 사람이 더 든든하다.", type: '실천형' }
    },
    {
      id: 30,
      optA: { text: "작은 선물보다 중요한 것은 마음이라고 생각한다.", type: '마음형' },
      optB: { text: "따뜻한 포옹이 말보다 더 큰 위로가 될 때가 있다.", type: '친밀형' }
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

    // 공동체에서의 모습
    resultCommunity.innerHTML = '';
    resultData.community.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      resultCommunity.appendChild(li);
    });

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
