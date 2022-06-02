import React from "react";
import "../../../../styles/home/main/aside/filters.css";
import FiltersIcon from "../../../../images/home/main/aside/filters/filters-icon.svg";
import DropDownIcon from "../../../../images/home/main/aside/filters/select-dropdown.svg";

const Filters = function(){
  return(
    <div className="aside__filters">
      <div className="aside__filters-header">
        <h1 className="aside__filters-title">Filters</h1>
        <img src={FiltersIcon}/>
      </div>
      <div className="aside__filters-body">
        <div className="aside__filters-item">
          <button id="aircraft-type-filter" className="aside__filters-button" 
          onClick={()=>{
            let e = document.getElementById('aircraft-type-filter');
            let img = document.getElementById('aircraft-type-filter-image');
            if(e.classList.contains('aside__filters-dropdown_shown')) {
              img.classList.toggle('dropdowned');
              e.nextSibling.classList.toggle('aside__filters-dropdown_shown');
            } 
            else {
              img.classList.toggle('dropdowned');
              e.nextSibling.classList.toggle('aside__filters-dropdown_shown');
            }}}
            >Aircraft Type
          <img id="aircraft-type-filter-image" src={DropDownIcon}/></button>
          <div id='filter-aircraft-dropdown' className="aside__filters-dropdown">
            <input onKeyUp={()=>{

            }} placeholder="Search" className="aside__filters-dropdown-search"/>
            <a>a</a>
            <a>b</a>
            <a>c</a>
            <a>d</a>
          </div>
        </div>
        <div className="aside__filters-item">
          <button id="price-filter" className="aside__filters-button"
          onClick={()=>{
            let e = document.getElementById('price-filter');
            let img = document.getElementById('price-filter-image');
            if(e.classList.contains('aside__filters-dropdown_shown')) {
              img.classList.toggle('dropdowned');
              e.nextSibling.classList.toggle('aside__filters-dropdown_shown');
            } 
            else {
              img.classList.toggle('dropdowned');
              e.nextSibling.classList.toggle('aside__filters-dropdown_shown');
            }}}>
            Price<img id="price-filter-image" src={DropDownIcon}/></button>
          <div className="aside__filters-dropdown">
            <input placeholder="Search" className="aside__filters-dropdown-search"/>
            <a>a</a>
            <a>b</a>
            <a>c</a>
            <a>d</a>
          </div>
        </div>
        <div className="aside__filters-item">
          <button id="passengers-filter" className="aside__filters-button" 
          onClick={()=>{
            let e = document.getElementById('passengers-filter');
            let img = document.getElementById('passengers-filter-image');
            if(e.classList.contains('aside__filters-dropdown_shown')) {
              img.classList.toggle('dropdowned');
              e.nextSibling.classList.toggle('aside__filters-dropdown_shown');
            } 
            else {
              img.classList.toggle('dropdowned');
              e.nextSibling.classList.toggle('aside__filters-dropdown_shown');
            }}}>
            Passengers<img id="passengers-filter-image" src={DropDownIcon}/></button>
          <div className="aside__filters-dropdown">
            <input placeholder="Search" className="aside__filters-dropdown-search"/>
            <a>a</a>
            <a>b</a>
            <a>c</a>
            <a>d</a>
          </div>
        </div>
        <div className="aside__filters-item">
          <button id="flight-distance-filter" className="aside__filters-button"
          onClick={()=>{
            let e = document.getElementById('flight-distance-filter');
            let img = document.getElementById('flight-distance-filter-image');
            if(e.classList.contains('aside__filters-dropdown_shown')) {
              img.classList.toggle('dropdowned');
              e.nextSibling.classList.toggle('aside__filters-dropdown_shown');
            } 
            else {
              img.classList.toggle('dropdowned');
              e.nextSibling.classList.toggle('aside__filters-dropdown_shown');
            }}}>
            Flight Distance<img id="flight-distance-filter-image" src={DropDownIcon}/></button>
          <div className="aside__filters-dropdown">
            <input placeholder="Search" className="aside__filters-dropdown-search"/>
            <a>a</a>
            <a>b</a>
            <a>c</a>
            <a>d</a>
          </div>
        </div>
        <div className="aside__filters-item">
          <button id="cruise-speed-filter" className="aside__filters-button"
          onClick={()=>{
            let e = document.getElementById('cruise-speed-filter');
            let img = document.getElementById('cruise-speed-filter-image');
            if(e.classList.contains('aside__filters-dropdown_shown')) {
              img.classList.toggle('dropdowned');
              e.nextSibling.classList.toggle('aside__filters-dropdown_shown');
            } 
            else {
              img.classList.toggle('dropdowned');
              e.nextSibling.classList.toggle('aside__filters-dropdown_shown');
            }}}>
            Cruise Speed<img id="cruise-speed-filter-image" src={DropDownIcon}/></button>
          <div className="aside__filters-dropdown">
            <input placeholder="Search" className="aside__filters-dropdown-search"/>
            <a>a</a>
            <a>b</a>
            <a>c</a>
            <a>d</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters