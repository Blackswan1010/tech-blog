# Tech Blog 

![License: MIT](https://img.shields.io/badge/MIT-blue.svg)

## Description 

Making a tech blog with MVC's handlebars 

## Installation 

To start this project, have mySQL workbench and Insomnia installed and opened. Copy the 'schema' from the 'db' directory and paste the contents into the mySQL workbench. Then, press the lightning bolt to initiate the database and on the left side of the workbench window click the refresh button to see your database. Back to your CLI, enter 'node seeds/index' to populate your database. On Insomnia, test the get, post, put, and delete requests of /categories, /products, /tags.


## Sample MVC handlebar Code

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

```js

```

## Author Info 

#### Anthony Nguyen

* [https://github.com/Blackswan1010](https://github.com/Blackswan1010) 


## License

 https://api.github.com/licenses/MIT 

