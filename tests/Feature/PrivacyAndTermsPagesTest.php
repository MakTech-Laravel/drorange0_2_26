<?php

it('renders the privacy policy page', function () {
    $this->get(route('privacy'))
        ->assertSuccessful()
        ->assertInertia(fn ($page) => $page->component('frontend/privacy-policy'));
});

it('renders the terms and conditions page', function () {
    $this->get(route('terms'))
        ->assertSuccessful()
        ->assertInertia(fn ($page) => $page->component('frontend/terms-and-conditions'));
});
