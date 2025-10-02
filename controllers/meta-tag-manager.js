import { dCrEl, dQySr } from "../src/js/helpers/myDomHelper"

export function defineNewTitle(newTitle) {
  dQySr('title').innerHTML = newTitle ;
}
export function useNewTitle() {
  const newTitle = dQySr('title').textContent;
  //TO DO
  return newTitle;
}
export function defineMetaTagsPage(ogTags, cardTags) {
  const header = dQySr('head');
  ogTags.forEach(data => {
    const meta = dCrEl('meta');
    meta.setAttribute('property', `${data.value}`);
    meta.setAttribute('content', `${data.content}`);
    meta.setAttribute('class', 'custom-meta');
    header.appendChild(meta);
  });
  cardTags.forEach(data => {
    const meta = dCrEl('meta');
    meta.setAttribute('name', `${data.value}`);
    meta.setAttribute('content', `${data.content}`);
    meta.setAttribute('class', 'custom-meta');
    header.appendChild(meta);
  })
}
    /*[
      { value: "og:title", content: ""},
      { value: "og:type", content: "Web site"},
      { value: "og:url", content: ""},
      { value: "og:image", content: ""},
      { value: "og:description", content: ""}
    ],
      //card
    [
      {value: "twitter:card", content: "summary"},
      {value: "twitter:site", content: "Site name"},
      { value: "twitter:title", content: ""},
      {value: "twitter:image", content: "url image"},
      { value: "description", content: ""},
      { value: "twitter:creator", content: ""},
      { value: "twitter:image", content: ""}
      
    ]*/