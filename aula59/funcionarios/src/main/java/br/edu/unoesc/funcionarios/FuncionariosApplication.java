package br.edu.unoesc.funcionarios;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.dao.EmptyResultDataAccessException;

import br.edu.unoesc.funcionarios.model.Funcionario;
import br.edu.unoesc.funcionarios.service.FuncionarioService;

@SpringBootApplication
public class FuncionariosApplication {
//	@Value("${mensagem}")
//	private String mensagem;
//
//	@Value("${ambiente}")
//	private String ambiente;

	public static void main(String[] args) {
		SpringApplication.run(FuncionariosApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(FuncionarioService servico) {
		return args -> {
			//System.out.println(mensagem + " " + ambiente);

			servico.popularTabelaInicial();
			
			
			
			 //Exemplo de tratamento de exceções
			try {
				//System.out.println(10 / 0);
				servico.excluir(20L);			
			} catch (EmptyResultDataAccessException e) {
				System.out.println("\n>>> Erro! Registro não encontrado! <<<\n");
			} catch (RuntimeException e) {
				System.out.println("\n>>> Erro de execução! <<<\n" + e.getMessage());
			}
			
			// Exemplo de utilização da classe Optional
			Optional<Funcionario> p = servico.porId(20L);
			if (p.isEmpty()) {
				System.out.println("\n>>> Registro não encontrado! <<<\n");
			} else {
				System.out.println(p);				
				System.out.println(p.get());				
				System.out.println(p.get().getNome());				
			}
			
			Funcionario a = servico.buscarPorId(50L);
			a.setNome("Carlos");
			a.setSalario(new BigDecimal("100"));
			a.setNum_dep(5);
			
			if (a.getId() == null) {
				servico.incluir(a);
			} else {
				servico.alterar(a.getId(), a);
			}
			
			// Recupera todos os registros
			System.out.println(servico.listar());
			
			// Exemplos dos métodos de busca
			for (var Funcionario: servico.buscarPorNome("Leonardo")) {
				System.out.println(Funcionario);
			}
			
//			for (var Funcionario: servico.buscarPorQtdPaginas(10)) {
//				System.out.println(Funcionario);
//			}
			
			for (var Funcionario: servico.buscarPorNome("busca")) {
				System.out.println(Funcionario);
			}
			
			

		};

	}
}
