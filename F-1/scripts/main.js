// DOM Elements
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');
const forgotPasswordLink = document.querySelector('.forgot-password-link');
const backToLogin = document.querySelector('.back-to-login');
const forgotPassword = document.getElementById('forgotPassword');
const otpVerification = document.getElementById('otpVerification');
const newPasswordForm = document.getElementById('newPasswordForm');
const verifyOtpBtn = document.getElementById('verifyOtpBtn');
const otpInputs = document.querySelectorAll('.otp-inputs input');
const resendOtp = document.querySelector('.resend-otp');

// Data
const categories = [
    { id: 'tees', name: 'Tees', description: 'Performance fabrics', image: 'placeholder' },
    { id: 'jackets', name: 'Jackets', description: 'Track-inspired outerwear', image: 'placeholder' },
    { id: 'caps', name: 'Caps', description: 'Headwear for speed', image: 'placeholder' },
    { id: 'accessories', name: 'Accessories', description: 'Essentials for fans', image: 'placeholder' },
    { id: 'limited', name: 'Limited', description: 'Exclusive drops', image: 'placeholder' }
];

const products = [
    { 
        id: 'p1', 
        name: 'Velocity Race Tee', 
        category: 'tees',
        price: 49.99,
        description: 'Premium performance fabric with moisture-wicking technology',
        images: ['placeholder', 'placeholder', 'placeholder', 'placeholder'],
        colors: ['Black', 'White', 'Red', 'Teal'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        featured: true
    },
    { 
        id: 'p2', 
        name: 'Pole Position Tee', 
        category: 'tees',
        price: 54.99,
        description: 'Limited edition design celebrating F1 heritage',
        images: ['placeholder', 'placeholder', 'placeholder', 'placeholder'],
        colors: ['Black', 'White'],
        sizes: ['S', 'M', 'L', 'XL'],
        featured: true
    },
    { 
        id: 'p3', 
        name: 'Checkered Flag Tee', 
        category: 'tees',
        price: 44.99,
        description: 'Classic design for true racing enthusiasts',
        images: ['placeholder', 'placeholder', 'placeholder', 'placeholder'],
        colors: ['Black', 'White'],
        sizes: ['XS', 'S', 'M', 'L'],
        featured: true
    },
    { 
        id: 'p4', 
        name: 'Grid Start Hoodie', 
        category: 'jackets',
        price: 89.99,
        description: 'Premium hoodie with racing-inspired design',
        images: ['placeholder', 'placeholder', 'placeholder', 'placeholder'],
        colors: ['Black', 'Gray'],
        sizes: ['S', 'M', 'L', 'XL'],
        featured: true
    },
    { 
        id: 'p5', 
        name: 'Pole Position Cap', 
        category: 'caps',
        price: 34.99,
        description: 'Performance cap with moisture-wicking technology',
        images: ['placeholder', 'placeholder', 'placeholder', 'placeholder'],
        colors: ['Black', 'Red'],
        sizes: ['One Size'],
        featured: false
    }
];

// Cart
let cart = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Load categories
    renderCategories();
    
    // Load featured products
    renderFeaturedProducts();
    
    // Setup event listeners
    setupEventListeners();
    
    // Handle routing
    handleRouting();
});

// Render Categories dynamically
function renderCategories() {
    const categories = [
        {
            id: 'tees',
            name: 'Tees',
            description: 'Performance fabrics for ultimate comfort and style. Breathable, lightweight, and perfect for racing fans.',
            icon: 'fas fa-tshirt',
            color: 'text-f1-red'
        },
        {
            id: 'jackets',
            name: 'Jackets',
            description: 'Track-inspired outerwear with windproof and water-resistant features. Stay warm and stylish on and off the circuit.',
            icon: 'fas fa-user-astronaut',
            color: 'text-f1-teal'
        },
        {
            id: 'caps',
            name: 'Caps',
            description: 'Headwear for speed. Adjustable, moisture-wicking, and designed for fans who live life in the fast lane.',
            icon: 'fas fa-hat-cowboy',
            color: 'text-f1-red'
        },
        {
            id: 'accessories',
            name: 'Accessories',
            description: 'Essentials for fans: bags, socks, and more. Complete your look with exclusive F1-inspired gear.',
            icon: 'fas fa-glasses',
            color: 'text-f1-teal'
        },
        {
            id: 'limited',
            name: 'Limited',
            description: 'Exclusive drops and collaborations. Rare pieces for true collectors and F1 enthusiasts.',
            icon: 'fas fa-crown',
            color: 'text-f1-red'
        }
    ];
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = '';
    categories.forEach(cat => {
        grid.innerHTML += `
            <a href="#${cat.id}" class="category-card block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border-2 border-transparent hover:border-f1-red group">
                <div class="h-48 flex items-center justify-center bg-gradient-to-br from-gray-100 to-f1-red/10">
                    <i class="${cat.icon} ${cat.color} text-5xl"></i>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg group-hover:${cat.color} transition">${cat.name}</h3>
                    <p class="text-gray-600 text-sm mt-1">${cat.description}</p>
                </div>
            </a>
        `;
    });
}

// Render Collections dynamically
function renderCollections() {
    const collections = [
        {
            id: 'heritage',
            name: 'Heritage Collection',
            description: 'Celebrate F1 history with retro-inspired designs, classic logos, and premium materials. Limited edition for true fans.',
            icon: 'fas fa-flag-checkered',
            color: 'text-f1-red',
            badge: 'NEW',
            badgeColor: 'bg-f1-red text-white animate-bounce'
        },
        {
            id: 'performance',
            name: 'Performance Series',
            description: 'Engineered for speed and comfort. Moisture-wicking, lightweight, and built for those who never slow down.',
            icon: 'fas fa-bolt',
            color: 'text-f1-teal',
            badge: 'HOT',
            badgeColor: 'bg-f1-teal text-white animate-pulse'
        },
        {
            id: 'exclusive',
            name: 'Exclusive Drops',
            description: 'Ultra-limited runs, artist collabs, and one-of-a-kind pieces. Don’t miss your chance to own a piece of F1 streetwear history.',
            icon: 'fas fa-star',
            color: 'text-yellow-400',
            badge: 'EXCLUSIVE',
            badgeColor: 'bg-yellow-400 text-black animate-spin'
        }
    ];
    const grid = document.getElementById('collectionsGrid');
    grid.innerHTML = '';
    collections.forEach(col => {
        grid.innerHTML += `
            <div class="product-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border-2 border-transparent hover:border-f1-red group">
                <div class="h-56 flex items-center justify-center relative bg-gradient-to-br from-gray-200 to-f1-red/10">
                    <i class="${col.icon} ${col.color} text-6xl"></i>
                    <span class="absolute top-4 right-4 ${col.badgeColor} text-xs px-2 py-1 rounded">${col.badge}</span>
                </div>
                <div class="p-6">
                    <h3 class="font-bold text-xl group-hover:${col.color} transition">${col.name}</h3>
                    <p class="text-gray-600 text-base my-2">${col.description}</p>
                    <button class="bg-f1-red hover:bg-f1-red-dark text-white px-6 py-2 rounded-full font-semibold transition duration-300 btn-animate mt-4 shop-collection-btn" data-collection="${col.id}">
                        Shop ${col.name.split(' ')[0]}
                    </button>
                </div>
            </div>
        `;
    });
}

// Render Featured Products
function renderFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    featuredGrid.innerHTML = '';
    const featuredProducts = products.filter(p => p.featured);
    featuredProducts.forEach(product => {
        featuredGrid.innerHTML += `
            <div class="product-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border-2 border-transparent hover:border-f1-red group">
                <div class="h-64 bg-gray-200 flex items-center justify-center relative">
                    <div class="bg-gray-300 border-2 border-dashed rounded-xl w-48 h-48"></div>
                    ${product.id === 'p1' ? '<span class="absolute top-4 right-4 bg-f1-red text-white text-xs px-2 py-1 rounded">NEW</span>' : ''}
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg">${product.name}</h3>
                    <p class="text-gray-600 text-sm my-2">${product.description}</p>
                    <div class="flex justify-between items-center mt-4">
                        <span class="font-bold text-lg">$${product.price.toFixed(2)}</span>
                        <button class="add-to-cart bg-f1-red hover:bg-f1-red-dark text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300 btn-animate" data-id="${product.id}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        searchBar.classList.add('hidden');
    });
    
    // Search toggle
    searchToggle.addEventListener('click', function() {
        searchBar.classList.toggle('hidden');
        mobileMenu.classList.add('hidden');
    });
    
    // Auth tabs
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab
            authTabs.forEach(t => t.classList.remove('active', 'text-f1-red', 'border-b-2', 'border-f1-red'));
            this.classList.add('active', 'text-f1-red', 'border-b-2', 'border-f1-red');
            
            // Show corresponding form
            authForms.forEach(form => form.classList.add('hidden'));
            document.getElementById(`${tabId}Form`).classList.remove('hidden');
        });
    });
    
    // Forgot password link
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('auth').querySelector('.auth-form').classList.add('hidden');
        forgotPassword.classList.remove('hidden');
    });
    
    // Back to login
    backToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        forgotPassword.classList.add('hidden');
        otpVerification.classList.add('hidden');
        newPasswordForm.classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    });
    
    // Verify OTP
    verifyOtpBtn.addEventListener('click', function() {
        otpVerification.classList.add('hidden');
        newPasswordForm.classList.remove('hidden');
    });
    
    // OTP input navigation
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            if (this.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });
    
    // Resend OTP
    resendOtp.addEventListener('click', function(e) {
        e.preventDefault();
        alert('OTP has been resent to your email');
    });
    
    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            addToCart(productId);
        }
        
        if (e.target.classList.contains('quantity-update')) {
            const itemId = e.target.getAttribute('data-id');
            const action = e.target.getAttribute('data-action');
            updateCartItem(itemId, action);
        }
        
        if (e.target.classList.contains('remove-item')) {
            const itemId = e.target.getAttribute('data-id');
            removeCartItem(itemId);
        }
    });
    
    // Forms submission
    document.getElementById('loginUserForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login functionality would be implemented here');
    });
    
    document.getElementById('signupUserForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Signup functionality would be implemented here');
    });
    
    document.getElementById('forgotPasswordForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        this.classList.add('hidden');
        otpVerification.classList.remove('hidden');
    });
    
    document.getElementById('resetPasswordForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Password has been reset successfully');
        window.location.hash = '#auth';
        forgotPassword.classList.add('hidden');
    });
}

// Handle Routing
function handleRouting() {
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        
        // Hide all sections
        document.querySelectorAll('main > section').forEach(section => {
            section.classList.add('hidden');
        });
        
        // Show the appropriate section
        if (hash === '' || hash === 'home') {
            document.getElementById('home').classList.remove('hidden');
        } else if (hash === 'shop') {
            document.getElementById('shop').classList.remove('hidden');
            renderAllProducts();
        } else if (categories.some(cat => cat.id === hash)) {
            document.getElementById('category').classList.remove('hidden');
            renderCategoryProducts(hash);
        } else if (hash.startsWith('product-')) {
            const productId = hash.split('-')[1];
            document.getElementById('product').classList.remove('hidden');
            renderProductDetails(productId);
        } else if (hash === 'cart') {
            document.getElementById('cart').classList.remove('hidden');
            renderCart();
        } else if (hash === 'auth') {
            document.getElementById('auth').classList.remove('hidden');
        }
    });
    
    // Trigger initial routing
    if (window.location.hash) {
        window.dispatchEvent(new Event('hashchange'));
    } else {
        window.location.hash = '#home';
    }
}

// Render All Products
function renderAllProducts() {
    const productsContainer = document.querySelector('#shop .grid');
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300';
        productCard.innerHTML = `
            <div class="h-64 bg-gray-200 flex items-center justify-center relative">
                <div class="bg-gray-300 border-2 border-dashed rounded-xl w-48 h-48"></div>
                ${product.id === 'p1' ? '<span class="absolute top-4 right-4 bg-f1-red text-white text-xs px-2 py-1 rounded">NEW</span>' : ''}
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg">${product.name}</h3>
                <p class="text-gray-600 text-sm my-2">${product.description}</p>
                <div class="flex justify-between items-center mt-4">
                    <span class="font-bold text-lg">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart bg-f1-red hover:bg-f1-red-dark text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300" data-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Render Category Products
function renderCategoryProducts(categoryId) {
    const category = categories.find(cat => cat.id === categoryId);
    const productsContainer = document.getElementById('categoryProducts');
    const categoryTitle = document.getElementById('categoryTitle');
    
    if (category) {
        categoryTitle.textContent = category.name.toUpperCase();
        
        const categoryProducts = products.filter(product => product.category === categoryId);
        productsContainer.innerHTML = '';
        
        if (categoryProducts.length === 0) {
            productsContainer.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <i class="fas fa-t-shirt fa-3x text-gray-300 mb-4"></i>
                    <h3 class="text-2xl font-bold mb-2">No Products Found</h3>
                    <p class="text-gray-600 max-w-md mx-auto">We don't have any products in this category yet. Check back soon!</p>
                </div>
            `;
            return;
        }
        
        categoryProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300';
            productCard.innerHTML = `
                <div class="h-64 bg-gray-200 flex items-center justify-center relative">
                    <div class="bg-gray-300 border-2 border-dashed rounded-xl w-48 h-48"></div>
                    ${product.id === 'p1' ? '<span class="absolute top-4 right-4 bg-f1-red text-white text-xs px-2 py-1 rounded">NEW</span>' : ''}
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg">${product.name}</h3>
                    <p class="text-gray-600 text-sm my-2">${product.description}</p>
                    <div class="flex justify-between items-center mt-4">
                        <span class="font-bold text-lg">$${product.price.toFixed(2)}</span>
                        <button class="add-to-cart bg-f1-red hover:bg-f1-red-dark text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300" data-id="${product.id}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });
    }
}

// Render Product Details
function renderProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const mainImage = document.querySelector('.product-image-main');
    const thumbnails = document.querySelector('.product-thumbnails');
    const productInfo = document.querySelector('.product-info');
    
    if (product) {
        // Main image
        mainImage.innerHTML = `
            <div class="bg-gray-300 border-2 border-dashed rounded-xl w-64 h-64"></div>
        `;
        
        // Thumbnails
        thumbnails.innerHTML = '';
        product.images.forEach((img, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'bg-gray-200 rounded-lg h-20 cursor-pointer';
            thumbnail.innerHTML = `
                <div class="bg-gray-300 border-2 border-dashed rounded-lg w-full h-full"></div>
            `;
            thumbnails.appendChild(thumbnail);
        });
        
        // Product info
        productInfo.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h1 class="text-3xl font-bold font-orbitron">${product.name}</h1>
                    <div class="flex items-center mt-2">
                        <div class="flex text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <span class="text-gray-600 ml-2">(128 reviews)</span>
                    </div>
                </div>
                <span class="text-2xl font-bold">$${product.price.toFixed(2)}</span>
            </div>
            
            <p class="text-gray-700 mb-6">
                ${product.description}
            </p>
            
            <div class="mb-6">
                <h3 class="font-bold text-lg mb-2">Size</h3>
                <div class="flex flex-wrap gap-2">
                    ${product.sizes.map(size => `
                        <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 size-option">${size}</button>
                    `).join('')}
                </div>
            </div>
            
            <div class="mb-8">
                <h3 class="font-bold text-lg mb-2">Color</h3>
                <div class="flex gap-3">
                    ${product.colors.map(color => {
                        const colorClass = color.toLowerCase() === 'red' ? 'bg-f1-red' : 
                                          color.toLowerCase() === 'teal' ? 'bg-f1-teal' : 
                                          color.toLowerCase() === 'black' ? 'bg-black' : 'bg-white';
                        const borderClass = color.toLowerCase() === 'red' ? 'border-f1-red' : 'border-gray-300';
                        return `
                            <button class="w-8 h-8 rounded-full ${colorClass} border-2 ${borderClass} color-option"></button>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <div class="flex flex-wrap gap-4">
                <div class="flex items-center border border-gray-300 rounded-full">
                    <button class="px-4 py-3 text-gray-600 hover:text-gray-900 quantity-decrease">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="px-4 py-2 quantity-display">1</span>
                    <button class="px-4 py-3 text-gray-600 hover:text-gray-900 quantity-increase">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="flex-1 bg-f1-red hover:bg-f1-red-dark text-white px-8 py-3 rounded-full font-bold transition duration-300 add-to-cart" data-id="${product.id}">
                    Add to Cart
                </button>
                <button class="p-3 border border-gray-300 rounded-full hover:bg-gray-100">
                    <i class="far fa-heart text-xl"></i>
                </button>
            </div>
            
            <div class="mt-8 pt-8 border-t border-gray-200">
                <h3 class="font-bold text-lg mb-4">Product Details</h3>
                <ul class="space-y-2 text-gray-700">
                    <li class="flex">
                        <i class="fas fa-check-circle text-f1-teal mt-1 mr-2"></i>
                        <span>100% Premium Cotton</span>
                    </li>
                    <li class="flex">
                        <i class="fas fa-check-circle text-f1-teal mt-1 mr-2"></i>
                        <span>Moisture-wicking technology</span>
                    </li>
                    <li class="flex">
                        <i class="fas fa-check-circle text-f1-teal mt-1 mr-2"></i>
                        <span>UV protection (UPF 50+)</span>
                    </li>
                    <li class="flex">
                        <i class="fas fa-check-circle text-f1-teal mt-1 mr-2"></i>
                        <span>Designed for maximum mobility</span>
                    </li>
                </ul>
            </div>
        `;
    }
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.images[0]
        });
    }
    
    updateCartCount();
    alert(`${product.name} added to cart`);
}

function updateCartItem(itemId, action) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;
    
    if (action === 'increase') {
        item.quantity += 1;
    } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity -= 1;
    }
    
    renderCart();
    updateCartCount();
}

function removeCartItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderCart();
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart p-8 text-center">
                <i class="fas fa-shopping-cart fa-3x text-gray-300 mb-4"></i>
                <h3 class="text-2xl font-bold mb-2">Your cart is empty</h3>
                <p class="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet</p>
                <a href="#shop" class="bg-f1-red hover:bg-f1-red-dark text-white px-8 py-3 rounded-full font-bold transition duration-300">
                    Continue Shopping
                </a>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item p-6 border-b border-gray-200" data-id="${item.id}">
                <div class="flex">
                    <div class="bg-gray-200 rounded-lg w-24 h-24 flex-shrink-0 flex items-center justify-center">
                        <div class="bg-gray-300 border-2 border-dashed rounded-xl w-16 h-16"></div>
                    </div>
                    <div class="ml-4 flex-1">
                        <div class="flex justify-between">
                            <h3 class="font-bold">${item.name}</h3>
                            <span class="font-bold">$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div class="flex items-center mt-4">
                            <div class="flex items-center border border-gray-300 rounded-full">
                                <button class="px-3 py-1 text-gray-600 hover:text-gray-900 quantity-update" data-id="${item.id}" data-action="decrease">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="px-3 py-1">${item.quantity}</span>
                                <button class="px-3 py-1 text-gray-600 hover:text-gray-900 quantity-update" data-id="${item.id}" data-action="increase">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <button class="ml-4 text-gray-500 hover:text-red-500 remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update totals
    document.querySelector('.cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('.cart-tax').textContent = `$${tax.toFixed(2)}`;
    document.querySelector('.cart-total').textContent = `$${(subtotal + tax).toFixed(2)}`;
}

// Add to main.js
function initProductGallery() {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail-item img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });
    
    // Simple zoom effect
    mainImage.addEventListener('mousemove', function(e) {
        // Implement zoom logic here
    });
    
    mainImage.addEventListener('mouseleave', function() {
        // Reset zoom
    });
}

// Update cart functions in main.js
function loadCart() {
    const savedCart = localStorage.getItem('f1Cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function saveCart() {
    localStorage.setItem('f1Cart', JSON.stringify(cart));
}

// Update all cart functions to call saveCart() after modifications

// ...existing code...

function initSearch() {
    const searchInput = document.getElementById('shopSearch');
    if (!searchInput) return;

    // Remove any existing search results container
    let oldResults = searchInput.parentNode.querySelector('.search-results');
    if (oldResults) oldResults.remove();

    // Create accessible search results container
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results absolute z-10 w-full mt-1 bg-white shadow-lg rounded-lg max-h-80 overflow-y-auto hidden';
    searchResults.setAttribute('role', 'listbox');
    searchResults.setAttribute('aria-label', 'Search Results');
    searchInput.setAttribute('aria-autocomplete', 'list');
    searchInput.setAttribute('aria-controls', 'searchResultsList');
    searchResults.id = 'searchResultsList';
    searchInput.parentNode.appendChild(searchResults);

    let searchTimeout;
    let resultsData = [];
    let focusedIndex = -1;

    // Keyboard navigation for results
    searchInput.addEventListener('keydown', function(e) {
        const items = searchResults.querySelectorAll('a[role="option"]');
        if (searchResults.classList.contains('hidden') || items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            focusedIndex = (focusedIndex + 1) % items.length;
            items.forEach((item, idx) => {
                item.classList.toggle('bg-gray-100', idx === focusedIndex);
                if (idx === focusedIndex) item.focus();
            });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            focusedIndex = (focusedIndex - 1 + items.length) % items.length;
            items.forEach((item, idx) => {
                item.classList.toggle('bg-gray-100', idx === focusedIndex);
                if (idx === focusedIndex) item.focus();
            });
        } else if (e.key === 'Enter' && focusedIndex >= 0) {
            e.preventDefault();
            items[focusedIndex].click();
        } else if (e.key === 'Escape') {
            searchResults.classList.add('hidden');
        }
    });

    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const term = this.value.trim().toLowerCase();
            focusedIndex = -1;
            if (term.length < 2) {
                searchResults.classList.add('hidden');
                searchResults.innerHTML = '';
                return;
            }

            // Enhanced: Search by name, description, and category
            resultsData = products.filter(p =>
                p.name.toLowerCase().includes(term) ||
                p.description.toLowerCase().includes(term) ||
                (p.category && p.category.toLowerCase().includes(term))
            ).slice(0, 8);

            if (resultsData.length > 0) {
                searchResults.innerHTML = resultsData.map((p, idx) => `
                    <a href="#product-${p.id}" 
                       class="block p-3 hover:bg-f1-teal/10 border-b focus:bg-f1-teal/20 outline-none transition-all duration-150"
                       role="option"
                       tabindex="-1"
                       aria-selected="false"
                       id="search-result-${idx}">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-gray-200 rounded mr-3 flex items-center justify-center shadow-inner" aria-hidden="true">
                                <i class="fas fa-tshirt text-f1-red text-lg"></i>
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-900">${highlightMatch(p.name, term)}</h4>
                                <p class="text-xs text-gray-500">${highlightMatch(p.description, term)}</p>
                                <span class="text-xs text-f1-teal font-semibold">${p.category ? p.category.toUpperCase() : ''}</span>
                                <span class="block text-sm text-gray-700 font-bold mt-1">$${p.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </a>
                `).join('');
                searchResults.classList.remove('hidden');
            } else {
                searchResults.innerHTML = '<div class="p-3 text-center text-gray-600" role="alert">No results found</div>';
                searchResults.classList.remove('hidden');
            }
        }, 200);
    });

    // Highlight matched text
    function highlightMatch(text, term) {
        if (!term) return text;
        const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(re, '<mark class="bg-f1-teal/30 rounded">$1</mark>');
    }

    // Mouse and focus accessibility
    searchResults.addEventListener('mousedown', function(e) {
        // Prevent input blur on click
        e.preventDefault();
    });

    searchResults.addEventListener('click', function(e) {
        const link = e.target.closest('a[role="option"]');
        if (link) {
            searchResults.classList.add('hidden');
            searchInput.value = '';
        }
    });

    // Hide results when clicking outside
    document.addEventListener('mousedown', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    });

    // Hide results on input blur (with delay to allow click)
    searchInput.addEventListener('blur', function() {
        setTimeout(() => searchResults.classList.add('hidden'), 150);
    });

    // Show results on input focus if there are results
    searchInput.addEventListener('focus', function() {
        if (searchResults.innerHTML.trim() !== '') {
            searchResults.classList.remove('hidden');
        }
    });

    // Enhanced: Show recent searches
    let recentSearches = JSON.parse(localStorage.getItem('recentF1Searches') || '[]');
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length < 2 && recentSearches.length > 0) {
            searchResults.innerHTML = `
                <div class="p-2 text-xs text-gray-400">Recent Searches</div>
                ${recentSearches.slice(-5).reverse().map((s, idx) => `
                    <button class="block w-full text-left px-4 py-2 hover:bg-f1-teal/10 rounded transition" data-recent="${s}">
                        <i class="fas fa-history mr-2 text-f1-teal"></i>${s}
                    </button>
                `).join('')}
            `;
            searchResults.classList.remove('hidden');
        }
    });

    searchResults.addEventListener('click', function(e) {
        const btn = e.target.closest('button[data-recent]');
        if (btn) {
            searchInput.value = btn.getAttribute('data-recent');
            searchInput.dispatchEvent(new Event('input'));
        }
    });

    // Save recent searches
    searchInput.addEventListener('change', function() {
        const val = this.value.trim();
        if (val.length >= 2 && !recentSearches.includes(val)) {
            recentSearches.push(val);
            if (recentSearches.length > 10) recentSearches.shift();
            localStorage.setItem('recentF1Searches', JSON.stringify(recentSearches));
        }
    });
}

// Enhanced: User Authentication (Signup/Login) with UI feedback
function setupAuthForms() {
    const loginForm = document.getElementById('loginUserForm');
    const signupForm = document.getElementById('signupUserForm');

    // Simulated user database (for demo only)
    let users = JSON.parse(localStorage.getItem('f1Users') || '[]');
    let loggedInUser = localStorage.getItem('f1LoggedInUser') || null;

    // Login
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = loginForm.loginEmail.value.trim().toLowerCase();
            const password = loginForm.loginPassword.value;
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                loggedInUser = email;
                localStorage.setItem('f1LoggedInUser', email);
                showToast('Login successful!', 'success');
                window.location.hash = '#home';
                updateAuthUI();
            } else {
                showToast('Invalid email or password.', 'error');
            }
        });
    }

    // Signup
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = signupForm.signupEmail.value.trim().toLowerCase();
            const password = signupForm.signupPassword.value;
            const firstName = signupForm.firstName.value.trim();
            const lastName = signupForm.lastName.value.trim();
            if (users.some(u => u.email === email)) {
                showToast('Email already registered.', 'error');
                return;
            }
            if (password.length < 8) {
                showToast('Password must be at least 8 characters.', 'error');
                return;
            }
            users.push({ email, password, firstName, lastName });
            localStorage.setItem('f1Users', JSON.stringify(users));
            showToast('Account created! Please log in.', 'success');
            document.querySelector('.auth-tab[data-tab="login"]').click();
        });
    }

    // Update UI for logged-in user
    function updateAuthUI() {
        const accountBtn = document.querySelector('a[href="#auth"]');
        if (loggedInUser) {
            accountBtn.innerHTML = `<i class="fas fa-user-check"></i>`;
            accountBtn.title = "Account (Logged In)";
        } else {
            accountBtn.innerHTML = `<i class="fas fa-user"></i>`;
            accountBtn.title = "Account";
        }
    }

    // Toast notification
    function showToast(msg, type) {
        let toast = document.createElement('div');
        toast.className = `fixed top-6 right-6 z-50 px-6 py-3 rounded-lg shadow-lg font-bold text-white transition-all duration-300 animate-bounce
            ${type === 'success' ? 'bg-f1-teal' : 'bg-f1-red'}`;
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => { toast.remove(); }, 2200);
    }

    // Logout on click (optional)
    document.querySelector('a[href="#auth"]').addEventListener('dblclick', function(e) {
        if (loggedInUser) {
            localStorage.removeItem('f1LoggedInUser');
            loggedInUser = null;
            updateAuthUI();
            showToast('Logged out.', 'success');
        }
    });

    updateAuthUI();
}

// Enhanced: Animated and functionable collection/category buttons
document.addEventListener('click', function(e) {
    // Category cards
    if (e.target.closest('.category-card')) {
        const href = e.target.closest('.category-card').getAttribute('href');
        if (href && href.startsWith('#')) {
            window.location.hash = href;
            e.preventDefault();
        }
    }
    // Collection shop buttons
    if (e.target.classList.contains('shop-collection-btn')) {
        const collection = e.target.getAttribute('data-collection');
        // Filter products by collection if implemented, else show all
        window.location.hash = '#shop';
        // Optionally, you can filter shopGrid here based on collection
    }
    // Add to cart
    if (e.target.classList.contains('add-to-cart')) {
        const productId = e.target.getAttribute('data-id');
        addToCart(productId);
    }
});

// Call render functions after DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    renderCollections();
    renderFeaturedProducts();
    setupAuthForms();
    // ...other initializations...
});