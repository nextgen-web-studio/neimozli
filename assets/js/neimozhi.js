// Product Catalog Data
const PRODUCT_CATALOG = {
  'cow-ghee': {
    id: 'cow-ghee',
    name: 'Classic Uthukuli Cow Ghee',
    category: 'ghee',
    description: 'Traditional golden ghee crafted from pure local cow\'s milk. Known for its rich grainy texture and classic aroma.',
    longDescription: 'NeiMozhi Classic Cow Ghee is slow-cooked to perfection in small batches. Made from butter churned out of raw milk gathered from local farms in Uthukuli. We observe the traditional heating process where butter is heated slowly until the solids caramelize, leaving behind pure golden liquid gold that crystallizes into beautiful, grainy textured ghee. Rich in short-chain fatty acids and fat-soluble vitamins.',
    ingredients: '100% Pure Cow Milk Fat.',
    shelfLife: '9 Months from packaging. Store in a cool, dry pantry in our glass jar.',
    specifications: {
      'Source': 'Grass-fed local cow breeds',
      'Churn Method': 'Traditional churner',
      'Texture': 'Richly granular/grainy',
      'Additive': 'None (100% Preservative Free)',
    },
    images: [
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'><rect width='600' height='600' fill='%23FAF6EB'/><rect x='200' y='230' width='200' height='140' rx='14' fill='none' stroke='%23C59B27' stroke-width='2' stroke-dasharray='8,4'/><text x='300' y='210' font-family='serif' font-size='16' fill='%23C59B27' text-anchor='middle'>Image Coming Soon</text><text x='300' y='285' font-size='40' text-anchor='middle'>📷</text><text x='300' y='345' font-family='sans-serif' font-size='11' fill='%23888' text-anchor='middle'>Classic Uthukuli Cow Ghee</text></svg>",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'><rect width='600' height='600' fill='%23FAF6EB'/><rect x='200' y='230' width='200' height='140' rx='14' fill='none' stroke='%23C59B27' stroke-width='2' stroke-dasharray='8,4'/><text x='300' y='210' font-family='serif' font-size='16' fill='%23C59B27' text-anchor='middle'>Image Coming Soon</text><text x='300' y='285' font-size='40' text-anchor='middle'>📷</text><text x='300' y='345' font-family='sans-serif' font-size='11' fill='%23888' text-anchor='middle'>Classic Uthukuli Cow Ghee</text></svg>",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'><rect width='600' height='600' fill='%23FAF6EB'/><rect x='200' y='230' width='200' height='140' rx='14' fill='none' stroke='%23C59B27' stroke-width='2' stroke-dasharray='8,4'/><text x='300' y='210' font-family='serif' font-size='16' fill='%23C59B27' text-anchor='middle'>Image Coming Soon</text><text x='300' y='285' font-size='40' text-anchor='middle'>📷</text><text x='300' y='345' font-family='sans-serif' font-size='11' fill='%23888' text-anchor='middle'>Classic Uthukuli Cow Ghee</text></svg>"
    ],
    variants: {
      '250g': 350,
      '500g': 650,
      '1kg': 1200
    },
    bestSeller: true
  },
  'pure-butter': {
    id: 'pure-butter',
    name: 'Homemade Uthukuli Butter',
    category: 'butter',
    description: 'Creamy, fresh unsalted butter churned locally. Rich in natural flavor, perfect for cooking or spreading.',
    longDescription: 'Our Homemade Uthukuli Butter is prepared directly from fresh dairy cream without any added salt, pigments, or stabilizers. It represents the authentic taste of dairy farm butter: mild, creamy, and high in melting point. Prepared freshly by order, it maintains its freshness and makes excellent homemade ghee if heated at home.',
    ingredients: 'Pasteurized fresh cream (Cow milk).',
    shelfLife: '3 Months. Must be stored in refrigeration immediately.',
    specifications: {
      'Type': 'Unsalted butter',
      'Fat content': 'Min 82%',
      'Preparation': 'Daily fresh churned',
      'Salt': '0% Salt added',
    },
    images: [
      'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1596151163116-f848f07cd154?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1538154593044-ee7c162813b8?auto=format&fit=crop&w=600&q=80'
    ],
    variants: {
      '250g': 250,
      '500g': 450,
      '1kg': 850
    },
    bestSeller: false
  },
  'buffalo-ghee': {
    id: 'buffalo-ghee',
    name: 'Pure Buffalo Ghee',
    category: 'ghee',
    description: 'Aromatic, slow-cooked white buffalo ghee. Perfect texture and highly nutritious with a classic local taste.',
    longDescription: 'NeiMozhi Buffalo Ghee is crafted from high-fat buffalo milk, giving it a distinctive pure white to pale yellow color and a robust, savory aroma. It is slowly melted and clarified in traditional iron pans which gives it a rich, heavy flavor profile that enhances regular cooking and dessert preparation alike.',
    ingredients: '100% Pure Buffalo Milk Fat.',
    shelfLife: '9 Months from packaging. Store dry.',
    specifications: {
      'Source': 'Grass-fed local buffaloes',
      'Color': 'Pure ivory white',
      'Flavor': 'Robust, savory, and deep',
      'Purity': '100% Pure & lab tested',
    },
    images: [
      'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1546464033-5b15cf1168f1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80'
    ],
    variants: {
      '250g': 380,
      '500g': 700,
      '1kg': 1300
    },
    bestSeller: true
  },
  'bilona-ghee': {
    id: 'bilona-ghee',
    name: 'A2 Bilona Cow Ghee',
    category: 'ghee',
    description: 'Premium A2 cow ghee prepared using the Vedic Bilona method. Hand-churned from curd, nutrient-dense.',
    longDescription: 'Our A2 Bilona Ghee is prepared strictly following the ancient Vedic process. Milk from native breeds is converted to curd, and then bi-directionally hand-churned (Bilona churn) to isolate butter. This butter is melted on wood fires to make ghee. Retains vitamins, CLA, and butyric acid.',
    ingredients: '100% Pure A2 Cow Milk Curd Fat.',
    shelfLife: '12 Months from packaging. Store dry.',
    specifications: {
      'Source': 'Native Kangayam A2 Cow breed',
      'Process': 'Vedic Bilona (Curd-churned)',
      'Melting Fire': 'Wood-fired slow heating',
      'Nutrients': 'High in CLA and Omega-3',
    },
    images: [
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'><rect width='600' height='600' fill='%23FAF6EB'/><rect x='220' y='240' width='160' height='120' rx='12' fill='none' stroke='%23C59B27' stroke-width='2' stroke-dasharray='8,4'/><text x='300' y='220' font-family='serif' font-size='16' fill='%23C59B27' text-anchor='middle'>Image Coming Soon</text><text x='300' y='290' font-size='36' text-anchor='middle'>📷</text><text x='300' y='340' font-family='sans-serif' font-size='11' fill='%23888' text-anchor='middle'>A2 Bilona Cow Ghee</text></svg>",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'><rect width='600' height='600' fill='%23FAF6EB'/><rect x='220' y='240' width='160' height='120' rx='12' fill='none' stroke='%23C59B27' stroke-width='2' stroke-dasharray='8,4'/><text x='300' y='220' font-family='serif' font-size='16' fill='%23C59B27' text-anchor='middle'>Image Coming Soon</text><text x='300' y='290' font-size='36' text-anchor='middle'>📷</text><text x='300' y='340' font-family='sans-serif' font-size='11' fill='%23888' text-anchor='middle'>A2 Bilona Cow Ghee</text></svg>",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'><rect width='600' height='600' fill='%23FAF6EB'/><rect x='220' y='240' width='160' height='120' rx='12' fill='none' stroke='%23C59B27' stroke-width='2' stroke-dasharray='8,4'/><text x='300' y='220' font-family='serif' font-size='16' fill='%23C59B27' text-anchor='middle'>Image Coming Soon</text><text x='300' y='290' font-size='36' text-anchor='middle'>📷</text><text x='300' y='340' font-family='sans-serif' font-size='11' fill='%23888' text-anchor='middle'>A2 Bilona Cow Ghee</text></svg>"
    ],
    variants: {
      '250g': 550,
      '500g': 1000,
      '1kg': 1900
    },
    bestSeller: true
  }
};

// Global App State
let cart = [];
let orders = [];

// Initialize LocalStorage Data
function loadState() {
  const savedCart = localStorage.getItem('neimozhi_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
  const savedOrders = localStorage.getItem('neimozhi_orders');
  if (savedOrders) {
    orders = JSON.parse(savedOrders);
  }
  updateCartBadge();
}

function saveCart() {
  localStorage.setItem('neimozhi_cart', JSON.stringify(cart));
  updateCartBadge();
}

function saveOrders() {
  localStorage.setItem('neimozhi_orders', JSON.stringify(orders));
}

// Update Cart Badge Element
function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  badges.forEach(badge => {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

// Success Alert Toast
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'bg-brand-dark text-white px-6 py-3.5 rounded-2xl shadow-xl flex items-center justify-between gap-4 text-xs font-semibold animate-bounce shadow-amber-500/10 border border-brand-gold/20';
  toast.innerHTML = `
    <div class="flex items-center gap-2">
      <i class="fa-solid fa-circle-check text-emerald-400 text-lg"></i>
      <span>${message}</span>
    </div>
    <a href="#cart" class="text-brand-gold hover:text-brand-goldLight underline uppercase tracking-wider text-[10px]">View Cart</a>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Router Control logic
function handleRoute() {
  const hash = window.location.hash || '#home';
  const parts = hash.split('/');
  const route = parts[0];
  const param = parts[1] || null;

  // Hide all views
  document.querySelectorAll('.view-section').forEach(view => {
    view.classList.remove('active');
  });

  // Scroll to top on route change
  window.scrollTo(0, 0);

  // Show active view and render data
  if (route === '#home') {
    document.getElementById('view-home').classList.add('active');
    renderHome();
  } else if (route === '#products') {
    document.getElementById('view-products').classList.add('active');
    renderProducts();
  } else if (route === '#product-details' && param) {
    document.getElementById('view-product-details').classList.add('active');
    renderProductDetails(param);
  } else if (route === '#cart') {
    document.getElementById('view-cart').classList.add('active');
    renderCart();
  } else if (route === '#checkout') {
    document.getElementById('view-checkout').classList.add('active');
    renderCheckout();
  } else if (route === '#order-confirmation' && param) {
    document.getElementById('view-order-confirmation').classList.add('active');
    renderOrderConfirmation(param);
  } else if (route === '#order-history') {
    document.getElementById('view-order-history').classList.add('active');
    renderOrderHistory();
  } else {
    // Default to home
    document.getElementById('view-home').classList.add('active');
    renderHome();
  }

  // Active state styling for navigation links
  document.querySelectorAll('header nav a').forEach(link => {
    const linkHash = link.getAttribute('href');
    if (linkHash === route) {
      link.classList.add('text-brand-gold');
      link.classList.remove('text-brand-dark');
    } else {
      link.classList.remove('text-brand-gold');
      link.classList.add('text-brand-dark');
    }
  });
}

// View: HOME
function renderHome() {
  // Render Best Sellers
  const container = document.getElementById('featured-grid');
  if (!container) return;

  container.innerHTML = '';
  
  Object.values(PRODUCT_CATALOG).forEach(product => {
    const defaultWeight = Object.keys(product.variants)[0];
    const defaultPrice = product.variants[defaultWeight];
    
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-gold/10 hover:shadow-xl transition-all duration-300 flex flex-col group h-full justify-between';
    card.innerHTML = `
      <div class="aspect-square w-full overflow-hidden bg-brand-light relative zoom-img-container">
        <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover zoom-img">
        ${product.bestSeller ? `
          <div class="absolute top-2 right-2 sm:top-3 sm:right-3 bg-brand-cream/90 backdrop-blur-sm text-brand-goldDark text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-brand-gold/20">
            <i class="fa-solid fa-crown text-[7px] sm:text-[8px] mr-1"></i> Best Seller
          </div>
        ` : ''}
      </div>
      <div class="p-3 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="font-serif text-sm sm:text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-gold transition-colors line-clamp-2 h-10 sm:h-14 flex items-center leading-tight">${product.name}</h3>
          <p class="text-[10px] sm:text-xs text-slate-500 mb-3 line-clamp-2 leading-relaxed">${product.description}</p>
          <div class="hidden sm:flex justify-between items-center text-xs text-slate-400 mb-4 border-b border-brand-light pb-3">
            <span>Ingredients: <strong class="text-brand-dark font-medium">${product.ingredients.split('.')[0]}</strong></span>
          </div>
        </div>
        <div>
          <div class="flex justify-between items-center mb-3 sm:mb-4">
            <div>
              <span class="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider text-slate-400">Starting from</span>
              <div class="text-sm sm:text-xl font-serif font-bold text-brand-dark">₹${defaultPrice}</div>
            </div>
            <a href="#product-details/${product.id}" class="text-[8px] sm:text-[10px] uppercase font-bold tracking-widest text-brand-gold hover:text-brand-goldDark flex items-center gap-1 transition-colors">
              Details <i class="fa-solid fa-chevron-right text-[6px] sm:text-[8px]"></i>
            </a>
          </div>
          <div class="flex gap-2">
            <button onclick="quickAddToCart('${product.id}', '${defaultWeight}')" class="flex-1 border border-brand-forest hover:bg-brand-light text-brand-forest py-2 rounded-lg sm:rounded-xl font-bold uppercase tracking-wider text-[8px] sm:text-[10px] flex items-center justify-center gap-1.5 transition-colors">
              Add
            </button>
            <button onclick="buyNow('${product.id}', '${defaultWeight}')" class="flex-1 bg-brand-forest hover:bg-brand-dark text-white py-2 rounded-lg sm:rounded-xl font-bold uppercase tracking-wider text-[8px] sm:text-[10px] flex items-center justify-center gap-1.5 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// View: PRODUCTS
function renderProducts() {
  const container = document.getElementById('products-grid-view');
  if (!container) return;

  container.innerHTML = '';
  
  Object.values(PRODUCT_CATALOG).forEach(product => {
    const defaultWeight = Object.keys(product.variants)[0];
    const defaultPrice = product.variants[defaultWeight];

    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-gold/10 hover:shadow-xl transition-all duration-300 flex flex-col group h-full justify-between';
    card.innerHTML = `
      <div class="aspect-square w-full overflow-hidden bg-brand-light relative zoom-img-container">
        <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover zoom-img">
        <div class="absolute top-2 right-2 bg-brand-cream/90 backdrop-blur-sm text-brand-goldDark text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-brand-gold/20">
          ${product.category}
        </div>
      </div>
      <div class="p-3 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="font-serif text-sm sm:text-2xl font-bold text-brand-dark mb-1 group-hover:text-brand-gold transition-colors line-clamp-2 h-10 sm:h-16 flex items-center leading-tight">${product.name}</h3>
          <p class="hidden sm:block text-xs text-slate-500 mb-4 leading-relaxed">${product.description}</p>
          
          <div class="hidden sm:block border-t border-b border-brand-gold/10 py-3 mb-4">
            <div class="flex justify-between text-xs text-slate-500 mb-1">
              <span>Ingredients:</span>
              <span class="font-semibold text-brand-dark">${product.ingredients}</span>
            </div>
            <div class="flex justify-between text-xs text-slate-500">
              <span>Shelf Life:</span>
              <span class="font-semibold text-brand-dark">${product.shelfLife.split('.')[0]}</span>
            </div>
          </div>

          <!-- Custom Selector inside Card -->
          <div class="mb-4" id="select-panel-${product.id}">
            <span class="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-slate-400 block mb-1.5">Choose weight:</span>
            <div class="flex gap-1 sm:gap-2">
              ${Object.keys(product.variants).map((wt, idx) => `
                <button onclick="selectProductCardVariant('${product.id}', '${wt}')" class="weight-btn-${product.id} ${idx === 0 ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-800'} text-[10px] sm:text-xs font-bold py-1 px-2 sm:py-1.5 sm:px-3 rounded-lg transition-colors" data-variant="${wt}">
                  ${wt}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div>
          <div class="flex justify-between items-center mb-3 sm:mb-4 pt-2 border-t border-brand-light">
            <div>
              <span class="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-slate-400">Total Price</span>
              <div class="text-base sm:text-2xl font-serif font-bold text-brand-dark" id="price-card-${product.id}">₹${defaultPrice}</div>
            </div>
            
            <a href="#product-details/${product.id}" class="text-[8px] sm:text-[10px] uppercase font-bold tracking-widest text-brand-gold hover:text-brand-goldDark flex items-center gap-1 transition-colors">
              Details <i class="fa-solid fa-arrow-right text-[6px] sm:text-[8px]"></i>
            </a>
          </div>

          <div class="flex gap-2">
            <button onclick="addSelectedCardToCart('${product.id}')" class="flex-1 border border-brand-forest hover:bg-brand-light text-brand-forest py-2 rounded-lg sm:rounded-xl font-bold uppercase tracking-wider text-[8px] sm:text-[10px] flex items-center justify-center gap-1.5 transition-colors">
              Add
            </button>
            <button onclick="buyNowFromCard('${product.id}')" class="flex-1 bg-brand-forest hover:bg-brand-dark text-white py-2 rounded-lg sm:rounded-xl font-bold uppercase tracking-wider text-[8px] sm:text-[10px] flex items-center justify-center gap-1.5 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Track temporary card selections
const cardSelections = {};
function selectProductCardVariant(productId, weight) {
  const product = PRODUCT_CATALOG[productId];
  if (!product) return;

  // Save selection
  cardSelections[productId] = weight;

  // Toggle button classes
  const panel = document.getElementById(`select-panel-${productId}`);
  const buttons = panel.querySelectorAll('button');
  buttons.forEach(btn => {
    const v = btn.getAttribute('data-variant');
    if (v === weight) {
      btn.className = `weight-btn-${productId} bg-amber-600 text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors`;
    } else {
      btn.className = `weight-btn-${productId} bg-amber-50 text-amber-800 hover:bg-amber-100 text-xs font-bold py-1.5 px-3 rounded-lg transition-colors`;
    }
  });

  // Update Price Display
  const priceDisplay = document.getElementById(`price-card-${productId}`);
  if (priceDisplay) {
    priceDisplay.textContent = `₹${product.variants[weight]}`;
  }
}

function addSelectedCardToCart(productId) {
  const selectedWeight = cardSelections[productId] || Object.keys(PRODUCT_CATALOG[productId].variants)[0];
  quickAddToCart(productId, selectedWeight);
}

// View: PRODUCT DETAILS
let detailsSelectedWeight = '';
let detailsQuantity = 1;

function renderProductDetails(productId) {
  const product = PRODUCT_CATALOG[productId];
  const container = document.getElementById('product-details-content');
  if (!container || !product) return;

  // Reset states
  detailsSelectedWeight = Object.keys(product.variants)[0];
  detailsQuantity = 1;

  container.innerHTML = `
    <!-- Back to store button -->
    <div class="mb-6 sm:mb-8">
      <a href="#products" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-dark transition-colors">
        <i class="fa-solid fa-arrow-left-long text-sm"></i> Back to product listing
      </a>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
      
      <!-- Product Gallery -->
      <div class="lg:col-span-6">
        <!-- Mobile: main image on top, thumbnails below -->
        <div class="block lg:hidden">
          <div class="rounded-3xl overflow-hidden aspect-square bg-white border border-brand-gold/10 shadow-lg glow-gold mb-4">
            <img id="details-main-img-mobile" src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover">
          </div>
          <div class="flex gap-3 overflow-x-auto pb-2">
            ${product.images.map((img, index) => {
              const cleanedImg = img.replace(/'/g, "\\'");
              return `
                <button onclick="switchDetailsImage('${cleanedImg}', this)" class="thumbnail-btn flex-shrink-0 border-2 ${index === 0 ? 'border-brand-gold' : 'border-transparent'} rounded-xl overflow-hidden w-16 h-16 bg-white shadow-sm transition-all duration-200">
                  <img src="${img}" class="w-full h-full object-cover">
                </button>
              `;
            }).join('')}
          </div>
        </div>
        <!-- Desktop: side-by-side thumbnails + main image -->
        <div class="hidden lg:grid grid-cols-12 gap-4">
          <div class="col-span-2 flex flex-col gap-3">
            ${product.images.map((img, index) => {
              const cleanedImg = img.replace(/'/g, "\\'");
              return `
                <button onclick="switchDetailsImage('${cleanedImg}', this)" class="thumbnail-btn border-2 ${index === 0 ? 'border-brand-gold' : 'border-transparent'} rounded-xl overflow-hidden aspect-square bg-white shadow-sm transition-all duration-200">
                  <img src="${img}" class="w-full h-full object-cover">
                </button>
              `;
            }).join('')}
          </div>
          <div class="col-span-10">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] bg-white border border-brand-gold/10 shadow-lg relative glow-gold">
              <img id="details-main-img" src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </div>

      <!-- Product Information -->
      <div class="lg:col-span-6 flex flex-col items-start">
        <span class="text-brand-gold font-semibold uppercase tracking-widest text-[10px] mb-2">${product.category}</span>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-3 leading-tight">${product.name}</h2>
        
        <!-- Review Stars -->
        <div class="flex items-center gap-2 mb-5">
          <div class="flex text-amber-400 text-xs">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <span class="text-xs text-slate-400">(48 verified reviews)</span>
        </div>

        <p class="text-slate-600 text-sm leading-relaxed mb-5">${product.longDescription}</p>

        <!-- Variant + Qty -->
        <div class="w-full border-t border-b border-brand-gold/10 py-5 mb-5">
          <div class="mb-4">
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-3">Choose Pack Weight:</span>
            <div class="flex flex-wrap gap-2 sm:gap-3">
              ${Object.keys(product.variants).map((wt, index) => `
                <button onclick="selectDetailsVariant('${productId}', '${wt}', this)" class="details-variant-btn px-4 sm:px-6 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 ${index === 0 ? 'bg-amber-600 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}" data-variant="${wt}">
                  ${wt}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="flex items-center justify-between mt-5">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1">Total Amount</span>
              <div id="details-price-display" class="text-3xl font-serif font-bold text-brand-dark">₹${product.variants[detailsSelectedWeight]}</div>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-2">Quantity</span>
              <div class="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <button onclick="adjustDetailsQty(-1, '${productId}')" class="w-10 h-10 font-bold text-slate-500 hover:bg-slate-50 transition-colors flex items-center justify-center">-</button>
                <span id="details-qty-val" class="px-4 font-bold text-brand-dark text-sm">1</span>
                <button onclick="adjustDetailsQty(1, '${productId}')" class="w-10 h-10 font-bold text-slate-500 hover:bg-slate-50 transition-colors flex items-center justify-center">+</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="w-full flex flex-col sm:flex-row gap-3">
          <button onclick="addDetailsToCart('${productId}')" class="flex-1 bg-brand-light border border-brand-gold/30 hover:bg-brand-gold hover:text-white text-brand-dark py-3.5 rounded-2xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all duration-300">
            <i class="fa-solid fa-basket-shopping"></i> Add to Cart
          </button>
          <button onclick="buyNowDetails('${productId}')" class="flex-1 bg-brand-forest hover:bg-brand-dark text-white py-3.5 rounded-2xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md">
            <i class="fa-solid fa-bolt"></i> Buy Now
          </button>
        </div>

        <!-- Razorpay trust badge -->
        <div class="flex items-center gap-2 mt-3">
          <i class="fa-solid fa-lock text-[10px] text-slate-400"></i>
          <span class="text-[10px] text-slate-400">Secured by Razorpay &bull; 100% safe checkout</span>
        </div>

        <!-- Accordion details -->
        <div class="w-full mt-8 space-y-3">
          <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            <button onclick="toggleDetailsAccordion(this)" class="w-full text-left py-4 px-5 font-serif text-base sm:text-lg font-bold text-brand-dark flex justify-between items-center hover:bg-slate-50">
              <span>Product Specifications</span>
              <i class="fa-solid fa-chevron-down text-xs text-brand-gold transition-transform"></i>
            </button>
            <div class="accordion-content hidden p-5 border-t border-slate-100 text-xs text-slate-600 bg-slate-50/50">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${Object.entries(product.specifications).map(([key, val]) => `
                  <div>
                    <span class="text-slate-400 block uppercase text-[9px] tracking-wider font-bold">${key}</span>
                    <span class="text-brand-dark font-medium">${val}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            <button onclick="toggleDetailsAccordion(this)" class="w-full text-left py-4 px-5 font-serif text-base sm:text-lg font-bold text-brand-dark flex justify-between items-center hover:bg-slate-50">
              <span>Ingredients</span>
              <i class="fa-solid fa-chevron-down text-xs text-brand-gold transition-transform"></i>
            </button>
            <div class="accordion-content hidden p-5 border-t border-slate-100 text-xs text-slate-600 bg-slate-50/50">
              <p class="leading-relaxed font-medium text-brand-dark">${product.ingredients}</p>
            </div>
          </div>

          <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            <button onclick="toggleDetailsAccordion(this)" class="w-full text-left py-4 px-5 font-serif text-base sm:text-lg font-bold text-brand-dark flex justify-between items-center hover:bg-slate-50">
              <span>Shelf Life &amp; Storage</span>
              <i class="fa-solid fa-chevron-down text-xs text-brand-gold transition-transform"></i>
            </button>
            <div class="accordion-content hidden p-5 border-t border-slate-100 text-xs text-slate-600 bg-slate-50/50">
              <p class="leading-relaxed text-slate-600">${product.shelfLife}</p>
            </div>
          </div>

          <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            <button onclick="toggleDetailsAccordion(this)" class="w-full text-left py-4 px-5 font-serif text-base sm:text-lg font-bold text-brand-dark flex justify-between items-center hover:bg-slate-50">
              <span>Delivery &amp; Shipping Info</span>
              <i class="fa-solid fa-chevron-down text-xs text-brand-gold transition-transform"></i>
            </button>
            <div class="accordion-content hidden p-5 border-t border-slate-100 text-xs text-slate-600 bg-slate-50/50">
              <p class="leading-relaxed text-slate-600 mb-2">We prepare all butter and ghee fresh by order. Preparation time takes 1-2 days.</p>
              <p class="leading-relaxed text-slate-600"><strong>Pan India Shipping:</strong> Takes 3-5 working days. Free shipping for orders weighing 1kg and above! Flat ₹80 for smaller packages.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}


// Product Details helpers
function switchDetailsImage(src, btnEl) {
  const mainImg = document.getElementById('details-main-img');
  if (mainImg) mainImg.setAttribute('src', src);
  const mainImgMobile = document.getElementById('details-main-img-mobile');
  if (mainImgMobile) mainImgMobile.setAttribute('src', src);
  document.querySelectorAll('.thumbnail-btn').forEach(btn => {
    btn.classList.add('border-transparent');
    btn.classList.remove('border-brand-gold');
  });
  btnEl.classList.remove('border-transparent');
  btnEl.classList.add('border-brand-gold');
}

function selectDetailsVariant(productId, weight, btnEl) {
  detailsSelectedWeight = weight;
  document.querySelectorAll('.details-variant-btn').forEach(btn => {
    btn.className = 'details-variant-btn px-6 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 bg-white border border-slate-200 text-slate-700 hover:bg-slate-55';
  });
  btnEl.className = 'details-variant-btn px-6 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 bg-amber-600 text-white shadow-md';
  
  updateDetailsPrice(productId);
}

function adjustDetailsQty(val, productId) {
  if (detailsQuantity + val >= 1 && detailsQuantity + val <= 10) {
    detailsQuantity += val;
    document.getElementById('details-qty-val').textContent = detailsQuantity;
    updateDetailsPrice(productId);
  }
}

function updateDetailsPrice(productId) {
  const product = PRODUCT_CATALOG[productId];
  const unitPrice = product.variants[detailsSelectedWeight];
  const total = unitPrice * detailsQuantity;
  document.getElementById('details-price-display').textContent = `₹${total}`;
}

function toggleDetailsAccordion(btn) {
  const panel = btn.nextElementSibling;
  const icon = btn.querySelector('i');
  
  const isOpen = !panel.classList.contains('hidden');
  
  // Close all in this parent
  btn.closest('.space-y-3').querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
  btn.closest('.space-y-3').querySelectorAll('button i').forEach(i => i.style.transform = 'rotate(0deg)');

  if (!isOpen) {
    panel.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  }
}

function addDetailsToCart(productId) {
  const product = PRODUCT_CATALOG[productId];
  addToCart(productId, product.name, detailsSelectedWeight, product.variants[detailsSelectedWeight], detailsQuantity, product.images[0]);
}

function buyNowDetails(productId) {
  addDetailsToCart(productId);
  window.location.hash = '#checkout';
}

// Shared Cart Operations
function quickAddToCart(productId, weight) {
  const product = PRODUCT_CATALOG[productId];
  addToCart(productId, product.name, weight, product.variants[weight], 1, product.images[0]);
}

function addToCart(id, name, weight, price, quantity, image) {
  const existingIdx = cart.findIndex(item => item.id === id && item.weight === weight);
  if (existingIdx > -1) {
    cart[existingIdx].quantity += quantity;
  } else {
    cart.push({ id, name, weight, price, quantity, image });
  }
  saveCart();
  showToast(`Added ${quantity}x ${name} (${weight}) to Cart!`);
}

// View: SHOPPING CART
function renderCart() {
  const container = document.getElementById('cart-items-container');
  const summary = document.getElementById('cart-summary-card');
  if (!container || !summary) return;

  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 bg-white rounded-3xl border border-brand-gold/10 p-8 glow-gold">
        <i class="fa-solid fa-basket-shopping text-5xl text-amber-200 mb-4 block"></i>
        <h3 class="font-serif text-2xl font-bold text-brand-dark mb-2">Your Shopping Cart is Empty</h3>
        <p class="text-xs text-slate-400 mb-8 max-w-sm mx-auto">Looks like you haven't added any fresh ghee or butter to your cart yet. Explore our fresh collections!</p>
        <a href="#products" class="inline-block bg-brand-forest hover:bg-brand-dark text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs shadow-md transition-colors">
          Browse Products
        </a>
      </div>
    `;
    summary.innerHTML = `
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm opacity-50 pointer-events-none">
        <h3 class="font-serif text-xl font-bold mb-4">Order Summary</h3>
        <p class="text-xs text-slate-400">Cart is empty</p>
      </div>
    `;
    return;
  }

  // Render items
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    const row = document.createElement('div');
    row.className = 'bg-white p-6 rounded-3xl border border-slate-150 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6';
    row.innerHTML = `
      <div class="flex items-center gap-4 w-full sm:w-auto">
        <div class="h-20 w-20 rounded-2xl overflow-hidden bg-brand-light border border-slate-100 flex-shrink-0">
          <img src="${item.image}" class="w-full h-full object-cover">
        </div>
        <div>
          <h4 class="font-serif text-lg font-bold text-brand-dark">${item.name}</h4>
          <span class="inline-block bg-amber-50 text-amber-800 text-[10px] font-bold uppercase px-2 py-0.5 rounded-md mt-1 border border-brand-gold/15">${item.weight}</span>
          <div class="text-xs text-slate-400 mt-1">₹${item.price} per pack</div>
        </div>
      </div>

      <div class="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto">
        <!-- Quantity control -->
        <div class="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
          <button onclick="adjustCartItemQty(${index}, -1)" class="px-2.5 py-1 font-bold text-slate-500 hover:bg-slate-50 transition-colors">-</button>
          <span class="px-3.5 font-bold text-brand-dark text-xs">${item.quantity}</span>
          <button onclick="adjustCartItemQty(${index}, 1)" class="px-2.5 py-1 font-bold text-slate-500 hover:bg-slate-50 transition-colors">+</button>
        </div>

        <!-- Total Price -->
        <div class="text-right">
          <span class="text-[9px] uppercase font-bold tracking-widest text-slate-400 block">Subtotal</span>
          <span class="font-bold text-brand-dark text-lg">₹${itemTotal}</span>
        </div>

        <!-- Delete button -->
        <button onclick="removeCartItem(${index})" class="text-slate-400 hover:text-red-500 p-2 transition-colors" aria-label="Remove item">
          <i class="fa-regular fa-trash-can text-lg"></i>
        </button>
      </div>
    `;
    container.appendChild(row);
  });

  // Render Order Summary
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Free delivery logic: if weight total is 1kg or above, free shipping. 
  // Let's count approximate weight.
  let totalWeightGrams = 0;
  cart.forEach(item => {
    let wt = item.weight.toLowerCase();
    let qty = item.quantity;
    if (wt.includes('kg')) {
      totalWeightGrams += parseFloat(wt) * 1000 * qty;
    } else {
      totalWeightGrams += parseFloat(wt) * qty;
    }
  });

  const deliveryCharge = totalWeightGrams >= 1000 ? 0 : 80;
  const grandTotal = subtotal + deliveryCharge;

  summary.innerHTML = `
    <div class="bg-white p-8 rounded-3xl border border-brand-gold/10 glow-gold shadow-md">
      <h3 class="font-serif text-2xl font-bold text-brand-dark mb-6 pb-4 border-b border-brand-light">Order Summary</h3>
      
      <div class="space-y-4 mb-6">
        <div class="flex justify-between text-xs text-slate-600">
          <span>Subtotal (${cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
          <span class="font-semibold text-brand-dark">₹${subtotal}</span>
        </div>
        <div class="flex justify-between text-xs text-slate-600">
          <span>Delivery Charge</span>
          ${deliveryCharge === 0 ? `
            <span class="font-semibold text-emerald-600">FREE <span class="text-[9px] text-slate-400 line-through">₹80</span></span>
          ` : `
            <span class="font-semibold text-brand-dark">₹${deliveryCharge}</span>
          `}
        </div>
        
        ${deliveryCharge > 0 ? `
          <div class="bg-amber-50 text-amber-800 p-3 rounded-xl border border-amber-100 text-[10px] leading-relaxed">
            <i class="fa-solid fa-circle-info mr-1"></i> Add <strong>${1000 - totalWeightGrams}g</strong> more products to unlock <strong>FREE Delivery</strong>! (Current: ${totalWeightGrams}g)
          </div>
        ` : `
          <div class="bg-emerald-50 text-emerald-800 p-3 rounded-xl border border-emerald-100 text-[10px] leading-relaxed">
            <i class="fa-solid fa-circle-check mr-1"></i> You unlocked <strong>FREE Delivery</strong> (Total weight: ${(totalWeightGrams/1000).toFixed(1)}kg)!
          </div>
        `}
      </div>

      <div class="border-t border-slate-100 pt-5 mb-8">
        <div class="flex justify-between items-end">
          <div>
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Grand Total</span>
            <span class="text-3xl font-serif font-bold text-brand-dark">₹${grandTotal}</span>
          </div>
          <span class="text-[10px] text-slate-400">Inc. of all taxes</span>
        </div>
      </div>

      <div class="space-y-3">
        <a href="#checkout" class="w-full bg-brand-forest hover:bg-brand-dark text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all duration-300 text-center shadow-md">
          Proceed to Checkout <i class="fa-solid fa-chevron-right text-[10px]"></i>
        </a>
        <a href="#products" class="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors text-center border border-slate-200">
          Continue Shopping
        </a>
      </div>
    </div>
  `;
}

function adjustCartItemQty(index, val) {
  if (cart[index].quantity + val >= 1 && cart[index].quantity + val <= 10) {
    cart[index].quantity += val;
    saveCart();
    renderCart();
  }
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

// View: CHECKOUT
function renderCheckout() {
  if (cart.length === 0) {
    window.location.hash = '#cart';
    return;
  }

  // Render checkout sidebar summary
  const sidebar = document.getElementById('checkout-summary-sidebar');
  if (!sidebar) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Calculate delivery weight
  let totalWeightGrams = 0;
  cart.forEach(item => {
    let wt = item.weight.toLowerCase();
    let qty = item.quantity;
    if (wt.includes('kg')) {
      totalWeightGrams += parseFloat(wt) * 1000 * qty;
    } else {
      totalWeightGrams += parseFloat(wt) * qty;
    }
  });

  const deliveryCharge = totalWeightGrams >= 1000 ? 0 : 80;
  const grandTotal = subtotal + deliveryCharge;

  sidebar.innerHTML = `
    <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
      <h3 class="font-serif text-xl font-bold text-brand-dark mb-4 pb-3 border-b border-brand-light">Items in Order</h3>
      
      <!-- Cart items list summary -->
      <div class="space-y-3 max-h-48 overflow-y-auto mb-6 pr-2">
        ${cart.map(item => `
          <div class="flex items-center justify-between text-xs gap-3">
            <div class="flex items-center gap-2 overflow-hidden">
              <div class="h-10 w-10 rounded-lg overflow-hidden bg-brand-light flex-shrink-0 border border-slate-100">
                <img src="${item.image}" class="h-full w-full object-cover">
              </div>
              <div class="truncate">
                <p class="font-medium text-brand-dark truncate">${item.name}</p>
                <span class="text-[9px] text-slate-400">${item.weight} x ${item.quantity}</span>
              </div>
            </div>
            <span class="font-semibold text-brand-dark flex-shrink-0">₹${item.price * item.quantity}</span>
          </div>
        `).join('')}
      </div>

      <!-- Pricing breaks -->
      <div class="space-y-3.5 border-t border-slate-100 pt-4 mb-6">
        <div class="flex justify-between text-xs text-slate-600">
          <span>Subtotal</span>
          <span>₹${subtotal}</span>
        </div>
        <div class="flex justify-between text-xs text-slate-600">
          <span>Delivery Charge</span>
          ${deliveryCharge === 0 ? `
            <span class="text-emerald-600 font-semibold">FREE</span>
          ` : `
            <span>₹${deliveryCharge}</span>
          `}
        </div>
        <div class="flex justify-between text-sm font-bold text-brand-dark border-t border-slate-100 pt-3">
          <span>Total Amount</span>
          <span>₹${grandTotal}</span>
        </div>
      </div>

      <button onclick="submitOrder()" class="w-full bg-brand-forest hover:bg-brand-dark text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md">
        Place Order <i class="fa-solid fa-lock text-[10px]"></i>
      </button>
      <p class="text-[10px] text-slate-400 text-center mt-3">This is a secure static frontend demo checkout.</p>
    </div>
  `;
}

// Create & Submit Order — collects form data then opens Razorpay
function submitOrder() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  const name     = document.getElementById('input-name').value.trim();
  const phone    = document.getElementById('input-phone').value.trim();
  const email    = document.getElementById('input-email').value.trim();
  const street   = document.getElementById('input-street').value.trim();
  const city     = document.getElementById('input-city').value.trim();
  const state    = document.getElementById('input-state').value.trim();
  const pincode  = document.getElementById('input-pincode').value.trim();
  const landmark = document.getElementById('input-landmark').value.trim();
  const notes    = document.getElementById('input-notes').value.trim();

  if (!name || !phone || !email || !street || !city || !state || !pincode) {
    showToast('Please fill all required fields!', 'error');
    return;
  }

  // Compile totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let totalWeightGrams = 0;
  cart.forEach(item => {
    const wt  = item.weight.toLowerCase();
    const qty = item.quantity;
    totalWeightGrams += wt.includes('kg')
      ? parseFloat(wt) * 1000 * qty
      : parseFloat(wt) * qty;
  });
  const deliveryCharge = totalWeightGrams >= 1000 ? 0 : 80;
  const grandTotal     = subtotal + deliveryCharge;

  // Launch Razorpay modal
  initiateRazorpayPayment({
    amount: grandTotal,
    customer: { name, phone, email, street, city, state, pincode, landmark, notes },
    subtotal, deliveryCharge, grandTotal
  });
}

// Razorpay Payment Handler
function initiateRazorpayPayment(orderData) {
  // Guard: make sure Razorpay script actually loaded
  if (typeof Razorpay === 'undefined') {
    showToast('Payment gateway not loaded. Check your internet connection and try again.', 'error');
    const btn = document.querySelector('#checkout-summary-sidebar button');
    if (btn) { btn.disabled = false; btn.innerHTML = 'Pay Now <i class="fa-solid fa-lock text-[10px]"></i>'; }
    return;
  }

  const btn = document.querySelector('#checkout-summary-sidebar button');
  if (btn) { btn.disabled = true; btn.textContent = 'Opening Payment…'; }

  const options = {
    key: window.NEIMOZHI_CONFIG ? window.NEIMOZHI_CONFIG.razorpay.keyId : 'rzp_test_TMkPB4Kf0yKrRE',
    amount: Math.round(orderData.amount * 100),   // paise, must be integer
    currency: 'INR',
    name: 'NeiMozhi by Uthukuli',
    description: 'Premium Ghee & Dairy Order',
    image: window.location.origin + '/assets/images/logo_neimozhi.jpg',
    prefill: {
      name:    orderData.customer.name,
      email:   orderData.customer.email,
      contact: orderData.customer.phone
    },
    notes: {
      address: `${orderData.customer.street}, ${orderData.customer.city}`
    },
    theme: { color: '#C59B27' },
    modal: {
      backdropclose: false,
      ondismiss: function () {
        if (btn) { btn.disabled = false; btn.innerHTML = 'Pay Now <i class="fa-solid fa-lock text-[10px]"></i>'; }
        showToast('Payment cancelled. Your cart is safe.', 'info');
      }
    },
    handler: function (response) {
      // Payment successful — save order
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      const orderId   = `NMZ-2026-${randomNum}`;
      const newOrder  = {
        id:            orderId,
        date:          new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
        timestamp:     Date.now(),
        customer:      orderData.customer,
        items:         [...cart],
        subtotal:      orderData.subtotal,
        delivery:      orderData.deliveryCharge,
        total:         orderData.grandTotal,
        status:        'Paid',
        paymentId:     response.razorpay_payment_id,
        paymentMethod: 'razorpay'
      };
      orders.unshift(newOrder);
      saveOrders();
      cart = [];
      saveCart();
      window.location.hash = `#order-confirmation/${orderId}`;
    }
  };

  try {
    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function (resp) {
      if (btn) { btn.disabled = false; btn.innerHTML = 'Pay Now <i class="fa-solid fa-lock text-[10px]"></i>'; }
      showToast(`Payment failed: ${resp.error.description}`, 'error');
    });
    rzp.open();
  } catch (e) {
    if (btn) { btn.disabled = false; btn.innerHTML = 'Pay Now <i class="fa-solid fa-lock text-[10px]"></i>'; }
    showToast('Could not open payment. Please check console for details.', 'error');
    console.error('[Razorpay Error]', e);
  }
}

// View: ORDER CONFIRMATION
function renderOrderConfirmation(orderId) {
  const container = document.getElementById('order-confirmation-content');
  if (!container) return;

  const order = orders.find(o => o.id === orderId);
  if (!order) {
    container.innerHTML = `
      <div class="text-center py-16 bg-white rounded-3xl border border-brand-gold/10 p-8 glow-gold max-w-lg mx-auto">
        <i class="fa-solid fa-triangle-exclamation text-5xl text-rose-500 mb-4 block"></i>
        <h3 class="font-serif text-2xl font-bold text-brand-dark mb-2">Order Not Found</h3>
        <p class="text-xs text-slate-500 mb-8">We couldn't locate any order with ID: ${orderId}.</p>
        <a href="#home" class="bg-brand-forest text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs">Return Home</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="max-w-4xl mx-auto">
      <!-- Success Icon Animation -->
      <div class="text-center mb-10">
        <div class="checkmark-wrapper mb-6">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <h2 class="font-serif text-4xl font-bold text-brand-dark">Thank You for Your Order!</h2>
        <p class="text-slate-500 text-xs mt-2">Your made-to-order dairy package preparation has been scheduled.</p>
        <div class="inline-block bg-amber-50 border border-brand-gold/20 text-brand-goldDark text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl mt-4">
          Order ID: ${order.id}
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Order details card -->
        <div class="lg:col-span-8 space-y-6">
          
          <!-- Summary info -->
          <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-150 shadow-sm">
            <h3 class="font-serif text-xl font-bold text-brand-dark mb-4 pb-2 border-b border-brand-light">Ordered Items</h3>
            
            <div class="divide-y divide-slate-100">
              ${order.items.map(item => `
                <div class="py-4 flex justify-between items-center text-xs gap-3">
                  <div class="flex items-center gap-3">
                    <div class="h-12 w-12 rounded-xl overflow-hidden bg-brand-light border border-slate-100 flex-shrink-0">
                      <img src="${item.image}" class="h-full w-full object-cover">
                    </div>
                    <div>
                      <h4 class="font-bold text-brand-dark">${item.name}</h4>
                      <span class="text-[10px] text-slate-400">Weight: ${item.weight} | Qty: ${item.quantity}</span>
                    </div>
                  </div>
                  <span class="font-bold text-brand-dark">₹${item.price * item.quantity}</span>
                </div>
              `).join('')}
            </div>

            <!-- Prices -->
            <div class="border-t border-slate-100 pt-4 mt-2 space-y-3">
              <div class="flex justify-between text-xs text-slate-500">
                <span>Subtotal</span>
                <span>₹${order.subtotal}</span>
              </div>
              <div class="flex justify-between text-xs text-slate-500">
                <span>Delivery Charge</span>
                <span>${order.delivery === 0 ? 'FREE' : `₹${order.delivery}`}</span>
              </div>
              <div class="flex justify-between text-sm font-bold text-brand-dark border-t border-slate-100 pt-3">
                <span>Total Amount Paid</span>
                <span>₹${order.total}</span>
              </div>
            </div>
          </div>

          <!-- Customer details -->
          <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-150 shadow-sm">
            <h3 class="font-serif text-xl font-bold text-brand-dark mb-4 pb-2 border-b border-brand-light">Shipping Details</h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-600">
              <div>
                <span class="text-slate-400 uppercase text-[9px] tracking-wider block font-bold mb-0.5">Customer Name</span>
                <span class="text-brand-dark font-medium">${order.customer.name}</span>
              </div>
              <div>
                <span class="text-slate-400 uppercase text-[9px] tracking-wider block font-bold mb-0.5">Mobile Number</span>
                <span class="text-brand-dark font-medium">${order.customer.phone}</span>
              </div>
              <div class="sm:col-span-2">
                <span class="text-slate-400 uppercase text-[9px] tracking-wider block font-bold mb-0.5">Delivery Address</span>
                <span class="text-brand-dark font-medium">${order.customer.street}, ${order.customer.landmark ? `${order.customer.landmark}, ` : ''}${order.customer.city}, ${order.customer.state} - ${order.customer.pincode}</span>
              </div>
              <div>
                <span class="text-slate-400 uppercase text-[9px] tracking-wider block font-bold mb-0.5">Order Date</span>
                <span class="text-brand-dark font-medium">${order.date}</span>
              </div>
              <div>
                <span class="text-slate-400 uppercase text-[9px] tracking-wider block font-bold mb-0.5">Estimated Delivery</span>
                <span class="text-brand-dark font-medium">Within 5 Working Days</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Right actions side -->
        <div class="lg:col-span-4 space-y-4">
          <button onclick="window.print()" class="w-full bg-brand-forest hover:bg-brand-dark text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md">
            <i class="fa-solid fa-print text-sm"></i> Print Order / Save PDF
          </button>
          
          <button onclick="downloadStaticInvoice('${order.id}')" class="w-full bg-white hover:bg-slate-50 text-slate-700 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all border border-slate-200">
            <i class="fa-solid fa-file-invoice text-sm text-brand-gold"></i> Download Invoice
          </button>

          <a href="#products" class="w-full bg-amber-50 hover:bg-amber-100 text-amber-900 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all border border-amber-200/50 text-center">
            Continue Shopping
          </a>

          <a href="#home" class="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all border border-slate-200 text-center">
            Back to Homepage
          </a>
        </div>

      </div>

      <!-- PRINT-ONLY INVOICE TEMPLATE (Hidden from normal UI view via CSS) -->
      <div id="invoice-print-area" class="hidden">
        <div style="padding: 40px; font-family: sans-serif; color: #333;">
          <div style="display: flex; justify-between; border-bottom: 2px solid #C59B27; padding-bottom: 20px; margin-bottom: 30px;">
            <div>
              <h1 style="margin: 0; font-family: serif; color: #1C2816; font-size: 28px;">NeiMozhi by Uthukuli</h1>
              <p style="margin: 5px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #C59B27;">Authentic Made-To-Order Dairy</p>
            </div>
            <div style="text-align: right;">
              <h2 style="margin: 0; font-size: 20px; color: #1C2816;">INVOICE</h2>
              <p style="margin: 5px 0 0 0; font-size: 12px; font-weight: bold; color: #C59B27;">${order.id}</p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; font-size: 12px;">
            <div>
              <h3 style="margin-top: 0; color: #1C2816; border-bottom: 1px solid #eee; padding-bottom: 5px;">From:</h3>
              <p style="margin: 3px 0;"><strong>NeiMozhi Dairy Kitchen</strong></p>
              <p style="margin: 3px 0;">Gandhi Bazaar Main Road, Uthukuli,</p>
              <p style="margin: 3px 0;">Tiruppur, Tamil Nadu - 638751</p>
              <p style="margin: 3px 0;">Contact: orders@neimozhi.com</p>
            </div>
            <div>
              <h3 style="margin-top: 0; color: #1C2816; border-bottom: 1px solid #eee; padding-bottom: 5px;">Shipped To:</h3>
              <p style="margin: 3px 0;"><strong>${order.customer.name}</strong></p>
              <p style="margin: 3px 0;">${order.customer.street}, ${order.customer.landmark ? `${order.customer.landmark}, ` : ''}</p>
              <p style="margin: 3px 0;">${order.customer.city}, ${order.customer.state} - ${order.customer.pincode}</p>
              <p style="margin: 3px 0;">Phone: ${order.customer.phone}</p>
            </div>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 12px;">
            <thead>
              <tr style="background-color: #FAF6EB; border-bottom: 2px solid #C59B27; text-align: left;">
                <th style="padding: 10px; color: #1C2816;">Product Details</th>
                <th style="padding: 10px; color: #1C2816; text-align: center;">Weight</th>
                <th style="padding: 10px; color: #1C2816; text-align: center;">Price</th>
                <th style="padding: 10px; color: #1C2816; text-align: center;">Qty</th>
                <th style="padding: 10px; color: #1C2816; text-align: right;">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              ${order.items.map(item => `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 10px;"><strong>${item.name}</strong></td>
                  <td style="padding: 12px 10px; text-align: center;">${item.weight}</td>
                  <td style="padding: 12px 10px; text-align: center;">₹${item.price}</td>
                  <td style="padding: 12px 10px; text-align: center;">${item.quantity}</td>
                  <td style="padding: 12px 10px; text-align: right;"><strong>₹${item.price * item.quantity}</strong></td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div style="display: flex; justify-content: flex-end; font-size: 12px;">
            <div style="width: 250px; line-height: 2;">
              <div style="display: flex; justify-content: space-between;">
                <span>Subtotal:</span>
                <span>₹${order.subtotal}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>Delivery Charge:</span>
                <span>${order.delivery === 0 ? 'FREE' : `₹${order.delivery}`}</span>
              </div>
              <div style="display: flex; justify-content: space-between; border-top: 1px solid #ddd; padding-top: 5px; margin-top: 5px; font-size: 14px; font-weight: bold; color: #1C2816;">
                <span>Grand Total:</span>
                <span>₹${order.total}</span>
              </div>
            </div>
          </div>

          <div style="margin-top: 60px; text-align: center; font-size: 10px; color: #888; border-top: 1px solid #eee; padding-top: 20px;">
            <p>This is a computer-generated invoice for your static order demonstration.</p>
            <p>Thank you for purchasing pure, authentic dairy from NeiMozhi!</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Download Invoice as Static PDF (Triggers a print view styled as a beautiful invoice file directly)
function downloadStaticInvoice(orderId) {
  // We can open the print dialogue targeting only the invoice print area.
  // In our CSS, we have a media query that hides everything except `#invoice-print-area` during printing.
  window.print();
}

// View: ORDER HISTORY
function renderOrderHistory() {
  const container = document.getElementById('order-history-list');
  if (!container) return;

  container.innerHTML = '';

  if (orders.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 bg-white rounded-3xl border border-brand-gold/10 p-8 glow-gold max-w-md mx-auto">
        <i class="fa-solid fa-clock-rotate-left text-5xl text-slate-200 mb-4 block"></i>
        <h3 class="font-serif text-xl font-bold text-brand-dark mb-2">No Past Orders Found</h3>
        <p class="text-xs text-slate-400 mb-8">You haven't placed any static mock orders yet during this session.</p>
        <a href="#products" class="bg-brand-forest text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs">Shop Now</a>
      </div>
    `;
    return;
  }

  orders.forEach(order => {
    const card = document.createElement('div');
    card.className = 'bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4';
    card.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div>
            <span class="text-[9px] uppercase font-bold tracking-widest text-slate-400 block">Order Date</span>
            <span class="text-xs text-brand-dark font-medium">${order.date}</span>
          </div>
          <div>
            <span class="text-[9px] uppercase font-bold tracking-widest text-slate-400 block">Order Number</span>
            <span class="text-xs text-brand-goldDark font-semibold">${order.id}</span>
          </div>
          <div>
            <span class="text-[9px] uppercase font-bold tracking-widest text-slate-400 block">Status</span>
            <span class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-emerald-200/50">
              <i class="fa-solid fa-circle-check text-[8px]"></i> ${order.status}
            </span>
          </div>
        </div>
        
        <div class="text-right">
          <span class="text-[9px] uppercase font-bold tracking-widest text-slate-400 block">Total Amount</span>
          <span class="text-base font-bold text-brand-dark font-serif">₹${order.total}</span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-2">
        <div class="space-y-1.5 text-xs text-slate-500">
          <p class="font-medium text-brand-dark">Ship To: <span class="text-slate-600 font-normal">${order.customer.name}</span></p>
          <p class="truncate max-w-lg">Address: <span class="text-slate-600 font-normal">${order.customer.street}, ${order.customer.city} (${order.customer.pincode})</span></p>
        </div>
        
        <div class="flex gap-3 w-full md:w-auto">
          <a href="#order-confirmation/${order.id}" class="flex-1 md:flex-initial bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-center py-2 px-5 rounded-xl font-bold uppercase tracking-wider text-[10px] transition-colors">
            View Details
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// App Bootstrap Initialization
document.addEventListener('DOMContentLoaded', () => {
  loadState();

  // Route Handling
  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // Call once on start

  // Sticky Nav header
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });

  // Mobile menu buttons toggling
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });
    });
  }
});

window.playPrepVideo = function() {
  const video = document.getElementById('prep-video');
  const overlay = document.getElementById('video-overlay');
  if (video && overlay) {
    overlay.classList.add('hidden');
    video.classList.remove('hidden');
    video.play();
  }
};

window.buyNow = function(productId, weight) {
  const product = PRODUCT_CATALOG[productId];
  if (!product) return;

  const existingIdx = cart.findIndex(item => item.id === productId && item.weight === weight);
  if (existingIdx === -1) {
    cart.push({
      id: productId,
      name: product.name,
      weight: weight,
      price: product.variants[weight],
      quantity: 1,
      image: product.images[0]
    });
    saveCart();
  }
  window.location.hash = '#checkout';
};

window.buyNowFromCard = function(productId) {
  const selectedWeight = cardSelections[productId] || Object.keys(PRODUCT_CATALOG[productId].variants)[0];
  window.buyNow(productId, selectedWeight);
};
