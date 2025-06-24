const menuData = {
  categories: [
    {
      id: 'sushi',
      name: 'SUSHI & SASHIMI',
      icon: 'chopsticks',
      items: [
        {
          id: 'hana-aburi',
          name: 'Hana Aburi Sushi Set',
          description: '6 potong sushi aburi dengan wagyu, salmon, dan engawa.',
          price: 98000,
          isSignature: true,
          imageUrl: '/src/assets/images/hana-aburi.png'
        },
        {
          id: 'salmon-sashimi',
          name: 'Salmon Sashimi (5 pcs)',
          description: 'Irisan salmon segar dengan wasabi dan shoyu.',
          price: 65000,
          isSignature: false,
          imageUrl: '/src/assets/images/salmon-sashimi.png'
        },
        {
          id: 'tuna-sashimi',
          name: 'Tuna Sashimi (5 pcs)',
          description: 'Daging tuna pilihan, tekstur lembut dan segar.',
          price: 68000,
          isSignature: false,
          imageUrl: '/src/assets/images/tuna-sashimi.png'
        },
        {
          id: 'nobuya-maki',
          name: 'Nobuya Maki Roll',
          description: 'Sushi roll isi tamago, salmon, dan alpukat, dilapisi tobiko.',
          price: 78000,
          isSignature: false,
          imageUrl: '/src/assets/images/nobuya-maki.png'
        },
        {
          id: 'ebi-tempura-roll',
          name: 'Ebi Tempura Roll',
          description: 'Sushi gulung dengan udang tempura dan saus unagi.',
          price: 72000,
          isSignature: false,
          imageUrl: '/src/assets/images/ebi-tempura-roll.png'
        }
      ]
    },
    {
      id: 'donburi',
      name: 'DONBURI & BENTO',
      icon: 'bowl',
      items: [
        {
          id: 'gyu-truffle',
          name: 'Gyu Truffle Don',
          description: 'Donburi wagyu dan saus truffle khas Nobuya.',
          price: 120000,
          isSignature: true,
          imageUrl: '/src/assets/images/gyu-truffle.png'
        },
        {
          id: 'chicken-teriyaki',
          name: 'Chicken Teriyaki Don',
          description: 'Ayam teriyaki dengan nasi, telur, dan nori.',
          price: 75000,
          isSignature: false,
          imageUrl: '/src/assets/images/chicken-teriyaki.png'
        },
        {
          id: 'miso-karaage',
          name: 'Miso Karaage Bento',
          description: 'Bento dengan ayam goreng miso, nasi, salad, dan acar.',
          price: 85000,
          isSignature: true,
          imageUrl: '/src/assets/images/miso-karaage.png'
        },
        {
          id: 'salmon-teriyaki',
          name: 'Salmon Teriyaki Bento',
          description: 'Salmon panggang saus teriyaki, disajikan dalam bento box lengkap.',
          price: 98000,
          isSignature: false,
          imageUrl: '/src/assets/images/salmon-teriyaki.png'
        },
        {
          id: 'unagi-don',
          name: 'Unagi Don',
          description: 'Nasi Jepang dengan belut panggang dan saus manis gurih.',
          price: 145000,
          isSignature: false,
          imageUrl: '/src/assets/images/unagi-don.png'
        }
      ]
    },
    {
      id: 'ramen',
      name: 'RAMEN & UDON',
      icon: 'noodle',
      items: [
        {
          id: 'tempura-udon',
          name: 'Tempura Udon Hot Bowl',
          description: 'Udon kuah dashi dengan ebi tempura dan daun bawang.',
          price: 88000,
          isSignature: true,
          imageUrl: '/src/assets/images/tempura-udon.png'
        },
        {
          id: 'tori-ramen',
          name: 'Tori Shoyu Ramen',
          description: 'Ramen kuah soy, ayam panggang, telur ajitsuke, dan menma.',
          price: 80000,
          isSignature: false,
          imageUrl: '/src/assets/images/tori-ramen.png'
        },
        {
          id: 'spicy-miso',
          name: 'Spicy Miso Ramen',
          description: 'Ramen kuah miso pedas dengan topping chashu dan corn.',
          price: 85000,
          isSignature: false,
          imageUrl: '/src/assets/images/spicy-miso.png'
        },
        {
          id: 'kitsune-udon',
          name: 'Kitsune Udon',
          description: 'Udon kuah ringan dengan tahu goreng manis (aburaage).',
          price: 72000,
          isSignature: false,
          imageUrl: '/src/assets/images/kitsune-udon.png'
        }
      ]
    },
    {
      id: 'appetizer',
      name: 'APPETIZER & SIDE DISH',
      icon: 'plate',
      items: [
        {
          id: 'edamame',
          name: 'Edamame Garlic Butter',
          description: 'Kacang edamame ditumis dengan mentega dan bawang putih.',
          price: 28000,
          isSignature: false,
          imageUrl: '/src/assets/images/edamame.png'
        },
        {
          id: 'takoyaki',
          name: 'Takoyaki (5 pcs)',
          description: 'Bola gurita Jepang, topping katsuobushi & saus mayo.',
          price: 42000,
          isSignature: false,
          imageUrl: '/src/assets/images/takoyaki.png'
        },
        {
          id: 'agedashi-tofu',
          name: 'Agedashi Tofu',
          description: 'Tahu lembut digoreng, disajikan dengan saus tentsuyu.',
          price: 36000,
          isSignature: false,
          imageUrl: '/src/assets/images/agedashi-tofu.png'
        },
        {
          id: 'wakame-salad',
          name: 'Wakame Salad',
          description: 'Salad rumput laut dengan dressing wijen.',
          price: 30000,
          isSignature: false,
          imageUrl: '/src/assets/images/wakame-salad.png'
        },
        {
          id: 'gyoza',
          name: 'Gyoza (Chicken/Pork)',
          description: 'Dumpling goreng isi ayam/pork, disajikan dengan saus tare.',
          price: 48000,
          isSignature: false,
          imageUrl: '/src/assets/images/gyoza.png'
        }
      ]
    },
    {
      id: 'dessert',
      name: 'DESSERT',
      icon: 'cake',
      items: [
        {
          id: 'matcha-cheesecake',
          name: 'Matcha Cheesecake with Red Bean',
          description: 'Cheesecake matcha dengan topping kacang merah & kinako.',
          price: 42000,
          isSignature: true,
          imageUrl: '/src/assets/images/matcha-cheesecake.png'
        },
        {
          id: 'dorayaki-ice',
          name: 'Dorayaki Ice Cream',
          description: 'Pancake Jepang isi es krim vanila dan pasta kacang merah.',
          price: 38000,
          isSignature: false,
          imageUrl: '/src/assets/images/dorayaki-ice.png'
        },
        {
          id: 'mochi-ice',
          name: 'Mochi Ice Cream (2 pcs)',
          description: 'Pilihan rasa matcha, vanila, atau mangga.',
          price: 28000,
          isSignature: false,
          imageUrl: '/src/assets/images/mochi-ice.png'
        },
        {
          id: 'kurogoma-ice',
          name: 'Kurogoma Ice Cream',
          description: 'Es krim wijen hitam Jepang, rasa nutty dan creamy.',
          price: 35000,
          isSignature: true,
          imageUrl: '/src/assets/images/kurogoma-ice.png'
        }
      ]
    },
    {
      id: 'drinks',
      name: 'DRINKS',
      icon: 'drink',
      items: [
        {
          id: 'signature-mocktail',
          name: 'Nobuya Signature Mocktail',
          description: 'Campuran yuzu soda dan daun shiso segar.',
          price: 38000,
          isSignature: true,
          imageUrl: '/src/assets/images/signature-mocktail.png'
        },
        {
          id: 'ocha',
          name: 'Japanese Ocha (Refill)',
          description: 'Teh hijau panas atau dingin, refill sepuasnya.',
          price: 20000,
          isSignature: false,
          imageUrl: '/src/assets/images/ocha.png'
        },
        {
          id: 'yuzu-lemon',
          name: 'Yuzu Lemon Sparkle',
          description: 'Lemon soda Jepang dengan ekstrak yuzu asli.',
          price: 30000,
          isSignature: false,
          imageUrl: '/src/assets/images/yuzu-lemon.png'
        },
        {
          id: 'matcha-latte',
          name: 'Matcha Latte (Hot/Iced)',
          description: 'Susu dengan bubuk matcha premium, creamy dan lembut.',
          price: 32000,
          isSignature: false,
          imageUrl: '/src/assets/images/matcha-latte.png'
        },
        {
          id: 'sakura-fizz',
          name: 'Sakura Fizz Mocktail',
          description: 'Minuman soda pink dari sirup sakura Jepang, lemon, dan kelopak bunga asli sebagai garnish.',
          price: 38000,
          isSignature: true,
          imageUrl: '/src/assets/images/sakura-fizz.png'
        },
        {
          id: 'mineral-water',
          name: 'Mineral Water',
          description: 'Air mineral.',
          price: 12000,
          isSignature: false,
          imageUrl: '/src/assets/images/mineral-water.png'
        }
      ]
    },
    {
      id: 'izakaya',
      name: 'IZAKAYA GRILLED SPECIALS',
      icon: 'grill',
      items: [
        {
          id: 'yakitori',
          name: 'Yakitori Moriawase (5 tusuk)',
          description: 'Campuran sate ayam ala Jepang: negima, tsukune, dan tare-glazed chicken wing.',
          price: 65000,
          isSignature: true,
          imageUrl: '/src/assets/images/yakitori.png'
        },
        {
          id: 'salmon-mentai',
          name: 'Grilled Salmon Mentaiyaki',
          description: 'Salmon panggang dengan saus mentai lembut dan topping tobiko.',
          price: 98000,
          isSignature: false,
          imageUrl: '/src/assets/images/salmon-mentai.png'
        },
        {
          id: 'shishamo',
          name: 'Shishamo Yaki (3 pcs)',
          description: 'Ikan shishamo panggang utuh, garing di luar dan creamy di dalam.',
          price: 45000,
          isSignature: false,
          imageUrl: '/src/assets/images/shishamo.png'
        }
      ]
    },
    {
      id: 'premium',
      name: 'WAGYU & PREMIUM DISHES',
      icon: 'premium',
      items: [
        {
          id: 'wagyu-ishiyaki',
          name: 'Wagyu Ishiyaki (Hot Stone Grill)',
          description: 'Daging wagyu A5 disajikan mentah untuk dipanggang sendiri di atas batu panas, dengan saus ponzu dan garam Himalaya.',
          price: 185000,
          isSignature: true,
          imageUrl: '/src/assets/images/wagyu-ishiyaki.png'
        },
        {
          id: 'wagyu-sushi',
          name: 'Wagyu Sushi Nigiri (2 pcs)',
          description: 'Nigiri sushi dengan irisan wagyu, dibakar seketika dan ditaburi garam laut.',
          price: 55000,
          isSignature: false,
          imageUrl: '/src/assets/images/wagyu-sushi.png'
        }
      ]
    },
    {
      id: 'vegan',
      name: 'VEGAN & LIGHT OPTION',
      icon: 'leaf',
      items: [
        {
          id: 'vegan-don',
          name: 'Vegan Yasai Don',
          description: 'Donburi isi sayur panggang (zucchini, paprika, jamur), tofu, dan saus wijen Jepang.',
          price: 62000,
          isSignature: false,
          imageUrl: '/src/assets/images/vegan-don.png'
        },
        {
          id: 'cold-soba',
          name: 'Cold Soba with Grated Daikon',
          description: 'Mie soba dingin disajikan dengan kuah tsuyu, rumput laut, dan lobak parut.',
          price: 58000,
          isSignature: false,
          imageUrl: '/src/assets/images/cold-soba.png'
        }
      ]
    }
  ],
  signatureItems: [
    'hana-aburi',
    'gyu-truffle',
    'miso-karaage',
    'tempura-udon',
    'matcha-cheesecake',
    'signature-mocktail'
  ]
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export default menuData;