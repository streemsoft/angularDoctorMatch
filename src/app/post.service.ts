import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class PostService {

  constructor() { }

  post(tabela:String, path:String, cliente_key:String, no_key:String, dt_alt:String, json:String){
    $.post("https://database..com.br/server.php",
                {
                    no: no_key,
                    banco: 'josuelima_backup',
                    cliente: cliente_key,
                    tabela: tabela,
                    data: dt_alt,
                    json: json,
                    path: path
                },
                function (status) {
                    console.log("Status: " + status);
                });
  }

}
