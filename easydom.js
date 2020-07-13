class EasyDOMinit{
  startById(inputId, code){
   document.getElementById(inputId).innerHTML= code;
  }
  startByTagName(inputTagName, code){
    document.getElementByTagName(inputTagName).innerHTML= code;
  }
  startByClassName(inputClassName, code){
    document.getElementByClassName(inputClassName).innerHTML= code;
  }
}

var EasyDOM = new EasyDOMinit;
