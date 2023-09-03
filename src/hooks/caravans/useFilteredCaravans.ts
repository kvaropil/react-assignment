import { filteredCaravansAtom } from '../../state/atoms/filteredCaravans';
import { useAtom } from 'jotai';
import { useCaravans } from './useCaravans';

export const useFilteredCaravans = () => {
  useCaravans();
  const [filteredCaravans] = useAtom(filteredCaravansAtom);

  return filteredCaravans;
};
