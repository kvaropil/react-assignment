import { filteredCaravansAtom } from '../../state/atoms/filteredCaravans';
import { priceFilterAtom } from '../../state/atoms/priceFilter';
import { useAtom } from 'jotai';

export const useFilteredCaravans = () => {
  const [filteredCaravans] = useAtom(filteredCaravansAtom);

  return filteredCaravans;
};
