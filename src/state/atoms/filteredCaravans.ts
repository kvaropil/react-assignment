import { atom } from 'jotai';
import { caravansListAtom } from './caravans';
import { instantBookableFilterAtom } from './instantBookableFilter';
import { priceFilterAtom } from './priceFilter';

export const filteredCaravansAtom = atom((get) => {
  const caravans = get(caravansListAtom);
  const [minPrice, maxPrice] = get(priceFilterAtom);
  const instanBookable = get(instantBookableFilterAtom);

  return caravans.filter(
    (caravan) =>
      caravan.price >= minPrice &&
      caravan.price <= maxPrice &&
      caravan.instantBookable === instanBookable,
  );
});
