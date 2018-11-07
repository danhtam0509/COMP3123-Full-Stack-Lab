
import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';
import { getCurrentView } from '@angular/core/src/render3';

@Component ( {
    selector: 'students',
    template: `<h2> {{getTitle()}} {{getCurrentDate()}} </h2>`
})

export class StudentsComponent {
    title = "My List of Students";

    getTitle() {
        return this.title;
    }

    getCurrentDate() {
        return new Date();
    }
}

