
import data from "../data/dataLinks";
class ListItems {

  constructor() {
    this.dataObjects = data
    this.handleContent()
  }
  // recuperar e adiciona elementos na (ul) que poderia  ser (ol)
  handleContent() {

    const insertIntoUnOrderedList = document.getElementById('unOrderedList')
    const elementListItem = this.dataObjects.map(element => {
      let string = `<li><strong><a class="ancList" href="${element.href}" target="_blank" alt="${element.name}">${element.name}</a></strong></li>`
      return string
    })
    insertIntoUnOrderedList.innerHTML = elementListItem.join('')
  }
}
export default ListItems
