$.ajax("data.json").then(function(response) {
    for(var i = 0; i < response.length; i++) {
        var $content = '';
        var id = response[i].id;
        var gender = response[i].gender;
        var firstName = response[i].first_name;
        var lastName = response[i].last_name;
        var email = response[i].email;
        $content = "ID: " + id + '<br/>' + "Gender: " + gender + '<br/>' + "Name: " + firstName + " " + lastName + '<br/>' + "Email: " + email + '\n';
        $('.stuff').append($content);

    }
})