const stuffCard = {
    props: ["product"],
    template: `
        <div class="card m-2 mt-3 p-2">
            <img :src="product.image" class="mx-auto mb-1" :title="product.title">
            <div class="card-body">
                <h5 class="card-title text-center">{{product.title}}</h5>
                <p class="card-text descript">{{product.description}}</p>
                <h4 class="text-end">{{product.price}}$</h4>
                <input v-model='product.counter' class="w-100 text-center" type="number" value="0" min="0" onkeypress="return false" />    
            </div>
        </div>
    `
};

export {stuffCard}