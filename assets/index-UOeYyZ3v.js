(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function c(t){const n=document.createElement("div");n.classList.add("hidden","md:flex","md:flex-row","md:items-center","md:justify-center","md:gap-4"),n.innerHTML=`
    <a href="#">Servicios</a>
    <a href="#">Contacto</a>
    <a href="#">Galería</a>
  `,t.appendChild(n);const o=document.createElement("div");o.classList.add("hidden","md:flex","md:items-center","md:gap-5","md:flex-row"),o.innerHTML=`
    <a href="#" class="font-bold">Sign In</a>
    <button
      class="btn font-bold uppercase bg-destaque hover:bg-txt text-txt hover:text-destaque hover:shadow-2xl">Log
    In</button>
  `,t.appendChild(o);const s=document.createElement("div");s.classList.add("md:hidden","grid","grid-cols-1"),s.setAttribute("id","menu_icons"),s.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-8 md:hidden grid-place cursor-pointer hover:scale-105">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-8 hidden md:hidden grid-place cursor-pointer hover:scale-105">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  `,t.appendChild(s),s.addEventListener("click",i)}function i(){const t=document.querySelector("#menu_links");t.classList.toggle("hidden"),t.innerHTML="";const n=document.createElement("div");n.classList.add("flex","flex-col","items-center","w-full","gap-2","py-2","border-b-2","border-destaque"),n.innerHTML=`
    <a href="#">Servicios</a>
    <a href="#">Contacto</a>
    <a href="#">Galería</a>
  `,t.appendChild(n);const o=document.createElement("div");o.classList.add("flex","flex-col","items-center","w-full","gap-2","py-2"),o.innerHTML=`
    <a href="#" class="font-bold">Sign In</a>
    <button
      class="btn w-full font-bold uppercase bg-destaque hover:bg-txt text-txt hover:text-destaque hover:shadow-2xl">Log
    In</button>
  `,t.appendChild(o)}const l={imprimirMenu:c,showMenu:i};document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#header");l.imprimirMenu(t)});
