import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiInteractionService } from '../api-interaction.service';
//import { FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Slide } from '../slide';

@Component({
  selector: 'app-new-slide',
  templateUrl: './new-slide.component.html',
  styleUrls: ['./new-slide.component.css']
})

export class NewSlideComponent implements OnInit {
/*
  formGroup = this.fb.group({
    file: [null, Validators.required]
  });
*/
  //constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }
  constructor() { }

  ngOnInit() {
  }

  onTitleChange(event) {

  }

  onDescriptionChange(event) {

  }

  onFileChange(event) {
    /*
    let reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
    */
  }

  onUrlChange(event) {

  }

}
