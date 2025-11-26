
export interface GameState {
  time: number;
  score: number;
  isRunning: boolean;
  isGameOver: boolean;
  speedMultiplier: number;
  isInvincible: boolean;
  obstacles: any[];
  lootItems: any[];
  windDirection: number;
  windStrength: number;
  isRainy: boolean;
  chaosLevel: number;
}

export const createInitialState = (): GameState => ({
  time: 0,
  score: 0,
  isRunning: false,
  isGameOver: false,
  speedMultiplier: 1,
  isInvincible: false,
  obstacles: [],
  lootItems: [],
  windDirection: 0,
  windStrength: 0,
  isRainy: false,
  chaosLevel: 0
});
