import { Component } from '@angular/core';
import {MaterialModule} from "../../material.module";

@Component({
  selector: 'app-privacy-policy',
  imports: [
    MaterialModule
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
  standalone: true
})
export class PrivacyPolicyComponent {

}
