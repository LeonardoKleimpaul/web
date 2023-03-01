create table funcionario (
	id SERIAL PRIMARY KEY,
	nome varchar(100),
	num_dep integer,
	salaraio numeric(10,2),
	nascimento date
);