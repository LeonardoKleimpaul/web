package br.edu.unoesc.funcionarios.service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.unoesc.funcionarios.DTO.FuncionarioDTO;
import br.edu.unoesc.funcionarios.model.Funcionario;


public interface FuncionarioService {
	void popularTabelaInicial();
	
	Funcionario incluir(Funcionario funcionario);
	Funcionario alterar(Long id, Funcionario funcionario);
	void excluir(Long id);
	
	List<Funcionario> listar();
	Page<FuncionarioDTO> listarPaginado(Pageable pagina);
	
	Funcionario buscar(long id); 
	Funcionario buscarPorId(Long id);
	Optional<Funcionario> porId(long id);
	
	List<Funcionario> buscarPorNome(String nome);
	List<Funcionario> buscarPorFaixaSalarial(BigDecimal salarioMinimo, BigDecimal salarioMaximo);
	List<Funcionario> buscarPossuiDependentes(String numDependentes);

}
