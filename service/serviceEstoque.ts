import readCSV from '../model/readCSV'
import {Data} from '../model/data.interface'
import writeCSV from '../model/writeCSV'

class estoqueService {

    async criar(data: Data){

        if(data.id < 0){
                if (data.quantidade < 0){
                    throw new Error("Id e quantidade não podem ser negativos");
                }
            
        }
        writeCSV('C:\\Users\\lucao\\OneDrive\\Área de Trabalho\\UFMG\\iJunior\\Trainee\\Semana 2\\Atividades-Semana2\\model\\estoque.csv', [data]);
    }

}

export default new estoqueService();

