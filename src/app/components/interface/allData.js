export const team = {
  id: 'number',
  img: 'URL',
  groupName: 'Group name',
  hackathonTeamNumber: 'Team number',
  taskTitle: 'Title',
  description: 'description'
}

export const member = {
  id: 'number',
  img: 'URL',
  name: 'name',
  lastName: 'last name',
  age: 'number',
  address: {
    country: 'country',
    city: 'city'
  },
  hackathonTeamNumber: 'Team number',
  linksToSocialNetworks: [
    { id: 'number', label: 'label', url: 'URL', img: 'URL' }
  ],
  about: [
    {
      id: 'number',
      content: 'text',
      img: 'URL'
    }
  ],
  role: 'role in project',
  features: [{ id: 'number', label: 'label' }],
  skills: [{ id: 'number', name: 'name', value: 'number' }]
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
