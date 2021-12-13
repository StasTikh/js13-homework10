const stuffBasket = {
    data(){
        return {
            counter: 0
        }
    },
    // mounted() {
    //     this.valueS = this.counter
    // },
    props: ["valueS", "summary"],
    template: `
            <div class="mx-auto text-center mt-3">
            <h3><i class="fas fa-shopping-cart">({{valueS}})</i> <span></span></h3>
            </div>
    `
}

export {stuffBasket}