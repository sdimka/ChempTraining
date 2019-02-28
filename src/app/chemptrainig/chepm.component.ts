import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Training } from './model/training';
//import { date } from "./model/date";
import { TrainingT1 } from './model/trainingT1';
import { TrainingT2 } from "./model/trainingT2";
import { TrainingT3 } from "./model/trainingT3";
import { TrainingT4 } from "./model/trainingT4";
import { TrainingT5 } from "./model/trainingT5";
import { User } from './model/user';
import { TrainigTypes } from './model/trainigTypes';
import { element } from '@angular/core/src/render3';



@Component({
  selector: 'app-ChempTrainig',
  templateUrl: './chepm.component.html',
  styleUrls: ['./chepm.component.scss']
})

export class ChempComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  classType: number;

  trainingTypes: TrainigTypes;

  selectedTT: number;
  selectedTrainig: Training;

  sumTotal: number;

  firstStep: boolean = true;
  secondStep: boolean = true;
  thirStep: boolean = true;

  user: User;


  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrlN: ['', Validators.required],
      secondCtrlFN: ['', Validators.required],
      secondCtrlPH: ['', Validators.required],
      secondCtrlEM: ['', Validators.required],
    });

    this.trainingTypes = new TrainigTypes();
    this.selectedTrainig = new TrainingT1();

  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  nextStepAndSet() {
    this.selectTrainig(this.selectedTT);
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  selectTrainig(selectedOption: number) {
    switch (selectedOption) {
      case 0: {
        this.selectedTrainig = new TrainingT1();
        break;
      }
      case 1: {
        this.selectedTrainig = new TrainingT2();
        break;
      }
      case 2: {
        this.selectedTrainig = new TrainingT3();
        break;
      }
      case 3: {
        this.selectedTrainig = new TrainingT4();
        break;
      }
      case 4: {
        this.selectedTrainig = new TrainingT5();
        break;
      }
    }
  }

  computeTotal(): number {
    let i = 0;
    this.thirStep = true;

    if (this.classType == 1) {

      this.selectedTrainig.datesSecond.forEach(element => {
        if (element.selected && i > 0) {
          i = i + 2000;
        } else if (element.selected && i == 0) {
          i = 3000
          this.thirStep = false;
        }
      })

      this.selectedTrainig.datesFirst.forEach(element => {
        if (element.selected) {
          i = i + 500;
          this.thirStep = false;
        }
      });
    }

    if (this.classType == 2) {
      this.selectedTrainig.datesSecond.forEach(element => {
        if (element.selected && i > 0) {
          i = i + 1000;
        } else if (element.selected && i == 0) {
          i = 1500
          this.thirStep = false;
        }
      })
      this.selectedTrainig.datesFirst.forEach(element => {
        if (element.selected) {
          this.thirStep = false;
        }
      });
    }
    return i;
  }

  onChanges(): void {
    this.sumTotal = this.computeTotal();

    if (this.classType != null) {
      this.firstStep = false;
    }
    if (this.selectedTT != null) {
      this.secondStep = false;
    }



    
    // if (this.sumTotal > 0) {
    //   (this.complexForm.controls['nominations']).setErrors(null)
    // }
  }

  testClick() {
    console.log(this.classType);
    //console.log(this.trainingTypes.tType);
    console.log(this.selectedTT);
    console.log(this.selectedTrainig);
    console.log(this.selectedTrainig.datesFirst);
    console.log(this.selectedTrainig.name);


  }

  ngOnInit() {

  }
}