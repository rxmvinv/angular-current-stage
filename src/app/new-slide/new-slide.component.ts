import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiInteractionService } from '../api-interaction.service';
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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

  insertedSlide: FormGroup;
  validState: String;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private apiService: ApiInteractionService, private location: Location) { }

  ngOnInit() {
    this.insertedSlide = new FormGroup({
           title: new FormControl(null, [Validators.required]),
           description: new FormControl([Validators.required]),
           image: new FormControl([null, Validators.required]),
           embedded: new FormControl()
    });
  }

  onTitleChange(event) {
    this.insertedSlide.value.title = event.target.value;
  }

  onDescriptionChange(event) {
    this.insertedSlide.value.description = event.target.value;
  }



  onFileChange(event) {
    //console.log(event.target.value);

    let reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.insertedSlide.value.image = reader.result;
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }

  }

  onEmbeddedChange(event) {
    this.insertedSlide.value.embedded = event.target.value;
  }

  onSubmit(formValue): void {
    if (typeof formValue.image !== 'string') {
       formValue.image = '/assets/images/default.png';
    }

    if (!formValue.embedded) {
      formValue.embedded = 'empty';
    }

    if (formValue.title && formValue.description) {
      console.log(formValue);

      this.apiService.addSlide(formValue).subscribe()
      console.log("Form Submitted!");
      location.replace('/');
    } else {
      this.validState = 'Required title and description fields';
      return;
    }
  }

}
