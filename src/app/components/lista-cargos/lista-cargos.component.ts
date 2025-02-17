import { Config } from 'datatables.net';
import { DataTablesModule } from 'angular-datatables';
import { Component, inject, OnInit } from '@angular/core';
import { Cargo } from '../../models/cargo.model';
import { CargoService } from '../../services/cargo.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lista-cargos',
  standalone: true,
  imports: [DatePipe, DataTablesModule],
  templateUrl: './lista-cargos.component.html',
  styleUrl: './lista-cargos.component.css',
})
export class ListaCargosComponent implements OnInit {
  pageTitle: string = 'CARGOS';
  cargos: Cargo[] = [];

  dtoptions: Config = {};
  dttrigger: Subject<any> = new Subject<any>();

  cargoService = inject(CargoService);
  router = inject(Router);

  ngOnInit(): void {
    this.cargarCargos();
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      //  paging:false
      lengthChange: false,
      language: {
        searchPlaceholder: 'Text Customer',
      },
    };
  }

  cargarCargos(): void {
    this.cargoService.getCargos().subscribe({
      next: (resp) => {
        this.cargos = resp;
      },
      error: (err) => console.log(err),
      complete: () => {
        this.dttrigger.next(null);
      },
    });
  }
}
