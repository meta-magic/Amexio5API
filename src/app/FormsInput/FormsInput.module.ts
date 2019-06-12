import { NgModule } from "@angular/core";
import { AmexioWidgetModule ,LoadRecaptchaService } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared.module";
import { FORMSINPUT_ROUTE } from "./FormsInput.routes";


import { RouterModule } from "@angular/router";
 
import { SinglecheckboxDemo}  from './singlecheckbox/singlecheckbox.demo';
import { CheckBoxGroupDemo} from './checkboxgroup/checkboxgroup.demo';
import { ChipsDemo } from "./chips/chips.demo";
import { CreditCardDemo } from "./creditcard/creditcard.demo";
import { DateTimePickerDemo } from "./datepicker/datepicker.demo";
import { MultipleDateTimePickerDemo } from "./multipledatepicker/multipledatepicker.demo"
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
import { RangeSliderDemo } from "./rangeslider/rangeslider.demo";
/**
 * Created by kedar on 1/2/19.
 */
@NgModule({
    declarations: [ SinglecheckboxDemo, CheckBoxGroupDemo, ChipsDemo,
         CreditCardDemo, DateTimePickerDemo,
        DropDownDemo,DropDownFilterDemo, DropDownMultiDemo, DropDownTemplateDemo, EmailDemo,
        FileuploadDemo,LabelDemo,NumberDemo,PasswordDemo,RadioGroupDemo,RatingDemo,
        RecaptchaDemo,SearchBox,SliderDemo,FacebookLoginDemo,GitHubLoginDemo,GoogleLoginDemo,LinkedinLoginDemo,
        TagInputDemo,TextDemo, TextareaDemo, ToggleDemo, TypeAheadDemo,BadgeDemo,
        RangeSliderDemo, MultipleDateTimePickerDemo
    
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule, 
        SharedModule.forRoot(),
        AmexioWidgetModule,
        RouterModule.forChild(FORMSINPUT_ROUTE),
    ],
    providers: [LoadRecaptchaService]
})
export class FormsInputModule {

}
