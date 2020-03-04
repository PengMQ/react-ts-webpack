function adaptive() {
    const deviceWidth = document.documentElement.clientWidth | document.body.clientWidth;
    const standardWidth = 750;
    if(/iPhone|Android/i.test(navigator.userAgent)){
        document.documentElement.style.fontSize = (deviceWidth / standardWidth) * 10 + 'px';
    }else{
        document.documentElement.style.fontSize = 10 + 'px';
    }

}

export default adaptive;