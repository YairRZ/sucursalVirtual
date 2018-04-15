import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Santander Black Unlimited",
        "profilePic": "assets/img/speakers/1.jpg",
        "about": "Programa de Recompensas: 2 puntos por dólar gastadoBono de Bienvenida por 20,000 puntos 4 niveles de blindaje"
      },
      {
        "name": "Santander Fiesta Rewards Platino",
        "profilePic": "assets/img/speakers/2.jpg",
        "about": "Nivel de socio Fiesta Rewards Platino. Beneficios por Bienvenida, Aniversario y Consumo. Acumulación de Puntos Fiesta Rewards. Priority Pass."
      },
      {
        "name": "Santander Fiesta Rewards Oro",
        "profilePic": "assets/img/speakers/3.jpg",
        "about": "Nivel de socio Fiesta Rewards Oro. Beneficios por Bienvenida, Aniversario y Consumo. Acumulación de Puntos Fiesta Rewards. Tarjetas adicionales sin costo (por promoción)"
      },
      {
        "name": "Santander American Express",
        "profilePic": "assets/img/speakers/4.jpg",
        "about": "Acumulación de Puntos Recompensas por giro de comercio. Bono extra de triples puntos en compras a Meses sin Intereses. Tarjetas adicionales sin costo (por promoción)"
      },
      {
        "name": "Santander Light",
        "profilePic": "assets/img/speakers/5.jpg",
        "about": "Intereses bajos. Tarjetas adicionales sin costo (por promoción)"
      },
       {
        "name": "Santander Free",
        "profilePic": "assets/img/speakers/6.jpg",
        "about": "Sin cuota anual. Sin costo un plan de beneficios a elección: Recompensas Básico, Plan Viajero o Plan Seguridad."
      },
      {
        "name": "Santander Zero",
        "profilePic": "assets/img/speakers/7.jpg",
        "about": "Sin cuota anual. Sin comprobantes de ingresos para estudiantes menores de 25 años. Programa de Recompensas Básico."
      },
      {
        "name": "Santander Aeroméxico Infinite",
        "profilePic": "assets/img/speakers/8.jpg",
        "about": "Accesos ilimitados a Salón Premier, ascensos a Cabina Premier* y Priority Pass. Documentación y abordaje SkyPriority."
      },
      {
        "name": "Santander Aeroméxico Platinum",
        "profilePic": "assets/img/speakers/9.jpg",
        "about": "Bonos de bienvenida y de gasto anual. Acumulación de Puntos Premier en tus compras.."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
