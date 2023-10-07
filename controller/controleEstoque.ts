import serviceEstoque from "../service/serviceEstoque";
import { Data } from "../model/data.interface";

export async function adicionarItem(data : Data){
    try{
        await serviceEstoque.criar(data);
        console.log("Item adicionado com sucesso!");
    }catch(error){
        console.log("Erro ao adicionar item.",error);
    }
}

export async function removerItem(id : number){
    try{
        await serviceEstoque.removerItem(id);
        console.log("Item removido com sucesso");
    }catch(error){
        console.log("Erro ao remover item.",error)
    }
}


export async function listarItens(){
    try{
        const itens = await serviceEstoque.listarItens();
        console.log("Itens no estoque: ", itens);
    }catch(error){
        console.log("Erro ao listar itens: ",error)
    }
}

export async function valorTotal(){
    try{
        const total = await serviceEstoque.valorTotal();
        console.log("Valor total do estoque: ", total);
    }catch(error){
        console.log("Erro ao calcular o valor total do estoque: ",error)
    }
}

export async function pesoTotal(){
    try{
        const total = await serviceEstoque.valorTotal();
        console.log("Peso total do estoque: ", total);
    }catch(error){
        console.log("Erro ao calcular o peso total do estoque: ",error)
    }
}

export async function mediaValores(){
    try{
        const media = await serviceEstoque.mediaValores();
        console.log("Media dos valores do estoque: ", media);
    }catch(error){
        console.log("Erro ao calcular a media dos valores do estoque: ",error)
    }
}


export async function mediaPesos(){
    try{
        const media = await serviceEstoque.mediaPesos();
        console.log("Media dos pesos do estoque: ", media);
    }catch(error){
        console.log("Erro ao calcular a media dos pesos do estoque: ",error)
    }
}


export async function qtdeItens(){
    try{
        const qtde_itens = await serviceEstoque.qtdeItens();
        console.log("Quantidade total de itens no estoque ", qtde_itens);
    }catch(error){
        console.log("Erro ao calcular a quantidade total de itens no estoque: ",error)
    }
}

export async function qtdeProdutos(){
    try{
        const qtde_produtos = await serviceEstoque.qtdeProdutos();
        console.log("Quantidade total de produtos no estoque ", qtde_produtos);
    }catch(error){
        console.log("Erro ao calcular a quantidade total de produtos no estoque: ",error)
    }
}
