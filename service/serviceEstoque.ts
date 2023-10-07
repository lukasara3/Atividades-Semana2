import readCSV from '../model/readCSV'
import {Data} from '../model/data.interface'
import writeCSV from '../model/writeCSV'
import fs from 'fs'


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

        const items = await readCSV(filePath);
        const verificar = items.find(i => i.id == data.id);
        if(verificar){
            throw new Error("O ID já está sendo utilizado. Favor inserir novo ID.")
        }
        await writeCSV(filePath, [data]);





        writeCSV(filePath, [data]);
    }

}

export default new estoqueService();

