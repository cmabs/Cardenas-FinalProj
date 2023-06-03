import React from 'react';

const Homepage = () => {
  return (
    <div style={{ backgroundImage: 'url(background.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
    <div>
      {/* Navbar */}
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
    </div>

      {/* First Container */}
      <div className="container-fluid bg-1 text-center">
        <h3 className="margin">What is MotherCompany?</h3>
        <img src="logo.png" className="img-responsive img-circle margin" style={{ display: 'inline' }} alt="Bird" width="300" height="300" />
        <p>Welcome to EmpowerMom, an online platform dedicated to empowering single mothers through comprehensive learning resources. We understand the unique challenges faced by single mothers, and our goal is to provide them with the knowledge and skills they need to thrive personally, professionally, and as parents.</p>
      </div>

      {/* Third Container (Grid) */}
      <div className="container-fluid bg-3 text-center">
        <h3 className="margin">COURSES OFFERED</h3><br />
        <div className="row">
          <div className="col-sm-4">
            <p>Provide single parents with access to a variety of online cooking classes taught by culinary experts. These classes can cover various cuisines, techniques, and dietary preferences.</p>
            <a href="/CookingCourse"><img src="cook.jpg" className="img-responsive margin" style={{ width: '100%' }} alt="Image" /></a>
          </div>
          <div className="col-sm-4">
            <p>Provide comprehensive tutorials on sewing techniques, garment construction, and alterations. Cover topics such as pattern reading, fabric selection, and basic sewing machine operation.</p>
            <a href="/TailoringPage"><img src="tailoring.jpg" className="img-responsive margin" style={{ width: '100%' }} alt="Image" /></a>
          </div>
          <div className="col-sm-4">
            <p>Educate single parents about the fundamentals of online selling, including setting up an online store, managing inventory, and processing payments.</p>
            <a href="/Ecommerce"><img src="shop.png" className="img-responsive margin" style={{ width: '100%' }} alt="Image" /></a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container-fluid bg-4 text-center">
         <p>Click on the pictures to be redirected on the courses</p>  
      </footer>
    </div>
  );
};

export default Homepage;
