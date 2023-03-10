<br />
<p align="center">
  <img src="src/assets/logo.png?raw=true" width="60%"/>
</p>
<br />
<p align="center">
  A front-end application for book lovers.
  <br />
  <a href="https://paperbound.netlify.app/">View Demo</a>
</p>

![image](https://user-images.githubusercontent.com/99934770/217256858-43081089-97e9-4fcb-b303-ab6ca3bd832e.png)


## About The Project

Paperbound is a web application built using Vue.js that allows users to search for their favourite book titles and browse their various book cover editions. 

Being an ardent reader, I was always looking out for ways to enhance the user experience of book readers like me who wish to browse their favourite books online without taking away the joy of picking them up physically from their shelves. Thus, this is a front-end application that is meant to be a user experience design case study of challenging myself to explore the ways to improve the user experience for online book browsers.

## Technologies Used

### Front End
* VueJS Framework
* Font Awesome icons
* Vanilla CSS for styling

### API
* <a href="https://openlibrary.org/developers/api">Open Library's suite of Web APIs</a> (Books API, Search API & Covers API) 

### Testing
* Jest for unit testing

## Setup

Clone the repository using Git.
```
$ git clone git@github.com:faithtanlh/paperbound.git
```
Once downloaded, open the terminal in the project directory and install project dependencies:
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run local unit tests
```
npm run test:unit
```  

## Design Considerations

### 1. Shelving Design for Home Page

<img src="https://user-images.githubusercontent.com/99934770/217337710-a84de325-8554-4e11-9b79-fef76fe7fc4f.gif" width="80%" />

The `Home` page is designed by implementing a stack of `ShelfRow` custom components (see `ShelfRow.js`). Using Vue's `<slot>` elements, each `ShelfRow` component contains three slots into which three template elements can be conditionally rendered. These slots are placed as inline-block elements, under which a `Shelf` custom styled component (which appears as a 2D shelf representation on the webpage) is rendered. Thus, `ShelfRow` components mimic the behaviour of bookshelves, whereby slots can be used to "place objects". 

These `ShelfRow` components are used to conditionally render new `Book` components (which represent books and appear as book covers on the shelves) upon fetching data from the API endpoint (see `HomeView.js`). 

### 2. Loading Animation During Fetch

<img src="https://user-images.githubusercontent.com/99934770/217338318-9fc234b2-2753-46e8-981d-024a091690e6.gif" width="80%" />

Whilst the data is being fetched from the Covers API, a loading spinner is displayed underneath the search bar, which provides users visibility of system status. This was implemented using a listener `fetched` that returns true only when the fetch `Promise` has been fulfilled.

### 3. Book On Hover Animation

<img src="https://user-images.githubusercontent.com/99934770/217347238-b15163d0-9c26-4a68-9966-068362a28f54.gif" width="80%" />

`Book` components have on hover animations that mimic the action of picking up books from shelves. This effect was done by animating the component through upwards translations and skew parameters. 

### 4. Route Transitions

<img src="https://user-images.githubusercontent.com/99934770/217339047-12d8970d-1621-485e-a94e-e342c7c3cacd.gif" width="80%" />

To create a more seamless user experience, vertical fade-out Vue router transitions were used when routing from one page to another, which complemented the overall vertical geography of the `Home` page.

### 5. Back Button 

<img src="https://user-images.githubusercontent.com/99934770/217340726-c1effe27-7c17-4874-a98d-ccf008a28183.gif" width="80%" />

The back navigation element on the `BookDetails` page allows users to easily navigate backwards to the `Home` page. A scale animation was set on hover to provide additional feedback that the element is clickable. 

### 6. Search Results and Scroll Position Saved On Navigation

<img src="https://user-images.githubusercontent.com/99934770/217341554-a7ca1543-706b-49a1-aebd-bfea7db3cf9f.gif" width="80%" />

When navigating back to the `Home` page from the `BookDetails` page, the previous search results are re-rendered and the search bar will contain the user's prior search inputs. A smooth scroll animation after back navigation enables the user to scroll down to their last scroll position before they had navigated away from the `Home` page. 

This design feature was made to allow users to quickly revisit the progress of their book search, and this was implemented using local storage (to store fetched data and search input values) and Vue Router's route meta fields (to store scroll position parameters). 

