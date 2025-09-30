const contacts = [
    {
        id: 1,
        name: 'Cr7',
        last_time_connected: 'Última vez ayer a las 20 hrs',
        is_connected: false,
        profile_photo: 'https://img.a.transfermarkt.technology/portrait/big/8198-1748102259.jpg?lm=1',
        state: 'De tal palo a tal astilla',
        messages: [
            {
                id: 1,
                author: 'YO',
                content: "Que tal!",
                timestamp: '16:17'
            }
        ]
    },
    {
        id: 2,
        name: 'Messi',
        last_time_connected: 'Última vez ayer a las 19 hrs',
        is_connected: true,
        profile_photo: 'https://cdn.conmebol.com/wp-content/uploads/2025/09/000_73GH2L9-1024x683.jpg',
        state: 'Campeón del mundo',
        messages: [
            {
                id: 1,
                author: 'YO',
                content: "Holaaaa, todo bien?",
                timestamp: '20:18'
            },
            {
                id: 2,
                author: 'Messi',
                content: "Todo bien crack, vos como estas?",
                timestamp: '20:19'
            }
        ]
    }
]

export default contacts