new Vue ({
    el: "#root",
    data: {
        counter: 2,
        myMessage: "",
        answer: ["Non capisco...", "Guarda che non sono un intelligenza artificiale", "Parlassi col muro no capirebbe comunque piu di me", "Faccio solo finta di capire"],
        contacts: [
            {
            image: "img/avatar_4.jpg",
            name: 'Michele',
            avatar: '1',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            image: "img/avatar_2.jpg",
            name: 'Fabio',
            avatar: '2',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },{
            image: "img/avatar_3.jpg",
            name: 'Samuele',
            avatar: '3',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            image: "img/avatar_6.jpg",
            name: 'Luisa',
            avatar: '4',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
        ]
        

    },

    methods: {
        newMessage() {
            this.contacts[this.counter].messages.push({
                date: '10/01/2020 15:50:00',
                text: this.myMessage,
                status: 'sent'
            })

            this.myMessage = ""

            this.newAnswer()
            this.scrollToEnd()
        },

        newAnswer() {
            this.contacts[this.counter].messages.push({
                date: '10/01/2020 15:50:00',
                text: this.answer[Math.floor(Math.random() * (this.answer).length)],
                status: 'received'
            })
        },

        scrollToEnd() {
            let container = this.$el.querySelector("#container");
            container.scrollTop = container.scrollHeight;
        },

        changeCounter(param) {
            this.counter = param
        }
    },



    mounted() {
    }
})

