let input = document.querySelector('#inputTarea')
let btn = document.querySelector('#btnTarea')
let tareas = document.querySelector('#tareas')




//El parametro event solo se pone si lo vamos a utilizar
btn.addEventListener('click', (event) => {
    //Dibujando Div de tarea
    let div = document.createElement('div')
    div.style.backgroundColor='rgb(214, 214, 214)'
    div.style.padding='5px'
    div.style.borderBottom='1px solid black'
    div.className = 'd-flex w-50 justify-content-between align-items-baseline'
    //dibujando checkbox
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.className = 'me-2'
    checkbox.style.cursor='pointer'

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
    input.value = ''
    sup.addEventListener('click', () => {
        div.remove()
    })

})


