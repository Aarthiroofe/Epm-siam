import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss']
})
export class EmployeDetailComponent implements OnInit {
  myFiles:any[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }
  getFileDetails (e:any) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
    console.log(this.myFiles)
  }

  uploadFiles () {
    const frmData = new FormData();
    
    for (var i = 0; i < this.myFiles.length; i++) { 
      frmData.append("fileUpload", this.myFiles[i]);
    }
  }
}
