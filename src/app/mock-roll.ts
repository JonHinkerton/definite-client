import { Roll } from './roll';
// timestamp: string;
// channel: string;
// user: string;
// count: number;
// shape: number;
// modifier: number;
// result: number;
export const ROLLS: Roll[] = [
  { timestamp: '2018-04-24 14:29:22.653', channel: 'Test Game', user: 'Legolas', count: 3, shape: 6, modifier: 0, result: 10 }
];

import { Counts } from './roll';
//value: number;
export const COUNTS: Counts[] = [
  {value: 1},{value: 2},{value: 3},{value: 4},{value: 5},{value: 6}
];

import { Shapes } from './roll';
//value: number;
export const SHAPES: Shapes[] = [
  {value: 4},{value: 6},{value: 8},{value: 10},{value: 12},{value: 20}
];
