// type vehicleTypes = 'Intergrated' | 'BuiltIn' | 'Campervan' | 'Alcove';

export const translateVehicleType = (vehicleType: string): string => {
  const translation: { [key: string]: string } = {
    Intergrated: 'Integrál',
    BuiltIn: 'Vestavba',
    Campervan: 'Campervan',
    Alcove: 'Přívěs',
  };

  return translation[vehicleType];
};
