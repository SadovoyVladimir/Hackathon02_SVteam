const team = {
    id: "number",
    img: "URL",
    groupName: "Group name",
    hackathonTeamName: "number",
    taskTitle: "name",
    description: "description",
}

const user = {
    img: "URL",
    name: "name",
    lastName: "last name",
    age: "number",
    addres: {
        country: "country",
        city: "city"
    },
    hackathonTeam: {id: team.id},
    sotialNetworcs: [
        // {id: sotialNetworcs.id} // реализация через отдельную сущность
        {id: "number", label: "label", url: "URL", img: "URL"}
    ],
    about: {
        id: "number", content: "text", img: "URL"
    },
    role: "role in progect",
    features: [
        {id: "number", label: "label"}
    ],
    skills: [
        // {id: "skills.id"}, // реализация через отдельную сущность
        {id: "number", label: "label"}
    ]
}

// Бонусом можно реализовать через разные сущности
// const skills = [
//     {id: "number", label: "label"}
// ]

// const sotialNetworcs = [
//     {id: "number", label: "label", url: "URL", img: "URL"},
//     {id: "number", label: "label", url: "URL", img: "URL"},
//     {id: "number", label: "label", url: "URL", img: "URL"},
//     {id: "number", label: "label", url: "URL", img: "URL"}
// ]