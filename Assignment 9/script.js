$(document).ready(function () {
    $('#addTaskBtn').click(function () {
        var taskText = $('#newTask').val();
        if (taskText.trim() !== '') {
            $('#taskList').append('<li class="list-group-item"><input type="checkbox" class="mr-2">' + taskText + '</li>');
            $('#newTask').val('');
        }
    });

    $(document).on('change', '#taskList input[type="checkbox"]', function () {
        var listItem = $(this).closest('li');
        listItem.toggleClass('completed', $(this).prop('checked'));
    });

    $('#deleteCompletedBtn').click(function () {
        $('#taskList .completed').remove();
    });

    $('#deleteAllBtn').click(function () {
        $('#taskList').empty();
    });
});
