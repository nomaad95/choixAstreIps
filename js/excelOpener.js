function handleDrop(e) {
    console.log("Opening file...");
    e.stopPropagation(); e.preventDefault();
    var files = e.dataTransfer.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});

        var worksheet = workbook.Sheets.Sheet1;

        var f = "F".charCodeAt(0);
        var z = "Z".charCodeAt(0);
        var d = "D".charCodeAt(0);

        var excelSheet = new Map();

        for (var l = 1; l < 30; l++){
            var line = new Map();
            for (var c = f; c < z + 5; c++){
                //console.log(String.fromCharCode(c));
                var col;
                if (c > z) col = "A" + String.fromCharCode(c-26);
                else col = String.fromCharCode(c);
                //console.log(col+l);
                //console.log(worksheet[col+l].v);
                line.set(col,worksheet[col+l].v)
            }
            excelSheet.set(l,line);
        }
        console.log(excelSheet);

    };
    reader.readAsArrayBuffer(f);
  }
  document.getElementById('dropZone').addEventListener('drop', handleDrop, false);
  document.getElementById('dropZone').addEventListener('change', handleDrop, false);