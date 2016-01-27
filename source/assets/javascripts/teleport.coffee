class Viewport
  @widths: ['xs', 'sm', 'md', 'lg']
  @getWidth: ->
    size = window
            .getComputedStyle(document.body,':after')
            .getPropertyValue('content')
    size.replace(/\"/g, '')

class Teleporter
  constructor: ->
    @lastWidth = Viewport.getWidth()
    @widths = Viewport.widths.reverse()

  teleport: ($source, $target) ->
    return false unless $target and $source
    return null if $target.is($source)
    $source.children().appendTo($target)
    $source.empty()
    return true

  target: (id) ->
    lastAndSmaller = @widths.slice(@widths.indexOf(@lastWidth))
    for size in lastAndSmaller
      $target = $("[data-teleport='#{id} #{size}']")
      return $target if $target.length >= 1
    return null

  data: ($elm) ->
    $elm.data('teleport').split(' ', 2)

  teleportAll: =>
    $('[data-teleport]:not(:empty)').each (_, elm) =>
      $source = $(elm)
      [id, size] = @data($source)
      $target = @target(id)
      @teleport($source, $target)

  windowResized: =>
    currentWidth = Viewport.getWidth()
    if currentWidth != @lastWidth
      @lastWidth = currentWidth
      @teleportAll()

  turbolinks: =>
    @lastWidth = null
    @windowResized()

  init: ->
    @teleportAll()
    $(window).resize @windowResized
    $(document).on 'page:change', @turbolinks

$ ->
  tele = new Teleporter
  tele.init()
