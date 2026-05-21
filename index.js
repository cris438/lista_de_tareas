let data = [
]

//localStorage.getItem() //Me perimite traer info
//localStorage.setItem() //Me permite ingresar info
if (JSON.parse(localStorage.getItem('data'))) {
    data = JSON.parse(localStorage.getItem('data'))
    //Por que le ponemos data y que es?
} else {
    localStorage.setItem('data', JSON.stringify([]))
}



let input = document.querySelector('#inputTarea')
let btn = document.querySelector('#btnTarea')
let tareas = document.querySelector('#tareas')


//Sirve para crear un id nuevo
const getNextId = () => {
    return data.length > 0 ? data[data.length - 1]?.id + 1 : 1
}



const dibujarElementos = (info = null, i = null) => {
    //Dibujando Div de tarea
    let div = document.createElement('div') //document.createElement sirve para crear una nueva etiqueta
    div.style.backgroundColor = 'rgb(214, 214, 214)'
    div.style.padding = '5px'
    div.style.borderBottom = '1px solid black'
    div.className = 'd-flex w-50 justify-content-between align-items-baseline' //className Agrega una clase a la etiqeuta
    //dibujando checkbox
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox') //setAttribute sirve para crear un nuevo atributo para una etiqueta
    checkbox.setAttribute('id', data[i].id)
    checkbox.className = 'checkbox me-2'
    checkbox.style.cursor = 'pointer'

    //dibujando el label
    let label = document.createElement('label')

    //Dibujar el sup
    let sup = document.createElement('sup')
    sup.textContent = 'X'
    sup.className = 'eliminar'
    sup.addEventListener('mouseover', () => {
        sup.style.color = 'red';
    });

    // 2. Cuando el mouse sale (Hover OFF): vuelve al color normal (negro)
    sup.addEventListener('mouseout', () => {
        sup.style.color = 'black';
    });

    // (Opcional) Si quieres que aparezca la mano en el cursor:
    sup.style.cursor = 'pointer';


    if (info == null || i == null) {
        checkbox.setAttribute('id', getNextId())
        label.textContent = input.value //textContent sirve para ingresarle texto a un etiqueta
        sup.setAttribute('id', data.length + 1)
    } else {
        checkbox.setAttribute('id', info[i].id)
        label.textContent = info[i].texto
        sup.setAttribute('id', info[i].id)
    }

    div.append(checkbox) //append sirve para ingresarle etiquetas a una etiqueta
    div.append(label)
    div.append(sup)

    return { div, checkbox, label, sup }
}

const dibujarTodo = () => {
    if (data.length > 0) {
        for (let i = 0; i <= data.length - 1; i++) {
            const { div, checkbox, label, sup } = dibujarElementos(data, i) //const con las llaves se llama destructurin
            if (data[i].estaCompletada) {
                checkbox.checked = true
                label.classList.add('text-decoration-line-through') //add sirve para agregar una clase. a la lista de clases (classList)preguntar que es exactamente classlist
            } else {
                label.classList.remove('text-decoration-line-through') //remove sirve para borrar
            }
            tareas.append(div)
        }
    }
}

//El parametro event solo se pone si lo vamos a utilizar
btn.addEventListener('click', (event) => {
    data.push(
        { id: getNextId(), texto: input.value, estaCompletada: false }
    )
    localStorage.setItem('data', JSON.stringify(data))
    tareas.innerHTML = ''
    dibujarTodo()
    input.value = ''
})

tareas.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox')) {
        let tareaABuscar = data.find(item => item.id == event.target.id)
        tareaABuscar.estaCompletada = !tareaABuscar.estaCompletada
        if (tareaABuscar.estaCompletada) {
            event.target.nextSibling.classList.add('text-decoration-line-through')
        } else {
            event.target.nextSibling.classList.remove('text-decoration-line-through')
        }
    } else if (event.target.classList.contains('eliminar')) {
        event.target.parentElement.remove()
        data = data.filter(item => item.id != event.target.id)

    }
})

dibujarTodo()
