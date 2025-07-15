import axios from "axios";

export let catagories = [];
// Function to fetch categories
export const fetchCategories = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products/categories");
    catagories = res.data; // update array in-place
    return catagories;
  } catch (error) {
    return [];
  }
};

fetchCategories();
// Create a function to fetch data
export const fetchMockData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products?limit=194");
    const data = res.data.products;
    
    const mockData = data.map((element, i) => ({
      albumId: 1,
      id: i + 1,
      title: element.title,
      description:element.description,
      url: element.thumbnail,
      thumbnailUrl: element.thumbnail,
      price: element.price
    }));

    
    return mockData;
  } catch (err) {
    console.error("Error fetching data:", err);
    return [];
  }
};

// Fallback data in case API fails
export const fallbackData = [
  {
    albumId: 1,
    id: 1,
    title: "Sample Product 1",
    url: "https://via.placeholder.com/150",
    thumbnailUrl: "https://via.placeholder.com/150",
    price: 99.99
  },
  {
    albumId: 1,
    id: 2,
    title: "Sample Product 2",
    url: "https://via.placeholder.com/150",
    thumbnailUrl: "https://via.placeholder.com/150",
    price: 149.99
  }
];