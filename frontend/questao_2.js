function q2ContarFrequenciaPalavra(text) {
    const dict = {};
    
    text = text.toLowerCase().split(' ');
    
    for (const word of text) {
        if (dict[word]) {
            dict[word] += 1;
        } else {
            dict[word] = 1;
        }
    }
    
    
    return Object.fromEntries(
        Object.entries(dict).sort(([,a], [,b]) => b - a)
    );
}

console.log(q2ContarFrequenciaPalavra("Hello world hello"));
