import { atom } from 'jotai';
import { caravansListAtom } from './caravans';
import { instantBookableFilterAtom } from './filters/instantBookableFilter';
import { priceFilterAtom } from './filters/priceFilter';
import { vehicleTypeFilterAtom } from './filters/vehicleTypeFilter';

export const filteredCaravansAtom = atom((get) => {
  const caravans = get(caravansListAtom);
  const [minPrice, maxPrice] = get(priceFilterAtom);
  const instanBookable = get(instantBookableFilterAtom);
  const selectedVehicleTypes = get(vehicleTypeFilterAtom);

  return caravans.filter((caravan) => {
    const matchesPrice = caravan.price >= minPrice && caravan.price <= maxPrice;
    const matchesInstantBookable = caravan.instantBookable === instanBookable;
    const matchesVehicleType =
      selectedVehicleTypes.length === 0 ||
      selectedVehicleTypes.includes(caravan.vehicleType);

    return matchesPrice && matchesInstantBookable && matchesVehicleType;
  });
});
