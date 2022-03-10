let userRole = prompt("Who's there? ");

if (userRole === 'Admin') {
    let password = prompt("Enter password: ")
    if (password === 'TheMaster') {
        alert('Welcome')
    }
    else if (password === null || password === '') {
        alert('Cancelled')
    }
    else {
        alert("Wrong Password")
    }
}
else if (userRole === null || userRole === '') {
    alert('Cancelled')
}
else {
    alert("I don't know you")
}
