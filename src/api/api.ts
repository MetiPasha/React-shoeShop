import { Address, CartItem, IProductDetail, IProductProps } from "../type";

import Api, { httpPrivate } from "./base";

// Updated fetchProducts function to properly handle params as an object
export async function fetchProducts(params: { brand: string }) {
  const response = await Api.get<IProductProps[]>("api/products", { params });
  // console.log(response);
  return response.data;
}

export const fetchAllProducts = async (): Promise<IProductProps[]> => {
  const response = await Api.get("/products");
  return response.data || [];
};

export const fetchProductsByBrand = async (brand?: string) => {
  const res = await Api.get<IProductProps[]>("api/products?brand=" + brand);

  console.log(res.data);
  return res.data;
};

export const getProductsById = async (id: string) => {
  const response = await Api.get<IProductDetail>(`/api/products/${id}`);
  return response.data;
};

export const fetchProductsByBrands = async (brand?: string) => {
  const res = await Api.get<IProductDetail>("api/products?brands=" + brand);

  // console.log(res.data);
  return res.data;
};

// تابع برای دریافت اطلاعات محصول از API
export const fetchProductDetail = async (id: string) => {
  const response = await Api.get(`/api/products/${id}`);
  return response.data;
};

export const getPopularProducts = async () => {
  const response = await Api.get("api/products?is_popular=true");
  return response.data;
};

// Fetch wishlist items from server
export const fetchWishList = async () => {
  // const token=getCookies()
  const response = await httpPrivate.get(
    "/api/wishlist"
    // , {
    // headers: {
    //   Authorization: `Bearer ${token}`, // ارسال توکن به عنوان Authorization
    // },
    // }
  );

  return response.data;
};

// Add a product to wishlist
export const addToWishList = async (productId: number) => {
  // const token=getCookies()
  const response = await httpPrivate.post(
    "/api/wishlist",
    { productId }
    //   , {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );
  return response.data;
};

// Remove a product from wishlist
export const removeFromWishList = async (productId: number) => {
  // const token=getCookies()

  const response = await httpPrivate.delete(
    `/api/wishlist/${productId}`
    // ,
    //  { headers: {
    //     Authorization: `Bearer ${token}`,
    //   }},
  );
  return response.data;
};

// -----------cart------------
export const addProductToCart = async (product: CartItem) => {
  const response = await Api.post(`/cart`, product);
  return response.data;
};

export const removeProductFromCart = async (productId: number) => {
  const response = await Api.delete(`/cart/${productId}`);
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
