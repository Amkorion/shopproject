const SHOP_DATA = [
  {
    title: "Капелюхи",
    items: [
      {
        id: 1,
        name: "Дакота",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 250,
      },
      {
        id: 2,
        name: "Синиця",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 180,
      },
      {
        id: 3,
        name: "Мак Кой",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 750,
      },
      {
        id: 4,
        name: "Слідопит",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 650,
      },
      {
        id: 5,
        name: "Гуше",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 280,
      },
      {
        id: 6,
        name: "Пальма",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 245,
      },
      {
        id: 7,
        name: "Аляска",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 180,
      },
      {
        id: 8,
        name: "Вовк",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 350,
      },
      {
        id: 9,
        name: "Блакить",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 220,
      },
    ],
  },
  {
    title: "Взуття",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 2200,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 2800,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 1100,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 1600,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 1600,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 1600,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 1900,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 2000,
      },
    ],
  },
  {
    title: "Верхній одяг",
    items: [
      {
        id: 18,
        name: "Густав",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 1250,
      },
      {
        id: 19,
        name: "Лінкольн",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 900,
      },
      {
        id: 20,
        name: "Люпін",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 900,
      },
      {
        id: 21,
        name: "Хагрід",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 1650,
      },
      {
        id: 22,
        name: "Хаюл",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 1850,
      },
    ],
  },
  {
    title: "Жінкам",
    items: [
      {
        id: 23,
        name: "Хвиля",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 250,
      },
      {
        id: 24,
        name: "Квітка",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 200,
      },
      {
        id: 25,
        name: "Саяна",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 800,
      },
      {
        id: 26,
        name: "Горошок",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 800,
      },
      {
        id: 27,
        name: "Гук",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 450,
      },
      {
        id: 28,
        name: "Ворожея",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 29,
        name: "Лебідь",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 200,
      },
    ],
  },
  {
    title: "Чоловікам",
    items: [
      {
        id: 30,
        name: "Клінт",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 3250,
      },
      {
        id: 31,
        name: "Шабо",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 200,
      },
      {
        id: 32,
        name: "Квараза",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 250,
      },
      {
        id: 33,
        name: "Панте",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 250,
      },
      {
        id: 34,
        name: "Джин",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 400,
      },
      {
        id: 35,
        name: "Бургунд",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 250,
      },
    ],
  },
];

export default SHOP_DATA;
