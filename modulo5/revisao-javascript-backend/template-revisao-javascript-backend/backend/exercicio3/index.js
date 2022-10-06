console.log("exercicio 3");

const contas = [
    {
        email: "astrodev@labenu.com",
        password: "abc123"
    },
    {
        email: "bananinha@gmail.com",
        password: "bananinha"
    }
]

function newAccount(newEmail = " ", newPassword = " ") {
    const emailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    const passwordValid = /.{6,}/

    if (emailValid.test(newEmail) && passwordValid.test(newPassword)) {
        const email = contas.filter((element) => {
            element.email ===newEmail
        })
        const password = contas.filter((element) => {
            element.password === newPassword
        })
        if (email && password) {
            return ("Login bem-sucedido")
        }
    }if (!emailValid.test(newEmail) && passwordValid.test(newPassword)) {
        return ("e-mail inválido")
    }if (emailValid.test(newEmail) && !passwordValid.test(newPassword)) {
        return ("senha deve possuir no mínimo 6 caracteres")
    }
    else{
        return("email ou senha invalidos")
    }

}

console.log(newAccount("astrodev@labenu.com.br", "234567"))
console.log(newAccount("astrodev.gmail.com", "123456"))
console.log(newAccount("astrodev.astro.com", 1234))
console.log(newAccount("carol@gmail.com", "123" ))
