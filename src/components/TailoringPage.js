import React from 'react';

const TailoringPage = () => {
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
