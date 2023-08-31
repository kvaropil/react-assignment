export type TrackProps = {
  index: number;
  theme: Record<string, string>;
};

export type PriceLabelProps = {
  children: React.ReactNode;
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