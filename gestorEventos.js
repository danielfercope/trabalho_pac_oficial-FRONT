/* Troca de abas Eventos */
document.addEventListener('DOMContentLoaded', function() {
    const createEventTab = document.getElementById('create-event-tab');
    const viewEventsTab = document.getElementById('view-events-tab');
    const createEventForm = document.getElementById('create-event-form');
    const viewEvents = document.getElementById('view-events');

    createEventTab.addEventListener('click', function() {
        createEventTab.classList.add('active');
        viewEventsTab.classList.remove('active');
        createEventForm.classList.remove('hidden');
        viewEvents.classList.add('hidden');
    });

    viewEventsTab.addEventListener('click', function() {
        viewEventsTab.classList.add('active');
        createEventTab.classList.remove('active');
        viewEvents.classList.remove('hidden');
        createEventForm.classList.add('hidden');
    });
});
