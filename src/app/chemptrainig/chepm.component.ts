import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Training } from './model/training';
import { Training1 } from './model/training1';
import { Training2 } from './model/training2';
import { User } from './model/user';
import { TrainigTypes } from './model/trainigTypes';



@Component({
  selector: 'app-ChempTrainig',
  templateUrl: './chepm.component.html',
  styleUrls: ['./chepm.component.scss']
})

export class ChempComponent implements OnInit {
  isLinear = true;
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
        this.selectedTrainig = new Training1();
        break;
      }
      case 1: {
        this.selectedTrainig = new Training2();
        break;
      }
      case 2: {
        this.selectedTrainig = new Training1();
        break;
      }
      case 3: {
        this.selectedTrainig = new Training2();
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
    this.trainingTypes = new TrainigTypes;
this.selectedTrainig = new Training1();
  }
}