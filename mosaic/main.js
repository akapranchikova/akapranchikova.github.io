const mosaicMarkers = [
    {
        id: 'voronezh-dinosaur', city: 'voronezh',
        coords: [51.65678496490777, 39.187461403671485],
        title: 'Динозавр', status: 'active'
    },
    {
        id: 'voronezh-mouse', city: 'voronezh',
        coords: [51.66283980817729, 39.19396239451089],
        title: 'Мышь', status: 'active'
    },
    {
        id: 'voronezh-turtle', city: 'voronezh',
        coords: [51.65866085684554, 39.19140550526209],
        title: 'Черепашка', status: 'active'
    },
    {
        id: 'voronezh-fox', city: 'voronezh',
        coords: [51.65782158862597, 39.18915701357037],
        title: 'Лиса', status: 'active'
    },
    {
        id: 'voronezh-heart', city: 'voronezh',
        coords: [51.65306609631122, 39.192352883292195],
        title: 'Сердце', status: 'painted-over'
    },
    {
        id: 'voronezh-lyashushka', city: 'voronezh',
        coords: [51.653756238695806, 39.19355711852405],
        title: 'Ляшушка', status: 'active'
    },
    {
        id: 'voronezh-knife', city: 'voronezh',
        coords: [51.65759510514901, 39.1970680191298],
        title: 'Нож', status: 'unconfirmed'
    },
    {
        id: 'voronezh-rabbit', city: 'voronezh',
        coords: [51.665963975585875, 39.201407100226795],
        title: 'Заяц', status: 'active',
        photo: { filename: 'rabbit', sizeLabel: '7 КБ' },
        instagramUrl: 'https://www.instagram.com/p/CQJzA_whsem/'
    },
    {
        id: 'voronezh-spider-crab', city: 'voronezh',
        coords: [51.66907345580261, 39.222661973180955],
        title: 'Паук краб', status: 'active',
        address: 'набережная Воронежского водохранилища',
        photo: { filename: 'spider-crab', sizeLabel: '15 КБ' },
        instagramUrl: 'https://www.instagram.com/p/CQ59ZRwjcvd/'
    },
    {
        id: 'voronezh-apple-core', city: 'voronezh',
        coords: [51.669123361160494, 39.22261369341869],
        title: 'Огрызок', status: 'active'
    },
    {
        id: 'voronezh-fern', city: 'voronezh',
        coords: [51.67233857452443, 39.199979780150905],
        title: 'Папоротник', status: 'painted-over'
    },
    {
        id: 'voronezh-bees', city: 'voronezh',
        coords: [51.670377545356764, 39.190699659957325],
        title: 'Пчелы', status: 'active'
    },
    {
        id: 'voronezh-mario', city: 'voronezh',
        coords: [51.6658235920637, 39.19935345144041],
        title: 'Марио', status: 'partially-damaged'
    },
    {
        id: 'voronezh-shark', city: 'voronezh',
        coords: [51.66867281040526, 39.20190338452813],
        title: 'Акула', status: 'painted-over'
    },
    {
        id: 'voronezh-fishes', city: 'voronezh',
        coords: [51.67141689449062, 39.20254540491442],
        title: 'Рыбы', status: 'active'
    },
    {
        id: 'voronezh-bone', city: 'voronezh',
        coords: [51.70780412117194, 39.148741685075954],
        title: 'Кость', status: 'active',
        photo: { filename: 'bone', sizeLabel: '5 КБ' },
        instagramUrl: 'https://www.instagram.com/p/CR50ELHDbLh/'
    },
    {
        id: 'voronezh-goose', city: 'voronezh',
        coords: [51.669227847990165, 39.195093081325474],
        title: 'Гусь', status: 'painted-over'
    },
    {
        id: 'voronezh-chicks', city: 'voronezh',
        coords: [51.666813611257304, 39.197828024625785],
        title: 'Цыплята', status: 'partially-damaged',
        address: 'у Детской художественной школы',
        photo: { filename: 'chicks', sizeLabel: '22 КБ' },
        instagramUrl: 'https://www.instagram.com/p/CVa2aitonOY/'
    },
    {
        id: 'voronezh-cockroach', city: 'voronezh',
        coords: [51.6643834039455, 39.21128744531416],
        title: 'Таракан', status: 'partially-damaged'
    },
    {
        id: 'voronezh-words', city: 'voronezh',
        coords: [51.67300426011623, 39.18474018573762],
        title: 'Слова', status: 'active',
        photo: { filename: 'words', sizeLabel: '37 КБ' },
        instagramUrl: 'https://www.instagram.com/p/CczhiH5IPI9/'
    },
    {
        id: 'voronezh-painted-mouse', city: 'voronezh',
        coords: [51.67145182237857, 39.18852173570486],
        title: 'Мышь', status: 'painted-over'
    },
    {
        id: 'voronezh-teddy', city: 'voronezh',
        coords: [51.66837868023326, 39.20438873406966],
        title: 'Мишка', status: 'active',
        address: 'ул. Фридриха Энгельса, недалеко от мозаики «Пистолет»',
        photo: { filename: 'teddy', sizeLabel: '30 КБ' },
        instagramUrl: 'https://www.instagram.com/p/CcmoHWNj8rV/'
    },
    {
        id: 'kolomna-camera', city: 'kolomna',
        coords: [55.10200303227641, 38.767566788010306],
        title: 'Камера', status: 'active'
    },
    {
        id: 'kolomna-wolf', city: 'kolomna',
        coords: [55.10026040631906, 38.762172336491865],
        title: 'Волк', status: 'active'
    },
    {
        id: 'kolomna-dinosaur', city: 'kolomna',
        coords: [55.10028572729061, 38.762121374520575],
        title: 'Динозавр', status: 'active'
    },
    {
        id: 'kolomna-cow', city: 'kolomna',
        coords: [55.10032792887418, 38.762020791682524],
        title: 'Корова', status: 'active'
    },
    {
        id: 'moscow-zebra', city: 'moscow',
        coords: [55.7556526798057, 37.64268911077125],
        title: 'Зебра', status: 'active'
    },
    {
        id: 'voronezh-sparks', city: 'voronezh',
        coords: [51.67051418066348, 39.20577143082483],
        title: 'Искры', status: 'active',
        photo: { filename: 'sparks', sizeLabel: '16 КБ' },
        instagramUrl: 'https://www.instagram.com/p/Cv-ZI0mtPJ5/'
    },
    {
        id: 'voronezh-fish', city: 'voronezh',
        coords: [51.66574473832743, 39.209303855896],
        title: 'Рыбка', status: 'active'
    },
    {
        id: 'voronezh-burger', city: 'voronezh',
        coords: [51.66668143340551, 39.205773114899785],
        title: 'Бургер', status: 'active',
        photo: { filename: 'burger', sizeLabel: '12 КБ' },
        instagramUrl: 'https://www.instagram.com/p/Cu9BXIitU3N/'
    },
    {
        id: 'voronezh-corn', city: 'voronezh',
        coords: [51.66658328085882, 39.206411480645336],
        title: 'Кукуруза', status: 'active',
        address: 'гастромаркет «Коммуна»',
        photo: { filename: 'corn', sizeLabel: '24 КБ' },
        instagramUrl: 'https://www.instagram.com/p/CvEPJVOoC4j/'
    },
    {
        id: 'voronezh-octopus', city: 'voronezh',
        coords: [51.67634024439369, 39.20142218797992],
        title: 'Осьминог', status: 'active'
    },
    {
        id: 'voronezh-black-white-bird', city: 'voronezh',
        coords: [51.6661373610036, 39.20707023586147],
        title: 'Птичка черно-белая', status: 'active',
        address: 'напротив стендап-клуба в «Коммуне»',
        photo: { filename: 'black-white-bird', sizeLabel: '26 КБ' },
        instagramUrl: 'https://www.instagram.com/p/DKSOsRbK951/'
    },
    {
        id: 'voronezh-woodpecker', city: 'voronezh',
        coords: [51.66624221122439, 39.20619416981936],
        title: 'Дятел', status: 'active',
        address: 'проспект Революции, 43, в арке',
        photo: { filename: 'woodpecker', sizeLabel: '29 КБ' },
        instagramUrl: 'https://www.instagram.com/p/DKe-QDWq5aZ/'
    },
    {
        id: 'voronezh-blue-bird-nikitin', city: 'voronezh',
        coords: [51.66836001415937, 39.20234074175824],
        title: 'Птичка синяя', status: 'active',
        address: 'Никитинский сквер, у граффити с котёнком с улицы Лизюкова',
        photo: { filename: 'blue-bird-nikitin', sizeLabel: '9 КБ' },
        instagramUrl: 'https://www.instagram.com/p/DKkLcGkKZuL/'
    },
    {
        id: 'voronezh-elephant-durova', city: 'voronezh',
        coords: [51.677726466521634, 39.21860884758644],
        title: 'Слон', status: 'active',
        address: 'ул. Сакко и Ванцетти, забор у дома 67',
        photo: { filename: 'elephant-north', sizeLabel: '22 КБ' },
        instagramUrl: 'https://www.instagram.com/p/DOIoCC7ipQu/'
    },
    {
        id: 'voronezh-bear-durova', city: 'voronezh',
        coords: [51.67772503396492, 39.22171885846183],
        title: 'Медведь', status: 'active',
        address: 'ул. Дурова, забор у дома 21',
        photo: { filename: 'bear', sizeLabel: '36 КБ' },
        instagramUrl: 'https://www.instagram.com/p/DOOhfF2Cpyu/'
    },
    {
        id: 'voronezh-lion-durova', city: 'voronezh',
        coords: [51.67773672830409, 39.22438522567973],
        title: 'Лев', status: 'active',
        address: 'ул. Дурова, 7',
        photo: { filename: 'lion', sizeLabel: '25 КБ' },
        instagramUrl: 'https://www.instagram.com/p/DOeVhSJijdQ/'
    },
    {
        id: 'voronezh-zebra-durova', city: 'voronezh',
        coords: [51.677866856859445, 39.226083755493164],
        title: 'Зебра', status: 'active',
        address: 'забор у дома-музея А. Л. Дурова',
        photo: { filename: 'zebra-voronezh', sizeLabel: '38 КБ' },
        instagramUrl: 'https://www.instagram.com/p/DOTcZW3Cor8/'
    },
    {
        id: 'voronezh-mouse-durova', city: 'voronezh',
        coords: [51.67776457056444, 39.22580748796463],
        title: 'Мышь', status: 'active',
        address: 'бетонная стена около ул. Дурова, 1',
        photo: { filename: 'mouse-zebra', sizeLabel: '21 КБ' },
        instagramUrl: 'https://www.instagram.com/p/DOYPRrBCmNm/'
    },
    {
        id: 'voronezh-yellow-bird', city: 'voronezh',
        coords: [51.66627364772262, 39.20284694060683],
        title: 'Птица желтая', status: 'active',
        address: 'ул. Карла Маркса, 78',
        photo: { filename: 'yellow-bird', sizeLabel: '16 КБ' },
        instagramUrl: 'https://www.instagram.com/p/DPbmDhTii76/'
    },
    {
        id: 'voronezh-pattern', city: 'voronezh',
        coords: [51.6697788737755, 39.21336472034455],
        title: 'Узор', status: 'active'
    },
    {
        id: 'voronezh-blue-bird', city: 'voronezh',
        coords: [51.66712214224894, 39.20103459502571],
        title: 'Птица синяя', status: 'active'
    },
    {
        id: 'voronezh-house', city: 'voronezh',
        coords: [51.66491050863435, 39.19427463202737],
        title: 'Домик', status: 'active',
        photo: { filename: 'house', sizeLabel: '40 КБ' },
        instagramUrl: 'https://www.instagram.com/p/Cjc8RA-DKgV/'
    },
    {
        id: 'voronezh-flame-grass', city: 'voronezh',
        coords: [51.66371803454682, 39.19577149325051],
        title: 'Огонек и трава под ним', status: 'active',
        address: 'у асфальта'
    },
    {
        id: 'voronezh-hihi-2', city: 'voronezh',
        coords: [51.662379320018466, 39.20635498710909],
        title: 'Хи-Хи2', status: 'active',
        address: 'ул. Карла Маркса, 49',
        photo: { filename: 'hihi', sizeLabel: '23 КБ' },
        instagramUrl: 'https://www.instagram.com/al_kachino_art/p/Dagckyminy1/'
    },
    {
        id: 'voronezh-plant-pot', city: 'voronezh',
        coords: [51.66256708389262, 39.207050800323486],
        title: 'Растение в горшке', status: 'active',
        address: 'ул. Карла Маркса, 56, со стороны Есенинской аллеи',
        photo: { filename: 'plant-pot', sizeLabel: '17 КБ' },
        instagramUrl: 'https://www.instagram.com/al_kachino_art/p/Da3H162CjAf/'
    },
    {
        id: 'voronezh-elephant-center', city: 'voronezh',
        coords: [51.66108472181429, 39.19854348292575],
        title: 'Слон', status: 'active',
        photo: { filename: 'elephant-center', sizeLabel: '18 КБ' },
        instagramUrl: 'https://www.instagram.com/p/DQeB5UNinGz/'
    },
    {
        id: 'voronezh-pig', city: 'voronezh',
        coords: [51.66514409709628, 39.19483442790807],
        title: 'Свинка', status: 'active',
        photo: { filename: 'pig', sizeLabel: '19 КБ' },
        instagramUrl: 'https://www.instagram.com/p/CjXVHn3Dqto/'
    },
    {
        id: 'voronezh-chameleon', city: 'voronezh',
        coords: [51.6740854, 39.2096016],
        title: 'Хамелеон', status: 'active', isNew: true,
        photo: { filename: 'chameleon', sizeLabel: '33 КБ' },
        instagramUrl: 'https://www.instagram.com/p/DdHf3k7imUa/?img_index=1'
    },
    {
        id: 'bird-yellow-3', city: 'voronezh',
        coords: [51.6713109, 39.212831],
        title: 'Птичка желтая', status: 'active', isNew: true
    },
    {
        id: 'golub', city: 'voronezh',
        coords: [51.6711496, 39.2129436],
        title: 'Голубь', status: 'active', isNew: true
    },
    {
        id: 'dog-blue', city: 'voronezh',
        coords: [51.6706871, 39.2161435],
        title: 'Собака', status: 'active', isNew: true
    },
    {
        id: 'wolf-vgu', city: 'voronezh',
        coords: [51.6594125, 39.2126969],
        title: 'Волк', status: 'active' , isNew: true
    },
];
