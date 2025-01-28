var m=e=>{throw TypeError(e)};var v=(e,t,r)=>t.has(e)||m("Cannot "+r);var f=(e,t,r)=>(v(e,t,"read from private field"),r?r.call(e):t.get(e)),h=(e,t,r)=>t.has(e)?m("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);import{a as P,S as q,i as E}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const p=document.querySelector(".gallery");function g(e){return e.map(({webformatURL:t,largeImageURL:r,tags:i,likes:o,views:s,comments:c,downloads:T})=>` 
<li class="thumb"> 
    <a href="${r}" 
            class="gallery-item" > 
    <div class="photo-card"> 
            <img src="${t}" alt="${i}"  loading="lazy" 
            class="gallery-image"/> 
        <div class="info"> 
            <p class="info-item"> 
            <b>Likes</b>${o} 
            </p> 
            <p class="info-item"> 
            <b>Views</b>${s} 
            </p> 
            <p class="info-item"> 
            <b>Comments</b>${c} 
            </p> 
            <p class="info-item"> 
            <b>Downloads</b>${T} 
            </p> 
         </div> 
    </div> 
    </a> 
</li>`).join("")}function O(){p.innerHTML=""}function M(e){p.innerHTML=e}function R(e){p.insertAdjacentHTML("beforeend",g(e))}var l,u;class _{constructor(){h(this,l,"48337181-b337d2ddf37a3570ada3a2f89");h(this,u,"https://pixabay.com/api/");this.page=1,this.searchQuery="",this.per_page=15}async fetchPictures(){return(await P.get(f(this,u),{params:{key:f(this,l),q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,page:this.page,per_page:this.per_page}})).data}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(t){this.searchQuery=t}}l=new WeakMap,u=new WeakMap;const a={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),form:document.querySelector("#search-form"),readmore:document.querySelector(".readmore"),buttonToTop:document.querySelector(".scroll-to-top")},$=new q(".gallery a",{captionsData:"alt",captionDelay:250});a.form.addEventListener("submit",D);a.readmore.addEventListener("click",H);a.buttonToTop.addEventListener("click",j);const n=new _;async function D(e){e.preventDefault();const t=e.currentTarget.searchQuery.value.trim();if(n.query=t,n.query==="")return d("info","Sorry","Please, type what you want  to search!");x(t),n.resetPage(),O(),y();try{const{hits:r,totalHits:i}=await n.fetchPictures();N(r,i)}catch(r){L(r)}finally{w(),a.form.reset()}}async function H(){n.incrementPage(),y();try{const{hits:e,totalHits:t}=await n.fetchPictures();R(e),Q(),b(),n.page*n.per_page>=t&&S()}catch(e){L(e)}finally{w()}}function N(e,t){if(e.length===0)return a.readmore.classList.add("hidden"),d("error","No Results","No images found for your search!");const r=g(e);M(r),b(),t<=n.per_page?(a.readmore.classList.add("hidden"),S()):a.readmore.classList.remove("hidden")}function y(){a.loader.classList.remove("hidden")}function w(){a.loader.classList.add("hidden")}function b(){$.refresh("show.simplelightbox")}function Q(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}function j(){window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>k();function k(){window.scrollY>60?a.buttonToTop.classList.remove("js-transparent"):a.buttonToTop.classList.add("js-transparent")}function x(e){const t=new URL(window.location);t.searchParams.set("searchQuery",e),window.history.pushState({},"",t)}function d(e,t,r){E[e]({position:"topRight",title:t,message:r})}function L(e){console.log("Error fetching images:",e.message),d("error","Error","Something went wrong while fetching images. Please try again later!")}function S(){a.readmore.classList.add("hidden"),d("info","End of Search","You have reached the end of the results!")}
//# sourceMappingURL=index.js.map
