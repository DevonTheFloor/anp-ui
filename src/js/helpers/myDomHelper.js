
/**
 * Helper for all DOM node creation or selection,alway start ans finish by lower case
 * @param {*} tag 
 * @returns 
 */

export function dCrEl(tag) {
  return document.createElement(tag)
}

export function dGEBId(id) {
  return document.getElementById(id)
}

export function dQySr(tag) {
  return document.querySelector(tag)
}

export function dQySrAl(tag) {
  return document.querySelectorAll(tag)
}

export function gtEBCNa(from, name) {
  return from.getElementsByClassName(name)
}

export function gtEBTgNa(from, name){
  return from.getElementsByTagName(name)
}

export function gtEBNa(from, name) {
  return from.getElementsByName(name)
}

export function isAdHl(from, where, tag) {
  return from.insertAdjacentHTML(where, tag)
}

export function addCell(named, tag, classAtt, idCell, parent ) {
  named = document.createElement(tag);
  named.setAttribute('class', classAtt);
  named.id = idCell;
  parent.appendChild(named);
}