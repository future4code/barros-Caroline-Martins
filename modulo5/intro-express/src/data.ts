
type user = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}

export const users: user[] = [
    {
        id: "1",
        name: "Caroline",
        phone: 97978585,
        email: "carol@labenu.com",
        website: "https://www.youtube.com"
    },
    {
        id: "2",
        name: "Ane Cristine",
        phone: 1102201210,
        email: "cristine@labenu.com",
        website: "https://www.youtube.com"
    },
    {
        id: "3",
        name: "Lorenzo",
        phone: 2103546872,
        email: "lolo@labenu.com",
        website: "https://www.youtube.com"
    },
    {
        id: "4",
        name: "Fagner",
        phone: 2007198537,
        email: "soares@labenu.com",
        website: "https://www.youtube.com"
    },
]

type posts = {
    userId: string,
    id: string,
    title: string,
    body: string,

}

export const postagens: posts[] = [
    
    {
        userId: "1",
        id:" 1",
        title: "Tudo posso basta não desistir",
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis"
    },
    {
        userId: "2",
        id:" 2",
        title: "A beleza de tudo esta na natureza",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto  quo et"
    },
    {
        userId: "3",
        id: "3",
        title: "Vamos correr e brincar",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto  quo et"
    },
    {
        userId: "4",
        id: "4",
        title: "É isso ai!",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto  quo et"
    },
    {
        userId:" 4",
        id: "5",
        title: "É isso ai!",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto  quo et"
    },
    {
        userId:" 4",
        id: "5",
        title: "É isso ai!",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto  quo et"
    }

]