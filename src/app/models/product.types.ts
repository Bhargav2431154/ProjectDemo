export interface ProductListItem {
  id: string,
  name: String,
  price: number,
  imageUrl: string,
  rating: number,
  collection: String,
  type: String,
  gender: String,
  quantity?: number; // Add this field
}