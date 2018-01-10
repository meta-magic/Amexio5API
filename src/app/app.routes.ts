/**
 * Created by pratik on 11/12/17.
 */
import { Routes } from '@angular/router';

export const APP_ROUTE: Routes = [

  {
    path: '', redirectTo: 'getting-started', pathMatch: 'full'
  },
  {
    path: 'getting-started', loadChildren: './text/text.demo#TextDemoModule'
  },
  {
    path: 'textinput', loadChildren: './forminput/text/text.demo#TextDemoModule'
  },
  {
    path: 'email', loadChildren: './email/email.demo#EmailDemoModule'
  },
  {
    path: 'number', loadChildren: './number/number.demo#NumberDemoModule'
  },
  {
    path: 'password', loadChildren: './password/password.demo#PasswordDemoModule'
  },
  {
    path: 'textarea', loadChildren: './textarea/textarea.demo#TextAreaDemoModule'
  },
  {
    path: 'dropdown', loadChildren: './dropdown/dropdown.demo#DropDownDemoModule'
  },
  {
    path: 'checkbox', loadChildren: './checkbox/checkbox.demo#CheckBoxDemoModule'
  },
  {
    path: 'checkboxgrp', loadChildren: './checkboxgrp/checkboxgrp.demo#CheckBoxGroupDemoModule'
  },
  {
    path: 'typeahead', loadChildren: './typeahead/typeahead.demo#TypeAheadDemoModule'
  },
  {
    path: 'radio', loadChildren: './radio/radio.demo#RadioDemoModule'
  },
  {
    path: 'button', loadChildren: './button/button.demo#ButtonDemoModule'
  },
  {
    path: 'buttongrp', loadChildren: './buttongroup/button.group.demo#ButtonGroupDemoModule'
  },
  {
    path: 'paginator', loadChildren: './paginator/paginator.demo#PaginatorDemoModule'
  },
  {
    path: 'rating', loadChildren: './rating/rating.demo#RatingDemoModule'
  },
  {
    path: 'sidenav', loadChildren: './sidenav/sidenav.demo#SideNavDemoModule'
  },
  {
    path: 'tab', loadChildren: './tab/tab.demo#TabDemoModule'
  },
  {
    path: 'rvtab', loadChildren: './tab/rvtab.demo#RVTabDemoModule'
  },
  {
    path: 'vtab', loadChildren: './tab/vtab.demo#VTabDemoModule'
  },
  {
    path: 'toggle', loadChildren: './toggle/toggle.demo#ToggleDemoModule'
  },
  {
    path: 'tree', loadChildren: './tree/tree.demo#TreeDemoModule'
  },
  {
    path: 'listbox', loadChildren: './listbox/listbox.demo#ListDemoModule'
  },
  {
    path: 'accordion', loadChildren: './fieldset/fieldset.demo#FieldSetDemoModule'
  }
];
