import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

import { Training } from './model/training';
//import { date } from "./model/date";
import { TrainingT1 } from './model/trainingT1';
import { TrainingT2 } from "./model/trainingT2";
import { TrainingT3 } from "./model/trainingT3";
import { TrainingT4 } from "./model/trainingT4";
import { TrainingT5 } from "./model/trainingT5";
import { TrainingT6 } from "./model/trainingT6";
import { ChempReg } from './model/ChempReg';
import { TrainigTypes } from './model/trainigTypes';
import { element } from '@angular/core/src/render3';

import { ChempTrainService } from './chemp.service'


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

  chempReg: ChempReg;


  constructor(@Inject(DOCUMENT) private document: any, private _chempTrainService: ChempTrainService, private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      surName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
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
        this.selectedTrainig = new TrainingT6();
        break;
      }
      case 5: {
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

  updateCurrenChemp(){
    this.chempReg = Object.assign({}, this.secondFormGroup.value);
    this.chempReg.classType = this.classType;
    this.chempReg.trainingType = this.selectedTT;
    this.chempReg.sumTotal = this.sumTotal;
    this.chempReg.selectedTrainig = new Array();

    this.selectedTrainig.datesFirst.forEach(element => {
      if (element.selected){
        this.chempReg.selectedTrainig.push(element.date);
      }
    })

    this.selectedTrainig.datesSecond.forEach(element => {
      if (element.selected){
        this.chempReg.selectedTrainig.push(element.date);
      }
    })

  }

  testClick() {
    //console.log(this.classType);
    //console.log(this.trainingTypes.tType);
    //console.log(this.selectedTT);
    //console.log(this.selectedTrainig);
    //console.log(this.selectedTrainig.datesFirst);
    //console.log(this.selectedTrainig.name);
    this.updateCurrenChemp();
    console.log(this.chempReg);
    this._chempTrainService.addPart(this.chempReg)
    .subscribe(response => {
      console.log(response.url);
    }, error => {
      console.log(error);
    })
  }

  registerPayment(){
    this.updateCurrenChemp();
    this._chempTrainService.addPart(this.chempReg)
    .subscribe(response => {

      //console.log(response.url);
      this.document.location.href = response.url;


    }, error => {
      console.log(error);
    })
  }

  ngOnInit() {

  }
}