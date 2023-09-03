import { filteredCaravansAtom } from '../../state/atoms/filteredCaravans';
import { useAtom } from 'jotai';

export const useFilteredCaravans = () => {
  const [filteredCaravans] = useAtom(filteredCaravansAtom);

  return filteredCaravans;
};
