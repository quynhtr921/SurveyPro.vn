import confetti from 'canvas-confetti';

export function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN').format(Math.round(amount)) + ' đ';
}

// Deterministic set of exactly 50 random question indices out of 150 total questions (30 surveys x 5 questions)
// Each index represents: (surveyId - 1) * 5 + (questionId - 1)
const ZERO_REWARD_GLOBAL_INDICES = new Set<number>([
  1, 4, 7, 9, 12, 16, 18, 21, 25, 28,
  31, 33, 37, 40, 43, 47, 49, 52, 56, 58,
  62, 65, 68, 71, 74, 77, 81, 84, 87, 90,
  93, 96, 99, 102, 106, 109, 112, 115, 118, 122,
  125, 128, 131, 134, 137, 140, 143, 146, 148, 149
]);

export function isZeroRewardQuestion(surveyId: number, questionId: number, customFlag?: boolean): boolean {
  if (customFlag === true) return true;
  const globalIndex = ((surveyId - 1) * 5) + ((questionId - 1) % 5);
  return ZERO_REWARD_GLOBAL_INDICES.has(globalIndex);
}

export function calculateQuestionReward(surveyId: number, questionId: number, customFlag?: boolean): number {
  if (isZeroRewardQuestion(surveyId, questionId, customFlag)) {
    return 0; // 50 questions randomly give 0đ
  }
  return generateRandomReward(200, 600); // Remaining 100 questions give 200đ - 600đ
}

export function generateRandomReward(min = 200, max = 600): number {
  // Generates friendly reward between 200 and 600 VND
  const steps = [200, 250, 300, 350, 400, 450, 500, 550, 600];
  const eligible = steps.filter((s) => s >= min && s <= max);
  if (eligible.length > 0) {
    return eligible[Math.floor(Math.random() * eligible.length)];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function triggerRewardConfetti(originY = 0.6) {
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: originY },
    colors: ['#10B981', '#F59E0B', '#3B82F6', '#EC4899', '#8B5CF6'],
  });
}

export function triggerBigWinConfetti() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval: ReturnType<typeof setInterval> = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#10B981', '#22C55E', '#EAB308', '#3B82F6', '#6366F1'],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#10B981', '#22C55E', '#EAB308', '#3B82F6', '#6366F1'],
    });
  }, 250);
}
