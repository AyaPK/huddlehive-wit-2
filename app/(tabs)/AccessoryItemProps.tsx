export interface AccessoryItemProps {
  name: string;
  Component: React.ComponentType<{ size: number; color: string; }>;
  color?: string;
  price?: number;
}
