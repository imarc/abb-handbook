---
title: 'Accordion'
description: 'Accordion’s heavily leverage Bootstrap’s collapse functionality. We include sizing and color modifiers.'
group: 'components'
demolink: false
---

## Examples 

### Primary

<div class="accordion accordion-primary" id="accordionExample0">
    <div class="accordion-item my-2">
        <button class="btn accordion-trigger collapsed" id="heading0-1" type="button" data-toggle="collapse" data-target="#collapse0-1" aria-expanded="true" aria-controls="collapse0-1">
            <div class="d-flex align-items-start">
                <div class="accordion-heading flex-grow-1">
                    Donec sed odio dui
                </div>
                <div class="accordion-icon ml-3">
                    <i class="fas fa-chevron-up"></i>
                </div>
            </div>
        </button>
        <div id="collapse0-1" class="collapse" aria-labelledby="heading0-1" data-parent="#accordionExample0">
            <div class="accordion-body">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <div class="accordion-heading h3">
                            Commodo Fermentum Mollis Tellus Nullam
                        </div>
                        <p>
                            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch.
                        </p>
                    </div>
                    <div class="col-md-4">
                        <img src="https://dummyimage.com/800x500/bad456/b05cb0.png&text=image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Light

<div class="accordion accordion-light" id="accordionExample1">
    <div class="accordion-item my-2">
        <button class="btn accordion-trigger collapsed" id="headingOne" type="button" data-toggle="collapse" data-target="#collapse1-1" aria-expanded="true" aria-controls="collapse1-1">
            <div class="d-flex align-items-start">
                <div class="accordion-heading flex-grow-1">
                    Donec sed odio dui
                </div>
                <div class="accordion-icon ml-3">
                    <i class="fas fa-chevron-up"></i>
                </div>
            </div>
        </button>
        <div id="collapse1-1" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample1">
            <div class="accordion-body">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <div class="accordion-heading h3">
                            Lorem ipsum dolar
                        </div>
                        <p>
                            Enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                        </p>
                    </div>
                    <div class="col-md-4">
                        <img src="https://dummyimage.com/800x500/bad456/b05cb0.png&text=image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Minimal

<div class="accordion accordion-minimal" id="accordionExample2">
    <div class="accordion-item my-2">
        <button class="btn accordion-trigger collapsed" id="heading2-1" type="button" data-toggle="collapse" data-target="#collapse2-1" aria-expanded="true" aria-controls="collapse2-1">
            <div class="d-flex align-items-start">
                <div class="accordion-heading flex-grow-1">
                    Donec sed odio dui
                </div>
                <div class="accordion-icon ml-3">
                    <i class="fas fa-chevron-up"></i>
                </div>
            </div>
        </button>
        <div id="collapse2-1" class="collapse" aria-labelledby="heading2-1" data-parent="#accordionExample2">
            <div class="accordion-body">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <div class="accordion-heading h3">
                            Lorem ipsum dolar
                        </div>
                        <p>
                            Enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch.
                        </p>
                    </div>
                    <div class="col-md-4">
                        <img src="https://dummyimage.com/800x500/bad456/b05cb0.png&text=image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Sizes

You can leverage different accordion sizes using `.accordion-lg` and `.accordion-sm` modifier classes.

## Markup

{{< highlight html>}}
<div class="accordion accordion-primary" id="accordionExample0">
    <div class="accordion-item my-2">
        <button class="btn accordion-trigger collapsed" id="heading0-1" type="button" data-toggle="collapse" data-target="#collapse0-1" aria-expanded="true" aria-controls="collapse0-1">
            <div class="d-flex align-items-start">
                <div class="accordion-heading flex-grow-1">
                    Donec sed odio dui
                </div>
                <div class="accordion-icon ml-3">
                    <i class="fas fa-chevron-up"></i>
                </div>
            </div>
        </button>
        <div id="collapse0-1" class="collapse" aria-labelledby="heading0-1" data-parent="#accordionExample0">
            <div class="accordion-body">
                <div class="accordion-heading h3">
                    Commodo Fermentum Mollis Tellus Nullam
                </div>
                …
            </div>
        </div>
    </div>
</div>
{{< /highlight >}}



<h2 class="h4">Sass Mixins</h2>

We supply some accordion-based mixins for finer control – `accordion-variant()` and `accordion-size()`.

<div class="table-responsive">
    <table class="table caption-top">
        <caption class="h3 mb-0"><span class="badge bg-warning"><code>accordion-variant()</span></code></caption>
        <thead>
            <tr>
                <th scope="col">Variable name</th>
                <th scope="col">Default value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><code>$accordion-bg</code></th>
                <td><code>$gray-400</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$accordion-border-width</code></th>
                <td><code>$border-width</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$accordion-border-radius</code></th>
                <td><code>$border-radius</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$accordion-border-color</code></th>
                <td><code>$gray-600</code></td>
            </tr>
        </tbody>
    </table>
</div>

<div class="table-responsive">
    <table class="table caption-top">
        <caption class="h3 mb-0"><span class="badge bg-warning"><code>accordion-size()</span></code></caption>
        <thead>
            <tr>
                <th scope="col">Variable name</th>
                <th scope="col">Default value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><code>$accordion-padding-x</code></th>
                <td><code>1rem</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$accordion-padding-y</code></th>
                <td><code>1rem</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$accordion-padding-x-sm</code></th>
                <td><code>0.725rem</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$accordion-padding-y-sm</code></th>
                <td><code>0.725rem</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$accordion-padding-x-lg</code></th>
                <td><code>1.25rem</code></td>
            </tr>
            <tr>
                <th scope="row"><code>$accordion-padding-y-lg</code></th>
                <td><code>1.25rem</code></td>
            </tr>
        </tbody>
    </table>
</div>
