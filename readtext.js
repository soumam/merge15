
function readTextFile()
{
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", "IntegerArray.txt", true);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }	
		}
	}
	rawFile.send(null);
}
