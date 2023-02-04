package br.edu.unoesc.exemplo.backend_SpringBoot.model;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;



@Data
@AllArgsConstructor
public class Produto {
	private Long id;
	private String descricao;
	private Integer quantidade;
	private BigDecimal valor;
}
