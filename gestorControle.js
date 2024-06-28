document.addEventListener("DOMContentLoaded", function() {
    const pessoasTab = document.getElementById("pessoas-tab");
    const voluntariosTab = document.getElementById("voluntarios-tab");

    const pessoasForm = document.getElementById("pessoas-form");
    const voluntariosForm = document.getElementById("voluntarios-form");

    pessoasTab.addEventListener('click', function() {
        pessoasTab.classList.add('active');
        voluntariosTab.classList.remove('active');
        pessoasForm.classList.remove('hidden');
        voluntariosForm.classList.add('hidden');
    });

    voluntariosTab.addEventListener('click', function() {
        voluntariosTab.classList.add('active');
        pessoasTab.classList.remove('active');
        pessoasForm.classList.add('hidden');
        voluntariosForm.classList.remove('hidden');
    });

    // Adiciona event listeners para os botões de editar e deletar na tabela de voluntários
    document.querySelectorAll('#voluntarios-table .edit-btn').forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const nameCell = row.querySelector('td:nth-child(1)');
            const phoneCell = row.querySelector('td:nth-child(2)');
            const emailCell = row.querySelector('td:nth-child(3)');

            const name = nameCell.textContent;
            const phone = phoneCell.textContent;
            const email = emailCell.textContent;

            const newName = prompt("Edite o nome:", name);
            const newPhone = prompt("Edite o telefone:", phone);
            const newEmail = prompt("Edite o email:", email);

            if (newName !== null && newPhone !== null && newEmail !== null) {
                nameCell.textContent = newName;
                phoneCell.textContent = newPhone;
                emailCell.textContent = newEmail;
            }
        });
    });

    document.querySelectorAll('#voluntarios-table .delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (confirm("Você tem certeza que deseja deletar este voluntário?")) {
                const row = this.closest('tr');
                row.remove();
            }
        });
    });

    // Adiciona event listeners para os botões de editar e deletar na tabela de pessoas que precisam de ajuda
    document.querySelectorAll('#pessoas-table .edit-btn').forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const nameCell = row.querySelector('td:nth-child(1)');
            const phoneCell = row.querySelector('td:nth-child(2)');
            const descCell = row.querySelector('td:nth-child(3)');
            const needCell = row.querySelector('td:nth-child(4)');

            const name = nameCell.textContent;
            const phone = phoneCell.textContent;
            const desc = descCell.textContent;
            const need = needCell.textContent;

            const newName = prompt("Edite o nome:", name);
            const newPhone = prompt("Edite o telefone:", phone);
            const newDesc = prompt("Edite a descrição familiar:", desc);
            const newNeed = prompt("Edite a necessidade:", need);

            if (newName !== null && newPhone !== null && newDesc !== null && newNeed !== null) {
                nameCell.textContent = newName;
                phoneCell.textContent = newPhone;
                descCell.textContent = newDesc;
                needCell.textContent = newNeed;
            }
        });
    });

    document.querySelectorAll('#pessoas-table .delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (confirm("Você tem certeza que deseja deletar esta pessoa?")) {
                const row = this.closest('tr');
                row.remove();
            }
        });
    });
});
