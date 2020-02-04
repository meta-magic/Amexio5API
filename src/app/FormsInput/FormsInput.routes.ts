import { Routes } from '@angular/router';


import { SinglecheckboxDemo } from './singlecheckbox/singlecheckbox.demo';
import { CheckBoxGroupDemo } from './checkboxgroup/checkboxgroup.demo';

import { ChipsDemo } from "./chips/chips.demo";
import { CreditCardDemo } from "./creditcard/creditcard.demo";
import { DateTimePickerDemo } from "./datepicker/datepicker.demo";
import { DropDownDemo } from "./dropdown/dropdown.demo";
import { DropDownFilterDemo } from "./dropdownfilter/dropdownfilter.demo";
import { DropDownMultiDemo } from "./dropdownmulti/dropdownmulti.demo";
import { DropDownTemplateDemo } from "./dropdowntemplate/dropdowntemplate.demo";
import { EmailDemo } from "./email/email.demo";
import { FileuploadDemo } from "./fileupload/fileupload.demo";
import { LabelDemo } from "./label/label.demo";
import { NumberDemo } from "./number/number.demo";
import { PasswordDemo } from "./password/password.demo";
import { RadioGroupDemo } from "./radiogroup/radiogroup.demo";
import { RatingDemo } from "./rating/rating.demo";
import { RecaptchaDemo } from "./recaptcha/recaptcha.demo";
import { SearchBox } from "./searchbox/searchbox.demo";
import { SliderDemo } from "./slider/slider.demo";
import { FacebookLoginDemo } from "./socialmedialogin/facebooklogin/facebooklogin.demo";
import {GitHubLoginDemo} from "./socialmedialogin/githublogin/githublogin.demo";
import { GoogleLoginDemo } from "./socialmedialogin/googlelogin/googlelogin.demo";
import { LinkedinLoginDemo } from "./socialmedialogin/linkedinlogin/linkedinlogin.demo";
import { TagInputDemo } from "./taginput/taginput.demo";
import { TextDemo } from "./text/text.demo";
import { TextareaDemo } from "./textarea/textarea.demo";
import { ToggleDemo } from "./toggle/toggle.demo";
import { TypeAheadDemo } from "./typeahead/typeahead.demo";
import {BadgeDemo} from './badge/badge.demo';
import { RangeSliderDemo } from './rangeslider/rangeslider.demo';
import { MultipleDateTimePickerDemo } from './multipledatepicker/multipledatepicker.demo'
import { GeoLocationDemo } from './geolocation/geolocation.demo';
import { MultipleRangeDateTimePickerDemo } from './multirangedatepicker/multirangedatepicker.demo';
import { DialpadDemo } from "./dialpad/dialpad.demo";
import { TreeDropDownDemo } from './dropdownwithtree/treedropdown.demo';

export const FORMSINPUT_ROUTE: Routes = [

    {
        path: 'singlecheckbox-demo', component: SinglecheckboxDemo,
    },
    {
        path: 'checkboxgroup-demo', component: CheckBoxGroupDemo,
    },
    {
        path: 'chips-demo', component: ChipsDemo,
    },
    {
        path: 'credit-card-demo', component: CreditCardDemo,
    },
    {
        path: 'date-picker-demo', component: DateTimePickerDemo,
    },
    {
        path: 'dropdownbasic', component: DropDownDemo,
    },
    {
        path: 'dropdownfilter', component: DropDownFilterDemo,
    },
    {
        path: 'dropdownmulti', component: DropDownMultiDemo,
    },
    {
        path: 'dropdowntemplate', component: DropDownTemplateDemo,
    },
    {
        path: 'email-demo', component: EmailDemo,
    },
    {
        path: 'fileupload-demo', component: FileuploadDemo,
    },
    {
        path: 'label-demo', component: LabelDemo,
    },
    {
        path: 'number-demo', component: NumberDemo,
    },
    {
        path: 'password-demo', component: PasswordDemo,
    },
    {
        path: 'radiogroup-demo', component: RadioGroupDemo,
    },
    {
        path: 'rating-demo', component: RatingDemo,
    },
    {
        path: 'recaptcha-demo', component: RecaptchaDemo,
    },
    {
        path: 'searchbox-demo', component: SearchBox,
    },
    {
        path: 'slider-demo', component: SliderDemo,
    },
    {
        path: 'facebook-login-demo', component: FacebookLoginDemo,
    },
    {
        path: 'github-login-demo', component: GitHubLoginDemo,
    },
    {
        path: 'google-login-demo', component: GoogleLoginDemo,
    },
    {
        path: 'linkedin-login-demo', component: LinkedinLoginDemo,
    },
    {
        path: 'taginput-demo', component: TagInputDemo,
    },
    {
        path: 'textinput', component: TextDemo,
    },
    {
        path: 'textarea-demo', component: TextareaDemo,
    },
    {
        path: 'toggle-demo', component: ToggleDemo,
    },
    {
        path: 'typeahead-demo', component: TypeAheadDemo,
    },
    {
        path: 'badge-demo', component: BadgeDemo,
    },
    {
        path: 'value-range', component: RangeSliderDemo,
    },
    { 
        path: 'multidatepicker-demo', component: MultipleDateTimePickerDemo,
    },
    { 
        path: 'geolocation-demo', component: GeoLocationDemo,
    },
    { 
        path: 'multirangedatepicker-demo', component: MultipleRangeDateTimePickerDemo,
     },
    {
        path: 'dialpad-demo', component: DialpadDemo,
    },
    {
        path: 'tree-dropdown', component: TreeDropDownDemo,
    },
]