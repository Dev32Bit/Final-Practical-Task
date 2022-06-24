import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-screen',
  templateUrl: './listing-screen.component.html',
  styleUrls: ['./listing-screen.component.css']
})
export class ListingScreenComponent implements OnInit {

  // result:any = [
  //   {first: 'All', head: [{head: 'All'}, {head: 'All'}, {head: 'All'}, {head: 'All'}, {head: 'All'}, {head: 'All'}, {head: 'All'}, {head: 'All'}],  body: [{head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'bodi1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}]},
  //   {first: 'Draft' , head: [{head: 'Draft'}, {head: 'Draft'}, {head: 'Draft'}, {head: 'Draft'}, {head: 'Draft'}, {head: 'Draft'}, {head: 'Draft'}, {head: 'Draft'}], body: [{head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'bodi1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}]},
  //   {first: 'Awaiting Payment', head: [{head: 'Awaiting Payment'}, {head: 'Awaiting Payment'}, {head: 'Awaiting Payment'}, {head: 'Awaiting Payment'}, {head: 'Awaiting Payment'}, {head: 'Awaiting Payment'}, {head: 'Awaiting Payment'}, {head: 'Awaiting Payment'}], body: [{head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'bodi1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}]},
  //   {first: 'Paid', head: [{head: 'Paid'}, {head: 'Paid'}, {head: 'Paid'}, {head: 'Paid'}, {head: 'Paid'}, {head: 'Paid'}, {head: 'Paid'}, {head: 'Paid'}], body: [{head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'bodi1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}, {head: 'body1'}]}
  //   ];
  listOfCurrentPageData: readonly any[] = [];
  setOfCheckedId = new Set<number>();
  checked = false;
  disableUtilityButtons: boolean = true;
  totalCheckedItems: number = 0;
  currentTabIndex = NaN;
  indeterminate = false;
  dateRange:any = null;
  tabs: any =
  [
    {
      tabName: 'All',
      data:[
        {
        key: '1',
        number: 'John Brown',
        ref: 32,
        to: 'New York No. 1 Lake Park',
        date:'22-06-22',
        dueDate: '25-06-22',
        due:120
        },
        {
          key: '2',
          number: 'John Brown',
          ref: 32,
          to: 'New York No. 1 Lake Park',
          date:'22-06-22',
          dueDate: '25-06-22',
          due:120
        },
        {
          key: '3',
          number: 'John Brown',
          ref: 32,
          to: 'New York No. 1 Lake Park',
          date:'22-06-22',
          dueDate: '25-06-22',
          due:120
        },
        {
          key: '4',
          number: 'John Brown',
          ref: 32,
          to: 'New York No. 1 Lake Park',
          date:'22-06-22',
          dueDate: '25-06-22',
          due:120
        }
      ]
    },
    {
      tabName: 'Draft',
      data:
      [
        {
          key: '2',
          number: 'Prince',
          ref: 32,
          to: 'New York No. 1 Lake Park',
          date:'22-06-22',
          dueDate: '25-06-22',
          due:120
      },
      {
        key: '4',
        number: 'John Brown',
        ref: 32,
        to: 'New York No. 1 Lake Park',
        date:'22-06-22',
        dueDate: '25-06-22',
        due:120
      }
    ]
    },
    {
      tabName: 'Awaiting Payment',
      data:[
        {
          key: '3',
          number: 'Dev',
          ref: 32,
          to: 'New York No. 1 Lake Park',
          date:'22-06-22',
          dueDate: '25-06-22',
          due:120
      }]
    },
    {
      tabName: 'Paid',
      data:
      [
        {
          key: '4',
          number: 'Rohan',
          ref: 32,
          to: 'New York No. 1 Lake Park',
          date:'22-06-22',
          dueDate: '25-06-22',
          due:120
      },
      {
        key: '3',
        number: 'John Brown',
        ref: 32,
        to: 'New York No. 1 Lake Park',
        date:'22-06-22',
        dueDate: '25-06-22',
        due:120
      },
      {
        key: '4',
        number: 'John Brown',
        ref: 32,
        to: 'New York No. 1 Lake Park',
        date:'22-06-22',
        dueDate: '25-06-22',
        due:120
      }
    ]
    },
  ]


  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
      if(this.setOfCheckedId.size <= 0){
        this.disableUtilityButtons = true;
      }
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.disableUtilityButtons = false;
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.disableUtilityButtons = false;
    this.listOfCurrentPageData.forEach((item:any) => this.updateCheckedSet(item.data[0].key, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly any[]): void {
    this.setOfCheckedId.clear();
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item:any) => this.setOfCheckedId.has(item.data[0].key));
    this.indeterminate = this.listOfCurrentPageData.some((item:any) => this.setOfCheckedId.has(item.data[0].key)) && !this.checked;
  }

  onSelectedDateRange(range:any){
    console.log(range)
  }

  //For getting tab index
  getTabIndex(value:any){
    this.currentTabIndex = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
