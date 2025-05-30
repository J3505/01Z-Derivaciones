import { Component, OnInit } from '@angular/core';
import { Customer, Representative } from '../../core/model/customer';
import { CustomerService } from '../../core/services/customer.service';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-tablas-derivaciones',
  imports: [
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    SelectModule,
    CommonModule,
    FormsModule,
    MultiSelectModule,

    FormsModule,
    DropdownModule,

  ],
  templateUrl: './tablas-derivaciones.component.html',
  styleUrl: './tablas-derivaciones.component.scss',
})
export class TablasDerivacionesComponent implements OnInit {
  @ViewChild('dt2') dt2!: Table;

  customers!: Customer[];

  value: any[] = [];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  representativeFilter: any[] = [];
  statusFilter: string | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
      this.loading = false;
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }

  clear(table: Table) {
    table.clear();
  }

  onGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dt2.filterGlobal(input.value, 'contains');
  }

  getSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | undefined {
  switch (status) {
    case 'qualified':
      return 'success';
    case 'unqualified':
      return 'danger';
    case 'new':
      return 'info';
    case 'negotiation':
      return 'warn';
    case 'renewal':
      return 'secondary';
    default:
      return undefined; // antes retornabas null aquí, lo cual causaba el error
  }
}

}
