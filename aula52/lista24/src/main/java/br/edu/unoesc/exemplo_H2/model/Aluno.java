package br.edu.unoesc.exemplo_H2.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



//@Data
//@AllArgsConstructor
//@NoArgsConstructor
@Entity
public class Aluno implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String nome;
	BigDecimal salario;
	Date nascimento;
	
	public Aluno() {
		super();
	}

	public Aluno(Long id, String nome, BigDecimal salario, Date nascimento) {
		super();
		this.id = id;
		this.nome = nome;
		this.salario = salario;;
		this.nascimento = nascimento;
	}

	public Long getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = Long.valueOf(id);
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public BigDecimal getSalario() {
		return salario;
	}

	public void setSalario(BigDecimal salario) {
		this.salario = salario;
	}

	public Date getNascimento() {
		return nascimento;
	}

	public void setNascimento(Date nascimento) {
		this.nascimento = nascimento;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}