function insert_Row() {
    //Write your code here
   let table = document.querySelector("#sampleTable");
   
	
   let newRow = table.insertRow(0);

   let cell1 = newRow.insertCell(0);
	cell1.textContent = "New Cell1";

    let cell2 = newRow.insertCell(1);
	cell2.textContent = "New Cell2";

}
