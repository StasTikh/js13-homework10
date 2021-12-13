const stuffCard = {
    // data(){
    //     return {
    //         counter: 0
    //     }
    // },
    
    props: ["product", "count"],
    template: `
            <div class="card m-2 mt-3">
                <img :src="product.image" class="mx-auto mb-1" :title="product.title">
                <div class="card-body">
                    <h5 class="card-title text-center">{{product.title}}</h5>
                    <p class="card-text descript">{{product.description}}</p>
                    <h4 class="text-end">{{product.price}}$</h4>
                    <div class='d-flex text-center mx-auto'> <i  v-if='counter >=1 ' @click="counter--" class="fas fa-minus-square"></i><h5 class='mx-auto'>{{counter}}</h5><i @click="counter++" class="fas fa-plus-square">
                    <h5 class='mx-auto'>{{showCounter}}</h5>
                </div>
            </div>
    `
};



export {stuffCard}