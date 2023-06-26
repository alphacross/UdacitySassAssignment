function checkUrl(url){
    if(url != ''){
        var regex = new RegExp(/www\.[a-zA-Z0-9-]*\.com/);
        return !!url.match(regex);
    }

    return false;
}

export { checkUrl }