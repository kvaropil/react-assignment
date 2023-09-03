import { Caravan } from '../../types';
import { atom } from 'jotai';

export const caravansListAtom = atom<Caravan[]>([]);
