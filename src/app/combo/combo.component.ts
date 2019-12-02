import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})

export class ComboComponent implements OnInit {

  public bankCtrl: FormControl = new FormControl();
  public bankFilterCtrl: FormControl = new FormControl();
    
  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;
  protected _onDestroy = new Subject<void>();
  public filtered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @Input() data: any[];
  @Input() displayMember: string;
  @Input() valueMember: string;

  currentData: any[]; 

  constructor() { }

  ngOnInit() {

    this.currentData = this.data;
    this.filtered.next(this.currentData.slice());

    this.bankFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterBanks();
    });

  }


 ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  protected filterBanks() {
    if (!this.currentData) {
      return;
    }

    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filtered.next(this.currentData.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    this.filtered.next(
      this.currentData.filter(bank => bank[this.displayMember].toLowerCase().indexOf(search) > -1)
    );
  }


  activeText() {
    $(document).off('focusin.modal');
  }

  getKey(obj)
  {
    return obj[this.valueMember];
  }

  getValue(obj)
  {
  return obj[this.displayMember];
  }

  change(event){
    console.log(event);
  }

}






