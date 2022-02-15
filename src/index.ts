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

	class Aluno1 {
		nome: string;
		idade: number;
		nota: number;

		constructor(n: string, i:number, nt:number) {
			this.nome = n;
			this.idade = i;
			this.nota = nt;
		}
	}

	const nome = String (await question('Qual o nome do aluno? '));
	console.log('Nome do aluno: ', nome)

	const idade = Number (await question('Qual a idade do aluno? '));
	console.log('Idade do aluno: ', idade);

	const nota = Number (await question('Qual a nota do aluno? ' ));
	console.log('Nota do aluno: ', nota);
	
	let Alunos = new Aluno1 (nome, idade, nota);
	console.log('Primeiro aluno: ', Alunos);

	class Aluno2 {
		nome2: string;
		idade2: number;
		nota2: number;

		constructor(n: string, i:number, nt:number) {
			this.nome2 = n;
			this.idade2 = i;
			this.nota2 = nt;
		}
	}

	const nome2 = String (await question('Qual o nome do aluno? '));
	console.log('Nome do aluno: ', nome2)

	const idade2 = Number (await question('Qual a idade do aluno? '));
	console.log('Idade do aluno: ', idade2);

	const nota2 = Number (await question('Qual a nota do aluno? ' ));
	console.log('Nota do aluno: ', nota2);

	let Alunos2 = new Aluno2 (nome2, idade2, nota2);
	console.log('Segundo aluno: ', Alunos2);


	class Aluno3 {
		nome3: string;
		idade3: number;
		nota3: number;

		constructor(n: string, i:number, nt:number) {
			this.nome3 = n;
			this.idade3 = i;
			this.nota3 = nt;
		}
	}

	const nome3 = String (await question('Qual o nome do aluno? '));
	console.log('Nome do aluno: ', nome3)

	const idade3 = Number (await question('Qual a idade do aluno? '));
	console.log('Idade do aluno: ', idade3);

	const nota3 = Number (await question('Qual a nota do aluno? ' ));
	console.log('Nota do aluno: ', nota3);

	let Alunos3 = new Aluno3 (nome3, idade3, nota3);
	console.log('Terceiro aluno: ', Alunos3);

	const ArrayAlunos = [nome, nome2, nome3];
	console.log('Esses são os alunos: ', ArrayAlunos);

	const SomaDasNotas = [nota + nota2 + nota3];
	console.log('A soma total das notas de todos os alunos é: ', SomaDasNotas);
});