# CSS

## Color
- [A good website to get nice colors from](www.colorhunt.co)
- `<body style="background-color: #ffb0cd;">`
- Another way is to use internal style

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Aish's Personal Site</title>
  </head>
  <style media="screen">
    body {
          background-color: #ffb0cd;
         }
    hr {
        background-color: white;
        border-style: dotted none none;
        height: 2px;
        width: 30%; <!-- adapts to layout instead of having a fixed value-->
       }
  </style>
  <body>
```

## External CSS
- File structure can be something like this
```
├── README.md
├── contactme.html
├── css
│   └── styles.css
├── hobbies.html
├── index.html
└── skills.html
```
- We need to add a link in the head of our HTML files
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Aish's Personal Site</title>
    <link rel="stylesheet" href="css/styles.css">
```

## Anatomay of CSS Syntax
- `selector {property: value}`

## Class Selectors
- Gives us more flexibility instead of applying a blanket policy to all elements of the same type

```
/* Tag Selectors */
body {
      background-color: #ffd1bd;
}
hr {
    background-color: white;
    border-style: dotted none none;
    width: 30%;
}
h3 {
    color: #481380;
}
h1 {
  color: #481380;
}

/* Class Selectors */
.fun {
  background-color: red;
}
```
- html element will look like this `<img id="cool_heading" class="fun" src="https://pngimage.net/wp-content/uploads/2018/06/fun-png-1.png" alt="">`

## ID Selectors
- ID is really really specific. You can only have one unique ID per page
- Class can be applied to several elements, on the other hand

```
/* ID Selectors */
#cool_heading {
  background-color: blue
}
```
- html element will look like this `<img id="cool_heading" class="fun" src="https://pngimage.net/wp-content/uploads/2018/06/fun-png-1.png" alt="">`

## Div
- div tags helps in structuring content
- By itself it does not do anything, it only works if used with CSS
- div is a content division element, to group things together

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="https://media-exp1.licdn.com/dms/image/C5603AQGlvo06vwz_uA/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=CN7jAOknMREZRgYotGZ8L8kk1byp9PlzvfYVB-hJMhk">
  </head>
  <body>
    <div class="">
      <h1>I am Aish</h1>
      <p>The first two letters of my name are AI and that is what I am passionate about</p>
    </div>
    <div class="">

    </div>

  </body>
</html>

```

## Box Model
- Every element in HTML is a box

 ![](https://www.w3.org/TR/CSS2/images/boxdim.png)

## Favicon
- Insert icon element in the head
```
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="https://media-exp1.licdn.com/dms/image/C5603AQGlvo06vwz_uA/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=CN7jAOknMREZRgYotGZ8L8kk1byp9PlzvfYVB-hJMhk">
  </head>
  <body>
    <div class="">
      <h1>I am Aish</h1>
      <p>The first two letters of my name are AI and that is what I am passionate about</p>
    </div>
    <div class="">

    </div>

  </body>
</html>
```

## Display Property
- Everything is a box and its blocking eg: paragraphs, h1 etc
- We can use <span> to make something inline. Inline elements take the width of the content
- For block elements, the height is determined by the content
- We can use the display property in any css object and set it to inline, block or inline-block
- We can use visibility: hidden to hide elements

## Static and Relative Positioning
- Default layout order is determined by which order we 'type' them in our code
- Kids sit on top of parents
- We can use the position property in CSS to override default positions
  - Static: stick to default
  - Relative: relative to default position....using top, bottom, left and right

## Absolute and Fixed Positioning
- Absolute positioning means relative to parent element
- Fixed stays even when you scroll eg: a navigation bar


## Aligning by Centre
- Using text-align
```

body {
  margin-top: 0;
  background-color: #ffd1bd;
  text-align: center;
}

h1 {
  margin-top: 0
}

img {
  display: inline;
}

```
- Using margin (if width is set)
```
h1 {
  width: 10%
  margin: 0 auto 0 auto;
}
```

## Font and Font Family
- There are web-safe fonts that most browsers can render them correctly
```
body {
  margin-top: 0;
  text-align: center;
  font-family: verdana, sans-serif;
}
```
- We can use font-embedding to be absolutely sure that every suer sees the same font regardless of their browser or OS
- You can go to fonts.google.com and then embed the fonts using href
```
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="https://media-exp1.licdn.com/dms/image/C5603AQGlvo06vwz_uA/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=CN7jAOknMREZRgYotGZ8L8kk1byp9PlzvfYVB-hJMhk">
    <link href="https://fonts.googleapis.com/css?family=Bellota|Dancing+Script&display=swap" rel="stylesheet">


    body {
      margin-top: 0;
      text-align: center;
      font-family: 'Dancing Script', cursive;
    }
```

## Font size
- Static size
```
h1 {
  font-size: 90px;
  width: 10%
  margin: 0 auto 0 auto;
  font-family: 'Dancing Script', cursive;

}
```
- For dynamic size use %
- Always consider size of parent because size of child gets added to parent
- We can use `font-size: 5rem` which is root em to ignore parents' sizes
