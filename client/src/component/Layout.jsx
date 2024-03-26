function Layout() {
  return (
    <div className="main">
      <section className="hero-image">
        <div className="cta">
          <h1>Welcome to our Website</h1>
          <div>
            <p>Discover more about our services and products.</p>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </section>
      <section className="product-feature">
        <div className="intro">
          <h1>
            Explore our website for expertly <br />
            crafted house furniture solutions
          </h1>
          Partnering with local interior designers, we bring exceptional
          furniture tailored to both businesses and residents. <br />
          Our team takes pride in our craftsmanship to ensure that our clients
          are satisfied with the service they receive.
          <br />
          Our products are manufactured with the help of CNC machines and
          automation which allows for a streamlined manufacturing process.
        </div>
        <div className="image-section">
          <div className="section-inner">
            <div className="inner-img1"></div>
            <div className="inner-img2"></div>
            <div className="inner-img3"></div>
          </div>
          <div className="wide-image"></div>
        </div>
      </section>
      <section>
        <p>DecoHome Inc. 2024 </p>
      </section>
    </div>
  );
}

export default Layout;
