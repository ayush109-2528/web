function playLoader()
    {
        setTimeout(disableloader, 3000);
    }


    function disableloader()
    {
        document.querySelector(".anicontainer").style.display = "none";
        document.querySelector(".classcontainer").style.display = "block";
    }