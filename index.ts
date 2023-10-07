import { adicionarItem, removerItem, listarItens, valorTotal, pesoTotal, mediaPesos, mediaValores, qtdeItens, qtdeProdutos } from './controller/controleEstoque';
import { Data } from './model/data.interface';


import readline from 'readline'; //usando readline para ler do teclado e retornar para o terminal

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



function menu(){
    console.log("Escolha uma opção:");
    console.log("1. Adicionar Itens");
    console.log("2. Remover Item");
    console.log("3. Listar Itens");
    console.log("4. Calcular Valor Total");
    console.log("5. Calcular Peso Total");
    console.log("6. Calcular Media Valores");
    console.log("7. Calcular Media Pesos");
    console.log("8. Calcular Quantidade de Itens");
    console.log("9. Calcular Quantidade de Produtos");
    console.log("0. Sair");
}

async function main(){
    while (true) {
        menu();

        const option = await askQuestion("Opção: "); // esperando a opção do usuário

        switch (option) {
            case '1':
                const data: Data = {
                    id: 0,
                    nome: "",
                    valor: 0,
                    peso: 0,
                    quantidade: 0,
                };

                data.id = parseInt(await askQuestion("ID do produto: "));
                data.nome= await askQuestion("Título do produto: ");
                data.valor= parseFloat(await askQuestion("Valor do produto: "));
                data.peso= parseFloat(await askQuestion("Peso do produto: "));
                data.quantidade= parseFloat(await askQuestion("Quantidade do produto: "));

                await adicionarItem(data);                
                break;
            case '2':
                const id = parseInt(await askQuestion("ID do produto: "));
                await removerItem(id);
                break;
            case '3':
                await listarItens();
                break;
            case '4': 
                await valorTotal();
                break;
            case '5':
                await pesoTotal();
                break;
            case '6':
                await mediaValores();
                break;
            case '7':
                await mediaPesos();
                break;
            case '8':
                await qtdeItens();
                break;
            case '9':
                await qtdeProdutos();
                break;

        }
    }
}

function askQuestion(question: string): Promise<string> {             // perguntando para o usuario através do readline - criando uma função para facilitar
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}




    


