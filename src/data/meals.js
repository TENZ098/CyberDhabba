import chickenBiryani from "../assets/meals/chicken-biryani.jpg";
import chickenKarahi from "../assets/meals/chicken-karahi.jpg";
import beefPulao from "../assets/meals/beef-pulao.jpg";
import daalChawal from "../assets/meals/daal-chawal.jpg";
import chickenHandi from "../assets/meals/chicken-handi.jpg";
import alooParatha from "../assets/meals/aloo-paratha.jpg";
import chickenTikka from "../assets/meals/chicken-tikka.jpg";
import chanaMasala from "../assets/meals/chana-masala.jpg";
import beefSeekhKebab from "../assets/meals/beef-seekh-kebab.jpg";
import chickenShawarma from "../assets/meals/chicken-shawarma.jpg";
import mixVegetableCurry from "../assets/meals/mix-vegetable-curry.jpg";
import zingerBurger from "../assets/meals/zinger-burger.jpg";

const meals = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with spicy chicken and traditional spices.",
    price: 450,
    category: "Rice",
    type: "Non-Veg",
    popular: true,
    image: chickenBiryani,
  },
  {
    id: 2,
    name: "Chicken Karahi",
    description: "Traditional chicken karahi cooked with tomatoes, green chilies and spices.",
    price: 550,
    category: "Curry",
    type: "Non-Veg",
    popular: true,
    image: chickenKarahi,
  },
  {
    id: 3,
    name: "Beef Pulao",
    description: "Flavorful rice cooked with tender beef and aromatic pulao spices.",
    price: 500,
    category: "Rice",
    type: "Non-Veg",
    popular: false,
    image: beefPulao,
  },
  {
    id: 4,
    name: "Daal Chawal",
    description: "Comforting lentils served with steamed rice and desi seasoning.",
    price: 300,
    category: "Vegetarian",
    type: "Veg",
    popular: true,
    image: daalChawal,
  },
  {
    id: 5,
    name: "Chicken Handi",
    description: "Creamy chicken handi prepared with a rich tomato-based gravy.",
    price: 550,
    category: "Curry",
    type: "Non-Veg",
    popular: true,
    image: chickenHandi,
  },
  {
    id: 6,
    name: "Aloo Paratha",
    description: "Freshly prepared paratha stuffed with seasoned potatoes.",
    price: 220,
    category: "Breakfast",
    type: "Veg",
    popular: false,
    image: alooParatha,
  },
  {
    id: 7,
    name: "Chicken Tikka",
    description: "Marinated chicken grilled with traditional BBQ spices.",
    price: 400,
    category: "BBQ",
    type: "Non-Veg",
    popular: true,
    image: chickenTikka,
  },
  {
    id: 8,
    name: "Chana Masala",
    description: "Chickpeas cooked in a spicy desi masala gravy.",
    price: 280,
    category: "Vegetarian",
    type: "Veg",
    popular: false,
    image: chanaMasala,
  },
  {
    id: 9,
    name: "Beef Seekh Kebabs",
    description: "Juicy minced beef kebabs grilled with herbs and spices.",
    price: 450,
    category: "BBQ",
    type: "Non-Veg",
    popular: false,
    image: beefSeekhKebab,
  },
  {
    id: 10,
    name: "Chicken Shawarma",
    description: "Seasoned chicken wrapped with fresh vegetables and sauce.",
    price: 350,
    category: "Fast Food",
    type: "Non-Veg",
    popular: false,
    image: chickenShawarma,
  },
  {
    id: 11,
    name: "Mix Vegetable Curry",
    description: "Seasonal vegetables cooked in a flavorful desi curry.",
    price: 320,
    category: "Vegetarian",
    type: "Veg",
    popular: false,
    image: mixVegetableCurry,
  },
  {
    id: 12,
    name: "Chicken Zinger Burger",
    description: "Crispy chicken fillet burger with lettuce and creamy sauce.",
    price: 420,
    category: "Fast Food",
    type: "Non-Veg",
    popular: true,
    image: zingerBurger,
  },
];

export default meals;