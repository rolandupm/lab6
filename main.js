function exUnu()
{
	let input = document.getElementById('textInput').value;
	if (input)
	{
		let reversedString='';

		for (var i = input.length - 1; i >= 0; i--) 
		{
			reversedString+=input[i];
		}

		console.log(reversedString);
	}
	else if (input == null)
		console.log('null or empty');
	else
		console.log('Not a string');
}

function exDoi()
{
	let input = document.getElementById('textInput2').value;
	if (input)
	{
		let outputString='';
		let pos = document.getElementById('ex2Position').value;
		if (pos)
		{
			outputString = input.slice(0, pos) + input.slice(pos+1);
			console.log(outputString);
		}
		else
		{
			console.log('null or empty');
		}
	}
	else
		console.log('null or empty');
}	

function exTrei()
{
	let input = document.getElementById('textInput3').value;
	if (input)
	{
		if (!isNaN(input))
		{
			console.log( (input % 3) == 0 || (input % 7) == 0);
		}
		else
		{
			console.log('Not a number');
		}
	}
	else
	{
			console.log('null or empty');
	}

}	

function exPatru()
{
	let input = document.getElementById('textInput4').value;
	if (input)
		console.log(!isNaN(input));
	else
	{
		console.log('null or not a number');
	}
}	

function exCinci()
{
	let sum = 0;
	let array = [1,2,3,'asd',444];

	for (var i = array.length - 1; i >= 0; i--)
	{
		if (!isNaN(array[i]))
		{
			sum += array[i];
		}
		else
		{
			console.log('found a string in the array: ' + array[i] + ' at position:' + i);
		}
	}
	console.log(sum);
}	


function exSase()
{

	let input = {
		var1: 'a',
		var2: 'b',
		var3: 3,
		var4: 'c'
	}

	console.log(input['var1']!=undefined);

}


function bonus1()
{
	let input = document.getElementById('textInput5').value;
	if (input)
    {
	    if (isNaN(input))
	        console.log('Not a number');

	    var digits = String(+input).split(""),
	        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
	               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
	               "","I","II","III","IV","V","VI","VII","VIII","IX"],
	        roman = "",
	        i = 3;
	    while (i--)
	        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	    console.log(Array(+digits.join("") + 1).join("M") + roman);
	}
	else
		console.log('null or empty');
}
