import { atom } from 'jotai';
import { caravansListAtom } from './caravans';
import { priceFilterAtom } from './filters';

export const filteredCaravansAtom = atom((get) => {
  const caravans = get(caravansListAtom);
  const [minPrice, maxPrice] = get(priceFilterAtom);

  return caravans.filter(
    (caravan) => caravan.price >= minPrice && caravan.price <= maxPrice,
  );
});
