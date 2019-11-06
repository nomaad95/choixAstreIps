function handleDrop(e) {
    console.log("Opening file...");
    e.stopPropagation(); e.preventDefault();
    var files = e.dataTransfer.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, {type: 'array'});
  
      /* DO SOMETHING WITH workbook HERE */
      //console.log(workbook);
      var worksheet = workbook.Sheets.Sheet1;
      //console.log(headers);
      /*for (let t of workbook.Sheets.Sheet1) {
          console.log(t);
      }*/

      var a = "A".charCodeAt(0);
      var z = "Z".charCodeAt(0);
      var d = "D".charCodeAt(0);
      
      var line = 1;
      var col = 'A';

      console.log(worksheet['A1']);

      var z = 'X';
      z++;

      console.log("A".charCodeAt(0));
      console.log("Z".charCodeAt(0));
    };
    reader.readAsArrayBuffer(f);
  }
  document.getElementById('dropZone').addEventListener('drop', handleDrop, false);
  document.getElementById('dropZone').addEventListener('dhange', handleDrop, false);