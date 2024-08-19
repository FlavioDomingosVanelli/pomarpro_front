import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

     //Construtor
     constructor(
      private snackbar:MatSnackBar,
      private cadastroService:CadastroService



  
    ) {
  this.buscarCadastro()
  
    }
  
  
    //Inicializa o formulário
    formulario: FormGroup = new FormGroup({
      id: new FormControl(null),
      apelido: new FormControl('', Validators.required),
      num_linha: new FormControl('', Validators.required),
      num_coluna: new FormControl('', Validators.required),
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
        //Irá inserir no banco de dados um cadastro
        console.log(info)
        this.cadastroService.addCadastro(info).subscribe({
          next: (resposta) => {
            console.log(resposta);
            this.snackbar.open(
              "Tudo certo, cadastro adicionado!",
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
  
  buscarCadastro(){
    this.cadastroService.getCadastro().subscribe({
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
