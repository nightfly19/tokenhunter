module.exports = function (pattern,input_string){
    var current = {search:'',
                   tail:input_string,
                   match:null},
    last = {},
    began_matching = false,
    stopped_matching = false,
    eof = false;
    while (!stopped_matching && current.tail.length > 0){
        last = current;
        current = {};
        current.search = last.search + last.tail[0];
        current.tail = last.tail.substring(1);
        current.match = pattern.exec(current.search);
        if(!began_matching && current.match){
            began_matching = true
        }
        if(began_matching && !current.match){
            stopped_matching = true
        }
        eof = (current.tail.length == 0);
    };
    if(stopped_matching){
        return {token:last.match[0], tail:last.tail}
    }
    else if (eof && began_matching){
        return {token:current.match[0], tail:current.tail}
    }
    else{
        return {error: 'no_match', tail: input_string};
    }
};
