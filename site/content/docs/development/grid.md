---
title: 'Grid'
description: 'Bootstrap’s grid provides massive power and flexibility.'
date: 2020-07-22
group: 'development'
bootstrapLink: true
bootstrapSection: 'layout'
toc: true
---

## How it works

Bootstrap’s grid is powered by flexbox, and we use it to its full extent. You are required to use a [container](/docs/development/containers) element in conjunction with grid.

## Specifics

<div class="table-responsive">
    <table class="table mb-4">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">
                    xs<br>
                    <span class="font-weight-normal">&lt;576px</span>
                </th>
                <th scope="col">
                    sm<br>
                    <span class="font-weight-normal">&ge;576px</span>
                </th>
                <th scope="col">
                    md<br>
                    <span class="font-weight-normal">&ge;768px</span>
                </th>
                <th scope="col">
                    lg<br>
                    <span class="font-weight-normal">&ge;992px</span>
                </th>
                <th scope="col">
                    xl<br>
                    <span class="font-weight-normal">&ge;1200px</span>
                </th>
                <th scope="col">
                    xxl<br>
                    <span class="font-weight-normal">&ge;1400px</span>
                </th>
            </tr>
        </thead>
    <tbody>
        <tr class="text-decoration-line-through">
            <th class="text-nowrap" scope="row"><div><code class="font-weight-normal">.container</code></div> max-width</th>
            <td>None</td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1156px</td>
            <td>1344px</td>
        </tr>
        <tr>
            <td class="text-center" colspan="7"><div class="mb-2"><i class="fas fa-sm fa-arrow-up"></i> We don’t use Bootstrap’s max-width per-breakpoint containers (<code>.container</code>).</div> <div>We leverage the fluid-until-breakpoint containers (<code>.container-xxl</code>) <i class="fas fa-sm fa-arrow-down"></i></div></td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row"><div><code class="font-weight-normal">.container-xxl</code></div> max-width</th>
            <td>None</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>1344px</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">Class prefix</th>
            <td><code>.col-</code></td>
            <td><code>.col-sm-</code></td>
            <td><code>.col-md-</code></td>
            <td><code>.col-lg-</code></td>
            <td><code>.col-xl-</code></td>
            <td><code>.col-xxl-</code></td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row"># of columns</th>
            <td colspan="6">12</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">Gutter width</th>
            <td colspan="6">4rem – this is 2rem (32px) of left/right padding</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">Custom gutters</th>
            <td colspan="6">Yes</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">Nestable</th>
            <td colspan="6">Yes</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">Column ordering</th>
            <td colspan="6">Yes</td>
        </tr>
    </tbody>
    </table>
</div>

## Examples

You can really do most anything width the grid.

### Basic grid

This example uses a normal grid with our default 4rem `$grid-gutter-width`. This variable is set in our Bootstrap variables file. It is 2rem (32px) of padding on the left and right of every grid column. Grid rows automatically correct this with a negative left/right margin offset to ensure content remains aligned down a page. 

<div class="px-5 mb-4">
    <div class="row">
        <div class="col-sm bg-light border py-2">
            One of three columns
        </div>
        <div class="col-sm bg-light border py-2">
            One of three columns
        </div>
        <div class="col-sm bg-light border py-2">
            One of three columns
        </div>
    </div>
</div>

{{< highlight html>}}
<div class="row">
    <div class="col-sm">
        One of three columns
    </div>
    <div class="col-sm">
        One of three columns
    </div>
    <div class="col-sm">
        One of three columns
    </div>
</div>
{{< /highlight >}}

### Use gutter modifiers based on our `$spacers` system

Gutter modifiers allow you to change a grid’s column gutter width. Yo ucan also use vertical gutter width, which is very help to create space between stacked columns at a small screen.

<div class="mb-4">
    <div class="row gx-0 gy-4">
        <div class="col-md bg-light border py-2">
            One of two columns with no left/right gutter. But I do have a vertical gutter on small screen!
        </div>
        <div class="col-md bg-light border py-2">
            Two of two columns with no left/right gutter. But I do have a vertical gutter on small screen!
        </div>
    </div>
</div>

### Align offer boxes to the bottom

Using a `.align-items-{x}-end` aligns grid items to the bottom, allows us to use offer boxes with optional `.offer-standout` elements (Most popualr internet service) with ease. 

<div class="row align-items-sm-end gy-6 mb-6">
    <div class="col-sm-6">
        <div class="offer">
            <div class="offer-standout">
                Most popular internet service
            </div>
            <div class="offer-body">
                <div class="offer-header">
                    <div class="offer-heading">Fast Internet</div>
                    <div class="offer-subheading font-weight-bold">1000Mbps</div>
                </div>
                <div class="offer-torso">
                    <div class="offer-icons">
                        <div class="row align-items-center justify-content-start gx-3">
                            <div class="col-auto">
                                <div class="offer-icon">
                                    <img class="rounded-circle" src="https://dummyimage.com/54x54/b3b3b3/ffffff.png&text=icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="offer-features ml-n2">
                        <ul class="fa-ul">
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-check fa-sm"></i>
                                </span>
                                Basic service
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-check fa-sm"></i>
                                </span>
                                Great internet
                            </li>
                        </ul>    
                    </div>
                    <div class="offer-price">
                        <div class="mb-3 fz-sm">
                            <strong>6 month promotional price</strong>
                        </div>
                        <div class="pricetag">
                            <div class="pricetag-body">
                                <div class="pricetag-price d-flex align-items-end">
                                    <div class="pricetag-figure display-4 font-weight-bold">
                                        $59
                                    </div>
                                    <div class="pricetag-tooltip">
                                        <a class="link-primary" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"><i class="fas fa-info-circle"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="offer-footer">
                    <div class="mb-2">
                        <a class="btn btn-primary btn-block" href="">Check Availability</a>
                    </div>
                    <div>
                        <a class="btn btn-link btn-block" href="">More Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="offer">
            <div class="offer-body">
                <div class="offer-header">
                    <div class="offer-heading">Fast Internet</div>
                    <div class="offer-subheading font-weight-bold">1000Mbps</div>
                </div>
                <div class="offer-torso">
                    <div class="offer-icons">
                        <div class="row align-items-center justify-content-start gx-3">
                            <div class="col-auto">
                                <div class="offer-icon">
                                    <img class="rounded-circle" src="https://dummyimage.com/54x54/b3b3b3/ffffff.png&text=icon" />
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="offer-icon">
                                    <img class="rounded-circle" src="https://dummyimage.com/54x54/b3b3b3/ffffff.png&text=icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="offer-features ml-n2">
                        <ul class="fa-ul">
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-check fa-sm"></i>
                                </span>
                                High-speed modem
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-check fa-sm"></i>
                                </span>
                                Advanced whole-home WiFi
                            </li>
                        </ul>    
                    </div>
                    <div class="offer-price">
                        <div class="mb-3 fz-sm">
                            <strong>6 month promotional price</strong>
                        </div>
                        <div class="pricetag">
                            <div class="pricetag-body">
                                <div class="pricetag-price d-flex align-items-end">
                                    <div class="pricetag-figure display-4 font-weight-bold">
                                        $99
                                    </div>
                                    <div class="pricetag-tooltip">
                                        <a class="link-primary" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?"><i class="fas fa-info-circle"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="offer-footer">
                    <div class="mb-2">
                        <a class="btn btn-primary btn-block" href="">Check Availability</a>
                    </div>
                    <div>
                        <a class="btn btn-link btn-block" href="">More Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{{< highlight html>}}
<div class="row">
    <div class="col-sm">
        One of three columns
    </div>
    <div class="col-sm">
        One of three columns
    </div>
    <div class="col-sm">
        One of three columns
    </div>
</div>
{{< /highlight >}}


- Add example for using grid for other things one might not expect

{{< inprogress >}}
