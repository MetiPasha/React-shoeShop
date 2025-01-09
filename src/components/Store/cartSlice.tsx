import { createSlice, PayloadAction } from "@reduxjs/toolkit"; // ایمپورت‌های مورد نیاز از Redux Toolkit و تعریف نوع داده‌ای CartItem
import { CartItem } from "../../type";

// تعریف نوع داده‌ای برای حالت (State) سبد خرید
export interface CartState {
  items: CartItem[]; // آرایه‌ای از آیتم‌های موجود در سبد خرید
}

const initialState: CartState = {
  items: [],
};
// ایجاد یک Slice با نام "cart" که شامل مقدار اولیه و توابع کاهش‌دهنده (Reducers) است
const cartSlice = createSlice({
  name: "cart",
  initialState,
  // تابعی برای اضافه کردن یک آیتم به سبد خرید
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.total_price += action.payload.total_price;
      } else {
        state.items.push(action.payload);
      }
    },
    // تابعی برای حذف آیتم از سبد خرید با استفاده از شناسه محصول
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },
    // تابعی برای به‌روزرسانی تعداد (quantity) یک آیتم مشخص در سبد خرید
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const item = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (item) {
        // اگر آیتم یافت شود، تعداد و قیمت کل (total_price) به‌روزرسانی می‌شود
        item.quantity = action.payload.quantity;
        item.total_price = item.total_price * action.payload.quantity;
      }
    },
  },
});
// استخراج توابع اکشن برای استفاده در سایر بخش‌های برنامه
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
// اکسپورت کاهش‌دهنده (Reducer) برای افزودن به Store
export default cartSlice.reducer;
