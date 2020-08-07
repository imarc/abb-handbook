---
title: 'Breakpoints'
description: 'Learn about the different breakpoints used.'
date: 2020-07-22
group: 'development'
bootstrapLink: true
bootstrapSection: 'layout'
toc: true
---

## Our breakpoints

Bootstrap includes six default breakpoints, sometimes referred to as grid tiers, for building responsively. 

<div class="table-responsive">
    <table class="table">
        <thead>
            <tr>
                <th>Breakpoint</th>
                <th>Class infix</th>
                <th>Dimensions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>X-Small</td>
                <td><em>None</em></td>
                <td>0–576px</td>
            </tr>
            <tr>
                <td>Small</td>
                <td><code>sm</code></td>
                <td>&ge;576px</td>
            </tr>
            <tr>
                <td>Medium</td>
                <td><code>md</code></td>
                <td>&ge;768px</td>
            </tr>
            <tr>
                <td>Large</td>
                <td><code>lg</code></td>
                <td>&ge;992px</td>
            </tr>
            <tr>
                <td>Extra large</td>
                <td><code>xl</code></td>
                <td>&ge;1200px</td>
            </tr>
            <tr>
                <td>Extra extra large</td>
                <td><code>xxl</code></td>
                <td>&ge;1400px</td>
            </tr>
        </tbody>
    </table>
</div>

These breakpoints can be customized in our Bootstrap variables file.

{{< highlight sass>}}
$grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
);
{{< /highlight >}}

## Breakpoints in practice

We do not design and build to _six_ different breakpoints. We rarely use `xxl` and never use `xs`.

Breakpoints are mostly used for media queries, grid classes, and utility classes.

{{< inprogress >}}

## Media queries

We develop Atlantic broadband in a mobile-first fashion.

{{< highlight sass>}}
// No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }
{{< /highlight >}}

{{< inprogress >}}
