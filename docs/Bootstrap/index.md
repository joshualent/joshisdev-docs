# Bootstrap
## About
Bootstrap is the most popular CSS framework, most well known for it's responsive grid system that makes designing for multiple screensizes easy. Bootstrap css is mainly used by applying classes to your elemtents, which correspond to bootstrap's CSS styles. Bootstrap uses SASS, specifically scss, which can be customized depending on your delivery method for bootstrap. bootstrap can be installed with npm, accessed through a content delivery network, and mre. bootstrap is also well known for responsive navs, styled inputs, spacing utilities, many custom components, and more.

## [Card](Input.md)
## [Grid](Grid.md)
Bootstrap grid uses flexbox for responsive placement of elements. It uses containers which can contain multiple rows of content. Each row gets 12 column units that can be divided among elements using bootstrap classes. Grid also allows you to specify flex properties using classes, which further helps position elements.

## [Input elements](Input.md)
Bootstrap has default styling for many inputs, but you can specify these inputs with specific bootstrap classes for better styling

## [Typography](Typography.md)
Bootstrap helps you style text with default styles and utility classes

## [images](Images.md)
Create responsive images and place them

## [Utils](Utils.md)


## [Icons](https://icons.getbootstrap.com/)

## [Navbar](https://getbootstrap.com/docs/5.3/components/navbar/)

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```