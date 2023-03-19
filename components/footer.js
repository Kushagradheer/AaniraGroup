class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer id="footer" class="footer row">

    <div class="col-lg-4">
      <div class="info-container d-flex flex-column align-items-center justify-content-center">
        <div class="info-item d-flex">
          <i class="bi bi-geo-alt flex-shrink-0"></i>
          <div>
            <h4>Location:</h4>
            <p>Aanira Group ,Besides Eulogia Hotel Rd, off Sarkhej-Gandhinagar Highway, Gota, Ahmedabad</p>
          </div>
        </div><!-- End Info Item -->

        <div class="info-item d-flex">
          <i class="bi bi-envelope flex-shrink-0"></i>
          <div>
            <h4>Email:</h4>
            <p>nrpatel345@gmail.com</p>
          </div>
        </div><!-- End Info Item -->

        <div class="info-item d-flex">
          <i class="bi bi-phone flex-shrink-0"></i>
          <div>
            <h4>Call:</h4>
            <p>+91 98252 82771</p>
          </div>
        </div><!-- End Info Item -->

        <div class="info-item d-flex">
          <i class="bi bi-clock flex-shrink-0"></i>
          <div>
            <h4>Open Hours:</h4>
            <p>Mon-Sat: 10:00AM - 8:00 PM</p>
          </div>
        </div><!-- End Info Item -->
      </div>

    </div>

    <div class="col-lg-8 d-flex justify-content-end">
      <img src="/assets/img/aanira-logo.png" style="height:500px">
    </div>
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Gp</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
      `;
  }
}

customElements.define("footer-component", Footer);
