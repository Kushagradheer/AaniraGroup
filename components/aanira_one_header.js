class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header id="header" class="header d-flex align-items-center">
  
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" class="logo d-flex align-items-center">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="assets/img/logo.png" alt=""> -->
          <h1>Aanira  Group<span>.</span></h1>
        </a>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#brochure">Brochure</a></li>
            <li><a href="#plans">Floor Plans</a></li>
            <li class="dropdown"><a href="#"><span>Projects</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li><a href="/Projects/index.html">Aanira - I</a></li>
                <li><a href="/Projects/cpw_index.html">Aanira Poly-Plast</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav><!-- .navbar -->
  
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  
      </div>
    </header>
      `;
    }
  }
  
  customElements.define("header-component", Header);
  