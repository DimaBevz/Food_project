 

    const postData = async (url, data) => {  

        // эта переменная - promise
        const res = await fetch(url, {    
            method: 'POST',   
            headers: {
                'Content-type': 'application/json',
            },
            body: data  
        });

        return await res.json(); // возвращается промис (операция проводится не сразу)
    }; 

    
    
    const getResource = async (url) => { 
        // делаем запрос

        const res = await fetch(url); 

        if (!res.ok) { // если res не "ок" 
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);  
        }

        return await res.json(); 
    }; 


export {postData};
export {getResource};