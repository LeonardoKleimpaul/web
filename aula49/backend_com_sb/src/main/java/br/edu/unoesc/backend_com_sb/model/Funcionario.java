package br.edu.unoesc.backend_com_sb.model;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Funcionario {
	private Integer id;
	private String nome;
	private Integer dependentes;
	private BigDecimal salario;
	
	public Funcionario(Integer id, String nome, Integer dependentes, BigDecimal salario) {
		super();
		this.id = id;
		this.nome = nome;
		this.dependentes = dependentes;
		this.salario = salario;
	}
	

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Integer getDependentes() {
		return dependentes;
	}
	public void setDependentes(Integer dependentes) {
		this.dependentes = dependentes;
	}
	public BigDecimal getSalario() {
		return salario;
	}
	public void setSalario(BigDecimal salario) {
		this.salario = salario;
	}
	
	

}
