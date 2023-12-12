const getCars = async () => {
    const headers = {
		'X-RapidAPI-Key': '28f7b07557msh3a09cf9814d06ddp1fd6aajsn4abb1b7863f1',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	};

    const res = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=audi', {
        headers: headers,
    });

    return res.json()
};

export default getCars;