import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrl: './cad-produto.component.scss'
})
export class CadProdutoComponent {

  //Construtor
  constructor(
    private snackbar:MatSnackBar,
    private produtoService:ProdutoService


  ) {
this.buscarProduto()


  }


  //Inicializa o formulário
  formulario: FormGroup = new FormGroup({
    id: new FormControl(null),
    descricao: new FormControl('', Validators.required),
    unid_medida: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
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
      //Irá inserir no banco de dados um usuário
      console.log(info)
      this.produtoService.addProduto(info).subscribe({
        next: (resposta) => {
          console.log(resposta);
          this.snackbar.open(
            "Tudo certo, produto adicionado!",
            "OK",
            {
              verticalPosition: 'top',
              horizontalPosition: 'end',
              duration:3000
            }
          )
          this.onCancelar()

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
buscarProduto(){
  this.produtoService.getProduto().subscribe({
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
