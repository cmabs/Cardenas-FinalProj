import React from 'react';

const EcommerceLearningResources = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Signup">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/CookingCourse">Cooking Course</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/TailoringPage">Tailoring Course</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/EcommercePage">Ecommerce Course</a>
            </li>
          </ul>
        </div>
      </nav> 
   
      <div style={{ backgroundImage: 'url(background.jpg)', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
          <div style={{ maxWidth: '800px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', textAlign: 'center' }}>
          <h1>Online Shop/E-commerce Learning Resources</h1>
      
      <h2>Setting Up an Online Store</h2>
      <p>Learn how to set up your own online store with these resources:</p>
      <ul>
        <li>
          <a href="https://www.shopify.com/">Shopify</a> - A popular e-commerce platform that provides everything you need to start, run, and grow your online store.
        </li>
        <li>
          <a href="https://woocommerce.com/">WooCommerce</a> - A customizable e-commerce platform built on WordPress, offering robust features for selling products online.
        </li>
        <li>
          <a href="https://www.bigcommerce.com/">BigCommerce</a> - An all-in-one e-commerce platform that enables you to create a professional online store with ease.
        </li>
      </ul>
      
      <h2>Managing Inventory</h2>
      <p>Learn how to effectively manage your inventory with these resources:</p>
      <ul>
        <li>
          <a href="https://www.tradegecko.com/">TradeGecko</a> - Inventory management software that helps you keep track of stock levels, automate orders, and streamline your operations.
        </li>
        <li>
          <a href="https://www.zoho.com/inventory/">Zoho Inventory</a> - An inventory management solution that provides real-time visibility into your stock, sales, and order fulfillment.
        </li>
        <li>
          <a href="https://www.stitchlabs.com/">Stitch Labs</a> - A comprehensive inventory management system that centralizes inventory, orders, and sales across multiple channels.
        </li>
      </ul>
      
      <h2>Processing Payments</h2>
      <p>Learn how to securely process payments for your online store with these resources:</p>
      <ul>
        <li>
          <a href="https://www.stripe.com/">Stripe</a> - A widely-used payment gateway that allows businesses to accept credit card payments securely.
        </li>
        <li>
          <a href="https://www.paypal.com/">PayPal</a> - A trusted payment platform that enables online transactions and supports various payment methods.
        </li>
        <li>
          <a href="https://www.braintreepayments.com/">Braintree</a> - A full-stack payments platform that offers flexible integration options and supports global payment methods.
        </li>
      </ul>
      
      <p>Remember to research and choose the platforms and tools that best suit your specific needs and requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceLearningResources;
