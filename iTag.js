var iTag = {
  create : function(tagID, option) {
    document.getElementById(tagID).innerHTML = "<input type='text' name='tag' placeholder='Write Tag' value='' style='width: 92%; height: 31px; background-color: #ffffff; border: solid 1px rgba(30, 22, 54, 0.6); border-radius: 4px;'/><button id='inputTagButton' type='button' style='width: 7%; padding: 7px 8px 9px 8px; background-color: rgba(30, 22, 54, 0.6); border: solid 1px rgba(30, 22, 54, 0.6); color: #ffffff; border-radius: 4px;'>Input</button><div style='background-color: #ffffff; padding: 2px;'><ul style='padding: 0;'></ul></div>";
    document.getElementById(tagID).getElementsByTagName("button")[0].addEventListener("click", function(event) {
      addTag(tagID);
    });

    document.getElementById(tagID).addEventListener("keyup", function(event){
      var key = event.keyCode;
      if(key === 13) addTag(tagID);
    });
  }
};

function addTag(tagID) {
  var input = document.getElementById(tagID).querySelector("input").value;
  input = input.replace(/(\s*)/g, ""); //공백 제거
  if(input) {
    var el = document.createElement("li");
    el.style.cssText = "list-style:none; float: left; padding: 5px; margin: 5px; border: solid 1px rgba(30, 22, 54, 0.6); background-color: #ffffff; border-radius: 4px;";
    el.innerHTML = input + "<button type='button' style='margin-left: 10px;  background-color: rgba(30, 22, 54, 0.6); color: white;  border: rgba(30, 22, 54, 0.6); border-radius: 5px;'>X</button><input name='"+ tagID +"[]' hidden />";

    document.getElementById(tagID).getElementsByTagName("div")[0].getElementsByTagName("ul")[0].appendChild(el);
    document.getElementById(tagID).querySelector("input").value = "";
  }
}
