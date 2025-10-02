
import { dGEBId, gtEBCNa, dQySrAl, gtEBTgNa } from "../helpers/myDomHelper";

export function unlockSendButton(id, classMonitor) {
  const exe = dGEBId(id);
  const validator = gtEBCNa(document, classMonitor);
  const fileds = dQySrAl('input');
  exe.addEventListener('mouseover', function(){
    for (let valid of validator) {
      if (valid.textContent === '') {
      } for (let filed of fileds) {
        if(filed.value != '') {
          exe.disabled = false;
        }
      }
    }
  })
}	

export function linkImage(target, destination) {
  //const linkJs = dGEBId(target);
  target.style.cursor = "pointer";
  target.addEventListener('click', function(){
    window.open(destination)
  })
}
