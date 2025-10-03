const contacts = [
    {
        id: 1,
        name: 'Cr7',
        last_time_connected: 'Última vez ayer a las 20 hrs',
        is_connected: false,
        profile_photo: 'https://img.a.transfermarkt.technology/portrait/big/8198-1748102259.jpg?lm=1',
        state: 'De tal palo a tal astilla',
        number: '341674597',
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
        number: '3416547906',
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
    },
    {
        id: 3,
        name: 'Neymar',
        last_time_connected: 'Última vez hoy a las 10 hrs',
        is_connected: true,
        profile_photo: 'https://media.gq.com.mx/photos/5e94997dbb662c00085a6826/16:9/w_2560%2Cc_limit/Neymar%25201.jpg',
        state: 'El dinero no lo es todo',
        number: '3416789056',
        messages: [
            {
                id: 1,
                author: 'YO',
                content: "Neymar, que tal!",
                timestamp: '13:17'
            },
            {
                id: 2,
                author: 'Neymar',
                content: "Hola Santiii, todo bien y vos?",
                timestamp: '13:33'
            }
        ]
    }
]

export default contacts