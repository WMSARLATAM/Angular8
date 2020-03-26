import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'comp2',
    templateUrl: "/com2.component.html"
})


export class Comp2 implements OnInit{

    constructor(){}
    filterPost = '';
    posts = [
        {
            "id": 1,
            "title": "Angular",
            "date": "02/04/2020"
        },
        {
            "id": 2,
            "title": "Java",
            "date": "03/04/2020"
        },
        {
            "id": 3,
            "title": "C#",
            "date": "04/04/2020"
        },
        {
            "id": 4,
            "title": "Python",
            "date": "05/04/2020"
        },
        {
            "id": 5,
            "title": "Flutter",
            "date": "06/04/2020"
        }
    ];

    ngOnInit(){

    }

}