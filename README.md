Overview

Gelateria Del Mare is a web application designed to showcase the best flavors of gelato, provide information about our story, and guide customers to our physical locations. The application also promotes the mobile app, which offers exclusive deals and competitions.

Features

	1.	Responsive Design: The application is designed to be fully responsive, providing an optimal viewing experience across a wide range of devices.
	2.	Animations: Utilizes framer-motion to add smooth animations and transitions, enhancing the user experience.
	3.	Popular Flavors Section: Highlights the most popular gelato flavors.
	4.	Top Flavors Section: Displays top flavors in an attractive card layout.
	5.	Our Story Section: Shares the story of Gelateria Del Mare with an engaging text and image layout.
	6.	Latest Post Section: Showcases the latest news and updates from Gelateria Del Mare.
	7.	Visit Us Section: Provides details about physical store locations with an embedded Google map.
	8.	Download App Section: Promotes the mobile application with download links for iOS and Android.
	9.	Footer: Includes quick links, contact information, and social media icons.

Technologies Used

	•	React: A JavaScript library for building user interfaces.
	•	Framer Motion: A library to power animations and transitions.
	•	Material-UI: A popular React UI framework for designing components.
	•	CSS: For styling the application.

Getting Started

Prerequisites

	•	Node.js (version 14.x or later)
	•	npm (version 6.x or later)

Installation

1.	Clone the repository:
git clone https://github.com/your-username/gelateria-del-mare.git
cd gelateria-del-mare

2.	Install dependencies:
npm install

3.	Start the development server:
npm start

The application will be available at http://localhost:3000.


Project Structure:
.
├── public
│   ├── index.html
│   ├── gelato1.png
│   ├── chef.png
│   ├── app-store-badge.png
│   ├── google-play-badge.png
│   ├── app-phone-mockup.png
│   ├── strawberry.png
│   ├── banana.png
│   ├── AdobeStock_53879919-Photoroom-2.png
│   ├── location.png
│   ├── facebook-icon.png
│   ├── twitter-icon.png
│   └── instagram-icon.png
├── src
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── components
│       ├── Header.js
│       ├── Hero.js
│       ├── MostPopular.js
│       ├── TopFlavours.js
│       ├── OurStory.js
│       ├── LatestPost.js
│       ├── VisitUs.js
│       └── DownloadApp.js
├── package.json
└── README.md

Customization

Adding New Flavors

To add new flavors to the Most Popular or Top Flavours sections, modify the respective components (MostPopular.js and TopFlavours.js) to include new entries.

Updating Content

All textual content can be updated directly in the JSX files for each section (e.g., OurStory.js, LatestPost.js, etc.). Images should be placed in the public directory and referenced appropriately.


Deployment

To build the application for production, run:
npm run build

This will create an optimized build of your application in the build directory, ready to be deployed to a static hosting service like Vercel, Netlify, or GitHub Pages.

Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub if you have suggestions or improvements.

License

This project is licensed under the MIT License.

Acknowledgements

	•	React
	•	Framer Motion
	•	Material-UI