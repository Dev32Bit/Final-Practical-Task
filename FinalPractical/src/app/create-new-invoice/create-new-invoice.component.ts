import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-create-new-invoice',
  templateUrl: './create-new-invoice.component.html',
  styleUrls: ['./create-new-invoice.component.css']
})
export class CreateNewInvoiceComponent implements OnInit {

  tableData!:FormGroup;
  invoiceForm!:FormGroup;
  date = null;
  i = 0;
  editId: string | null = null;
  listOfLineItemData: any[] = [];

  onDateChange(receivedDate:Date){
    console.log(receivedDate);
  }

  //For submitting form
  submitForm(){

  }

//To start editing of table cell
  startEdit(id: string): void {
    this.editId = id;
  }

  //To stop editing of table cell
  stopEdit(): void {
    this.editId = null;
  }

  //For adding table row
  addRow(): void {
    if(this.i < 10){
      this.listOfLineItemData = [
        ...this.listOfLineItemData,
        {
          id: this.i,
          Description: `saddsa`,
          Quantity: '25',
          UnitPrice: `10`,
          Discount: `10`,
          Account:`Sales`,
          TaxRateId:`200-Account`,
          TotalAmount:`500`
        }
      ];
      this.i++;
    }
    else {
      this.message.create('error', `You cannot add more than 10 rows`);
    }


  }


  //For deleting table row
  deleteRow(id: string): void {
    this.listOfLineItemData = this.listOfLineItemData.filter((d:any) => d.id !== id);
  }

  //Cancel button
  cancel(){
    alert("Cancel Clicked")
  }

  constructor(private fb: FormBuilder, private message: NzMessageService) { }

  ngOnInit(): void {
    this.addRow();
    let randomInvoiceNumber = Math.floor(1000 + (Math.random() * (10000 - 1000 + 1)));
    // console.log(Math.floor(1000 + (Math.random() * (10000 - 1000 + 1))))
    this.invoiceForm = this.fb.group({
      email: [null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$'
          )
        ]
       ],
      createdDate: [null, Validators.required],
      dueDate: [null, Validators.required],
      invoiceNumber: ['#INV-' + randomInvoiceNumber, Validators.required],
      reference: [null],
      currency: [null, Validators.required]
    });
  }

}
