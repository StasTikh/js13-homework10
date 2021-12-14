const stuffBasket = {        
    computed: {
        showCounter(){
            let counterS = 0;
            for(let item of this.array){
                counterS += item.counter
            }
            return counterS
        },
        showPrice(){
            let arr = [];
            let sum = 0;
            for(let item of this.array) {
                if(item.counter !== 0) {
                    arr.push(item.price * item.counter)
                }    
            }
            for (let i = 0; i < arr.length; i++){
                sum += arr[i];
            }
            return sum.toFixed(2) 
        }
    },
    props: ['array'],
    template: `
        <h5>
            <i class="fas fa-shopping-cart"></i>
            <span> ({{showCounter}})</span>
            <span> Price: {{showPrice}}$</span>
        </h5>
    `
}

export {stuffBasket}