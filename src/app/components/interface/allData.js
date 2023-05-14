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
  name: 'name',
  lastName: 'last name',
  age: 'number',
  img: 'URL',
  address: {
    country: 'country',
    city: 'city'
  },
  hackathonTeam: 'Team name',
  role: 'role in project',
  features: 'information',
  linksToSocialNetworks: [
    { id: 'number', label: 'label', url: 'URL', img: 'URL' }
  ],
  about: [
    {
      id: 'number',
      content: 'text'
    }
  ],
  skills: [{ id: 'number', name: 'name', value: 'number' }]
}
