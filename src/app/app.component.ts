import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ExportAsModule} from 'ngx-export-as';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Persona} from './models/persona';
import {ExportNgxService} from './services/export-ngx.service';
import {ExcelService} from './services/excel.service';
import {PersonaService} from './services/persona.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    ExportAsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [
    PersonaService,
    ExportNgxService,
    ExcelService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'export-example-angular';

  columnas: string[] = ['id', 'nombre', 'edad', 'email'];
  dataSource = new MatTableDataSource<Persona>()

  @ViewChild(MatPaginator) paginator !: MatPaginator

  constructor(
    private personaService: PersonaService,
    private exportServiceNgx: ExportNgxService,
    private excelService: ExcelService<Persona>) {
    this.dataSource.data = this.personaService.generarPersonas();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  exportarNgx(tipo: 'pdf' | 'xls' | 'png'): void {
    this.exportServiceNgx.exportar(tipo, 'tablaExportar', 'tabla-personas');
  }

  exportarExcelXlsx(): void {
    this.excelService.exportarExcel(this.dataSource.filteredData, 'personas')
  }

}
