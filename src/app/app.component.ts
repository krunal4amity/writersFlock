import { ComprehendService } from './comprehend.service';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import * as AWS from 'aws-sdk';
import { integer } from 'aws-sdk/clients/storagegateway';
//import AWS = require('aws-sdk'); 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'writersFlock';
  
  constructor(private comprehen : ComprehendService){

  }

  

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  negativity = 0;
  positivity = 0;
  neutrality = 0;
  mixed_sentiment = 0;
  vertical = false;
  analysis = [];
  i=0;j=0;k=0;l=0;m=0;n=0;o=0;p=0;

  onSubmit(f:NgForm){
    console.log(f.value);
    //this.params.Text=f.value.article;
    let aws = this.comprehen.getComprehend(f.value.article).subscribe((data)=>{
      console.log(data['message']);
      console.log(data['entity']['Entities']);
      console.log(data['key_phrase']['KeyPhrases']);
      //console.log(data['message']['SentimentScore']);
      this.negativity=data['message']['SentimentScore']['Negative'];
      this.positivity=data['message']['SentimentScore']['Positive'];
      this.neutrality=data['message']['SentimentScore']['Neutral'];
      this.mixed_sentiment=data['message']['SentimentScore']['Mixed'];


      (data['entity']['Entities']).forEach((data)=>{
        if(data.Type=='PERSON') this.i++;
        if(data.Type=='LOCATION') this.j++;
        if(data.Type=='COMMERCIAL_ITEM') this.k++;
        if(data.Type=='EVENT') this.m++;
        if(data.Type=='DATE') this.n++;
        if(data.Type=='QUANTITY') this.o++;
        if(data.Type=='TITLE') this.p++;
      });


    })
    }
}
