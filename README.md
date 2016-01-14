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
- [teleport.coffee](https://raw.githubusercontent.com/samrayner/teleport/source/source/assets/javascripts/teleport.coffee)
- [teleport.scss](https://raw.githubusercontent.com/samrayner/teleport/source/source/assets/stylesheets/teleport.scss)

I've been lazy packaging up the assets for others to use. [Shout at me on Twitter][tw] if you need them in another format and I'll see what I can do.

## Flash of Pre-Teleport Layout

If you find a teleporting element is causing a nasty flash of incorrect layout until Javascript has loaded, you can use [Bootstrap's responsive utility classes][util] to limit its visibility to appropriate breakpoints.

For example, if your content is in the XS placeholder by default (which I recommend - mobile first) then you can do:

    <div class="visible-xs-block" data-teleport="id xs">

But **beware**: The above example will mean users on desktop with Javascript disabled will never see the content (as it won't get teleported out of the XS block). It would be possible to solve that with some overriding CSS wrapped in `<noscript>` if necessary though.

[util]: http://getbootstrap.com/css/#responsive-utilities
[tw]: http://twitter.com/samrayner
