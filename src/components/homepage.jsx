import React from 'react';
import './homepage.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Topo from './topo'
import Footer from './footer'

// Import do router para transação entre páginas
import {Link} from 'react-router-dom'

// Import do carousel e styled-components(css) das imagens 
import Carousel from "react-elastic-carousel";
import Item from './item.js';

// Import do Zoom
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

// Import das imagens e icones usados na homepage
import logoSearch from "./imgs/icon-search.svg"


// Const para a "quebra de linha" do resultado das imagens
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
];



function Homepage() {

    // Const do titulo da hashtag pesquisada
    const [titulo, setTitulo] = useState('');
    // Const do conteúdo digitado no input para pesquisa da hashtag
    const [contentInput, setContentInput] = useState('');
    // Const menssagem validação
    const [error, setError] = useState(null);
    // Const menssagem limite caracteres
    const [limit, setLimite] = useState(null);
    // Const para retirar hashtag
    const [noHashtag, setNoHashtag] = useState('');
    // Const para habilitar as funcionalidades
    let [modalShow, setShowModal] = useState(false)
    // Const para setar imagens da busca
    let [urlImage, setUrlImage] = useState('')
    // Tamanho do que foi escrito no input
    const lengthInput = contentInput.length;
    // limite inicial do que for inserido no input
    const limitCaracteres = 20 - lengthInput; 

    // Const que resgata o valor preenchido no input
    function handleTextChange(event) {
        setContentInput(event.target.value); // guarda o valor preenchido no content Input

        //Condicional para aparecer mensagem de limite de caracteres
        if (lengthInput < 20) { // em quanto não tiver 20 caracteres, não mostrar aviso
            setLimite(null); // variável sem valor - não aparece nada
            console.log(limit)
        } if (lengthInput >= 19) { // a partir de 19 caracteres
            setLimite("Limite de caracteres atingido!"); // aparecer aviso
            console.log(limit)
        }
    }

    // Const que resgata do DOM a div de mensagem de validação
    const messageValidation = document.getElementsByClassName('validation');


     function handleChange(event){
         let id = event.target.id
         setUrlImage(document.getElementById(id).style.backgroundImage.replace('url("', "").replace('")', ""))
         setShowModal(true)
         setTitulo(event.target.value);
         setContentInput(event.target.value);
            if (contentInput.length == 0) { // se o campo estiver vazio, impede que seja registrado
                setError('Campo obrigatório!');} // faz aparecer a div com a mensagem de campo obrigatório
                else {
                    setError(null); // div não aparece - não tem conteúdo
                    console.log("chama função post")
                    console.log('CONTEÚDO DIGITADO', contentInput);
        
        
                    // postSearch(); // chamda da função que registra na airtable
        
                    // retirada da hashtag para requisição da api do twitter
                    let takeOutHash = contentInput;
                    getTweets(takeOutHash.replace(/#/g, ''));
                    getImages(takeOutHash.replace(/#/g, ''));
                    setNoHashtag(takeOutHash.replace(/#/g, ''));
                    setContentInput('');
        
                }
     }
 
    


     function showImages(){
         document.getElementById("postResultsImages").style.display = 'flex'
         document.getElementById("postResultsText").style.display = 'none'
         document.getElementById("selectImages").classList.add("active")
         document.getElementById("selectTweets").classList.remove("active")
     }
 
     function showText(){
         document.getElementById("postResultsText").style.display = 'block'
         document.getElementById("postResultsImages").style.display = 'none'
         document.getElementById("selectTweets").classList.add("active")
         document.getElementById("selectImages").classList.remove("active")
     }
 
     let [tweets, setTweets] = useState([])
     let [images, setImages] = useState([])
 
     
     function getTweets(){
        let hashtag = document.getElementById('enter').value.replace(/#/g, "")
         axios.get('https://cors.bridged.cc/https://api.twitter.com/1.1/search/tweets.json?q='+hashtag+'&lang=pt&result_type=recent', {
             method: 'GET',
             headers: {
                 Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX'
             },
         }).then((resp) => {setTweets(resp.data.statuses)})
     }
 
     function getImages(){
          let hashtag = document.getElementById('enter').value.replace(/#/g, "")
         axios.get('https://cors.bridged.cc/https://api.twitter.com/2/tweets/search/recent?query='+hashtag+'%20has:images&max_results=50&expansions=author_id,attachments.media_keys&media.fields=type,url,width,height', {
             method: 'GET',
             headers: {
                 Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX'
             },
         }).then((resp) => {setImages(resp.data.includes.media)})
     }

    
     function postAirtable(){
         let hashtag = document.getElementById('enter').value.replace(/#/g, "")
 

         var data = new Date()
         var day = String(data.getDate()).padStart(2, '0')
         var month = String(data.getMonth() + 1).padStart(2, '0')
         var year = data.getFullYear()
         var today = day + '/' + month + '/' + year
 
         var hour = String(data.getHours()).padStart(2, '0')
         var minutes = String(data.getMinutes()).padStart(2, '0')
         var currentTime = hour + ':' + minutes
 
         var axios = require('axios');
         var data = JSON.stringify({
         "records": [
             {
             "fields": {
                 "Squad": "52",
                 "Hashtag": hashtag,
                 "Data": today,
                 "Hora": currentTime
                 }
             }
         ]
         });
 
         var config = {
         method: 'post',
         url: 'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas',
         headers: {
             'Authorization': 'Bearer key2CwkHb0CKumjuM',
             'Content-Type': 'application/json',
             'Cookie': 'brw=brwT6txT287hmhYVt'
         },
         data : data
         };
         axios(config)
         .then(function(response){})
         .catch(function (error) {
         console.log(error);
         });
     }
 
     const handler = (event) => {
         if (event.key === 'Enter') {
            getTweets()
            getImages()
            postAirtable()
         }
     }

















    return (
        
        <div>
            <div className="homepage">

                {/* HEADER */}
                <header className="banner">
                    <Topo />
                    {/* CAIXA DE TEXTO DO BANNER */}
                    <div className="textBox">
                    <h1 className="title"> Encontre hashtags de maneira fácil  </h1>
                    <p className="subtitle"> Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo </p>
                    </div>
                </header>

                {/* INPUT DA PESQUISA */}
                <div className="containerInput">
                    <div className="inputDiv">
                        <form className="form">
                            <img src={logoSearch} alt="logoSearch" class="logoSearch"></img>
                            <input 
                            id="enter" 
                            name="searchBar"
                            type="text" 
                            className="searchBar" 
                            placeholder="Buscar..." 
                            maxlength="20"
                            data-ls-module="charCounter"
                            value={contentInput}
                            onChange={handleTextChange}
                            onKeyPress={(e) => handler(e)}>
                            </input>
                        </form>
                    </div>
                </div>

                {/* VALIDAÇÃO */}
                <div className="validationLimit">
                    {limit && <p className="errorMessage">{limit}</p>}
                </div>
                <div className="validationError">
                    {error && <p className="errorMessage">{error}</p>}
                </div>

                <h1 className="searchTitle">Exibindo os 10 resultados mais recentes de #{titulo}</h1>

                <div className="postResultSelect">
                        <div id="selectTweets" className="active" onClick={showText}>
                            <p>Tweets</p>
                        </div>
                        <div id="selectImages" onClick={showImages}>
                            <p>Imagens</p>
                        </div>
                    </div>

                    <div className="containerBody">
                    <div id="postResultsImages" className="postResultsImages">
                        <Carousel breakPoints={breakPoints}>
                        {images.slice(0, 10).map((i, index) => {
                            return (
                                <Item><div className="imageContainer" key={index} >
                                <Zoom><div id={"imageContent"+index} className="imageContent" onClick={(event) => handleChange(event)} style={{backgroundImage: `url(${i.url})`}}></div></Zoom>
                                
                                <div className="textContent">
                                    <p>Postado por: @</p>
                                    <p>@username</p>
                                </div>
                            </div>
                            </Item>              
                )
             })}
             </Carousel>  
            </div>
            </div>
            
                {/* RESULTADOS DOS TWEETS EM TEXTO */}
                <div id="postResultsText" className="postResultsText">
                {tweets.slice(0, 10).map((t, index) => {
                    return (
                <div className="resultPosts">
                    <div className="postContainer" key={index}>   
                        <div className="postBox">
                                <img className="postImg" style={{backgroundImage: `url(${t.user.profile_image_url})`}}></img>
                                <div className="textBoxTweet">
                                    <div className="userBoxTweet">
                                        <div className="postUser">{t.user.name}</div>
                                        <div className="postUsername">@{t.user.screen_name}</div>
                                    </div>
                            <div className="postText">{t.text}</div>
                            <a className="postLink" href={'https://twitter.com/'+t.user.screen_name+'/status/'+t.id_str} target="_blank" rel="noreferrer">Ver mais no Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                    })}        
                </div>
            </div>

            <div className="backdrop" style={{display: (modalShow ? 'block' : 'none')}} onClick={() => setShowModal(false)}></div>
            <div className="modalContainer" style={{display: (modalShow ? 'block' : 'none')}}>
                <div className="modalContent" style={{backgroundImage: `url(${urlImage})`}}>
                        <div className="close" style={{display: (modalShow ? 'block' : 'none')}} onClick={() => setShowModal(false)}>
                            Close
                        </div>
                </div>
            </div>





            <Footer/>
        </div>
        


        

    )
}



export default Homepage;