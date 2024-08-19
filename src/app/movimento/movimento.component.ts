import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovimentoService } from '../services/movimento.service';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html',
  styleUrl: './movimento.component.scss'
})
export class MovimentoComponent {

       //Construtor
       constructor(
        private snackbar:MatSnackBar,
        private MovimentoService:MovimentoService
  
  
  
    
      ) {
    this.buscarMovimento()
    
      }
    
    
      //Inicializa o formulário
      formulario: FormGroup = new FormGroup({
        id: new FormControl(null),
        produto: new FormControl('', Validators.required),
        tipo: new FormControl('', Validators.required),
        quantidade: new FormControl('', Validators.required),
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
          this.MovimentoService.addMovimento(info).subscribe({
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
    
    buscarMovimento(){
      this.MovimentoService.getMovimento().subscribe({
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
