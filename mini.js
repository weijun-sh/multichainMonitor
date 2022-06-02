const fs = require('fs')
const path = require('path')
const uglifyJs = require('uglify-js'); 
let buildPath = '/opt/grafana/grafana/public/build/';


//let content = fs.readFileSync('/opt/grafana/grafana/public/build/940.7c40910b111f7a5e2841.js').toString();
//console.log("content ==>", content);
//let result = uglifyJs.minify(content);
//console.log("result ==>", result)

//process.exit();

const decomment = require('decomment');


function removeJsComments(code)
{
    try{
	    
      code = uglifyJs.minify(code).code;
      console.log("mini success")	    
    }catch(err){
      console.log("mini error ==>", err)	    
    }	
	
    return code
}

fs.readdir(buildPath, function (err, files){
    files.map((filename, index) => {

        let filedir = path.join(buildPath, filename);
        let stat = fs.statSync(filedir);
	console.log(index, " ==>", filename)
        if(stat.isFile() && index < 10 ){
            fs.readFile(filedir, function(err, data){
		if(err){
		  console.log("read error ==>");	
		  return;
		}
		let content = data.toString();    
		content = removeJsComments(content);
		fs.writeFile(filedir, content, function(err){
		  if(err){
		    console.log("write fail==>", index);
		    return;
		  }	
		  console.log("write success", index);	
		})
	    });
        }
    })
})



