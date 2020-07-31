---
title: 'accordion'
date: 2020-07-22
draft: false
layout: 'base-container'
---

<div class="accordion accordion-primary" id="accordionExamplePrimary">
    <div class="accordion-item my-2">
        <button class="btn accordion-trigger collapsed" id="headingOne" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <div class="d-flex align-items-start">
                <div class="accordion-heading flex-grow-1">
                    Donec sed odio dui
                </div>
                <div class="accordion-icon ml-3">
                    <i class="fas fa-chevron-up"></i>
                </div>
            </div>
        </button>
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExamplePrimary">
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
    <div class="accordion-item my-2">
        <button class="btn accordion-trigger collapsed" id="headingTwo" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <div class="d-flex align-items-start">
                <div class="accordion-heading flex-grow-1">
                    Lorem ipsum dolor sit amet orem ipsum dolor
                </div>
                <div class="accordion-icon ml-3">
                    <i class="fas fa-chevron-up"></i>
                </div>
            </div>
        </button>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExamplePrimary">
            <div class="accordion-body">
                <div class="accordion-heading h4">
                    A heading example
                </div>
                <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch.
                </p>
            </div>
        </div>
    </div>
</div>

