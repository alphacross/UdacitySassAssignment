function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if (!Client.checkUrl(formText)) {
        alert('Please fill valid form!')
        return;
    }
    
    fetch('http://localhost:8081/test', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: formText })
    })
        .then(res => res.json())
        .then(function (res) {
            let results = document.getElementById('results');

            let result = document.createElement('div');

            let reply = document.createElement('div');
            reply.innerHTML = 'Agreement: ' + res.agreement + "<br/>" + 'Subjectivity:' + res.subjectivity + '<br>';
            result.appendChild(reply);

            let sentences = document.createElement('ul');
            let maxCount = res.sentence_list.length;

            if (maxCount > 10)
                maxCount = 10;
            for (let i = 0; i < maxCount; i++) {
                let child = document.createElement('li');
                child.innerText = res.sentence_list[i].text;
                sentences.appendChild(child);
            }

            result.appendChild(sentences);
            
            results.innerHTML = "";
            results.appendChild(result);
            results.appendChild(document.createElement('br'));
        })
}

export { handleSubmit }
