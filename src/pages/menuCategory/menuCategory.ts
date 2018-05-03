import { Component } from '@angular/core';

@Component({
    selector: 'menu-category-page',
    templateUrl: 'menuCategory.html'
})

export class MenuCategoryPage{
    categories: any = ['Starters', 'Main Course', 'Dessert', 'Drinks']
    categorySelected(category){
        console.log(category+' selected');
    }
}