import { VehicleTypeEnum } from '../../types';
import { atom } from 'jotai';

export const vehicleTypeFilterAtom = atom<VehicleTypeEnum[]>([]);
