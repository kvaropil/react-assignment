import { Caravan } from '../../types';
import { atom } from 'jotai';

export const caravanListAtom = atom<Caravan[]>([]);
