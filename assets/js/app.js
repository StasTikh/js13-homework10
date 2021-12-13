const URL = 'https://fakestoreapi.com/products';

import { createApp } from "../../node_modules/vue/dist/vue.esm-browser.prod.js";

//import { stuffCard } from "./stuffCard.js"; 

//import { stuffBasket } from "./stuffBasket.js"

setTimeout(function(){
    createApp({
        data(){
            return{
                title: "Fake Store",
                storeList: [],
                search: '',
                sort: null
            }
        },
        computed: {
            showList(){ 
                let s = this.search
                    .trim()
                    .toLowerCase();
                    let resultList = this.storeList.filter(function(item){
                        let txt = item.title.toLowerCase();
                        let descr = item.description.toLowerCase();
                        return txt.includes(s) || descr.includes(s);
                    });
                
                if(this.sort != null){
                    if(this.sort == 'up'){
                        resultList.sort((a, b) => a.price - b.price);
                    } else {
                        resultList.sort((a, b) => b.price - a.price);
                    }
                }
                return resultList;    
            },
            showCounter(){
                let counterS = 0;
                for(let item of this.storeList){
                    counterS += item.counter
                }
                return counterS
            },
            showPrice(){
                let arr = [];
                let sum = 0;
                for(let item of this.storeList) {
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
        async mounted(){
            let data = await fetch(URL);
            data = await data.json();
            data = data.map(item => ({
                ...item,
                counter: 0
        }))
            this.storeList = data;
            console.log(this.storeList[0])
        }, 
       
    }).mount('#app')
}, 500)