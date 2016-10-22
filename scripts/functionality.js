$(function task_manager_function()
{
    $('.delete_list').click(function(e)
    {
        e.preventDefault();
        $(this).closest('.indiv_list').hide('slow').remove();
    });
});
