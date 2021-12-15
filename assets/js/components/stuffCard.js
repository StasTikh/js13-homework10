const stuffCard = {
    data(){
        return {
            counter: 0
        }
    },
    props: ["product", "elemId"],
    template: `
        <div class="card m-2 mt-3 p-2">
            <img :src="product.image" class="mx-auto mb-1" :title="product.title">
            <div class="card-body">
                <h5 class="card-title text-center">{{product.title}}</h5>
                <p class="card-text descript">{{product.description}}</p>
                <h4 class="text-end">{{product.price}}$</h4>
                <input @input='$emit("my-event", counter, elemId);' v-model='counter' class="w-100 text-center" type="number" value="0" min="0" onkeypress="return false" />    
            </div>
        </div>
    `
};

export {stuffCard}