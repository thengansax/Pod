const stickyMenu = () =>{
    var header = document.querySelector(".header")

    // roll tới content nào thì sticky ?
    var content = document.querySelector(".content1")

    var placeStart = content.offsetTop;
    //lấy tọa độ content đó
    

    //window.pageYOffset => tọa độ document theo trục Y hiện tại
 
    if(window.pageYOffset > placeStart)
    {
        //add class sticky zo header
        header.classList.add("sticky")
    }
    else{
        //remove 
        header.classList.remove("sticky")
    }
}

window.onload = () =>{
    window.onscroll = () =>{
        stickyMenu()
    }
}