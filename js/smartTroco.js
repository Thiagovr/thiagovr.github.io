// reset();

var txtTroco = $("#txtTroco");
var txtTrocoResposta = $("#txtTrocoResposta");

var txti10000 = $("#txti10000");
var txti05000 = $("#txti05000");
var txti02000 = $("#txti02000");
var txti01000 = $("#txti01000");
var txti00500 = $("#txti00500");
var txti00200 = $("#txti00200");
var txti00100 = $("#txti00100");
var txti00050 = $("#txti00050");
var txti00025 = $("#txti00025");
var txti00005 = $("#txti00005");
var txti00010 = $("#txti00010");

var txto10000 = $("#txto10000");
var txto05000 = $("#txto05000");
var txto02000 = $("#txto02000");
var txto01000 = $("#txto01000");
var txto00500 = $("#txto00500");
var txto00200 = $("#txto00200");
var txto00100 = $("#txto00100");
var txto00050 = $("#txto00050");
var txto00025 = $("#txto00025");
var txto00005 = $("#txto00005");
var txto00010 = $("#txto00010");

$( "#btnCalcular").click(function(){
	var item = [
				{valor:   100,    qtde: txti10000.val() },
				{valor:    50,    qtde: txti05000.val() },
				{valor:    20,    qtde: txti02000.val() },
				{valor:    10,    qtde: txti01000.val() },
				{valor:     5,    qtde: txti00500.val() },
				{valor:     2,    qtde: txti00200.val() },
				{valor:     1,    qtde: txti00100.val() },
				{valor:     0.50, qtde: txti00050.val() },
				{valor:     0.25, qtde: txti00025.val() },
				{valor:     0.10, qtde: txti00010.val() },
				{valor:     0.05, qtde: txti00005.val() }
				]
	var trocoVar = txtTroco.val();
	var temp = Math.floor(trocoVar);
	var temp = Math.floor(trocoVar*100) - 100*temp;
	if( temp%5!=0)
	{	temp = temp - temp%5 + 5;
		temp /= 100;
		temp += Math.floor(trocoVar);
		trocoVar = temp;
	}

	console.log(trocoVar);
	console.log(temp);
	
	var outT = simplexTroco(trocoVar, item, 'qtde');
	
	console.log(item);
	if(outT.Z == 0 && trocoVar != 0)
	{	outT = simplexTroco(trocoVar, item, 'valor');
	}
	
	var soma = 0;
	for(i=0; i<11; i++)
		soma +=outT.qtde[i]*item[i].valor;
	txtTrocoResposta.val( soma );
	
	txto10000.val( outT.qtde[0 ] );
	txto05000.val( outT.qtde[1 ] );
	txto02000.val( outT.qtde[2 ] );
	txto01000.val( outT.qtde[3 ] );
	txto00500.val( outT.qtde[4 ] );
	txto00200.val( outT.qtde[5 ] );
	txto00100.val( outT.qtde[6 ] );
	txto00050.val( outT.qtde[7 ] );
	txto00025.val( outT.qtde[8 ] );
	txto00010.val( outT.qtde[9 ] );
	txto00005.val( outT.qtde[10] );
	
	txti10000.val( txti10000.val() - outT.qtde[0 ] );
	txti05000.val( txti05000.val() - outT.qtde[1 ] );
	txti02000.val( txti02000.val() - outT.qtde[2 ] );
	txti01000.val( txti01000.val() - outT.qtde[3 ] );
	txti00500.val( txti00500.val() - outT.qtde[4 ] );
	txti00200.val( txti00200.val() - outT.qtde[5 ] );
	txti00100.val( txti00100.val() - outT.qtde[6 ] );
	txti00050.val( txti00050.val() - outT.qtde[7 ] );
	txti00025.val( txti00025.val() - outT.qtde[8 ] );
	txti00010.val( txti00010.val() - outT.qtde[9 ] );
	txti00005.val( txti00005.val() - outT.qtde[10] );
});

$( "#btnLimpar").click(function(){
    txti10000.val( 0 );
	txti05000.val( 0 );
	txti02000.val( 0 );
	txti01000.val( 0 );
	txti00500.val( 0 );
	txti00200.val( 0 );
	txti00100.val( 0 );
	txti00050.val( 0 );
	txti00025.val( 0 );
	txti00010.val( 0 );
	txti00005.val( 0 );
	
	txtTroco.val(0);
});

$( "#btnRandom").click(function(){
    txti10000.val( Math.floor((Math.random() * 100) + 1) % 20 );
	txti05000.val( Math.floor((Math.random() * 100) + 1) % 20 );
	txti02000.val( Math.floor((Math.random() * 100) + 1) % 20 );
	txti01000.val( Math.floor((Math.random() * 100) + 1) % 20 );
	txti00500.val( Math.floor((Math.random() * 100) + 1) % 20 );
	txti00200.val( Math.floor((Math.random() * 100) + 1) % 20 );
	txti00100.val( Math.floor((Math.random() * 100) + 1) % 20 );
	txti00050.val( Math.floor((Math.random() * 100) + 1) % 20 );
	txti00025.val( Math.floor((Math.random() * 100) + 1) % 20 );
	txti00010.val( Math.floor((Math.random() * 100) + 1) % 20 );
	txti00005.val( Math.floor((Math.random() * 100) + 1) % 20 );
	
	 txtTroco.val( Math.floor((Math.random() * 100) + 1) % 80 );
});

