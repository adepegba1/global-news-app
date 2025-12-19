# 🌍 News Reader App (Capstone Project)

This project is the final capstone submission for the Front-End Web Development Programme <a href="https://www.alxafrica.com/">ALX Africa</a>.It is a fully functional, production-ready news aggregator.

A modern, responsive news aggregator built with _React_ and _Tailwind CSS_, powered by the **World News API**. This application allows users to browse top news stories by country or search for specific topics by country.

---

## 📰 Introduction

The **News Reader App** is a simple and user-friendly web application that fetches the latest news from different countries in real time.

It uses the World News API to gather articles and then presents them to the user in a clean and organized layout.

What the App Does:

- Allows users to choose from 10 different countries using a dropdown menu.

- Automatically updates the language of the news based on the selected country.

- Shows the current date and time at the top of the app.

- Displays each news article as a card, including:

  - 🖼️ Thumbnail Image

  - 🏷️ News Title

  - 📅 Published Date

  - 🗂️ Category of the News

The goal of this project is to practice real-world front-end development skills such as API integration, component-based design, and responsive styling.

## 🛠️ Tools & Technologies Used

- **React** – for building the user interface

- **Tailwind CSS** – for fast and modern styling

- **JavaScript** – for logic, data fetching, and interactivity

- **World News API** – the external API used to fetch global news

## 🎯 Project Objectives

- Learn how to fetch data from an API and display it on a webpage.

- Understand how to manage user interactions like selecting a country from a dropdown.

- Build a clean and responsive UI using React components.

- Practice working with dates, images, conditional data, and reusable components.

- Complete the ALX capstone with a project that demonstrates real front-end skills.

## Folder Organization

src/
├── components/
│ ├── ArticleDetails.jsx # Modal for full article view
│ ├── Footer.jsx # Site credits and copyright
│ ├── FormattedDate.jsx # Real-time clock and date display
│ ├── Header.jsx # Branding and search container
│ ├── NewsCard.jsx # Main Logic: State, Fetching, and Grid
│ └── SearchBar.jsx # Input handling and search triggers
├── services/
│ └── newsServices.js # Axios configuration and API endpoints
├── App.jsx # Main Entry Point
└── main.jsx
