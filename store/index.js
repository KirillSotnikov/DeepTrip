// import users from './modules/users'

const citiesList = [
  {
    id: 'odesa',
    name: 'Одесса',
    mainImage: {
      src: 'https://navigator-ukraina.com.ua/media/k2/items/cache/760af276ee6f9b46d3f3a54c804b7c7d_XL.jpg'
    }
  },
  {
    id: 'kyiv',
    name: 'Киев',
    mainImage: {
      src: 'https://content.r9cdn.net/rimg/dimg/27/bb/1e63bfbb-city-15139-1645cdf896a.jpg?width=1750&height=1000&xhint=2663&yhint=911&crop=true'
    }
  },
  {
    id: 'lviv',
    name: 'Львов',
    mainImage: {
      src: 'https://coworker.imgix.net/pictures/C282/edit/lviv-resize.jpg?auto=format,compress&fit=clamp'
    }
  },
  {
    id: 'vinitsa',
    name: 'Винница',
    mainImage: {
      src: 'https://tamtour.com.ua/local/image/440/009/ua241.jpg'
    }
  },
]

const categoriesList = [
  {
    id: 'square_street',
    name: 'Площади и улицы',
    image: {
      src: 'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/01/24/1941301-340605201.jpg?itok=hWuEtvxq'
    }
  },
  {
    id: 'monuments',
    name: 'Памятники',
    image: {
      src: 'https://thumbor.thedailymeal.com/4uq5B7KndIlUie1fqgFLxQaiEt0=/870x565/https://www.theactivetimes.com/sites/default/files/slideshows/105740/108546/landmarks-chicago-1.jpg'
    }
  },
  {
    id: 'buildings',
    name: 'Здания',
    image: {
      src: 'https://www.americancityandcounty.com/files/2020/06/sean-pollock-PhYq704ffdA-unsplash-2-1024x512.jpg'
    }
  },
  {
    id: 'observation_decks',
    name: 'Смотровые площадки',
    image: {
      src: 'https://untappedcities.com/wp-content/uploads/2020/03/Hudson-Yards-Edge-Observation-Deck-Highest-in-Western-Hemisphere-Opening-Day-NYC-002-1.jpg'
    }
  },
  {
    id: 'hotels',
    name: 'Отели',
    image: {
      src: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/193416091.jpg?k=e566fb25ade72de5c03c634af0c85bb491d3fff5ba1b0c01a360b423c1067559&o='
    }
  },
  {
    id: 'entertainment',
    name: 'Развлечения',
    image: {
      src: 'https://topclub.ua/images/uploads/1city1.jpg'
    }
  },
  {
    id: 'nature',
    name: 'Природа',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMC5Z2WD7HxVq1kWMP-5sIlqWqfH_FFZMALg&usqp=CAU'
    }
  },
]

const placesList = [
  {
    id: 'odesa-opera-theatre',
    city_id: 'odesa',
    category_id: 'buildings',
    mainImage: {
      src: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/odessa_0.jpg'
    },
    title: 'Театр Оперы и Балета',
    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    gallery: [
      {
        name: '',
        image: {
          src: 'https://kirillovka.ks.ua/wp-content/uploads/2018/11/odessa-25-evgeniy-danshin.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'https://www.momondo.ua/rimg/dimg/41/3d/d25aa3a1-lm-58710-16ff7129644.jpg?width=1366&height=768&xhint=1646&yhint=1460&crop=true'
        }
      },
      {
        name: '',
        image: {
          src: 'https://www.unn.com.ua/uploads/news/2021/09/02/84dd17298a42aa36cfadc0c551ee444238019d15.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'https://carlifemb.com/wp-content/uploads/2020/08/kartinka-1-9438-1600x1200.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'http://www.tic.in.ua/wp-content/uploads/2015/09/1001.jpg'
        }
      },
    ],
  },
  {
    id: 'odesa-test',
    city_id: 'odesa',
    category_id: 'monuments',
    mainImage: {
      src: 'https://kirillovka.ks.ua/wp-content/uploads/2018/11/odessa-25-evgeniy-danshin.jpg'
    },
    title: 'Test',
    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    gallery: [
      {
        name: '',
        image: {
          src: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/odessa_0.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'https://www.momondo.ua/rimg/dimg/41/3d/d25aa3a1-lm-58710-16ff7129644.jpg?width=1366&height=768&xhint=1646&yhint=1460&crop=true'
        }
      },
      {
        name: '',
        image: {
          src: 'https://www.unn.com.ua/uploads/news/2021/09/02/84dd17298a42aa36cfadc0c551ee444238019d15.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'https://carlifemb.com/wp-content/uploads/2020/08/kartinka-1-9438-1600x1200.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'http://www.tic.in.ua/wp-content/uploads/2015/09/1001.jpg'
        }
      },
    ],
  },
  {
    id: 'odesa-lorem',
    city_id: 'odesa',
    category_id: 'observation_decks',
    mainImage: {
      src: 'https://www.unn.com.ua/uploads/news/2021/09/02/84dd17298a42aa36cfadc0c551ee444238019d15.jpg'
    },
    title: 'Lorem ipsum',
    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    gallery: [
      {
        name: '',
        image: {
          src: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/odessa_0.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'https://www.momondo.ua/rimg/dimg/41/3d/d25aa3a1-lm-58710-16ff7129644.jpg?width=1366&height=768&xhint=1646&yhint=1460&crop=true'
        }
      },
      {
        name: '',
        image: {
          src: 'https://kirillovka.ks.ua/wp-content/uploads/2018/11/odessa-25-evgeniy-danshin.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'https://carlifemb.com/wp-content/uploads/2020/08/kartinka-1-9438-1600x1200.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'http://www.tic.in.ua/wp-content/uploads/2015/09/1001.jpg'
        }
      },
    ],
  },
  {
    id: 'lviv-opera-theatre',
    city_id: 'lviv',
    category_id: 'entertainment',
    mainImage: {
      src: 'https://lviv.travel/image/locations/c0/00/c0009a375c359a0827add6c9be450d7ca582caf1_1558436923.png?crop=1366%2C735%2C0%2C0'
    },
    title: 'Театр Оперы и Балета',
    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    gallery: [
      {
        name: '',
        image: {
          src: 'https://greentourua.com/wp-content/uploads/2018/07/%D0%9B%D0%AC%D0%B2%D0%BE%D0%B2-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0-e1531303430647.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'https://cdn.theculturetrip.com/wp-content/uploads/2018/03/lviv-opera-house.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'https://s.inyourpocket.com/gallery/17685.jpg'
        }
      },
    ],
  },
  {
    id: 'lviv-hello-world',
    city_id: 'lviv',
    category_id: 'hotels',
    mainImage: {
      src: 'https://greentourua.com/wp-content/uploads/2018/07/%D0%9B%D0%AC%D0%B2%D0%BE%D0%B2-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0-e1531303430647.jpg'
    },
    title: 'Hello world',
    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    gallery: [
      {
        name: '',
        image: {
          src: 'https://lviv.travel/image/locations/c0/00/c0009a375c359a0827add6c9be450d7ca582caf1_1558436923.png?crop=1366%2C735%2C0%2C0'
        }
      },
      {
        name: '',
        image: {
          src: 'https://cdn.theculturetrip.com/wp-content/uploads/2018/03/lviv-opera-house.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'https://s.inyourpocket.com/gallery/17685.jpg'
        }
      },
    ],
  },
  {
    id: 'kyiv-sofia-cathedral',
    city_id: 'kyiv',
    category_id: 'square_street',
    mainImage: {
      src: 'https://lp-cms-production.imgix.net/2019-06/3dac8636463130946be3ba9d87512d7f-st-sophia-s-cathedral.jpg'
    },
    title: 'Театр Оперы и Балета',
    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    gallery: [
      {
        name: '',
        image: {
          src: 'https://st-sophia.org.ua/wp-content/uploads/2016/09/m-01.png'
        }
      },
      {
        name: '',
        image: {
          src: 'https://s.inyourpocket.com/gallery/17316.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/St.Sophia_Cathedral%2C_Kyiv%2C_Ukraine_%282%29.jpg'
        }
      },
    ],
  },
  {
    id: 'kyiv-pasta-pizza',
    city_id: 'kyiv',
    category_id: 'observation_decks',
    mainImage: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/St.Sophia_Cathedral%2C_Kyiv%2C_Ukraine_%282%29.jpg'
    },
    title: 'Pasta & Pizza',
    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    gallery: [
      {
        name: '',
        image: {
          src: 'https://st-sophia.org.ua/wp-content/uploads/2016/09/m-01.png'
        }
      },
      {
        name: '',
        image: {
          src: 'https://s.inyourpocket.com/gallery/17316.jpg'
        }
      },
      {
        name: '',
        image: {
          src: 'https://lp-cms-production.imgix.net/2019-06/3dac8636463130946be3ba9d87512d7f-st-sophia-s-cathedral.jpg'
        }
      },
    ],
  },
  {
    id: 'vinnytsa-fontan',
    city_id: 'vinitsa', // TODO
    category_id: 'nature', // TODO
    mainImage: {
      src: 'https://img.tourister.ru/files/2/2/8/3/6/1/3/4/clones/870_600_fixedwidth.jpg'
    },
    title: 'Roshen fontan',
    description: 'Фонтан в Виннице «Рошен» считается самым крупным среди аналогичных плавающих фонтанов Европы, одним из десяти наиболее зрелищных в мире и единственным мультимедийным на территории Украины. Его фееричное открытие состоялось в сентябре 2011 года в присутствии тысяч винничан и гостей города. Уже в следующем сезоне фонтан занял лидирующие позиции в ряду местных достопримечательностей и превратился в современный символ Винницы.',
    gallery: [],
  }
]

export default {
  modules: {
    // users
  },
  state: {
    isVisibleMenu: false,
    activeCityId: null,

    isHeaderVisible: false,

    places: placesList,
    cities: citiesList,
    categories: categoriesList,

    savedPlaces: [],
  },
  mutations: {
    openMenu(state) {
      state.isVisibleMenu = true
    },
    closeMenu(state) {
      state.isVisibleMenu = false
    },
    setActiveCity(state, payload) {
      state.activeCityId = payload;
    },
    setIsHeaderVisible(state, payload) {
      state.isHeaderVisible = payload;
    }
  },
  actions: {
    openMenu(store) {
      store.commit('openMenu');
    },
    closeMenu(store) {
      store.commit('closeMenu');
    },
    setActiveCity(store, payload) {
      store.commit('setActiveCity', payload);
    },
    setIsHeaderVisible(store, payload) {
      store.commit('setIsHeaderVisible', payload);
    }
  },
  getters: {
    isVisibleMenu(state) {
      return state.isVisibleMenu
    },
    isHeaderVisible(state) {
      return state.isHeaderVisible
    },
    activeCityId(state) {
      return state.activeCityId;
    },
    citiesList(state) {
      return state.cities.map(city => {
        const places = state.places.filter(place => place.city_id === city.id);
        let categories = [];
        places.forEach((place) => {
          if (!categories.find(category => category.id === place.category_id)) {
            const category = state.categories.find(item => item.id === place.category_id)
            categories.push(category);
          }
        })
        return {
          ...city,
          places,
          categories,
        }
      })
    },
    getCityById: (state) => id => {
      const city = state.cities.find(city => city.id === id);
      return {
        ...city,
        places: state.places.filter(place => place.city_id === city.id),
      }
    },
    getPlaceById: (state) => id => {
      const place = state.places.find(place => place.id === id);
      return {
        ...place,
        city: state.cities.find(city => city.id === place.city_id)
      }
    }
  }
}
