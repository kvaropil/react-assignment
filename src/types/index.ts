export type TrackProps = {
  index: number;
  theme: Record<string, string>;
};

export type PriceLabelProps = {
  children: React.ReactNode;
  iconSrc?: string;
};

export type TextboxProps = {
  value: number;
};

export type TypeFilterCardProps = {
  heading: string;
  text: string;
};

export type StyledTypeCardContainerProps = {
  isSelected: boolean;
};

export type Caravan = {
  location: string;
  instantBookable: boolean;
  name: string;
  passengersCapacity: number;
  sleepCapacity: number;
  price: number;
  vehicleType: string;
  toilet: boolean;
  shower: boolean;
  pictures: string[];
};
