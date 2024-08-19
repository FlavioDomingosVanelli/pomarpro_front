import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-cad-material',
  templateUrl: './cad-material.component.html',
  styleUrl: './cad-material.component.scss'
})
export class CadMaterialComponent {

   //Construtor
   constructor(
    private snackbar:MatSnackBar,
    private materialService:MaterialService

  ) {
this.buscarMaterial()

  }


  //Inicializa o formulário
  formulario: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
    fornecedor: new FormControl('', Validators.required),
    tipo:new FormControl('',Validators.required)
  })


  //Métodos dos controles do formulário
  onIncluir() {
    this.formulario.reset();
    this.formulario.enable();


  }

  onSalvar() {
    //Guardfa as informações em uma variável para melhorar o acesso
    let info = this.formulario.value;
    //verifica se está inserindo ou alterando, com base no valor
    //do ID (se for null, está inserindo, senão está alterando)
    if (info.id == null) {
      //Irá inserir no banco de dados um material
      console.log(info)
      this.materialService.addMaterial(info).subscribe({
        next: (resposta) => {
          console.log(resposta);
          this.snackbar.open(
            "Tudo certo, material adicionado!",
            "OK",
            {
              verticalPosition: 'top',
              horizontalPosition: 'end',
              duration:3000
            }
          )

        },
        error: (erro) => {
          console.log(erro);
          this.snackbar.open(
            "Opa, parece que algo de errado aconteceu",
            "OK",
            {
              verticalPosition: 'top',
              horizontalPosition: 'end',
              duration:3000
            }
          )
        }
      })
    } else {
      //Irá alterar o usuário no banco de dados

    }



  }
  onCancelar() {
    this.formulario.reset();
    this.formulario.disable();
  }

  // Função para buscar as informações e usuários
relatorio:any[] = [];

buscarMaterial(){
  this.materialService.getMaterial().subscribe({
    next:(resposta)=>{
      console.log(resposta);
      this.relatorio = resposta.body;
    },
    error:(erro)=>{
      console.log(erro);
    }
  })
}

}

