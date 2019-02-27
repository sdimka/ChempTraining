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

  user: User;


  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
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

  nextStepAndSet(){
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