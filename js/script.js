function menu() {
  let open = document.querySelector(".menu_open");
  let menu = document.getElementById("container_menu");
  open.addEventListener("click", () => {
    menu.style.display = "flex";
    menu.style.left = "0px";
    menu.style.animation = "move ease-in 400ms";
  });

  let close = document.querySelector(".close");

  close.addEventListener("click", () => {
    menu.style.display = "flex";
    menu.style.left = "-100%";
    menu.style.animation = "move ease-out 400ms";
  });

  let area_menu = document.querySelectorAll(".area_menu nav ul li a");

  area_menu.forEach((element) => {
    element.addEventListener("click", () => {
      menu.style.left = "-100%";
      menu.style.animation = "move ease-out 400ms";
    });
  });
}
menu();

const animations = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animation_scroll() {
  const area_window = window.innerHeight * 0.21 * 3.8;

  animations.forEach((element) => {
    let posicaoAtual = element.getBoundingClientRect().top;

    if (area_window > posicaoAtual) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

if (animations.length) {
  window.addEventListener("scroll", animation_scroll);
}

function faq() {

  const quest = document.querySelectorAll(".quest");
  const aswer = document.querySelectorAll(".aswer");

  for (let i = 0; i < quest.length; i++) {

    quest[i].addEventListener("click", () => {

      if (quest[i].classList.contains("close_faq")) {
        quest[i].classList.toggle("close_faq");
        aswer[i].classList.toggle("open_faq");

      } else {
        quest[i].classList.add("close_faq");
        aswer[i].classList.add("open_faq");

      }


    });

  }


}
faq();

const removeActive = () => {
  //Transformando o nodelist em array
  const btnActive = [...document.querySelectorAll(".plano_anual.selected")];
  //map para percorrer
  btnActive.map((el) => {
    el.classList.remove("selected");
  })

}

function planos() {

  let btns_planos = document.querySelectorAll(".plano_anual");
  let usabilidade = document.querySelectorAll(".area_usabilidade");


  btns_planos.forEach((element, key) => {

    element.addEventListener('click', () => {
      removeActive()
      element.classList.toggle("selected");

      switch (key) {
        case 0:
          usabilidade.forEach((element, key) => {
            switch (key) {
              case 0:
                usabilidade[0].classList.add('selected');
                break;

              case 1:
                usabilidade[1].classList.remove('selected');
                break;
            }
          });
          break;

        case 1:
          usabilidade.forEach((element, key) => {
            switch (key) {
              case 0:
                usabilidade[0].classList.remove('selected');
                break;

              case 1:
                usabilidade[1].classList.add('selected');
                break;
            }
          });
          break;
      }





    });

  });



}
planos();


window.addEventListener('scroll', () => {
  let scroll_top = document.querySelector('.area_up');
  scroll_top.classList.toggle('active', window.scrollY > 400);
});

function topScroll() {
  let scroll_top = document.querySelector('.area_up');
  scroll_top.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'

    });
  
  });
}
topScroll();