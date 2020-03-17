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
