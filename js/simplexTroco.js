function simplexTroco( troco, item , operacao){
	troco = parseInt(troco*100);
	var start;
	var log = glp_print_func = function(value){
		var now = new Date();
		var d = (now.getTime() - start.getTime()) / 1000;
		if (d > 60) throw new Error("timeout");
	};
	var outT = {
		Z: 0,
		qtde: []
	}
	
	var constraint, objective;
	if(operacao == 'qtde')
	{	constraint = 'one_1: 10000x_1 +5000x_2 +2000x_3 + 1000x_4 + 500x_5 +200x_6 + 100x_7 + 50x_8 +25x_9 +10x_10 +5x_11 = ' + troco +' \n';
		objective = 'obj: x_1 +x_2 +x_3 +x_4 +x_5 +x_6 +x_7 +x_8 +x_9 +x_10 +x_11   \n';
	}
	else if(operacao == 'valor')
	{	constraint = 'lim_1: 10000x_1 +5000x_2 +2000x_3 + 1000x_4 + 500x_5 +200x_6 + 100x_7 + 50x_8 +25x_9 +10x_10 +5x_11 >= ' + troco +' \n';
		objective = 'obj: 10000x_1 +5000x_2 +2000x_3 + 1000x_4 + 500x_5 +200x_6 + 100x_7 + 50x_8 +25x_9 +10x_10 +5x_11   \n'
	}
	var stringInput = 
	'\\* Objective function*\\		\n'  +
	'Minimize						\n'  +
	objective  +
	'								\n'  +
	'\\* Constraints *\\			\n'  +
	'Subject To						\n'  +
	constraint  +
	'								\n'  +
	'\\* Variable bounds *\\		\n'  +
	'Bounds							\n'  +
	'0 <= x_1  <=  ' + item[0].qtde + ' \n'  +
	'0 <= x_2  <=  ' + item[1].qtde + ' \n'  +
	'0 <= x_3  <=  ' + item[2].qtde + ' \n'  +
	'0 <= x_4  <=  ' + item[3].qtde + ' \n'  +
	'0 <= x_5  <=  ' + item[4].qtde + ' \n'  +
	'0 <= x_6  <=  ' + item[5].qtde + ' \n'  +
	'0 <= x_7  <=  ' + item[6].qtde + ' \n'  +
	'0 <= x_8  <=  ' + item[7].qtde + ' \n'  +
	'0 <= x_9  <=  ' + item[8].qtde + ' \n'  +
	'0 <= x_10 <=  ' + item[9].qtde + ' \n'  +
	'0 <= x_11 <=  ' + item[10].qtde + ' \n'  +
	'								\n'  +
	'\\* Integer definitions *\\	\n'  +
	'General						\n'  +
	'x_1 x_2 x_3 x_4 x_5 x_6 x_7 x_8 x_9 x_10 x_11	\n'  +
	'								\n'  +
	'End							\n'  ;console.log(stringInput);
	
	function run(){
		start = new Date();
		var lp = glp_create_prob();
		glp_read_lp_from_string(lp, null, stringInput);

		glp_scale_prob(lp, GLP_SF_AUTO);

		var smcp = new SMCP({presolve: GLP_ON});
		glp_simplex(lp, smcp);

		var iocp = new IOCP({presolve: GLP_ON});
		glp_intopt(lp, iocp);

		log("obj: " + glp_mip_obj_val(lp));
		outT.Z = glp_mip_obj_val(lp);
		
		var valor = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05];
		for(var i = 1; i <= glp_get_num_cols(lp); i++){
			log(glp_get_col_name(lp, i)  + " = " + glp_mip_col_val(lp, i));
			
			outT.qtde.push(glp_mip_col_val(lp, i));
		}
		console.log(outT);
	}
	run();
	return outT;
}