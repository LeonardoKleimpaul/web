package br.edu.unoesc.restapi.calculadora;

import br.edu.unoesc.restapi.conversorNumerico.ConversorNumerico;
import br.edu.unoesc.restapi.operacao.Operacao;

public class Calculadora {
		
	public static Double operacao(String numero1, String numero2, Operacao operacao) {
		
    	if (!ConversorNumerico.ehNumerico(numero1) || !ConversorNumerico.ehNumerico(numero2)) {
    		return 0d;
    	}
		
		switch (operacao) {
		case SOMAR:
			return ConversorNumerico.converterParaDouble(numero1) + ConversorNumerico.converterParaDouble(numero2);
			
		case SUBTRAIR :
			return ConversorNumerico.converterParaDouble(numero1) - ConversorNumerico.converterParaDouble(numero2);
			
		case MULTIPLICAR :
			return ConversorNumerico.converterParaDouble(numero1) * ConversorNumerico.converterParaDouble(numero2);
			
		case DIVIDIR :
			if(ConversorNumerico.converterParaDouble(numero2) == 0) {
				return 0d;
			}
			return ConversorNumerico.converterParaDouble(numero1) / ConversorNumerico.converterParaDouble(numero2);
			
		case MEDIA :
			return (ConversorNumerico.converterParaDouble(numero1) + ConversorNumerico.converterParaDouble(numero2)) / 2;
			
		case POTENCIA :
			return Math.pow(ConversorNumerico.converterParaDouble(numero1), ConversorNumerico.converterParaDouble(numero2));
			
		case RAIZ :
			if(ConversorNumerico.converterParaDouble(numero2) < 0) {
				return 0d;
			}
			return Math.sqrt(ConversorNumerico.converterParaDouble(numero1));
		
		default:
			return 0d;
		}
	}
}
