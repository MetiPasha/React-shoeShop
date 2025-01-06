import { Address, CartItem, IProductDetail, IProductProps } from "../type";
import { httpPrivate } from "./base";


export async function fetchProducts(params: { brand: string }) {
  const response = await httpPrivate.get<IProductProps[]>("api/products", {
    params,
  });
  
  return response.data;
}

export const fetchAllProducts = async (): Promise<IProductProps[]> => {
  const response = await httpPrivate.get("/products");
  return response.data || [];
};

export const fetchProductsByBrand = async (brand?: string) => {
  const res = await httpPrivate.get<IProductProps[]>(
    "api/products?brand=" + brand
  );

  console.log(res.data);
  return res.data;
};

export const getProductsById = async (id: string) => {
  const response = await httpPrivate.get<IProductDetail>(`/api/products/${id}`);
  return response.data;
};

export const fetchProductsByBrands = async (brand?: string) => {
  const res = await httpPrivate.get<IProductDetail>(
    "api/products?brands=" + brand
  );

  
  return res.data;
};


export const fetchProductDetail = async (id: string) => {
  const response = await httpPrivate.get(`/api/products/${id}`);
  return response.data;
};

export const getPopularProducts = async () => {
  const response = await httpPrivate.get("api/products?is_popular=true");
  return response.data;
};

// Fetch wishlist items from server
export const fetchWishList = async () => {
 
  const response = await httpPrivate.get(
    "/api/wishlist"
  
  );

  return response.data;
};

// Add a product to wishlist
export const addToWishList = async (productId: number) => {
  
  const response = await httpPrivate.post(
    "/api/wishlist",
    { productId }
  
  );
  return response.data;
};

// Remove a product from wishlist
export const removeFromWishList = async (productId: number) => {
  

  const response = await httpPrivate.delete(
    `/api/wishlist/${productId}`
   
  );
  return response.data;
};

// -----------cart------------
export const addProductToCart = async (product: CartItem) => {
  const response = await httpPrivate.post(`/cart`, product);
  return response.data;
};

export const removeProductFromCart = async (productId: number) => {
  const response = await httpPrivate.delete(`/cart/${productId}`);
  return response.data;
};

// -------------------------------aaddres
export const fetchAddresses = async () => {
  const response = await httpPrivate.get<Address[]>("/api/address");
  return response.data;
};

export const updateAddress = async (name: string, address: string) => {
  const response = await httpPrivate.put(`/api/address/${name}`, { address });
  return response.data;
};
