export interface Reward {
  reward: number;
  type: 'Miner Reward' | 'Emission Reward' | 'Chore Reward' | 'Uncle Reward';
}