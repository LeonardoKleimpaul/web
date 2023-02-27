package br.edu.unoesc.funcionarios.service_impl;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.unoesc.funcionarios.DTO.FuncionarioDTO;
import br.edu.unoesc.funcionarios.model.Funcionario;
import br.edu.unoesc.funcionarios.repository.FuncionarioRepository;
import br.edu.unoesc.funcionarios.service.FuncionarioService;

@Service
public class FuncionarioServiceImpl implements FuncionarioService {

	@Autowired
	private FuncionarioRepository repositorio;

	@Override
	public void popularTabelaInicial() {
		repositorio.saveAll(List.of(
				new Funcionario(null, "Leonardo", 1, new BigDecimal("3000"), LocalDate.of(2002, 3, 20)),
				new Funcionario(null, "São João das Graças", 1, new BigDecimal("5000"), LocalDate.of(2001, 1, 25))));
	}

	@Override
	public Funcionario incluir(Funcionario funcionario) {
		funcionario.setId(null);
		return repositorio.save(funcionario);
	}

	@Override
	public Funcionario alterar(Long id, Funcionario funcionario) {
		var f = repositorio.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("Funcionario não encontrado! Id: ", id));

		// Atualiza os dados do banco com os dados vindos da requisição
		f.setNome(funcionario.getNome());
		f.setNum_dep(funcionario.getNum_dep());
		f.setSalario(funcionario.getSalario());
		f.setNascimento(funcionario.getNascimento());

		return repositorio.save(f);
	}

	@Override
	public void excluir(Long id) {
		if (repositorio.existsById(id)) {
			repositorio.deleteById(id);
		} else {
			throw new ObjectNotFoundException("Funcionario não encontrado! Id: ", id);
		}

	}

	@Override
	public List<Funcionario> listar() {
		List<Funcionario> funcionarios = new ArrayList<Funcionario>();
		
		// Recupera todos os registros da tabela
		Iterable<Funcionario> itens = repositorio.findAll();
		
		// Cria uma cópia dos dados na lista 'livros'
		itens.forEach(funcionarios::add);
		
		
		return funcionarios;
	}

	@Override
	public Page<FuncionarioDTO> listarPaginado(Pageable pagina) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Funcionario buscar(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Funcionario buscarPorId(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Funcionario> porId(long id) {
		// TODO Auto-generated method stub
		return Optional.empty();
	}

	@Override
	public List<Funcionario> buscarPorNome(String nome) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Funcionario> buscarPorFaixaSalarial(BigDecimal salarioMinimo, BigDecimal salarioMaximo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Funcionario> buscarPossuiDependentes(Integer numDependentes) {
		// TODO Auto-generated method stub
		return null;
	}

}
