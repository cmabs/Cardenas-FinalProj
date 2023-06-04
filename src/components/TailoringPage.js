import React, { useEffect } from 'react'; 

const TailoringPage = () => {
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
      
      <div style={{ backgroundImage: 'url(background.jpg)', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
          <div style={{ maxWidth: '800px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', textAlign: 'center' }}>
            <h1>Tailoring Course</h1>
            <h3>Lesson 1: Introduction to Sewing</h3>
            <p>In this lesson, you will learn the basics of sewing and get an introduction to different sewing techniques.</p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/https://www.youtube.com/watch?v=4oPpl097hGE"
              title="Sewing Techniques"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Watch the video above for an overview of sewing techniques:</p>
            <h2>Lesson 2: Garment Construction</h2>
            <p>In this lesson, you will learn how to construct garments and create custom-fitted clothing.</p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/https://www.youtube.com/watch?v=t3AtMXbzsOo"
              title="Garment Construction"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Watch the video below to learn about garment construction:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailoringPage;
