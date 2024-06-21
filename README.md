# Gelateria Web Application

#### Overview

Gelateria is a web application designed to showcase the best flavors of gelato, provide information about our story, and guide customers to our physical locations. The application also promotes the mobile app, which offers exclusive deals and competitions.

![alt text](image.png)

#### Features

1. **Responsive Design**: The application is designed to be fully responsive, providing an optimal viewing experience across a wide range of devices.
2. **Animations**: Utilizes framer-motion to add smooth animations and transitions, enhancing the user experience.
3. **Popular Flavors Section**: Highlights the most popular gelato flavors.
4. **Top Flavors Section**: Displays top flavors in an attractive card layout.
5. **Our Story Section**: Shares the story of Gelateria with an engaging text and image layout.
6. **Latest Post Section**: Showcases the latest news and updates from Gelateria.
7. **Visit Us Section**: Provides details about physical store locations with an embedded Google map.
8. **Download App Section**: Promotes the mobile application with download links for iOS and Android.
9. **Footer**: Includes quick links, contact information, and social media icons.

#### Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Framer Motion**: A library to power animations and transitions.
- **Material-UI**: A popular React UI framework for designing components.
- **CSS**: For styling the application.

#### Getting Started

##### Prerequisites

- **Node.js** (version 14.x or later)
- **npm** (version 6.x or later)

##### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/winsy901/Gelato.git
    cd Ice-Cream
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

   The application will be available at `http://localhost:3000`.

#### Customization

##### Adding New Flavors

To add new flavors to the **Most Popular** or **Top Flavours** sections, modify the respective components (`MostPopular.js` and `TopFlavours.js`) to include new entries.

##### Updating Content

All textual content can be updated directly in the JSX files for each section (e.g., `OurStory.js`, `LatestPost.js`, etc.). Images should be placed in the `public` directory and referenced appropriately.

#### Deployment

To build the application for production, run:

```sh
npm run build