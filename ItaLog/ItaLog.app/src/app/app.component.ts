import { Component } from '@angular/core';
import { PoToolbarAction, PoToolbarProfile, PoMenuItem } from '@portinari/portinari-ui/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public profile: PoToolbarProfile = {
    avatar: '',
    subtitle: '',
    title: ''
  };
  public profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'Meu Perfil', action: item => alert("Configuração") },
    { icon: 'po-icon-settings', label: 'Configurações', action: item => alert("Configurações") },
    { icon: 'po-icon-exit', label: 'Sair', type: 'danger', separator: true, action: item => alert("Saindo") }
  ];
  notificationActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-portinari', label: 'PO news, stay tuned!', type: 'danger',
      action: item => alert("onClickNotification") },
    { icon: 'po-icon-message', label: 'New message', type: 'danger',
      action: item => alert("openDialog") },
  ];

  public menus: Array<PoMenuItem> = [
    { label: 'Início', link: '/', icon: 'po-icon-chart-area', shortLabel: "Início" },
    { label: 'Logs', link: '/controle-erros', icon: 'po-icon-search', shortLabel: "Logs" },
    { label: 'Sobre', action: alert.bind("Sobre"), icon: 'po-icon-user', shortLabel: "Sobre" }
  ];

  public getNotificationNumber() {
    return 2;
  }

}
