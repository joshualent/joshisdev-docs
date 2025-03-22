# Grid
## Breakpoints
Bootstrap has multiple content breakpoints to change how content displays at different 
- `sm` - phone size
- `md` - portrait tablet
- `lg` - small desktop of landscape tablet
- `xl` large desktop
- `xxl` extra large desktop
These breakpoints are used in multiple places to specify how content is displayed based on screen size
> breakpoints will be shown in examples using `<bp>`
## Containers
Containers specify the main content in a page
- `container` - A responsize container that leaves room on the sides on larger displays
- `container-fluid` - container taking full width on all screens
- `container-<bp>` - container leaving room on the sides at and above specifyed breakpoint
### Rows
- `row` - rows go inside containers and define a row of content which gets 12 `col` units
## Cols
`col` is used to specify the number of columns an element gets in it's row
- `col-<x>` - defines element that takes up x col units, up to 12
- `col-<bp>-<x>` - defines element that takes up a whole row until specifyed breakpoint, where x is the amount of `col` units it takes up at and above that breakpoint
- `col-auto` - element automatically takes up `col` units based on size
## Flex Utils
- `justify-content-start`, specifies CSS justify content property, how content is justified on main axis.  Other justifies can be set using `end`, `center`
- `gx-5` - remove content gutters up to five
- `align-items-center` Specify align items property
- 
