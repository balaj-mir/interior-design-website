/* ============================================================
   BrightNest Interiors — Global JavaScript
   Vanilla JS, no frameworks.
   
   NOTE: In production, this file would be minified (e.g., via
   terser or uglify-js) and served with gzip/brotli compression.
   ============================================================ */

/* ---------- dataLayer stub for GTM / GA4 / Meta Pixel ---------- */
window.dataLayer = window.dataLayer || [];

/**
 * Push a simulated analytics event to the dataLayer.
 * In production, GTM would pick these up and forward to
 * Google Analytics 4, Meta Pixel, etc.
 */
function trackEvent(eventName, params = {}) {
  window.dataLayer.push({ event: eventName, ...params });
  console.log(`[Analytics] ${eventName}`, params);
}

/* ============================================================
   NAVBAR — Injected via template string (shared across pages)
   ============================================================ */
function getNavbar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html',     label: 'Home' },
    { href: 'services.html',  label: 'Services' },
    { href: 'shop.html',      label: 'Shop' },
    { href: 'portfolio.html', label: 'Portfolio' },
    { href: 'blog.html',      label: 'Blog' },
    { href: 'contact.html',   label: 'Contact' },
  ];

  const navLinksHTML = links.map(link =>
    `<a href="${link.href}" class="${currentPage === link.href ? 'active' : ''}">${link.label}</a>`
  ).join('');

  return `
  <nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">
    <div class="container">
      <a href="index.html" class="navbar-brand" aria-label="BrightNest Interiors Home">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 2L2 14h4v14h8v-8h4v8h8V14h4L16 2zm0 4.5L24 14v12h-4v-8h-8v8H8V14l8-7.5z"/>
        </svg>
        BrightNest
      </a>

      <div class="nav-links" id="navLinks">
        ${navLinksHTML}
      </div>

      <div class="nav-right">
        <a href="cart.html" class="cart-link" aria-label="Shopping cart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <span class="cart-badge" id="cartBadge"></span>
        </a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;
}

/* ============================================================
   FOOTER — Injected via template string (shared across pages)
   ============================================================ */
function getFooter() {
  return `
  <footer class="footer" id="footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand column -->
        <div>
          <span class="footer-brand">BrightNest Interiors</span>
          <p style="margin-bottom:var(--sp-md); font-size:var(--fs-sm);">
            Transforming houses into homes since 2018. Award-winning interior design services for residential and commercial spaces.
          </p>
          <div class="footer-social">
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="Pinterest">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.67 7.87 6.42 9.29-.09-.78-.17-1.98.04-2.83.18-.78 1.19-5.06 1.19-5.06s-.3-.61-.3-1.52c0-1.42.83-2.49 1.86-2.49.87 0 1.3.66 1.3 1.45 0 .88-.56 2.2-.85 3.42-.24 1.02.51 1.86 1.52 1.86 1.83 0 3.24-1.93 3.24-4.72 0-2.47-1.77-4.19-4.31-4.19-2.93 0-4.66 2.2-4.66 4.48 0 .89.34 1.84.77 2.36.08.1.1.19.07.3-.08.31-.25 1.02-.29 1.16-.05.19-.15.23-.35.14-1.3-.61-2.12-2.51-2.12-4.04 0-3.29 2.39-6.32 6.89-6.32 3.62 0 6.43 2.58 6.43 6.03 0 3.59-2.27 6.49-5.42 6.49-1.06 0-2.05-.55-2.39-1.2l-.65 2.48c-.24.91-.88 2.05-1.31 2.75A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4>Quick Links</h4>
          <div class="footer-links">
            <a href="services.html">Our Services</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="shop.html">Shop Decor</a>
            <a href="blog.html">Design Blog</a>
            <a href="contact.html">Contact Us</a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4>Services</h4>
          <div class="footer-links">
            <a href="services.html">Residential Design</a>
            <a href="services.html">Commercial Spaces</a>
            <a href="services.html">Design Consultation</a>
            <a href="services.html">Project Management</a>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h4>Stay Inspired</h4>
          <p style="font-size:var(--fs-sm); margin-bottom:var(--sp-md);">
            Get design tips, project showcases, and exclusive offers delivered monthly.
          </p>
          <form class="newsletter-form" id="footerNewsletter">
            <input type="email" placeholder="Your email address" aria-label="Newsletter email" required>
            <button type="submit" class="btn btn-accent btn-sm">Subscribe</button>
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} BrightNest Interiors. All rights reserved.</p>
        <p>Designed with care in New York City.</p>
      </div>
    </div>
  </footer>`;
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
function showToast(message, duration = 3000) {
  // Remove any existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    ${message}`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ============================================================
   SUCCESS MODAL
   ============================================================ */
function showSuccessModal(title, message) {
  const existing = document.querySelector('.success-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.className = 'success-modal active';
  modal.innerHTML = `
    <div class="success-modal-content">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <h3>${title}</h3>
      <p>${message}</p>
      <button class="btn btn-primary" onclick="this.closest('.success-modal').remove()">Got it!</button>
    </div>`;
  document.body.appendChild(modal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

/* ============================================================
   CART HELPERS (localStorage)
   ============================================================ */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('brightnest_cart')) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('brightnest_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
  showToast(`"${product.name}" added to cart!`);

  // Simulated analytics event
  trackEvent('add_to_cart', {
    item_id: product.id,
    item_name: product.name,
    price: product.price,
    currency: 'USD'
  });
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = count > 0 ? count : '';
}

/* ============================================================
   FETCH JSON HELPER
   ============================================================ */
async function fetchJSON(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`Failed to fetch ${url}:`, err);
    return [];
  }
}

/* ============================================================
   INIT — Runs on every page
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Inject navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = getNavbar();
  }

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = getFooter();
  }

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      hamburger.setAttribute('aria-expanded',
        hamburger.classList.contains('active'));
    });
  }

  // Update cart badge
  updateCartBadge();

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // Footer newsletter
  const footerNewsletter = document.getElementById('footerNewsletter');
  if (footerNewsletter) {
    footerNewsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = footerNewsletter.querySelector('input').value;
      if (email) {
        showToast('Thanks for subscribing!');
        footerNewsletter.reset();
        trackEvent('newsletter_subscribe', { email_source: 'footer' });
      }
    });
  }

  // Page-specific initializations
  const page = (window.location.pathname.split('/').pop() || 'index.html').replace('.html', '');

  switch (page) {
    case 'index':
    case '':
      initHomePage();
      break;
    case 'services':
      initServicesPage();
      break;
    case 'shop':
      initShopPage();
      break;
    case 'cart':
      initCartPage();
      break;
    case 'portfolio':
      initPortfolioPage();
      break;
    case 'blog':
      initBlogPage();
      break;
    case 'blog-post':
      initBlogPostPage();
      break;
    case 'contact':
      initContactPage();
      break;
  }

  // Scroll-triggered fade-in animations
  initScrollAnimations();
});

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/* ============================================================
   HOME PAGE
   ============================================================ */
async function initHomePage() {
  // Featured products
  const products = await fetchJSON('products.json');
  const featured = products.filter(p => p.featured);
  const grid = document.getElementById('featuredProducts');
  if (grid) {
    grid.innerHTML = featured.map(p => productCardHTML(p)).join('');
    attachAddToCartListeners(grid);
  }

  // Blog teaser
  const posts = await fetchJSON('posts.json');
  const latestPosts = posts.slice(0, 3);
  const blogGrid = document.getElementById('blogTeaser');
  if (blogGrid) {
    blogGrid.innerHTML = latestPosts.map(p => blogCardHTML(p)).join('');
  }

  // Testimonials Slider
  initTestimonialsSlider();
}

/* ---------- Testimonials Slider ---------- */
function initTestimonialsSlider() {
  const track = document.querySelector('.testimonials-track');
  const dots = document.querySelectorAll('.testimonials-dots span');
  const prevBtn = document.querySelector('.testimonial-btn.prev');
  const nextBtn = document.querySelector('.testimonial-btn.next');

  if (!track) return;

  let current = 0;
  const slides = track.querySelectorAll('.testimonial-slide');
  const total = slides.length;
  let autoPlayTimer;

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoPlay() {
    autoPlayTimer = setInterval(next, 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayTimer);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoPlay(); next(); startAutoPlay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoPlay(); prev(); startAutoPlay(); });
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stopAutoPlay(); goTo(i); startAutoPlay(); });
  });

  startAutoPlay();
}

/* ============================================================
   SHOP PAGE
   ============================================================ */
async function initShopPage() {
  const products = await fetchJSON('products.json');
  const grid = document.getElementById('shopGrid');
  const filterContainer = document.getElementById('shopFilters');
  const sortSelect = document.getElementById('shopSort');

  if (!grid) return;

  let currentCategory = 'All';
  let currentSort = 'default';

  // Build category filter buttons
  const categories = ['All', ...new Set(products.map(p => p.category))];
  if (filterContainer) {
    filterContainer.innerHTML = categories.map(cat =>
      `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat}</button>`
    ).join('');

    filterContainer.addEventListener('click', (e) => {
      if (!e.target.classList.contains('filter-btn')) return;
      currentCategory = e.target.dataset.category;
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      render();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      currentSort = sortSelect.value;
      render();
    });
  }

  function render() {
    let filtered = currentCategory === 'All'
      ? [...products]
      : products.filter(p => p.category === currentCategory);

    if (currentSort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (currentSort === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));

    grid.innerHTML = filtered.map(p => productCardHTML(p)).join('');
    attachAddToCartListeners(grid);
  }

  render();
}

/* ============================================================
   CART PAGE
   ============================================================ */
function initCartPage() {
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const summaryContainer = document.getElementById('cartSummary');
  const emptyState = document.getElementById('cartEmpty');

  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = '';
    if (summaryContainer) summaryContainer.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (summaryContainer) summaryContainer.style.display = 'block';

  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        <div class="cart-item-controls">
          <button class="qty-btn minus" aria-label="Decrease quantity">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn plus" aria-label="Increase quantity">+</button>
          <button class="remove-btn" aria-label="Remove item">Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  // Subtotal and total
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <div class="cart-summary-row">
        <span>Subtotal</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="cart-summary-row">
        <span>Shipping</span>
        <span>${subtotal >= 150 ? 'Free' : '$15.00'}</span>
      </div>
      <div class="cart-summary-row total">
        <span>Total</span>
        <span>$${(subtotal + (subtotal >= 150 ? 0 : 15)).toFixed(2)}</span>
      </div>
      <button class="btn btn-primary" style="width:100%;margin-top:var(--sp-lg);justify-content:center;" onclick="showSuccessModal('Order Placed!','This is a demo — no payment was processed. Thanks for exploring BrightNest!')">
        Proceed to Checkout
      </button>
    `;
  }

  // Attach event listeners
  container.querySelectorAll('.qty-btn.plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = +btn.closest('.cart-item').dataset.id;
      const cart = getCart();
      const item = cart.find(i => i.id === id);
      if (item) { item.qty += 1; saveCart(cart); renderCart(); }
    });
  });

  container.querySelectorAll('.qty-btn.minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = +btn.closest('.cart-item').dataset.id;
      const cart = getCart();
      const item = cart.find(i => i.id === id);
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) {
          const filtered = cart.filter(i => i.id !== id);
          saveCart(filtered);
        } else {
          saveCart(cart);
        }
        renderCart();
      }
    });
  });

  container.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = +btn.closest('.cart-item').dataset.id;
      const cart = getCart().filter(i => i.id !== id);
      saveCart(cart);
      renderCart();
      showToast('Item removed from cart.');
    });
  });
}

/* ============================================================
   PORTFOLIO PAGE — Gallery + Lightbox
   ============================================================ */
function initPortfolioPage() {
  const filterContainer = document.getElementById('portfolioFilters');
  const grid = document.getElementById('portfolioGrid');

  if (!grid) return;

  const projects = [
    { title: 'Modern Living Room', category: 'Residential', image: 'images/portfolio-modern-living.png' },
    { title: 'Luxury Kitchen Remodel', category: 'Kitchen', image: 'images/portfolio-luxury-kitchen.png' },
    { title: 'Serene Master Bedroom', category: 'Residential', image: 'images/portfolio-serene-bedroom.png' },
    { title: 'Creative Home Office', category: 'Commercial', image: 'images/portfolio-home-office.png' },
    { title: 'Spa-Inspired Bathroom', category: 'Residential', image: 'images/portfolio-spa-bathroom.png' },
    { title: 'Elegant Dining Room', category: 'Kitchen', image: 'images/portfolio-elegant-dining.png' },
  ];

  let currentFilter = 'All';
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  if (filterContainer) {
    filterContainer.innerHTML = categories.map(cat =>
      `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat}</button>`
    ).join('');

    filterContainer.addEventListener('click', (e) => {
      if (!e.target.classList.contains('filter-btn')) return;
      currentFilter = e.target.dataset.category;
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      render();
    });
  }

  function render() {
    const filtered = currentFilter === 'All'
      ? projects
      : projects.filter(p => p.category === currentFilter);

    grid.innerHTML = filtered.map((p, i) => `
      <div class="gallery-item" data-index="${i}" role="button" tabindex="0" aria-label="View ${p.title}">
        <img src="${p.image}" alt="${p.title} — interior design by BrightNest Interiors" loading="lazy">
        <div class="gallery-item-overlay">
          <h3>${p.title}</h3>
          <span>${p.category}</span>
        </div>
      </div>
    `).join('');

    // Lightbox listeners
    grid.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        openLightbox(filtered, +item.dataset.index);
      });
      item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') openLightbox(filtered, +item.dataset.index);
      });
    });
  }

  render();
}

/* ---------- Custom Lightbox ---------- */
function openLightbox(items, startIndex) {
  // Remove existing lightbox
  const existing = document.querySelector('.lightbox');
  if (existing) existing.remove();

  let current = startIndex;

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox active';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-label', 'Image lightbox');

  function renderLightbox() {
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="${items[current].image}" alt="${items[current].title}">
      </div>
      <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
      <button class="lightbox-prev" aria-label="Previous image">&#8249;</button>
      <button class="lightbox-next" aria-label="Next image">&#8250;</button>
      <div class="lightbox-caption">${items[current].title}</div>
    `;

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLB);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => {
      current = (current - 1 + items.length) % items.length;
      renderLightbox();
    });
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => {
      current = (current + 1) % items.length;
      renderLightbox();
    });
  }

  function closeLB() {
    lightbox.classList.remove('active');
    setTimeout(() => lightbox.remove(), 300);
    document.removeEventListener('keydown', handleKey);
    document.body.style.overflow = '';
  }

  function handleKey(e) {
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowRight') { current = (current + 1) % items.length; renderLightbox(); }
    if (e.key === 'ArrowLeft') { current = (current - 1 + items.length) % items.length; renderLightbox(); }
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLB();
  });

  document.addEventListener('keydown', handleKey);
  document.body.style.overflow = 'hidden';

  renderLightbox();
  document.body.appendChild(lightbox);
}

/* ============================================================
   BLOG PAGE
   ============================================================ */
async function initBlogPage() {
  const posts = await fetchJSON('posts.json');
  const grid = document.getElementById('blogGrid');
  const searchInput = document.getElementById('blogSearch');
  const filterContainer = document.getElementById('blogFilters');

  if (!grid) return;

  let currentCategory = 'All';
  let searchTerm = '';

  const categories = ['All', ...new Set(posts.map(p => p.category))];
  if (filterContainer) {
    filterContainer.innerHTML = categories.map(cat =>
      `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat}</button>`
    ).join('');

    filterContainer.addEventListener('click', (e) => {
      if (!e.target.classList.contains('filter-btn')) return;
      currentCategory = e.target.dataset.category;
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      render();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase();
      render();
    });
  }

  function render() {
    let filtered = currentCategory === 'All'
      ? [...posts]
      : posts.filter(p => p.category === currentCategory);

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.excerpt.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
      );
    }

    if (filtered.length === 0) {
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--clr-text-muted);padding:var(--sp-2xl);">No posts found matching your criteria.</p>';
      return;
    }

    grid.innerHTML = filtered.map(p => blogCardHTML(p)).join('');
  }

  render();
}

/* ============================================================
   BLOG POST (single) PAGE
   ============================================================ */
async function initBlogPostPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('post');

  const posts = await fetchJSON('posts.json');
  const post = posts.find(p => p.slug === slug);

  const header = document.getElementById('postHeader');
  const body = document.getElementById('postBody');
  const notFound = document.getElementById('postNotFound');

  if (!post) {
    if (header) header.style.display = 'none';
    if (body) body.style.display = 'none';
    if (notFound) notFound.style.display = 'block';
    return;
  }

  // Update page title
  document.title = `${post.title} — BrightNest Interiors Blog`;

  if (header) {
    header.innerHTML = `
      <div class="blog-card-meta" style="justify-content:center;">
        <span class="blog-card-category">${post.category}</span>
        <span>${formatDate(post.date)}</span>
        <span>By ${post.author}</span>
      </div>
      <h1>${post.title}</h1>
    `;
  }

  if (body) {
    body.innerHTML = post.content;
  }
}

/* ============================================================
   SERVICES PAGE — FAQ Accordion
   ============================================================ */
function initServicesPage() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all
      faqItems.forEach(fi => {
        fi.classList.remove('active');
        fi.querySelector('.faq-answer').style.maxHeight = null;
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ============================================================
   CONTACT PAGE — Form Validation
   ============================================================ */
function initContactPage() {
  const form = document.getElementById('contactForm');
  const newsletterForm = document.getElementById('contactNewsletter');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // Reset errors
      form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));

      const name = form.querySelector('#contactName');
      const email = form.querySelector('#contactEmail');
      const phone = form.querySelector('#contactPhone');
      const message = form.querySelector('#contactMessage');

      if (!name.value.trim()) {
        name.closest('.form-group').classList.add('has-error');
        valid = false;
      }

      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.closest('.form-group').classList.add('has-error');
        valid = false;
      }

      if (phone.value.trim() && !/^[+]?[\d\s\-()]{7,}$/.test(phone.value)) {
        phone.closest('.form-group').classList.add('has-error');
        valid = false;
      }

      if (!message.value.trim() || message.value.trim().length < 10) {
        message.closest('.form-group').classList.add('has-error');
        valid = false;
      }

      if (valid) {
        showSuccessModal(
          'Message Sent!',
          'Thank you for reaching out. Our design team will respond within 24 hours.'
        );
        form.reset();

        trackEvent('form_submission', {
          form_name: 'contact',
          form_location: 'contact_page'
        });
      }
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput.value.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        showToast('Thanks for subscribing!');
        newsletterForm.reset();
        trackEvent('newsletter_subscribe', { email_source: 'contact_page' });
      }
    });
  }
}

/* ============================================================
   SHARED HTML GENERATORS
   ============================================================ */
function productCardHTML(product) {
  return `
    <div class="product-card">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.name} — ${product.category} by BrightNest Interiors" loading="lazy">
      </div>
      <div class="product-card-body">
        <span class="product-card-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-card-price">$${product.price.toFixed(2)}</p>
        <div class="product-card-actions">
          <button class="btn btn-primary btn-sm add-to-cart-btn"
            data-id="${product.id}"
            data-name="${product.name}"
            data-price="${product.price}"
            data-image="${product.image}">
            Add to Cart
          </button>
        </div>
      </div>
    </div>`;
}

function blogCardHTML(post) {
  return `
    <div class="blog-card">
      <div class="blog-card-image">
        <img src="${post.thumbnail}" alt="${post.title}" loading="lazy">
      </div>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <span class="blog-card-category">${post.category}</span>
          <span>${formatDate(post.date)}</span>
        </div>
        <h3><a href="blog-post.html?post=${post.slug}">${post.title}</a></h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
      </div>
    </div>`;
}

function attachAddToCartListeners(container) {
  container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart({
        id: +btn.dataset.id,
        name: btn.dataset.name,
        price: +btn.dataset.price,
        image: btn.dataset.image
      });
    });
  });
}

/* ---------- Date formatter ---------- */
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
