<p align="center">
  <h3 align="center">ex-design-02-webcafe</h3>
  <p align="center">
  Code a website based on semantic markup aimed at improving web accessibility.<br> 
  To check out the website?<a href="https://beigenut.github.io/ex-design-02-webcafe/" target="_blank"> Click here</a> <br>
  You do not need to sign in or log in at this time :)
</p>
</p>

_ _ _


## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* Getting Started
  * [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Contributing](#contributing)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



## About The Project

<img src="https://drive.google.com/uc?export=view&id=1Q3FBXvmNSsXFkwXTLIlgXuNo7QQ47QfZ" width="700px">

Reflects some of the requirements of w3c to improve web accessibility.

- Build a site based on `semantic markup`.
- Use `headings depth` correctly to organize the structure. h1 h2 h3 ...
- Use `alt` properites on `img` elements.
- Assign event handlers include 'focus' for keyboard control.
- Use the `aria-` properties when necessary. 

<br>

- Use the `grid` and `flex` properties to structure the html constructure. 
- Using `git Page` to get web url.


### Built With
* [JQuery](https://jquery.com)
* [Animate.css](https://daneden.github.io/animate.css/)
* [google font](https://fonts.google.com/)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

No need


<!-- USAGE EXAMPLES -->
## Usage

Code based on `semantic markup structure`. Use semantic attributes instead of `<div>`.

for exaple,
```html
<header>
  <nav></nav>
</header>
<main>
  <section>
    <h1>...</h1>
  </section>
  <article></article>
  <aside></aside>
</main>
<footer></footer>
```


Although not displayed, the text reader machine is able to read attributes by using `a11y-hidden` class.

```css
.a11y-hidden {
  background-color: #777373;
  width: 1px;
  height: 1px;
  overflow: hidden;
  margin: -1px;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  font-size: 0;
  line-height: 0;
}
```




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/beigenut/ex-design-02-webcafe](https://github.com/beigenut/ex-design-02-webcafe)



## Acknowledgements
* [blog - About web accessibility](https://webaccess.berkeley.edu/resources/tips/web-accessibility)
* [blog - About web accessibility](https://aerolab.co/blog/web-accessibility)
* [W3 - Valify your site structure](http://validator.w3.org/)
* [Valify your site structure](https://www.boia.org/w3c-tools-services-a11y)






<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: https://drive.google.com/uc?export=view&id=1Q3FBXvmNSsXFkwXTLIlgXuNo7QQ47QfZ