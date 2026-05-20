const data = [
    { id: 1, texto: 'Ganar en among Us ', estaCompletada: true },
    { id: 2, texto: 'Ganar ', estaCompletada: false }
]
let input = document.querySelector('#inputTarea')
let btn = document.querySelector('#btnTarea')
let tareas = document.querySelector('#tareas')


if (data.length > 0) {
    for (let i = 0; i <= data.length - 1; i++) {
        //Dibujando Div de tarea
        let div = document.createElement('div')
        div.style.backgroundColor = 'rgb(214, 214, 214)'
        div.style.padding = '5px'
        div.style.borderBottom = '1px solid black'
        div.className = 'd-flex w-50 justify-content-between align-items-baseline'
        //dibujando checkbox
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('id', data[i].id)
        checkbox.className = 'me-2'
        checkbox.style.cursor = 'pointer'

        //dibujando el label
        let label = document.createElement('label')
        if (data[i].estaCompletada) {
            checkbox.checked = true
            label.classList.add('text-decoration-line-through')
        } else {
            label.classList.remove('text-decoration-line-through')
        }
        checkbox.addEventListener('click', (event) => {
            console.log(event.target.id)
            let tareaABuscar = data.find(item => item.id == event.target.id)
            tareaABuscar.estaCompletada = !tareaABuscar.estaCompletada
            if (tareaABuscar.estaCompletada) {
                checkbox.checked = true
                label.classList.add('text-decoration-line-through')
            } else {
                label.classList.remove('text-decoration-line-through')
            }
        })
        //Pendiente algo insertar texto del label

        //Dibujar el sup
        let sup = document.createElement('sup')
        sup.textContent = 'X'
        sup.addEventListener('mouseover', () => {
            sup.style.color = 'red';
        });

        // 2. Cuando el mouse sale (Hover OFF): vuelve al color normal (negro)
        sup.addEventListener('mouseout', () => {
            sup.style.color = 'black';
        });

        // (Opcional) Si quieres que aparezca la mano en el cursor:
        sup.style.cursor = 'pointer';
        //Agregar elementos al div
        label.textContent = data[i].texto
        div.append(checkbox)
        div.append(label)
        div.append(sup)
        tareas.append(div)
        // input.value = ''
        sup.addEventListener('click', () => {
            div.remove()
        })
    }

}



//El parametro event solo se pone si lo vamos a utilizar
btn.addEventListener('click', (event) => {
    //Dibujando Div de tarea
    let div = document.createElement('div')
    div.style.backgroundColor = 'rgb(214, 214, 214)'
    div.style.padding = '5px'
    div.style.borderBottom = '1px solid black'
    div.className = 'd-flex w-50 justify-content-between align-items-baseline'
    //dibujando checkbox
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.className = 'me-2'
    checkbox.style.cursor = 'pointer'

    //dibujando el label
    let label = document.createElement('label')
    checkbox.addEventListener('click', () => {

        label.classList.toggle('text-decoration-line-through')
    })
    //Pendiente algo insertar texto del label

    //Dibujar el sup
    let sup = document.createElement('sup')
    sup.textContent = 'X'
    sup.addEventListener('mouseover', () => {
        sup.style.color = 'red';
    });

    // 2. Cuando el mouse sale (Hover OFF): vuelve al color normal (negro)
    sup.addEventListener('mouseout', () => {
        sup.style.color = 'black';
    });

    // (Opcional) Si quieres que aparezca la mano en el cursor:
    sup.style.cursor = 'pointer';
    //Agregar elementos al div
    label.textContent = input.value
    div.append(checkbox)
    div.append(label)
    div.append(sup)
    tareas.append(div)
    data.push({ id: data.length + 1, texto: input.value, estaCompletada: false })
    input.value = ''
    sup.addEventListener('click', () => {
        div.remove()
    })
})


