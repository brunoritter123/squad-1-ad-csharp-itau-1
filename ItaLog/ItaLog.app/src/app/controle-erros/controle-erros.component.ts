import { Component, OnInit } from '@angular/core';
import { PoPageFilter, PoPageAction, PoTableColumn } from '@portinari/portinari-ui';
import { ControleErro } from './controleErro.model';

@Component({
  selector: 'app-controle-erros',
  templateUrl: './controle-erros.component.html',
  styleUrls: ['./controle-erros.component.css']
})
export class ControleErrosComponent implements OnInit {
  public readonly filterSettings: PoPageFilter = {
    action: 'filterAction',
    advancedAction: 'advancedFilterActionModal',
    ngModel: 'labelFilter',
    placeholder: 'Buscar'
  };

  readonly actions: Array<PoPageAction> = [
    { label: 'Arquivar', url: '/feriado/form' },
    { label: 'Apagar', type: 'danger', url: '/feriado/form' },
  ];

  readonly columns: Array<PoTableColumn> = [
    // columns of table here
    { property: 'nivel'    , label: 'Nível'     , width: '10%' },
    { property: 'log'      , label: 'Mensagem'  , width: '80%' },
    { property: 'evento'   , label: 'Eventos'   , width: '10%' },
  ];

  items: Array<ControleErro> = [];

  constructor( ) { }

  ngOnInit() {}

}
