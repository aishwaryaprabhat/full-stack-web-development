# DOM

## Adding JS to HTML
- Similar to css it can be inline, external or script
- Inline (not good)

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body onload="alert('Hello')">

  </body>
</html>
```

- Internal

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>

    <script type="text/javascript">

      alert("Hello")

    </script>

  </body>
</html>
```

- External

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>

    <script src="index.js" charset="utf-8"></script>

  </body>
</html>
```

## DOM

![](../readme_images/dom.png)

- HTML elements have properties and methods
- Properties can be get and set
- Methods can be triggered
