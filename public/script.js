// Enhanced main JavaScript file for TripGoals website

// Sample data - In real implementation, this would come from a backend/database
let mainPackages = [
    { 
        id: 1, 
        title: "Kashmir", 
        subtitle: "Paradise on Earth", 
        image: "https://images.unsplash.com/photo-1567601169793-64703dc5324a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25000,
        duration: 7,
        description: "Experience the breathtaking beauty of Kashmir, often called Paradise on Earth. Explore Dal Lake, Mughal gardens, and snow-capped mountains.",
        inclusions: ["Hotel accommodation", "Daily breakfast", "Transportation", "Sightseeing", "Professional guide"],
        category: "main"
    },
    { 
        id: 2, 
        title: "Delhi - Golden Triangle", 
        subtitle: "Historical Capital Tour", 
        image: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8fDA%3D",
        price: 18000,
        duration: 5,
        description: "Discover India's golden triangle covering Delhi, Agra, and Jaipur. Visit iconic monuments like Taj Mahal, Red Fort, and Amber Palace.",
        inclusions: ["Hotel accommodation", "Daily breakfast", "Transportation", "Monument tickets", "Guide services"],
        category: "main"
    },
    { 
        id: 3, 
        title: "Jaipur - Rajasthan Royal Tour", 
        subtitle: "Pink City Adventure", 
        image: "https://images.unsplash.com/photo-1643542217593-ae4cb5d738eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFpcHVyJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D",
        price: 22000,
        duration: 6,
        description: "Explore the royal heritage of Jaipur, the Pink City. Visit magnificent palaces, forts, and experience the rich Rajasthani culture.",
        inclusions: ["Palace hotels", "Cultural shows", "Camel safari", "Traditional meals", "Heritage walks"],
        category: "main"
    },
    { 
        id: 4, 
        title: "Amritsar", 
        subtitle: "Golden Temple Experience", 
        image: "https://images.unsplash.com/photo-1583821017783-4333717df070?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D",
        price: 15000,
        duration: 4,
        description: "Visit the spiritual heart of Sikhism at the Golden Temple. Experience the rich culture and history of Punjab.",
        inclusions: ["Hotel accommodation", "Temple visits", "Local cuisine", "Cultural experiences", "Transportation"],
        category: "main"
    },
    { 
        id: 5, 
        title: "Kerala Tour", 
        subtitle: "God's Own Country", 
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D",
        price: 28000,
        duration: 8,
        description: "Experience Kerala's backwaters, hill stations, and spice plantations. Enjoy houseboat cruises and traditional Ayurvedic treatments.",
        inclusions: ["Houseboat stay", "Hill station hotels", "Ayurvedic massage", "Spice plantation tour", "Traditional meals"],
        category: "main"
    },
    { 
        id: 6, 
        title: "Goa", 
        subtitle: "Beach Paradise", 
        image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 15000,
        duration: 5,
        description: "Relax on the pristine beaches of Goa. Enjoy water sports, vibrant nightlife, and delicious seafood in this tropical paradise.",
        inclusions: ["Beach resort stay", "Water sports", "Sunset cruise", "Goan cuisine", "Airport transfers"],
        category: "main"
    },
    { 
        id: 7, 
        title: "Mahabaleshwar", 
        subtitle: "Hill Station Retreat", 
        image: "https://images.unsplash.com/photo-1574323109400-7477368b7b03?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 12000,
        duration: 3,
        description: "Escape to the cool hills of Mahabaleshwar. Enjoy strawberry farms, scenic viewpoints, and pleasant weather.",
        inclusions: ["Hill resort stay", "Sightseeing", "Strawberry picking", "Local cuisine", "Transportation"],
        category: "main"
    },
    { 
        id: 8, 
        title: "Mumbai City Tour", 
        subtitle: "City of Dreams", 
        image: "https://images.unsplash.com/photo-1568990110499-f493434c4c0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        price: 8000,
        duration: 2,
        description: "Explore the bustling metropolis of Mumbai. Visit iconic landmarks, Bollywood studios, and experience the city's vibrant culture.",
        inclusions: ["City hotel stay", "Local sightseeing", "Bollywood tour", "Street food tour", "Transportation"],
        category: "main"
    },
    { 
        id: 9, 
        title: "Gujarat", 
        subtitle: "Vibrant Culture", 
        image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/gt_banner.jpg",
        price: 20000,
        duration: 6,
        description: "Discover the vibrant culture of Gujarat. Visit the Rann of Kutch, historic temples, and experience colorful festivals.",
        inclusions: ["Heritage hotels", "Cultural tours", "Desert safari", "Traditional crafts", "Local cuisine"],
        category: "main"
    },
    { 
        id: 10, 
        title: "Varanasi - Tristhali", 
        subtitle: "Spiritual Journey", 
        image: "https://cdn1.tripoto.com/media/filter/tst/img/567364/Image/1546272756_vnasi.jpg.webp",
        price: 16000,
        duration: 5,
        description: "Experience the spiritual essence of India in Varanasi. Witness ancient rituals, visit sacred temples, and cruise the holy Ganges.",
        inclusions: ["Heritage hotel", "Ganga Aarti", "Temple visits", "Boat cruise", "Spiritual guide"],
        category: "main"
    },
    { 
        id: 11, 
        title: "Char Dham", 
        subtitle: "Four Sacred Sites", 
        image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/16/5ef002fec727a1940adf4b4ac35a82cc_1000x1000.jpg",
        price: 35000,
        duration: 12,
        description: "Embark on the sacred Char Dham Yatra. Visit Yamunotri, Gangotri, Kedarnath, and Badrinath in the Himalayas.",
        inclusions: ["Helicopter services", "Temple accommodations", "Meals", "Spiritual guide", "Medical support"],
        category: "main"
    },
    { 
        id: 12, 
        title: "Do Dham", 
        subtitle: "Twin Sacred Journey", 
        image: "https://thehtc.in/wp-content/uploads/2025/03/Dodham-web-Poster.png",
        price: 25000,
        duration: 8,
        description: "Visit two of the most sacred Dhams. A spiritual journey to connect with the divine in the Himalayas.",
        inclusions: ["Mountain accommodations", "Temple visits", "Meals", "Transportation", "Guide services"],
        category: "main"
    },
    { 
        id: 13, 
        title: "Katmandu - Nepal", 
        subtitle: "Himalayan Adventure", 
        image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5lcGFsfGVufDB8fDB8fHww",
        price: 30000,
        duration: 7,
        description: "Explore the mystical kingdom of Nepal. Visit ancient temples, experience Himalayan culture, and enjoy mountain views.",
        inclusions: ["Hotel accommodation", "Temple tours", "Cultural experiences", "Mountain views", "Local cuisine"],
        category: "main"
    },
    { 
        id: 14, 
        title: "Karnataka Classic", 
        subtitle: "South Indian Heritage", 
        image: "https://tripindia.co.in/uploads/Wildlife-Tour-With-Classical-Kerala1.jpg",
        price: 24000,
        duration: 7,
        description: "Discover Karnataka's rich heritage. Visit Mysore Palace, Hampi ruins, and experience South Indian culture.",
        inclusions: ["Heritage hotels", "Palace visits", "Cultural tours", "Traditional cuisine", "Transportation"],
        category: "main"
    },
    { 
        id: 15, 
        title: "Coastal Karnataka", 
        subtitle: "Beach and Temple Tour", 
        image: "https://www.fundayoption.com/wp-content/uploads/2023/05/Gokarna1.webp",
        price: 18000,
        duration: 5,
        description: "Experience the coastal beauty of Karnataka. Visit pristine beaches, ancient temples, and enjoy seafood cuisine.",
        inclusions: ["Beach resorts", "Temple visits", "Water activities", "Seafood meals", "Coastal tours"],
        category: "main"
    },
    { 
        id: 16, 
        title: "Northeast Mini Loop - Sikkim", 
        subtitle: "Mountain Beauty", 
        image: "https://images.unsplash.com/photo-1634400118017-7ca0f1ed1588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2lra2ltfGVufDB8fDB8fHww",
        price: 32000,
        duration: 8,
        description: "Explore the pristine beauty of Sikkim. Visit monasteries, enjoy mountain views, and experience Himalayan culture.",
        inclusions: ["Mountain hotels", "Monastery visits", "Scenic tours", "Local cuisine", "Cultural experiences"],
        category: "main"
    },
    { 
        id: 17, 
        title: "Northeast - 7 Sisters Expenditure", 
        subtitle: "Complete Northeast Tour", 
        image: "https://travelblogtravel.com/wp-content/uploads/2025/01/a-photo-of-the-seven-sister-states-of-in_1HwleBDqQAC-FlzdupuV1A_2T-dQ_s9SjO_0m7F0XX8Pg.jpeg",
        price: 45000,
        duration: 15,
        description: "Complete tour of Northeast India's seven sister states. Experience diverse cultures, landscapes, and traditions.",
        inclusions: ["Regional accommodations", "Cultural tours", "Local experiences", "Traditional meals", "Transportation"],
        category: "main"
    },
    { 
        id: 18, 
        title: "Hyderabad", 
        subtitle: "City of Nizams", 
        image: "https://c.ndtvimg.com/2025-03/7ndi40jo_hyderabad-_625x300_11_March_25.jpg",
        price: 14000,
        duration: 4,
        description: "Explore the historic city of Hyderabad. Visit Charminar, taste famous biryani, and experience Nizami culture.",
        inclusions: ["Heritage hotel", "City tours", "Food experiences", "Cultural visits", "Transportation"],
        category: "main"
    },
    { 
        id: 19, 
        title: "Leh - Ladakh Adventure", 
        subtitle: "High Altitude Desert", 
        image: "https://images.unsplash.com/photo-1617824077360-7a77db40aae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVoJTIwbGFkYWtofGVufDB8fDB8fHww",
        price: 35000,
        duration: 10,
        description: "Adventure in the Land of High Passes. Experience Buddhist culture, pristine lakes, and stunning mountain landscapes.",
        inclusions: ["Mountain accommodations", "Monastery visits", "Lake excursions", "Cultural experiences", "Adventure activities"],
        category: "main"
    },
    { 
        id: 20, 
        title: "Port Blair - Andaman and Nicobar", 
        subtitle: "Island Paradise", 
        image: "https://plus.unsplash.com/premium_photo-1705363013491-0ed4a7a4fe99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzfGVufDB8fDB8fHww",
        price: 40000,
        duration: 7,
        description: "Discover the pristine islands of Andaman and Nicobar. Enjoy crystal clear waters, coral reefs, and tropical beaches.",
        inclusions: ["Island resorts", "Water sports", "Island hopping", "Seafood cuisine", "Beach activities"],
        category: "main"
    },
    { 
        id: 21, 
        title: "North East", 
        subtitle: "Land of Seven Sisters", 
        image: "https://images.unsplash.com/photo-1568644559664-e4a5735c37ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9ydGglMjBlYXN0JTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        price: 38000,
        duration: 12,
        description: "Explore the unexplored Northeast India. Experience diverse tribes, pristine nature, and unique cultures.",
        inclusions: ["Tribal homestays", "Cultural experiences", "Nature tours", "Local cuisine", "Transportation"],
        category: "main"
    },
    { 
        id: 22, 
        title: "Himachal Pradesh", 
        subtitle: "Land of Gods", 
        image: "https://images.unsplash.com/photo-1621340983436-35b9e66e63ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        price: 26000,
        duration: 8,
        description: "Experience the beauty of Himachal Pradesh. Visit hill stations, temples, and enjoy mountain adventures.",
        inclusions: ["Hill station hotels", "Temple visits", "Adventure activities", "Local cuisine", "Scenic tours"],
        category: "main"
    },
    { 
        id: 23, 
        title: "Madhya Pradesh", 
        subtitle: "Heart of India", 
        image: "https://theinterview.world/wp-content/uploads/2025/03/Madhya-Pradeshs-Tourism-Revolution-Blending-Heritage-Spirituality-Eco-Tourism-1024x576.jpg",
        price: 22000,
        duration: 7,
        description: "Discover the heart of India. Visit Khajuraho temples, wildlife sanctuaries, and historic forts.",
        inclusions: ["Heritage hotels", "Temple tours", "Wildlife safaris", "Cultural experiences", "Transportation"],
        category: "main"
    },
    { 
        id: 24, 
        title: "3 Sisters", 
        subtitle: "Eastern Himalayan Tour", 
        image: "https://www.nomadicweekends.com/wp-content/uploads/2018/10/Clear-water-dawki.png",
        price: 28000,
        duration: 9,
        description: "Explore the three sister states of the Eastern Himalayas. Experience unique cultures and pristine landscapes.",
        inclusions: ["Mountain accommodations", "Cultural tours", "Nature experiences", "Local cuisine", "Transportation"],
        category: "main"
    },
    { 
        id: 25, 
        title: "Mysore - Ooty", 
        subtitle: "Royal Hill Station", 
        image: "https://www.holidest.com/images/indiatours/karnataka/mysore-palace1.jpg",
        price: 19000,
        duration: 6,
        description: "Visit the royal city of Mysore and the hill station of Ooty. Experience palaces, gardens, and cool climate.",
        inclusions: ["Palace hotels", "Hill station resorts", "Palace tours", "Garden visits", "Toy train ride"],
        category: "main"
    },
    { 
        id: 26, 
        title: "Tamil Nadu", 
        subtitle: "Temple Trail", 
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFtaWxuYWR1fGVufDB8fDB8fHww",
        price: 21000,
        duration: 7,
        description: "Explore Tamil Nadu's magnificent temples. Visit ancient Dravidian architecture and experience South Indian culture.",
        inclusions: ["Heritage hotels", "Temple tours", "Cultural experiences", "Traditional cuisine", "Transportation"],
        category: "main"
    },
    { 
        id: 27, 
        title: "Kullu Manali", 
        subtitle: "Valley of Gods", 
        image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a3VsbHUlMjBtYW5hbGl8ZW58MHx8MHx8fDA%3D",
        price: 23000,
        duration: 6,
        description: "Experience the beautiful valleys of Kullu and Manali. Enjoy adventure sports, scenic beauty, and mountain culture.",
        inclusions: ["Mountain resorts", "Adventure activities", "Scenic tours", "Local cuisine", "Transportation"],
        category: "main"
    }
];

let specialPackages = [
    { 
        id: 101, 
        title: "Royal Rajasthan", 
        subtitle: "Luxury Palace Experience", 
        image: "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFqYXN0aGFufGVufDB8fDB8fHww",
        price: 55000,
        duration: 12,
        description: "Live like royalty in converted palace hotels. Experience luxury trains, private tours, and exclusive cultural performances.",
        inclusions: ["Palace hotel stays", "Luxury train journey", "Private guides", "Exclusive dining", "Cultural performances"],
        category: "special"
    },
    { 
        id: 102, 
        title: "Himalayan Expedition", 
        subtitle: "Ultimate Mountain Adventure", 
        image: "https://images.unsplash.com/photo-1584395631446-e41b0fc3f68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWFzfGVufDB8fDB8fHww",
        price: 45000,
        duration: 14,
        description: "Complete Himalayan adventure covering multiple states. Trekking, mountaineering, and spiritual experiences await.",
        inclusions: ["Trekking equipment", "Professional guides", "Base camps", "Medical support", "Adventure insurance"],
        category: "special"
    },
    { 
        id: 103, 
        title: "Backwater Bliss", 
        subtitle: "Kerala Houseboat Experience", 
        image: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhJTIwaG91c2Vib2F0fGVufDB8fDB8fHww",
        price: 32000,
        duration: 8,
        description: "Luxury houseboat experience in Kerala's backwaters. Enjoy traditional cuisine, Ayurvedic treatments, and serene waters.",
        inclusions: ["Luxury houseboat", "Ayurvedic spa", "Traditional meals", "Cultural shows", "Backwater tours"],
        category: "special"
    },
    { 
        id: 104, 
        title: "Desert Safari", 
        subtitle: "Thar Desert Adventure", 
        image: "https://plus.unsplash.com/premium_photo-1661962556769-5beec5563911?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGRlc2VydCUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D",
        price: 28000,
        duration: 6,
        description: "Experience the magic of Thar Desert. Camel safaris, desert camps, and traditional Rajasthani culture.",
        inclusions: ["Desert camps", "Camel safari", "Cultural programs", "Traditional meals", "Desert activities"],
        category: "special"
    },
    { 
        id: 105, 
        title: "Tiger Trail", 
        subtitle: "Wildlife Photography Tour", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShx3xhgONU648sJEugnvYgju4o1DVeHxdUTQ&s",
        price: 38000,
        duration: 9,
        description: "Professional wildlife photography tour across India's top national parks. Spot tigers, leopards, and exotic birds.",
        inclusions: ["Wildlife resorts", "Professional photography guide", "Safari vehicles", "Photography equipment", "Park permits"],
        category: "special"
    },
    { 
        id: 106, 
        title: "Spiritual Sojourn", 
        subtitle: "Meditation and Yoga Retreat", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbUJepSkkqkZwP392idGjRVN46V3PLmHgLMw&s",
        price: 25000,
        duration: 7,
        description: "Rejuvenate your mind, body, and soul with authentic yoga and meditation practices in serene locations.",
        inclusions: ["Ashram accommodation", "Yoga sessions", "Meditation classes", "Ayurvedic meals", "Spiritual guidance"],
        category: "special"
    }
];

let adventureActivities = [
    { 
        id: 201, 
        title: "Malvan Water Sports", 
        subtitle: "Exciting water activities at Malvan beach", 
        image: "https://cdn.thegoavilla.com/static/img/articles/goa-water-sports.jpg",
        price: 3500,
        duration: 1,
        description: "Experience thrilling water sports at Malvan beach including jet skiing, parasailing, and scuba diving.",
        inclusions: ["Water sports equipment", "Safety gear", "Professional instructors", "Beach lunch", "Transportation"],
        category: "adventure"
    },
    { 
        id: 202, 
        title: "Goa Water Activities", 
        subtitle: "Beach fun and water sports in Goa", 
        image: "https://goabeachwatersports.com/wp-content/uploads/2018/11/parasailing-in-goa-1532506746-e1576503895532.jpg",
        price: 4000,
        duration: 1,
        description: "Enjoy various water activities on Goa's beautiful beaches. Perfect for adventure enthusiasts.",
        inclusions: ["Water sports", "Beach activities", "Safety equipment", "Refreshments", "Beach access"],
        category: "adventure"
    },
    { 
        id: 203, 
        title: "Paragliding", 
        subtitle: "Soar through the skies", 
        image: "https://cdn.pixabay.com/photo/2015/03/31/18/47/paraglider-701440_1280.jpg",
        price: 2500,
        duration: 1,
        description: "Experience the thrill of paragliding with certified instructors. Soar above beautiful landscapes.",
        inclusions: ["Paragliding equipment", "Certified instructor", "Safety briefing", "Video recording", "Certificate"],
        category: "adventure"
    },
    { 
        id: 204, 
        title: "Bungee Jumping", 
        subtitle: "Ultimate adrenaline rush", 
        image: "https://miro.medium.com/v2/resize:fit:669/1*tmHq_5mEp_OrXjJ0BuoI8w.jpeg",
        price: 4000,
        duration: 1,
        description: "Take the ultimate leap of faith with India's highest bungee jump. Feel the adrenaline rush like never before.",
        inclusions: ["Safety equipment", "Professional supervision", "Medical support", "Jump video", "Certificate"],
        category: "adventure"
    },
    { 
        id: 205, 
        title: "Rappelling", 
        subtitle: "Descend cliff faces", 
        image: "https://images.unsplash.com/photo-1557685888-2d3621ddf615?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 2000,
        duration: 1,
        description: "Learn the art of rappelling and descend cliff faces safely with professional guidance.",
        inclusions: ["Rappelling gear", "Safety equipment", "Professional guide", "Training session", "Certificate"],
        category: "adventure"
    },
    { 
        id: 206, 
        title: "Kashmir Gondola Ride", 
        subtitle: "Scenic cable car rides", 
        image: "https://charzanholidays.com/wp-content/uploads/2024/07/Gulmarg.jpg",
        price: 1500,
        duration: 1,
        description: "Enjoy breathtaking views of Kashmir from the famous Gulmarg Gondola, one of the highest cable cars in the world.",
        inclusions: ["Gondola tickets", "Scenic views", "Photography opportunities", "Local guide", "Refreshments"],
        category: "adventure"
    },
    { 
        id: 207, 
        title: "River Rafting", 
        subtitle: "Navigate thrilling rapids", 
        image: "https://images.unsplash.com/photo-1629248457649-b082812aea6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXIlMjByYWZ0aW5nfGVufDB8fDB8fHww",
        price: 3000,
        duration: 1,
        description: "Experience the thrill of white water rafting through exciting rapids with professional guides.",
        inclusions: ["Rafting equipment", "Safety gear", "Professional guide", "Lunch", "Transportation"],
        category: "adventure"
    },
    { 
        id: 208, 
        title: "Rock Climbing", 
        subtitle: "Scale challenging rock faces", 
        image: "https://27crags.s3.amazonaws.com/photos/000/384/384110/size_m-60cb2f6afd63676c62143b6984f08253.jpg",
        price: 2500,
        duration: 1,
        description: "Challenge yourself with rock climbing on natural rock formations with expert instruction.",
        inclusions: ["Climbing gear", "Safety equipment", "Expert instructor", "Training", "Certificate"],
        category: "adventure"
    },
    { 
        id: 209, 
        title: "Scuba Diving", 
        subtitle: "Explore underwater marine life", 
        image: "https://plus.unsplash.com/premium_photo-1661894232140-73d96a67731b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2N1YmElMjBkaXZpbmd8ZW58MHx8MHx8fDA%3D",
        price: 5000,
        duration: 1,
        description: "Discover the underwater world with certified scuba diving experiences in crystal clear waters.",
        inclusions: ["Diving equipment", "Certified instructor", "Underwater photography", "Marine life guide", "Certificate"],
        category: "adventure"
    },
    { 
        id: 210, 
        title: "Zip Lining", 
        subtitle: "High-speed canopy adventures", 
        image: "https://images.unsplash.com/photo-1675259113512-db50297ce326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emlwJTIwbGluaW5nfGVufDB8fDB8fHww",
        price: 1800,
        duration: 1,
        description: "Zip through forest canopies at high speeds for an exhilarating adventure experience.",
        inclusions: ["Zip line equipment", "Safety gear", "Professional guide", "Multiple zip lines", "Refreshments"],
        category: "adventure"
    }
];

let posters = [
    {
        id: 301,
        title: "Summer Special Offer",
        description: "Get 20% off on all hill station packages",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        link: "#packages",
        position: "bottom"
    }
];

let polls = [
    {
        id: 401,
        question: "Which destination would you like to visit this summer?",
        options: ["Kashmir", "Himachal Pradesh", "Uttarakhand", "Northeast India"],
        votes: [45, 32, 28, 15],
        isActive: true,
        allowMultiple: false
    }
];

// Initialize website
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    loadPosters();
    loadPolls();
    checkAuthStatus();
    initializeSliders();
    initializeNavigation();
    initializeScrollEffects();
});

function initializePage() {
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            loadMainPackages();
            loadSpecialPackages();
            loadAdventureActivities();
            break;
        case 'packages':
            loadAllPackages();
            break;
        case 'package-detail':
            loadPackageDetails();
            break;
        case 'admin':
            loadAdminData();
            break;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0];
    return page || 'index';
}

function loadMainPackages() {
    const slider = document.getElementById('mainSlider');
    if (slider) {
        slider.innerHTML = mainPackages.map(pkg => createPackageCard(pkg)).join('');
    }
}

function loadSpecialPackages() {
    const slider = document.getElementById('specialSlider');
    if (slider) {
        slider.innerHTML = specialPackages.map(pkg => createPackageCard(pkg)).join('');
    }
}

function loadAdventureActivities() {
    const slider = document.getElementById('adventureSlider');
    if (slider) {
        slider.innerHTML = adventureActivities.map(activity => createAdventureCard(activity)).join('');
    }
}

function createPackageCard(pkg) {
    return `
        <div class="package-card" onclick="openPackagePage(${pkg.id})">
            <div class="package-image">
                <img src="${pkg.image}" alt="${pkg.title}">
            </div>
            <div class="package-content">
                <h3 class="package-title">${pkg.title}</h3>
                <p class="package-subtitle">${pkg.subtitle}</p>
            </div>
        </div>
    `;
}

function createAdventureCard(activity) {
    return `
        <div class="adventure-card" onclick="openPackagePage(${activity.id})">
            <div class="adventure-image">
                <img src="${activity.image}" alt="${activity.title}">
            </div>
            <div class="adventure-content">
                <h3>${activity.title}</h3>
                <p>${activity.subtitle}</p>
            </div>
        </div>
    `;
}

function openPackagePage(packageId) {
    window.location.href = `package-detail.html?id=${packageId}`;
}

// All Packages Page Functions
function loadAllPackages() {
    const packagesGrid = document.getElementById('packagesGrid');
    if (!packagesGrid) return;
    
    const allPackages = [...mainPackages, ...specialPackages, ...adventureActivities];
    packagesGrid.innerHTML = allPackages.map(pkg => createPackageGridCard(pkg)).join('');
}

function createPackageGridCard(pkg) {
    return `
        <div class="package-grid-card" onclick="openPackagePage(${pkg.id})">
            <div class="package-grid-image">
                <img src="${pkg.image}" alt="${pkg.title}">
                <div class="package-grid-price">₹${pkg.price.toLocaleString()}</div>
                <div class="package-grid-category">${pkg.category}</div>
            </div>
            <div class="package-grid-content">
                <h3>${pkg.title}</h3>
                <p>${pkg.subtitle}</p>
                <div class="package-grid-duration">
                    <i class="fas fa-clock"></i> ${pkg.duration} ${pkg.duration === 1 ? 'day' : 'days'}
                </div>
                <button class="package-grid-btn" onclick="event.stopPropagation(); bookPackage(${pkg.id})">
                    <i class="fab fa-whatsapp"></i> Book Now
                </button>
            </div>
        </div>
    `;
}

// Package Detail Page Functions
function loadPackageDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const packageId = parseInt(urlParams.get('id'));
    
    if (!packageId) {
        window.location.href = 'packages.html';
        return;
    }
    
    const allPackages = [...mainPackages, ...specialPackages, ...adventureActivities];
    const packageData = allPackages.find(pkg => pkg.id === packageId);
    
    if (!packageData) {
        window.location.href = 'packages.html';
        return;
    }
    
    displayPackageDetails(packageData);
}

function displayPackageDetails(pkg) {
    const container = document.getElementById('packageDetailContent');
    if (!container) return;
    
    container.innerHTML = `
        <div class="package-detail-header">
            <div class="package-detail-image">
                <img src="${pkg.image}" alt="${pkg.title}">
                <div class="package-detail-price">₹${pkg.price.toLocaleString()}</div>
            </div>
            <div class="package-detail-info">
                <h1>${pkg.title}</h1>
                <p class="package-detail-subtitle">${pkg.subtitle}</p>
                <div class="package-detail-meta">
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${pkg.duration} ${pkg.duration === 1 ? 'day' : 'days'}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-tag"></i>
                        <span>${pkg.category}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="package-detail-content">
            <div class="package-detail-description">
                <h3>Description</h3>
                <p>${pkg.description}</p>
            </div>
            
            <div class="package-detail-inclusions">
                <h3>What's Included</h3>
                <ul>
                    ${pkg.inclusions.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="package-detail-actions">
            <button class="book-now-btn" onclick="bookPackage(${pkg.id})">
                <i class="fab fa-whatsapp"></i> Book via WhatsApp
            </button>
            <button class="inquiry-btn" onclick="makeInquiry(${pkg.id})">
                <i class="fas fa-phone"></i> Make Inquiry
            </button>
        </div>
    `;
}

// Booking Functions
function bookPackage(packageId) {
    const allPackages = [...mainPackages, ...specialPackages, ...adventureActivities];
    const pkg = allPackages.find(p => p.id === packageId);
    
    if (!pkg) return;
    
    const whatsappMessage = encodeURIComponent(
        `Hi! I'm interested in booking the following package:\n\n` +
        `Package: ${pkg.title}\n` +
        `Duration: ${pkg.duration} ${pkg.duration === 1 ? 'day' : 'days'}\n` +
        `Price: ₹${pkg.price.toLocaleString()}\n\n` +
        `Please provide me with more details and booking information.`
    );
    
    const whatsappUrl = `https://wa.me/917709823098?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
}

function makeInquiry(packageId) {
    const allPackages = [...mainPackages, ...specialPackages, ...adventureActivities];
    const pkg = allPackages.find(p => p.id === packageId);
    
    if (!pkg) return;
    
    const whatsappMessage = encodeURIComponent(
        `Hi! I have some questions about the following package:\n\n` +
        `Package: ${pkg.title}\n` +
        `Price: ₹${pkg.price.toLocaleString()}\n\n` +
        `Could you please provide more information?`
    );
    
    const whatsappUrl = `https://wa.me/917709823098?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Poster Functions
function loadPosters() {
    loadDynamicPosters();
    loadAdditionalPosters();
}

function loadDynamicPosters() {
    const container = document.getElementById('dynamicPosters');
    if (!container) return;
    
    const topPosters = posters.filter(poster => poster.position === 'top');
    if (topPosters.length > 0) {
        container.innerHTML = topPosters.map(poster => createPosterHTML(poster)).join('');
        container.style.display = 'block';
    }
}

function loadAdditionalPosters() {
    const container = document.getElementById('additionalPosters');
    if (!container) return;
    
    const bottomPosters = posters.filter(poster => poster.position === 'bottom' || poster.position === 'middle');
    if (bottomPosters.length > 0) {
        container.innerHTML = bottomPosters.map(poster => createPosterHTML(poster)).join('');
        container.style.display = 'block';
    }
}

function createPosterHTML(poster) {
    return `
        <div class="poster-container">
            <div class="poster-item" onclick="window.location.href='${poster.link || '#'}'">
                <div class="poster-image">
                    <img src="${poster.image}" alt="${poster.title}">
                    <div class="poster-overlay">
                        <div class="poster-content">
                            <h2>${poster.title}</h2>
                            <p>${poster.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Poll Functions
function loadPolls() {
    const container = document.getElementById('pollsSection');
    if (!container) return;
    
    const activePolls = polls.filter(poll => poll.isActive);
    if (activePolls.length > 0) {
        container.innerHTML = `
            <div class="polls-container">
                <div class="container">
                    <h2 class="section-title">Your Opinion Matters</h2>
                    <div class="polls-list">
                        ${activePolls.map(poll => createPollHTML(poll)).join('')}
                    </div>
                </div>
            </div>
        `;
        container.style.display = 'block';
    }
}

function createPollHTML(poll) {
    const totalVotes = poll.votes.reduce((sum, votes) => sum + votes, 0);
    
    return `
        <div class="poll-item">
            <h3>${poll.question}</h3>
            <div class="poll-options">
                ${poll.options.map((option, index) => {
                    const percentage = totalVotes > 0 ? ((poll.votes[index] / totalVotes) * 100).toFixed(1) : 0;
                    return `
                        <div class="poll-option" onclick="voteInPoll(${poll.id}, ${index})">
                            <span class="option-text">${option}</span>
                            <div class="option-bar">
                                <div class="option-fill" style="width: ${percentage}%"></div>
                            </div>
                            <span class="option-percentage">${percentage}%</span>
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="poll-stats">Total votes: ${totalVotes}</div>
        </div>
    `;
}

function voteInPoll(pollId, optionIndex) {
    const poll = polls.find(p => p.id === pollId);
    if (poll) {
        poll.votes[optionIndex]++;
        loadPolls(); // Refresh the poll display
        
        // In a real implementation, this would send the vote to a backend
        alert('Thank you for voting!');
    }
}

// Filter Functions (for packages page)
function initializeFilters() {
    const searchInput = document.getElementById('searchPackages');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterPackages);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterPackages);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', filterPackages);
    }
}

function filterPackages() {
    const searchTerm = document.getElementById('searchPackages')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const priceFilter = document.getElementById('priceFilter')?.value || '';
    
    const allPackages = [...mainPackages, ...specialPackages, ...adventureActivities];
    
    let filteredPackages = allPackages.filter(pkg => {
        const matchesSearch = pkg.title.toLowerCase().includes(searchTerm) || 
                             pkg.subtitle.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || pkg.category === categoryFilter;
        
        let matchesPrice = true;
        if (priceFilter) {
            switch(priceFilter) {
                case 'low':
                    matchesPrice = pkg.price < 20000;
                    break;
                case 'medium':
                    matchesPrice = pkg.price >= 20000 && pkg.price <= 50000;
                    break;
                case 'high':
                    matchesPrice = pkg.price > 50000;
                    break;
            }
        }
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    const packagesGrid = document.getElementById('packagesGrid');
    if (packagesGrid) {
        packagesGrid.innerHTML = filteredPackages.map(pkg => createPackageGridCard(pkg)).join('');
    }
}

// Authentication Functions
function checkAuthStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    const adminPanelBtn = document.getElementById('adminPanelBtn');
    
    if (currentUser.isLoggedIn) {
        if (authButtons) authButtons.style.display = 'none';
        if (userProfile) {
            userProfile.style.display = 'flex';
            const usernameSpan = userProfile.querySelector('.username') || userProfile.querySelector('#currentUser');
            if (usernameSpan) usernameSpan.textContent = currentUser.name || 'User';
        }
        
        if (currentUser.isAdmin && adminPanelBtn) {
            adminPanelBtn.style.display = 'block';
        }
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (userProfile) userProfile.style.display = 'none';
        if (adminPanelBtn) adminPanelBtn.style.display = 'none';
    }
}

function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.style.display = 'block';
}

function showSignupModal() {
    const modal = document.getElementById('signupModal');
    if (modal) modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail')?.value;
    const password = document.getElementById('loginPassword')?.value;
    const userType = document.querySelector('input[name="userType"]:checked')?.value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simple authentication simulation
    const isAdmin = userType === 'admin' && email === 'admin@tripgoals.com' && password === 'admin123';
    const isUser = userType === 'user';
    
    if (isAdmin || isUser) {
        const currentUser = {
            isLoggedIn: true,
            isAdmin: isAdmin,
            name: isAdmin ? 'Admin' : email.split('@')[0],
            email: email
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        checkAuthStatus();
        closeModal('loginModal');
        
        if (isAdmin) {
            alert('Admin login successful!');
        } else {
            alert('Login successful!');
        }
    } else {
        alert('Invalid credentials');
    }
}

function signup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName')?.value;
    const email = document.getElementById('signupEmail')?.value;
    const password = document.getElementById('signupPassword')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;
    const userType = document.querySelector('input[name="userType"]:checked')?.value;
    
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Simple signup simulation
    const currentUser = {
        isLoggedIn: true,
        isAdmin: userType === 'admin',
        name: name,
        email: email
    };
    
    localStorage.setItem('currentUser', Shoaib.stringify(currentUser));
    checkAuthStatus();
    closeModal('signupModal');
    alert('Account created successfully!');
}

function logout() {
    localStorage.removeItem('currentUser');
    checkAuthStatus();
    alert('Logged out successfully!');
    
    // Redirect to home if on admin page
    if (window.location.pathname.includes('admin.html')) {
        window.location.href = 'index.html';
    }
}

// Navigation Functions
function initializeNavigation() {
    // Update navigation links for multi-page setup
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#packages') {
            link.setAttribute('href', 'packages.html');
        } else if (href === '#about') {
            link.setAttribute('href', 'about.html');
        } else if (href === '#contact') {
            link.setAttribute('href', 'contact.html');
        }
    });
    
    // Set active navigation item based on current page
    const currentPage = getCurrentPage();
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (
            (currentPage === 'index' && href === 'index.html') ||
            (currentPage === 'packages' && href === 'packages.html') ||
            (currentPage === 'about' && href === 'about.html') ||
            (currentPage === 'contact' && href === 'contact.html')
        ) {
            link.classList.add('active');
        }
    });
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (navMenu) navMenu.classList.toggle('active');
    if (hamburger) hamburger.classList.toggle('active');
}

// Scroll Effects
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(0, 0, 0, 0.9)';
                navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.1)';
                navbar.style.boxShadow = '0px 0px 0px rgba(227, 228,237, 0.)';
            }
        }
    });
}

function initializeSliders() {
    const sliders = document.querySelectorAll('.packages-slider, .adventure-slider');
    
    sliders.forEach(slider => {
        // Enable smooth scrolling with mouse wheel
        slider.addEventListener('wheel', (e) => {
            e.preventDefault();
            slider.scrollLeft += e.deltaY;
        });
        
        // Add touch scrolling support
        let isDown = false;
        let startX;
        let scrollLeft;
        
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Category page functions (placeholder)
function openCategoryPage(categoryName) {
    // In a real implementation, this would navigate to a category-specific page
    window.location.href = `packages.html?category=${categoryName}`;
}

function openForeignerGuidePage() {
    // In a real implementation, this would navigate to a dedicated foreigner guide page
    alert('Redirecting to Special Foreigner Guide page...');
}

// Export functions for admin panel
if (typeof window !== 'undefined') {
    window.mainPackages = mainPackages;
    window.specialPackages = specialPackages;
    window.adventureActivities = adventureActivities;
    window.posters = posters;
    window.polls = polls;
}