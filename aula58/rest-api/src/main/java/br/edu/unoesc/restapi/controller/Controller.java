package br.edu.unoesc.restapi.controller;

import java.util.logging.Logger;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.unoesc.restapi.calculadora.Calculadora;
import br.edu.unoesc.restapi.conversorNumerico.ConversorNumerico;
import br.edu.unoesc.restapi.operacao.Operacao;

@RestController
public class Controller {
	private Logger logger = Logger.getLogger(Controller.class.getName());
	
	// ----------------------- SOMAR ----------------------------- 
	
	// QUERY
    @GetMapping("/somar-query")
    public Double somarQuery(@RequestParam(value = "numero1", defaultValue = "0") String numero1,
    						 @RequestParam(value = "numero2", defaultValue = "0") String numero2) {
    	
    	if (!ConversorNumerico.ehNumerico(numero1) || !ConversorNumerico.ehNumerico(numero2)) {
    		return 0d;
    	}
    	
    	return Calculadora.operacao(numero1, numero2, Operacao.SOMAR);
    }
    
    // PATH
    @GetMapping("/somar-path/{numero1}/{numero2}")
    public Double somarPath(@PathVariable("numero1") String numero1,
    					    @PathVariable(value = "numero2") String numero2) {
    	
    	logger.info("Calculando... " + numero1 + " + " + numero2);
    	  
    	return Calculadora.operacao(numero1, numero2, Operacao.SOMAR);
    	
    }
    
    // ----------------------- SUBTRAIR ----------------------------- 
    
	// QUERY
    @GetMapping("/subtrair-query")
    public Double subtrairQuery(@RequestParam(value = "numero1", defaultValue = "0") String numero1,
    						 @RequestParam(value = "numero2", defaultValue = "0") String numero2) {
    	
    	if (!ConversorNumerico.ehNumerico(numero1) || !ConversorNumerico.ehNumerico(numero2)) {
    		return 0d;
    	}
    	
    	return Calculadora.operacao(numero1, numero2, Operacao.SUBTRAIR);
    }
    
    // PATH
    @GetMapping("/subtrair-path/{numero1}/{numero2}")
    public Double subtrairPath(@PathVariable("numero1") String numero1,
    					    @PathVariable(value = "numero2") String numero2) {
    	
    	logger.info("Calculando... " + numero1 + " - " + numero2);
    	
    	if (!ConversorNumerico.ehNumerico(numero1) || !ConversorNumerico.ehNumerico(numero2)) {
    		return 0d;
    	}
    	
    	return Calculadora.operacao(numero1, numero2, Operacao.SUBTRAIR);
    }
    
    
 // ----------------------- MULTIPLICAR ----------------------------- 
    
    
	// QUERY
    @GetMapping("/multiplicar-query")
    public Double multiplicarQuery(@RequestParam(value = "numero1", defaultValue = "0") String numero1,
    						 @RequestParam(value = "numero2", defaultValue = "0") String numero2) {
    	
    	return Calculadora.operacao(numero1, numero2, Operacao.MULTIPLICAR);
    }
    
    // PATH
    @GetMapping("/multiplicar-path/{numero1}/{numero2}")
    public Double multiplicarPath(@PathVariable("numero1") String numero1,
    					    @PathVariable(value = "numero2") String numero2) {
    	
    	logger.info("Calculando... " + numero1 + " * " + numero2);
    	
    	return Calculadora.operacao(numero1, numero2, Operacao.MULTIPLICAR);
    }
    
    
 // ----------------------- DIVIDIR ----------------------------- 
    
    
	// QUERY
    @GetMapping("/dividir-query")
    public Double dividirQuery(@RequestParam(value = "numero1", defaultValue = "0") String numero1,
    						 @RequestParam(value = "numero2", defaultValue = "0") String numero2) {
    	
			return Calculadora.operacao(numero1, numero2, Operacao.DIVIDIR);
    }
    
    // PATH
    @GetMapping("/dividir-path/{numero1}/{numero2}")
    public Double dividirPath(@PathVariable("numero1") String numero1,
    					    @PathVariable(value = "numero2") String numero2) {
    	
    	return Calculadora.operacao(numero1, numero2, Operacao.DIVIDIR);
    }
    
    
 // ----------------------- MEDIA ----------------------------- 
    
	// QUERY
    @GetMapping("/media-query")
    public Double mediaQuery(@RequestParam(value = "numero1", defaultValue = "0") String numero1,
    						 @RequestParam(value = "numero2", defaultValue = "0") String numero2) {
    		
    	return Calculadora.operacao(numero1, numero2, Operacao.MEDIA);
    }
    
    // PATH
    @GetMapping("/media-path/{numero1}/{numero2}")
    public Double mediaPath(@PathVariable("numero1") String numero1,
    					    @PathVariable(value = "numero2") String numero2) {
    	
    	logger.info("Calculando... " + numero1 + " * " + numero2);
    	   	
    	return Calculadora.operacao(numero1, numero2, Operacao.MEDIA);
    }
    
    
 // ----------------------- POTENCIAÇÃO ----------------------------- 
    
    
	// QUERY
    @GetMapping("/potencia-query")
    public Double potenciaQuery(@RequestParam(value = "numero1", defaultValue = "0") String numero1,
    						 @RequestParam(value = "numero2", defaultValue = "0") String numero2) {    	
    	
    	return Calculadora.operacao(numero1, numero2, Operacao.POTENCIA);
    }
    
    // PATH
    @GetMapping("/potencia-path/{numero1}/{numero2}")
    public Double potenciaPath(@PathVariable("numero1") String numero1,
    					    @PathVariable(value = "numero2") String numero2) {
    	
    	logger.info("Calculando... " + numero1 + " * " + numero2);
    	
    	return Calculadora.operacao(numero1, numero2, Operacao.POTENCIA);
    }
    
 // ----------------------- RAIZ QUADRADA -----------------------------
    
	// QUERY
    @GetMapping("/raiz-query")
    public Double raizQuery(@RequestParam(value = "numero1", defaultValue = "0") String numero1) {
    	  	
    	return Calculadora.operacao(numero1, "0", Operacao.RAIZ);
    }
    
    // PATH
    @GetMapping("/raiz-path/{numero1}")
    public Double raizPath(@PathVariable("numero1") String numero1) {
    	
    	logger.info("Calculando raiz de " + numero1);
    	
    	return  Calculadora.operacao(numero1, "0", Operacao.RAIZ);
    }
}
