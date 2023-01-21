<div align='center'>
  <img src='./public/img/logo-green-round.png'/ height="125" width="125">
  <h1>Natours App</h1>
  <p><strong>A Full-Stack web application specially designed for the people who love travelling and going on tour vacations.</strong></p>
</div>

## Overview

This platform allows it's users to book tour vacations to excite their adventurous spirit and spend a relaxeful time.

- Any visiting user can simply see all the current tours as well as detailed information about each tour.
- Once a user has signed-up or logged-in, they can then book any tour of their choice.
- Users can also write reviews for any tour they book.

## Purpose

This app is a pet project, built for the purpose of honing my skills in full stack development.

## Demonstration

#### Home Page :

<img src="https://github.com/roubalsehgal/Natours-App/blob/main/public/screenshots/home-screen.png" width="640">

#### Tour Details :

<img src="https://github.com/roubalsehgal/Natours-App/blob/main/public/screenshots/tour-detail-screen.png" width="640">

#### LOGIN PAGE :

<img src="https://github.com/roubalsehgal/Natours-App/blob/main/public/screenshots/login-screen.png" width="640">

#### User Profile :

<img src="https://github.com/roubalsehgal/Natours-App/blob/main/public/screenshots/myaccount-screen.png" width="640">

## Tools And Technologies Used

- HTML (Create the structure and content of the web pages).
- CSS (Styling of the web pages).
- PUG (Template engine for generating the web pages dynamically).
- JAVASCRIPT (Interactivity, as well as making requests to the API from the client-side).
- NODE (Run JavaScript code on the server-side).
- EXPRESS (Node framework, meant to simplify the process of building complex server-side applications).
- MONGODB (Database for data persistence).
- MONGOOSE (Interacting with mongodb).
- MAPBOX (Displaying the different locations of each tour on the map).
- STRIPE (Making payments on the app).
- JSON WEB TOKEN (Authenticating users)
- NODEMAILER (Sending emails to users of the app)
- MAILTRAP (Trapping the emails we send in our development environment, so they don't actually get sent to the user's email address)
- SENDGRID (Sending actual emails to the users in production).

## Setting Up Your Local Environment

If you wish to play around with the code base in your local environment, do the following

```
* Clone this repo to your local machine.
* Using the terminal, navigate to the cloned repo.
* Install all the neccessary dependencies, as stipulated in the package.json file.
* If you don't already have one, set up accounts with: MONGODB, MAPBOX, STRIPE, SENDGRID and MAILTRAP. Please ensure to have at least basic knowledge of how these services work.
* In your .env file, set environment variables for the following:
    * DATABASE=your mongodb database url
    * DATABASE_PASSWORD=your mongodb password

    * JWT_SECRET=your json web token secret
    * JWT_EXPIRES_IN=90d
    * JWT_COOKIE_EXPIRES_IN=90

    * EMAIL_USERNAME=your mailtrap username
    * EMAIL_PASSWORD=your mailtrap password
    * EMAIL_HOST=smtp.mailtrap.io
    * EMAIL_PORT=2525
    * EMAIL_FROM=your real life email address

    * SENDGRID_USERNAME=apikey
    * SENDGRID_PASSWORD=your sendgrid password
    
    * STRIPE_PUBLIC_KEY=your stripe public key
    * STRIPE_SECRET_KEY=your stripe secret key
    * STRIPE_WEBHOOK_SECRET=your stripe web hook secret

* Start the server.
* Your app should be running just fine.
```

## Main Features

- [Users](#users)
- [Tours](#tours)
- [Bookings](#bookings)
- [Reviews](#reviews)

## Users

- Users can sign up with the application.
- Users can log into the application.
- Users can log out of the appication.
- Users can update their password.
- Users can reset their password
- Users can update their general information.
- Users can see their profile page.
- A user can be either a regular user or an admin or a lead-guide or a guide.
- When you sign up, you are a regular user by default.

## Tours

- Tours can be created by an admin user or a lead-guide.
- Tours can be seen by every user.
- Tours can be updated by an admin user or a lead-guide.
- Tours can be deleted by an admin user or a lead-guide.

## Bookings

- Only regular users can book tours (make a payment).
- Regular users can not book thesame tour twice.
- Regular users can see all the tours thay have booked.
- An admin user or a lead-guide can see every booking on the app.
- An admin user or a lead-guide can delete any booking.
- An admin user or a lead-guide can create a booking (manually, without payment).
- An admin user or a lead-guide can not create a bookng for thesame user twice.
- An admin user or a lead-guide can edit any booking.

## Reviews

- Only regular users can write reviews for tours which they have booked.
- All users can see the reviews of each tour.
- Regular users can edit and delete their own reviews.
- Regular users can not review thesame tour twice.
- An admin can delete any review.