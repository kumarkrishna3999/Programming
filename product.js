/* ===============================
   AUTO ID SYSTEM
================================ */

let nextId = 458; // start AFTER your last manual ID (458)

function createProduct(productData) {
    return {
        id: nextId++,   // auto increment for future products
        ...productData
    };
}


/* ===============================
   PRODUCTS ARRAY
================================ */

window.products = [


/* ===============================
   RICE SECTION
================================ */

{
  id: 1,
  name: "Brown Rice",
  category: "Cooking Essentials",
  subcategory: "Rice",
  price: 90,
  image: "images/brown-rice.jpg",
  description: "Healthy whole grain brown rice rich in fiber.",
  stock: 50
},

{
  id: 2,
  name: "Kolam Rice",
  category: "Cooking Essentials",
  subcategory: "Rice",
  price: 70,
  image: "images/kolam-rice.jpg",
  description: "Medium grain rice ideal for daily meals.",
  stock: 65
},

{
  id: 3,
  name: "Jeera Rice",
  category: "Cooking Essentials",
  subcategory: "Rice",
  price: 120,
  image: "images/jeera-rice.jpg",
  description: "Premium aromatic rice perfect for jeera rice dishes.",
  stock: 40
},

{
  id: 4,
  name: "Sella Basmati Rice",
  category: "Cooking Essentials",
  subcategory: "Rice",
  price: 150,
  image: "images/sella-basmati.jpg",
  description: "Parboiled basmati rice with long grains and rich aroma.",
  stock: 55
},

{
  id: 5,
  name: "Broken Rice",
  category: "Cooking Essentials",
  subcategory: "Rice",
  price: 45,
  image: "images/broken-rice.jpg",
  description: "Affordable broken rice suitable for porridge and idli.",
  stock: 80
},

{
  id: 6,
  name: "Black Rice",
  category: "Cooking Essentials",
  subcategory: "Rice",
  price: 140,
  image: "images/black-rice.jpg",
  description: "Nutritious black rice rich in antioxidants.",
  stock: 30
},

{
  id: 7,
  name: "Red Rice",
  category: "Cooking Essentials",
  subcategory: "Rice",
  price: 110,
  image: "images/red-rice.jpg",
  description: "Traditional red rice packed with nutrients.",
  stock: 45
},

{
  id: 8,
  name: "Basmati Rice",
  category: "Cooking Essentials",
  subcategory: "Rice",
  price: 180,
  image: "images/basmati.jpg",
  description: "Long grain premium basmati rice.",
  stock: 60
},

{
  id: 9,
  name: "Idli Rice",
  category: "Cooking Essentials",
  subcategory: "Rice",
  price: 60,
  image: "images/idli-rice.jpg",
  description: "Special rice variety perfect for making soft idlis.",
  stock: 70
},

{
  id: 10,
  name: "Organic Basmati Rice",
  category: "Cooking Essentials",
  subcategory: "Rice",
  price: 200,
  image: "images/organic-basmati.jpg",
  description: "Certified organic basmati rice with premium quality.",
  stock: 40
},



/* ===============================
   ATTA SECTION
================================ */

{
  id: 11,
  name: "Wheat Atta",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 55,
  image: "images/atta.jpg",
  description: "Fresh whole wheat atta for soft rotis.",
  stock: 90
},

{
  id: 12,
  name: "Multigrain Atta",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 65,
  image: "images/multigrain-atta.jpg",
  description: "Healthy multigrain flour packed with nutrition.",
  stock: 40
},

{
  id: 13,
  name: "Besan (Gram Flour)",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 70,
  image: "images/besan.jpg",
  description: "Fine gram flour ideal for snacks and cooking.",
  stock: 55
},

{
  id: 14,
  name: "Maida (Refined Flour)",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 60,
  image: "images/maida.jpg",
  description: "Fine refined flour perfect for baking and snacks.",
  stock: 70
},

{
  id: 15,
  name: "Suji (Semolina)",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 50,
  image: "images/suji.jpg",
  description: "Premium semolina ideal for upma, halwa, and idli.",
  stock: 65
},

{
  id: 16,
  name: "Ragi Flour",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 80,
  image: "images/ragi-flour.jpg",
  description: "Healthy ragi flour rich in calcium and fiber.",
  stock: 45
},

{
  id: 17,
  name: "Bajra Atta",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 75,
  image: "images/bajra-atta.jpg",
  description: "Nutritious bajra flour perfect for traditional rotis.",
  stock: 40
},

{
  id: 18,
  name: "Jowar Atta",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 70,
  image: "images/jowar-atta.jpg",
  description: "Gluten-free jowar flour suitable for healthy meals.",
  stock: 50
},

{
  id: 19,
  name: "Makki Atta",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 65,
  image: "images/makki-atta.jpg",
  description: "Corn flour ideal for makki di roti.",
  stock: 55
},

{
  id: 20,
  name: "Rice Flour",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 60,
  image: "images/rice-flour.jpg",
  description: "Fine rice flour used for dosa and baking.",
  stock: 60
},

{
  id: 21,
  name: "Chakki Fresh Atta",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 85,
  image: "images/chakki-atta.jpg",
  description: "Stone-ground wheat flour for soft and healthy rotis.",
  stock: 75
},

{
  id: 22,
  name: "Soybean Flour",
  category: "Cooking Essentials",
  subcategory: "Atta",
  price: 90,
  image: "images/soybean-flour.jpg",
  description: "Protein-rich soybean flour for nutritious cooking.",
  stock: 35
},


/* ===============================
   OIL SECTION
================================ */

{
  id: 23,
  name: "Fortune Soyabean Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 155,
  image: "images/fortune-soyabean.jpg",
  description: "Fortune refined soyabean oil ideal for everyday cooking.",
  stock: 60
},

{
  id: 24,
  name: "Fortune Sunflower Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 165,
  image: "images/fortune-sunflower.jpg",
  description: "Light and healthy sunflower oil from Fortune brand.",
  stock: 55
},

{
  id: 25,
  name: "Saffola Gold Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 190,
  image: "images/saffola-gold.jpg",
  description: "Saffola Gold blended oil for heart-healthy cooking.",
  stock: 40
},

{
  id: 26,
  name: "Saffola Active Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 180,
  image: "images/saffola-active.jpg",
  description: "Refined oil designed for an active lifestyle.",
  stock: 45
},

{
  id: 27,
  name: "Babaji Mustard Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 170,
  image: "images/babaji-mustard.jpg",
  description: "Pure Babaji mustard oil with strong natural aroma.",
  stock: 50
},

{
  id: 28,
  name: "Babaji Refined Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 150,
  image: "images/babaji-refined.jpg",
  description: "Babaji refined cooking oil suitable for daily use.",
  stock: 65
},

{
  id: 29,
  name: "Dhara Refined Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 145,
  image: "images/dhara-oil.jpg",
  description: "Dhara refined oil for light and tasty cooking.",
  stock: 70
},

{
  id: 30,
  name: "Patanjali Mustard Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 160,
  image: "images/patanjali-mustard.jpg",
  description: "Patanjali pure mustard oil for traditional recipes.",
  stock: 55
},

{
  id: 31,
  name: "Emami Healthy & Tasty Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 175,
  image: "images/emami-oil.jpg",
  description: "Blended refined oil from Emami for balanced nutrition.",
  stock: 45
},

{
  id: 32,
  name: "Nature Fresh Refined Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 150,
  image: "images/nature-fresh.jpg",
  description: "Nature Fresh refined oil for everyday cooking.",
  stock: 60
},

{
  id: 33,
  name: "Gemini Sunflower Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 165,
  image: "images/gemini-oil.jpg",
  description: "Gemini sunflower oil with light texture and taste.",
  stock: 50
},

{
  id: 34,
  name: "Engine Mustard Oil",
  category: "Cooking Essentials",
  subcategory: "Oil",
  price: 175,
  image: "images/engine-mustard.jpg",
  description: "Engine brand mustard oil known for purity and flavor.",
  stock: 35
},


/* ===============================
   PULSES (DAL SECTION)
================================ */
{
  id: 35,
  name: "Moong Dal",
  category: "Cooking Essentials",
  subcategory: "Pulses",
  price: 110,
  image: "images/moong-dal.jpg",
  description: "High-quality Moong Dal, easy to digest and ideal for healthy meals.",
  stock: 45
},

{
  id: 36,
  name: "Chana Dal",
  category: "Cooking Essentials",
  subcategory: "Pulses",
  price: 90,
  image: "images/chana.jpg",
  description: "Split Bengal gram with rich flavor, great for curries and snacks.",
  stock: 60
},

{
  id: 37,
  name: "Masoor Dal Red",
  category: "Cooking Essentials",
  subcategory: "Pulses",
  price: 95,
  image: "images/masoor-red.jpg",
  description: "Red Masoor Dal, quick cooking and rich in nutrients.",
  stock: 70
},

{
  id: 38,
  name: "Rajma Red",
  category: "Cooking Essentials",
  subcategory: "Pulses",
  price: 140,
  image: "images/rajma-red.jpg",
  description: "Premium Red Rajma perfect for Punjabi-style dishes.",
  stock: 50
},

{
  id: 39,
  name: "Rajma Brown",
  category: "Cooking Essentials",
  subcategory: "Pulses",
  price: 140,
  image: "images/rajma-brown.jpg",
  description: "Premium Brown kidney beans, perfect for traditional curries and protein-rich meals.",
  stock: 40
},

{
  id: 30,
  name: "Kabuli Chana",
  category: "Cooking Essentials",
  subcategory: "Pulses",
  price: 135,
  image: "images/kabuli-chana.jpg",
  description: "Large white chickpeas ideal for chole and salads.",
  stock: 60
},

{
  id: 41,
  name: "Kala Chana",
  category: "Cooking Essentials",
  subcategory: "Pulses",
  price: 85,
  image: "images/kala-chana.jpg",
  description: "Nutritious black chickpeas rich in iron and protein.",
  stock: 75
},

{
  id: 42,
  name: "Lobia (Black Eyed Peas)",
  category: "Cooking Essentials",
  subcategory: "Pulses",
  price: 100,
  image: "images/lobia.jpg",
  description: "Fresh Lobia beans with mild flavor and soft texture.",
  stock: 35
},

{
  id: 43,
  name: "Mixed Dal",
  category: "Cooking Essentials",
  subcategory: "Pulses",
  price: 110,
  image: "images/mixed-dal.jpg",
  description: "Blend of multiple lentils offering balanced nutrition.",
  stock: 48
},

{
  id: 44,
  name: "Moong Dal Yellow",
  category: "Cooking Essentials",
  subcategory: "Pulses",
  price: 110,
  image: "images/moong-yellow.jpg",
  description: "Yellow Moong Dal, light and nutritious for everyday dishes.",
  stock: 55
},

{
  id: 45,
  name: "Toor Dal (Arhar)",
  category: "Cooking Essentials",
  subcategory: "Pulses",
  price: 120,
  image: "images/toor.jpg",
  description: "Fresh Arhar Dal with natural taste and superior quality.",
  stock: 40
},

/* ===============================
   SPICES SECTION
================================ */

{
  id: 46,
  name: "Turmeric Powder",
  category: "Cooking Essentials",
  subcategory: "Spices",
  price: 60,
  image: "images/turmeric.jpg",
  description: "Pure turmeric powder with strong aroma and rich color.",
  stock: 80
},

{
  id: 47,
  name: "Red Chilli Powder",
  category: "Cooking Essentials",
  subcategory: "Spices",
  price: 75,
  image: "images/red-chilli.jpg",
  description: "Spicy and vibrant red chilli powder for flavorful dishes.",
  stock: 65
},

{
  id: 48,
  name: "Coriander Powder",
  category: "Cooking Essentials",
  subcategory: "Spices",
  price: 55,
  image: "images/coriander.jpg",
  description: "Fresh coriander powder with natural fragrance.",
  stock: 70
},

{
  id: 49,
  name: "Garam Masala",
  category: "Cooking Essentials",
  subcategory: "Spices",
  price: 90,
  image: "images/garam-masala.jpg",
  description: "Traditional blended spices for rich Indian curries.",
  stock: 50
},

{
  id: 50,
  name: "Cumin Seeds (Jeera)",
  category: "Cooking Essentials",
  subcategory: "Spices",
  price: 120,
  image: "images/jeera.jpg",
  description: "Premium cumin seeds with strong aroma.",
  stock: 45
},



/* ===============================
    TEAS SECTION
================================ */

{
  id: 51,
  name: "Tata Tea Gold",
  category: "Cooking Essentials",
  subcategory: "Tea",
  price: 280,
  image: "images/tata-tea-gold.jpg",
  description: "Premium blend from Tata Tea with rich aroma and strong taste.",
  stock: 50
},

{
  id: 52,
  name: "Tata Tea Premium",
  category: "Cooking Essentials",
  subcategory: "Tea",
  price: 240,
  image: "images/tata-tea-premium.jpg",
  description: "Strong and refreshing tea perfect for daily use.",
  stock: 60
},

{
  id: 53,
  name: "Red Label Tea",
  category: "Cooking Essentials",
  subcategory: "Tea",
  price: 260,
  image: "images/red-label.jpg",
  description: "Brooke Bond Red Label with strong flavor and rich color.",
  stock: 55
},

{
  id: 54,
  name: "Taj Mahal Tea",
  category: "Cooking Essentials",
  subcategory: "Tea",
  price: 300,
  image: "images/taj-mahal-tea.jpg",
  description: "Premium quality tea with exquisite aroma and taste.",
  stock: 40
},

{
  id: 55,
  name: "Wagh Bakri Tea",
  category: "Cooking Essentials",
  subcategory: "Tea",
  price: 270,
  image: "images/wagh-bakri.jpg",
  description: "Popular strong tea blend loved across India.",
  stock: 45
},

{
  id: 56,
  name: "Society Tea",
  category: "Cooking Essentials",
  subcategory: "Tea",
  price: 250,
  image: "images/society-tea.jpg",
  description: "Fine tea leaves offering refreshing taste and aroma.",
  stock: 50
},

{
  id: 57,
  name: "Girnar Masala Tea",
  category: "Cooking Essentials",
  subcategory: "Tea",
  price: 320,
  image: "images/girnar-masala.jpg",
  description: "Instant masala tea premix with authentic Indian spices.",
  stock: 35
},

{
  id: 58,
  name: "Tetley Green Tea",
  category: "Cooking Essentials",
  subcategory: "Tea",
  price: 350,
  image: "images/tetley-green.jpg",
  description: "Refreshing green tea rich in antioxidants.",
  stock: 30
},


{
  id: 59,
  name: "Lay's Classic Salted",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/lays-classic.jpg",
  description: "Crispy salted potato chips from Lay's.",
  stock: 100
},

{
  id: 60,
  name: "Lay's Magic Masala",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/lays-magic-masala.jpg",
  description: "Spicy and tangy Magic Masala flavored chips.",
  stock: 95
},

{
  id: 61,
  name: "Lay's Cream & Onion",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/lays-cream-onion.jpg",
  description: "Creamy onion flavored crunchy chips.",
  stock: 90
},

{
  id: 62,
  name: "Kurkure Masala Munch",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/kurkure-masala.jpg",
  description: "Crunchy masala flavored snack from Kurkure.",
  stock: 85
},

{
  id: 63,
  name: "Kurkure Green Chutney",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/kurkure-green.jpg",
  description: "Tangy green chutney style Kurkure.",
  stock: 80
},

{
  id: 64,
  name: "Haldiram's Aloo Bhujia Chips",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 30,
  image: "images/haldiram-chips.jpg",
  description: "Spicy potato chips from Haldiram's.",
  stock: 75
},

{
  id: 65,
  name: "Haldiram's Cream & Onion Chips",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 30,
  image: "images/haldiram-cream.jpg",
  description: "Rich cream and onion flavored chips.",
  stock: 70
},

{
  id: 66,
  name: "Bingo Mad Angles Masala",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/bingo-masala.jpg",
  description: "Triangle shaped spicy masala chips.",
  stock: 85
},

{
  id: 67,
  name: "Bingo Mad Angles Pizza",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/bingo-pizza.jpg",
  description: "Pizza flavored crunchy chips.",
  stock: 80
},

{
  id: 68,
  name: "Uncle Chipps Classic",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/uncle-chipps.jpg",
  description: "Classic spicy potato chips from Uncle Chipps.",
  stock: 70
},

{
  id: 69,
  name: "Too Yumm Multigrain Chips",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 30,
  image: "images/too-yumm.jpg",
  description: "Healthy baked multigrain chips.",
  stock: 65
},

{
  id: 70,
  name: "Too Yumm Karare",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 25,
  image: "images/too-yumm-karare.jpg",
  description: "Crispy karare snack with spicy flavor.",
  stock: 60
},

{
  id: 71,
  name: "Pringles Original",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 99,
  image: "images/pringles-original.jpg",
  description: "Imported original salted Pringles chips.",
  stock: 50
},

{
  id: 72,
  name: "Pringles Sour Cream & Onion",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 99,
  image: "images/pringles-sourcream.jpg",
  description: "Sour cream and onion flavored Pringles.",
  stock: 45
},

{
  id: 73,
  name: "Balaji Wafers Masala",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/balaji-masala.jpg",
  description: "Popular masala wafers from Balaji.",
  stock: 75
},

{
  id: 74,
  name: "Balaji Cream & Onion",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/balaji-cream.jpg",
  description: "Cream and onion flavored wafers.",
  stock: 70
},

{
  id: 75,
  name: "Yellow Diamond Classic",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/yellow-diamond.jpg",
  description: "Crispy salted chips from Yellow Diamond.",
  stock: 65
},

{
  id: 76,
  name: "Yellow Diamond Masala",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/yellow-diamond-masala.jpg",
  description: "Spicy masala flavored chips.",
  stock: 60
},

{
  id: 77,
  name: "Haldiram's Salted Chips",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 30,
  image: "images/haldiram-salted.jpg",
  description: "Lightly salted crispy potato chips.",
  stock: 55
},

{
  id: 78,
  name: "Lay's American Style Cream & Onion",
  category: "Snacks & Beverages",
  subcategory: "Chips",
  price: 20,
  image: "images/lays-american.jpg",
  description: "American style cream & onion flavored chips.",
  stock: 85
},


{
  id: 79,
  name: "Parle-G Biscuits",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 10,
  image: "images/parle-g.jpg",
  description: "Classic glucose biscuits loved across India.",
  stock: 120
},
{
  id: 80,
  name: "Britannia Good Day Butter",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 25,
  image: "images/goodday-butter.jpg",
  description: "Crunchy butter cookies from Britannia.",
  stock: 90
},
{
  id: 81,
  name: "Britannia Marie Gold",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 30,
  image: "images/marie-gold.jpg",
  description: "Light and healthy tea-time biscuits.",
  stock: 85
},
{
  id: 82,
  name: "Oreo Chocolate",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 20,
  image: "images/oreo.jpg",
  description: "Chocolate cream sandwich biscuits.",
  stock: 100
},
{
  id: 83,
  name: "Hide & Seek Chocolate",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 30,
  image: "images/hide-seek.jpg",
  description: "Chocolate chip biscuits.",
  stock: 70
},
{
  id: 84,
  name: "Sunfeast Dark Fantasy",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 35,
  image: "images/dark-fantasy.jpg",
  description: "Cream-filled chocolate cookies.",
  stock: 60
},
{
  id: 85,
  name: "Monaco Biscuits",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 20,
  image: "images/monaco.jpg",
  description: "Salted crunchy biscuits.",
  stock: 75
},
{
  id: 86,
  name: "Krackjack Biscuits",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 20,
  image: "images/krackjack.jpg",
  description: "Sweet and salty crackers.",
  stock: 65
},
{
  id: 87,
  name: "Treat Croissant",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 15,
  image: "images/treat.jpg",
  description: "Cream-filled sandwich biscuits.",
  stock: 70
},
{
  id: 88,
  name: "Milk Bikis",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 20,
  image: "images/milk-bikis.jpg",
  description: "Milk cream biscuits.",
  stock: 80
},
{
  id: 89,
  name: "50-50 Biscuits",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 20,
  image: "images/50-50.jpg",
  description: "Sweet and salty combo biscuits.",
  stock: 85
},
{
  id: 90,
  name: "Bourbon Chocolate",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 30,
  image: "images/bourbon.jpg",
  description: "Chocolate cream sandwich biscuits.",
  stock: 75
},
{
  id: 91,
  name: "Little Hearts",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 25,
  image: "images/little-hearts.jpg",
  description: "Sweet heart-shaped biscuits.",
  stock: 60
},
{
  id: 92,
  name: "Britannia Nutri Choice",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 40,
  image: "images/nutrichoice.jpg",
  description: "Healthy digestive biscuits.",
  stock: 55
},
{
  id: 93,
  name: "Parle 20-20 Cookies",
  category: "Snacks & Beverages",
  subcategory: "Biscuits",
  price: 30,
  image: "images/20-20.jpg",
  description: "Crunchy chocolate cookies.",
  stock: 70
},



{
  id: 94,
  name: "Coca-Cola",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/coca-cola.jpg",
  description: "Refreshing cola soft drink.",
  stock: 100
},
{
  id: 95,
  name: "Pepsi",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/pepsi.jpg",
  description: "Popular carbonated cola drink.",
  stock: 95
},
{
  id: 96,
  name: "Sprite",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/sprite.jpg",
  description: "Lemon-lime refreshing soda.",
  stock: 90
},
{
  id: 97,
  name: "Fanta Orange",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/fanta.jpg",
  description: "Orange flavored soda drink.",
  stock: 85
},
{
  id: 98,
  name: "Thums Up",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/thumsup.jpg",
  description: "Strong cola soft drink.",
  stock: 80
},
{
  id: 99,
  name: "Limca",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/limca.jpg",
  description: "Lime and lemon flavored drink.",
  stock: 75
},
{
  id: 100,
  name: "Mountain Dew",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 45,
  image: "images/mountain-dew.jpg",
  description: "Citrus flavored energy soda.",
  stock: 70
},
{
  id: 101,
  name: "7UP",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/7up.jpg",
  description: "Refreshing lemon soft drink.",
  stock: 85
},
{
  id: 102,
  name: "Mirinda",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/mirinda.jpg",
  description: "Orange carbonated drink.",
  stock: 70
},
{
  id: 103,
  name: "Slice Mango",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 35,
  image: "images/slice.jpg",
  description: "Mango fruit drink.",
  stock: 75
},
{
  id: 104,
  name: "Maaza",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 35,
  image: "images/maaza.jpg",
  description: "Refreshing mango drink.",
  stock: 70
},
{
  id: 105,
  name: "Appy Fizz",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 35,
  image: "images/appy-fizz.jpg",
  description: "Sparkling apple juice drink.",
  stock: 60
},
{
  id: 106,
  name: "Red Bull",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 110,
  image: "images/redbull.jpg",
  description: "Energy drink for instant boost.",
  stock: 50
},
{
  id: 107,
  name: "Sting Energy",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 20,
  image: "images/sting.jpg",
  description: "Affordable energy drink.",
  stock: 90
},
{
  id: 108,
  name: "Real Fruit Juice",
  category: "Snacks & Beverages",
  subcategory: "Cold Drinks",
  price: 60,
  image: "images/real-juice.jpg",
  description: "Mixed fruit juice drink.",
  stock: 65
},


{
  id: 109,
  name: "Dairy Milk Chocolate",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 40,
  image: "images/dairy-milk.jpg",
  description: "Smooth and creamy milk chocolate.",
  stock: 100
},
{
  id: 110,
  name: "Dairy Milk Silk",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 80,
  image: "images/dairy-milk-silk.jpg",
  description: "Rich and smooth Silk chocolate.",
  stock: 85
},
{
  id: 111,
  name: "KitKat",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 20,
  image: "images/kitkat.jpg",
  description: "Crispy wafer covered in chocolate.",
  stock: 95
},
{
  id: 112,
  name: "5 Star Chocolate",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 20,
  image: "images/5star.jpg",
  description: "Caramel and nougat filled chocolate.",
  stock: 90
},
{
  id: 113,
  name: "Perk Chocolate",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 10,
  image: "images/perk.jpg",
  description: "Light wafer chocolate bar.",
  stock: 100
},
{
  id: 114,
  name: "Munch Chocolate",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 10,
  image: "images/munch.jpg",
  description: "Crunchy wafer snack.",
  stock: 90
},
{
  id: 115,
  name: "Snickers",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 40,
  image: "images/snickers.jpg",
  description: "Peanut and caramel chocolate bar.",
  stock: 80
},
{
  id: 116,
  name: "Mars Chocolate",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 50,
  image: "images/mars.jpg",
  description: "Classic caramel chocolate bar.",
  stock: 70
},
{
  id: 117,
  name: "Ferrero Rocher",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 120,
  image: "images/ferrero.jpg",
  description: "Premium hazelnut chocolate balls.",
  stock: 40
},
{
  id: 118,
  name: "Bournville Dark Chocolate",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 90,
  image: "images/bournville.jpg",
  description: "Rich dark chocolate bar.",
  stock: 60
},
{
  id: 119,
  name: "Milky Bar",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 20,
  image: "images/milkybar.jpg",
  description: "Creamy white chocolate.",
  stock: 75
},
{
  id: 120,
  name: "Toblerone",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 150,
  image: "images/toblerone.jpg",
  description: "Swiss milk chocolate with honey and almond.",
  stock: 35
},
{
  id: 121,
  name: "Galaxy Chocolate",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 90,
  image: "images/galaxy.jpg",
  description: "Smooth creamy chocolate bar.",
  stock: 50
},
{
  id: 122,
  name: "Kinder Joy",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 50,
  image: "images/kinder-joy.jpg",
  description: "Chocolate treat with surprise toy.",
  stock: 65
},
{
  id: 123,
  name: "Hershey's Chocolate",
  category: "Snacks & Beverages",
  subcategory: "Chocolates",
  price: 100,
  image: "images/hersheys.jpg",
  description: "Classic American chocolate bar.",
  stock: 55
},


{
  id: 124,
  name: "Haldiram's Aloo Bhujia",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 30,
  image: "images/aloo-bhujia.jpg",
  description: "Spicy potato sev snack.",
  stock: 90
},
{
  id: 125,
  name: "Haldiram's Mixture",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 40,
  image: "images/haldiram-mixture.jpg",
  description: "Traditional Indian mixture snack.",
  stock: 80
},
{
  id: 126,
  name: "Bikaji Bhujia",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 35,
  image: "images/bikaji.jpg",
  description: "Crispy spicy bhujia.",
  stock: 75
},
{
  id: 127,
  name: "Balaji Sev Mamra",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 25,
  image: "images/sev-mamra.jpg",
  description: "Light puffed rice mixture.",
  stock: 85
},
{
  id: 128,
  name: "Peanuts Masala",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 20,
  image: "images/masala-peanuts.jpg",
  description: "Crunchy spicy peanuts.",
  stock: 100
},
{
  id: 129,
  name: "Moong Dal Namkeen",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 30,
  image: "images/moong-dal.jpg",
  description: "Crispy fried moong dal snack.",
  stock: 80
},
{
  id: 130,
  name: "Navratan Mixture",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 35,
  image: "images/navratan.jpg",
  description: "Premium mixed namkeen snack.",
  stock: 70
},
{
  id: 131,
  name: "Khatta Meetha",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 30,
  image: "images/khatta-meetha.jpg",
  description: "Sweet and tangy mixture.",
  stock: 75
},
{
  id: 132,
  name: "Cornflakes Mixture",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 40,
  image: "images/cornflakes-mixture.jpg",
  description: "Crunchy cornflakes namkeen.",
  stock: 60
},
{
  id: 133,
  name: "Ratlam Sev",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 35,
  image: "images/ratlam-sev.jpg",
  description: "Spicy Ratlami sev snack.",
  stock: 70
},
{
  id: 134,
  name: "Chana Dal Namkeen",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 30,
  image: "images/chana-dal.jpg",
  description: "Crunchy roasted chana dal.",
  stock: 85
},
{
  id: 135,
  name: "Banana Chips",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 40,
  image: "images/banana-chips.jpg",
  description: "Crispy salted banana chips.",
  stock: 65
},
{
  id: 136,
  name: "Farali Chivda",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 45,
  image: "images/farali.jpg",
  description: "Fasting special crispy snack.",
  stock: 55
},
{
  id: 137,
  name: "Dry Fruit Mixture",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 60,
  image: "images/dryfruit-mixture.jpg",
  description: "Premium dry fruit namkeen.",
  stock: 50
},
{
  id: 138,
  name: "Tasty Nuts Mix",
  category: "Snacks & Beverages",
  subcategory: "Namkeen",
  price: 55,
  image: "images/nuts-mix.jpg",
  description: "Salted and roasted nuts mixture.",
  stock: 60
},

{
  id: 139,
  name: "Gulab Jamun (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 180,
  image: "images/gulab-jamun.jpg",
  description: "Soft and juicy gulab jamun soaked in sugar syrup.",
  stock: 50
},
{
  id: 140,
  name: "Rasgulla (1kg)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 220,
  image: "images/rasgulla.jpg",
  description: "Spongy and sweet rasgullas in syrup.",
  stock: 45
},
{
  id: 141,
  name: "Kaju Katli (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 750,
  image: "images/kaju-katli.jpg",
  description: "Premium cashew sweet with rich taste.",
  stock: 35
},
{
  id: 142,
  name: "Laddu (Besan) 500g",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 200,
  image: "images/besan-laddu.jpg",
  description: "Traditional besan laddu made with ghee.",
  stock: 60
},
{
  id: 143,
  name: "Motichoor Laddu (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 240,
  image: "images/motichoor-laddu.jpg",
  description: "Soft motichoor laddu for festive occasions.",
  stock: 55
},
{
  id: 144,
  name: "Barfi (Milk) 500g",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 260,
  image: "images/milk-barfi.jpg",
  description: "Classic milk barfi with rich flavor.",
  stock: 50
},
{
  id: 145,
  name: "Peda (Mathura) 500g",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 280,
  image: "images/peda.jpg",
  description: "Soft and delicious Mathura peda.",
  stock: 40
},
{
  id: 146,
  name: "Soan Papdi (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 150,
  image: "images/soan-papdi.jpg",
  description: "Flaky and light traditional sweet.",
  stock: 70
},
{
  id: 147,
  name: "Jalebi (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 160,
  image: "images/jalebi.jpg",
  description: "Crispy and juicy jalebi.",
  stock: 65
},
{
  id: 148,
  name: "Rasmalai (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 300,
  image: "images/rasmalai.jpg",
  description: "Soft rasmalai soaked in flavored milk.",
  stock: 35
},
{
  id: 149,
  name: "Mysore Pak (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 320,
  image: "images/mysore-pak.jpg",
  description: "Traditional South Indian ghee sweet.",
  stock: 40
},
{
  id: 150,
  name: "Halwa (Gajar) 500g",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 280,
  image: "images/gajar-halwa.jpg",
  description: "Delicious carrot halwa made with milk and nuts.",
  stock: 50
},
{
  id: 151,
  name: "Coconut Barfi (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 240,
  image: "images/coconut-barfi.jpg",
  description: "Sweet coconut flavored barfi.",
  stock: 45
},
{
  id: 152,
  name: "Anjeer Barfi (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 480,
  image: "images/anjeer-barfi.jpg",
  description: "Healthy fig based premium sweet.",
  stock: 30
},
{
  id: 153,
  name: "Dry Fruit Laddu (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 520,
  image: "images/dryfruit-laddu.jpg",
  description: "Nutritious laddu made with mixed dry fruits.",
  stock: 35
},
{
  id: 154,
  name: "Cham Cham (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 220,
  image: "images/cham-cham.jpg",
  description: "Bengali sweet soaked in sugar syrup.",
  stock: 40
},
{
  id: 155,
  name: "Kheer Kadam (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 260,
  image: "images/kheer-kadam.jpg",
  description: "Delicious Bengali sweet with khoya coating.",
  stock: 30
},
{
  id: 156,
  name: "Malpua (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 210,
  image: "images/malpua.jpg",
  description: "Traditional deep fried sweet soaked in syrup.",
  stock: 35
},
{
  id: 157,
  name: "Imarti (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 190,
  image: "images/imarti.jpg",
  description: "Thick and juicy imarti sweet.",
  stock: 40
},
{
  id: 158,
  name: "Balushahi (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 230,
  image: "images/balushahi.jpg",
  description: "Flaky traditional Indian sweet.",
  stock: 35
},
{
  id: 159,
  name: "Milk Cake (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 260,
  image: "images/milk-cake.jpg",
  description: "Rich and dense milk sweet.",
  stock: 45
},
{
  id: 160,
  name: "Kalakand (500g)",
  category: "Snacks & Beverages",
  subcategory: "Sweets",
  price: 280,
  image: "images/kalakand.jpg",
  description: "Soft and moist milk-based sweet.",
  stock: 40
},


{
  id: 161,
  name: "Lux Jasmine Soap",
  category: "Personal Care",
  subcategory: "Soap",
  price: 35,
  image: "images/lux.jpg",
  description: "Fragrant beauty soap with jasmine essence.",
  stock: 120
},
{
  id: 162,
  name: "Lifebuoy Total Soap",
  category: "Personal Care",
  subcategory: "Soap",
  price: 30,
  image: "images/lifebuoy.jpg",
  description: "Germ protection bathing soap.",
  stock: 150
},
{
  id: 163,
  name: "Dove Cream Beauty Bathing Bar",
  category: "Personal Care",
  subcategory: "Soap",
  price: 55,
  image: "images/dove.jpg",
  description: "Moisturizing beauty bar for soft skin.",
  stock: 100
},
{
  id: 164,
  name: "Pears Pure & Gentle Soap",
  category: "Personal Care",
  subcategory: "Soap",
  price: 50,
  image: "images/pears.jpg",
  description: "Transparent glycerin soap for gentle care.",
  stock: 80
},
{
  id: 165,
  name: "Cinthol Lime Soap",
  category: "Personal Care",
  subcategory: "Soap",
  price: 40,
  image: "images/cinthol.jpg",
  description: "Refreshing lime bathing soap.",
  stock: 90
},
{
  id: 166,
  name: "Dettol Original Soap",
  category: "Personal Care",
  subcategory: "Soap",
  price: 35,
  image: "images/dettol-soap.jpg",
  description: "Trusted antibacterial soap.",
  stock: 110
},
{
  id: 167,
  name: "Medimix Ayurvedic Soap",
  category: "Personal Care",
  subcategory: "Soap",
  price: 45,
  image: "images/medimix.jpg",
  description: "Herbal soap with natural extracts.",
  stock: 75
},
{
  id: 168,
  name: "Mysore Sandal Soap",
  category: "Personal Care",
  subcategory: "Soap",
  price: 60,
  image: "images/mysore-sandal.jpg",
  description: "Premium sandalwood soap.",
  stock: 60
},
{
  id: 169,
  name: "Patanjali Neem Soap",
  category: "Personal Care",
  subcategory: "Soap",
  price: 28,
  image: "images/patanjali-neem.jpg",
  description: "Neem-based herbal soap.",
  stock: 95
},
{
  id: 170,
  name: "Fiama Gel Bar",
  category: "Personal Care",
  subcategory: "Soap",
  price: 45,
  image: "images/fiama.jpg",
  description: "Skin-friendly gel bathing bar.",
  stock: 85
},
{
  id: 171,
  name: "Himalaya Neem Soap",
  category: "Personal Care",
  subcategory: "Soap",
  price: 32,
  image: "images/himalaya-soap.jpg",
  description: "Neem and turmeric protection soap.",
  stock: 100
},
{
  id: 172,
  name: "Godrej No.1 Sandal Soap",
  category: "Personal Care",
  subcategory: "Soap",
  price: 30,
  image: "images/godrej-soap.jpg",
  description: "Classic sandal fragrance soap.",
  stock: 90
},

{
  id: 173,
  name: "Clinic Plus Shampoo",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 120,
  image: "images/clinic-plus.jpg",
  description: "Strong and long hair shampoo.",
  stock: 80
},
{
  id: 174,
  name: "Head & Shoulders Anti-Dandruff",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 140,
  image: "images/head-shoulders.jpg",
  description: "Removes dandruff effectively.",
  stock: 75
},
{
  id: 175,
  name: "Pantene Smooth & Silky",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 150,
  image: "images/pantene.jpg",
  description: "For smooth and manageable hair.",
  stock: 70
},
{
  id: 176,
  name: "Sunsilk Black Shine",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 130,
  image: "images/sunsilk.jpg",
  description: "Adds shine to black hair.",
  stock: 85
},
{
  id: 177,
  name: "Dove Intense Repair",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 160,
  image: "images/dove-shampoo.jpg",
  description: "Repairs damaged hair.",
  stock: 60
},
{
  id: 178,
  name: "Tresemme Keratin Smooth",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 180,
  image: "images/tresemme.jpg",
  description: "Salon smooth finish shampoo.",
  stock: 55
},
{
  id: 179,
  name: "Himalaya Anti Hair Fall",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 140,
  image: "images/himalaya-shampoo.jpg",
  description: "Reduces hair fall naturally.",
  stock: 65
},
{
  id: 180,
  name: "Loreal Total Repair 5",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 190,
  image: "images/loreal.jpg",
  description: "Complete hair damage repair.",
  stock: 50
},
{
  id: 181,
  name: "Indulekha Bringha Shampoo",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 220,
  image: "images/indulekha.jpg",
  description: "Ayurvedic hair fall solution.",
  stock: 45
},
{
  id: 182,
  name: "Mamaearth Onion Shampoo",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 250,
  image: "images/mamaearth.jpg",
  description: "Onion extract for hair growth.",
  stock: 40
},
{
  id: 183,
  name: "WOW Apple Cider Vinegar Shampoo",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 280,
  image: "images/wow-shampoo.jpg",
  description: "Removes buildup and dandruff.",
  stock: 35
},
{
  id: 184,
  name: "Garnier Fructis Long & Strong",
  category: "Personal Care",
  subcategory: "Shampoo",
  price: 145,
  image: "images/garnier.jpg",
  description: "Strengthens weak hair.",
  stock: 60
},


{
  id: 185,
  name: "Himalaya Neem Face Wash",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 140,
  image: "images/himalaya-facewash.jpg",
  description: "Neem based face wash for clear skin.",
  stock: 80
},
{
  id: 186,
  name: "Clean & Clear Face Wash",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 135,
  image: "images/clean-clear.jpg",
  description: "Oil control face wash for daily use.",
  stock: 90
},
{
  id: 187,
  name: "Garnier Men Turbo Bright",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 160,
  image: "images/garnier-men.jpg",
  description: "Brightening face wash for men.",
  stock: 70
},
{
  id: 188,
  name: "Pond's Pure White Face Wash",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 150,
  image: "images/ponds-facewash.jpg",
  description: "Activated charcoal face wash.",
  stock: 75
},
{
  id: 189,
  name: "Mamaearth Ubtan Face Wash",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 249,
  image: "images/mamaearth-facewash.jpg",
  description: "Turmeric based natural glow face wash.",
  stock: 60
},
{
  id: 190,
  name: "WOW Vitamin C Face Wash",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 299,
  image: "images/wow-facewash.jpg",
  description: "Vitamin C brightening face cleanser.",
  stock: 50
},
{
  id: 191,
  name: "Nivea Men Face Wash",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 170,
  image: "images/nivea-facewash.jpg",
  description: "Deep cleaning face wash for men.",
  stock: 65
},
{
  id: 192,
  name: "Lakme Blush & Glow Face Wash",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 155,
  image: "images/lakme-facewash.jpg",
  description: "Fruit based refreshing face wash.",
  stock: 70
},
{
  id: 193,
  name: "Biotique Bio Honey Gel",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 180,
  image: "images/biotique-facewash.jpg",
  description: "Herbal honey gel face cleanser.",
  stock: 60
},
{
  id: 194,
  name: "Cetaphil Gentle Cleanser",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 325,
  image: "images/cetaphil.jpg",
  description: "Dermatologist recommended gentle cleanser.",
  stock: 45
},
{
  id: 195,
  name: "Plum Green Tea Face Wash",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 275,
  image: "images/plum-facewash.jpg",
  description: "Green tea acne control face wash.",
  stock: 40
},
{
  id: 196,
  name: "Minimalist Salicylic Acid Cleanser",
  category: "Personal Care",
  subcategory: "Face Wash",
  price: 299,
  image: "images/minimalist-facewash.jpg",
  description: "Salicylic acid cleanser for acne prone skin.",
  stock: 35
},


{
  id: 197,
  name: "Parachute Coconut Oil",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 120,
  image: "images/parachute-oil.jpg",
  description: "Pure coconut hair oil.",
  stock: 100
},
{
  id: 198,
  name: "Bajaj Almond Drops Oil",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 110,
  image: "images/bajaj-oil.jpg",
  description: "Non-sticky almond hair oil.",
  stock: 90
},
{
  id: 199,
  name: "Dabur Amla Hair Oil",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 130,
  image: "images/dabur-amla.jpg",
  description: "Strengthens hair from roots.",
  stock: 85
},
{
  id: 200,
  name: "Livon Hair Serum",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 260,
  image: "images/livon.jpg",
  description: "Smooth and frizz-free hair serum.",
  stock: 60
},
{
  id: 201,
  name: "Streax Hair Serum",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 240,
  image: "images/streax.jpg",
  description: "Instant smoothness serum.",
  stock: 65
},
{
  id: 202,
  name: "Dove Hair Conditioner",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 180,
  image: "images/dove-conditioner.jpg",
  description: "Moisturizing hair conditioner.",
  stock: 55
},
{
  id: 203,
  name: "Pantene Conditioner",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 170,
  image: "images/pantene-conditioner.jpg",
  description: "Smooth and silky hair conditioner.",
  stock: 60
},
{
  id: 204,
  name: "Loreal Hair Spa Cream",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 350,
  image: "images/loreal-spa.jpg",
  description: "Deep conditioning hair spa cream.",
  stock: 40
},
{
  id: 205,
  name: "Indulekha Bringha Oil",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 320,
  image: "images/indulekha-oil.jpg",
  description: "Ayurvedic hair fall control oil.",
  stock: 45
},
{
  id: 206,
  name: "Himalaya Protein Hair Cream",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 150,
  image: "images/himalaya-cream.jpg",
  description: "Daily nourishment hair cream.",
  stock: 70
},
{
  id: 207,
  name: "Set Wet Hair Gel",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 120,
  image: "images/setwet.jpg",
  description: "Strong hold hair styling gel.",
  stock: 80
},
{
  id: 208,
  name: "Beardo Hair Wax",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 275,
  image: "images/beardo-wax.jpg",
  description: "Matte finish styling wax.",
  stock: 50
},
{
  id: 209,
  name: "WOW Onion Hair Oil",
  category: "Personal Care",
  subcategory: "Hair Care",
  price: 399,
  image: "images/wow-oil.jpg",
  description: "Onion oil for strong hair growth.",
  stock: 35
},


{
  id: 210,
  name: "Colgate Strong Teeth",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 55,
  image: "images/colgate.jpg",
  description: "Calcium boost toothpaste.",
  stock: 120
},
{
  id: 211,
  name: "Colgate Max Fresh",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 65,
  image: "images/colgate-max.jpg",
  description: "Cooling crystals toothpaste.",
  stock: 100
},
{
  id: 212,
  name: "Pepsodent Germicheck",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 60,
  image: "images/pepsodent.jpg",
  description: "Fights cavity causing germs.",
  stock: 90
},
{
  id: 213,
  name: "Closeup Red Hot",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 60,
  image: "images/closeup.jpg",
  description: "Fresh breath gel toothpaste.",
  stock: 85
},
{
  id: 214,
  name: "Sensodyne Rapid Relief",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 110,
  image: "images/sensodyne.jpg",
  description: "Relieves tooth sensitivity.",
  stock: 70
},
{
  id: 215,
  name: "Dabur Red Toothpaste",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 65,
  image: "images/dabur-red.jpg",
  description: "Ayurvedic toothpaste with herbs.",
  stock: 80
},
{
  id: 216,
  name: "Oral-B Toothbrush",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 40,
  image: "images/oralb.jpg",
  description: "Soft bristle toothbrush.",
  stock: 120
},
{
  id: 217,
  name: "Colgate Zig Zag Brush",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 35,
  image: "images/colgate-brush.jpg",
  description: "Deep cleaning toothbrush.",
  stock: 110
},
{
  id: 218,
  name: "Listerine Mouthwash",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 150,
  image: "images/listerine.jpg",
  description: "Antiseptic mouthwash for fresh breath.",
  stock: 60
},
{
  id: 219,
  name: "Colgate Mouthwash",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 135,
  image: "images/colgate-mouthwash.jpg",
  description: "Kills 99.9% germs.",
  stock: 65
},
{
  id: 220,
  name: "Vicco Vajradanti",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 75,
  image: "images/vicco.jpg",
  description: "Herbal toothpaste formula.",
  stock: 70
},
{
  id: 221,
  name: "Dabur Meswak Toothpaste",
  category: "Personal Care",
  subcategory: "Oral Care",
  price: 70,
  image: "images/meswak.jpg",
  description: "Miswak based herbal toothpaste.",
  stock: 75
},


{
  id: 222,
  name: "Real Orange Juice 1L",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 110,
  image: "images/real-orange.jpg",
  description: "Refreshing orange fruit juice.",
  stock: 60
},
{
  id: 223,
  name: "Real Mixed Fruit Juice 1L",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 115,
  image: "images/real-mixed.jpg",
  description: "Blend of multiple fruit juices.",
  stock: 55
},
{
  id: 224,
  name: "Tropicana Orange Juice",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 120,
  image: "images/tropicana-orange.jpg",
  description: "Premium orange juice with pulp.",
  stock: 50
},
{
  id: 225,
  name: "Tropicana Apple Juice",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 120,
  image: "images/tropicana-apple.jpg",
  description: "Fresh apple flavored juice.",
  stock: 45
},
{
  id: 226,
  name: "B Natural Mango Juice",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 105,
  image: "images/bnatural-mango.jpg",
  description: "Mango fruit beverage.",
  stock: 60
},
{
  id: 227,
  name: "Paper Boat Aamras",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 35,
  image: "images/paperboat-aamras.jpg",
  description: "Traditional Indian mango drink.",
  stock: 80
},
{
  id: 228,
  name: "Paper Boat Guava",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 35,
  image: "images/paperboat-guava.jpg",
  description: "Refreshing guava drink.",
  stock: 70
},
{
  id: 229,
  name: "Minute Maid Pulpy Orange",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 90,
  image: "images/minutemaid.jpg",
  description: "Orange juice with real pulp.",
  stock: 65
},
{
  id: 230,
  name: "Maaza Mango Drink",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 40,
  image: "images/maaza.jpg",
  description: "Thick mango fruit drink.",
  stock: 100
},
{
  id: 231,
  name: "Slice Mango Drink",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 40,
  image: "images/slice.jpg",
  description: "Rich mango flavored beverage.",
  stock: 95
},
{
  id: 232,
  name: "Frooti Mango Drink",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 30,
  image: "images/frooti.jpg",
  description: "Classic mango drink.",
  stock: 110
},
{
  id: 233,
  name: "Appy Fizz",
  category: "Soft Drinks",
  subcategory: "Juice",
  price: 45,
  image: "images/appyfizz.jpg",
  description: "Sparkling apple juice drink.",
  stock: 75
},

{
  id: 234,
  name: "Coca Cola 750ml",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/coca-cola.jpg",
  description: "Classic cola soft drink.",
  stock: 120
},
{
  id: 235,
  name: "Pepsi 750ml",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/pepsi.jpg",
  description: "Refreshing cola beverage.",
  stock: 110
},
{
  id: 236,
  name: "Sprite 750ml",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/sprite.jpg",
  description: "Lemon-lime soda drink.",
  stock: 100
},
{
  id: 237,
  name: "Fanta Orange",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 38,
  image: "images/fanta.jpg",
  description: "Orange flavored fizzy drink.",
  stock: 90
},
{
  id: 238,
  name: "Thums Up",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 42,
  image: "images/thumsup.jpg",
  description: "Strong and fizzy cola.",
  stock: 85
},
{
  id: 239,
  name: "Mountain Dew",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 42,
  image: "images/mountaindew.jpg",
  description: "Citrus flavored soda.",
  stock: 80
},
{
  id: 240,
  name: "7UP",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 38,
  image: "images/7up.jpg",
  description: "Refreshing lemon soda.",
  stock: 75
},
{
  id: 241,
  name: "Limca",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 38,
  image: "images/limca.jpg",
  description: "Lemon flavored sparkling drink.",
  stock: 70
},
{
  id: 242,
  name: "Mirinda",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 38,
  image: "images/mirinda.jpg",
  description: "Sweet orange soda.",
  stock: 65
},
{
  id: 243,
  name: "Coca Cola Zero",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 45,
  image: "images/coke-zero.jpg",
  description: "Zero sugar cola drink.",
  stock: 60
},
{
  id: 244,
  name: "Pepsi Black",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 45,
  image: "images/pepsi-black.jpg",
  description: "Zero calorie cola.",
  stock: 60
},
{
  id: 245,
  name: "Fanta Apple",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 38,
  image: "images/fanta-apple.jpg",
  description: "Apple flavored fizzy drink.",
  stock: 55
},
{
  id: 246,
  name: "Schweppes Soda",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 50,
  image: "images/schweppes.jpg",
  description: "Premium soda water.",
  stock: 50
},
{
  id: 247,
  name: "Kinley Soda",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 20,
  image: "images/kinley.jpg",
  description: "Sparkling soda water.",
  stock: 100
},
{
  id: 248,
  name: "Kinley Tonic Water",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 45,
  image: "images/kinley-tonic.jpg",
  description: "Refreshing tonic water.",
  stock: 60
},
{
  id: 249,
  name: "Slice Fizzy",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/slice-fizzy.jpg",
  description: "Fizzy mango beverage.",
  stock: 55
},
{
  id: 250,
  name: "Maaza Fizzy",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/maaza-fizzy.jpg",
  description: "Sparkling mango drink.",
  stock: 55
},
{
  id: 251,
  name: "Bovonto",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 35,
  image: "images/bovonto.jpg",
  description: "Popular grape flavored soda.",
  stock: 50
},
{
  id: 252,
  name: "Gold Spot (Retro Edition)",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 40,
  image: "images/goldspot.jpg",
  description: "Classic orange flavored soda.",
  stock: 45
},
{
  id: 253,
  name: "Campacola",
  category: "Soft Drinks",
  subcategory: "Cold Drinks",
  price: 35,
  image: "images/campacola.jpg",
  description: "Indian cola beverage.",
  stock: 50
},


{
  id: 254,
  name: "Red Bull Energy Drink",
  category: "Soft Drinks",
  subcategory: "Energy Drinks",
  price: 120,
  image: "images/redbull.jpg",
  description: "Boosts energy and concentration.",
  stock: 70
},
{
  id: 255,
  name: "Monster Energy",
  category: "Soft Drinks",
  subcategory: "Energy Drinks",
  price: 140,
  image: "images/monster.jpg",
  description: "High caffeine energy drink.",
  stock: 60
},
{
  id: 256,
  name: "Sting Energy Drink",
  category: "Soft Drinks",
  subcategory: "Energy Drinks",
  price: 20,
  image: "images/sting.jpg",
  description: "Strong flavored energy drink.",
  stock: 120
},
{
  id: 257,
  name: "Tzinga Energy Drink",
  category: "Soft Drinks",
  subcategory: "Energy Drinks",
  price: 25,
  image: "images/tzinga.jpg",
  description: "Affordable caffeine boost drink.",
  stock: 90
},
{
  id: 258,
  name: "Gatorade Orange",
  category: "Soft Drinks",
  subcategory: "Energy Drinks",
  price: 50,
  image: "images/gatorade.jpg",
  description: "Electrolyte sports drink.",
  stock: 80
},
{
  id: 259,
  name: "Glucon-D Energy Drink",
  category: "Soft Drinks",
  subcategory: "Energy Drinks",
  price: 35,
  image: "images/glucond.jpg",
  description: "Instant energy glucose drink.",
  stock: 85
},
{
  id: 260,
  name: "Power Horse Energy Drink",
  category: "Soft Drinks",
  subcategory: "Energy Drinks",
  price: 110,
  image: "images/powerhorse.jpg",
  description: "Premium energy booster drink.",
  stock: 50
},
{
  id: 261,
  name: "Cloud 9 Energy Drink",
  category: "Soft Drinks",
  subcategory: "Energy Drinks",
  price: 30,
  image: "images/cloud9.jpg",
  description: "Refreshing energy beverage.",
  stock: 75
},
{
  id: 262,
  name: "Ocean Blue Energy Drink",
  category: "Soft Drinks",
  subcategory: "Energy Drinks",
  price: 35,
  image: "images/oceanblue.jpg",
  description: "Caffeinated energy drink.",
  stock: 60
},
{
  id: 263,
  name: "Xtra Power Energy Drink",
  category: "Soft Drinks",
  subcategory: "Energy Drinks",
  price: 25,
  image: "images/xtrapower.jpg",
  description: "Budget energy boosting drink.",
  stock: 90
},


{
  id: 264,
  name: "Amul Gold Milk 1L",
  category: "Dairy Products",
  subcategory: "Milk",
  price: 66,
  image: "images/amul-gold.jpg",
  description: "Full cream fresh milk.",
  stock: 120
},
{
  id: 265,
  name: "Amul Taaza Milk 1L",
  category: "Dairy Products",
  subcategory: "Milk",
  price: 54,
  image: "images/amul-taaza.jpg",
  description: "Toned milk for daily use.",
  stock: 110
},
{
  id: 266,
  name: "Mother Dairy Full Cream 1L",
  category: "Dairy Products",
  subcategory: "Milk",
  price: 64,
  image: "images/motherdairy-full.jpg",
  description: "Rich full cream milk.",
  stock: 100
},
{
  id: 267,
  name: "Mother Dairy Toned Milk 1L",
  category: "Dairy Products",
  subcategory: "Milk",
  price: 52,
  image: "images/motherdairy-toned.jpg",
  description: "Healthy toned milk.",
  stock: 95
},
{
  id: 268,
  name: "Nandini Goodlife Milk 1L",
  category: "Dairy Products",
  subcategory: "Milk",
  price: 60,
  image: "images/nandini-milk.jpg",
  description: "UHT long life milk.",
  stock: 85
},
{
  id: 269,
  name: "Aavin Full Cream Milk 1L",
  category: "Dairy Products",
  subcategory: "Milk",
  price: 62,
  image: "images/aavin-milk.jpg",
  description: "Fresh pasteurized milk.",
  stock: 80
},
{
  id: 270,
  name: "Heritage Toned Milk 1L",
  category: "Dairy Products",
  subcategory: "Milk",
  price: 53,
  image: "images/heritage-milk.jpg",
  description: "Healthy toned milk option.",
  stock: 75
},
{
  id: 271,
  name: "Nestle A+ Milk 1L",
  category: "Dairy Products",
  subcategory: "Milk",
  price: 58,
  image: "images/nestle-milk.jpg",
  description: "Quality assured packaged milk.",
  stock: 70
},
{
  id: 272,
  name: "Amul Slim & Trim 1L",
  category: "Dairy Products",
  subcategory: "Milk",
  price: 52,
  image: "images/amul-slim.jpg",
  description: "Double toned low fat milk.",
  stock: 65
},
{
  id: 273,
  name: "Britannia Milk 1L",
  category: "Dairy Products",
  subcategory: "Milk",
  price: 59,
  image: "images/britannia-milk.jpg",
  description: "Fresh processed milk.",
  stock: 60
},


{
  id: 274,
  name: "Amul Butter 500g",
  category: "Dairy Products",
  subcategory: "Butter",
  price: 275,
  image: "images/amul-butter.jpg",
  description: "Salted creamy butter.",
  stock: 90
},
{
  id: 275,
  name: "Amul Unsalted Butter 500g",
  category: "Dairy Products",
  subcategory: "Butter",
  price: 280,
  image: "images/amul-unsalted.jpg",
  description: "Unsalted pure butter.",
  stock: 70
},
{
  id: 276,
  name: "Britannia Butter 500g",
  category: "Dairy Products",
  subcategory: "Butter",
  price: 270,
  image: "images/britannia-butter.jpg",
  description: "Smooth and creamy butter.",
  stock: 75
},
{
  id: 277,
  name: "Mother Dairy Butter 500g",
  category: "Dairy Products",
  subcategory: "Butter",
  price: 265,
  image: "images/motherdairy-butter.jpg",
  description: "Fresh salted butter.",
  stock: 60
},
{
  id: 278,
  name: "Nandini Butter 500g",
  category: "Dairy Products",
  subcategory: "Butter",
  price: 260,
  image: "images/nandini-butter.jpg",
  description: "Creamy table butter.",
  stock: 55
},
{
  id: 279,
  name: "President Butter 200g",
  category: "Dairy Products",
  subcategory: "Butter",
  price: 190,
  image: "images/president-butter.jpg",
  description: "Premium French butter.",
  stock: 40
},
{
  id: 280,
  name: "Amul Garlic & Herbs Butter",
  category: "Dairy Products",
  subcategory: "Butter",
  price: 140,
  image: "images/amul-garlic.jpg",
  description: "Flavored butter spread.",
  stock: 65
},
{
  id: 281,
  name: "Britannia Spreadz Butter",
  category: "Dairy Products",
  subcategory: "Butter",
  price: 120,
  image: "images/spreadz.jpg",
  description: "Easy spread butter.",
  stock: 80
},

{
  id: 282,
  name: "Amul Fresh Paneer 200g",
  category: "Dairy Products",
  subcategory: "Paneer",
  price: 95,
  image: "images/amul-paneer.jpg",
  description: "Soft and fresh paneer.",
  stock: 70
},
{
  id: 283,
  name: "Mother Dairy Paneer 200g",
  category: "Dairy Products",
  subcategory: "Paneer",
  price: 90,
  image: "images/motherdairy-paneer.jpg",
  description: "Fresh cottage cheese.",
  stock: 65
},
{
  id: 284,
  name: "Nandini Paneer 200g",
  category: "Dairy Products",
  subcategory: "Paneer",
  price: 85,
  image: "images/nandini-paneer.jpg",
  description: "Rich and creamy paneer.",
  stock: 60
},
{
  id: 285,
  name: "Milky Mist Paneer 200g",
  category: "Dairy Products",
  subcategory: "Paneer",
  price: 100,
  image: "images/milkymist-paneer.jpg",
  description: "Premium quality paneer.",
  stock: 55
},
{
  id: 286,
  name: "Britannia Paneer 200g",
  category: "Dairy Products",
  subcategory: "Paneer",
  price: 98,
  image: "images/britannia-paneer.jpg",
  description: "Soft and hygienic paneer.",
  stock: 50
},


{
  id: 287,
  name: "Britannia Toast Rusk 300g",
  category: "Bakery Items",
  subcategory: "Rusk",
  price: 75,
  image: "images/britannia-rusk.jpg",
  description: "Crispy and crunchy tea rusk.",
  stock: 80
},
{
  id: 288,
  name: "Sunfeast Milk Rusk 300g",
  category: "Bakery Items",
  subcategory: "Rusk",
  price: 70,
  image: "images/sunfeast-rusk.jpg",
  description: "Delicious milk flavored rusk.",
  stock: 70
},
{
  id: 289,
  name: "Parle Rusk 300g",
  category: "Bakery Items",
  subcategory: "Rusk",
  price: 68,
  image: "images/parle-rusk.jpg",
  description: "Perfect tea time crispy rusk.",
  stock: 75
},
{
  id: 290,
  name: "Unibic Elaichi Rusk 250g",
  category: "Bakery Items",
  subcategory: "Rusk",
  price: 85,
  image: "images/unibic-rusk.jpg",
  description: "Cardamom flavored crunchy rusk.",
  stock: 60
},
{
  id: 291,
  name: "Modern Bakery Rusk 300g",
  category: "Bakery Items",
  subcategory: "Rusk",
  price: 72,
  image: "images/modern-rusk.jpg",
  description: "Golden baked crispy rusk.",
  stock: 65
},
{
  id: 292,
  name: "Anmol Milk Rusk 300g",
  category: "Bakery Items",
  subcategory: "Rusk",
  price: 65,
  image: "images/anmol-rusk.jpg",
  description: "Budget-friendly tea rusk.",
  stock: 85
},
{
  id: 293,
  name: "Bisk Farm Rusk 300g",
  category: "Bakery Items",
  subcategory: "Rusk",
  price: 74,
  image: "images/biskfarm-rusk.jpg",
  description: "Crunchy twice baked rusk.",
  stock: 60
},


{
  id: 294,
  name: "Britannia Good Day Cookies 200g",
  category: "Bakery Items",
  subcategory: "Cookies",
  price: 45,
  image: "images/goodday.jpg",
  description: "Crunchy butter cookies.",
  stock: 100
},
{
  id: 295,
  name: "Sunfeast Dark Fantasy 100g",
  category: "Bakery Items",
  subcategory: "Cookies",
  price: 35,
  image: "images/darkfantasy.jpg",
  description: "Choco filled premium cookies.",
  stock: 90
},
{
  id: 296,
  name: "Oreo Original 120g",
  category: "Bakery Items",
  subcategory: "Cookies",
  price: 30,
  image: "images/oreo.jpg",
  description: "Chocolate cream sandwich cookies.",
  stock: 110
},
{
  id: 297,
  name: "Unibic Choco Chip Cookies 150g",
  category: "Bakery Items",
  subcategory: "Cookies",
  price: 55,
  image: "images/unibic-choco.jpg",
  description: "Loaded with chocolate chips.",
  stock: 70
},
{
  id: 298,
  name: "Parle Hide & Seek 120g",
  category: "Bakery Items",
  subcategory: "Cookies",
  price: 30,
  image: "images/hideseek.jpg",
  description: "Classic chocolate chip cookies.",
  stock: 95
},
{
  id: 299,
  name: "Bisk Farm Butter Cookies 200g",
  category: "Bakery Items",
  subcategory: "Cookies",
  price: 60,
  image: "images/biskfarm-cookies.jpg",
  description: "Rich butter cookies.",
  stock: 60
},
{
  id: 300,
  name: "Anmol Dream Lite Cookies 150g",
  category: "Bakery Items",
  subcategory: "Cookies",
  price: 40,
  image: "images/anmol-cookies.jpg",
  description: "Light and crunchy cookies.",
  stock: 80
},
{
  id: 301,
  name: "Milano Cookies 75g",
  category: "Bakery Items",
  subcategory: "Cookies",
  price: 35,
  image: "images/milano.jpg",
  description: "Premium cream-filled cookies.",
  stock: 75
},


{
  id: 302,
  name: "Britannia White Bread 400g",
  category: "Bakery Items",
  subcategory: "Bread",
  price: 40,
  image: "images/britannia-bread.jpg",
  description: "Soft and fresh white bread.",
  stock: 120
},
{
  id: 303,
  name: "Britannia Brown Bread 400g",
  category: "Bakery Items",
  subcategory: "Bread",
  price: 45,
  image: "images/brown-bread.jpg",
  description: "Healthy whole wheat bread.",
  stock: 110
},
{
  id: 304,
  name: "Harvest Gold White Bread 400g",
  category: "Bakery Items",
  subcategory: "Bread",
  price: 42,
  image: "images/harvestgold.jpg",
  description: "Fresh sliced white bread.",
  stock: 100
},
{
  id: 305,
  name: "Harvest Gold Multigrain Bread 400g",
  category: "Bakery Items",
  subcategory: "Bread",
  price: 50,
  image: "images/multigrain.jpg",
  description: "Nutritious multigrain bread.",
  stock: 90
},
{
  id: 306,
  name: "Modern Milk Bread 400g",
  category: "Bakery Items",
  subcategory: "Bread",
  price: 38,
  image: "images/modern-bread.jpg",
  description: "Soft milk bread slices.",
  stock: 95
},
{
  id: 307,
  name: "Modern Brown Bread 400g",
  category: "Bakery Items",
  subcategory: "Bread",
  price: 44,
  image: "images/modern-brown.jpg",
  description: "Fiber rich brown bread.",
  stock: 85
},
{
  id: 308,
  name: "English Oven Whole Wheat Bread",
  category: "Bakery Items",
  subcategory: "Bread",
  price: 48,
  image: "images/englishoven.jpg",
  description: "Premium whole wheat bread.",
  stock: 80
},
{
  id: 309,
  name: "Britannia 100% Whole Wheat Bread",
  category: "Bakery Items",
  subcategory: "Bread",
  price: 52,
  image: "images/wholewheat.jpg",
  description: "Healthy whole wheat bread.",
  stock: 75
},
{
  id: 310,
  name: "Harvest Gold Fruit Bread",
  category: "Bakery Items",
  subcategory: "Bread",
  price: 55,
  image: "images/fruitbread.jpg",
  description: "Sweet fruit flavored bread.",
  stock: 65
},
{
  id: 311,
  name: "Britannia Sandwich Bread",
  category: "Bakery Items",
  subcategory: "Bread",
  price: 45,
  image: "images/sandwich.jpg",
  description: "Perfect for sandwiches.",
  stock: 90
},


{
  id: 312,
  name: "Apple (Shimla) 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 180,
  image: "images/apple.jpg",
  description: "Fresh and juicy Shimla apples.",
  stock: 100
},
{
  id: 313,
  name: "Banana 1 Dozen",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 60,
  image: "images/banana.jpg",
  description: "Fresh ripe bananas.",
  stock: 120
},
{
  id: 314,
  name: "Mango (Alphonso) 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 250,
  image: "images/mango.jpg",
  description: "Sweet and premium Alphonso mangoes.",
  stock: 80
},
{
  id: 315,
  name: "Orange 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 90,
  image: "images/orange.jpg",
  description: "Juicy and fresh oranges.",
  stock: 110
},
{
  id: 316,
  name: "Pomegranate 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 140,
  image: "images/pomegranate.jpg",
  description: "Rich in antioxidants and fresh.",
  stock: 75
},
{
  id: 317,
  name: "Grapes (Green) 500g",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 70,
  image: "images/green-grapes.jpg",
  description: "Sweet and seedless green grapes.",
  stock: 95
},
{
  id: 318,
  name: "Grapes (Black) 500g",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 80,
  image: "images/black-grapes.jpg",
  description: "Fresh black seedless grapes.",
  stock: 90
},
{
  id: 319,
  name: "Papaya 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 60,
  image: "images/papaya.jpg",
  description: "Ripe and healthy papaya.",
  stock: 85
},
{
  id: 320,
  name: "Watermelon 1pc",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 120,
  image: "images/watermelon.jpg",
  description: "Fresh and juicy watermelon.",
  stock: 60
},
{
  id: 321,
  name: "Pineapple 1pc",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 90,
  image: "images/pineapple.jpg",
  description: "Sweet tropical pineapple.",
  stock: 70
},
{
  id: 322,
  name: "Guava 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 80,
  image: "images/guava.jpg",
  description: "Fresh and crunchy guava.",
  stock: 95
},
{
  id: 323,
  name: "Kiwi 3pcs",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 120,
  image: "images/kiwi.jpg",
  description: "Imported fresh kiwi fruits.",
  stock: 50
},
{
  id: 324,
  name: "Strawberry 250g",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 150,
  image: "images/strawberry.jpg",
  description: "Sweet and fresh strawberries.",
  stock: 45
},
{
  id: 325,
  name: "Pear 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 140,
  image: "images/pear.jpg",
  description: "Juicy and sweet pears.",
  stock: 60
},
{
  id: 326,
  name: "Dragon Fruit 1pc",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 110,
  image: "images/dragonfruit.jpg",
  description: "Exotic and nutritious dragon fruit.",
  stock: 40
},
{
  id: 327,
  name: "Muskmelon 1pc",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 70,
  image: "images/muskmelon.jpg",
  description: "Sweet and refreshing muskmelon.",
  stock: 65
},
{
  id: 328,
  name: "Chikoo 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 90,
  image: "images/chikoo.jpg",
  description: "Sweet and soft chikoo.",
  stock: 55
},
{
  id: 329,
  name: "Custard Apple 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 160,
  image: "images/custard-apple.jpg",
  description: "Seasonal and sweet custard apple.",
  stock: 35
},
{
  id: 330,
  name: "Litchi 500g",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 130,
  image: "images/litchi.jpg",
  description: "Fresh and juicy litchi.",
  stock: 50
},
{
  id: 331,
  name: "Sweet Lime (Mosambi) 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Fruits",
  price: 85,
  image: "images/mosambi.jpg",
  description: "Fresh and tangy sweet lime.",
  stock: 80
},


{
  id: 332,
  name: "Potato 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Vegetables",
  price: 30,
  image: "images/potato.jpg",
  description: "Fresh farm potatoes.",
  stock: 200
},
{
  id: 333,
  name: "Onion 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Vegetables",
  price: 35,
  image: "images/onion.jpg",
  description: "Fresh red onions.",
  stock: 180
},
{
  id: 334,
  name: "Tomato 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Vegetables",
  price: 40,
  image: "images/tomato.jpg",
  description: "Fresh and juicy tomatoes.",
  stock: 160
},
{
  id: 335,
  name: "Carrot 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Vegetables",
  price: 50,
  image: "images/carrot.jpg",
  description: "Fresh and crunchy carrots.",
  stock: 120
},
{
  id: 336,
  name: "Cauliflower 1pc",
  category: "Fruits & Vegetables",
  subcategory: "Vegetables",
  price: 45,
  image: "images/cauliflower.jpg",
  description: "Fresh white cauliflower.",
  stock: 90
},
{
  id: 337,
  name: "Cabbage 1pc",
  category: "Fruits & Vegetables",
  subcategory: "Vegetables",
  price: 30,
  image: "images/cabbage.jpg",
  description: "Fresh green cabbage.",
  stock: 100
},
{
  id: 338,
  name: "Brinjal 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Vegetables",
  price: 55,
  image: "images/brinjal.jpg",
  description: "Fresh purple brinjal.",
  stock: 95
},
{
  id: 339,
  name: "Capsicum 500g",
  category: "Fruits & Vegetables",
  subcategory: "Vegetables",
  price: 60,
  image: "images/capsicum.jpg",
  description: "Fresh green capsicum.",
  stock: 85
},
{
  id: 340,
  name: "Lady Finger 500g",
  category: "Fruits & Vegetables",
  subcategory: "Vegetables",
  price: 45,
  image: "images/ladyfinger.jpg",
  description: "Fresh tender bhindi.",
  stock: 90
},
{
  id: 341,
  name: "Bottle Gourd 1pc",
  category: "Fruits & Vegetables",
  subcategory: "Vegetables",
  price: 40,
  image: "images/bottle-gourd.jpg",
  description: "Fresh lauki.",
  stock: 70
},

{
  id: 342,
  name: "Spinach (Palak) 250g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 25,
  image: "images/spinach.jpg",
  description: "Fresh and healthy green spinach leaves.",
  stock: 120
},
{
  id: 343,
  name: "Coriander Leaves 100g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 15,
  image: "images/coriander.jpg",
  description: "Fresh coriander leaves for garnishing.",
  stock: 150
},
{
  id: 344,
  name: "Mint Leaves 100g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 20,
  image: "images/mint.jpg",
  description: "Fresh mint leaves with refreshing aroma.",
  stock: 130
},
{
  id: 345,
  name: "Fenugreek Leaves (Methi) 250g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 30,
  image: "images/methi.jpg",
  description: "Fresh methi leaves rich in nutrients.",
  stock: 90
},
{
  id: 346,
  name: "Green Peas 500g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 60,
  image: "images/green-peas.jpg",
  description: "Fresh and tender green peas.",
  stock: 100
},
{
  id: 347,
  name: "Green Beans 500g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 55,
  image: "images/green-beans.jpg",
  description: "Fresh and crispy green beans.",
  stock: 85
},
{
  id: 348,
  name: "Broccoli 1pc",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 70,
  image: "images/broccoli.jpg",
  description: "Fresh and nutritious broccoli.",
  stock: 60
},
{
  id: 349,
  name: "Green Capsicum 500g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 60,
  image: "images/green-capsicum.jpg",
  description: "Fresh green capsicum rich in flavor.",
  stock: 80
},
{
  id: 350,
  name: "Cucumber 1kg",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 40,
  image: "images/cucumber.jpg",
  description: "Fresh and crunchy cucumbers.",
  stock: 110
},
{
  id: 351,
  name: "Bitter Gourd 500g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 50,
  image: "images/bitter-gourd.jpg",
  description: "Fresh karela rich in nutrients.",
  stock: 75
},
{
  id: 352,
  name: "Ridge Gourd 500g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 45,
  image: "images/ridge-gourd.jpg",
  description: "Fresh and tender turai.",
  stock: 70
},
{
  id: 353,
  name: "Drumstick 250g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 35,
  image: "images/drumstick.jpg",
  description: "Fresh drumsticks perfect for sambar.",
  stock: 60
},
{
  id: 354,
  name: "Spring Onion 250g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 30,
  image: "images/spring-onion.jpg",
  description: "Fresh green spring onions.",
  stock: 95
},
{
  id: 355,
  name: "Cluster Beans 500g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 55,
  image: "images/cluster-beans.jpg",
  description: "Fresh guar beans.",
  stock: 65
},
{
  id: 356,
  name: "Ivy Gourd (Tindora) 500g",
  category: "Fruits & Vegetables",
  subcategory: "Green Vegetables",
  price: 50,
  image: "images/tindora.jpg",
  description: "Fresh tindora for daily cooking.",
  stock: 70
},


{
  id: 357,
  name: "Amul Vanilla Ice Cream 1L",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 180,
  image: "images/amul-vanilla.jpg",
  description: "Classic creamy vanilla ice cream.",
  stock: 60
},
{
  id: 358,
  name: "Amul Chocolate Ice Cream 1L",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 190,
  image: "images/amul-chocolate.jpg",
  description: "Rich and creamy chocolate ice cream.",
  stock: 55
},
{
  id: 359,
  name: "Kwality Walls Cornetto Chocolate",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 45,
  image: "images/cornetto-chocolate.jpg",
  description: "Chocolate cone ice cream with crunchy topping.",
  stock: 100
},
{
  id: 360,
  name: "Kwality Walls Cornetto Butterscotch",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 45,
  image: "images/cornetto-butterscotch.jpg",
  description: "Creamy butterscotch cone ice cream.",
  stock: 95
},
{
  id: 361,
  name: "Mother Dairy Strawberry Ice Cream 1L",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 185,
  image: "images/motherdairy-strawberry.jpg",
  description: "Fresh strawberry flavored ice cream.",
  stock: 50
},
{
  id: 362,
  name: "Vadilal Butterscotch Ice Cream 1L",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 175,
  image: "images/vadilal-butterscotch.jpg",
  description: "Creamy butterscotch with crunchy bits.",
  stock: 45
},
{
  id: 363,
  name: "Havmor Chocolate Chip Ice Cream 1L",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 200,
  image: "images/havmor-chocochip.jpg",
  description: "Loaded with chocolate chips.",
  stock: 40
},
{
  id: 364,
  name: "Amul Rajbhog Ice Cream 1L",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 220,
  image: "images/amul-rajbhog.jpg",
  description: "Traditional rajbhog flavored ice cream.",
  stock: 35
},
{
  id: 365,
  name: "Kwality Walls Magnum Almond",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 90,
  image: "images/magnum-almond.jpg",
  description: "Premium chocolate ice cream with almond coating.",
  stock: 60
},
{
  id: 366,
  name: "Mother Dairy Mango Ice Cream 1L",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 180,
  image: "images/motherdairy-mango.jpg",
  description: "Delicious mango flavored ice cream.",
  stock: 55
},
{
  id: 367,
  name: "Vadilal Cassata Ice Cream",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 60,
  image: "images/vadilal-cassata.jpg",
  description: "Layered cassata with nuts and flavors.",
  stock: 70
},
{
  id: 368,
  name: "Havmor Kulfi Ice Cream",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 50,
  image: "images/havmor-kulfi.jpg",
  description: "Traditional Indian kulfi style ice cream.",
  stock: 80
},
{
  id: 369,
  name: "Amul Fruit n Nut Ice Cream 1L",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 210,
  image: "images/amul-fruitnut.jpg",
  description: "Ice cream loaded with fruits and nuts.",
  stock: 45
},
{
  id: 370,
  name: "Kwality Walls Feast Chocolate Bar",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 40,
  image: "images/feast-bar.jpg",
  description: "Chocolate coated ice cream bar.",
  stock: 100
},
{
  id: 371,
  name: "Mother Dairy Choco Chips Ice Cream 1L",
  category: "Frozen Foods",
  subcategory: "Ice Cream",
  price: 195,
  image: "images/motherdairy-chocochip.jpg",
  description: "Creamy ice cream with chocolate chips.",
  stock: 50
},


{
  id: 372,
  name: "Amul Chocolate Milk Shake 200ml",
  category: "Frozen Foods",
  subcategory: "Shakes",
  price: 30,
  image: "images/amul-choco-shake.jpg",
  description: "Ready-to-drink chocolate milk shake.",
  stock: 120
},
{
  id: 373,
  name: "Amul Strawberry Milk Shake 200ml",
  category: "Frozen Foods",
  subcategory: "Shakes",
  price: 30,
  image: "images/amul-strawberry-shake.jpg",
  description: "Refreshing strawberry flavored milk shake.",
  stock: 110
},
{
  id: 374,
  name: "Mother Dairy Mango Shake 200ml",
  category: "Frozen Foods",
  subcategory: "Shakes",
  price: 28,
  image: "images/motherdairy-mango-shake.jpg",
  description: "Sweet and creamy mango shake.",
  stock: 100
},
{
  id: 375,
  name: "Cavins Chocolate Shake 200ml",
  category: "Frozen Foods",
  subcategory: "Shakes",
  price: 25,
  image: "images/cavins-chocolate.jpg",
  description: "Smooth and tasty chocolate shake.",
  stock: 130
},
{
  id: 376,
  name: "Cavins Vanilla Shake 200ml",
  category: "Frozen Foods",
  subcategory: "Shakes",
  price: 25,
  image: "images/cavins-vanilla.jpg",
  description: "Classic vanilla flavored shake.",
  stock: 120
},
{
  id: 377,
  name: "Amul Kesar Badam Milk 200ml",
  category: "Frozen Foods",
  subcategory: "Shakes",
  price: 35,
  image: "images/amul-kesar.jpg",
  description: "Rich kesar badam flavored milk.",
  stock: 90
},
{
  id: 378,
  name: "Hershey's Chocolate Milk Shake 180ml",
  category: "Frozen Foods",
  subcategory: "Shakes",
  price: 40,
  image: "images/hershey-shake.jpg",
  description: "Premium chocolate flavored shake.",
  stock: 85
},
{
  id: 379,
  name: "Nestle A+ Mango Milk Drink",
  category: "Frozen Foods",
  subcategory: "Shakes",
  price: 32,
  image: "images/nestle-mango.jpg",
  description: "Nutritious mango flavored milk drink.",
  stock: 95
},
{
  id: 380,
  name: "Mother Dairy Banana Shake 200ml",
  category: "Frozen Foods",
  subcategory: "Shakes",
  price: 28,
  image: "images/banana-shake.jpg",
  description: "Creamy banana flavored shake.",
  stock: 105
},
{
  id: 381,
  name: "Cavins Badam Milk 200ml",
  category: "Frozen Foods",
  subcategory: "Shakes",
  price: 30,
  image: "images/cavins-badam.jpg",
  description: "Delicious almond flavored milk drink.",
  stock: 90
},


{
  id: 382,
  name: "Surf Excel Easy Wash 1kg",
  category: "Cleaning Essentials",
  subcategory: "Detergent & Laundry",
  price: 120,
  image: "images/surf-excel.jpg",
  description: "Powerful stain removal detergent powder.",
  stock: 80
},
{
  id: 383,
  name: "Ariel Matic Front Load 1kg",
  category: "Cleaning Essentials",
  subcategory: "Detergent & Laundry",
  price: 210,
  image: "images/ariel-matic.jpg",
  description: "Advanced cleaning for front load machines.",
  stock: 60
},
{
  id: 384,
  name: "Rin Advanced Detergent Powder 1kg",
  category: "Cleaning Essentials",
  subcategory: "Detergent & Laundry",
  price: 95,
  image: "images/rin.jpg",
  description: "Whiter and brighter clothes.",
  stock: 75
},
{
  id: 385,
  name: "Tide Plus Detergent 1kg",
  category: "Cleaning Essentials",
  subcategory: "Detergent & Laundry",
  price: 110,
  image: "images/tide.jpg",
  description: "Removes tough stains easily.",
  stock: 70
},
{
  id: 386,
  name: "Comfort Fabric Conditioner 860ml",
  category: "Cleaning Essentials",
  subcategory: "Detergent & Laundry",
  price: 190,
  image: "images/comfort.jpg",
  description: "Keeps clothes soft and fresh.",
  stock: 55
},

{
  id: 387,
  name: "Harpic Power Plus 500ml",
  category: "Cleaning Essentials",
  subcategory: "Toilet Cleaner",
  price: 95,
  image: "images/harpic.jpg",
  description: "Kills 99.9% germs and removes tough stains.",
  stock: 90
},
{
  id: 388,
  name: "Domex Toilet Cleaner 500ml",
  category: "Cleaning Essentials",
  subcategory: "Toilet Cleaner",
  price: 85,
  image: "images/domex.jpg",
  description: "Powerful toilet disinfectant.",
  stock: 80
},
{
  id: 389,
  name: "Lizol Toilet Cleaner 500ml",
  category: "Cleaning Essentials",
  subcategory: "Toilet Cleaner",
  price: 88,
  image: "images/lizol-toilet.jpg",
  description: "Deep cleans and freshens toilet.",
  stock: 75
},
{
  id: 390,
  name: "Harpic Flushmatic Liquid 50ml",
  category: "Cleaning Essentials",
  subcategory: "Toilet Cleaner",
  price: 60,
  image: "images/flushmatic.jpg",
  description: "Automatic toilet freshener refill.",
  stock: 65
},
{
  id: 391,
  name: "Domex Fresh Guard 500ml",
  category: "Cleaning Essentials",
  subcategory: "Toilet Cleaner",
  price: 92,
  image: "images/domex-fresh.jpg",
  description: "Long lasting toilet freshness.",
  stock: 70
},

{
  id: 392,
  name: "Lizol Citrus Floor Cleaner 1L",
  category: "Cleaning Essentials",
  subcategory: "Floor Cleaner",
  price: 150,
  image: "images/lizol.jpg",
  description: "Kills germs and leaves citrus fragrance.",
  stock: 85
},
{
  id: 393,
  name: "Domex Floor Cleaner 1L",
  category: "Cleaning Essentials",
  subcategory: "Floor Cleaner",
  price: 140,
  image: "images/domex-floor.jpg",
  description: "Effective germ protection for floors.",
  stock: 80
},
{
  id: 394,
  name: "Colin Floor Cleaner 1L",
  category: "Cleaning Essentials",
  subcategory: "Floor Cleaner",
  price: 135,
  image: "images/colin-floor.jpg",
  description: "Shiny and clean floors instantly.",
  stock: 75
},
{
  id: 395,
  name: "Harpic Bathroom Cleaner 500ml",
  category: "Cleaning Essentials",
  subcategory: "Floor Cleaner",
  price: 110,
  image: "images/harpic-bathroom.jpg",
  description: "Removes tough bathroom stains.",
  stock: 65
},
{
  id: 396,
  name: "Lizol Lavender Floor Cleaner 1L",
  category: "Cleaning Essentials",
  subcategory: "Floor Cleaner",
  price: 155,
  image: "images/lizol-lavender.jpg",
  description: "Deep cleans with lavender fragrance.",
  stock: 70
},

{
  id: 397,
  name: "Vim Dishwash Liquid 500ml",
  category: "Cleaning Essentials",
  subcategory: "Dishwash Liquids",
  price: 95,
  image: "images/vim-liquid.jpg",
  description: "Removes grease easily.",
  stock: 100
},
{
  id: 398,
  name: "Pril Dishwash Liquid 500ml",
  category: "Cleaning Essentials",
  subcategory: "Dishwash Liquids",
  price: 105,
  image: "images/pril.jpg",
  description: "Strong grease cutting formula.",
  stock: 90
},
{
  id: 399,
  name: "Exo Dishwash Liquid 500ml",
  category: "Cleaning Essentials",
  subcategory: "Dishwash Liquids",
  price: 85,
  image: "images/exo.jpg",
  description: "Powerful dish cleaning liquid.",
  stock: 95
},
{
  id: 400,
  name: "Vim Lemon Dishwash Liquid 750ml",
  category: "Cleaning Essentials",
  subcategory: "Dishwash Liquids",
  price: 140,
  image: "images/vim-lemon.jpg",
  description: "Lemon freshness with strong cleaning.",
  stock: 85
},
{
  id: 401,
  name: "Pril Lime Dishwash Liquid 750ml",
  category: "Cleaning Essentials",
  subcategory: "Dishwash Liquids",
  price: 145,
  image: "images/pril-lime.jpg",
  description: "Extra shine and grease removal.",
  stock: 80
},
{
  id: 402,
  name: "Exo Anti-Bacterial Dishwash Liquid",
  category: "Cleaning Essentials",
  subcategory: "Dishwash Liquids",
  price: 110,
  image: "images/exo-anti.jpg",
  description: "Kills germs and removes grease.",
  stock: 75
},
{
  id: 403,
  name: "Vim Dishwash Gel 250ml",
  category: "Cleaning Essentials",
  subcategory: "Dishwash Liquids",
  price: 55,
  image: "images/vim-gel.jpg",
  description: "Concentrated gel for tough stains.",
  stock: 120
},

{
  id: 404,
  name: "Almonds (Badam) 250g",
  category: "Dry Fruits",
  subcategory: "Dry Fruits",
  price: 220,
  image: "images/almonds.jpg",
  description: "Premium quality crunchy almonds.",
  stock: 70
},
{
  id: 405,
  name: "Cashew Nuts (Kaju) 250g",
  category: "Dry Fruits",
  subcategory: "Dry Fruits",
  price: 260,
  image: "images/cashew.jpg",
  description: "Fresh and whole cashew nuts.",
  stock: 65
},
{
  id: 406,
  name: "Raisins (Kishmish) 250g",
  category: "Dry Fruits",
  subcategory: "Dry Fruits",
  price: 120,
  image: "images/raisins.jpg",
  description: "Sweet and seedless raisins.",
  stock: 90
},
{
  id: 407,
  name: "Pistachios (Pista) 250g",
  category: "Dry Fruits",
  subcategory: "Dry Fruits",
  price: 300,
  image: "images/pistachio.jpg",
  description: "Premium salted pistachios.",
  stock: 50
},
{
  id: 408,
  name: "Walnuts (Akhrot) 250g",
  category: "Dry Fruits",
  subcategory: "Dry Fruits",
  price: 280,
  image: "images/walnut.jpg",
  description: "High-quality walnut kernels.",
  stock: 55
},
{
  id: 409,
  name: "Dry Dates (Chuhara) 250g",
  category: "Dry Fruits",
  subcategory: "Dry Fruits",
  price: 140,
  image: "images/dry-dates.jpg",
  description: "Naturally sweet dried dates.",
  stock: 75
},
{
  id: 410,
  name: "Anjeer (Dry Fig) 200g",
  category: "Dry Fruits",
  subcategory: "Dry Fruits",
  price: 320,
  image: "images/anjeer.jpg",
  description: "Premium dried figs rich in fiber.",
  stock: 45
},
{
  id: 411,
  name: "Mixed Dry Fruits 250g",
  category: "Dry Fruits",
  subcategory: "Dry Fruits",
  price: 350,
  image: "images/mixed-dryfruits.jpg",
  description: "Assorted mix of premium dry fruits.",
  stock: 60
},
{
  id: 412,
  name: "Black Raisins 250g",
  category: "Dry Fruits",
  subcategory: "Dry Fruits",
  price: 130,
  image: "images/black-raisins.jpg",
  description: "Sweet and juicy black raisins.",
  stock: 70
},
{
  id: 413,
  name: "Mamra Almonds 250g",
  category: "Dry Fruits",
  subcategory: "Dry Fruits",
  price: 420,
  image: "images/mamra-almonds.jpg",
  description: "Premium Mamra almonds rich in nutrients.",
  stock: 35
},

{
  id: 414,
  name: "Peanuts (Moongfali) 500g",
  category: "Dry Fruits",
  subcategory: "Nuts",
  price: 90,
  image: "images/peanuts.jpg",
  description: "Fresh and crunchy peanuts.",
  stock: 120
},
{
  id: 415,
  name: "Salted Peanuts 250g",
  category: "Dry Fruits",
  subcategory: "Nuts",
  price: 110,
  image: "images/salted-peanuts.jpg",
  description: "Roasted and salted peanuts.",
  stock: 100
},
{
  id: 416,
  name: "Roasted Cashews 200g",
  category: "Dry Fruits",
  subcategory: "Nuts",
  price: 280,
  image: "images/roasted-cashew.jpg",
  description: "Crunchy roasted cashew nuts.",
  stock: 60
},
{
  id: 417,
  name: "Roasted Almonds 200g",
  category: "Dry Fruits",
  subcategory: "Nuts",
  price: 240,
  image: "images/roasted-almond.jpg",
  description: "Lightly roasted premium almonds.",
  stock: 65
},
{
  id: 418,
  name: "Salted Pistachios 200g",
  category: "Dry Fruits",
  subcategory: "Nuts",
  price: 320,
  image: "images/salted-pista.jpg",
  description: "Crunchy salted pistachios.",
  stock: 50
},

{
  id: 419,
  name: "MuscleBlaze Whey Protein 1kg",
  category: "Health & Wellness",
  subcategory: "Protein & Vitamin Supplements",
  price: 2499,
  image: "images/muscleblaze-whey.jpg",
  description: "High-quality whey protein for muscle growth and recovery.",
  stock: 40
},
{
  id: 420,
  name: "Optimum Nutrition Whey Protein 1kg",
  category: "Health & Wellness",
  subcategory: "Protein & Vitamin Supplements",
  price: 2899,
  image: "images/on-whey.jpg",
  description: "Premium imported whey protein supplement.",
  stock: 30
},
{
  id: 421,
  name: "Himalaya Multivitamin Tablets",
  category: "Health & Wellness",
  subcategory: "Protein & Vitamin Supplements",
  price: 180,
  image: "images/himalaya-multivitamin.jpg",
  description: "Daily health multivitamin tablets.",
  stock: 100
},
{
  id: 422,
  name: "HealthKart Vitamin C Tablets",
  category: "Health & Wellness",
  subcategory: "Protein & Vitamin Supplements",
  price: 299,
  image: "images/vitamin-c.jpg",
  description: "Boosts immunity with Vitamin C.",
  stock: 85
},
{
  id: 423,
  name: "Revital H Multivitamin Capsules",
  category: "Health & Wellness",
  subcategory: "Protein & Vitamin Supplements",
  price: 350,
  image: "images/revital.jpg",
  description: "Energy and immunity support capsules.",
  stock: 75
},
{
  id: 424,
  name: "Ensure Nutrition Powder 400g",
  category: "Health & Wellness",
  subcategory: "Protein & Vitamin Supplements",
  price: 650,
  image: "images/ensure.jpg",
  description: "Complete balanced nutrition supplement.",
  stock: 60
},
{
  id: 425,
  name: "Horlicks Health Drink 500g",
  category: "Health & Wellness",
  subcategory: "Protein & Vitamin Supplements",
  price: 320,
  image: "images/horlicks.jpg",
  description: "Nutrition drink for overall growth.",
  stock: 90
},
{
  id: 426,
  name: "Protinex Original 400g",
  category: "Health & Wellness",
  subcategory: "Protein & Vitamin Supplements",
  price: 580,
  image: "images/protinex.jpg",
  description: "Protein-rich nutritional supplement.",
  stock: 70
},

{
  id: 427,
  name: "Dabur Chyawanprash 500g",
  category: "Health & Wellness",
  subcategory: "Ayurveda",
  price: 290,
  image: "images/chyawanprash.jpg",
  description: "Traditional Ayurvedic immunity booster.",
  stock: 80
},
{
  id: 428,
  name: "Himalaya Ashwagandha Tablets",
  category: "Health & Wellness",
  subcategory: "Ayurveda",
  price: 210,
  image: "images/ashwagandha.jpg",
  description: "Helps reduce stress and improve stamina.",
  stock: 65
},
{
  id: 429,
  name: "Patanjali Aloe Vera Juice 1L",
  category: "Health & Wellness",
  subcategory: "Ayurveda",
  price: 190,
  image: "images/aloe-vera.jpg",
  description: "Natural aloe vera juice for digestion.",
  stock: 75
},
{
  id: 430,
  name: "Dabur Honey 500g",
  category: "Health & Wellness",
  subcategory: "Ayurveda",
  price: 260,
  image: "images/dabur-honey.jpg",
  description: "Pure and natural honey.",
  stock: 95
},


{
  id: 431,
  name: "Johnson's Baby Soap 75g",
  category: "Health & Wellness",
  subcategory: "Baby Care",
  price: 40,
  image: "images/johnson-soap.jpg",
  description: "Gentle soap for baby's delicate skin.",
  stock: 120
},
{
  id: 432,
  name: "Johnson's Baby Shampoo 200ml",
  category: "Health & Wellness",
  subcategory: "Baby Care",
  price: 140,
  image: "images/johnson-shampoo.jpg",
  description: "No tears gentle baby shampoo.",
  stock: 100
},
{
  id: 433,
  name: "Pampers Baby Diapers (Small Pack)",
  category: "Health & Wellness",
  subcategory: "Baby Care",
  price: 399,
  image: "images/pampers.jpg",
  description: "Soft and comfortable baby diapers.",
  stock: 60
},
{
  id: 434,
  name: "Sebamed Baby Lotion 200ml",
  category: "Health & Wellness",
  subcategory: "Baby Care",
  price: 350,
  image: "images/sebamed-lotion.jpg",
  description: "Moisturizing lotion for baby's skin.",
  stock: 50
},

{
  id: 435,
  name: "Yakult Probiotic Drink (Pack of 5)",
  category: "Health & Wellness",
  subcategory: "Probiotics",
  price: 80,
  image: "images/yakult.jpg",
  description: "Daily probiotic drink for gut health.",
  stock: 100
},
{
  id: 436,
  name: "Darolac Probiotic Sachets",
  category: "Health & Wellness",
  subcategory: "Probiotics",
  price: 120,
  image: "images/darolac.jpg",
  description: "Probiotic supplement for digestive health.",
  stock: 75
},
{
  id: 437,
  name: "Enterogermina Oral Suspension",
  category: "Health & Wellness",
  subcategory: "Probiotics",
  price: 95,
  image: "images/enterogermina.jpg",
  description: "Supports healthy gut flora.",
  stock: 65
},
{
  id: 438,
  name: "Sporlac Probiotic Tablets",
  category: "Health & Wellness",
  subcategory: "Probiotics",
  price: 110,
  image: "images/sporlac.jpg",
  description: "Improves digestion and immunity.",
  stock: 70
},
{
  id: 439,
  name: "Vizylac Probiotic Capsules",
  category: "Health & Wellness",
  subcategory: "Probiotics",
  price: 130,
  image: "images/vizylac.jpg",
  description: "Helps maintain gut health.",
  stock: 60
},

{
  id: 440,
  name: "Cello Butterflow Ball Pen (Blue)",
  category: "Stationery",
  subcategory: "Pen & Pencils",
  price: 10,
  image: "images/cello-pen.jpg",
  description: "Smooth writing blue ink ball pen.",
  stock: 200
},
{
  id: 441,
  name: "Reynolds 045 Ball Pen (Black)",
  category: "Stationery",
  subcategory: "Pen & Pencils",
  price: 8,
  image: "images/reynolds-pen.jpg",
  description: "Classic smooth writing pen.",
  stock: 250
},
{
  id: 442,
  name: "Parker Vector Ball Pen",
  category: "Stationery",
  subcategory: "Pen & Pencils",
  price: 450,
  image: "images/parker-pen.jpg",
  description: "Premium ball pen for professionals.",
  stock: 40
},
{
  id: 443,
  name: "Natraj HB Pencil (Pack of 10)",
  category: "Stationery",
  subcategory: "Pen & Pencils",
  price: 60,
  image: "images/natraj-pencil.jpg",
  description: "High quality HB pencils.",
  stock: 180
},
{
  id: 444,
  name: "Apsara Platinum Pencil (Pack of 10)",
  category: "Stationery",
  subcategory: "Pen & Pencils",
  price: 70,
  image: "images/apsara-pencil.jpg",
  description: "Smooth and dark writing pencils.",
  stock: 150
},
{
  id: 445,
  name: "Pilot V7 Hi-Tecpoint Pen",
  category: "Stationery",
  subcategory: "Pen & Pencils",
  price: 65,
  image: "images/pilot-v7.jpg",
  description: "Fine tip smooth ink pen.",
  stock: 120
},
{
  id: 446,
  name: "Flair Creative Gel Pen",
  category: "Stationery",
  subcategory: "Pen & Pencils",
  price: 15,
  image: "images/flair-gel.jpg",
  description: "Bright and smooth gel pen.",
  stock: 200
},
{
  id: 447,
  name: "Mechanical Pencil 0.5mm",
  category: "Stationery",
  subcategory: "Pen & Pencils",
  price: 45,
  image: "images/mechanical-pencil.jpg",
  description: "Refillable mechanical pencil.",
  stock: 100
},

{
  id: 448,
  name: "Brown Office Envelope (A4)",
  category: "Stationery",
  subcategory: "Envelopes",
  price: 12,
  image: "images/a4-envelope.jpg",
  description: "Standard brown A4 envelope.",
  stock: 300
},
{
  id: 449,
  name: "White Letter Envelope",
  category: "Stationery",
  subcategory: "Envelopes",
  price: 8,
  image: "images/white-envelope.jpg",
  description: "White envelope for letters.",
  stock: 350
},
{
  id: 450,
  name: "Courier Envelope Plastic",
  category: "Stationery",
  subcategory: "Envelopes",
  price: 15,
  image: "images/courier-envelope.jpg",
  description: "Waterproof courier envelope.",
  stock: 250
},
{
  id: 451,
  name: "Window Envelope",
  category: "Stationery",
  subcategory: "Envelopes",
  price: 10,
  image: "images/window-envelope.jpg",
  description: "Envelope with transparent window.",
  stock: 200
},


{
  id: 452,
  name: "Office File Folder",
  category: "Stationery",
  subcategory: "Storage",
  price: 25,
  image: "images/file-folder.jpg",
  description: "Durable plastic file folder.",
  stock: 180
},
{
  id: 453,
  name: "Ring Binder File",
  category: "Stationery",
  subcategory: "Storage",
  price: 120,
  image: "images/ring-binder.jpg",
  description: "A4 size ring binder file.",
  stock: 90
},
{
  id: 454,
  name: "Expanding File Organizer",
  category: "Stationery",
  subcategory: "Storage",
  price: 180,
  image: "images/expanding-file.jpg",
  description: "Multi-pocket file organizer.",
  stock: 75
},
{
  id: 455,
  name: "Document Storage Box",
  category: "Stationery",
  subcategory: "Storage",
  price: 250,
  image: "images/storage-box.jpg",
  description: "Box for storing important documents.",
  stock: 60
},
{
  id: 456,
  name: "Magazine Holder",
  category: "Stationery",
  subcategory: "Storage",
  price: 150,
  image: "images/magazine-holder.jpg",
  description: "Vertical magazine organizer.",
  stock: 70
},
{
  id: 457,
  name: "Plastic Clipboard",
  category: "Stationery",
  subcategory: "Storage",
  price: 40,
  image: "images/clipboard.jpg",
  description: "Strong clipboard with clip.",
  stock: 140
},
{
  id: 458,
  name: "Desk Organizer Tray",
  category: "Stationery",
  subcategory: "Storage",
  price: 220,
  image: "images/desk-organizer.jpg",
  description: "Multi-section desk organizer.",
  stock: 50
}


];

