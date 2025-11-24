import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5 align-items-center">
          <Col md="5" className="mb-4 mb-md-0">
            <img src={dataportfolio[0].img} alt="Fashion Style Website" className="img-fluid rounded" />
          </Col>
          <Col md="7">
            <h2 className="mb-3">🧥 Project 1 — Fashion Style Website</h2>
            <p><strong>Tech:</strong> React.js, Tailwind CSS, Firebase (Auth + Database), Python ML Model</p>
            <h5 className="mt-3">Overview</h5>
            <p>A full-stack fashion e-commerce website designed to provide a responsive UI, secure login system, and AI-based outfit recommendations. Users can browse products, like items, and view personalized fashion suggestions.</p>
            <h5 className="mt-3">Key Features</h5>
            <ul>
              <li>👤 User Authentication using Firebase</li>
              <li>🛍️ Real-time product inventory from Firebase Database</li>
              <li>🤖 ML-powered recommendation engine using Myntra dataset</li>
              <li>📱 Fully responsive UI using Tailwind CSS</li>
              <li>🔎 Search & Filter based on trends and categories</li>
            </ul>
            <h5 className="mt-3">AI Recommendation Engine</h5>
            <ul>
              <li>Processed Myntra dataset using Python, Pandas, Scikit-learn</li>
              <li>Analyzed user selections to suggest similar trending outfits</li>
              <li>Implemented Regression + Classification techniques for accuracy</li>
              <li>Enhanced user experience through personalization</li>
            </ul>
            <h5 className="mt-3">Role & Contributions</h5>
            <ul>
              <li>Designed entire frontend using React components</li>
              <li>Integrated Firebase auth & data operations</li>
              <li>Developed ML model and connected results to frontend</li>
              <li>Focus on performance, clean UI, seamless UX</li>
            </ul>
            <h5 className="mt-3">Outcome</h5>
            <ul>
              <li>Improved usability with fast load & SEO-friendly UI</li>
              <li>Tracked user behavior to provide tailored outfit suggestions</li>
            </ul>
            <a href="https://github.com/Rahul-chauhan2000/Fashion-Style-website" target="_blank" rel="noopener noreferrer" className="text_2">
              <div id="button_p" className="ac_btn btn me-3">
                GitHub Repo
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="mb-5 align-items-center">
          <Col md="5" className="mb-4 mb-md-0">
            <img src={dataportfolio[1].img} alt="Laptop Price Prediction" className="img-fluid rounded" />
          </Col>
          <Col md="7">
            <h2 className="mb-3">💻 Project 2 — Laptop Price Prediction System</h2>
            <p><strong>Tech:</strong> Python, Pandas, NumPy, Scikit-learn, Matplotlib</p>
            <h5 className="mt-3">Overview</h5>
            <p>A machine learning model that predicts accurate laptop prices based on technical specifications like processor, RAM, GPU, display, and brand.</p>
            <h5 className="mt-3">Key Features</h5>
            <ul>
              <li>🧹 Data preprocessing & feature engineering</li>
              <li>📊 Model evaluation using MSE & R² score</li>
              <li>🌲 Compared models: Linear Regression, Decision Tree, Random Forest</li>
              <li>📈 Visual performance insights using graphs and metrics</li>
              <li>🔄 Trends understanding for real-world pricing strategy</li>
            </ul>
            <h5 className="mt-3">Dataset Insights</h5>
            <ul>
              <li>Cleaned and transformed marketplace data</li>
              <li>Handled missing values and outliers</li>
              <li>Encoded categorical features (Brand, CPU, GPU etc.)</li>
              <li>Normalized large numerical differences</li>
            </ul>
            <h5 className="mt-3">Role & Contributions</h5>
            <ul>
              <li>Built & validated ML models</li>
              <li>Selected best performing model using metrics</li>
              <li>Created clear documentation for results</li>
              <li>Implemented UI (optional: Streamlit) for predictions</li>
            </ul>
            <h5 className="mt-3">Outcome</h5>
            <ul>
              <li>Achieved strong prediction accuracy</li>
              <li>Useful for customers & sellers to evaluate fair pricing</li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-5 align-items-center">
          <Col md="5" className="mb-4 mb-md-0">
            <img src={dataportfolio[2].img} alt="3D Carousel UI" className="img-fluid rounded" />
          </Col>
          <Col md="7">
            <h2 className="mb-3">🎡 Project 3 — 3D Carousel UI Component</h2>
            <p><strong>Tech:</strong> React.js, Vite, CSS 3D Transformations, JavaScript Animations</p>
            <h5 className="mt-3">Overview</h5>
            <p>A modern 3D image carousel built with React and CSS transformations that delivers smooth animations and interactive UI transitions. This component can be reused in product galleries, hero sliders, and portfolios.</p>
            <h5 className="mt-3">Key Features</h5>
            <ul>
              <li>🎯 3D card rotation using CSS perspective & transform</li>
              <li>⚡ Vite powered fast performance and HMR support</li>
              <li>🔁 Auto & Manual slide navigation</li>
              <li>📱 Fully responsive layout for mobile and desktop</li>
              <li>♻️ Modular & reusable React component structure</li>
            </ul>
            <h5 className="mt-3">Technical Highlights</h5>
            <ul>
              <li>Clean component-based architecture</li>
              <li>FPS-friendly animations (no heavy libraries)</li>
              <li>ESLint rules integrated for cleaner code</li>
              <li>Easy deployment using Vercel</li>
            </ul>
            <h5 className="mt-3">Project Purpose</h5>
            <p>Focused on learning UI animation techniques in React and enhancing visual design skills for modern portfolio websites.</p>
            <a href="https://3d-carousel-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text_2">
              <div id="button_h" className="ac_btn btn">
                3D Carousel Live
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </a>
            <a href="https://github.com/Rahul-chauhan2000/3d-carousel" target="_blank" rel="noopener noreferrer" className="text_2">
              <div id="button_p" className="ac_btn btn ms-3">
                GitHub Repo
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </a>
          </Col>
        </Row>
        
      </Container>
    </HelmetProvider>
  );
};
