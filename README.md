# MyShop-MERN-APP
This project is an online shopping website. You can add products to your cart, then modify the quantity or your cart, and if 
it is finalized checkout and pay using stripe. Stripe will provide you 2FA to ensure the security of your transaction.

As an admin you can have an account with an extra option of controlling your products with online dashboard tools. In this 
dashboard you can change the status of your orders, add other people as admins, add, remove, or edit ypur products, and check 
your inventory.

This project is functional in near to a real world ecommerce website. In order to implement a backend Node.js has been utilized 
and React.js has been used for the frontend. MongoDB is used as a NoSQL database for the project.

In the following you can see the screen shots of the actual project:

## Register Page:
This page is where the users can register and create an account entering their name, last name, password, and avatar. Also the privacy policy
is presented here for user to review.

<img src="./screen shot/Screen Shot 2021-12-16 at 7.46.44 AM.png">

## Login Page:
This page is where the users can login to their account entering email and the password. 

<img src="./screen shot/Screen Shot 2021-12-16 at 7.45.41 AM.png">

if user for some reason doesn't have an account can click on register button to be directed to the register page. Or if they forget their passwords,
they can click on the forgot password link and be directed to the following page which will ask for the email to find the user and then send an email
to reset their password. 

<img src="./screen shot/Screen Shot 2021-12-16 at 7.46.27 AM.png">

## Profile Page:
This page is where the users can see their profile information and edit them if necessary. Also, there is an option to change the password.

<img src="./screen shot/Screen Shot 2021-12-16 at 7.45.03 AM.png">

## Landing Page (after login)
In this page users can see different options according to their status. The status is also visible on this page whci can be either user or admin.

<img src="./screen shot/Screen Shot 2021-12-16 at 7.44.51 AM.png">

## Shopping Cart Page 
In this page users can see their cart even without logging into their account. They can log in to their account and checkout their order at any time
they desire to buy them. 

<img src="./screen shot/Screen Shot 2021-12-16 at 7.46.58 AM.png">

## Checkout Page - Shipping Info
In this page users can enter their shipping details in order to purchase the items in their cart.

<img src="./screen shot/Screen Shot 2021-12-16 at 7.47.54 AM.png">

<img src="./screen shot/Screen Shot 2021-12-16 at 7.48.02 AM.png">

## Checkout Page - Payment Info
In this page users can enter their payment details in order to purchase the items in their cart. This will validate the data the user entered and if corret and confirmed 
by the user, it will be redirected to the 3D secure for the payment. 

<img src="./screen shot/Screen Shot 2021-12-16 at 7.48.09 AM.png">

<img src="./screen shot/Screen Shot 2021-12-16 at 7.50.07 AM.png">

If the payment is successfull, a message confirming it will be shown on the page. 
<img src="./screen shot/Screen Shot 2021-12-16 at 7.50.19 AM.png">

## Order Status Page
On this page, Users can see all their orders and their status.

<img src="./screen shot/Screen Shot 2021-12-16 at 7.50.33 AM.png">

## Dashboard Page
This page is designated to admin users only. Admins can control their online shop using various tools on this page as shown below.

<img src="./screen shot/Screen Shot 2021-12-16 at 7.44.31 AM.png">
