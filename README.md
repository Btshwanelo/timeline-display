# React Timeline Display

This project is a single-page React application that fetches and displays content from a provided JSON resource. The application makes an AJAX call to retrieve data and then formats and presents it in a user-friendly interface.

## Project Overview

The application fetches data from `https://arthurfrost.qflo.co.za/php/getTimeline.php`. The main contents of the data include images, icons, and audio files. Images and icons are located at `https://arthurfrost.qflo.co.za/Images/`, while audio files can be found at `https://arthurfrost.qflo.co.za/MP3/`. The application formats and displays this data, providing a nice user experience.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

This project requires Node.js and npm (Node Package Manager) to be installed on your machine. You can download and install them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:

   git clone [https://github.com/Btshwanelo/timeline-display](https://github.com/Btshwanelo/timeline-display)

2. Navigate to the project directory:

   cd timeline-display

3. Install NPM packages:

   npm install

4. To start the application, run:

   npm run start

   This will start the React application on `localhost:3000` in your default browser.

## Usage

Once the application is running, it will automatically fetch data from the provided JSON resource and display it on the page. Users can view the different elements of the timeline, including images, icons, and listen to audio clips.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
