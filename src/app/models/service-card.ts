export interface ServiceCard {
  id: string;
  subtitle: string;
  title: string;
  imageUrl: string;
  items: {
    title: string;
    description: string;
  }[];
}
