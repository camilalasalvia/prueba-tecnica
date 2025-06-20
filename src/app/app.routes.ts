import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => import('./products/products.component')
    },
    {
        path: 'products/create',
        loadComponent: () => import('./products/create-edit-product/create-edit-product.component')
    },
    {
        path: 'products/edit/:productId',
        loadComponent: () => import('./products/create-edit-product/create-edit-product.component')
    },
    {
        path: '**',
        redirectTo: 'products',
    },
];
