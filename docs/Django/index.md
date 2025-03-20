# About Django
## Architecture

Django follows a MVT architecture which is similar to other web frameworks MVC architecture. MVT stands for Models, Views, and Templates, which are the main components of web apps written in Django. Django projects can also be made as or turned into API's with the [Django Rest Framework](https://www.django-rest-framework.org/). In actuallity, there is another large step to making apps in Django, which is defining URLs, although this part is commonly left out of the abbreviation. When a web user's browser makes a request to a Django site, the URLs route to the specified views, which use models as context to fill 

### [Models](models)

Models in Django define the fields in a database. Django uses an Object Relationship Mapper, ORM, to translate python code into database languages like sqlite, PostgreSQl, MySQL, MariaDB, and Oracle. Django comes with a sqlite3 database when starting a new django project, but the good part about the ORM is that all database code can be written in Python, meaning no need to rewrite when switching databases. they are defined in `models.py` as a Python class

### [URLs](URLs)

URLs in Django define the routes of your website, and define which views are used at these routes. They are defined in a Python List called `urlpatterns` in the urls.py file. Normal program structure is to have a `urls.py` file in your `django_project`, or main directory, and then include app URL patterns in the `urlpatterns` List, eg. `path("todos/", include("todos.urls"))`. Then in your Django apps you create a urls.py file with the same `urlpatterns` variable to define paths. These paths should include the url path (with a trailing slash) as a python string, the [view](Views) this path uses, and a name for this route using the `name` keyword argument. All together, this might look like `path("about/", AboutPageView.as_view(), name="about"` The `name`  argument is important to include to reference this URL from other places in your Django project.

### [Views](Views)

Views in Django come in two flavors, [Class-based](Views#Class-based) and Function-based, which use Python classes and Functions. Class-based views inherit from generic Class-based views provided by Django like
`TemplateView`, `ListView`, `DetailView`, `CreateView`, and more aptly named views. When using class based views you inherit attributes and methods from the derived class, and override some attributes and methods to craft the view to your needs..

### [Templates](Templates)

Django has it's own templating language to add "Python" to your html! This templating language intentionally doesn't let devs use actual python code, instead limiting them to use variables `{{ foo }}`, tags `{% bar %}`, and filters `{{foo|bar}}`.  While you are limited to only use Django Template Language, pieces, these pieces provides a wide selection to add programming logic to your html. You can also [create your own tags and filters](https://docs.djangoproject.com/en/5.1/howto/custom-template-tags/)

<footer>&copy; Joshua Lent</footer>