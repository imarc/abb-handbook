---
title: 'Screen'
description: 'Create an opacity screen behind content.'
group: 'components'
bootstrapLink: false
bootstrapSection: ''
demolink: false
toc: true
---

## Examples

Screens set a semi-transparent background-color on a pseudo-element. You can use screens in layers, heroes, cards, and more.

### Basic screen

A screen on its own does not have any padding associated with it.

<div class="screen screen-my-modifier">
    <div class="screen-body">
        Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    </div>
</div>
{{< highlight html>}}
<div class="screen">
    <div class="screen-body">
        Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    </div>
</div>
{{< /highlight >}}

The example markup assumes you have a background-image already in place.

### Screen on another element

You can combine screen onto other elements such as a hero.

<div class="hero hero-modifier screen">
    <div class="container-xxl">
        <div class="screen-body">
            <h1>
                High-Speed Internet &amp; Wifi For Streaming, Gaming & Sharing.
            </h1>
            <p>Reliably fast internet for your lifestyle. Get the speed & coverage you need.</p>
            <a class="btn btn-secondary" href="">Learn More</a>
        </div>
    </div>
</div>

{{< highlight html>}}
<div class="hero hero-modifier screen">
    <div class="container-xxl">
        <div class="screen-body">
            <h1>
                High-Speed Internet &amp; Wifi For Streaming, Gaming & Sharing.
            </h1>
            <p>Reliably fast internet for your lifestyle. Get the speed & coverage you need.</p>
            <a class="btn btn-secondary" href="">Learn More</a>
        </div>
    </div>
</div>
{{< /highlight >}}

## Sass Mixins

We supply a screen mixin. You could include it on on your own custom element.

<div class="table-responsive">
    <table class="table caption-top">
        <caption class="h3 mb-0"><span class="badge bg-warning"><code>screen()</span></code></caption>
        <thead>
            <tr>
                <th scope="col">Variable name</th>
                <th scope="col">Default value</th>
                <th scope="col">Required</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><code>$color</code></th>
                <td><code>$primary</code></td>
                <td>No</td>
            </tr>
            <tr>
                <th scope="row"><code>$opacity</code></th>
                <td><code>0.15</code></td>
                <td>No</td>
            </tr>
            <tr>
                <th scope="row"><code>$selector</code></th>
                <td><code>'screen'</code></td>
                <td>No</td>
            </tr>
        </tbody>
    </table>
</div>
