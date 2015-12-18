# Teleport for Bootstrap 3

_Grid layouts without sacrificing source order_

# [View the demo](http://samrayner.github.io/teleport)

## Why?

Float-based grid systems (like [Bootstrap's][bsgs]) are great for quickly creating
column-based layouts but sometimes rely on source order to position things correctly.

Until [Bootstrap 4][bs4] is released with flexbox support, Teleport is a simple way to
construct layouts not possible with standard responsive design.

[bs4]: http://v4-alpha.getbootstrap.com/
[bsgs]: http://getbootstrap.com/css/

## How?

Teleport is a simple bit of Javascript that relocates DOM nodes between
placeholders in the HTML as the viewport is resized.

    <div class="row">
      <div class="col-sm-4">
        <p>Source order: 1</p>
        <div data-teleport="red sm"></div>
      </div>
      <div class="col-sm-8">
        <p>Source order: 2</p>
      </div>
      <div class="col-xs-12" data-teleport="red xs">
        <p>Source order: 3</p>
      </div>
    </div>

The content from `red xs` is teleported to `red sm` when the viewport crosses the
`$screen-sm-min` Bootstrap breakpoint. You can define as many placeholder elements as you
like with an identifier (.e.g `red`) followed by `xs, sm, md` or `lg`.

## Setup

You'll need:

- [jQuery](https://jquery.com/)
- [Bootstrap](http://getbootstrap.com/)
- [jquery.debouncedresize](https://github.com/samrayner/teleport/blob/source/source/assets/javascripts/vendor/jquery.debouncedresize.js)
- [teleport.coffee](https://github.com/samrayner/teleport/blob/source/source/assets/javascripts/teleport.coffee)
- [viewport.scss](https://github.com/samrayner/teleport/blob/source/source/assets/stylesheets/viewport.scss)

I've been lazy packaging up the assets for others to use. [Shout at me on Twitter][tw] if you
need them in another format and I'll see what I can do.

[tw]: http://twitter.com/samrayner
