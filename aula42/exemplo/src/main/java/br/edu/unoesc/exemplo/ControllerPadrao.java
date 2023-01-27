package br.edu.unoesc.exemplo;

import java.math.BigDecimal;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerPadrao {
	@RequestMapping("/")
	//@ResponseBody
	String home(Model modelo) {
		modelo.addAttribute("mensagem", "Info do modelo");
		
		Produto p = new Produto("Mesa", 10, new BigDecimal("3.33"));
		modelo.addAttribute("produto", p);
		
		return "index";
		
	}
}
