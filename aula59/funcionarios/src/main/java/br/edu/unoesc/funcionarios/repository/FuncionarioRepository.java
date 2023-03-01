package br.edu.unoesc.funcionarios.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.edu.unoesc.funcionarios.model.Funcionario;

@Repository
	public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {
		public List<Funcionario> findByNomeContainingIgnoreCase(String nome);
		
		@Query("Select l from Funcionario l where l.salario >= :salario")
		public List<Funcionario> porQtdSalario(@Param("salario") Integer salario);
		
		@Query("Select l from Funcionario l where num_dep >= 1")
		public List<Funcionario> possuiDependentes(String filtro);
	}

