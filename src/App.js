import './App.css';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Card, Typography, CardContent } from '@mui/material';

function App() {
  return (
    <div className="App">
      <motion.div
        className="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <nav className="menu">
          <ul>
            <li className="logo-item"><img className="logo" src="/gelato1.png" alt="Logo" /></li>
            <li><a href>HOME</a></li>
            <li><a href="#Most-Popular">PRODUCT</a></li>
            <li><a href="story">OUR STORY</a></li>
            <li><a href="about.asp">NEWS</a></li>
            <li><a href="about.asp">CONTACT</a></li>
          </ul>
        </nav>
      </motion.div>

      {/* Hero Section */}
      <div className="Hero">
        <motion.p
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          your daily dose of gelato
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="shop-button"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            transition={{ duration: 5 }}
          >
            SHOP NOW
          </motion.button>
          <motion.img
            className="gelato-img"
            src="/hazelnut_gelato-Photoroom-4.png"
            alt="Gelato"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.p>
        <motion.div
          className="scroll-down"
          initial={{ y: 0 }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 2,
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} size="3x" color="#ffffff" />
        </motion.div>
      </div>

      <div className="Most-Popular">
        <p className="title">MOST <br /><span className="underline-red">POPULAR</span></p>
        <motion.div
          className="flavors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.div className="flavor" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <img className="most-popular-gelato" src="strawberry.png" alt="ALMOND"></img>
            <p className="flavor-title">ALMOND</p>
            <p className="flavor-description">Captures the essence of the Mediterranean</p>
          </motion.div>
          <motion.div className="flavor" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <img className="most-popular-gelato" src="strawberry.png" alt="AMARENA"></img>
            <p className="flavor-title">AMARENA</p>
            <p className="flavor-description">Captures the essence of the Mediterranean</p>
          </motion.div>
          <motion.div className="flavor" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <img className="most-popular-gelato" src="strawberry.png" alt="MINT CHOCOLATE"></img>
            <p className="flavor-title">MINT CHOCOLATE</p>
            <p className="flavor-description">For freshly minted easy sophistication</p>
          </motion.div>
          <motion.div className="flavor" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <img className="most-popular-gelato" src="strawberry.png" alt="MINT CHOCOLATE"></img>
            <p className="flavor-title">MINT CHOCOLATE</p>
            <p className="flavor-description">For freshly minted easy sophistication</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="Top-Flavours">
        <p className="top-flavours-title">TOP <br /><span className="underline-red">FLAVOURS</span></p>
        <div className="flavours-container">
          <Card sx={{ width: 280, height: 150, borderRadius: 5, margin: '12px', background: 'rgba(255, 165, 0, 0.4)', border: '0.5px solid white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', marginBottom: 10 }}>
            <CardContent sx={{ flex: '1 1 auto' }}>
              <Typography className="card-title" sx={{ fontSize: 32, fontFamily: 'Bradley Hand', color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', textAlign: 'start' }} gutterBottom>
                Fans <br />Favourite Flavour
              </Typography>
            </CardContent>
            <img className="most-popular-gelato" src="/AdobeStock_53879919-Photoroom-2.png" alt="MINT CHOCOLATE" style={{ width: '100px', height: 'auto', transform: 'rotate(20deg)' }} />
          </Card>

          <Card sx={{ width: 230, height: 150, borderRadius: 5, margin: '12px', background: 'rgba(255,225,53,0.7)', border: '0.5px solid white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px' }}>
            <CardContent sx={{ flex: '1 1 auto' }}>
              <Typography className="card-title" sx={{ fontSize: 32, fontFamily: 'Bradley Hand', color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', textAlign: 'start' }} gutterBottom>
                Banana <br /> Flavour
              </Typography>
            </CardContent>
            <img className="most-popular-gelato" src="banana.png" alt="Banana Flavour" style={{ width: '150px', height: 'auto', transform: 'rotate(-5deg)' }} />
          </Card>

          <Card sx={{ width: 230, height: 150, borderRadius: 5, margin: '12px', background: '#f08080', border: '0.5px solid white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px' }}>
            <CardContent sx={{ flex: '1 1 auto' }}>
              <Typography className="card-title" sx={{ fontSize: 32, fontFamily: 'Bradley Hand', color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', textAlign: 'start' }} gutterBottom>
                Berry <br /> Flavour
              </Typography>
            </CardContent>
            <img className="most-popular-gelato" src="strawberry1.png" alt="Strawberry Flavour" style={{ width: '120px', height: 'auto', transform: 'rotate(5deg)' }} />
          </Card>

          <Card sx={{ width: 230, height: 150, borderRadius: 5, margin: '12px', background: 'orange', border: '0.5px solid white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px' }}>
            <CardContent sx={{ flex: '1 1 auto' }}>
              <Typography className="card-title" sx={{ fontSize: 32, fontFamily: 'Bradley Hand', color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', textAlign: 'start' }} gutterBottom>
                Orange <br /> Flavour
              </Typography>
            </CardContent>
            <img className="most-popular-gelato" src="strawberry1.png" alt="Strawberry Flavour" style={{ width: '130px', height: 'auto', transform: 'rotate(15deg)' }} />
          </Card>
        </div>
      </div>


      <div className="Top-Flavours1">
        <button className="View-all-flavours">VIEW ALL FLAVOURS</button>
      </div>

      <div className="Our-Story">
        <p className="our-story-title">OUR <br /><span className="underline-red">STORY!</span></p>
        <div className="story-container">
          <div className="story-text">
            <p>Have you ever had really great, oh my God, I've died and gone to Heaven, this is life-changing, exquisite, fresh Gelateria?</p>
            <h4>Indulge in the Sweet Symphony of Flavors, Crafted with Love and Served with a Smile, Bringing Joy to Every Scoop, Every Day!</h4>
            <motion.button
              className="learn-more-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              LEARN MORE
            </motion.button>
          </div>
          <div className="story-image">
            <motion.img
              src="Gelato-1-1140x530-Photoroom.png"
              alt="Ice Cream Cone"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      <div className="Latest-Post">
        <div className="Latest-Post-Title">
          <p>LATEST <br /><span className="underline-red">POST</span></p>
        </div>
        <div className="Latest-Post-Box">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Card sx={{ width: 350, height: 250, borderRadius: 5, margin: '8px', border: '0.5px solid rgb(245,222,179)', display: 'flex', alignItems: 'center', padding: '12px' }}>
              <img src="chef.png" alt="Post Image" style={{ width: '40%', height: 'auto', borderRadius: '5px', marginRight: '12px' }} />
              <CardContent sx={{ flex: '1 1 auto' }}>
                <Typography className="card-date" sx={{ fontSize: 12, color: 'gray', marginBottom: 1 }}>JUNE 2, 2024</Typography>
                <Typography className="card-title" sx={{ fontSize: 16, fontFamily: 'Arial', color: 'black', fontWeight: 'bold', marginBottom: 2 }}>
                  Discover Our New Pistachio Flavor!
                </Typography>
                <Typography className="card-description" sx={{ fontSize: 14, fontFamily: 'Arial', color: 'black' }}>
                  We are excited to announce the arrival of our new Pistachio flavor. Come in and try it today!
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Card sx={{ width: 230, height: 250, borderRadius: 5, margin: '8px', border: '0.5px solid rgb(103, 203, 219)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly', padding: '12px' }}>
              <CardContent sx={{ flex: '1 1 auto' }}>
                <Typography className="card-date" sx={{ fontSize: 12, color: 'gray', marginBottom: 1 }}>MAY 10, 2024</Typography>
                <Typography className="card-title" sx={{ fontSize: 16, fontFamily: 'Arial', color: 'black', fontWeight: 'bold', marginBottom: 2 }}>
                  Summer Special: Mango Sorbet
                </Typography>
                <Typography className="card-description" sx={{ fontSize: 14, fontFamily: 'Arial', color: 'black' }}>
                  Beat the heat with our refreshing Mango Sorbet, available for a limited time this summer!
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Card sx={{ width: 230, height: 250, borderRadius: 5, margin: '8px', border: '0.5px solid #ff5e5ea8', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', padding: '12px' }}>
              <CardContent sx={{ flex: '1 1 auto' }}>
                <Typography className="card-date" sx={{ fontSize: 12, color: 'gray', marginBottom: 1 }}>APRIL 20, 2024</Typography>
                <Typography className="card-title" sx={{ fontSize: 16, fontFamily: 'Arial', color: 'black', fontWeight: 'bold', marginBottom: 2 }}>
                  Celebrate with Our Strawberry Sundae
                </Typography>
                <Typography className="card-description" sx={{ fontSize: 14, fontFamily: 'Arial', color: 'black' }}>
                  Join us in celebrating summer with our delicious Strawberry Sundae, topped with fresh berries!
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="Visit-Us">
        <div className="Visit-Us-Title">
          <p>WHERE TO <br /><span className="underline-red">VISIT US</span></p>
        </div>
        <div className="Visit-Us-Box">
          <motion.div
            className="location"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src="location.png" alt="Location Icon" className="location-icon" />
            <Typography className="location-title">BAYSWATER</Typography>
            <Typography className="location-address">63 Westbourne Grove <br /> London W2 4UA <br /> Telephone <a href="tel:02072219549">0207 221 9549</a></Typography>
          </motion.div>
          <motion.div
            className="location"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src="location.png" alt="Location Icon" className="location-icon" />
            <Typography className="location-title">SOHO</Typography>
            <Typography className="location-address">102 Wardour Street <br /> London W1F 0TP <br /> Telephone <a href="tel:02072871045">020 7287 1045</a></Typography>
          </motion.div>
          <motion.div
            className="location"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src="location.png" alt="Location Icon" className="location-icon" />
            <Typography className="location-title">SELFRIDGES & CO</Typography>
            <Typography className="location-address">400 Oxford Street <br /> London W1A 1AB <br /> Telephone <a href="tel:02073183705">020 7318 3705</a></Typography>
          </motion.div>
          <motion.div
            className="location"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src="location.png" alt="Location Icon" className="location-icon" />
            <Typography className="location-title">MARBLE ARCH</Typography>
            <Typography className="location-address">42-44 Thurlow Street <br /> London SW7 2LT <br /> Telephone <a href="tel:02075899041">020 7589 9041</a></Typography>
          </motion.div>
        </div>
        <div className="Visit-Us-Map">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1h1w1slR59sBBofMXOFA-jEtXt5dFF4Y&ehbc=2E312F"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="Download-App">
        <div className="Download-App-Title">
          <p>DOWNLOAD <br /><span className="underline-red">THE APP</span> TODAY</p>
        </div>
        <motion.div
          className="Download-App-Content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="download-text">
            <Typography className="download-description" sx={{fontSize: '26px'}}>
              Download the app and pay on your phone to get a free Gelato. Sweet deals, exclusive offers, and scoopastic competitions!
            </Typography>
            <motion.div
              className="app-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <img src="app-store-badge.png" alt="Download on the App Store" />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src="google-play-badge.png" alt="Get it on Google Play" />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="download-image"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src="app-phone-mockup.png" alt="App Phone Mockup" />
          </motion.div>
        </motion.div>
      </div>

      <footer className="Footer">
        <motion.div
          className="Footer-Content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="Footer-Logo">
            <img src="gelato1.png" alt="Gelateria Del Mare Logo" />
          </div>
          <div className="Footer-Links">
            <div className="Footer-Column">
              <h4>QUICK LINK</h4>
              <ul>
                <li><a href="#our-story">Our Story</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#where-to-buy">Where to Buy</a></li>
                <li><a href="#terms-of-use">Terms of Use</a></li>
                <li><a href="#privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="Footer-Column">
              <h4>CONTACT US</h4>
              <address>
                63 Westbourne Grove <br />
                London W2 4UA <br />
                Phone: <a href="tel:1585829689">158-582-9689</a> <br />
                Email: <a href="mailto:info@gelateria.com">info@gelateria.com</a>
              </address>
            </div>
          </div>
          <div className="Footer-Social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src="twitter-icon.png" alt="Twitter" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="instagram-icon.png" alt="Instagram" /></a>
          </div>
        </motion.div>
        <div className="Footer-Bottom">
          <p>©2024 GELATERIA DEL MARE</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
