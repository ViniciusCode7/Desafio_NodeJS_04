/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { notEqual } from "assert";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS

	const readline = require('readline');
	const r1 = readline.createInterface({
		input: process.stdin,
		output: process.stdout

	});
		// R01,
	const question = (str: string) => new Promise((resolve) => r1.question(str, resolve));

	class Aluno {
		nome: string;
		idade: number;
		nota: number;

		constructor(n: string, i:number, nt:number) {
			this.nome = n;
			this.idade = i;
			this.nota = nt;
		}
	}

	let Alunos: Array<Aluno> = [];

	for (let i = 0; i < 3; i++) {

	const nome = String (await question('Qual o nome do aluno? '))

	const idade = Number (await question('Qual a idade do aluno? '));

	const nota = Number (await question('Qual a nota do aluno? ' ));


	let aluno = new Aluno(nome, idade, nota)
	Alunos.push(aluno);}

	const notas = Alunos.map(x => x.nota);

	const total = notas.reduce((acc, nota) => acc + nota);
	console.log('A soma total das notas dos alunos é: ', total);
	
});
