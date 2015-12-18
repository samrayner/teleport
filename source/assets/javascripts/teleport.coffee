class Viewport
  @widths: ['xs', 'sm', 'md', 'lg']
  @getWidth: ->
    size = window
            .getComputedStyle(document.body,':after')
            .getPropertyValue('content')
    size.replace(/\"/g, '')

class Teleporter
  widths: Viewport.widths.reverse()

  teleport: ($source, $target) ->
    return false unless $target and $source
    return null if $target.is($source)
    $source.children().appendTo($target)
    $source.empty()
    return true

  target: (id) ->
    currentAndSmaller = @widths.slice(@widths.indexOf(Viewport.getWidth()))
    for size in currentAndSmaller
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

  init: ->
    @teleportAll()
    $(window).on 'debouncedresize', @teleportAll

$ ->
  tele = new Teleporter
  tele.init()
