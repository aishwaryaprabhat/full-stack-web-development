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
