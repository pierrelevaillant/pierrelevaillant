<template>
  <div>
    <div class="design-grid-toggles" data-env="Development">
      <span class="design-grid-toggle design-grid-toggle--baseline" onClick="document.querySelector('.design-grid--baseline').classList.toggle('js-hide'); this.classList.toggle('js-active');" title="Toggle Baseline Grid">
        <svg enable-background="new 0 0 10 10" version="1.1" viewBox="0 0 10 10" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <rect fill="currentColor" width="10" height="1"/>
          <rect fill="currentColor" y="3" width="10" height="1"/>
          <rect fill="currentColor" y="6" width="10" height="1"/>
          <rect fill="currentColor" y="9" width="10" height="1"/>
        </svg>
      </span>

      <span class="design-grid-toggle design-grid-toggle--columns" onClick="document.querySelector('.design-grid--columns').classList.toggle('js-hide'); this.classList.toggle('js-active');" title="Toggle Grid Columns">
        <svg enable-background="new 0 0 10 10" version="1.1" viewBox="0 0 10 10" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <rect fill="currentColor" x="0" y="0" width="1" height="18"/>
          <rect fill="currentColor" x="3" y="0" width="1" height="18"/>
          <rect fill="currentColor" x="6" y="0" width="1" height="18"/>
          <rect fill="currentColor" x="9" y="0" width="1" height="18"/>
        </svg>
      </span>

      <span class="design-grid-toggle design-grid-toggle--img" title="Toggle Baseline Images">
        <svg enable-background="new 0 0 10 10" version="1.1" viewBox="0 0 10 10" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <polygon fill="currentColor" points="8,8 2,8 3.5,3 5.5,6.2 6.5,5.2 "/>
          <circle fill="currentColor" cx="7.2" cy="2.8" r="0.8"/>
          <path fill="currentColor" d="M9,1v8H1V1H9 M10,0H0v10h10V0L10,0z"/>
        </svg>
      </span>
    </div>

    <span class="design-grid design-grid--baseline js-hide"></span>
    <span class="design-grid design-grid--columns js-hide"></span>
  </div>
</template>

<script>
export default {
  mounted () {
    var imgBaseline = function(el) {
      // get baseline - assumes 5px baseline
      var el = document.querySelector('.design-grid-toggle--img');
      var baseline = el.getAttribute('data-baseline') || 5;
      var active = false;
      var timer;

      function _handleClicks(e) {
        if( active ){
          _remove();
        }else{
          _add();
        }

        el.classList.toggle('js-active');

        e.preventDefault();
      }

      function _handleResized() {
        clearTimeout(timer);

        timer = setTimeout(function(){
          if( active ){
            // remove the set heights to accurately recalculate heights if image width has changed
            _remove();

            // Add the new baselined heights
            _add();
          }
        }, 200);
      }

      function _add() {
        var images = document.querySelectorAll('img');

        // set active var to true
        active = true;

        for (var i = 0; i <= images.length - 1; i++) {
          // Get current image
          var img = images[i];

          // Get image height
          var h = img.height;

          // Round image height value to nearest baseline height value
          var rH = Math.round(h / baseline) * baseline;

          // Store old height if height was previously set
          if( img.hasAttribute('height') ){
            console.log(img.getAttribute('height'));
            img.setAttribute('data-oldH', h);
          }

          // Update image height to rounded value
          img.height = rH;
        }
      }

      function _remove(){
        var images = document.querySelectorAll('img');

        // set active var to false
        active = false;

        for (var i = 0; i <= images.length - 1; i++) {
          // Get current image
          var img = images[i];

          // if image has an old height set reset it to that, otherwise remove the height attribute
          if( img.hasAttribute('data-oldH') ){
            img.height = img.getAttribute('data-oldH');
            img.removeAttribute('data-oldH');
          }else{
            img.removeAttribute('height');
          }
        }
      }

      if( el ){
        el.addEventListener('click', _handleClicks, false);
        document.addEventListener('resized', _handleResized);
      }
    };

    document.addEventListener('DOMContentLoaded', function(){
      imgBaseline();
    });
  }
}
</script>

<style lang="scss" scoped>
.design-grid-toggles {
  position: fixed;
  z-index: 9999;
  left: 0;
  bottom: 0;
  font-size: 0;

  &::before,
  &::after {
    display: block;
    position: absolute;
    left: 5px;
    bottom: 100%;
    color: #00a449;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    white-space: nowrap;
  }

  &::before {
    margin-bottom: 3px;

    @each $name, $point in $breakpoints {
      @include breakpoint('#{$name}') {
        content: '#{$name}';
      }
    }
  }

  &::after {
    content: attr(data-env);
    margin-bottom: 17px;
  }
}

.design-grid-toggle {
  display: inline-block;
  margin-right: 5px;
  padding: 10px 15px;
  background: #000;
  color: #fff;
  font-size: 11px;
  cursor: pointer;
  transition: all 200ms linear;
}

.design-grid-toggle.js-active {
  background-color: #f00;
}

.design-grid-toggle svg {
  display: block;
  width: 10px;
  height: 10px;
}

.design-grid--baseline {
  display: block;
  position: absolute;
  z-index: 9998;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0) #{$base-height}px, #7fffff #{$base-height}px, #7fffff #{$base-height + $base-height}px);
  opacity: .25;
  pointer-events: none;

  &.js-hide {
    display: none;
  }
}

.design-grid--columns {
  display: block;
  position: fixed;
  z-index: 9998;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: transparent;
  opacity: .25;
  pointer-events: none;

  &.js-hide {
    display: none;
  }

  @each $name, $point in $breakpoints {
    @include breakpoint('#{$name}') {
      @if (map-get($main-col-widths, $name) == 'fluid') {
        width: calc(100vw - #{map-get($outer-gutters, $name) * 2});
        background: repeating-linear-gradient(
          90deg,
          #7fffff,
          #7fffff calc((100vw - #{((map-get($column-count, $name) - 1) * map-get($inner-gutters, $name)) + (2 * map-get($outer-gutters, $name))}) / #{map-get($column-count, $name)}),
          rgba(0,0,0,0) calc((100vw - #{((map-get($column-count, $name) - 1) * map-get($inner-gutters, $name)) + (2 * map-get($outer-gutters, $name))}) / #{map-get($column-count, $name)}),
          rgba(0,0,0,0) calc(
            (
              (100vw - #{((map-get($column-count, $name) - 1) * map-get($inner-gutters, $name)) + (2 * map-get($outer-gutters, $name))}) / #{map-get($column-count, $name)})
              +
              #{map-get($inner-gutters, $name)}
            )
        );
      } @else {
        width: map-get($main-col-widths, $name) + map-get($inner-gutters, $name) + map-get($inner-gutters, $name);
        background: repeating-linear-gradient(
          90deg,
          rgba(0,0,0,0),
          rgba(0,0,0,0) map-get($inner-gutters, $name),
          #7fffff map-get($inner-gutters, $name),
          #7fffff calc(
            (
              (#{map-get($main-col-widths, $name)} - #{(map-get($column-count, $name) - 1) * map-get($inner-gutters, $name)}) / #{map-get($column-count, $name)})
              +
              #{map-get($inner-gutters, $name)}
            )
        );
      }
    }
  }
}

</style>
