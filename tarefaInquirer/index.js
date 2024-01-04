import chalk from "chalk"
import inquirer from "inquirer"
import fs from 'fs'

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual foi sua primeira nota?'
    },
    {
        name: 'p2',
        message: 'Qual foi sua segunda nota?'
    },
    {
        name: 'p3',
        message: 'Qual foi sua terceira nota?'
    },
    {
        name: 'p4',
        message: 'Qual foi sua quarta nota?'
    }
])

// é uma promise, então recebo se deu certo ou se deu errado

.then((resposta)=> {
    let nota1 = resposta.p1
    let nota2 = resposta.p2
    let nota3 = resposta.p3
    let nota4 = resposta.p4

    let media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4

    if( media  >= 6) {
        console.log(chalk.green('Você foi aprovado'))
        console.log(chalk.green(media))
        fs.writeFileSync('aprovados.txt', media.toString() )
    }else if (media = 5) {
        console.log(chalk.yellow('Você está de recuperação'))
        console.log(chalk.yellow(media))
        fs.writeFileSync('recuperacao.txt', media.toString() )
    }else if (media < 5) {
        console.log(chalk.red("Você foi reprovado, tente fazer a prova novamente."))
        console.log(chalk.red(media))
        fs.writeFileSync('reprovados.txt', media.toString() )
    }

})

.catch((error)=> {
    console.log(error)
})