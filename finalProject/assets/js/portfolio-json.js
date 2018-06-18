


    function loadJson(){

        //Ajax요청
        var xhr = new XMLHttpRequest(); //요청하기위한 xhr객체 생성
        xhr.open('GET', 'assets/data/portfolioData.json' ,true); //비동기로 처리할 것을 요청
        xhr.send(null); //요청 전송
        xhr.onload = function(){
                if(xhr.status === 200) {
                     responseObject = JSON.parse(xhr.responseText);

                } else {
                    errorText = "Sorry! We could not load the timetable at the moment";
                    document.getElementById('content').innerHTML = errorText;
                }
        };


        /* portfolio content 추가 */
        function addContent(e){
            e.preventDefault();
            var portMenu = e.target.id;
            var newContent = '';
            for (var i = 0; i < responseObject[portMenu].length; i++){
                newContent += '<div class="container portfolio-section portContent">';
                newContent += '<p class="portTerm">' + responseObject[portMenu][i].term + '</p>';
                newContent += '<p><img class="portImg portfolio-popup" id= "'+[portMenu]+[i]+'" src="assets/images/portfolio-images/';
                newContent += responseObject[portMenu][i].img + '"></p>';
                newContent += '<p>' + responseObject[portMenu][i].desc+ '</p>';
                newContent += '<p>' + responseObject[portMenu][i].detail+ '</p>';
                newContent += '<p>' + responseObject[portMenu][i].score+ '</p>';
                newContent += '<p>' + responseObject[portMenu][i].sponsor+ '</p>';
                newContent += '</div>';
                newContent += '<hr class="hr">';
            }

            document.getElementById('content').innerHTML = newContent;


            /* Pop - Up  js */

            function overlay0() {
                el = document.getElementById("project0-desc");
                console.log(el);
                el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
            }

            function overlay1() {
                el = document.getElementById("project1-desc");
                console.log(el);
                    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
            }

            function overlay2(){
                el = document.getElementById("project2-desc");
                console.log(el);
                    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";

            }

            function closePopup(){
                el.style.visibility = "hidden";
            }

            var project0 = document.getElementById('project0');
            var project1 = document.getElementById('project1');
            var project2 = document.getElementById('project2');
            var closeBtn0 = document.getElementsByClassName('closeBtn')[0];
            var closeBtn1 = document.getElementsByClassName('closeBtn')[1];
            var closeBtn2 = document.getElementsByClassName('closeBtn')[2];
            project0.addEventListener('click',overlay0,false);
            project1.addEventListener('click',overlay1,false);
            project2.addEventListener('click',overlay2,false);
            closeBtn0.addEventListener('click',closePopup,false);
            closeBtn1.addEventListener('click',closePopup,false);
            closeBtn2.addEventListener('click',closePopup,false);
        }

        var menuList = document.getElementById('portfolio-2');
        menuList.addEventListener('click',addContent,false);

    }

    window.addEventListener('load',loadJson,false);

