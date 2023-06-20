// navigation Data
import { IoPeopleOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { TbCurrencyDollar } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";
import { RiHome4Line, RiBuilding4Line, RiBankFill, RiClapperboardFill, RiCommunityFill } from "react-icons/ri";

export const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Reviews",
    url: "/reviews",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
];

// branding data
export const brandingData = [
  {
    id: "BD1",
    title: "Arsitek Gokil",
    Description: "Arsitek berpengalaman dan terpercaya",
    icon: <IoPeopleOutline size={36} color="#0B3F9C" />,
  },
  {
    id: "BD2",
    title: "Desain Variasi",
    Description: "Banyak pilihan desain",
    icon: <BsHouse size={36} color="#0B3F9C" />,
  },
  {
    id: "BD3",
    title: "Ekonomis",
    Description: "Jasa arsitek yang terjangkau",
    icon: <TbCurrencyDollar size={36} color="#0B3F9C" />,
  },
  {
    id: "BD4",
    title: "Transaksi Aman",
    Description: "Transaksi Terjamin 100%",
    icon: <AiOutlineSafety size={36} color="#0B3F9C" />,
  },
];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "Houses",
    subTitle: "",
    icon: <RiHome4Line size={90} color="#0B3F9C" />,
    iconsmall: <RiHome4Line size={24} color="#0B3F9C" />,
  },
  {
    id: 2,
    title: "Hotels",
    subTitle: "",
    icon: <RiBuilding4Line size={90} color="#0B3F9C" />,
    iconsmall: <RiBuilding4Line size={24} color="#0B3F9C" />,
  },
  {
    id: 3,
    title: "Commercial",
    subTitle: "",
    icon: <RiBankFill size={90} color="#0B3F9C" />,
    iconsmall: <RiBankFill size={24} color="#0B3F9C" />,
  },
  {
    id: 4,
    title: "Entertainment",
    subTitle: "",
    icon: <RiClapperboardFill size={90} color="#0B3F9C" />,
    iconsmall: <RiClapperboardFill size={24} color="#0B3F9C" />,
  },
  {
    id: 5,
    title: "Others",
    subTitle: "",
    icon: <RiCommunityFill size={90} color="#0B3F9C" />,
    iconsmall: <RiCommunityFill size={24} color="#0B3F9C" />,
  },
];

export const architectsData = [
  {
    id: 1,
    category: "Houses",
    name: "Atsushi Omatsu",
    description: "A pro architect from Japan with experience more than 30 years.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/ArsitekAtsushi.png",
      },
    ],
    shop: {
      name: "Nikken Sekei Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/NikkenSekkei.png",
      },
      ratings: 4.2,
    },
    rating: 4,
    total_sell: 35,
  },
  {
    id: 2,
    category: "Hotels",
    name: "Didon Danisworo",
    description: "The one who designed Telkom office with experience about 25 years.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/ArsitekDidon.png",
      },
    ],
    shop: {
      name: "PT. Pandega Desain Weharima",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/pdw.png",
      },
      ratings: 4.2,
    },
    rating: 5,
    total_sell: 80,
  },
  {
    id: 1,
    category: "Houses",
    name: "Eko Purwantoro",
    description: "A profesional architect that leading a division in Arkonin Engineering MP.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/ArsitekEko.png",
      },
    ],
    shop: {
      name: "PT. Arkonin Engineerin MP",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/PTArkonin.png",
      },
      ratings: 4.2,
    },
    rating: 4,
    total_sell: 75,
  },
  {
    id: 4,
    category: "Others",
    name: "Nicole Arrieta",
    description: "A profesional architect with a great creativity.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/ArsitekNicole.png",
      },
    ],
    shop: {
      name: "Nikken Sekkei Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/NikkenSekkei.png",
      },
      ratings: 4.2,
      category: "Others",
    },
    rating: 4,
    total_sell: 12,
  },
  {
    id: 5,
    category: "Others",
    name: "Antohny Woods",
    description: "A profesional architect with experience more than 25 years.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/ArsitekWood.png",
      },
    ],
    shop: {
      name: "Nikken Sekkei Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/NikkenSekkei.png",
      },
      ratings: 4.2,
    },
    rating: 5,
    total_sell: 49,
  },
];

// product Data
export const productData = [
  {
    id: 4,
    category: "Entertainment",
    name: "A big sized cinema building",
    description:
      "The cinema building is a magnificent and modern structure. With elegant architecture, impressive glass design, and grand entrance, the building captivates attention from the outside. Inside, visitors are welcomed by an elegant interior with a spacious lobby and comfortable waiting area where they can chill while waiting for the movie to start. The main cinema hall is equipped with a wide screen and a high-quality sound system, providing an extraordinary viewing experience. With additional facilities such as food and beverage bar, visitors can enjoy their time convenient in this place.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/cinema1.jpg",
      },
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/cinema1side.jpg",
      },
    ],
    shop: {
      name: "Architect 6",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/profile_icon.png",
      },
      ratings: 4.2,
    },
    discount_price: "1.000.000",
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 30,
    stock: 10,
  },
  {
    id: 3,
    category: "Commercial",
    name: "Unique malls",
    description:
      "The mall is a striking structure, capturing attention with its grand entrance with the water fountain. The architectural design showcases a modern and inviting aesthetic, welcoming visitors to explore it. The entrance is very adorning with captivating elements, such as stylish lighting fixtures and artistic details, creating an atmosphere of anticipation. As you approach the entrance, the impressive size and sleek design of the mall create a sense of excitement and curiosity. Step inside, and you'll discover a world of shopping, dining, and entertainment, ready to cater to your every need.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/shoppingmall.png",
      },
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/shoppingmallinside.png",
      },
    ],
    shop: {
      name: "Architect 7",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/profile_icon.png",
      },
      ratings: 4.2,
    },
    discount_price: "900.000",
    rating: 4,
    total_sell: 62,
    stock: 10,
  },
  {
    id: 4,
    category: "Entertainment",
    name: "Arcade building with boutique store",
    description:
      "The arcade building is a vibrant hub of activity, bustling with energy and excitement. Nestled within this lively atmosphere is a charming boutique store, tucked away in one of the arcade's corners. The building's architecture gives a retro charm, with a covered walkway lined with various shops and colorful signage. As you stroll along the arcade, the boutique store stands out with its tasteful display window and inviting entrance on the first floor. Inside, the store is a haven of fashion, with racks adorned with stylish garments, shelves showcasing accessories, and mannequins modeling the latest trends. The boutique's cozy ambiance and personalized service create a delightful shopping experience, making it a go-to destination for fashion-forward individuals seeking unique and trendy pieces. With this, all guys can wait for their partner while playing in the arcades",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/arcade1.png",
      },
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/arcade2.png",
      },
    ],
    shop: {
      name: "Architect 8",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/profile_icon.png",
      },
      ratings: 4.2,
    },
    discount_price: "870.000",
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
  {
    id: 2,
    category: "Commercial",
    name: "A big sized office building",
    description:
      "The office building stands tall and professional, embodying a sense of corporate sophistication. Its sleek and modern architecture commands attention, with a façade of glass and steel that reflects the surrounding cityscape. As you enter the building, a spacious and well-appointed lobby welcomes you with its polished marble floors, comfortable seating areas, and a reception desk staffed by friendly professionals. The building is equipped with state-of-the-art facilities, including high-speed elevators and advanced security systems, ensuring efficiency and safety for its occupants. The floors above house a variety of office spaces, each designed to accommodate different businesses and organizations. From open-plan workspaces to private offices, the building offers a versatile environment that fosters productivity and collaboration. With its prime location and professional ambiance, the office building serves as a prestigious address for companies and professionals seeking a conducive and prestigious working environment.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/office1.jpg",
      },
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/office2.jpg",
      },
    ],
    shop: {
      name: "Architect 9",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/profile_icon.png",
      },
      ratings: 4.2,
    },
    discount_price: "1.255.000",
    rating: 5,
    total_sell: 23,
    stock: 10,
  },
  {
    id: 4,
    category: "Entertainment",
    name: "Historical museum",
    description:
      "This design is an architectural marvel, captivating and inspiring visitors. Its design seamlessly blends tradition and innovation, creating a visually stunning structure. Inside, spacious galleries showcase a curated collection of artifacts and artworks, providing a glimpse into history and culture. The building's layout guides visitors on a captivating journey, enhanced by multimedia presentations and interactive displays. It is a cultural hub, preserving the past and fostering a deeper understanding of our world.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/museum.jpg",
      },
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/museum1.jpg",
      },
    ],
    shop: {
      name: "Architect 10",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/profile_icon.png",
      },
      ratings: 4.2,
    },
    discount_price: "935.000",
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 27,
    stock: 10,
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: 1,
    category: "Houses",
    name: "A minimalist house",
    description:
      "The minimalist house design is sleek, clean, and uncluttered. Its simplicity creates a sense of modern elegance and tranquility. With straight lines, neutral colors, and a focus on functionality, every element serves a purpose. The minimalist design promotes a mindful and serene living environment.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/minimalist_house.png",
      },
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/minimalist_house1.png",
      },
    ],
    shop: {
      name: "Architect 2",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/profile_icon.png",
      },
      ratings: 4.2,
    },
    discount_price: "1.655.000",
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 18,
    stock: 10,
  },
  {
    id: 2,
    category: "Hotels",
    name: "A futuristic hotel",
    description:
      "The luxury hotel design is a masterpiece of opulence and sophistication. Its architecture radiates grandeur, captivating guests from the moment they arrive. The interior is adorned with lavish materials, exquisite furnishings, and intricate details that evoke a sense of indulgence. Every corner of the hotel exudes elegance, with spacious and beautifully appointed rooms, luxurious spa facilities, and world-class dining establishments. The design seamlessly blends modern amenities with timeless elegance, creating a luxurious retreat for discerning guests. Impeccable service and attention to detail complete the experience, ensuring a stay that is truly unforgettable.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/hotels1.jpg",
      },
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/hotels2.jpg",
      },
    ],
    shop: {
      name: "Architect 3",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/profile_icon.png",
      },
      ratings: 4.2,
    },
    discount_price: "985.000",
    rating: 4,
    total_sell: 62,
    stock: 10,
  },
  {
    id: 1,
    category: "Houses",
    name: "A luxury house",
    description:
      "The luxury house design is a stunning embodiment of elegance and refinement. Its architecture showcases timeless beauty and meticulous craftsmanship. With lavish interiors, high-end finishes, and exquisite detailing, every aspect exudes opulence. Expansive living spaces, designer fixtures, and state-of-the-art amenities create an indulgent environment for the residents. The house seamlessly combines comfort and style, offering luxurious features such as private spas, expansive outdoor areas, and panoramic views. Attention to detail is paramount, with custom-designed elements that enhance the overall aesthetic. The luxury house design is a true sanctuary of sophistication, providing a prestigious and extravagant living experience.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/luxuryhouse1.jpg",
      },
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/luxuryhouse2.jpg",
      },
    ],
    shop: {
      name: "Architect 5",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/profile_icon.png",
      },
      ratings: 4.2,
    },
    discount_price: "995.000",
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 16,
    stock: 10,
  },
  {
    id: 5,
    category: "Others",
    name: "A simple pharmacy",
    description:
      "The simple pharmacy design is a perfect blend of functionality and minimalism. Its clean and uncluttered layout creates a welcoming and efficient space for customers. The interior features a straightforward arrangement of shelving units and counters, making it easy for visitors to navigate and find what they need. The color palette is neutral and calming, promoting a sense of tranquility. Clear signage and well-organized product displays ensure a seamless shopping experience. The focus is on providing essential services and a comfortable environment for customers, without unnecessary distractions. The simple pharmacy design is an inviting space that prioritizes convenience and accessibility, making it a trusted destination for health and wellness needs.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/newpharmacy.jpg",
      },
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/newpharmacy2.jpg",
      },
    ],
    shop: {
      name: "Architect 4",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/profile_icon.png",
      },
      ratings: 4.2,
    },
    discount_price: "1.505.000",
    rating: 5,
    total_sell: 25,
    stock: 10,
  },
  {
    id: 5,
    category: "Others",
    name: "A big clinic",
    description:
      "The clinic design is a harmonious blend of functionality and soothing aesthetics. With a clean and organized layout, it creates a calming atmosphere for patients. The interior features comfortable seating areas, natural light, and a color scheme that promotes a sense of tranquility. The clinic is designed to optimize workflow and patient privacy, with separate consultation rooms and treatment areas. State-of-the-art medical equipment and technology are seamlessly integrated, ensuring efficient and high-quality care. The design also incorporates elements of nature, such as indoor plants or artwork, to enhance the healing environment. The clinic design prioritizes patient comfort and well-being, creating a welcoming space that inspires confidence and reassurance.",
    image_Url: [
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/clinics.png",
      },
      {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/clinics1.png",
      },
    ],
    shop: {
      name: "Architect 2",
      shop_avatar: {
        public_id: "test",
        url: "https://tkxldk.github.io/berarsitekasset/images/profile_icon.png",
      },
      ratings: 4.2,
    },
    discount_price: "925.500",
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
];

export const footerProductLinks = [
  {
    name: "About Us",
  },
  {
    name: "Careers",
  },
];

export const footercompanyLinks = [
  {
    name: "Houses",
    link: "/products?category=Houses",
  },
  {
    name: "Hotels",
    link: "/products?category=Hotels",
  },
  {
    name: "Commercial",
    link: "/products?category=Commercial",
  },
  {
    name: "Entertainment",
    link: "/products?category=Entertainment",
  },
  {
    name: "Others",
    link: "/products?category=Others",
  },
];

export const footerSupportLinks = [
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
  {
    name: "Contact Us",
  },
];
