import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MachineGroupService } from '../services/machine-group.service';

@Component({
  selector: 'app-form-open',
  templateUrl: './form-open.component.html',
  styleUrls: ['./form-open.component.css'],
})
export class FormOpenComponent implements OnInit {
  machineForm: FormGroup;

  @Input() isDialogOpen?: boolean;
  @Output() close = new EventEmitter<any>();
  data: any;
  
  constructor(
    private _fb: FormBuilder,
    private _machineService: MachineGroupService
  ) {
    this.machineForm = this._fb.group({
      custom_id: '',
      name: '',
      hall_id: '',
      is_active: '',
      tr: '0',
      is_furnace: '',
      is_casting_machine: 'false',
      status_board_card_type: 'STANDARD_1',
      machine_board_type: 'STANDARD_1',
      production_plan_type: 'SETUP_1',
      confirmation_type: 'MANUAL',
      machine_state_type: 'MANUAL',
      has_operation_pool: 'false',
      lead_time_days: '3',
      is_imported_from_erp: 'false',
    });
  }

  ngOnInit(): void {
    this.machineForm.patchValue(this.data)
  }

  // for close button
  closeDialog() {
    this.close.emit();
  }

  //for submit button
  onFormSubmit() {
    if (this.machineForm.valid) {
      console.log(this.machineForm.value);
      this._machineService.addUser(this.machineForm.value).subscribe({
        next: (val: any) => {
          alert('User Added successfully');
          this.closeDialog();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
