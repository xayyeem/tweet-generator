const quotes=document.getElementById('quotes')
const author = document.getElementById('author')
const btn = document.getElementById('btn')
let realData=''
let name=''

const getNewQuote=()=>{
    let rnum = Math.floor(Math.random()*15)
    let qData=realData[rnum]
    quotes.innerHTML= `${qData.text}`
    author.innerHTML= `${qData.author}`

    for(let i=0;i<author.length();i++){
        if(author[i]!=','){
            name+=author[i];
        }
    }
    if(qData.author===null){
        qData.author='anonymous'
    }else{
        qData.author
    }
}

const getQuote=async ()=>{
        const api ='https://type.fit/api/quotes'
        try {
            let data = await fetch(api)
            realData = await data.json();
            getNewQuote();
        } catch (error) {   

        }
    }

        btn.addEventListener("click", getNewQuote)
    getQuote()