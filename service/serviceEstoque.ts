import readCSV from '../model/readCSV'
import {Data} from '../model/data.interface'
import writeCSV from '../model/writeCSV'
import fs, { read } from 'fs'


const filePath = 'C:\\Users\\lucao\\OneDrive\\Área de Trabalho\\UFMG\\iJunior\\Trainee\\Semana 2\\Atividades-Semana2\\model\\estoque.csv'

class estoqueService {

    async criar(data: Data){
        if(!data || data.id == null && data.valor == null){
            throw new Error("Dados inválidos")
        }
        if(isNaN(data.id) || data.id << 0){
            throw new Error("o ID não é um número válido")
        }

        // Hora de verificar se ID já está sendo usada
        // Criando uma variavel items e verificar para verificar os id's dos items já presentes no estoque
        // Usando função .find para fazer isso. Se existir o id, lançar erro, senao esperar a função de escrita no CSV.

        const itens = await readCSV(filePath);
        const verificar = itens.find(i => i.id == data.id);
        if(verificar){
            throw new Error("O ID já está sendo utilizado. Favor inserir novo ID.")
        }
        await writeCSV(filePath, [data]);
    }

    async removerItem(id: number){
        const itens = await readCSV(filePath);
        // Usar .findIndex para achar o item com o ID desejado, que será retornado. Se não for encontrado, -1 será retornado.
        const itemIndex = itens.findIndex((item) => item.id == id)

        if(itemIndex === -1){
            throw new Error("O ID desejado não foi encontrado no estoque"); // ou "o ID $(id) não foi encontrado"
        }

        //Remover produto usando .splice para alterar um array - voce vai remover o itemIndex uma vez

        itens.splice(itemIndex, 1);

        fs.writeFileSync(filePath, " "); // tirando tudo do arquivo CSV
        fs.appendFileSync(filePath, "ID,NOME,PESO,VALOR,QUANTIDADE"); // reescrevendo o escopo

        await writeCSV(filePath, itens); // reescrevendo o arquivo com a lista atualizada
    }

    async listarItens(){
        const lista = await readCSV(filePath);
        return lista;
    }

    async valorTotal(){
        const data = await this.listarItens();
        if(data.length === 0){
            return 0;
        }
        let total = 0; // usando let para poder alterar seu valor ao longo das iteraçoes da funçao

        for (const item of data){
            console.log(item.valor);
            if(!isNaN(item.valor)){              // verificando se o item.valor é um número
                total += +item.valor;
            }
        }
    }





}



export default new estoqueService();

