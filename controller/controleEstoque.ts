import serviceEstoque from "../service/serviceEstoque";
import { Data } from "../model/data.interface";

export async function adicionarItem(data : Data){
    try{
        await serviceEstoque.criar(data);
    }catch(error){
        console.log(error);
    }



}