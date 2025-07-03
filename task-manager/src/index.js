import "./components/espe-header.js";
import "./components/espe-task-list.js";
import "./components/espe-task-items.js";
import "../style/main.css";

let tasks = [
    {
        id: 1,
        name: 'Reunión de Proyecto',
        notes: 'Preparar presentación para la reunión con el equipo.',
        time: '10:00',
        priority: 'alta',
        date: 'hoy'
    },
    {
        id: 2,
        name: 'Reunión de Proyecto',
        notes: 'Preparar presentación para la reunión con el equipo.',
        time: '10:00',
        priority: 'alta',
        date: 'hoy'
    },
    {
        id: 3,
        name: 'Reunión de Proyecto',
        notes: 'Preparar presentación para la reunión con el equipo.',
        time: '10:00',
        priority: 'baja',
        date: 'Mañana'
    },
];
let theme = 'dark';
let currentView = 'fecha'; 

// Referencias a los componentes
const header = document.getElementById('header');
const taskList = document.getElementById('taskList');
const tabFecha = document.getElementById('tab-fecha');
const tabPrioridad = document.getElementById('tab-prioridad');

taskList.tasks = tasks;
taskList.theme = theme;
header.theme = theme;

header.addEventListener('theme-toggle', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    header.theme = theme;
    taskList.theme = theme;
});

taskList.addEventListener('task-deleted', (e) => {
    const id = e.detail.task.id;
    tasks = tasks.filter(t => t.id !== id);
    taskList.tasks = [...tasks];
});

taskList.addEventListener('task-edit', (e) => {
    // Lógica para editar tarea
});

taskList.addEventListener('add-task-requested', () => {
    // Lógica para mostrar modal o formulario de agregar tarea
    // Cuando agregues la tarea, haz:
    // tasks = [...tasks, nuevaTarea];
    // taskList.tasks = [...tasks];
});

tabFecha.addEventListener('click', (e) => {
    e.preventDefault();
    currentView = 'fecha';
    tabFecha.classList.add('active');
    tabPrioridad.classList.remove('active');
    taskList.view = 'fecha';
});
tabPrioridad.addEventListener('click', (e) => {
    e.preventDefault();
    currentView = 'prioridad';
    tabPrioridad.classList.add('active');
    tabFecha.classList.remove('active');
    taskList.view = 'prioridad';
});

// Si usas un botón de agregar tarea externo:
// addTaskBtn.addEventListener('task-added', (e) => { ... });