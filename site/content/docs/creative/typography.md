---
title: 'Typography'
description: 'This is my typo description.'
date: 2020-07-22
group: 'creative'
---

## Headings
Headings use a [_perfect fourth_](https://type-scale.com/?size=16&scale=1.333&text=A%20Visual%20Type%20Scale&font=DM%20Sans&fontweight=400&bodyfont=Poppins&bodyfontweight=400&lineheight=1.65&backgroundcolor=white&fontcolor=%23333&preview=false) type scale. 

<h1>A Visual Type Scale (h1)</h1>
<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<h2 class="mt-0">A Visual Type Scale (h2)</h2>
<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.</p>
<h3 class="mt-0">A Visual Type Scale (h3)</h3>
<p>Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna.</p>
<h4>A Visual Type Scale (h4)</h4>
<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<h5>A Visual Type Scale (h5)</h5>
<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

## Lists

<ul>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Nulla volutpat aliquam velit
        <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Ac tristique libero volutpat at</li>
        </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
</ul>

<ol>
    <li>Nulla volutpat aliquam velit</li>
    <li>Lorem ipsum dolar maat</li>
    <li>Aenean sit amet erat nunc</li>
</ol>

### Icon-based list

<ul class="fa-ul">
  <li><span class="fa-li"><i class="fas fa-check"></i></span>List icons can</li>
</ul>

## Links

<a href="https://imarc.com">I am a link</a>
 
<ul class="list-unstyled">
    <li><a href="#" class="link-primary">Primary link</a></li>
    <li><a href="#" class="link-secondary">Secondary link</a></li>
    <li><a href="#" class="link-success">Success link</a></li>
    <li><a href="#" class="link-danger">Danger link</a></li>
    <li><a href="#" class="link-warning">Warning link</a></li>
    <li><a href="#" class="link-info">Info link</a></li>
    <li><a href="#" class="link-light">Light link</a></li>
    <li><a href="#" class="link-dark">Dark link</a></li>
</ul>

## Display headings

<div class="display-1">Display 1</div>
<div class="display-2">Display 2</div>
<div class="display-3">Display 3</div>
<div class="display-4">Display 4</div>

## Sizes

Note that pixel values referenced below are the calculated size at the largest breakpoint and above. On thinner screens, Bootstrap’s [Responsive Font Size](https://github.com/twbs/rfs) (RFS) engine takes effect but ratios remain the same.

### Body copy

<div class="table-responsive">
    <table class="table caption-top">
        <thead>
            <tr>
                <th scope="col">Variable name</th>
                <th scope="col">Value</th>
                <th scope="col">Actual size</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><code>$font-size-xxs</code></th>
                <td><code>$font-size-base * 0.563</code></td>
                <td><code>9.008px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$font-size-xs</code></th>
                <td><code>$font-size-base * 0.75</code></td>
                <td><code>12px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$font-size-sm</code></th>
                <td><code>$font-size-base * 0.875</code></td>
                <td><code>14px</code></td>
            </tr>
            <tr class="table-success">
                <th scope="row"><code>$font-size-base</code></th>
                <td><code>1rem</code></td>
                <td><code>16px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$font-size-md</code></th>
                <td><code>$font-size-base * 1.333</code></td>
                <td><code>21.328px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$font-size-lg</code></th>
                <td><code>$font-size-base * 1.777</code></td>
                <td><code>28.432px</code></td>
            </tr>
        </tbody>
    </table>
</div>

### Headings

<div class="table-responsive">
    <table class="table caption-top">
        <thead>
            <tr>
                <th scope="col">Variable name</th>
                <th scope="col">Value</th>
                <th scope="col">Actual size</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><code>$h1-font-size</code></th>
                <td><code>$font-size-base * 3.157</code></td>
                <td><code>50.512px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$h2-font-size</code></th>
                <td><code>$font-size-base * 2.369</code></td>
                <td><code>43.5896px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$h3-font-size</code></th>
                <td><code>$font-size-base * 1.777</code></td>
                <td><code>28.432px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$h4-font-size</code></th>
                <td><code>$font-size-base * 1.333</code></td>
                <td><code>21.328px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$h5-font-size</code></th>
                <td><code>$font-size-base * 1.15</code></td>
                <td><code>18.4px</code></td>
            </tr>
        </tbody>
    </table>
</div>

### Display headings

<div class="table-responsive">
    <table class="table caption-top">
        <thead>
            <tr>
                <th scope="col">Heading level</th>
                <th scope="col">Value</th>
                <th scope="col">Actual size</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><code>Display 1</code></th>
                <td><code>9.97rem</code></td>
                <td><code>159.52px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>Display 2</code></th>
                <td><code>7.48rem</code></td>
                <td><code>119.68px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>Display 3</code></th>
                <td><code>5.61rem</code></td>
                <td><code>89.76px</code></td>
            </tr>
            <tr>
                <th scope="row"><code>Display 4</code></th>
                <td><code>4.209rem</code></td>
                <td><code>67.3444px</code></td>
            </tr>
        </tbody>
    </table>
</div>

## Line-height

<div class="table-responsive">
    <table class="table caption-top">
        <thead>
            <tr>
                <th scope="col">Variable name</th>
                <th scope="col">Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><code>$line-height-base</code></th>
                <td><code>1.6</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$headings-line-height</code></th>
                <td><code>1.15</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$display-line-height</code></th>
                <td><code>1.15</code></td>
            </tr>
        </tbody>
    </table>
</div>

## Weights

To be written.
