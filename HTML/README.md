# HTML
- HypterText Markup Language
- HTML is the foundation of all websites

## Tags

- Tags basically tell our browser how to structure the content within the tags. Eg: `<h1> Aish is awesome </h1>` tells the browser to structure this as
- Some tags are self closing like the `<br>` tag used for inserting line break
- Atrributes are the thingies within the tag opening and closing that tell the browser more information about the content. Eg `<hr size="3">` tells the browser how thich the line ought to be. You need to refer to documentation to check these out

```
<center>
<h1> Yo </h1>
<br>
<hr size="10">
</center>

```

- Comments in html `<!-- -->`


## Boiler Plate
- The basic template/structure

```
<!DOCTYPE html> <!-- render this version of html -->
<html lang="en" dir="ltr"> <!-- render this version of html -->
  <head>
    <meta charset="utf-8">
    <title> Aish's Personal Site </title>
  </head>
  <body>

  </body>
</html>
```

## Basics
- Headings, italics, centre, paragraph etc.
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Aish's Personal Site</title>
  </head>
  <body>
    <center>
      <h1>Aishwarya Prabhat</h1>
      <p><em>Full Stack Data Scientist and Machine Learning Engineer</em></p>
      <p>The first two letters of my name are <strong>AI</strong> and AI and Machine Learning are what I am passionate about</p>
      <hr>
      <h3>Work Experience</h3>
    </center>
  </body>
</html>
```

## Unordered Lists/Bullet Points
```
<ul>
  <li>Data Scientist @ Shopee</li>
  <li>Research Associate @ Nvidia</li>
  <li>AI R&D Intern @ HP</li>
  <li>R&D Engineering Intern @ HP</li>
</ul>
```

## Ordered Lists/Numbered Points
```
<ol>
  <li>Machine Learning Platform</li>
  <li>Category Recommendation</li>
  <li>Peak Concurrent User Prediction</li>
</ol>
```

## Images
```
<img src="https://scontent.fsin9-2.fna.fbcdn.net/v/t31.0-8/12039144_1120705857957057_1062118523870278037_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_oc=AQlAZL28fk1kWPe79_xXovcS584r7gXMlPOYMqD5QXkwlmPf0Un3UpbzjR6csE48lvg&_nc_ht=scontent.fsin9-2.fna&oh=23f96f5565061bc76d7869bf029764f5&oe=5E93C4F1" alt="Aish doing a cool pose">
```
## Links and Anchors
- `<a href="https://www.aishwaryaprabhat.com">Aishwarya Prabhat</a>`
- `<a href="hobbies.html">Hobbies</a>`
