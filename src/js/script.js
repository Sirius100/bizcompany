import output_console from './modul.js'
import conslog from './modul.js'

const menu = document.getElementsByClassName('menu')[0],
      menu_span = menu.children[0],
      nav = document.getElementsByTagName('nav')[0],
      header_row = document.getElementsByClassName('row');


/*
определить координаты элемента с помощью функций offsetLeft, offsetHeight, offsetWidth, offsetTop.
Чтобы меню выдвигалось ровно по сетке bootstrap нужно к координате offsetLeft элемента nav прибавлять offsetLeft элемента nav(только положительное число) плюс координату offsetLeft элемента header_nav
*/
menu.onclick = function () {
  // переменная visible_nav_position хранит вычисленную позицию на которую переместится элемент меню при вызове меню
  if(menu.classList == 'menu menu_active'){
    let visible_nav_position = 0 - (nav.offsetLeft + nav.offsetWidth);
    nav.style.transform = 'translateX(' + visible_nav_position + 'px)';
    nav.style.opacity = "0";
  }
  else{
    let visible_nav_position = Math.abs(nav.offsetLeft) + header_row[0].offsetLeft;
    nav.style.transform = 'translateX(' + visible_nav_position + 'px)';
    nav.style.opacity = "1";
  }
  menu.classList.toggle('menu_active');
  menu_span.classList.toggle('menu_active_span');
  output_console();
  conslog();
}
