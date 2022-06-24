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
  listOfData: any[] = [];

  lineItemForm:any = this.fb.group({
    lineItemFormArray: this.fb.array([])
  })


  get itemArr() {
    return this.lineItemForm.controls['itemArr'] as FormArray;
  }

  onDateChange(receivedDate:Date){
    console.log(receivedDate)
  }

  submitForm(){

  }


  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {
    if(this.i < 10){
      this.listOfData = [
        ...this.listOfData,
        {
          id: this.i,
          Description: ``,
          Quantity: '',
          UnitPrice: ``,
          Discount: ``,
          Account:``,
          TaxRateId:``,
          TotalAmount:``
        }
      ];
      this.i++;
    }
    else {
      this.message.create('error', `You cannot add more than 10 rows`);
    }


  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter((d:any) => d.id !== id);
  }

  cancel(){

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
