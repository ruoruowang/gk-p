function customized(){
    var content = "<table width='100%' height='100%'><tr><td style='background-color:darkkhaki;text-align: center;'>照片1</td><td style='background-color:darkkhaki;text-align: center;'>照片2</td><td style='background-color:darkkhaki;text-align: center;'>照片3</td></tr></table>";
    var music = "<table width='100%' height='100%'><tr><td style='background-color:darkkhaki;text-align: center;'>音乐1</td><td style='background-color:darkkhaki;text-align: center;'>音乐2</td><td style='background-color:darkkhaki;text-align: center;'>音乐3</td></tr></table>";
    const container = document.querySelector("#container");
    container.innerHTML = content + music;
}
