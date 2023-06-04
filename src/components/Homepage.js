import React, { useEffect } from 'react'; 

const Homepage = () => {
  useEffect(() => {
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    const popperScript = document.createElement('script');
    popperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.6/umd/popper.min.js';
    popperScript.async = true;
    document.body.appendChild(popperScript);

    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
    bootstrapScript.async = true;
    document.body.appendChild(bootstrapScript);

    return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(popperScript);
      document.body.removeChild(bootstrapScript);
    };
  }, []);

  return (
    <div style={{ backgroundImage: 'url(background.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/CookingCourse">
                    Cooking Course
                  </a>
                  <a className="dropdown-item" href="/TailoringPage">
                    Tailoring Course
                  </a>
                  <a className="dropdown-item" href="/EcommercePage">
                    Ecommerce Course
                  </a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link btn btn-primary" href="/Login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-primary" href="/Signup">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* First Container */}
      
      <div className="container-fluid bg-1 text-center">
        <img src="logo.png" width="250" height="250" />  
        <h4 className="margin">What is Mother Company?</h4>
        <p className="text-left" style={{textAlign:'left'}}> Welcome to MotherCompany, an online platform dedicated to empowering single mothers through comprehensive learning resources. We understand the unique challenges faced by single mothers, and our goal is to provide them with the knowledge and skills they need to thrive personally, professionally, and as parents.</p>
        <p className="text-left" style={{textAlign:'left'}}>At MotherCompany, we offer a wide range of learning resources designed specifically for single mothers, with a focus on personal development, career advancement, and parenting skills. Our platform is user-friendly, accessible, and tailored to meet the diverse needs and interests of single mothers.</p>
        <br/>
      </div>

      {/* Third Container (Grid) */}
      <div className="container-fluid bg-3 text-center">
        <h3 className="margin">COURSES OFFERED</h3><br />
        <div className="row">
          <div className="col-sm-4">
            <p className="text-left">Provide single parents with access to a variety of online cooking classes taught by culinary experts. These classes can cover various cuisines, techniques, and dietary preferences.</p>
            <a href="/CookingCourse"><img src="cook.jpg" className="img-responsive margin" style={{ width: '100%' }} alt="Image" /></a>
            <p><strong>Cooking Course</strong></p> {/* Added descriptive text */}
          </div>
          <div className="col-sm-4">
            <p className="text-left">Provide comprehensive tutorials on sewing techniques, garment construction, and alterations. Cover topics such as pattern reading, fabric selection, and basic sewing machine operation.</p>
            <a href="/TailoringPage"><img src="tailoring.jpg" className="img-responsive margin" style={{ width: '100%' }} alt="Image" /></a>
            <p><strong>Tailoring Course</strong></p> {/* Added descriptive text */}
          </div>
          <div className="col-sm-4">
            <p className="text-left">Educate single parents about the fundamentals of online selling, including setting up an online store, managing inventory, and processing payments.</p>
            <a href="/EcommercePage"><img src="shop.png" className="img-responsive margin" style={{ width: '100%' }} alt="Image" /></a>
            <p><strong>Ecommerce Course</strong></p> {/* Added descriptive text */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container-fluid bg-4 text-center">
        <p>Click on the pictures to be redirected to the courses</p> {/* Updated text */}
      </footer>
    </div>
  );
};

export default Homepage;
