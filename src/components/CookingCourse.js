import React from 'react';

const CookingCoursePage = () => {
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
        <div style={{ maxWidth: '800px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <h1 style={{ textAlign: 'center' }}>Cooking Course</h1>
          <h3>Lesson 1: Introduction to Italian Cuisine</h3>
          <p>In this lesson, you will learn the basics of Italian cuisine and get an introduction to some popular Italian dishes.</p>
          <img src="pasta.jpeg" alt="Pasta" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }} />
          <p>Here's an image of a delicious pasta dish:</p>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            title="Cooking Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Watch the video below for a step-by-step tutorial on preparing pasta:</p>
          <h2>Lesson 2: Baking Techniques</h2>
          <p>In this lesson, you will learn various baking techniques and tips for creating mouthwatering desserts.</p>
          <img src="cake.jpg" alt="Cake" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }} />
          <p>Check out this beautiful cake:</p>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/VIDEO_ID_2"
            title="Baking Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Watch the video below to learn how to bake a delicious cake:</p>
        </div>
      </div>
    </div>
  );
};

export default CookingCoursePage;
