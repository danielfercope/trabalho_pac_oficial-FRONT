document.addEventListener('DOMContentLoaded', function() {

    /* Seleciona elementos principais da interface */
    const createEventTab = document.getElementById('create-event-tab');
    const viewEventsTab = document.getElementById('view-events-tab');
    const createEventForm = document.getElementById('create-event-form');
    const viewEvents = document.getElementById('view-events');
    const eventsContainer = document.querySelector('.events-cards');
    const eventForm = document.querySelector('form');

    /* Seleciona elementos do popup de confirmação */
    const confirmationModal = document.getElementById('confirmation-modal');
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
    const cancelDeleteBtn = document.getElementById('cancel-delete-btn');

    /* Seleciona elementos do popup de edição */
    const editEventPopup = document.getElementById('edit-event-popup');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');

    /* Armazena o evento que será editado */
    let eventToEdit;

    /* Troca de abas Criar/Visualizar */
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
        loadEvents();
    });

    /* Este é um placeholder para carregar eventos do servidor */
    function loadEvents() {
        // fetch('/api/events')
        // .then(response => response.json())
        // .then(events => {
        //     eventsContainer.innerHTML = '';
        //     events.forEach(event => {
        //         addEventCard(event);
        //     });
        // })
        // .catch(error => console.error('Erro ao carregar eventos:', error));
    }

    /* Função para adicionar evento no front */
    function addEventCard(event) {
        const eventCard = document.createElement('div'); // Cria um novo elemento <div> para representar o cartão do evento
        eventCard.classList.add('card'); // Adiciona a classe 'card' ao elemento
        eventCard.setAttribute('data-id', event.id); // Define o atributo 'data-id' no cartão com o ID do evento
        eventCard.innerHTML = `
            <div class="card-img"></div>
            <div class="card-info">
                <h3>${event.name}</h3>
                <p>Última edição: ${new Date(event.lastEdited).toLocaleDateString()}</p>
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Deletar</button>
            </div>
        `;

        // Botão de Editar
        const editButton = eventCard.querySelector('.edit-btn');
        editButton.addEventListener('click', function() {
            // Preencher campos do popup com dados atuais do evento
            document.getElementById('edit-event-name').value = event.name;
            document.getElementById('edit-event-date').value = event.date;
            document.getElementById('edit-event-location').value = event.location;

            // Armazena o evento a ser editado
            eventToEdit = eventCard;

            // Mostrar o popup de edição
            editEventPopup.classList.add('visible');
        });

        eventsContainer.appendChild(eventCard); // Adiciona o cartão do evento ao contêiner de eventos na interface
        addDeleteEventListenersToCard(eventCard); //Adiciona ouvintes de evento aos botões de "Deletar" no cartão de evento recém-criado.
    }

    // Listener para o formulário de edição
    const editEventForm = editEventPopup.querySelector('form');
    editEventForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Capturar os novos valores dos campos de edição
        const editedEventName = document.getElementById('edit-event-name').value;
        const editedEventDate = document.getElementById('edit-event-date').value;
        const editedEventLocation = document.getElementById('edit-event-location').value;

        // Atualizar o evento na interface
        eventToEdit.querySelector('h3').textContent = editedEventName;
        // Atualizar outras informações necessárias
        // Aqui você pode adicionar atualizações para outros campos se necessário

        // Esconder o popup de edição
        editEventPopup.classList.remove('visible');
    });

    // Listener para o botão de cancelar edição
    cancelEditBtn.addEventListener('click', function() {
        // Esconder o popup de edição
        editEventPopup.classList.remove('visible');
    });

    /* Função para deletar evento no front */
    function addDeleteEventListenersToCard(card) {
        const deleteButton = card.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
            eventToDelete = card;
            confirmationModal.classList.remove('hidden');
        });
    }

    /* Aiciona um novo evento no back */
    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();

        /* Captura dos valores dos campos do formulário */
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventRegistrationDate = document.getElementById('event-registration-date').value;
        const eventLocation = document.getElementById('event-location').value;

        /* Gera um ID único para o novo evento usando timestamp */
        const eventId = new Date().getTime(); // Usar timestamp como ID para simulação

        /* Cria um novo objeto de evento com os dados capturados do formulário */
        const newEvent = {
            id: eventId,
            name: eventName,
            date: eventDate,
            registrationDate: eventRegistrationDate,
            location: eventLocation,
            lastEdited: new Date() // Registra a data/hora da última edição como o momento atual
        };

        /* Simular envio ao servidor dos dados do novo evento*/
        // fetch('/create-event', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newEvent)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     addEventCard(data);
        // })
        // .catch(error => console.error('Erro ao criar evento:', error));

        /* Simular adição do evento no front-end*/
        addEventCard(newEvent);

        /* Limpar o formulário*/
        eventForm.reset();
    });


    /* Deleta um evento no back */
    confirmDeleteBtn.addEventListener('click', function() {
        const eventId = eventToDelete.getAttribute('data-id');
        // fetch(`/delete-event/${eventId}`, {
        //     method: 'DELETE'
        // })
        // .then(response => {
        //     if (response.ok) {
        //         eventToDelete.remove();
        //     } else {
        //         alert('Falha ao deletar o evento. Por favor, tente novamente.');
        //     }
        // })
        // .catch(error => {
        //     console.error('Erro ao deletar o evento:', error);
        //     alert('Erro ao deletar o evento. Por favor, tente novamente.');
        // })
        // .finally(() => {
        //     confirmationModal.classList.add('hidden');
        // });

        /*Simular remoção do evento no front-end*/
        eventToDelete.remove();
        confirmationModal.classList.add('hidden');
    });

    cancelDeleteBtn.addEventListener('click', function() {
        confirmationModal.classList.add('hidden');
    });
});
