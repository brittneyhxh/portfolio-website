// import { NavLink } from "react-router-dom";
import "./SentimentAnalysis.css";

import slide1 from "./sentiment-slide-1.png";
import slide2 from "./sentiment-slide-2.png";
import slide3 from "./sentiment-slide-3.png";
import slide4 from "./sentiment-slide-4.png";

function SentimentAnalysis() {
  return (

    <div className="sentiment-page"> 
  
      {/* <NavLink to="/" className="back-link">
        Back to Projects
      </NavLink> */}

      <section className="hero-section">
        <h1>AI Sentiment Analysis Workshop</h1>
        <p className="subtitle">
          Designed and delivered a hands-on introduction to building a 
          sentiment analysis model using TensorFlow and Keras.
        </p>
      </section>
    
      <div className="workshop-container">

        <section className="section">
          <h2>Problem</h2>
          <p>
            Many students understand machine learning theory but struggle to
            implement models end-to-end. This workshop bridged that gap by
            guiding participants through a live implementation of a sentiment
            classifier.
          </p>
        </section>

        <section className="section">
          <h2>Technical Implementation</h2>
          <ul>
            <li>Machine learning pipeline</li>
            <li>Binary classification with regression models</li>
            <li>Training/testing dataset split</li>
            <li>Model evaluation using accuracy metrics</li>
            <li>Use of Google Colab notebook and scikit-learn to apply theoretical concepts</li>
          </ul>
        </section>

        <section className="section">
          <h2>Workshop Highlights</h2>

          <div className="highlight">
            <img src={slide1} alt="Model Applications" />
          </div>

          <div className="highlight">
            <img src={slide2} alt="Tools and Resources" />
          </div>

          <div className="highlight">
            <img src={slide3} alt="ML Pipeline" />
          </div>

          <div className="highlight">
            <img src={slide4} alt="Supervised Learning" />
          </div>

        </section>

        <section className="section">
          <h2>Impact</h2>
          <p>
            The workshop provided students with hands-on exposure to natural
            language processing, reinforcing core machine learning concepts through live implementation.
          </p>
        </section>

      </div>
    
    </div>

  );
}

export default SentimentAnalysis;
