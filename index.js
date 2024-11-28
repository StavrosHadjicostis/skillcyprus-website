
    $(document).ready(function () { 

        $('#recipe1').on('click', function() {
            $.sweetModal({
                title: 'HTML Content',
                content: 'You can place <b>anything</b> <i>you</i> want in here.'
            });
        })

    });
