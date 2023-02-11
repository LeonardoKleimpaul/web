package br.edu.unoesc.exemplo_H2;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Optional;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import br.edu.unoesc.exemplo_H2.model.Aluno;
import br.edu.unoesc.exemplo_H2.repository.AlunoRepository;

@SpringBootApplication
public class ExemploH2Application {

	public static void main(String[] args) {
		SpringApplication.run(ExemploH2Application.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(AlunoRepository repositorio) {
		return args -> {
 			Aluno l = new Aluno(null, "Pedro", new BigDecimal("3213"), new Date("05/05/2005"));
			l = repositorio.save(l);
			
			repositorio.save(new Aluno(null, "Bruna", new BigDecimal("1200"), new Date("06/06/2006")));
			
//			Optional<Aluno> p = repositorio.findById(2L);
//			if (p.isEmpty()) {
//				System.out.println("Registro não encontrado!");
//			} else {
//				System.out.println(p.get());				
//			}
		};
	}
}

