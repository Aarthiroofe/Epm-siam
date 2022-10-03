import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
// import "jspdf-autotable";
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss']
})
export class EmployeListComponent implements OnInit {
  displayedColumns: string[] = [ 'FirstName', 'LastName', 'email', 'phone','Employeeid', 'employertype','Action' ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  fileName = 'ExcelSheet.xlsx';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  selectedColumn = 'name';


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort;
  }
  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.dataSource.sort = this.matSort;
    // this.changeSortedColumn();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  changeSortedColumn() {
    const sortState: Sort = { active: this.selectedColumn, direction: 'asc' };
    this.matSort.active = sortState.active;
    this.matSort.direction = sortState.direction;
    this.matSort.sortChange.emit(sortState);
  }

  addemploye(){
    this.router.navigate(['/layout/create-employe'])
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('employee-list-data');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Employee-List.pdf');
    });
  }

  exportexcel(): void {
    let element = document.getElementById('employee-list-data');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    ws['!cols'] = [];
    ws['!cols'][6] = { hidden: true };
    XLSX.writeFile(wb, this.fileName);

  }
  edit(element: any){

  }

  view(){
      this.router.navigate(['/layout/employe-detail'])
  }
  openDialog(): void {
      const dialogRef = this.dialog.open(Deletedialogue, {
        width: '300px',
        height:'250px',
      });
  }

}
export interface PeriodicElement {
  FirstName: string;
  phoneno: number;
  Employeeid: number;
  LastName: string;
  email: string;
  employertype: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { phoneno: 98887877888, FirstName: 'Arun', Employeeid: 133, LastName: 'G', email: 'arun@gmail.com', employertype: 'Trainee' },
  { phoneno: 89546566565, FirstName: 'ZDES', Employeeid: 124, LastName: 'F', email: 'arun@gmail.com', employertype: 'Trainee' },
  { phoneno: 23623628378, FirstName: 'Ram', Employeeid: 231, LastName: 'D', email: 'arun@gmail.com', employertype: 'Relived' },
  { phoneno: 23782887988, FirstName: 'Nanda', Employeeid: 122, LastName: 'B', email: 'arun@gmail.com', employertype: 'permanent' },
  { phoneno: 57837847838, FirstName: 'Mani', Employeeid: 811, LastName: 'B', email: 'arun@gmail.com', employertype: 'Internship' },
  { phoneno: 62988575589, FirstName: 'Anbu', Employeeid: 107, LastName: 'J', email: 'arun@gmail.com', employertype: 'permanent' },
  { phoneno: 74938753988, FirstName: 'Hema', Employeeid: 867, LastName: 'N', email: 'arun@gmail.com', employertype: 'Trainee' },
  { phoneno: 88346388477, FirstName: 'Raju', Employeeid: 994, LastName: 'O', email: 'arun@gmail.com', employertype: 'Trainee' },
  { phoneno: 97863784848, FirstName: 'Banu', Employeeid: 984, LastName: 'F', email: 'arun@gmail.com', employertype: 'Internship' },
  { phoneno: 10874764474, FirstName: 'Kholi', Employeeid: 797, LastName: 'N', email: 'arun@gmail.com', employertype: 'Probation' },
];
@Component({
  selector: 'deletedialogue',
  templateUrl: 'deletedialogue.html',
  styleUrls: ['./employe-list.component.scss']
})
export class Deletedialogue implements OnInit{
  
  constructor(
    public dialogRef: MatDialogRef<Document>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}