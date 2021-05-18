new Vue ({
    el: "#root",
    data: {
        searchString: "",
        counter: null,
        myMessage: "",
        answer: ["Non capisco...", "Rispondo a caso, mica sono un intelligenza artificiale.", "Parlassi col muro ne capirebbe comunque piu di me", "Faccio solo finta di capire"],
        contacts: [
            {
            image: "img/avatar_4.jpg",
            name: 'Michele',
            avatar: '1',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            time: "15:30",
            text: 'Hai portato a spasso il cane?',
            status: 'sent',
            showPopUp: false
            },
            {
            date: '10/01/2020 15:50:00',
            time: "15:50",
            text: 'Ricordati di dargli da mangiare',
            status: 'sent',
            showPopUp: false
            },
            {
            date: '10/01/2020 16:15:22',
            time: "16:15",
            text: 'Tutto fatto!',
            status: 'received',
            showPopUp: false
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
            time: "16:30",
            text: "Ciao caro, come stai?",
            status: 'sent',
            showPopUp: false
            },
            {
            date: '20/03/2020 16:30:55',
            time: "16:30",
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
            showPopUp: false
            },
            {
            date: '20/03/2020 16:35:00',
            time: "16:35",
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
            showPopUp: false
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
            time: "10:10",
            text: 'La Marianna va in campagna',
            status: 'received',
            showPopUp: false
            },
            {
            date: '28/03/2020 10:20:10',
            time: "10:20",
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
            showPopUp: false
            },
            {
            date: '28/03/2020 16:15:22',
            time: "16:15",
            text: 'Ah scusa!',
            status: 'received',
            showPopUp: false
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
            time: "15:30",
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent',
            showPopUp: false
            },
            {
            date: '10/01/2020 15:50:00',
            time: "15:50",
            text: 'Si, ma preferirei andare al cinema',
            status: 'received',
            visible: true,
            showPopUp: false
            }
            ],
            },
        ]
        

    },

    methods: {
        newMessage() {
            this.contacts[this.counter].messages.push({
                date: this.getDate(),
                time: this.getHour(),
                text: this.myMessage,
                status: 'sent'
            })

            this.myMessage = ""

            setTimeout( () => this.newAnswer(), 3000)
            //this.newAnswer()
        },

        newAnswer() {
            this.contacts[this.counter].messages.push({
                date: this.getDate(),
                time: this.getHour(),
                text: this.answer[Math.floor(Math.random() * (this.answer).length)],
                status: 'received'
            })
            this.scrollToEnd()
        },

        scrollToEnd() {
            let container = this.$el.querySelector("#container");
            container.scrollTop = container.scrollHeight;
        },

        changeCounter(param) {
            this.counter = param
        },

        getHour() {
            let date = new Date();
            let now = date.getHours() + ":" + date.getMinutes()
            return now
        },

        getDate() {
            let date = new Date
            let today = date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()
            return today
        },

        showMe(message, event) {
            this.$set(message, "showPopUp", true)
        },

        hideMe(message) {
            this.$set(message, "showPopUp", false)
        },

        deleteMessage(myIndex) {
            this.contacts[this.counter].messages.splice(myIndex, 1)
        }
    },



    mounted() {

    }
})

