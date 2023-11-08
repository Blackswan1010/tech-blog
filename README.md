# Tech Blog 

![License: MIT](https://img.shields.io/badge/MIT-blue.svg)

## Description 

Making a tech blog with MVC's handlebars 

## Installation 

To start this project, have mySQL workbench and your browser opened. Copy the 'schema' from the 'db' directory and paste the contents into the mySQL workbench. Then, press the lightning bolt to initiate the database and on the left side of the workbench window click the refresh button to see your database. Back to your CLI, enter 'node seeds/index' to populate your database. 


## Sample MVC handlebar Code

```handlebars
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Blog</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
    <link rel="stylesheet" type="text/css" href="/css/jass.css">
    <link rel="stylesheet" type="text/css" href="/css/style.css">
</head>

<body>
    <div class="flex-column justify-space-around">
        <header class="text-center p-2 navBar">
            <h1>Tech Blog</h1>
        </header>
        <nav>
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            {{#if logged_in}}
            <button class="logout" id="logout">Logout<i class="bi bi-box-arrow-in-right"></i></button>
            {{else}}
            <a href="/login">Login</a>
            {{/if}}
        </nav>

        <main class="container container-fluid mt-5">
            {{{ body }}}
        </main>
    </div>
    {{#if loggedIn}}
    <script src="/js/logout.js"></script>
    {{/if}}
</body>

</html>
```
This is the main handlebars layout to be displayed in the webpage that has a placeholder for other handlebars to place their content.

```handlebars
<section class="card">
  <header>
    <a href="/post/{{id}}">
      <div class="card-title">{{title}}</div>
    </a>
      <div class="blog-author">Posted by {{username}} on {{format_date creation_date}}</div>
  </header>
  <div class="blog-content">
    {{content}}
  </div>  
</section>
```
This is partial handlebar that is used to display one object model from the database to be rendered on the webpage.


```handlebars
<div class="post">
{{#each posts as |post|}}
{{> post-details}}
{{/each}}
</div>
```
This content is put into the body of main.handlebars and rendered to the webpage.


## Author Info 

#### Anthony Nguyen

* [https://github.com/Blackswan1010](https://github.com/Blackswan1010) 


## License

 https://api.github.com/licenses/MIT 

