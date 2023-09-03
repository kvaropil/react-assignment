import { filteredCaravansAtom } from '../../state/atoms/filteredCaravans';
import { priceFilterAtom } from '../../state/atoms/filters';
import { useAtom } from 'jotai';

export const useFilteredCaravans = () => {
  const [filteredCaravans] = useAtom(filteredCaravansAtom);

  return filteredCaravans;
};
