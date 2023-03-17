import { createSlice } from "@reduxjs/toolkit";

let initialStateProducts = [
  {
    id: "01",
    description: "New Product From Our brand",
    price: 22,
    image:
      "https://th.bing.com/th/id/R.e40205ede691dd2d7effa1a8b6ecda07?rik=9xangv3qN1M6Rw&pid=ImgRaw&r=0",
    sale: 0,
    gender: "male",
    sizes: ["S", "M"],
  },
  {
    id: "01",
    description: "New Product From Our brand",
    price: 22,
    image:
      "https://th.bing.com/th/id/R.e40205ede691dd2d7effa1a8b6ecda07?rik=9xangv3qN1M6Rw&pid=ImgRaw&r=0",
    sale: 0,
    gender: "male",
    sizes: ["S", "M", "L"],
  },
  {
    id: "01",
    description: "New Product From Our brand",
    price: 22,
    image:
      "https://th.bing.com/th/id/R.e40205ede691dd2d7effa1a8b6ecda07?rik=9xangv3qN1M6Rw&pid=ImgRaw&r=0",
    sale: 0,
    gender: "male",
    sizes: ["S", "M", "L"],
  },
  {
    id: "01",
    description: "New Product From Our brand",
    price: 22,
    image:
      "https://th.bing.com/th/id/R.e40205ede691dd2d7effa1a8b6ecda07?rik=9xangv3qN1M6Rw&pid=ImgRaw&r=0",
    sale: 0,
    gender: "female",
    sizes: ["S", "M"],
  },
  {
    id: "01",
    description: "New Product From Our brand",
    price: 22,
    image:
      "https://th.bing.com/th/id/R.e40205ede691dd2d7effa1a8b6ecda07?rik=9xangv3qN1M6Rw&pid=ImgRaw&r=0",
    sale: 0,
    gender: "female",
    sizes: ["S", "L"],
  },
  {
    id: "02",
    description: "New Product From Our brand 1",
    price: 22,
    image:
      "https://th.bing.com/th/id/R.e40205ede691dd2d7effa1a8b6ecda07?rik=9xangv3qN1M6Rw&pid=ImgRaw&r=0",
    sale: 0,
    gender: "female",
    sizes: ["M", "L"],
  },
  {
    id: "03",
    description: "New Product From Our brand 2",
    price: 22,
    image:
      "https://th.bing.com/th/id/R.e40205ede691dd2d7effa1a8b6ecda07?rik=9xangv3qN1M6Rw&pid=ImgRaw&r=0",
    sale: 0,
    gender: "male",
    sizes: ["L"],
  },
  {
    id: "04",
    description: "New Product From Our brand 3",
    price: 22,
    image:
      "https://th.bing.com/th/id/R.e40205ede691dd2d7effa1a8b6ecda07?rik=9xangv3qN1M6Rw&pid=ImgRaw&r=0",
    sale: 12,
    gender: "male",
    sizes: ["M", "L"],
  },
];

// Global State With All Loaded Products
const productSlice = createSlice({
  name: "products",
  initialState: { products: initialStateProducts },
  reducers: {},
  gender: "male",
  sizes: ["M", "L"],
});

export default productSlice;
