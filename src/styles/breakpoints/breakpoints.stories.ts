import type { Meta, StoryObj } from '@storybook/html'
import './breakpoints-demo.css'

/**
 * Visual demo of viewport breakpoints.
 *
 * Resize the browser to see each breakpoint activate.
 * The coloured banner and ruler segment change at each threshold.
 *
 * Breakpoints are defined in `breakpoints.tokens.css` via `@custom-media`
 * and compiled by PostCSS (`postcss-custom-media`).
 */
const meta: Meta = {
  title: 'Breakpoints',
  tags: ['autodocs'],
}

export default meta

export const Demo: StoryObj = {
  render: () => `
    <div class="bp-demo">
      <div class="bp-demo__indicator">
        <span>Current breakpoint:</span>
        <span class="bp-demo__current" id="bp-label">default</span>
        <span class="bp-demo__width" id="bp-width"></span>
      </div>

      <div class="bp-demo__banner bp-demo__banner--default is-active" role="status" aria-live="polite">
        <p class="bp-demo__banner-title"><span aria-hidden="true">⬛</span> Default (&lt; 640px)</p>
        <p class="bp-demo__banner-desc">Mobile portrait — no custom media query active</p>
        <span class="bp-demo__banner-query">max-width: 639px</span>
      </div>

      <div class="bp-demo__banner bp-demo__banner--sm" role="status" aria-live="polite">
        <p class="bp-demo__banner-title"><span aria-hidden="true">🟢</span> --mq-sm</p>
        <p class="bp-demo__banner-desc">≥ 640px — Small viewports (mobile landscape / small tablet)</p>
        <span class="bp-demo__banner-query">@media (--mq-sm)</span>
      </div>

      <div class="bp-demo__banner bp-demo__banner--md" role="status" aria-live="polite">
        <p class="bp-demo__banner-title"><span aria-hidden="true">🔵</span> --mq-md</p>
        <p class="bp-demo__banner-desc">≥ 768px — Medium viewports (tablet portrait)</p>
        <span class="bp-demo__banner-query">@media (--mq-md)</span>
      </div>

      <div class="bp-demo__banner bp-demo__banner--lg" role="status" aria-live="polite">
        <p class="bp-demo__banner-title"><span aria-hidden="true">🟠</span> --mq-lg</p>
        <p class="bp-demo__banner-desc">≥ 1024px — Large viewports (tablet landscape / small desktop)</p>
        <span class="bp-demo__banner-query">@media (--mq-lg)</span>
      </div>

      <div class="bp-demo__banner bp-demo__banner--xl" role="status" aria-live="polite">
        <p class="bp-demo__banner-title"><span aria-hidden="true">🟣</span> --mq-xl</p>
        <p class="bp-demo__banner-desc">≥ 1280px — Extra large (desktop)</p>
        <span class="bp-demo__banner-query">@media (--mq-xl)</span>
      </div>

      <div class="bp-demo__banner bp-demo__banner--2xl" role="status" aria-live="polite">
        <p class="bp-demo__banner-title"><span aria-hidden="true">🔴</span> --mq-2xl</p>
        <p class="bp-demo__banner-desc">≥ 1536px — 2X extra large (wide desktop)</p>
        <span class="bp-demo__banner-query">@media (--mq-2xl)</span>
      </div>

      <div class="bp-demo__ruler" aria-hidden="true">
        <div class="bp-demo__ruler-segment bp-demo__ruler-segment--default" id="ruler-default"></div>
        <div class="bp-demo__ruler-segment bp-demo__ruler-segment--sm" id="ruler-sm"></div>
        <div class="bp-demo__ruler-segment bp-demo__ruler-segment--md" id="ruler-md"></div>
        <div class="bp-demo__ruler-segment bp-demo__ruler-segment--lg" id="ruler-lg"></div>
        <div class="bp-demo__ruler-segment bp-demo__ruler-segment--xl" id="ruler-xl"></div>
        <div class="bp-demo__ruler-segment bp-demo__ruler-segment--2xl" id="ruler-2xl"></div>
      </div>
    </div>

    <script>
      (function() {
        var label = document.getElementById('bp-label');
        var widthEl = document.getElementById('bp-width');
        var rulers = {
          default: document.getElementById('ruler-default'),
          sm: document.getElementById('ruler-sm'),
          md: document.getElementById('ruler-md'),
          lg: document.getElementById('ruler-lg'),
          xl: document.getElementById('ruler-xl'),
          '2xl': document.getElementById('ruler-2xl'),
        };

        function getBreakpoint(w) {
          if (w >= 1536) return '2xl';
          if (w >= 1280) return 'xl';
          if (w >= 1024) return 'lg';
          if (w >= 768)  return 'md';
          if (w >= 640)  return 'sm';
          return 'default';
        }

        function update() {
          var w = window.innerWidth;
          var bp = getBreakpoint(w);
          label.textContent = bp;
          widthEl.textContent = w + 'px';

          Object.keys(rulers).forEach(function(key) {
            rulers[key].classList.toggle('is-active', key === bp);
          });
        }

        window.addEventListener('resize', update);
        update();

        // Re-run after fonts / layout settle
        setTimeout(update, 200);
      })();
    </script>
  `,
}
