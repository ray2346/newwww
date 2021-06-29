        document.addEventListener('DOMContentLoaded', ()=>{


            const tabs = document.querySelectorAll('.tabheader__items'),
                    tabsContent = document.querySelectorAll('.tabcontent'),
                    tabsParent = document.querySelector('.tabheader__item');



            function  hideTabContent() {
                    tabsContent.forEach(item =>{
                        item.style.display='none';
                });
                    tabs.forEach(tab =>{
                        tab.classList.remove('tabheader__item_active')
                    });
            }
                function showTabContent(i=0) {
                tabsContent[i].style.display='block'
                     tabs[i].classList.add('tabheader__item_active')
    }





            hideTabContent();
            showTabContent();


        })